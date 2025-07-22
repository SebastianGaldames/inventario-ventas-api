import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSaleDto } from './dto/create-sale.dto';
import { Sale } from '../schemas/sale.schema';

@Injectable()
export class SalesService {
  constructor(@InjectModel(Sale.name) private saleModel: Model<Sale>) {}

  /**
   * Crea una nueva venta.
   * @param createSaleDto Datos de la venta a registrar
   */
  async create(createSaleDto: CreateSaleDto): Promise<Sale> {
    const createdSale = new this.saleModel(createSaleDto);
    return createdSale.save();
  }

  /**
   * Busca una venta por su ID.
   * @param id ID de la venta
   */
  async findOne(id: string): Promise<Sale> {
    const sale = await this.saleModel.findById(id).exec();
    if (!sale) throw new NotFoundException('Sale not found');
    return sale;
  }
}
