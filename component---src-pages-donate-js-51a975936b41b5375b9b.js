(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{336:function(e,t,r){"use strict";r.r(t);r(59),r(2);var n=r(375),o=r.n(n),i=(r(372),r(0)),a=r.n(i),c=(r(175),r(44),"https://js.stripe.com/v3"),s=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,u="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",l=null,p=function(e){return null!==l?l:l=new Promise((function(t,r){if("undefined"!=typeof window)if(window.Stripe&&e&&console.warn(u),window.Stripe)t(window.Stripe);else try{var n=function(){for(var e=document.querySelectorAll('script[src^="'.concat(c,'"]')),t=0;t<e.length;t++){var r=e[t];if(s.test(r.src))return r}return null}();n&&e?console.warn(u):n||(n=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",r=document.createElement("script");r.src="".concat(c).concat(t);var n=document.head||document.body;if(!n)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return n.appendChild(r),r}(e)),n.addEventListener("load",(function(){window.Stripe?t(window.Stripe):r(new Error("Stripe.js not available"))})),n.addEventListener("error",(function(){r(new Error("Failed to load Stripe.js"))}))}catch(o){return void r(o)}else t(null)}))},h=function(e,t,r){if(null===e)return null;var n=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.11.0",startTime:t})}(n,r),n},d=Promise.resolve().then((function(){return p(null)})),f=!1;d.catch((function(e){f||console.warn(e)}));var m=r(33),v=r(369),y=r(10);function g(e,t,r,n,o,i,a){try{var c=e[i](a),s=c.value}catch(u){return void r(u)}c.done?t(s):Promise.resolve(s).then(n,o)}var x=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];f=!0;var n=Date.now();return d.then((function(e){return h(e,t,n)}))}("pk_test_51IF7JME2xIv2JZiGS0bqQAFngU8y9lHwu0rZbb61OawS1uavaU97o1iFBoAhfUf1ej78ocOQ9YFLo0OPA2JdkUBP00Mh0hdI8E"),w={container:{display:"flex",flexDirection:"column",alignItems:"center",margin:"0 20px"},homepageLink:{"&:any-link":{color:"red"},fontFamily:y.a,marginBottom:40},h2:{fontFamily:y.b},headerLogoWrap:{margin:"80px 80px 20px 80px",alignSelf:"stretch"},donateButton:{display:"block",backgroundColor:"#50c878",color:"white",border:"none",fontFamily:y.a,margin:"7px 15px",padding:"7px 0",width:90,cursor:"pointer"},columns:{display:"flex",flexDirection:"row",justifyContent:"center",margin:"0 20px 30px","@media (max-width: 475px)":{flexDirection:"column"}},column:{}},F=Object(m.default)(w)((function(e){var t=e.classes,r=e.amount,n=e.stripeId,i=function(){var e,t=(e=o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x;case 2:return r=e.sent,e.next=5,r.redirectToCheckout({lineItems:[{price:n,quantity:1}],mode:"payment",successUrl:"https://example.com/success",cancelUrl:"https://example.com/cancel"});case 5:e.sent.error;case 7:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){g(i,n,o,a,c,"next",e)}function c(e){g(i,n,o,a,c,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}();return a.a.createElement("button",{role:"link",className:t.donateButton,onClick:i},"$"+r.toLocaleString())})),I=Object(m.default)(w)((function(e){var t=e.classes;return a.a.createElement(v.a,null,a.a.createElement("div",{className:t.container},a.a.createElement("h2",{className:t.h2},"Donate to New Leaf Restoration"),a.a.createElement("div",{className:t.columns},[[{amount:10,stripeId:"price_1IF7KFE2xIv2JZiG6LzrSRFy"},{amount:20,stripeId:"price_1IF7KFE2xIv2JZiG6LzrSRFy"},{amount:30,stripeId:"price_1IF7KFE2xIv2JZiG6LzrSRFy"},{amount:40,stripeId:"price_1IF7KFE2xIv2JZiG6LzrSRFy"},{amount:50,stripeId:"price_1IF7KFE2xIv2JZiG6LzrSRFy"},{amount:60,stripeId:"price_1IF7KFE2xIv2JZiG6LzrSRFy"},{amount:70,stripeId:"price_1IF7KFE2xIv2JZiG6LzrSRFy"},{amount:80,stripeId:"price_1IF7KFE2xIv2JZiG6LzrSRFy"},{amount:90,stripeId:"price_1IF7KFE2xIv2JZiG6LzrSRFy"}],[{amount:100,stripeId:"price_1IF7KFE2xIv2JZiG6LzrSRFy"},{amount:200,stripeId:"price_1IF7KFE2xIv2JZiG6LzrSRFy"},{amount:300,stripeId:"price_1IF7KFE2xIv2JZiG6LzrSRFy"},{amount:400,stripeId:"price_1IF7KFE2xIv2JZiG6LzrSRFy"},{amount:500,stripeId:"price_1IF7KFE2xIv2JZiG6LzrSRFy"},{amount:600,stripeId:"price_1IF7KFE2xIv2JZiG6LzrSRFy"},{amount:700,stripeId:"price_1IF7KFE2xIv2JZiG6LzrSRFy"},{amount:800,stripeId:"price_1IF7KFE2xIv2JZiG6LzrSRFy"},{amount:900,stripeId:"price_1IF7KFE2xIv2JZiG6LzrSRFy"}],[{amount:1e3,stripeId:"price_1IF7KFE2xIv2JZiG6LzrSRFy"},{amount:2e3,stripeId:"price_1IF7KFE2xIv2JZiG6LzrSRFy"},{amount:3e3,stripeId:"price_1IF7KFE2xIv2JZiG6LzrSRFy"},{amount:4e3,stripeId:"price_1IF7KFE2xIv2JZiG6LzrSRFy"},{amount:5e3,stripeId:"price_1IF7KFE2xIv2JZiG6LzrSRFy"},{amount:6e3,stripeId:"price_1IF7KFE2xIv2JZiG6LzrSRFy"},{amount:7e3,stripeId:"price_1IF7KFE2xIv2JZiG6LzrSRFy"},{amount:8e3,stripeId:"price_1IF7KFE2xIv2JZiG6LzrSRFy"},{amount:9e3,stripeId:"price_1IF7KFE2xIv2JZiG6LzrSRFy"}]].map((function(e){return console.log("column",e),a.a.createElement("div",{className:t.column},e.map((function(e){var t=e.amount,r=e.stripeId;return a.a.createElement(F,{amount:t,stripeId:r})})))}))),a.a.createElement("a",{href:"/",className:t.homepageLink},"Go back to the homepage")))}));t.default=I},369:function(e,t,r){"use strict";var n,o=r(0),i=r.n(o),a=(r(175),r(327)),c=(r(47),r(67),r(130),r(329),r(330),r(33)),s=(r(331),r(332),r(10)),u=(r(333),{headerLogoWrap:{margin:"80px 80px 20px 80px",alignSelf:"stretch"},headerLogo:{width:"100%",marginBottom:20},headerText:(n={marginTop:10,fontFamily:"Sansita One",color:"#4E852C"},n.marginTop=10,n.textShadow="0px 1px 5px white",n.fontSize=30,n.textAlign="center",n),"@media (max-width: 500px)":{headerText:{fontSize:20}},container:{display:"flex",flexDirection:"column",maxWidth:1280,justifyContent:"space-between",alignSelf:"center",minHeight:"100%",margin:"0 auto"},afterHero:{},columns:{display:"flex",flexDirection:"row"},column:{display:"flex",flexDirection:"column",width:"50%"},hero:{width:"100%",marginBottom:30},logosWrap:{display:"flex",flexDirection:"row",backgroundColor:"white",alignItems:"center",justifyContent:"space-evenly",padding:20,flexWrap:"wrap"},logoItem:{display:"block",maxHeight:152},footer:{alignSelf:"stretch",height:100,backgroundColor:s.d},hideWhenNarrow:{},hideWhenWide:{display:"none"},orderLastWhenNarrow:{},"@media (max-width: 725px)":{headerLogoWrap:{margin:20},hideWhenNarrow:{display:"none"},column:{width:"auto"},hideWhenWide:{display:"block"},orderLastWhenNarrow:{order:99}}});t.a=Object(c.default)(u)((function(e){var t=e.classes,r=e.children;return i.a.createElement("div",{className:t.container},i.a.createElement("div",null,i.a.createElement(a.a,{title:"New Leaf Restoration"}),i.a.createElement("div",{className:t.headerLogoWrap},i.a.createElement("img",{src:"/images/headerlogo.png",className:t.headerLogo}),i.a.createElement("p",{className:t.headerText},"Philipstown Community Gardens"),i.a.createElement("p",{className:t.headerText},"Garrison, NY")),i.a.createElement("img",{src:"/images/widePhoto.jpg",className:t.hero}),r),i.a.createElement("div",{className:t.footer}))}))},372:function(e,t,r){r(9),r(7),r(14),r(18),r(59),r(2),r(99),r(27),r(32),r(46),r(34),r(24);var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(e,t,r,n){var o=t&&t.prototype instanceof m?t:m,i=Object.create(o.prototype),a=new b(n||[]);return i._invoke=function(e,t,r){var n=l;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return J()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var s=u(e,t,r);if("normal"===s.type){if(n=r.done?d:p,s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}(e,r,a),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}e.wrap=s;var l="suspendedStart",p="suspendedYield",h="executing",d="completed",f={};function m(){}function v(){}function y(){}var g={};g[i]=function(){return this};var x=Object.getPrototypeOf,w=x&&x(x(G([])));w&&w!==r&&n.call(w,i)&&(g=w);var F=y.prototype=m.prototype=Object.create(g);function I(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function E(e){var t;this._invoke=function(r,o){function i(){return new Promise((function(t,i){!function t(r,o,i,a){var c=u(e[r],e,o);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?Promise.resolve(l.__await).then((function(e){t("next",e,i,a)}),(function(e){t("throw",e,i,a)})):Promise.resolve(l).then((function(e){s.value=e,i(s)}),(function(e){return t("throw",e,i,a)}))}a(c.arg)}(r,o,t,i)}))}return t=t?t.then(i,i):i()}}function L(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,L(e,r),"throw"===r.method))return f;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var o=u(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,f;var i=o.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,f):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function b(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function G(e){if(e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:J}}function J(){return{value:t,done:!0}}return v.prototype=F.constructor=y,y.constructor=v,y[c]=v.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c in e||(e[c]="GeneratorFunction")),e.prototype=Object.create(F),e},e.awrap=function(e){return{__await:e}},I(E.prototype),E.prototype[a]=function(){return this},e.AsyncIterator=E,e.async=function(t,r,n,o){var i=new E(s(t,r,n,o));return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},I(F),F[c]="Generator",F[i]=function(){return this},F.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=G,b.prototype={constructor:b,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(_),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),_(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:G(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),f}},e}(e.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},375:function(e,t,r){e.exports=r(372)}}]);
//# sourceMappingURL=component---src-pages-donate-js-51a975936b41b5375b9b.js.map