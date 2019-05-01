(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"++eV":function(t,e,n){"use strict";n.d(e,"a",function(){return d});var r=n("mrSG"),o=n("t/Na"),i=n("F/XL"),s=n("67Y/"),a=n("9Z1F"),u=n("15JJ"),c=n("V1Ee"),l=n("t+5P"),p=n("CVWE"),f=n("4pP6"),d=function(t){function e(e,n){var r=t.call(this)||this;return r.http=e,r.route=n,r.defaultOptions=p.a,r}return Object(r.c)(e,t),e.setup=function(t){return[e,t]},e.prototype.authenticate=function(t){var e=this,n=this.getOption("login.method"),r=this.getActionEndpoint("login"),o=this.getOption("login.requireValidToken");return this.http.request(n,r,{body:t,observe:"response"}).pipe(Object(s.a)(function(n){if(e.getOption("login.alwaysFail"))throw e.createFailResponse(t);return n}),Object(s.a)(function(t){return new c.a(!0,t,e.getOption("login.redirect.success"),[],e.getOption("messages.getter")("login",t,e.options),e.createToken(e.getOption("token.getter")("login",t,e.options),o))}),Object(a.a)(function(t){return e.handleResponseError(t,"login")}))},e.prototype.register=function(t){var e=this,n="register",r=this.getOption(n+".method"),o=this.getActionEndpoint(n),i=this.getOption(n+".requireValidToken");return this.http.request(r,o,{body:t,observe:"response"}).pipe(Object(s.a)(function(r){if(e.getOption(n+".alwaysFail"))throw e.createFailResponse(t);return r}),Object(s.a)(function(t){return new c.a(!0,t,e.getOption(n+".redirect.success"),[],e.getOption("messages.getter")(n,t,e.options),e.createToken(e.getOption("token.getter")("login",t,e.options),i))}),Object(a.a)(function(t){return e.handleResponseError(t,n)}))},e.prototype.requestPassword=function(t){var e=this,n="requestPass",r=this.getOption(n+".method"),o=this.getActionEndpoint(n);return this.http.request(r,o,{body:t,observe:"response"}).pipe(Object(s.a)(function(t){if(e.getOption(n+".alwaysFail"))throw e.createFailResponse();return t}),Object(s.a)(function(t){return new c.a(!0,t,e.getOption(n+".redirect.success"),[],e.getOption("messages.getter")(n,t,e.options))}),Object(a.a)(function(t){return e.handleResponseError(t,n)}))},e.prototype.resetPassword=function(t){var e=this;void 0===t&&(t={});var n="resetPass",r=this.getOption(n+".method"),o=this.getActionEndpoint(n),i=this.getOption(n+".resetPasswordTokenKey");return t[i]=this.route.snapshot.queryParams[i],this.http.request(r,o,{body:t,observe:"response"}).pipe(Object(s.a)(function(t){if(e.getOption(n+".alwaysFail"))throw e.createFailResponse();return t}),Object(s.a)(function(t){return new c.a(!0,t,e.getOption(n+".redirect.success"),[],e.getOption("messages.getter")(n,t,e.options))}),Object(a.a)(function(t){return e.handleResponseError(t,n)}))},e.prototype.logout=function(){var t=this,e=this.getOption("logout.method"),n=this.getActionEndpoint("logout");return Object(i.a)({}).pipe(Object(u.a)(function(r){return n?t.http.request(e,n,{observe:"response"}):Object(i.a)(r)}),Object(s.a)(function(e){if(t.getOption("logout.alwaysFail"))throw t.createFailResponse();return e}),Object(s.a)(function(e){return new c.a(!0,e,t.getOption("logout.redirect.success"),[],t.getOption("messages.getter")("logout",e,t.options))}),Object(a.a)(function(e){return t.handleResponseError(e,"logout")}))},e.prototype.refreshToken=function(t){var e=this,n="refreshToken",r=this.getOption(n+".method"),o=this.getActionEndpoint(n),i=this.getOption(n+".requireValidToken");return this.http.request(r,o,{body:t,observe:"response"}).pipe(Object(s.a)(function(r){if(e.getOption(n+".alwaysFail"))throw e.createFailResponse(t);return r}),Object(s.a)(function(t){return new c.a(!0,t,e.getOption(n+".redirect.success"),[],e.getOption("messages.getter")(n,t,e.options),e.createToken(e.getOption("token.getter")(n,t,e.options),i))}),Object(a.a)(function(t){return e.handleResponseError(t,n)}))},e.prototype.handleResponseError=function(t,e){var n=[];return t instanceof o.f?n=this.getOption("errors.getter")(e,t,this.options):n.push(t instanceof f.a?t.message:"Something went wrong."),Object(i.a)(new c.a(!1,t,this.getOption(e+".redirect.failure"),n))},e}(l.a)},"0ICW":function(t,e,n){"use strict";n.d(e,"g",function(){return i}),n.d(e,"b",function(){return s}),n.d(e,"f",function(){return a}),n.d(e,"c",function(){return u}),n.d(e,"d",function(){return c}),n.d(e,"a",function(){return l}),n.d(e,"e",function(){return p});var r=n("CcnG"),o=[],i={strategies:[],forms:{login:{redirectDelay:500,strategy:"email",rememberMe:!0,showMessages:{success:!0,error:!0},socialLinks:o},register:{redirectDelay:500,strategy:"email",showMessages:{success:!0,error:!0},terms:!0,socialLinks:o},requestPassword:{redirectDelay:500,strategy:"email",showMessages:{success:!0,error:!0},socialLinks:o},resetPassword:{redirectDelay:500,strategy:"email",showMessages:{success:!0,error:!0},socialLinks:o},logout:{redirectDelay:500,strategy:"email"},validation:{password:{required:!0,minLength:4,maxLength:50},email:{required:!0},fullName:{required:!1,minLength:4,maxLength:50}}}},s=new r.q("Nebular Auth Options"),a=new r.q("Nebular User Auth Options"),u=new r.q("Nebular Auth Strategies"),c=new r.q("Nebular Auth Tokens"),l=new r.q("Nebular Simple Interceptor Header"),p=new r.q("Nebular Interceptor Filter")},"4Ssn":function(t,e,n){"use strict";var r=n("CcnG");n("S+eJ"),n.d(e,"d",function(){return o}),n.d(e,"h",function(){return i}),n.d(e,"a",function(){return s}),n.d(e,"e",function(){return a}),n.d(e,"c",function(){return u}),n.d(e,"g",function(){return c}),n.d(e,"b",function(){return l}),n.d(e,"f",function(){return p});var o=r.sb({encapsulation:2,styles:[],data:{}});function i(t){return r.Ob(0,[r.Db(null,0)],null,null)}var s=r.sb({encapsulation:2,styles:[],data:{}});function a(t){return r.Ob(0,[r.Db(null,0)],null,null)}var u=r.sb({encapsulation:2,styles:[],data:{}});function c(t){return r.Ob(0,[r.Db(null,0)],null,null)}var l=r.sb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}"]],data:{}});function p(t){return r.Ob(0,[r.Db(null,0),r.Db(null,1),r.Db(null,2),r.Db(null,3)],null,null)}},"4pP6":function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"f",function(){return l}),n.d(e,"e",function(){return f}),n.d(e,"b",function(){return d}),n.d(e,"d",function(){return g}),n.d(e,"c",function(){return y});var r=n("mrSG"),o=n("iVvT"),i=function(){function t(){this.payload=null}return t.prototype.getName=function(){return this.constructor.NAME},t.prototype.getPayload=function(){return this.payload},t}(),s=function(t){function e(e){var n=this.constructor,r=t.call(this,e)||this;return Object.setPrototypeOf(r,n.prototype),r}return Object(r.c)(e,t),e}(Error),a=function(t){function e(e){var n=this.constructor,r=t.call(this,e)||this;return Object.setPrototypeOf(r,n.prototype),r}return Object(r.c)(e,t),e}(Error),u=function(t){function e(e){var n=this.constructor,r=t.call(this,e)||this;return Object.setPrototypeOf(r,n.prototype),r}return Object(r.c)(e,t),e}(a),c=function(t){function e(e){var n=this.constructor,r=t.call(this,e)||this;return Object.setPrototypeOf(r,n.prototype),r}return Object(r.c)(e,t),e}(a);function l(t,e,n,r){return new t(e,n,r)}function p(t){if(0===t.length)throw new u("Cannot extract from an empty payload.");var e,n=t.split(".");if(3!==n.length)throw new c("The payload "+t+" is not valid JWT payload and must consist of three parts.");try{e=Object(o.c)(n[1])}catch(r){throw new c("The payload "+t+" is not valid JWT payload and cannot be parsed.")}if(!e)throw new c("The payload "+t+" is not valid JWT payload and cannot be decoded.");return JSON.parse(e)}var f=function(t){function e(e,n,r){var o=t.call(this)||this;o.token=e,o.ownerStrategyName=n,o.createdAt=r;try{o.parsePayload()}catch(i){if(!(i instanceof s))throw i}return o.createdAt=o.prepareCreatedAt(r),o}return Object(r.c)(e,t),e.prototype.parsePayload=function(){this.payload=null},e.prototype.prepareCreatedAt=function(t){return t||new Date},e.prototype.getCreatedAt=function(){return this.createdAt},e.prototype.getValue=function(){return this.token},e.prototype.getOwnerStrategyName=function(){return this.ownerStrategyName},e.prototype.isValid=function(){return!!this.getValue()},e.prototype.toString=function(){return this.token?this.token:""},e.NAME="nb:auth:simple:token",e}(i),d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(r.c)(e,t),e.prototype.prepareCreatedAt=function(e){var n=this.getPayload();return n&&n.iat?new Date(1e3*Number(n.iat)):t.prototype.prepareCreatedAt.call(this,e)},e.prototype.parsePayload=function(){if(!this.token)throw new s("Token not found. ");this.payload=p(this.token)},e.prototype.getTokenExpDate=function(){var t=this.getPayload();if(t&&!t.hasOwnProperty("exp"))return null;var e=new Date(0);return e.setUTCSeconds(t.exp),e},e.prototype.isValid=function(){return t.prototype.isValid.call(this)&&(!this.getTokenExpDate()||new Date<this.getTokenExpDate())},e.NAME="nb:auth:jwt:token",e}(f),h=function(t){if("string"==typeof t)try{return JSON.parse(t)}catch(e){}return t},g=function(t){function e(e,n,r){return void 0===e&&(e={}),t.call(this,h(e),n,r)||this}return Object(r.c)(e,t),e.prototype.getValue=function(){return this.token.access_token},e.prototype.getRefreshToken=function(){return this.token.refresh_token},e.prototype.setRefreshToken=function(t){this.token.refresh_token=t},e.prototype.parsePayload=function(){if(!this.token)throw new s("Token not found.");if(!Object.keys(this.token).length)throw new u("Cannot extract payload from an empty token.");this.payload=this.token},e.prototype.getType=function(){return this.token.token_type},e.prototype.isValid=function(){return t.prototype.isValid.call(this)&&(!this.getTokenExpDate()||new Date<this.getTokenExpDate())},e.prototype.getTokenExpDate=function(){return this.token.hasOwnProperty("expires_in")?new Date(this.createdAt.getTime()+1e3*Number(this.token.expires_in)):null},e.prototype.toString=function(){return JSON.stringify(this.token)},e.NAME="nb:auth:oauth2:token",e}(f),y=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(r.c)(e,t),e.prototype.parsePayload=function(){t.prototype.parsePayload.call(this),this.parseAccessTokenPayload()},e.prototype.parseAccessTokenPayload=function(){var t=this.getValue();if(!t)throw new s("access_token key not found.");this.accessTokenPayload=p(t)},e.prototype.getAccessTokenPayload=function(){return this.accessTokenPayload},e.prototype.prepareCreatedAt=function(e){var n=this.accessTokenPayload;return n&&n.iat?new Date(1e3*Number(n.iat)):t.prototype.prepareCreatedAt.call(this,e)},e.prototype.isValid=function(){return this.accessTokenPayload&&t.prototype.isValid.call(this)},e.prototype.getTokenExpDate=function(){if(this.accessTokenPayload&&this.accessTokenPayload.hasOwnProperty("exp")){var e=new Date(0);return e.setUTCSeconds(this.accessTokenPayload.exp),e}return t.prototype.getTokenExpDate.call(this)},e.NAME="nb:auth:oauth2:jwt:token",e}(g)},"6y2k":function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n("mrSG"),o=n("F/XL"),i=n("vubp"),s=n("t+5P"),a=n("V1Ee"),u=n("x1Qk"),c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.defaultOptions=u.a,e}return Object(r.c)(e,t),e.setup=function(t){return[e,t]},e.prototype.authenticate=function(t){return Object(o.a)(this.createDummyResult(t)).pipe(Object(i.a)(this.getOption("delay")))},e.prototype.register=function(t){return Object(o.a)(this.createDummyResult(t)).pipe(Object(i.a)(this.getOption("delay")))},e.prototype.requestPassword=function(t){return Object(o.a)(this.createDummyResult(t)).pipe(Object(i.a)(this.getOption("delay")))},e.prototype.resetPassword=function(t){return Object(o.a)(this.createDummyResult(t)).pipe(Object(i.a)(this.getOption("delay")))},e.prototype.logout=function(t){return Object(o.a)(this.createDummyResult(t)).pipe(Object(i.a)(this.getOption("delay")))},e.prototype.refreshToken=function(t){return Object(o.a)(this.createDummyResult(t)).pipe(Object(i.a)(this.getOption("delay")))},e.prototype.createDummyResult=function(t){if(this.getOption("alwaysFail"))return new a.a(!1,this.createFailResponse(t),null,["Something went wrong."]);try{var e=this.createToken("test token",!0);return new a.a(!0,this.createSuccessResponse(t),"/",[],["Successfully logged in."],e)}catch(n){return new a.a(!1,this.createFailResponse(t),null,[n.message])}},e}(s.a)},"89WS":function(t,e,n){"use strict";n.d(e,"c",function(){return r}),n.d(e,"b",function(){return o}),n.d(e,"a",function(){return i}),n.d(e,"d",function(){return c});var r,o,i,s=n("mrSG"),a=n("QEfX"),u=n("NUSx");!function(t){t.CODE="code",t.TOKEN="token"}(r||(r={})),function(t){t.AUTHORIZATION_CODE="authorization_code",t.PASSWORD="password",t.REFRESH_TOKEN="refresh_token"}(o||(o={})),function(t){t.NONE="none",t.BASIC="basic",t.REQUEST_BODY="request-body"}(i||(i={}));var c=new(function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.baseEndpoint="",e.clientId="",e.clientSecret="",e.clientAuthMethod=i.NONE,e.redirect={success:"/",failure:null},e.defaultErrors=["Something went wrong, please try again."],e.defaultMessages=["You have been successfully authenticated."],e.authorize={endpoint:"authorize",responseType:r.CODE},e.token={endpoint:"token",grantType:o.AUTHORIZATION_CODE,requireValidToken:!1,class:a.e},e.refresh={endpoint:"token",grantType:o.REFRESH_TOKEN},e}return Object(s.c)(e,t),e}(u.a))},Abgx:function(t,e,n){"use strict";n.d(e,"d",function(){return u}),n.d(e,"e",function(){return c}),n.d(e,"c",function(){return l}),n.d(e,"b",function(){return p}),n.d(e,"a",function(){return f});var r=n("CcnG"),o=n("QEfX"),i=n("Sbqb"),s=n("0ICW"),a=n("iVvT");function u(t,e){var n=[];return t.strategies.forEach(function(t){var r=t[1],o=e.get(t[0]);o.setOptions(r),n.push(o)}),n}function c(t){var e=[];return t.forEach(function(t){e.push(t.getOption("token.class"))}),e}function l(t){return Object(a.a)(s.g,t)}function p(t){return!0}var f=function(){function t(){}return t.forRoot=function(e){return{ngModule:t,providers:[{provide:s.f,useValue:e},{provide:s.b,useFactory:l,deps:[s.f]},{provide:s.c,useFactory:u,deps:[s.b,r.r]},{provide:s.d,useFactory:c,deps:[s.c]},{provide:o.a,useValue:o.h},{provide:s.a,useValue:"Authorization"},{provide:s.e,useValue:p},{provide:o.l,useClass:o.j},o.i,o.g,o.k,i.a,i.d,i.b]}},t}()},BDhN:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n("F/XL"),o=n("67Y/"),i=n("15JJ"),s=(n("Bc6B"),function(){function t(t,e){this.tokenService=t,this.strategies=e}return t.prototype.getToken=function(){return this.tokenService.get()},t.prototype.isAuthenticated=function(){return this.getToken().pipe(Object(o.a)(function(t){return t.isValid()}))},t.prototype.isAuthenticatedOrRefresh=function(){var t=this;return this.getToken().pipe(Object(i.a)(function(e){return e.getValue()&&!e.isValid()?t.refreshToken(e.getOwnerStrategyName(),e).pipe(Object(i.a)(function(e){return e.isSuccess()?t.isAuthenticated():Object(r.a)(!1)})):Object(r.a)(e.isValid())}))},t.prototype.onTokenChange=function(){return this.tokenService.tokenChange()},t.prototype.onAuthenticationChange=function(){return this.onTokenChange().pipe(Object(o.a)(function(t){return t.isValid()}))},t.prototype.authenticate=function(t,e){var n=this;return this.getStrategy(t).authenticate(e).pipe(Object(i.a)(function(t){return n.processResultToken(t)}))},t.prototype.register=function(t,e){var n=this;return this.getStrategy(t).register(e).pipe(Object(i.a)(function(t){return n.processResultToken(t)}))},t.prototype.logout=function(t){var e=this;return this.getStrategy(t).logout().pipe(Object(i.a)(function(t){return t.isSuccess()&&e.tokenService.clear().pipe(Object(o.a)(function(){return t})),Object(r.a)(t)}))},t.prototype.requestPassword=function(t,e){return this.getStrategy(t).requestPassword(e)},t.prototype.resetPassword=function(t,e){return this.getStrategy(t).resetPassword(e)},t.prototype.refreshToken=function(t,e){var n=this;return this.getStrategy(t).refreshToken(e).pipe(Object(i.a)(function(t){return n.processResultToken(t)}))},t.prototype.getStrategy=function(t){var e=this.strategies.find(function(e){return e.getName()===t});if(!e)throw new TypeError("There is no Auth Strategy registered under '"+t+"' name");return e},t.prototype.processResultToken=function(t){return t.isSuccess()&&t.getToken()?this.tokenService.set(t.getToken()).pipe(Object(o.a)(function(e){return t})):Object(r.a)(t)},t}())},Bc6B:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n("26FU"),o=n("F/XL"),i=n("VnD/"),s=n("S1nX"),a=(n("Y4k2"),function(){function t(t){this.tokenStorage=t,this.token$=new r.a(null),this.publishStoredToken()}return t.prototype.tokenChange=function(){return this.token$.pipe(Object(i.a)(function(t){return!!t}),Object(s.a)())},t.prototype.set=function(t){return this.tokenStorage.set(t),this.publishStoredToken(),Object(o.a)(null)},t.prototype.get=function(){var t=this.tokenStorage.get();return Object(o.a)(t)},t.prototype.clear=function(){return this.tokenStorage.clear(),this.publishStoredToken(),Object(o.a)(null)},t.prototype.publishStoredToken=function(){this.token$.next(this.tokenStorage.get())},t}())},CVWE:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n("mrSG"),o=n("QEfX"),i=n("NUSx"),s=n("iVvT"),a=new(function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.baseEndpoint="/api/auth/",e.login={alwaysFail:!1,endpoint:"login",method:"post",requireValidToken:!1,redirect:{success:"/",failure:null},defaultErrors:["Login/Email combination is not correct, please try again."],defaultMessages:["You have been successfully logged in."]},e.register={alwaysFail:!1,endpoint:"register",method:"post",requireValidToken:!1,redirect:{success:"/",failure:null},defaultErrors:["Something went wrong, please try again."],defaultMessages:["You have been successfully registered."]},e.requestPass={endpoint:"request-pass",method:"post",redirect:{success:"/",failure:null},defaultErrors:["Something went wrong, please try again."],defaultMessages:["Reset password instructions have been sent to your email."]},e.resetPass={endpoint:"reset-pass",method:"put",redirect:{success:"/",failure:null},resetPasswordTokenKey:"reset_password_token",defaultErrors:["Something went wrong, please try again."],defaultMessages:["Your password has been successfully changed."]},e.logout={alwaysFail:!1,endpoint:"logout",method:"delete",redirect:{success:"/",failure:null},defaultErrors:["Something went wrong, please try again."],defaultMessages:["You have been successfully logged out."]},e.refreshToken={endpoint:"refresh-token",method:"post",requireValidToken:!1,redirect:{success:null,failure:null},defaultErrors:["Something went wrong, please try again."],defaultMessages:["Your token has been successfully refreshed."]},e.token={class:o.h,key:"data.token",getter:function(t,e,n){return Object(s.b)(e.body,n.token.key)}},e.errors={key:"data.errors",getter:function(t,e,n){return Object(s.b)(e.error,n.errors.key,n[t].defaultErrors)}},e.messages={key:"data.messages",getter:function(t,e,n){return Object(s.b)(e.body,n.messages.key,n[t].defaultMessages)}},e}return Object(r.c)(e,t),e}(i.a))},KM9H:function(t,e,n){"use strict";var r=n("CcnG");n("vuB0"),n("4vXS"),n("7uv5"),n("MGne"),n("NfCQ"),n("kztb"),n("V+dw"),n("8bEz"),n("k6ER"),n.d(e,"a",function(){return o}),n.d(e,"e",function(){return i}),n.d(e,"d",function(){return s}),n.d(e,"h",function(){return a}),n.d(e,"c",function(){return u}),n.d(e,"g",function(){return c}),n.d(e,"b",function(){return l}),n.d(e,"f",function(){return p});var o=r.sb({encapsulation:2,styles:[],data:{}});function i(t){return r.Ob(0,[r.Db(null,0)],null,null)}var s=r.sb({encapsulation:2,styles:[],data:{}});function a(t){return r.Ob(0,[(t()(),r.ub(0,0,null,null,1,"nav",[],[[2,"fixed",null]],null,null,null,null)),r.Db(null,0)],null,function(t,e){t(e,0,0,e.component.fixedValue)})}var u=r.sb({encapsulation:2,styles:[],data:{}});function c(t){return r.Ob(0,[(t()(),r.ub(0,0,null,null,1,"nav",[],[[2,"fixed",null]],null,null,null,null)),r.Db(null,0)],null,function(t,e){t(e,0,0,e.component.fixedValue)})}var l=r.sb({encapsulation:0,styles:[["[_nghost-%COMP%]{-webkit-font-smoothing:antialiased}[dir=ltr]   [_nghost-%COMP%]{text-align:left}[dir=rtl]   [_nghost-%COMP%]{text-align:right}[_nghost-%COMP%]   .layout[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}[_nghost-%COMP%]     nb-layout-header{display:block}[_nghost-%COMP%]     nb-layout-header nav{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;display:-webkit-box;display:-ms-flexbox;display:flex}[_nghost-%COMP%]     nb-layout-header.fixed{position:fixed;left:0;right:0;z-index:1040}[_nghost-%COMP%]   .layout-container[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;flex:1;-ms-flex:1 1 auto;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}[dir=ltr]   [_nghost-%COMP%]   .layout-container[_ngcontent-%COMP%]     nb-sidebar.left{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}[dir=rtl]   [_nghost-%COMP%]   .layout-container[_ngcontent-%COMP%]     nb-sidebar.left{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}[dir=ltr]   [_nghost-%COMP%]   .layout-container[_ngcontent-%COMP%]     nb-sidebar.right{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}[dir=rtl]   [_nghost-%COMP%]   .layout-container[_ngcontent-%COMP%]     nb-sidebar.right{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}[_nghost-%COMP%]   .layout-container[_ngcontent-%COMP%]     nb-sidebar.end{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}[_nghost-%COMP%]   .layout-container[_ngcontent-%COMP%]     nb-sidebar .fixed{position:fixed;width:100%;overflow-y:auto;height:100%}[_nghost-%COMP%]   .layout-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;flex:1;-ms-flex:1 1 auto;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-width:0}[_nghost-%COMP%]   .layout-container[_ngcontent-%COMP%]   .content.center[_ngcontent-%COMP%]{max-width:100%;position:relative;margin-left:auto;margin-right:auto}[_nghost-%COMP%]   .layout-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;flex:1;-ms-flex:1 1 auto;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:100%}[_nghost-%COMP%]   .layout-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%]     nb-layout-column{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:1;-ms-flex:1 0;flex:1 0;min-width:0}[dir=ltr]   [_nghost-%COMP%]   .layout-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%]     nb-layout-column.left{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}[dir=rtl]   [_nghost-%COMP%]   .layout-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%]     nb-layout-column.left{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}[_nghost-%COMP%]   .layout-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%]     nb-layout-column.start{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}[_nghost-%COMP%]   .layout-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]     nb-layout-footer{display:block;margin-top:auto}[_nghost-%COMP%]   .layout-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]     nb-layout-footer nav{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;display:-webkit-box;display:-ms-flexbox;display:flex}"]],data:{}});function p(t){return r.Ob(0,[r.Kb(402653184,1,{veryTopRef:0}),r.Kb(402653184,2,{scrollableContainerRef:0}),(t()(),r.ub(2,0,[[2,0],["scrollableContainer",1]],null,9,"div",[["class","scrollable-container"]],null,[[null,"scroll"]],function(t,e,n){var r=!0;return"scroll"===e&&(r=!1!==t.component.onScroll(n)&&r),r},null,null)),(t()(),r.ub(3,0,null,null,8,"div",[["class","layout"]],null,null,null,null,null)),r.Db(null,0),(t()(),r.ub(5,0,null,null,6,"div",[["class","layout-container"]],null,null,null,null,null)),r.Db(null,1),(t()(),r.ub(7,0,null,null,4,"div",[["class","content"]],[[2,"center",null]],null,null,null,null)),r.Db(null,2),(t()(),r.ub(9,0,null,null,1,"div",[["class","columns"]],null,null,null,null,null)),r.Db(null,3),r.Db(null,4)],null,function(t,e){t(e,7,0,e.component.centerValue)})}},NUSx:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(){return function(){}}()},QEfX:function(t,e,n){"use strict";var r=n("BDhN"),o=n("V1Ee"),i=(n("VP2u"),n("15JJ"),n("4pP6")),s=n("Y4k2"),a=n("Bc6B"),u=n("znn7");n.d(e,"g",function(){return r.a}),n.d(e,"f",function(){return o.a}),n.d(e,"b",function(){return i.a}),n.d(e,"m",function(){return i.f}),n.d(e,"h",function(){return i.e}),n.d(e,"c",function(){return i.b}),n.d(e,"e",function(){return i.d}),n.d(e,"d",function(){return i.c}),n.d(e,"l",function(){return s.b}),n.d(e,"j",function(){return s.a}),n.d(e,"k",function(){return a.a}),n.d(e,"a",function(){return u.a}),n.d(e,"i",function(){return u.b})},Sbqb:function(t,e,n){"use strict";n("t+5P"),n("NUSx");var r=n("6y2k");n.d(e,"a",function(){return r.a}),n("x1Qk");var o=n("++eV");n.d(e,"d",function(){return o.a}),n("CVWE");var i=n("X/Iy");n.d(e,"b",function(){return i.a});var s=n("89WS");n.d(e,"c",function(){return s.c})},V1Ee:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(){function t(t,e,n,r,o,i){void 0===i&&(i=null),this.success=t,this.response=e,this.redirect=n,this.errors=[],this.messages=[],this.errors=this.errors.concat([r]),r instanceof Array&&(this.errors=r),this.messages=this.messages.concat([o]),o instanceof Array&&(this.messages=o),this.token=i}return t.prototype.getResponse=function(){return this.response},t.prototype.getToken=function(){return this.token},t.prototype.getRedirect=function(){return this.redirect},t.prototype.getErrors=function(){return this.errors.filter(function(t){return!!t})},t.prototype.getMessages=function(){return this.messages.filter(function(t){return!!t})},t.prototype.isSuccess=function(){return this.success},t.prototype.isFailure=function(){return!this.success},t}()},VP2u:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n("15JJ"),o=n("BDhN"),i=function(){function t(t,e){this.injector=t,this.filter=e}return t.prototype.intercept=function(t,e){var n=this;return this.filter(t)?e.handle(t):this.authService.isAuthenticatedOrRefresh().pipe(Object(r.a)(function(o){return o?n.authService.getToken().pipe(Object(r.a)(function(n){var r="Bearer "+n.getValue();return t=t.clone({setHeaders:{Authorization:r}}),e.handle(t)})):e.handle(t)}))},Object.defineProperty(t.prototype,"authService",{get:function(){return this.injector.get(o.a)},enumerable:!0,configurable:!0}),t}()},"X/Iy":function(t,e,n){"use strict";n.d(e,"a",function(){return d});var r=n("mrSG"),o=n("t/Na"),i=n("F/XL"),s=n("15JJ"),a=n("67Y/"),u=n("9Z1F"),c=n("t+5P"),l=n("QEfX"),p=n("89WS"),f=function(){return(f=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},d=function(t){function e(e,n,r){var o,c,f=t.call(this)||this;return f.http=e,f.route=n,f.window=r,f.redirectResultHandlers=((o={})[p.c.CODE]=function(){return Object(i.a)(f.route.snapshot.queryParams).pipe(Object(s.a)(function(t){return t.code?f.requestToken(t.code):Object(i.a)(new l.f(!1,t,f.getOption("redirect.failure"),f.getOption("defaultErrors"),[]))}))},o[p.c.TOKEN]=function(){var t=f.getOption("authorize.requireValidToken");return Object(i.a)(f.route.snapshot.fragment).pipe(Object(a.a)(function(t){return f.parseHashAsQueryParams(t)}),Object(a.a)(function(e){return e.error?new l.f(!1,e,f.getOption("redirect.failure"),f.getOption("defaultErrors"),[]):new l.f(!0,e,f.getOption("redirect.success"),[],f.getOption("defaultMessages"),f.createToken(e,t))}),Object(u.a)(function(t){var e=[];return e.push(t instanceof l.b?t.message:"Something went wrong."),Object(i.a)(new l.f(!1,t,f.getOption("redirect.failure"),e))}))},o),f.redirectResults=((c={})[p.c.CODE]=function(){return Object(i.a)(f.route.snapshot.queryParams).pipe(Object(a.a)(function(t){return!(!t||!t.code&&!t.error)}))},c[p.c.TOKEN]=function(){return Object(i.a)(f.route.snapshot.fragment).pipe(Object(a.a)(function(t){return f.parseHashAsQueryParams(t)}),Object(a.a)(function(t){return!(!t||!t.access_token&&!t.error)}))},c),f.defaultOptions=p.d,f}return Object(r.c)(e,t),e.setup=function(t){return[e,t]},Object.defineProperty(e.prototype,"responseType",{get:function(){return this.getOption("authorize.responseType")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"clientAuthMethod",{get:function(){return this.getOption("clientAuthMethod")},enumerable:!0,configurable:!0}),e.prototype.authenticate=function(t){var e=this;return this.getOption("token.grantType")===p.b.PASSWORD?this.passwordToken(t.email,t.password):this.isRedirectResult().pipe(Object(s.a)(function(t){return t?e.getAuthorizationResult():(e.authorizeRedirect(),Object(i.a)(new l.f(!0)))}))},e.prototype.getAuthorizationResult=function(){var t=this.redirectResultHandlers[this.responseType];if(t)return t.call(this);throw new Error("'"+this.responseType+"' responseType is not supported,\n                      only 'token' and 'code' are supported now")},e.prototype.refreshToken=function(t){var e=this,n=this.getActionEndpoint("refresh"),r=this.getOption("refresh.requireValidToken"),i=this.buildAuthHeader()||new o.h;return i=i.append("Content-Type","application/x-www-form-urlencoded"),this.http.post(n,this.buildRefreshRequestData(t),{headers:i}).pipe(Object(a.a)(function(n){return new l.f(!0,n,e.getOption("redirect.success"),[],e.getOption("defaultMessages"),e.createRefreshedToken(n,t,r))}),Object(u.a)(function(t){return e.handleResponseError(t)}))},e.prototype.passwordToken=function(t,e){var n=this,r=this.getActionEndpoint("token"),i=this.getOption("token.requireValidToken"),s=this.buildAuthHeader()||new o.h;return s=s.append("Content-Type","application/x-www-form-urlencoded"),this.http.post(r,this.buildPasswordRequestData(t,e),{headers:s}).pipe(Object(a.a)(function(t){return new l.f(!0,t,n.getOption("redirect.success"),[],n.getOption("defaultMessages"),n.createToken(t,i))}),Object(u.a)(function(t){return n.handleResponseError(t)}))},e.prototype.authorizeRedirect=function(){this.window.location.href=this.buildRedirectUrl()},e.prototype.isRedirectResult=function(){return this.redirectResults[this.responseType].call(this)},e.prototype.requestToken=function(t){var e=this,n=this.getActionEndpoint("token"),r=this.getOption("token.requireValidToken"),i=this.buildAuthHeader()||new o.h;return i=i.append("Content-Type","application/x-www-form-urlencoded"),this.http.post(n,this.buildCodeRequestData(t),{headers:i}).pipe(Object(a.a)(function(t){return new l.f(!0,t,e.getOption("redirect.success"),[],e.getOption("defaultMessages"),e.createToken(t,r))}),Object(u.a)(function(t){return e.handleResponseError(t)}))},e.prototype.buildCodeRequestData=function(t){var e={grant_type:this.getOption("token.grantType"),code:t,redirect_uri:this.getOption("token.redirectUri"),client_id:this.getOption("clientId")};return this.urlEncodeParameters(this.cleanParams(this.addCredentialsToParams(e)))},e.prototype.buildRefreshRequestData=function(t){var e={grant_type:this.getOption("refresh.grantType"),refresh_token:t.getRefreshToken(),scope:this.getOption("refresh.scope")};return this.urlEncodeParameters(this.cleanParams(this.addCredentialsToParams(e)))},e.prototype.buildPasswordRequestData=function(t,e){var n={grant_type:this.getOption("token.grantType"),username:t,password:e,scope:this.getOption("token.scope")};return this.urlEncodeParameters(this.cleanParams(this.addCredentialsToParams(n)))},e.prototype.buildAuthHeader=function(){if(this.clientAuthMethod===p.a.BASIC){if(this.getOption("clientId")&&this.getOption("clientSecret"))return new o.h({Authorization:"Basic "+btoa(this.getOption("clientId")+":"+this.getOption("clientSecret"))});throw Error("For basic client authentication method, please provide both clientId & clientSecret.")}},e.prototype.cleanParams=function(t){return Object.entries(t).forEach(function(e){return!e[1]&&delete t[e[0]]}),t},e.prototype.addCredentialsToParams=function(t){if(this.clientAuthMethod===p.a.REQUEST_BODY){if(this.getOption("clientId")&&this.getOption("clientSecret"))return f({},t,{client_id:this.getOption("clientId"),client_secret:this.getOption("clientSecret")});throw Error("For request body client authentication method, please provide both clientId & clientSecret.")}return t},e.prototype.handleResponseError=function(t){var e=[];return t instanceof o.f?t.error.error_description?e.push(t.error.error_description):e=this.getOption("defaultErrors"):e.push(t instanceof l.b?t.message:"Something went wrong."),Object(i.a)(new l.f(!1,t,this.getOption("redirect.failure"),e,[]))},e.prototype.buildRedirectUrl=function(){var t=f({response_type:this.getOption("authorize.responseType"),client_id:this.getOption("clientId"),redirect_uri:this.getOption("authorize.redirectUri"),scope:this.getOption("authorize.scope"),state:this.getOption("authorize.state")},this.getOption("authorize.params"));return this.getActionEndpoint("authorize")+"?"+this.urlEncodeParameters(this.cleanParams(t))},e.prototype.parseHashAsQueryParams=function(t){return t?t.split("&").reduce(function(t,e){var n=e.split("=");return t[n[0]]=decodeURIComponent(n[1]),t},{}):{}},e.prototype.urlEncodeParameters=function(t){return Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&")},e.prototype.createRefreshedToken=function(t,e,n){var r=this.createToken(t,n);return!r.getRefreshToken()&&e.getRefreshToken()&&r.setRefreshToken(e.getRefreshToken()),r},e.prototype.register=function(t){throw new Error("`register` is not supported by `NbOAuth2AuthStrategy`, use `authenticate`.")},e.prototype.requestPassword=function(t){throw new Error("`requestPassword` is not supported by `NbOAuth2AuthStrategy`, use `authenticate`.")},e.prototype.resetPassword=function(t){throw void 0===t&&(t={}),new Error("`resetPassword` is not supported by `NbOAuth2AuthStrategy`, use `authenticate`.")},e.prototype.logout=function(){return Object(i.a)(new l.f(!0))},e}(c.a)},Y4k2:function(t,e,n){"use strict";n.d(e,"b",function(){return o}),n.d(e,"a",function(){return i});var r=n("mrSG"),o=(n("znn7"),function(){return function(){}}()),i=function(t){function e(e){var n=t.call(this)||this;return n.parceler=e,n.key="auth_app_token",n}return Object(r.c)(e,t),e.prototype.get=function(){var t=localStorage.getItem(this.key);return this.parceler.unwrap(t)},e.prototype.set=function(t){var e=this.parceler.wrap(t);localStorage.setItem(this.key,e)},e.prototype.clear=function(){localStorage.removeItem(this.key)},e}(o)},iVvT:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return s}),n.d(e,"c",function(){return a});var r=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(arguments.length<1||"object"!=typeof arguments[0])return!1;if(arguments.length<2)return arguments[0];var n,s,a=arguments[0];return Array.prototype.slice.call(arguments,1).forEach(function(t){"object"!=typeof t||Array.isArray(t)||Object.keys(t).forEach(function(e){return s=a[e],(n=t[e])===a?void 0:"object"!=typeof n||null===n?void(a[e]=n):Array.isArray(n)?void(a[e]=function t(e){var n=[];return e.forEach(function(e,s){n[s]="object"==typeof e&&null!==e?Array.isArray(e)?t(e):o(e)?i(e):r({},e):e}),n}(n)):o(n)?void(a[e]=i(n)):"object"!=typeof s||null===s||Array.isArray(s)?void(a[e]=r({},n)):void(a[e]=r(s,n))})}),a};function o(t){return t instanceof Date||t instanceof RegExp}function i(t){if(t instanceof Date)return new Date(t.getTime());if(t instanceof RegExp)return new RegExp(t);throw new Error("cloneSpecificValue: Unexpected situation")}function s(t,e,n){void 0===t&&(t={});var o=e.split("."),i=r({},t||{});return o.forEach(function(t){i=i&&void 0!==i[t]?i[t]:void 0}),void 0===i?n:i}function a(t){var e=t.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw new Error("Illegal base64url string!")}return decodeURIComponent(Array.prototype.map.call(function(t){var e="";if((t=String(t).replace(/=+$/,"")).length%4==1)throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");for(var n=0,r=void 0,o=void 0,i=0;o=t.charAt(i++);~o&&(r=n%4?64*r+o:o,n++%4)?e+=String.fromCharCode(255&r>>(-2*n&6)):0)o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);return e}(e),function(t){return"%"+("00"+t.charCodeAt(0).toString(16)).slice(-2)}).join(""))}},"t+5P":function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n("t/Na"),o=n("iVvT"),i=n("4pP6"),s=function(){function t(){}return t.prototype.setOptions=function(t){this.options=Object(o.a)({},this.defaultOptions,t)},t.prototype.getOption=function(t){return Object(o.b)(this.options,t,null)},t.prototype.createToken=function(t,e){var n=Object(i.f)(this.getOption("token.class"),t,this.getName());if(e&&!n.isValid())throw new i.a("Token is empty or invalid.");return n},t.prototype.getName=function(){return this.getOption("name")},t.prototype.createFailResponse=function(t){return new r.i({body:{},status:401})},t.prototype.createSuccessResponse=function(t){return new r.i({body:{},status:200})},t.prototype.getActionEndpoint=function(t){var e=this.getOption(t+".endpoint"),n=this.getOption("baseEndpoint");return e?n+e:""},t}()},x1Qk:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n("mrSG"),o=n("NUSx"),i=n("QEfX"),s=new(function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.token={class:i.h},e.delay=1e3,e.alwaysFail=!1,e}return Object(r.c)(e,t),e}(o.a))},znn7:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s});var r=n("CcnG"),o=n("4pP6"),i=new r.q("Nebular Auth Options"),s=function(){function t(t,e){this.fallbackClass=t,this.tokenClasses=e}return t.prototype.wrap=function(t){return JSON.stringify({name:t.getName(),ownerStrategyName:t.getOwnerStrategyName(),createdAt:t.getCreatedAt().getTime(),value:t.toString()})},t.prototype.unwrap=function(t){var e=this.fallbackClass,n="",r="",i=null,s=this.parseTokenPack(t);return s&&(e=this.getClassByName(s.name)||this.fallbackClass,n=s.value,r=s.ownerStrategyName,i=new Date(Number(s.createdAt))),Object(o.f)(e,n,r,i)},t.prototype.getClassByName=function(t){return this.tokenClasses.find(function(e){return e.NAME===t})},t.prototype.parseTokenPack=function(t){try{return JSON.parse(t)}catch(e){}return null},t}()}}]);