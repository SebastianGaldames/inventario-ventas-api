'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">inventario-ventas-api documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-f80a85999cdbc40e86ea5a9446348032d11ffe220eb20a10b64a3b50b6634928e21fd9009c0ba60ad6b198f327350dedc23272078124144d76ae83153a8a22a8"' : 'data-bs-target="#xs-controllers-links-module-AppModule-f80a85999cdbc40e86ea5a9446348032d11ffe220eb20a10b64a3b50b6634928e21fd9009c0ba60ad6b198f327350dedc23272078124144d76ae83153a8a22a8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-f80a85999cdbc40e86ea5a9446348032d11ffe220eb20a10b64a3b50b6634928e21fd9009c0ba60ad6b198f327350dedc23272078124144d76ae83153a8a22a8"' :
                                            'id="xs-controllers-links-module-AppModule-f80a85999cdbc40e86ea5a9446348032d11ffe220eb20a10b64a3b50b6634928e21fd9009c0ba60ad6b198f327350dedc23272078124144d76ae83153a8a22a8"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-f80a85999cdbc40e86ea5a9446348032d11ffe220eb20a10b64a3b50b6634928e21fd9009c0ba60ad6b198f327350dedc23272078124144d76ae83153a8a22a8"' : 'data-bs-target="#xs-injectables-links-module-AppModule-f80a85999cdbc40e86ea5a9446348032d11ffe220eb20a10b64a3b50b6634928e21fd9009c0ba60ad6b198f327350dedc23272078124144d76ae83153a8a22a8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-f80a85999cdbc40e86ea5a9446348032d11ffe220eb20a10b64a3b50b6634928e21fd9009c0ba60ad6b198f327350dedc23272078124144d76ae83153a8a22a8"' :
                                        'id="xs-injectables-links-module-AppModule-f80a85999cdbc40e86ea5a9446348032d11ffe220eb20a10b64a3b50b6634928e21fd9009c0ba60ad6b198f327350dedc23272078124144d76ae83153a8a22a8"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-84c34196dbba56a4368d516daf73994a5c49f427654f02a6e1ded94aab289a650a42c8e88531998441046b4f4a7cb6fc76e90be12873ed10f1cf40a0702e559c"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-84c34196dbba56a4368d516daf73994a5c49f427654f02a6e1ded94aab289a650a42c8e88531998441046b4f4a7cb6fc76e90be12873ed10f1cf40a0702e559c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-84c34196dbba56a4368d516daf73994a5c49f427654f02a6e1ded94aab289a650a42c8e88531998441046b4f4a7cb6fc76e90be12873ed10f1cf40a0702e559c"' :
                                            'id="xs-controllers-links-module-AuthModule-84c34196dbba56a4368d516daf73994a5c49f427654f02a6e1ded94aab289a650a42c8e88531998441046b4f4a7cb6fc76e90be12873ed10f1cf40a0702e559c"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-84c34196dbba56a4368d516daf73994a5c49f427654f02a6e1ded94aab289a650a42c8e88531998441046b4f4a7cb6fc76e90be12873ed10f1cf40a0702e559c"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-84c34196dbba56a4368d516daf73994a5c49f427654f02a6e1ded94aab289a650a42c8e88531998441046b4f4a7cb6fc76e90be12873ed10f1cf40a0702e559c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-84c34196dbba56a4368d516daf73994a5c49f427654f02a6e1ded94aab289a650a42c8e88531998441046b4f4a7cb6fc76e90be12873ed10f1cf40a0702e559c"' :
                                        'id="xs-injectables-links-module-AuthModule-84c34196dbba56a4368d516daf73994a5c49f427654f02a6e1ded94aab289a650a42c8e88531998441046b4f4a7cb6fc76e90be12873ed10f1cf40a0702e559c"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoriesModule.html" data-type="entity-link" >CategoriesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CategoriesModule-618fd9b6fdc9088dfe5f228623b872fe44fe60b2c740f4249d0267f80da82109d8e6cfcfefd167504f489ede68c2e72e88bdfddab2c7a6f0a09c6c7b8d1ecbb5"' : 'data-bs-target="#xs-controllers-links-module-CategoriesModule-618fd9b6fdc9088dfe5f228623b872fe44fe60b2c740f4249d0267f80da82109d8e6cfcfefd167504f489ede68c2e72e88bdfddab2c7a6f0a09c6c7b8d1ecbb5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CategoriesModule-618fd9b6fdc9088dfe5f228623b872fe44fe60b2c740f4249d0267f80da82109d8e6cfcfefd167504f489ede68c2e72e88bdfddab2c7a6f0a09c6c7b8d1ecbb5"' :
                                            'id="xs-controllers-links-module-CategoriesModule-618fd9b6fdc9088dfe5f228623b872fe44fe60b2c740f4249d0267f80da82109d8e6cfcfefd167504f489ede68c2e72e88bdfddab2c7a6f0a09c6c7b8d1ecbb5"' }>
                                            <li class="link">
                                                <a href="controllers/CategoriesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CategoriesModule-618fd9b6fdc9088dfe5f228623b872fe44fe60b2c740f4249d0267f80da82109d8e6cfcfefd167504f489ede68c2e72e88bdfddab2c7a6f0a09c6c7b8d1ecbb5"' : 'data-bs-target="#xs-injectables-links-module-CategoriesModule-618fd9b6fdc9088dfe5f228623b872fe44fe60b2c740f4249d0267f80da82109d8e6cfcfefd167504f489ede68c2e72e88bdfddab2c7a6f0a09c6c7b8d1ecbb5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CategoriesModule-618fd9b6fdc9088dfe5f228623b872fe44fe60b2c740f4249d0267f80da82109d8e6cfcfefd167504f489ede68c2e72e88bdfddab2c7a6f0a09c6c7b8d1ecbb5"' :
                                        'id="xs-injectables-links-module-CategoriesModule-618fd9b6fdc9088dfe5f228623b872fe44fe60b2c740f4249d0267f80da82109d8e6cfcfefd167504f489ede68c2e72e88bdfddab2c7a6f0a09c6c7b8d1ecbb5"' }>
                                        <li class="link">
                                            <a href="injectables/CategoriesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsModule.html" data-type="entity-link" >ProductsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ProductsModule-b754832af53d140aba6d4dfcb0f55b580f43c846cb5b03fab3d67596682fb823a5417bb983484167fd46a06cfe6296ab5b31ba024d22be3c563a289fd33ba9f0"' : 'data-bs-target="#xs-controllers-links-module-ProductsModule-b754832af53d140aba6d4dfcb0f55b580f43c846cb5b03fab3d67596682fb823a5417bb983484167fd46a06cfe6296ab5b31ba024d22be3c563a289fd33ba9f0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductsModule-b754832af53d140aba6d4dfcb0f55b580f43c846cb5b03fab3d67596682fb823a5417bb983484167fd46a06cfe6296ab5b31ba024d22be3c563a289fd33ba9f0"' :
                                            'id="xs-controllers-links-module-ProductsModule-b754832af53d140aba6d4dfcb0f55b580f43c846cb5b03fab3d67596682fb823a5417bb983484167fd46a06cfe6296ab5b31ba024d22be3c563a289fd33ba9f0"' }>
                                            <li class="link">
                                                <a href="controllers/ProductsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProductsModule-b754832af53d140aba6d4dfcb0f55b580f43c846cb5b03fab3d67596682fb823a5417bb983484167fd46a06cfe6296ab5b31ba024d22be3c563a289fd33ba9f0"' : 'data-bs-target="#xs-injectables-links-module-ProductsModule-b754832af53d140aba6d4dfcb0f55b580f43c846cb5b03fab3d67596682fb823a5417bb983484167fd46a06cfe6296ab5b31ba024d22be3c563a289fd33ba9f0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductsModule-b754832af53d140aba6d4dfcb0f55b580f43c846cb5b03fab3d67596682fb823a5417bb983484167fd46a06cfe6296ab5b31ba024d22be3c563a289fd33ba9f0"' :
                                        'id="xs-injectables-links-module-ProductsModule-b754832af53d140aba6d4dfcb0f55b580f43c846cb5b03fab3d67596682fb823a5417bb983484167fd46a06cfe6296ab5b31ba024d22be3c563a289fd33ba9f0"' }>
                                        <li class="link">
                                            <a href="injectables/ProductsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SalesModule.html" data-type="entity-link" >SalesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SalesModule-781222ba94e91785bb8eda2d461ad994bb9134933cc8c8ee17b686fb30b6eb2c91781a6b4d28a0c4feb4911b51cbf08ab7cba7f36b5eb49522e4251fa8ab56f2"' : 'data-bs-target="#xs-controllers-links-module-SalesModule-781222ba94e91785bb8eda2d461ad994bb9134933cc8c8ee17b686fb30b6eb2c91781a6b4d28a0c4feb4911b51cbf08ab7cba7f36b5eb49522e4251fa8ab56f2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SalesModule-781222ba94e91785bb8eda2d461ad994bb9134933cc8c8ee17b686fb30b6eb2c91781a6b4d28a0c4feb4911b51cbf08ab7cba7f36b5eb49522e4251fa8ab56f2"' :
                                            'id="xs-controllers-links-module-SalesModule-781222ba94e91785bb8eda2d461ad994bb9134933cc8c8ee17b686fb30b6eb2c91781a6b4d28a0c4feb4911b51cbf08ab7cba7f36b5eb49522e4251fa8ab56f2"' }>
                                            <li class="link">
                                                <a href="controllers/SalesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SalesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SalesModule-781222ba94e91785bb8eda2d461ad994bb9134933cc8c8ee17b686fb30b6eb2c91781a6b4d28a0c4feb4911b51cbf08ab7cba7f36b5eb49522e4251fa8ab56f2"' : 'data-bs-target="#xs-injectables-links-module-SalesModule-781222ba94e91785bb8eda2d461ad994bb9134933cc8c8ee17b686fb30b6eb2c91781a6b4d28a0c4feb4911b51cbf08ab7cba7f36b5eb49522e4251fa8ab56f2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SalesModule-781222ba94e91785bb8eda2d461ad994bb9134933cc8c8ee17b686fb30b6eb2c91781a6b4d28a0c4feb4911b51cbf08ab7cba7f36b5eb49522e4251fa8ab56f2"' :
                                        'id="xs-injectables-links-module-SalesModule-781222ba94e91785bb8eda2d461ad994bb9134933cc8c8ee17b686fb30b6eb2c91781a6b4d28a0c4feb4911b51cbf08ab7cba7f36b5eb49522e4251fa8ab56f2"' }>
                                        <li class="link">
                                            <a href="injectables/SalesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SalesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-daaa4103dac9406be968bb1e4fbd38877b25c97317446c9b7d3f35a80ac6a955a915230053c779759e53565eb327263d4aee8e3554d8416820ec176f887a810c"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-daaa4103dac9406be968bb1e4fbd38877b25c97317446c9b7d3f35a80ac6a955a915230053c779759e53565eb327263d4aee8e3554d8416820ec176f887a810c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-daaa4103dac9406be968bb1e4fbd38877b25c97317446c9b7d3f35a80ac6a955a915230053c779759e53565eb327263d4aee8e3554d8416820ec176f887a810c"' :
                                            'id="xs-controllers-links-module-UsersModule-daaa4103dac9406be968bb1e4fbd38877b25c97317446c9b7d3f35a80ac6a955a915230053c779759e53565eb327263d4aee8e3554d8416820ec176f887a810c"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-daaa4103dac9406be968bb1e4fbd38877b25c97317446c9b7d3f35a80ac6a955a915230053c779759e53565eb327263d4aee8e3554d8416820ec176f887a810c"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-daaa4103dac9406be968bb1e4fbd38877b25c97317446c9b7d3f35a80ac6a955a915230053c779759e53565eb327263d4aee8e3554d8416820ec176f887a810c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-daaa4103dac9406be968bb1e4fbd38877b25c97317446c9b7d3f35a80ac6a955a915230053c779759e53565eb327263d4aee8e3554d8416820ec176f887a810c"' :
                                        'id="xs-injectables-links-module-UsersModule-daaa4103dac9406be968bb1e4fbd38877b25c97317446c9b7d3f35a80ac6a955a915230053c779759e53565eb327263d4aee8e3554d8416820ec176f887a810c"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CategoriesController.html" data-type="entity-link" >CategoriesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProductsController.html" data-type="entity-link" >ProductsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SalesController.html" data-type="entity-link" >SalesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Category.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCategoryDto.html" data-type="entity-link" >CreateCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProductDto.html" data-type="entity-link" >CreateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSaleDto.html" data-type="entity-link" >CreateSaleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="classes/Sale.html" data-type="entity-link" >Sale</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoriesService.html" data-type="entity-link" >CategoriesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductsService.html" data-type="entity-link" >ProductsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SalesService.html" data-type="entity-link" >SalesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});