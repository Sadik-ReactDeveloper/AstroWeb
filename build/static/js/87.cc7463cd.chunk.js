(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[87],{1112:function(e,a,t){"use strict";t.r(a);var l=t(196),n=t(197),o=t(198),s=t(199),r=t(0),c=t.n(r),i=t(2),d=t(604),u=t(605),m=t(615),f=t(608),p=t.n(f),v=(t(629),t(200)),g=t(71),E=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).componentDidMount=function(){var e=JSON.parse(localStorage.getItem("user_id"));g.a.get("/user/completed_order/".concat(e)).then((function(e){var a,t;(console.log(e.data),!0===e.data.status)&&(n.setState({askAstroList:null===(a=e.data)||void 0===a?void 0:a.data}),console.log(null===(t=e.data)||void 0===t?void 0:t.data))})).catch((function(e){console.log(e),console.log(e.response)}))},n.state={askAstroList:[]},n}return Object(n.a)(t,[{key:"render",value:function(){var e=this.state.askAstroList;return c.a.createElement(v.a,{headerTop:"visible"},c.a.createElement("section",{className:"pt-0 pb-0"},c.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(p.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},c.a.createElement(d.a,null,c.a.createElement(u.a,null,c.a.createElement(m.a,{md:"12"},c.a.createElement("div",{className:"leftcont text-left"},c.a.createElement("h1",null,"Ask Question Astrologer"),c.a.createElement("p",null))))))),c.a.createElement("section",{id:"team",class:"pb-5"},c.a.createElement(d.a,null,c.a.createElement(u.a,null,e.length?e.map((function(e,a){return c.a.createElement(m.a,{md:"3",key:a},c.a.createElement("div",{className:"image-flip"},c.a.createElement("div",{className:"mainflip flip-0"},c.a.createElement("div",{className:"frontside"},c.a.createElement(i.c,{to:"/askquestion/"+(null===e||void 0===e?void 0:e.astroid._id),className:""},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body text-center"},c.a.createElement("p",null,c.a.createElement("img",{src:null===e||void 0===e?void 0:e.astroid.img,alt:""})),c.a.createElement("h4",{className:"card-title"},null===e||void 0===e?void 0:e.astroid.fullname),c.a.createElement("ul",{className:"mb-3"},c.a.createElement("li",null,"Specility:"," ",c.a.createElement("span",null,null===e||void 0===e?void 0:e.astroid.all_skills)),c.a.createElement("li",null,"Language:"," ",c.a.createElement("span",null,null===e||void 0===e?void 0:e.astroid.language)),c.a.createElement("li",null,"Experience:"," ",c.a.createElement("span",null,null===e||void 0===e?void 0:e.astroid.exp_in_years)),c.a.createElement("li",null,"Call Rate:"," ",c.a.createElement("span",null,null===e||void 0===e?void 0:e.astroid.callCharge,"/",null===e||void 0===e?void 0:e.astroid.conrubute_hrs))),c.a.createElement(i.c,{className:"btn btn-primary btn-sm st-d",to:"/askquestion/"+(null===e||void 0===e?void 0:e.astroid._id)},"Ask Question"))))))))})):null))))}}]),t}(c.a.Component);a.default=E},608:function(e,a,t){e.exports=t.p+"static/media/astrologin-bg.f858568c.jpg"},615:function(e,a,t){"use strict";var l=t(7),n=t(15),o=t(0),s=t.n(o),r=t(4),c=t.n(r),i=t(78),d=t.n(i),u=t(54),m=["className","cssModule","widths","tag"],f=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:f,offset:f})]),v={tag:u.n,xs:p,sm:p,md:p,lg:p,xl:p,className:c.a.string,cssModule:c.a.object,widths:c.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},E=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},b=function(e){var a=e.className,t=e.cssModule,o=e.widths,r=e.tag,c=Object(n.a)(e,m),i=[];o.forEach((function(a,l){var n=e[a];if(delete c[a],n||""===n){var o=!l;if(Object(u.h)(n)){var s,r=o?"-":"-"+a+"-",m=E(o,a,n.size);i.push(Object(u.j)(d()(((s={})[m]=n.size||""===n.size,s["order"+r+n.order]=n.order||0===n.order,s["offset"+r+n.offset]=n.offset||0===n.offset,s)),t))}else{var f=E(o,a,n);i.push(f)}}})),i.length||i.push("col");var f=Object(u.j)(d()(a,i),t);return s.a.createElement(r,Object(l.a)({},c,{className:f}))};b.propTypes=v,b.defaultProps=g,a.a=b},629:function(e,a,t){}}]);
//# sourceMappingURL=87.cc7463cd.chunk.js.map