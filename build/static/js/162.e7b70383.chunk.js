(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[162],{1182:function(e,t,a){"use strict";a.r(t);var r=a(92),n=a(25),o=a(0),c=a.n(o),l=a(791),i=a.n(l),u=a(22),s=a(2),m=a(115),d=a(619),p=a.n(d),h=a(204),f=a(44),v=a(667),g=a(678),y=a(645),E=a(201),b=a(72),w=a(200),N=a(617),O=a(59),x=a.n(O);function j(){j=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r=Object.defineProperty||function(e,t,a){e[t]=a.value},n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",c=n.asyncIterator||"@@asyncIterator",l=n.toStringTag||"@@toStringTag";function i(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(L){i=function(e,t,a){return e[t]=a}}function u(e,t,a,n){var o=t&&t.prototype instanceof d?t:d,c=Object.create(o.prototype),l=new k(n||[]);return r(c,"_invoke",{value:w(e,a,l)}),c}function s(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(L){return{type:"throw",arg:L}}}e.wrap=u;var m={};function d(){}function p(){}function h(){}var f={};i(f,o,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(_([])));g&&g!==t&&a.call(g,o)&&(f=g);var y=h.prototype=d.prototype=Object.create(f);function E(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var n;r(this,"_invoke",{value:function(r,o){function c(){return new t((function(n,c){!function r(n,o,c,l){var i=s(e[n],e,o);if("throw"!==i.type){var u=i.arg,m=u.value;return m&&"object"==typeof m&&a.call(m,"__await")?t.resolve(m.__await).then((function(e){r("next",e,c,l)}),(function(e){r("throw",e,c,l)})):t.resolve(m).then((function(e){u.value=e,c(u)}),(function(e){return r("throw",e,c,l)}))}l(i.arg)}(r,o,n,c)}))}return n=n?n.then(c,c):c()}})}function w(e,t,a){var r="suspendedStart";return function(n,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw o;return S()}for(a.method=n,a.arg=o;;){var c=a.delegate;if(c){var l=N(c,a);if(l){if(l===m)continue;return l}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var i=s(e,t,a);if("normal"===i.type){if(r=a.done?"completed":"suspendedYield",i.arg===m)continue;return{value:i.arg,done:a.done}}"throw"===i.type&&(r="completed",a.method="throw",a.arg=i.arg)}}}function N(e,t){var a=t.method,r=e.iterator[a];if(void 0===r)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),m;var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,m;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function _(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=h,r(y,"constructor",{value:h,configurable:!0}),r(h,"constructor",{value:p,configurable:!0}),p.displayName=i(h,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,i(e,l,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},E(b.prototype),i(b.prototype,c,(function(){return this})),e.AsyncIterator=b,e.async=function(t,a,r,n,o){void 0===o&&(o=Promise);var c=new b(u(t,a,r,n),o);return e.isGeneratorFunction(a)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},E(y),i(y,l,"Generator"),i(y,o,(function(){return this})),i(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),a=[];for(var r in t)a.push(r);return a.reverse(),function e(){for(;a.length;){var r=a.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=_,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return c.type="throw",c.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=a.call(o,"catchLoc"),i=a.call(o,"finallyLoc");if(l&&i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),x(a),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;x(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:_(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),m}},e}t.default=Object(f.connect)((function(e){return{cartItems:e.cartData,currency:e.currencyData}}),(function(e){return{addToCart:function(t,a,r){e(Object(b.e)(t,a,r))},decreaseQuantity:function(t,a){e(Object(b.f)(t,a))},deleteFromCart:function(t,a){e(Object(b.h)(t,a))},deleteAllFromCart:function(t){e(Object(b.g)(t))}}}))((function(e){e.props;var t,a,l=e.location,d=(e.cartItems,e.currency),f=(e.decreaseQuantity,e.addToCart,e.deleteFromCart,e.deleteAllFromCart,Object(o.useState)(1)),b=(Object(n.a)(f,1)[0],Object(m.useToasts)().addToast,Object(u.g)()),O=l.pathname,k=0,_=0,S=Object(o.useState)([]),L=Object(n.a)(S,2),C=L[0],I=L[1],T=Object(o.useState)([]),F=Object(n.a)(T,2),G=F[0],P=F[1],q=Object(o.useState)([]),R=Object(n.a)(q,2),A=R[0],z=R[1],B=Object(o.useState)([]),D=Object(n.a)(B,2),Y=D[0],Q=D[1],J=function(){var e=Object(r.a)(j().mark((function e(){var t,a,r,n,o;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get({headers:{"auth-token":localStorage.getItem("auth-token")}});case 2:for(t=e.sent,a=t.data,r=a.data,console.log(r),n=[],o=0;o<r.length;o++)n.push(r[o]._id);P(n),console.log(n),I(r),console.log(r),z(a.total);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(r.a)(j().mark((function e(){var t,a,r;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get({headers:{"auth-token":localStorage.getItem("auth-token")}});case 2:t=e.sent,a=t.data,r=a.data,console.log(r),Q(r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){localStorage.getItem("auth-token")&&(J(),U())}),[]);var X=function(){var e=Object(r.a)(j().mark((function e(t){var a;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.prev=1,e.next=4,x.a.get({headers:{"auth-token":localStorage.getItem("auth-token")}});case 4:(a=e.sent)&&(console.log(a),J()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(r.a)(j().mark((function e(){var t;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("request remove all"),e.prev=1,e.next=4,x.a.get({headers:{"auth-token":localStorage.getItem("auth-token")}});case 4:(t=e.sent)&&(window.location.reload(),console.log(t),J()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),K=Object(o.useState)("rzp_live_dX052iXb0Is1yu"),M=Object(n.a)(K,2),V=M[0],W=(M[1],i()()),Z=Object(o.useState)(""),$=Object(n.a)(Z,2),ee=($[0],$[1]),te=Object(o.useState)(""),ae=Object(n.a)(te,2),re=ae[0],ne=ae[1];Object(o.useEffect)((function(){console.log("useEffect"),x.a.get({headers:{"auth-token":localStorage.getItem("auth-token")}}).then((function(e){console.log(e.data.data),ne(e.data.data)})).catch((function(e){console.log(e.response)})),x.a.get().then((function(e){var t;console.log(e.data),ee(null===(t=e.data)||void 0===t?void 0:t.order.id)})).catch((function(e){console.log(e.response)}))}),[]);var oe=Object(o.useCallback)(function(){var e=Object(r.a)(j().mark((function e(t,a,r,n,o,c){var l;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("COD"!=c){e.next=2;break}return e.abrupt("return");case 2:(l=new W({key:V,amount:t,currency:"INR",name:"YOUR ORDER",description:a,handler:function(e){var t={cart:G,payment_type:c,status:"Pending",shipping_address:Y._id,payment_id:e.payment_id};console.log(e),x.a.post("http://13.235.180.192/api/admin/addordersample",t,{headers:{"auth-token":localStorage.getItem("auth-token")}}).then((function(e){console.log("pranay",e)})).catch((function(e){console.log(e.response)}))},prefill:{name:r,email:n,contact:o},notes:{address:"BuyNaa Corporate Office"},theme:{color:"#3399cc"}})).on("payment.failure",(function(e){alert("Remains on same page")})),l.open();case 6:case"end":return e.stop()}}),e)})));return function(t,a,r,n,o,c){return e.apply(this,arguments)}}(),[W]);return c.a.createElement(o.Fragment,null,c.a.createElement(p.a,null,c.a.createElement("title",null,"Flone | Cart"),c.a.createElement("meta",{name:"description",content:"Cart page of flone react minimalist eCommerce template."})),c.a.createElement(h.BreadcrumbsItem,{to:"/"},"Home"),c.a.createElement(h.BreadcrumbsItem,{to:""+O},"Cart"),c.a.createElement(w.a,{headerTop:"visible"},c.a.createElement(N.a,null),c.a.createElement("div",{className:"cart-main-area pt-90 pb-100"},c.a.createElement("div",{className:"container"},C&&C.length>=1?c.a.createElement(o.Fragment,null,c.a.createElement("h3",{className:"cart-page-title"},"Your cart items"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("div",{className:"table-content table-responsive cart-table-content"},c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Image"),c.a.createElement("th",null,"Product Name"),c.a.createElement("th",null,"Unit Price"),c.a.createElement("th",null,"Qty"),c.a.createElement("th",null,"GST"),c.a.createElement("th",null,"Coupon"),c.a.createElement("th",null,"Subtotal(Incl Tax)"),c.a.createElement("th",null,"action"))),c.a.createElement("tbody",null,null===C||void 0===C?void 0:C.map((function(e,t){var a,r,n,o,l,i,u,m,p,h;k+=parseInt(e.gsttotal);var f=Object(E.a)(e.price,e.discount);(e.price*d.currencyRate).toFixed(2),(f*d.currencyRate).toFixed(2);return _+=null!=f?(null===(a=e.product)||void 0===a||null===(r=a.gstrate)||void 0===r?void 0:r.value)*e.product_qty:(null===(n=e.product)||void 0===n||null===(o=n.gstrate)||void 0===o?void 0:o.value)*e.product_qty,c.a.createElement("tr",{key:t},c.a.createElement("td",{className:"product-thumbnail"},c.a.createElement(s.c,{to:"/product-sticky/"+(null===(l=e.product)||void 0===l?void 0:l._id)},c.a.createElement("img",{className:"img-fluid",src:""+(null===(i=e.product)||void 0===i?void 0:i.product_img[0]),alt:""}))),c.a.createElement("td",{className:"product-name"},c.a.createElement(s.c,{to:"/product-sticky/"+(null===(u=e.product)||void 0===u?void 0:u._id)},null===(m=e.product)||void 0===m?void 0:m.product_name),e.size||e.color?c.a.createElement("div",{className:"cart-item-variation"},c.a.createElement("span",null,"Color: ",null===e||void 0===e?void 0:e.color),c.a.createElement("span",null,"Size: ",null===e||void 0===e?void 0:e.size)):""),c.a.createElement("td",{className:"product-price-cart"},c.a.createElement("span",{className:"amount"},null===e||void 0===e?void 0:e.product_price)),c.a.createElement("td",{className:"product-quantity"},c.a.createElement("div",{className:"cart-plus-minus"},c.a.createElement("span",null,e.product_qty))),c.a.createElement("td",{className:"product-quantity"},c.a.createElement("div",{className:"cart-plus-minus"},c.a.createElement("span",null,null===(p=e.product)||void 0===p||null===(h=p.gstrate)||void 0===h?void 0:h.value))),c.a.createElement("td",{className:"product-quantity"},c.a.createElement("div",{className:"cart-plus-minus"},c.a.createElement(v.a,null,c.a.createElement("span",null,c.a.createElement(g.a,{type:"text",placeholder:"Enter Code"}),c.a.createElement(y.a,{color:"primary",className:""},"Apply"))))),c.a.createElement("td",{className:"product-subtotal"},"\u20b9",null===e||void 0===e?void 0:e.gsttotal),c.a.createElement("td",{className:"product-remove"},c.a.createElement("button",{onClick:function(){var t;return X(null===(t=e.product)||void 0===t?void 0:t._id)(window.location.reload())}},c.a.createElement("i",{className:"fa fa-times"}))))}))))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"cart-shiping-update-wrapper"},c.a.createElement("div",{className:"cart-shiping-update"},c.a.createElement(s.c,{to:"/shop-grid-two-column"},"Continue Shopping")),c.a.createElement("div",{className:"cart-clear"},c.a.createElement("button",{onClick:function(){return H()(window.location.reload())}},"Clear Shopping Cart"))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-8 col-md-6"},c.a.createElement("div",{className:"cart-tax"},c.a.createElement("div",{className:"title-wrap"},c.a.createElement("h4",{className:"cart-bottom-title section-bg-gray"},"Shipping Address")),c.a.createElement("div",{className:"tax-wrapper"},c.a.createElement("div",{className:"tax-select-wrapper"},c.a.createElement("h4",null,c.a.createElement("span",{style:{textTransform:"capitalize mb-2"}},null===Y||void 0===Y||null===(t=Y.customer)||void 0===t?void 0:t.firstname," ",null===Y||void 0===Y||null===(a=Y.customer)||void 0===a?void 0:a.lastname,","),c.a.createElement("br",null),null===Y||void 0===Y?void 0:Y.address,",",null===Y||void 0===Y?void 0:Y.locality,",",null===Y||void 0===Y?void 0:Y.state,",",null===Y||void 0===Y?void 0:Y.pincode),c.a.createElement("button",{className:"cart-btn-2",type:"button",onClick:function(){return b.push("/my-account")}},"Change"))))),c.a.createElement("div",{className:"col-lg-4 col-md-12"},c.a.createElement("div",{className:"grand-totall"},c.a.createElement("div",{className:"title-wrap"},c.a.createElement("h4",{className:"cart-bottom-title section-bg-gary-cart"},"Cart Total")),c.a.createElement("div",null,c.a.createElement("h5",null,"Total products ",c.a.createElement("span",null,"\u20b9",A)),c.a.createElement("h4",{className:"grand-totall-title"},"Total GST",c.a.createElement("span",null,"\u20b9",_)),c.a.createElement("h4",{className:"grand-totall-title"},"Grand Total ",c.a.createElement("span",null,"\u20b9",k))),c.a.createElement(s.c,{onClick:function(){return oe(100*k,"checkout",re.firstname+" "+re.lastname,re.email,re.mobile,"ONLINE")}},"Proceed to Checkout"))))):c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"item-empty-area text-center"},c.a.createElement("div",{className:"item-empty-area__icon mb-30"},c.a.createElement("i",{className:"pe-7s-cart"})),c.a.createElement("div",{className:"item-empty-area__text"},"No items found in cart ",c.a.createElement("br",null)," ",c.a.createElement(s.c,{to:"/shop-grid-two-column"},"Shop Now")))))))))}))},617:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(2),c=a(204);t.a=function(){return n.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"breadcrumb-content text-center"},n.a.createElement(c.Breadcrumbs,{separator:n.a.createElement("span",null,"/"),item:o.d,finalItem:"span"}))))}}}]);
//# sourceMappingURL=162.e7b70383.chunk.js.map