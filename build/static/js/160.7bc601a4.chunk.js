(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[160],{615:function(e,a,t){"use strict";var c=t(7),r=t(15),n=t(0),s=t.n(n),l=t(4),o=t.n(l),i=t(78),m=t.n(i),u=t(54),d=["className","cssModule","widths","tag"],f=o.a.oneOfType([o.a.number,o.a.string]),p=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:f,offset:f})]),h={tag:u.n,xs:p,sm:p,md:p,lg:p,xl:p,className:o.a.string,cssModule:o.a.object,widths:o.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},v=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},E=function(e){var a=e.className,t=e.cssModule,n=e.widths,l=e.tag,o=Object(r.a)(e,d),i=[];n.forEach((function(a,c){var r=e[a];if(delete o[a],r||""===r){var n=!c;if(Object(u.h)(r)){var s,l=n?"-":"-"+a+"-",d=v(n,a,r.size);i.push(Object(u.j)(m()(((s={})[d]=r.size||""===r.size,s["order"+l+r.order]=r.order||0===r.order,s["offset"+l+r.offset]=r.offset||0===r.offset,s)),t))}else{var f=v(n,a,r);i.push(f)}}})),i.length||i.push("col");var f=Object(u.j)(m()(a,i),t);return s.a.createElement(l,Object(c.a)({},o,{className:f}))};E.propTypes=h,E.defaultProps=g,a.a=E},829:function(e,a,t){"use strict";t.r(a);var c=t(196),r=t(197),n=t(198),s=t(199),l=t(0),o=t.n(l),i=t(2),m=t(604),u=t(605),d=t(615),f=t(205),p=t.n(f),h=t(71),g=function(e){Object(n.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=a.call.apply(a,[this].concat(n))).state={productList:[]},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("/admin/getProduct").then((function(a){e.setState({productList:a.data.data})}))}},{key:"render",value:function(){var e=this.state.productList;return o.a.createElement(m.a,null,o.a.createElement("div",{className:"heading mt-40"},o.a.createElement("h2",null,"Our Trending Products"),o.a.createElement("img",{src:p.a,alt:""})),o.a.createElement(u.a,null,o.a.createElement("div",{className:"col-lg-12 col-md-12 mb-30"},o.a.createElement("div",{className:"category-home"},o.a.createElement("section",{className:"pt-0"},o.a.createElement("div",{className:"container"},o.a.createElement(u.a,null,this.state.productList.length?e.map((function(e,a){return o.a.createElement(d.a,{md:"3"},o.a.createElement("div",{className:"product-grid8"},o.a.createElement("div",{class:"product-image8"},o.a.createElement(i.c,{to:"/poojadetail"},o.a.createElement("img",{src:e.image,alt:"",className:"Ptd-img"}))),o.a.createElement("div",{className:"product-content"},o.a.createElement("div",{className:"price"},o.a.createElement("i",{class:"fa fa-inr","aria-hidden":"true"})," ",e.price),o.a.createElement("h3",{className:"title"},o.a.createElement(i.c,null,e.productname," ")),o.a.createElement(i.c,{className:"all-deals"},"View More",o.a.createElement("i",{class:"fa fa-angle-right icon"})))))})):null)))))))}}]),t}(o.a.Component);a.default=g}}]);
//# sourceMappingURL=160.7bc601a4.chunk.js.map