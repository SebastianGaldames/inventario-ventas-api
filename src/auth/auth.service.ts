import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService, // Servicio de usuarios para consultar credenciales
    private readonly jwtService: JwtService, // Servicio para generar y verificar JWT
  ) {}

  /**
   * Realiza el login de un usuario.
   * Verifica las credenciales y retorna un JWT si son válidas.
   */
  async login(loginDto: LoginDto) {
    // Busca el usuario por email
    const user = await this.usersService.findByEmail(loginDto.email);

    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    // Compara la contraseña proporcionada con el hash almacenado
    const isPasswordValid = await bcrypt.compare(
      loginDto.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    // Payload del token JWT
    const payload = {
      sub: user._id, // Para MongoDB es _id
      email: user.email,
      roles: user.roles || [],
    };

    // Genera el token JWT
    const token = this.jwtService.sign(payload);

    // Retorna el token y los datos básicos del usuario
    return {
      access_token: token,
      user: {
        _id: user._id,
        email: user.email,
        name: user.name,
        roles: user.roles,
      },
    };
  }
}
