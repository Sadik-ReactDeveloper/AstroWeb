(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[132],{1110:function(e,t,a){"use strict";a.r(t);var l=a(196),n=a(197),c=a(198),r=a(199),s=a(0),o=a.n(s),i=a(2),u=a(604),m=a(605),p=a(615),d=a(200),f=a(71),v=(a(621),a(608)),b=a.n(v),g=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={TicketbyUser:[]},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=(this.props.match.params.id,JSON.parse(localStorage.getItem("user_id")));console.log(t),f.a.get("/user/TicketbyUser/".concat(t)).then((function(t){console.log("userChatList",t.data.data),!0===t.data.status&&e.setState({TicketbyUser:t.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.TicketbyUser;return o.a.createElement(d.a,{headerTop:"visible"},o.a.createElement("section",{className:"pt-0 pb-0"},o.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(b.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},o.a.createElement(u.a,null,o.a.createElement(m.a,null,o.a.createElement(p.a,{md:"12"},o.a.createElement("div",{className:"leftcont text-left"},o.a.createElement("h1",null,"Customer Support"))))))),o.a.createElement("section",{className:""},o.a.createElement(u.a,null,o.a.createElement(m.a,null,o.a.createElement(p.a,{lg:"2"},o.a.createElement("div",{className:"supp-1"},o.a.createElement(i.c,{to:"/customersupportform"},o.a.createElement("i",{className:"pe-7s-plus"}),o.a.createElement("p",null,"Create Ticket")))),o.a.createElement(p.a,{lg:"10"},o.a.createElement("div",{className:"support-box"},o.a.createElement(m.a,null,e.length?e.map((function(e,t){return o.a.createElement("div",{className:"supp-2"},o.a.createElement("h4",null,null===e||void 0===e?void 0:e.subject," ?"),o.a.createElement("ul",null,o.a.createElement("li",null,"Date/Time: ",o.a.createElement("span",null,null===e||void 0===e?void 0:e.createdAt)),o.a.createElement("li",null,"Ticket No: ",o.a.createElement("span",null,null===e||void 0===e?void 0:e.ticketNo)),o.a.createElement("li",null,"Status: ",o.a.createElement("span",null,null===e||void 0===e?void 0:e.status))),o.a.createElement("div",{className:"supp-3"},o.a.createElement(i.c,{to:"/customersupportview"},"View More")))})):null)))))))}}]),a}(o.a.Component);t.default=g},608:function(e,t,a){e.exports=a.p+"static/media/astrologin-bg.f858568c.jpg"},615:function(e,t,a){"use strict";var l=a(7),n=a(15),c=a(0),r=a.n(c),s=a(4),o=a.n(s),i=a(78),u=a.n(i),m=a(54),p=["className","cssModule","widths","tag"],d=o.a.oneOfType([o.a.number,o.a.string]),f=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:d,offset:d})]),v={tag:m.n,xs:f,sm:f,md:f,lg:f,xl:f,className:o.a.string,cssModule:o.a.object,widths:o.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},E=function(e){var t=e.className,a=e.cssModule,c=e.widths,s=e.tag,o=Object(n.a)(e,p),i=[];c.forEach((function(t,l){var n=e[t];if(delete o[t],n||""===n){var c=!l;if(Object(m.h)(n)){var r,s=c?"-":"-"+t+"-",p=g(c,t,n.size);i.push(Object(m.j)(u()(((r={})[p]=n.size||""===n.size,r["order"+s+n.order]=n.order||0===n.order,r["offset"+s+n.offset]=n.offset||0===n.offset,r)),a))}else{var d=g(c,t,n);i.push(d)}}})),i.length||i.push("col");var d=Object(m.j)(u()(t,i),a);return r.a.createElement(s,Object(l.a)({},o,{className:d}))};E.propTypes=v,E.defaultProps=b,t.a=E}}]);
//# sourceMappingURL=132.0e6413fa.chunk.js.map