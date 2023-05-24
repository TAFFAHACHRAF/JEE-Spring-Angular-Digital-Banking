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
                    <a href="index.html" data-type="index-link">examen documentation</a>
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
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminModule-fe1e581106f144bd900266f7dae33730755504b815fce836a8a90d95c2a362de02b12b38caaee83e8d7dc352476a5bb9b224f900b33a5440d85af1e99e7c039a"' : 'data-target="#xs-components-links-module-AdminModule-fe1e581106f144bd900266f7dae33730755504b815fce836a8a90d95c2a362de02b12b38caaee83e8d7dc352476a5bb9b224f900b33a5440d85af1e99e7c039a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-fe1e581106f144bd900266f7dae33730755504b815fce836a8a90d95c2a362de02b12b38caaee83e8d7dc352476a5bb9b224f900b33a5440d85af1e99e7c039a"' :
                                            'id="xs-components-links-module-AdminModule-fe1e581106f144bd900266f7dae33730755504b815fce836a8a90d95c2a362de02b12b38caaee83e8d7dc352476a5bb9b224f900b33a5440d85af1e99e7c039a"' }>
                                            <li class="link">
                                                <a href="components/AheaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AheaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AlayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashbordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashbordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidemenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidemenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link" >AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-6746719ea2b0b744917895ec33028fe7cb44080b4d2f293e49e13935cfd03df5da6cdcb8dcdecf0be8b0447533a6982d911d8a0371b3beccd4ab16286a598ede"' : 'data-target="#xs-components-links-module-AppModule-6746719ea2b0b744917895ec33028fe7cb44080b4d2f293e49e13935cfd03df5da6cdcb8dcdecf0be8b0447533a6982d911d8a0371b3beccd4ab16286a598ede"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-6746719ea2b0b744917895ec33028fe7cb44080b4d2f293e49e13935cfd03df5da6cdcb8dcdecf0be8b0447533a6982d911d8a0371b3beccd4ab16286a598ede"' :
                                            'id="xs-components-links-module-AppModule-6746719ea2b0b744917895ec33028fe7cb44080b4d2f293e49e13935cfd03df5da6cdcb8dcdecf0be8b0447533a6982d911d8a0371b3beccd4ab16286a598ede"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-5cdac93b1efd7784e9e2c8913040d47c0041328922c751001a3ff5676eb02b302a954c707ec12894076647cb1d864c2214570877d5d9cd56949ec11053e3930d"' : 'data-target="#xs-components-links-module-AuthModule-5cdac93b1efd7784e9e2c8913040d47c0041328922c751001a3ff5676eb02b302a954c707ec12894076647cb1d864c2214570877d5d9cd56949ec11053e3930d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-5cdac93b1efd7784e9e2c8913040d47c0041328922c751001a3ff5676eb02b302a954c707ec12894076647cb1d864c2214570877d5d9cd56949ec11053e3930d"' :
                                            'id="xs-components-links-module-AuthModule-5cdac93b1efd7784e9e2c8913040d47c0041328922c751001a3ff5676eb02b302a954c707ec12894076647cb1d864c2214570877d5d9cd56949ec11053e3930d"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LogoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-5cdac93b1efd7784e9e2c8913040d47c0041328922c751001a3ff5676eb02b302a954c707ec12894076647cb1d864c2214570877d5d9cd56949ec11053e3930d"' : 'data-target="#xs-injectables-links-module-AuthModule-5cdac93b1efd7784e9e2c8913040d47c0041328922c751001a3ff5676eb02b302a954c707ec12894076647cb1d864c2214570877d5d9cd56949ec11053e3930d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-5cdac93b1efd7784e9e2c8913040d47c0041328922c751001a3ff5676eb02b302a954c707ec12894076647cb1d864c2214570877d5d9cd56949ec11053e3930d"' :
                                        'id="xs-injectables-links-module-AuthModule-5cdac93b1efd7784e9e2c8913040d47c0041328922c751001a3ff5676eb02b302a954c707ec12894076647cb1d864c2214570877d5d9cd56949ec11053e3930d"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProductModule.html" data-type="entity-link" >ProductModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProductModule-e61e5d1ffc89b46d9f88535df7670471e73fa9404e820cf5e512772b9c5967b1bdd8b6675f073fcfcb97e541755668fb0f0be9da7b69929b5859f4b86d236002"' : 'data-target="#xs-components-links-module-ProductModule-e61e5d1ffc89b46d9f88535df7670471e73fa9404e820cf5e512772b9c5967b1bdd8b6675f073fcfcb97e541755668fb0f0be9da7b69929b5859f4b86d236002"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductModule-e61e5d1ffc89b46d9f88535df7670471e73fa9404e820cf5e512772b9c5967b1bdd8b6675f073fcfcb97e541755668fb0f0be9da7b69929b5859f4b86d236002"' :
                                            'id="xs-components-links-module-ProductModule-e61e5d1ffc89b46d9f88535df7670471e73fa9404e820cf5e512772b9c5967b1bdd8b6675f073fcfcb97e541755668fb0f0be9da7b69929b5859f4b86d236002"' }>
                                            <li class="link">
                                                <a href="components/PAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PIndexComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductRoutingModule.html" data-type="entity-link" >ProductRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PublicModule.html" data-type="entity-link" >PublicModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PublicModule-8e5af2b7342304688264f8d5b970dab56a1b73c455d75a62b9180e288650ae4a036a5d8887dc6e6b56b8efa066b007d009ca4050e3db76f524c114db72e0422b"' : 'data-target="#xs-components-links-module-PublicModule-8e5af2b7342304688264f8d5b970dab56a1b73c455d75a62b9180e288650ae4a036a5d8887dc6e6b56b8efa066b007d009ca4050e3db76f524c114db72e0422b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PublicModule-8e5af2b7342304688264f8d5b970dab56a1b73c455d75a62b9180e288650ae4a036a5d8887dc6e6b56b8efa066b007d009ca4050e3db76f524c114db72e0422b"' :
                                            'id="xs-components-links-module-PublicModule-8e5af2b7342304688264f8d5b970dab56a1b73c455d75a62b9180e288650ae4a036a5d8887dc6e6b56b8efa066b007d009ca4050e3db76f524c114db72e0422b"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PheaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PheaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlayoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PublicRoutingModule.html" data-type="entity-link" >PublicRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TokenService.html" data-type="entity-link" >TokenService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/TokenInterceptor.html" data-type="entity-link" >TokenInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Category.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Credentials.html" data-type="entity-link" >Credentials</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProductData.html" data-type="entity-link" >ProductData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Token.html" data-type="entity-link" >Token</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});