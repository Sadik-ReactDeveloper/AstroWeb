(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[119],{1193:function(e,a,t){"use strict";t.r(a);var l=t(202),n=t(196),r=t(197),o=t(198),c=t(199),s=t(0),i=t.n(s),d=t(2),u=t(605),m=t(606),p=t(619),h=t(643),b=t(200),E=t(59),v=t(621),g=t.n(v),f=t(610),y=t.n(f),N=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(l.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var a=JSON.parse(localStorage.getItem("user_id")),t=localStorage.getItem("astroId"),l=JSON.parse(localStorage.getItem("shipping_address")),n={userid:a,astroId:t,productId:JSON.parse(localStorage.getItem("productid")),name:r.state.name,email:r.state.email,city:r.state.city,state:r.state.state,country:r.state.country,pincode:r.state.pincode,locality:r.state.locality,landmark:r.state.landmark,shipping_address:l,mobile:parseInt(r.state.mobile),flat_no:parseInt(r.state.flat_no),alt_mobile:parseInt(r.state.alt_mobile)};E.a.post("/user/add_shipping_address",n).then((function(e){g()("Success!","Submitted SuccessFull!","success"),window.location.reload("/addressForm")})).catch((function(e){g()("Error!","You clicked the button!","error"),console.log(e)})),E.a.post("/user/addtoCart",n).then((function(e){console.log("@@@@@",e.data.data.data),g()("Success!","Submitted SuccessFull!","success"),window.location.reload("/addressForm")})).catch((function(e){g()("Error!","You clicked the button!","error"),console.log(e)}))},r.handledeliveryAddress=function(e){var a=localStorage.getItem("astroproduct_id"),t={astroId:sessionStorage.getItem("AstroMall_consultant_id"),userId:JSON.parse(localStorage.getItem("user_id")),productid:a,shipping_address:e};E.a.post("/user/addtoCart",t).then((function(e){var a,t;console.log("addtoCart",null===(a=e.data.data)||void 0===a?void 0:a._id);var l=null===e||void 0===e||null===(t=e.data.data)||void 0===t?void 0:t._id;r.props.history.push("/cartlist/".concat(l))})).catch((function(e){console.log(e.response)}))},r.addressDelete=function(e){E.a.get("/user/dlt_address/"+e).then((function(e){console.log("@@@@@",e.data.data),g()("Success!","Address SuccessFull! Deleted","success"),window.location.reload(!0)})).catch((function(e){g()("Error!","You clicked the button!","error"),console.log(e)}))},r.state={name:"",mobile:"",email:"",userid:"",alt_mobile:"",flat_no:"",locality:"",city:"",state:"",country:"",pincode:"",landmark:"",data:[],viewoneAddressData:[]},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;console.log(a);var t=JSON.parse(localStorage.getItem("user_id"));E.a.get("/user/viewone_address/".concat(t)).then((function(a){console.log("viewone_address",a.data.data),e.setState({viewoneAddressData:a.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,a=this.state.viewoneAddressData;return i.a.createElement(b.a,{headerTop:"visible"},i.a.createElement("section",{className:"pt-0 pb-0"},i.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(y.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},i.a.createElement(u.a,null,i.a.createElement(m.a,null,i.a.createElement(p.a,{md:"12"},i.a.createElement("div",{className:"leftcont text-left"},i.a.createElement("h1",null,"Astromall Shop/ Product Detail/ Consultant List/ Address"),i.a.createElement("h3",null,"Shop Best Online Astrology Products And Services"))))))),i.a.createElement("section",{className:""},i.a.createElement(u.a,null,i.a.createElement("div",{className:"multi-address"},i.a.createElement(m.a,null,a.length?a.map((function(a){return i.a.createElement(p.a,{lg:"6",className:"mb-20"},i.a.createElement("div",{className:"wal-amt"},i.a.createElement("h3",null,"Continue with your saved address",i.a.createElement("span",null,i.a.createElement(d.c,{to:"/addressformedit/"+(null===a||void 0===a?void 0:a._id),className:""},i.a.createElement("i",{className:"pe-7s-note ad-edit"})),i.a.createElement(d.c,{onClick:function(){return e.addressDelete(null===a||void 0===a?void 0:a._id)},className:" "},i.a.createElement("i",{className:"pe-7s-trash ad-del"})))),i.a.createElement("hr",null),i.a.createElement("div",{className:"user-pro py-0"},i.a.createElement("ul",null,i.a.createElement("li",null,"Name : ",i.a.createElement("span",null,null===a||void 0===a?void 0:a.name)),i.a.createElement("li",null,"Mobile : ",i.a.createElement("span",null,null===a||void 0===a?void 0:a.mobile)),i.a.createElement("li",null,"Email : ",i.a.createElement("span",null,null===a||void 0===a?void 0:a.email)),i.a.createElement("li",null,"Address :",i.a.createElement("span",null,(null===a||void 0===a?void 0:a.flat_no)+","+(null===a||void 0===a?void 0:a.locality)+","+(null===a||void 0===a?void 0:a.city)+"("+a.pincode+")")),i.a.createElement("li",null,"City : ",i.a.createElement("span",null,null===a||void 0===a?void 0:a.city)),i.a.createElement("li",null,"State : ",i.a.createElement("span",null,null===a||void 0===a?void 0:a.state)),i.a.createElement("li",null,"Locality : ",i.a.createElement("span",null,null===a||void 0===a?void 0:a.locality)),i.a.createElement("li",null,"Pin Code :"," ",i.a.createElement("span",null,(null===a||void 0===a?void 0:a.pincode)?null===a||void 0===a?void 0:a.pincode:"NA")))),i.a.createElement("div",{onClick:function(){return e.handledeliveryAddress(null===a||void 0===a?void 0:a._id)},className:"py-3 text-center"},i.a.createElement(d.c,null,i.a.createElement(h.a,{className:"btn btn-warning"},"Deliver To This Address"," ")))))})):null)),i.a.createElement(m.a,null,i.a.createElement(p.a,{lg:"12"},i.a.createElement("div",{className:"wal-amt"},i.a.createElement("h3",null,"Add New Address "),i.a.createElement("hr",null),i.a.createElement("form",{onSubmit:this.submitHandler},i.a.createElement(m.a,null,i.a.createElement(p.a,{md:"4"},i.a.createElement("div",{class:"form-group mtb-10"},i.a.createElement("label",null,"Name*"),i.a.createElement("input",{type:"text",name:"name",required:!0,placeholder:"Enter Your Fullname",value:this.state.name,onChange:this.changeHandler}))),i.a.createElement(p.a,{md:"4"},i.a.createElement("div",{class:"form-group mtb-10"},i.a.createElement("label",null,"Email address*"),i.a.createElement("input",{type:"email",name:"email",required:!0,placeholder:"Enter Your email",value:this.state.email,onChange:this.changeHandler}))),i.a.createElement(p.a,{md:"4"},i.a.createElement("div",{class:"form-group mtb-10"},i.a.createElement("label",null,"Mobile Number*"),i.a.createElement("input",{type:"number",name:"mobile",required:!0,placeholder:"Enter Your Number",value:this.state.mobile,onChange:this.changeHandler}))),i.a.createElement(p.a,{md:"4"},i.a.createElement("div",{class:"form-group mtb-10"},i.a.createElement("label",null,"Alternative Number*"),i.a.createElement("input",{type:"text",name:"alt_mobile",required:!0,placeholder:"Enter Your Number",value:this.state.alt_mobile,onChange:this.changeHandler}))),i.a.createElement(p.a,{md:"4"},i.a.createElement("div",{class:"form-group mtb-10"},i.a.createElement("label",null,"Flat No:*"),i.a.createElement("input",{type:"text",name:"flat_no",required:!0,placeholder:"Enter Your Number",value:this.state.flat_no,onChange:this.changeHandler}))),i.a.createElement(p.a,{md:"4"},i.a.createElement("div",{class:"form-group mtb-10"},i.a.createElement("label",null,"Locality*"),i.a.createElement("input",{type:"text",name:"locality",required:!0,placeholder:"Enter Your Number",value:this.state.locality,onChange:this.changeHandler}))),i.a.createElement(p.a,{md:"4"},i.a.createElement("div",{class:"form-group mtb-10"},i.a.createElement("label",null,"City*"),i.a.createElement("input",{type:"text",name:"city",required:!0,placeholder:"Enter Your Number",value:this.state.city,onChange:this.changeHandler}))),i.a.createElement(p.a,{md:"4"},i.a.createElement("div",{class:"form-group mtb-10"},i.a.createElement("label",null,"State / Province*"),i.a.createElement("input",{type:"text",name:"state",required:!0,placeholder:"Enter Your state",value:this.state.state,onChange:this.changeHandler}))),i.a.createElement(p.a,{md:"4"},i.a.createElement("div",{class:"form-group mtb-10"},i.a.createElement("label",null,"Country*"),i.a.createElement("input",{type:"text",name:"country",required:!0,placeholder:"Enter Your Country",value:this.state.country,onChange:this.changeHandler}))),i.a.createElement(p.a,{md:"4"},i.a.createElement("div",{class:"form-group mtb-10"},i.a.createElement("label",null,"PinCode*"),i.a.createElement("input",{type:"number",name:"pincode",required:!0,placeholder:"Enter Your Number",value:this.state.pincode,onChange:this.changeHandler}))),i.a.createElement(p.a,{md:"4"},i.a.createElement("div",{class:"form-group mtb-10"},i.a.createElement("label",null,"Landmark*"),i.a.createElement("input",{type:"text",name:"landmark",required:!0,placeholder:"Enter Your landmark",value:this.state.landmark,onChange:this.changeHandler}))),i.a.createElement(p.a,{md:"12",className:"mt-3"},i.a.createElement(h.a,{className:"btn btn-warning"},"Save Address"))))))))))}}]),t}(i.a.Component);a.default=N},610:function(e,a,t){e.exports=t.p+"static/media/astrologin-bg.f858568c.jpg"},619:function(e,a,t){"use strict";var l=t(7),n=t(15),r=t(0),o=t.n(r),c=t(4),s=t.n(c),i=t(78),d=t.n(i),u=t(54),m=["className","cssModule","widths","tag"],p=s.a.oneOfType([s.a.number,s.a.string]),h=s.a.oneOfType([s.a.bool,s.a.number,s.a.string,s.a.shape({size:s.a.oneOfType([s.a.bool,s.a.number,s.a.string]),order:p,offset:p})]),b={tag:u.n,xs:h,sm:h,md:h,lg:h,xl:h,className:s.a.string,cssModule:s.a.object,widths:s.a.array},E={tag:"div",widths:["xs","sm","md","lg","xl"]},v=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,r=e.widths,c=e.tag,s=Object(n.a)(e,m),i=[];r.forEach((function(a,l){var n=e[a];if(delete s[a],n||""===n){var r=!l;if(Object(u.h)(n)){var o,c=r?"-":"-"+a+"-",m=v(r,a,n.size);i.push(Object(u.j)(d()(((o={})[m]=n.size||""===n.size,o["order"+c+n.order]=n.order||0===n.order,o["offset"+c+n.offset]=n.offset||0===n.offset,o)),t))}else{var p=v(r,a,n);i.push(p)}}})),i.length||i.push("col");var p=Object(u.j)(d()(a,i),t);return o.a.createElement(c,Object(l.a)({},s,{className:p}))};g.propTypes=b,g.defaultProps=E,a.a=g},643:function(e,a,t){"use strict";var l=t(7),n=t(15),r=t(203),o=t(20),c=t(0),s=t.n(c),i=t(4),d=t.n(i),u=t(78),m=t.n(u),p=t(54),h=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],b={active:d.a.bool,"aria-label":d.a.string,block:d.a.bool,color:d.a.string,disabled:d.a.bool,outline:d.a.bool,tag:p.n,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),onClick:d.a.func,size:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,close:d.a.bool},E=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(r.a)(t)),t}Object(o.a)(a,e);var t=a.prototype;return t.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],r=e.block,o=e.className,c=e.close,i=e.cssModule,d=e.color,u=e.outline,b=e.size,E=e.tag,v=e.innerRef,g=Object(n.a)(e,h);c&&"undefined"===typeof g.children&&(g.children=s.a.createElement("span",{"aria-hidden":!0},"\xd7"));var f="btn"+(u?"-outline":"")+"-"+d,y=Object(p.j)(m()(o,{close:c},c||"btn",c||f,!!b&&"btn-"+b,!!r&&"btn-block",{active:a,disabled:this.props.disabled}),i);g.href&&"button"===E&&(E="a");var N=c?"Close":null;return s.a.createElement(E,Object(l.a)({type:"button"===E&&g.onClick?"button":void 0},g,{className:y,ref:v,onClick:this.onClick,"aria-label":t||N}))},a}(s.a.Component);E.propTypes=b,E.defaultProps={color:"secondary",tag:"button"},a.a=E}}]);
//# sourceMappingURL=119.c1c58696.chunk.js.map