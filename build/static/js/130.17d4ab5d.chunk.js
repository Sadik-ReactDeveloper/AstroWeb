(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[130],{615:function(e,t,a){"use strict";var n=a(7),s=a(15),r=a(0),l=a.n(r),i=a(4),o=a.n(i),c=a(78),d=a.n(c),u=a(54),m=["className","cssModule","widths","tag"],p=o.a.oneOfType([o.a.number,o.a.string]),f=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:p,offset:p})]),g={tag:u.n,xs:f,sm:f,md:f,lg:f,xl:f,className:o.a.string,cssModule:o.a.object,widths:o.a.array},v={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},h=function(e){var t=e.className,a=e.cssModule,r=e.widths,i=e.tag,o=Object(s.a)(e,m),c=[];r.forEach((function(t,n){var s=e[t];if(delete o[t],s||""===s){var r=!n;if(Object(u.h)(s)){var l,i=r?"-":"-"+t+"-",m=b(r,t,s.size);c.push(Object(u.j)(d()(((l={})[m]=s.size||""===s.size,l["order"+i+s.order]=s.order||0===s.order,l["offset"+i+s.offset]=s.offset||0===s.offset,l)),a))}else{var p=b(r,t,s);c.push(p)}}})),c.length||c.push("col");var p=Object(u.j)(d()(t,c),a);return l.a.createElement(i,Object(n.a)({},o,{className:p}))};h.propTypes=g,h.defaultProps=v,t.a=h},689:function(e,t,a){e.exports=a.p+"static/media/astro3.4e14373e.jpg"},729:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a(25),s=a(0),r=a.n(s),l=a(630),i=a.n(l),o=(a(700),a(716),a(717),a(22)),c=a(615),d=(a(689),a(71));function u(){var e=Object(o.h)(),t=Object(s.useState)([]),a=Object(n.a)(t,2),l=a[0],u=a[1];Object(s.useEffect)((function(){d.a.get("/admin/get_astroGallery/".concat(e.id)).then((function(e){u(e.data.data)})).catch((function(e){console.log(e)}))}),[]);var m={loop:!0,slidesPerView:4,grabCursor:!0,spaceBetween:10,breakpoints:{1024:{slidesPerView:4},768:{slidesPerView:3},640:{slidesPerView:2},320:{slidesPerView:1}},watchSlidesVisibility:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},renderPrevButton:function(){return r.a.createElement("button",{className:"swiper-button-prev ht-swiper-button-nav gt-1"},r.a.createElement("i",{className:"pe-7s-angle-left"}))},renderNextButton:function(){return r.a.createElement("button",{className:"swiper-button-next ht-swiper-button-nav gt-2"},r.a.createElement("i",{className:"pe-7s-angle-right"}))}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,m,l.map((function(e){var t;return r.a.createElement(c.a,{key:null===e||void 0===e?void 0:e._id,md:"3",className:"videoimg"},r.a.createElement("div",{key:null===e||void 0===e?void 0:e._id,className:""},r.a.createElement("div",{class:"product-image8"},(null===e||void 0===e||null===(t=e.file)||void 0===t?void 0:t.includes("mp4"))?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{width:"100%"},className:"videogallry"},r.a.createElement("video",{style:{width:"100%",background:"none"},className:"videosource",width:"320",height:"200",controls:!0},r.a.createElement("source",{src:null===e||void 0===e?void 0:e.file,type:"video/mp4"})))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{width:"100px"},className:"imagesize mx-1"},r.a.createElement("img",{style:{paddingTop:"20px",width:"277px",height:"200px",background:"none"},className:"imagegallry",src:null===e||void 0===e?void 0:e.file,alt:"gallryimg"}))))))}))))}}}]);
//# sourceMappingURL=130.17d4ab5d.chunk.js.map