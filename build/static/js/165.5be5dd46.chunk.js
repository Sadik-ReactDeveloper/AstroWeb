(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[165,176],{798:function(e,a,t){"use strict";t.r(a);var n=t(24),l=t(0),s=t.n(l),c=t(2),r=t(59),i=t(621),o=t.n(i);a.default=function(e){var a=e.data,t=e.sliderClass,i=e.sliderdemoClass,m=Object(l.useState)(a),d=Object(n.a)(m,2),u=(d[0],d[1]);return Object(l.useEffect)((function(){u(a)}),[a]),s.a.createElement("div",{className:"".concat(i||" slider-demo"," text-center ").concat(t||""," st-hit")},s.a.createElement("div",{className:"image-flip"},s.a.createElement("div",{className:"mainflip flip-0"},s.a.createElement("div",{className:"frontside"},s.a.createElement(c.c,{to:"/astrologerdetail/"+a._id},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body text-center"},s.a.createElement("p",null,s.a.createElement("img",{src:null===a||void 0===a?void 0:a.img,alt:""})),s.a.createElement("h4",{className:"card-title"},null===a||void 0===a?void 0:a.fullname),s.a.createElement("ul",{className:"mb-3"},s.a.createElement("li",null,"Experience: ",s.a.createElement("span",null,null===a||void 0===a?void 0:a.exp_in_years," year")),s.a.createElement("li",null,"Call Rate:",s.a.createElement("span",null,null===a||void 0===a?void 0:a.callCharge,"/Mins"))),s.a.createElement(c.c,{className:"btn btn-primary btn-sm st-d"},null===a||void 0===a?void 0:a.status),s.a.createElement(c.c,{onClick:function(){return function(e){console.log(e);var a=localStorage.getItem("user_mobile_no"),t={userid:JSON.parse(localStorage.getItem("user_id")),astroid:e._id,From:e.mobile,To:a};r.a.post("/user/make_call",t).then((function(e){console.log(e),o()("Call Connected","SuccessFully")})).catch((function(e){console.log(e)}))}(a)},className:"btn btn-primary btn-sm"},s.a.createElement("i",{class:"fa fa-phone"})," Call Now"))))))))}},837:function(e,a,t){"use strict";t.r(a);var n=t(24),l=t(0),s=t.n(l),c=t(634),r=t.n(c),i=t(205),o=t.n(i),m=t(798),d=t(59);a.default=function(e){var a=e.spaceTopClass,t=e.spaceBottomClass,c=e.spaceLeftClass,i=e.spaceRightClass,u=e.bgColorClass,p=e.sliderdemoClass,E=(e.backgroundImage,{slidesPerView:4,loop:!0,autoplay:{delay:1e3,disableOnInteraction:!1},breakpoints:{768:{slidesPerView:4,direction:"horizontal",spaceBetween:15},640:{slidesPerView:2,direction:"horizontal",spaceBetween:15},320:{slidesPerView:2,direction:"horizontal",spaceBetween:15}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},renderPrevButton:function(){return s.a.createElement("button",{className:"swiper-button-prev ht-swiper-button-nav"},s.a.createElement("i",{className:"pe-7s-angle-left"}))},renderNextButton:function(){return s.a.createElement("button",{className:"swiper-button-next ht-swiper-button-nav"},s.a.createElement("i",{className:"pe-7s-angle-right"}))}}),v=Object(l.useState)([]),f=Object(n.a)(v,2),b=f[0],g=f[1];return Object(l.useEffect)((function(){d.a.get("/admin/allAstro").then((function(e){!0===e.data.status&&g(e.data.data)})).catch((function(e){console.log(e)}))}),[]),s.a.createElement("div",{className:" ".concat(a||"","  ").concat(t||""," ").concat(c||"","  ").concat(i||""," ").concat(u||"")},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12  ml-auto mr-auto"},s.a.createElement("div",{className:"heading"},s.a.createElement("h2",null,"Best Astrologers"),s.a.createElement("img",{src:o.a,alt:""})),s.a.createElement("div",{className:" nav-style-1 nav-testi-style"},s.a.createElement(r.a,E,b&&b.map((function(e,a){return s.a.createElement(m.default,{data:e,key:a,sliderClass:"swiper-slide rtt",sliderdemoClass:p})}))))))))}}}]);
//# sourceMappingURL=165.5be5dd46.chunk.js.map