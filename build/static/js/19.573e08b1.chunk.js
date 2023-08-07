(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[19],{614:function(e,t,n){"use strict";var r=n(18),o=n(609),a=n(78),i=n.n(a),u=/-(.)/g;var c=n(0),l=n(611),s=n(608);n.d(t,"a",(function(){return d}));var f=["className","bsPrefix","as"],p=function(e){return e[0].toUpperCase()+(t=e,t.replace(u,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.displayName,a=void 0===n?p(e):n,u=t.Component,d=t.defaultProps,y=c.forwardRef((function(t,n){var a=t.className,c=t.bsPrefix,p=t.as,d=void 0===p?u||"div":p,y=Object(o.a)(t,f),b=Object(l.c)(c,e);return Object(s.jsx)(d,Object(r.a)({ref:n,className:i()(a,b)},y))}));return y.defaultProps=d,y.displayName=a,y}},615:function(e,t,n){"use strict";n.d(t,"b",(function(){return a}));var r=n(0),o=r.createContext(null),a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!=e?String(e):t||null};t.a=o},622:function(e,t,n){"use strict";var r=n(0),o=r.createContext(null);t.a=o},623:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return a.default}}),t.default=void 0;var r=i(n(639)),o=i(n(624)),a=i(n(641));function i(e){return e&&e.__esModule?e:{default:e}}var u=o.default;t.default=u},624:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),o=u(n(4)),a=u(n(34)),i=n(640);function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y,b,v,h=function(e){function t(){return l(this,t),f(this,p(t).apply(this,arguments))}var n,o,u;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&a.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var n=r.default.createElement("div",{className:"react-head-temp"},t);a.default.render(n,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var n=e.temporaryElement.querySelector(".react-head-temp");if(null!==n){var r=Array.prototype.slice.call(n.children),o=document.head,a=o.innerHTML;(r=(r=r.filter((function(e){return-1===a.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var n=(0,i.getDuplicateTitle)();n&&(0,i.removeChild)(o,n)}else if("meta"===t){var r=(0,i.getDuplicateMeta)(e);r&&(0,i.removeChild)(o,r)}else if("link"===t&&"canonical"===e.rel){var a=(0,i.getDuplicateCanonical)(e);a&&(0,i.removeChild)(o,a)}})),(0,i.appendChild)(document.head,r)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&s(n.prototype,o),u&&s(n,u),t}(r.Component);y=h,b="contextTypes",v={extract:o.default.func},b in y?Object.defineProperty(y,b,{value:v,enumerable:!0,configurable:!0,writable:!0}):y[b]=v;var m=h;t.default=m,e.exports=t.default},625:function(e,t,n){"use strict";var r,o=n(18),a=n(609),i=n(202),u=n(78),c=n.n(u),l=n(0),s=n(26),f=n(645),p=n(644),d=n(647),y=n(608),b=["className","children","transitionClasses"],v=(r={},Object(i.a)(r,s.b,"show"),Object(i.a)(r,s.a,"show"),r),h=l.forwardRef((function(e,t){var n=e.className,r=e.children,i=e.transitionClasses,u=void 0===i?{}:i,s=Object(a.a)(e,b),h=Object(l.useCallback)((function(e,t){Object(p.a)(e),null==s.onEnter||s.onEnter(e,t)}),[s]);return Object(y.jsx)(d.a,Object(o.a)(Object(o.a)({ref:t,addEndListener:f.a},s),{},{onEnter:h,childRef:r.ref,children:function(e,t){return l.cloneElement(r,Object(o.a)(Object(o.a)({},t),{},{className:c()("fade",n,r.props.className,v[e],u[e])}))}}))}));h.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},h.displayName="Fade",t.a=h},639:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=n(0),a=(r=n(4))&&r.__esModule?r:{default:r};function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return u(this,t),l(this,s(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(r=[{key:"getChildContext",value:function(){return{extract:this.props.extract}}},{key:"render",value:function(){return o.Children.only(this.props.children)}}])&&c(n.prototype,r),a&&c(n,a),t}(o.Component);!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(p,"childContextTypes",{extract:a.default.func});var d=p;t.default=d,e.exports=t.default},640:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,n=null,r=[],i=[];return e.forEach((function(e){var o=e.type,a=e.props;"title"===o?t=e:"link"===o&&"canonical"===a.rel?n=e:"meta"===o?r.push(e):i.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};a.forEach((function(e){t[e]=[]}));for(var n=[],r=function(r){var i=e[r],u=i.props.id;(u?!t.id[u]:0===o.filter((function(e){var n=i.props[e],r=t[e][n];return r&&!r.props.id})).length)&&(n.unshift(i),a.forEach((function(e){var n=i.props[e];n&&(t[e][n]=i)})))},i=e.length-1;i>=0;i--)r(i);return n}(r)),[n],i)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateMeta=function(e){var t=document.head,n=e.id;if(n)return n&&t.querySelector("#".concat(n));return r.reduce((function(n,r){var o,a=e.getAttribute(r);return a?n.concat((o=t.querySelectorAll("[".concat(r,' = "').concat(a,'"]')),(o=Array.prototype.slice.call(o||[])).filter((function(e){return!e.id})))):n}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=document.createDocumentFragment(),r=0,o=t.length;r<o;r++)n.appendChild(t[r]);e.appendChild(n)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=0,r=t.length;n<r;n++)e.removeChild(t[n])};var r=["property","name","itemprop"],o=r.concat(["itemProp"]),a=o.concat(["id"])},641:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),o=i(n(4)),a=i(n(624));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d,y,b,v=function(e){function t(){return c(this,t),s(this,f(t).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){return r.default.createElement(a.default,null,r.default.createElement("title",null,this.props.title))}}])&&l(n.prototype,o),i&&l(n,i),t}(r.Component);d=v,y="propTypes",b={title:o.default.string},y in d?Object.defineProperty(d,y,{value:b,enumerable:!0,configurable:!0,writable:!0}):d[y]=b;var h=v;t.default=h,e.exports=t.default},642:function(e,t,n){"use strict";var r=n(4),o=n.n(r),a=n(0),i=n.n(a),u=n(18),c=n(609),l=n(24),s=n(653),f={prefix:String(Math.round(1e10*Math.random())),current:0},p=i.a.createContext(f);var d=Boolean("undefined"!==typeof window&&window.document&&window.document.createElement);var y=n(622),b=n(615);var v=function(e){var t=e.children,n=e.in,r=e.mountOnEnter,o=e.unmountOnExit,i=Object(a.useRef)(n);return Object(a.useEffect)((function(){n&&(i.current=!0)}),[n]),n?t:o||!i.current&&r?null:t},h=n(608),m=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],O=["activeKey","getControlledId","getControllerId"],g=["as"];function j(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function E(e){var t=e.active,n=e.eventKey,r=e.mountOnEnter,o=e.transition,i=e.unmountOnExit,u=e.role,c=void 0===u?"tabpanel":u,l=e.onEnter,s=e.onEntering,f=e.onEntered,p=e.onExit,d=e.onExiting,v=e.onExited,h=j(e,m),g=Object(a.useContext)(y.a);if(!g)return[Object.assign({},h,{role:c}),{eventKey:n,isActive:t,mountOnEnter:r,transition:o,unmountOnExit:i,onEnter:l,onEntering:s,onEntered:f,onExit:p,onExiting:d,onExited:v}];var E=g.activeKey,x=g.getControlledId,C=g.getControllerId,P=j(g,O),w=Object(b.b)(n);return[Object.assign({},h,{role:c,id:x(n),"aria-labelledby":C(n)}),{eventKey:n,isActive:null==t&&null!=w?Object(b.b)(E)===w:t,transition:o||P.transition,mountOnEnter:null!=r?r:P.mountOnEnter,unmountOnExit:null!=i?i:P.unmountOnExit,onEnter:l,onEntering:s,onEntered:f,onExit:p,onExiting:d,onExited:v}]}var x=a.forwardRef((function(e,t){var n=e.as,r=void 0===n?"div":n,o=E(j(e,g)),a=Object(l.a)(o,2),i=a[0],u=a[1],c=u.isActive,s=u.onEnter,f=u.onEntering,p=u.onEntered,d=u.onExit,m=u.onExiting,O=u.onExited,x=u.mountOnEnter,C=u.unmountOnExit,P=u.transition,w=void 0===P?v:P;return Object(h.jsx)(y.a.Provider,{value:null,children:Object(h.jsx)(b.a.Provider,{value:null,children:Object(h.jsx)(w,{in:c,onEnter:s,onEntering:f,onEntered:p,onExit:d,onExiting:m,onExited:O,mountOnEnter:x,unmountOnExit:C,children:Object(h.jsx)(r,Object.assign({},i,{ref:t,hidden:!c,"aria-hidden":!c}))})})})}));x.displayName="TabPanel";var C=function(e){var t=e.id,n=e.generateChildId,r=e.onSelect,o=e.activeKey,i=e.defaultActiveKey,u=e.transition,c=e.mountOnEnter,v=e.unmountOnExit,m=e.children,O=Object(s.b)(o,i,r),g=Object(l.a)(O,2),j=g[0],E=g[1],x=function(e){var t=Object(a.useContext)(p);return t!==f||d||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."),Object(a.useMemo)((function(){return e||"react-aria".concat(t.prefix,"-").concat(++t.current)}),[e])}(t),C=Object(a.useMemo)((function(){return n||function(e,t){return x?"".concat(x,"-").concat(t,"-").concat(e):null}}),[x,n]),P=Object(a.useMemo)((function(){return{onSelect:E,activeKey:j,transition:u,mountOnEnter:c||!1,unmountOnExit:v||!1,getControlledId:function(e){return C(e,"tabpane")},getControllerId:function(e){return C(e,"tab")}}}),[E,j,u,c,v,C]);return Object(h.jsx)(y.a.Provider,{value:P,children:Object(h.jsx)(b.a.Provider,{value:E||null,children:m})})};C.Panel=x;var P=C,w=n(625);function S(e){return"boolean"===typeof e?e?w.a:v:e}var I=["transition"],_=function(e){var t=e.transition,n=Object(c.a)(e,I);return Object(h.jsx)(P,Object(u.a)(Object(u.a)({},n),{},{transition:S(t)}))};_.displayName="TabContainer";var k=_,N=n(614),D=Object(N.a)("tab-content"),A=n(78),T=n.n(A),M=n(611),R=["bsPrefix","transition"],F=["className","as"],K=a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.transition,o=Object(c.a)(e,R),a=E(Object(u.a)(Object(u.a)({},o),{},{transition:S(r)})),i=Object(l.a)(a,2),s=i[0],f=s.className,p=s.as,d=void 0===p?"div":p,v=Object(c.a)(s,F),m=i[1],O=m.isActive,g=m.onEnter,j=m.onEntering,x=m.onEntered,C=m.onExit,P=m.onExiting,I=m.onExited,_=m.mountOnEnter,k=m.unmountOnExit,N=m.transition,D=void 0===N?w.a:N,A=Object(M.c)(n,"tab-pane");return Object(h.jsx)(y.a.Provider,{value:null,children:Object(h.jsx)(b.a.Provider,{value:null,children:Object(h.jsx)(D,{in:O,onEnter:g,onEntering:j,onEntered:x,onExit:C,onExiting:P,onExited:I,mountOnEnter:_,unmountOnExit:k,children:Object(h.jsx)(d,Object(u.a)(Object(u.a)({},v),{},{ref:t,className:T()(f,A,O&&"active")}))})})})}));K.displayName="TabPane";var V=K,L={eventKey:o.a.oneOfType([o.a.string,o.a.number]),title:o.a.node.isRequired,disabled:o.a.bool,tabClassName:o.a.string,tabAttrs:o.a.object},q=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};q.propTypes=L;t.a=Object.assign(q,{Container:k,Content:D,Pane:V})},865:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==m(e)&&"function"!==typeof e)return{default:e};var n=a(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=o?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(r,i,u):r[i]=e[i]}r.default=e,n&&n.set(e,r);return r}(n(0)),o=["placeholder","separator","isLastChild","inputStyle","focus","isDisabled","hasErrored","errorStyle","focusStyle","disabledStyle","shouldAutoFocus","isInputNum","index","value","className","isInputSecure"];function a(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(a=function(e){return e?n:t})(e)}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}function f(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){return!t||"object"!==m(t)&&"function"!==typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var O=function(e){return"object"===m(e)},g=function(e){f(n,e);var t=d(n);function n(e){var o;return c(this,n),h(b(o=t.call(this,e)),"getClasses",(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return!O(e)&&!1!==e})).join(" ")})),h(b(o),"getType",(function(){var e=o.props,t=e.isInputSecure,n=e.isInputNum;return t?"password":n?"tel":"text"})),o.input=r.default.createRef(),o}return s(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.focus,n=e.shouldAutoFocus,r=this.input.current;r&&t&&n&&r.focus()}},{key:"componentDidUpdate",value:function(e){var t=this.props.focus,n=this.input.current;e.focus!==t&&n&&t&&(n.focus(),n.select())}},{key:"render",value:function(){var e=this.props,t=e.placeholder,n=e.separator,a=e.isLastChild,c=e.inputStyle,l=e.focus,s=e.isDisabled,f=e.hasErrored,p=e.errorStyle,d=e.focusStyle,y=e.disabledStyle,b=(e.shouldAutoFocus,e.isInputNum),v=e.index,h=e.value,m=e.className,g=(e.isInputSecure,u(e,o));return r.default.createElement("div",{className:m,style:{display:"flex",alignItems:"center"}},r.default.createElement("input",i({"aria-label":"".concat(0===v?"Please enter verification code. ":"").concat(b?"Digit":"Character"," ").concat(v+1),autoComplete:"off",style:Object.assign({width:"1em",textAlign:"center"},O(c)&&c,l&&O(d)&&d,s&&O(y)&&y,f&&O(p)&&p),placeholder:t,className:this.getClasses(c,l&&d,s&&y,f&&p),type:this.getType(),maxLength:"1",ref:this.input,disabled:s,value:h||""},g)),!a&&n)}}]),n}(r.PureComponent),j=function(e){f(n,e);var t=d(n);function n(){var e;c(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return h(b(e=t.call.apply(t,[this].concat(a))),"state",{activeInput:0}),h(b(e),"getOtpValue",(function(){return e.props.value?e.props.value.toString().split(""):[]})),h(b(e),"getPlaceholderValue",(function(){var t=e.props,n=t.placeholder,r=t.numInputs;if("string"===typeof n){if(n.length===r)return n;n.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}})),h(b(e),"handleOtpChange",(function(t){(0,e.props.onChange)(t.join(""))})),h(b(e),"isInputValueValid",(function(t){return(e.props.isInputNum?!isNaN(parseInt(t,10)):"string"===typeof t)&&1===t.trim().length})),h(b(e),"focusInput",(function(t){var n=e.props.numInputs,r=Math.max(Math.min(n-1,t),0);e.setState({activeInput:r})})),h(b(e),"focusNextInput",(function(){var t=e.state.activeInput;e.focusInput(t+1)})),h(b(e),"focusPrevInput",(function(){var t=e.state.activeInput;e.focusInput(t-1)})),h(b(e),"changeCodeAtFocus",(function(t){var n=e.state.activeInput,r=e.getOtpValue();r[n]=t[0],e.handleOtpChange(r)})),h(b(e),"handleOnPaste",(function(t){t.preventDefault();var n=e.state.activeInput,r=e.props,o=r.numInputs;if(!r.isDisabled){for(var a=e.getOtpValue(),i=n,u=t.clipboardData.getData("text/plain").slice(0,o-n).split(""),c=0;c<o;++c)c>=n&&u.length>0&&(a[c]=u.shift(),i++);e.setState({activeInput:i},(function(){e.focusInput(i),e.handleOtpChange(a)}))}})),h(b(e),"handleOnChange",(function(t){var n=t.target.value;e.isInputValueValid(n)&&e.changeCodeAtFocus(n)})),h(b(e),"handleOnKeyDown",(function(t){8===t.keyCode||"Backspace"===t.key?(t.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput()):46===t.keyCode||"Delete"===t.key?(t.preventDefault(),e.changeCodeAtFocus("")):37===t.keyCode||"ArrowLeft"===t.key?(t.preventDefault(),e.focusPrevInput()):39===t.keyCode||"ArrowRight"===t.key?(t.preventDefault(),e.focusNextInput()):32!==t.keyCode&&" "!==t.key&&"Spacebar"!==t.key&&"Space"!==t.key||t.preventDefault()})),h(b(e),"handleOnInput",(function(t){if(e.isInputValueValid(t.target.value))e.focusNextInput();else if(!e.props.isInputNum){var n=t.nativeEvent;null===n.data&&"deleteContentBackward"===n.inputType&&(t.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput())}})),h(b(e),"renderInputs",(function(){for(var t=e.state.activeInput,n=e.props,o=n.numInputs,a=n.inputStyle,i=n.focusStyle,u=n.separator,c=n.isDisabled,l=n.disabledStyle,s=n.hasErrored,f=n.errorStyle,p=n.shouldAutoFocus,d=n.isInputNum,y=n.isInputSecure,b=n.className,v=[],h=e.getOtpValue(),m=e.getPlaceholderValue(),O=e.props["data-cy"],j=e.props["data-testid"],E=function(n){v.push(r.default.createElement(g,{placeholder:m&&m[n],key:n,index:n,focus:t===n,value:h&&h[n],onChange:e.handleOnChange,onKeyDown:e.handleOnKeyDown,onInput:e.handleOnInput,onPaste:e.handleOnPaste,onFocus:function(t){e.setState({activeInput:n}),t.target.select()},onBlur:function(){return e.setState({activeInput:-1})},separator:u,inputStyle:a,focusStyle:i,isLastChild:n===o-1,isDisabled:c,disabledStyle:l,hasErrored:s,errorStyle:f,shouldAutoFocus:p,isInputNum:d,isInputSecure:y,className:b,"data-cy":O&&"".concat(O,"-").concat(n),"data-testid":j&&"".concat(j,"-").concat(n)}))},x=0;x<o;x++)E(x);return v})),e}return s(n,[{key:"render",value:function(){var e=this.props.containerStyle;return r.default.createElement("div",{style:Object.assign({display:"flex"},O(e)&&e),className:O(e)?"":e},this.renderInputs())}}]),n}(r.Component);h(j,"defaultProps",{numInputs:4,onChange:function(e){return console.log(e)},isDisabled:!1,shouldAutoFocus:!1,value:"",isInputSecure:!1});var E=j;t.default=E}}]);
//# sourceMappingURL=19.573e08b1.chunk.js.map