(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[72],{1139:function(e,a,t){"use strict";t.r(a);var l=t(196),n=t(197),r=t(198),o=t(199),s=t(0),c=t.n(s),i=t(605),u=t(606),d=t(620),m=t(694),v=t(610),f=t.n(v),b=t(200),p=(t(629),t(59)),g=function(e){Object(r.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={userChatList:[]},n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=JSON.parse(localStorage.getItem("user_id"));p.a.get("/user/userCallHistory/".concat(a)).then((function(a){var t;(console.log("userChatList",a.data.data),!0===a.data.status)&&e.setState({userChatList:null===a||void 0===a||null===(t=a.data)||void 0===t?void 0:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.userChatList;return c.a.createElement(b.a,{headerTop:"visible"},c.a.createElement("section",{className:"pt-0 pb-0"},c.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(f.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},c.a.createElement(i.a,null,c.a.createElement(u.a,null,c.a.createElement(d.a,{md:"12"},c.a.createElement("div",{className:"leftcont text-left"},c.a.createElement("h1",null,"User Call History"))))))),c.a.createElement("section",null,c.a.createElement(i.a,null,c.a.createElement(u.a,null,c.a.createElement(d.a,{lg:"12"},c.a.createElement("div",{className:""},c.a.createElement(m.a,{striped:!0,className:""},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"#Conversation ID"),c.a.createElement("th",null,"Astrologer Name"),c.a.createElement("th",null,"Conversation Type"),c.a.createElement("th",null,"Rate"),c.a.createElement("th",null,"Duration"),c.a.createElement("th",null,"Deducation"),c.a.createElement("th",null,"Date/Time"))),e.length?e.map((function(e){var a,t;return c.a.createElement("tbody",{key:e._id},c.a.createElement("tr",null,c.a.createElement("th",null,null===e||void 0===e?void 0:e.Sid),c.a.createElement("td",null,null===e||void 0===e||null===(a=e.astroid)||void 0===a?void 0:a.fullname),c.a.createElement("td",null,"Call"),c.a.createElement("td",null,null===e||void 0===e||null===(t=e.astroid)||void 0===t?void 0:t.callCharge,"/Min."),c.a.createElement("td",null,null===e||void 0===e?void 0:e.Duration," Min"),c.a.createElement("td",null,null===e||void 0===e?void 0:e.userdeductedAmt," Rs"),c.a.createElement("td",null,null===e||void 0===e?void 0:e.DateCreated.split("T")[0])))})):null)))))))}}]),t}(c.a.Component);a.default=g},610:function(e,a,t){e.exports=t.p+"static/media/astrologin-bg.f858568c.jpg"},620:function(e,a,t){"use strict";var l=t(7),n=t(15),r=t(0),o=t.n(r),s=t(4),c=t.n(s),i=t(78),u=t.n(i),d=t(54),m=["className","cssModule","widths","tag"],v=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:v,offset:v})]),b={tag:d.n,xs:f,sm:f,md:f,lg:f,xl:f,className:c.a.string,cssModule:c.a.object,widths:c.a.array},p={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,r=e.widths,s=e.tag,c=Object(n.a)(e,m),i=[];r.forEach((function(a,l){var n=e[a];if(delete c[a],n||""===n){var r=!l;if(Object(d.h)(n)){var o,s=r?"-":"-"+a+"-",m=g(r,a,n.size);i.push(Object(d.j)(u()(((o={})[m]=n.size||""===n.size,o["order"+s+n.order]=n.order||0===n.order,o["offset"+s+n.offset]=n.offset||0===n.offset,o)),t))}else{var v=g(r,a,n);i.push(v)}}})),i.length||i.push("col");var v=Object(d.j)(u()(a,i),t);return o.a.createElement(s,Object(l.a)({},c,{className:v}))};h.propTypes=b,h.defaultProps=p,a.a=h},629:function(e,a,t){},694:function(e,a,t){"use strict";var l=t(7),n=t(15),r=t(0),o=t.n(r),s=t(4),c=t.n(s),i=t(78),u=t.n(i),d=t(54),m=["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"],v={className:c.a.string,cssModule:c.a.object,size:c.a.string,bordered:c.a.bool,borderless:c.a.bool,striped:c.a.bool,dark:c.a.bool,hover:c.a.bool,responsive:c.a.oneOfType([c.a.bool,c.a.string]),tag:d.n,responsiveTag:d.n,innerRef:c.a.oneOfType([c.a.func,c.a.string,c.a.object])},f=function(e){var a=e.className,t=e.cssModule,r=e.size,s=e.bordered,c=e.borderless,i=e.striped,v=e.dark,f=e.hover,b=e.responsive,p=e.tag,g=e.responsiveTag,h=e.innerRef,E=Object(n.a)(e,m),j=Object(d.j)(u()(a,"table",!!r&&"table-"+r,!!s&&"table-bordered",!!c&&"table-borderless",!!i&&"table-striped",!!v&&"table-dark",!!f&&"table-hover"),t),O=o.a.createElement(p,Object(l.a)({},E,{ref:h,className:j}));if(b){var y=Object(d.j)(!0===b?"table-responsive":"table-responsive-"+b,t);return o.a.createElement(g,{className:y},O)}return O};f.propTypes=v,f.defaultProps={tag:"table",responsiveTag:"div"},a.a=f}}]);
//# sourceMappingURL=72.914bf9f5.chunk.js.map