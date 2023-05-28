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
                    <a href="index.html" data-type="index-link">digital-bancking documentation</a>
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
                                <a href="modules/AccountModule.html" data-type="entity-link" >AccountModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AccountModule-7e27c2821b69a4edd97e0448bdb3b47d08a1f32e1539e3cc39835b5b8fc876a6eb5a2eafec5d5ca9bae8156a449947ba3189bf3b35710bc8ac2f9ff593728209"' : 'data-target="#xs-components-links-module-AccountModule-7e27c2821b69a4edd97e0448bdb3b47d08a1f32e1539e3cc39835b5b8fc876a6eb5a2eafec5d5ca9bae8156a449947ba3189bf3b35710bc8ac2f9ff593728209"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AccountModule-7e27c2821b69a4edd97e0448bdb3b47d08a1f32e1539e3cc39835b5b8fc876a6eb5a2eafec5d5ca9bae8156a449947ba3189bf3b35710bc8ac2f9ff593728209"' :
                                            'id="xs-components-links-module-AccountModule-7e27c2821b69a4edd97e0448bdb3b47d08a1f32e1539e3cc39835b5b8fc876a6eb5a2eafec5d5ca9bae8156a449947ba3189bf3b35710bc8ac2f9ff593728209"' }>
                                            <li class="link">
                                                <a href="components/AIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AIndexComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AccountRoutingModule.html" data-type="entity-link" >AccountRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminModule-bb6ea2cfef0e5bb0aa75425bf22916c328b2ec7e86596089264208e8b9b975155d139140e9a182e502443d77eddce39c7a8146f9bbc32fb82470584fe23e478f"' : 'data-target="#xs-components-links-module-AdminModule-bb6ea2cfef0e5bb0aa75425bf22916c328b2ec7e86596089264208e8b9b975155d139140e9a182e502443d77eddce39c7a8146f9bbc32fb82470584fe23e478f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-bb6ea2cfef0e5bb0aa75425bf22916c328b2ec7e86596089264208e8b9b975155d139140e9a182e502443d77eddce39c7a8146f9bbc32fb82470584fe23e478f"' :
                                            'id="xs-components-links-module-AdminModule-bb6ea2cfef0e5bb0aa75425bf22916c328b2ec7e86596089264208e8b9b975155d139140e9a182e502443d77eddce39c7a8146f9bbc32fb82470584fe23e478f"' }>
                                            <li class="link">
                                                <a href="components/AheaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AheaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AlayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
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
                                            'data-target="#components-links-module-AppModule-53b2119b3e5ebc9e356de700f9350c6385f4613cb4c583ad0a1d8265d8cafba3e294e79ead62bcb542200d31fb8561d2b744252d5c4871c9f393c734cf6733fc"' : 'data-target="#xs-components-links-module-AppModule-53b2119b3e5ebc9e356de700f9350c6385f4613cb4c583ad0a1d8265d8cafba3e294e79ead62bcb542200d31fb8561d2b744252d5c4871c9f393c734cf6733fc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-53b2119b3e5ebc9e356de700f9350c6385f4613cb4c583ad0a1d8265d8cafba3e294e79ead62bcb542200d31fb8561d2b744252d5c4871c9f393c734cf6733fc"' :
                                            'id="xs-components-links-module-AppModule-53b2119b3e5ebc9e356de700f9350c6385f4613cb4c583ad0a1d8265d8cafba3e294e79ead62bcb542200d31fb8561d2b744252d5c4871c9f393c734cf6733fc"' }>
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
                                            'data-target="#components-links-module-AuthModule-e13b332c4a981f893d9b3878eb13cd3d92490661030852a4a5c5d71b0e0e7ab631f346f29336cd78136313ba0cb780280131d1db808f98466320796bf34dc186"' : 'data-target="#xs-components-links-module-AuthModule-e13b332c4a981f893d9b3878eb13cd3d92490661030852a4a5c5d71b0e0e7ab631f346f29336cd78136313ba0cb780280131d1db808f98466320796bf34dc186"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-e13b332c4a981f893d9b3878eb13cd3d92490661030852a4a5c5d71b0e0e7ab631f346f29336cd78136313ba0cb780280131d1db808f98466320796bf34dc186"' :
                                            'id="xs-components-links-module-AuthModule-e13b332c4a981f893d9b3878eb13cd3d92490661030852a4a5c5d71b0e0e7ab631f346f29336cd78136313ba0cb780280131d1db808f98466320796bf34dc186"' }>
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
                                        'data-target="#injectables-links-module-AuthModule-e13b332c4a981f893d9b3878eb13cd3d92490661030852a4a5c5d71b0e0e7ab631f346f29336cd78136313ba0cb780280131d1db808f98466320796bf34dc186"' : 'data-target="#xs-injectables-links-module-AuthModule-e13b332c4a981f893d9b3878eb13cd3d92490661030852a4a5c5d71b0e0e7ab631f346f29336cd78136313ba0cb780280131d1db808f98466320796bf34dc186"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-e13b332c4a981f893d9b3878eb13cd3d92490661030852a4a5c5d71b0e0e7ab631f346f29336cd78136313ba0cb780280131d1db808f98466320796bf34dc186"' :
                                        'id="xs-injectables-links-module-AuthModule-e13b332c4a981f893d9b3878eb13cd3d92490661030852a4a5c5d71b0e0e7ab631f346f29336cd78136313ba0cb780280131d1db808f98466320796bf34dc186"' }>
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
                                <a href="modules/CustomerModule.html" data-type="entity-link" >CustomerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CustomerModule-63050b9a2b14725ad121ddde40e6464823a79d0f616bbcc0506494269e7a0dc57b2fe15320aa252f9d797d6071ad26f7369fab10339fa10be197800020f181ac"' : 'data-target="#xs-components-links-module-CustomerModule-63050b9a2b14725ad121ddde40e6464823a79d0f616bbcc0506494269e7a0dc57b2fe15320aa252f9d797d6071ad26f7369fab10339fa10be197800020f181ac"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CustomerModule-63050b9a2b14725ad121ddde40e6464823a79d0f616bbcc0506494269e7a0dc57b2fe15320aa252f9d797d6071ad26f7369fab10339fa10be197800020f181ac"' :
                                            'id="xs-components-links-module-CustomerModule-63050b9a2b14725ad121ddde40e6464823a79d0f616bbcc0506494269e7a0dc57b2fe15320aa252f9d797d6071ad26f7369fab10339fa10be197800020f181ac"' }>
                                            <li class="link">
                                                <a href="components/PAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PAddComponent</a>
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
                                <a href="modules/CustomerRoutingModule.html" data-type="entity-link" >CustomerRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PublicModule.html" data-type="entity-link" >PublicModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PublicModule-28b615d96db999db3c8ea5753bfa690a3b239d257fb983119625328cc7af754616a1826134c5286a102ce359860e67aab870f594a468aa00600ead256a6ec591"' : 'data-target="#xs-components-links-module-PublicModule-28b615d96db999db3c8ea5753bfa690a3b239d257fb983119625328cc7af754616a1826134c5286a102ce359860e67aab870f594a468aa00600ead256a6ec591"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PublicModule-28b615d96db999db3c8ea5753bfa690a3b239d257fb983119625328cc7af754616a1826134c5286a102ce359860e67aab870f594a468aa00600ead256a6ec591"' :
                                            'id="xs-components-links-module-PublicModule-28b615d96db999db3c8ea5753bfa690a3b239d257fb983119625328cc7af754616a1826134c5286a102ce359860e67aab870f594a468aa00600ead256a6ec591"' }>
                                            <li class="link">
                                                <a href="components/AboutUsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutUsComponent</a>
                                            </li>
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
                                    <a href="injectables/AccountService.html" data-type="entity-link" >AccountService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CustomerService.html" data-type="entity-link" >CustomerService</a>
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
                                <a href="interfaces/AccountDetails.html" data-type="entity-link" >AccountDetails</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AccountOperation.html" data-type="entity-link" >AccountOperation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Category.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Credentials.html" data-type="entity-link" >Credentials</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Customer.html" data-type="entity-link" >Customer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PageProduct.html" data-type="entity-link" >PageProduct</a>
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