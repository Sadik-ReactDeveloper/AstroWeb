(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[120],{1180:function(e,a,t){"use strict";t.r(a);var n=t(202),l=t(196),r=t(197),o=t(198),c=t(199),s=t(0),i=t.n(s),m=t(604),u=t(605),d=t(615),p=t(645),b=t(200),h=t(608),f=t.n(h),E=t(71),g=t(621),v=t.n(g),y=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=a.call(this,e)).changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var a=r.props.match.params.id;console.log(a),E.a.post("/user/edit_address/".concat(a),r.state).then((function(e){console.log(e.data),v()("Success!","Submitted SuccessFull!","success"),r.props.history.push("/addressform/ + ".concat(a))})).catch((function(e){v()("Error!","You clicked the button!","error"),console.log(e.response)}))},r.state={alt_mobile:"",flat_no:"",locality:"",city:"",state:"",country:"",pincode:"",landmark:"",name:"",mobile:""},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;E.a.get("/user/getone_address/".concat(a)).then((function(a){console.log(a.data.data),e.setState({name:a.data.data[0].name,email:a.data.data[0].email,mobile:a.data.data[0].mobile,alt_mobile:a.data.data[0].alt_mobile,flat_no:a.data.data[0].flat_no,city:a.data.data[0].city,locality:a.data.data[0].locality,pincode:a.data.data[0].pincode,state:a.data.data[0].state,country:a.data.data[0].country,landmark:a.data.data[0].landmark})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return i.a.createElement(b.a,{headerTop:"visible"},i.a.createElement("section",{className:"pt-0 pb-0"},i.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(f.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},i.a.createElement(m.a,null,i.a.createElement(u.a,null,i.a.createElement(d.a,{md:"12"},i.a.createElement("div",{className:"leftcont text-left"},i.a.createElement("h1",null,"Astromall Shop/ Product Detail/ Consultant List/ Edit Address"),i.a.createElement("h3",null,"Shop Best Online Astrology Products And Services"))))))),i.a.createElement("section",{className:""},i.a.createElement(m.a,null,i.a.createElement(u.a,null,i.a.createElement(d.a,{lg:"12"},i.a.createElement("div",{className:"wal-amt"},i.a.createElement("h3",null,"Edit Address "),i.a.createElement("hr",null),i.a.createElement("form",{onSubmit:this.submitHandler},i.a.createElement(u.a,null,i.a.createElement(d.a,{md:"4"},i.a.createElement("div",{class:"form-group mtb-10"},i.a.createElement("label",null,"Name*"),i.a.createElement("input",{type:"text",name:"name",required:!0,placeholder:"Enter Your Fullname",value:this.state.name,onChange:this.changeHandler}))),i.a.createElement(d.a,{md:"4"},i.a.createElement("div",{class:"form-group mtb-10"},i.a.createElement("label",null,"Email address*"),i.a.createElement("input",{type:"email",name:"email",required:!0,placeholder:"Enter Your email",value:this.state.email,onChange:this.changeHandler}))),i.a.createElement(d.a,{md:"4"},i.a.createElement("div",{class:"form-group mtb-10"},i.a.createElement("label",null,"Mobile Number*"),i.a.createElement("input",{type:"number",name:"mobile",required:!0,placeholder:"Enter Your Number",value:this.state.mobile,onChange:this.changeHandler}))),i.a.createElement(d.a,{md:"4"},i.a.createElement("div",{class:"form-group mtb-10"},i.a.createElement("label",null,"Alternative Number*"),i.a.createElement("input",{type:"text",name:"alt_mobile",required:!0,placeholder:"Enter Your Number",value:this.state.alt_mobile,onChange:this.changeHandler}))),i.a.createElement(d.a,{md:"4"},i.a.createElement("div",{class:"form-group mtb-10"},i.a.createElement("label",null,"Flat No:*"),i.a.createElement("input",{type:"text",name:"flat_no",required:!0,placeholder:"Enter Your Number",value:this.state.flat_no,onChange:this.changeHandler}))),i.a.createElement(d.a,{md:"4"},i.a.createElement("div",{class:"form-group mtb-10"},i.a.createElement("label",null,"Locality*"),i.a.createElement("input",{type:"text",name:"locality",required:!0,placeholder:"Enter Your Number",value:this.state.locality,onChange:this.changeHandler}))),i.a.createElement(d.a,{md:"4"},i.a.createElement("div",{class:"form-group mtb-10"},i.a.createElement("label",null,"City*"),i.a.createElement("input",{type:"text",name:"city",required:!0,placeholder:"Enter Your Number",value:this.state.city,onChange:this.changeHandler}))),i.a.createElement(d.a,{md:"4"},i.a.createElement("div",{class:"form-group mtb-10"},i.a.createElement("label",null,"State / Province*"),i.a.createElement("input",{type:"text",name:"state",required:!0,placeholder:"Enter Your state",value:this.state.state,onChange:this.changeHandler}))),i.a.createElement(d.a,{md:"4"},i.a.createElement("div",{class:"form-group mtb-10"},i.a.createElement("label",null,"Country*"),i.a.createElement("input",{type:"text",name:"country",required:!0,placeholder:"Enter Your Country",value:this.state.country,onChange:this.changeHandler}))),i.a.createElement(d.a,{md:"4"},i.a.createElement("div",{class:"form-group mtb-10"},i.a.createElement("label",null,"PinCode*"),i.a.createElement("input",{type:"number",name:"pincode",required:!0,placeholder:"Enter Your Number",value:this.state.pincode,onChange:this.changeHandler}))),i.a.createElement(d.a,{md:"4"},i.a.createElement("div",{class:"form-group mtb-10"},i.a.createElement("label",null,"Landmark*"),i.a.createElement("input",{type:"text",name:"landmark",required:!0,placeholder:"Enter Your landmark",value:this.state.landmark,onChange:this.changeHandler}))),i.a.createElement(d.a,{md:"12",className:"mt-3"},i.a.createElement(p.a,{type:"submit",className:"btn btn-warning"},"Edit Address"))))))))))}}]),t}(i.a.Component);a.default=y},608:function(e,a,t){e.exports=t.p+"static/media/astrologin-bg.f858568c.jpg"},615:function(e,a,t){"use strict";var n=t(7),l=t(15),r=t(0),o=t.n(r),c=t(4),s=t.n(c),i=t(78),m=t.n(i),u=t(54),d=["className","cssModule","widths","tag"],p=s.a.oneOfType([s.a.number,s.a.string]),b=s.a.oneOfType([s.a.bool,s.a.number,s.a.string,s.a.shape({size:s.a.oneOfType([s.a.bool,s.a.number,s.a.string]),order:p,offset:p})]),h={tag:u.n,xs:b,sm:b,md:b,lg:b,xl:b,className:s.a.string,cssModule:s.a.object,widths:s.a.array},f={tag:"div",widths:["xs","sm","md","lg","xl"]},E=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,r=e.widths,c=e.tag,s=Object(l.a)(e,d),i=[];r.forEach((function(a,n){var l=e[a];if(delete s[a],l||""===l){var r=!n;if(Object(u.h)(l)){var o,c=r?"-":"-"+a+"-",d=E(r,a,l.size);i.push(Object(u.j)(m()(((o={})[d]=l.size||""===l.size,o["order"+c+l.order]=l.order||0===l.order,o["offset"+c+l.offset]=l.offset||0===l.offset,o)),t))}else{var p=E(r,a,l);i.push(p)}}})),i.length||i.push("col");var p=Object(u.j)(m()(a,i),t);return o.a.createElement(c,Object(n.a)({},s,{className:p}))};g.propTypes=h,g.defaultProps=f,a.a=g},645:function(e,a,t){"use strict";var n=t(7),l=t(15),r=t(203),o=t(20),c=t(0),s=t.n(c),i=t(4),m=t.n(i),u=t(78),d=t.n(u),p=t(54),b=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],h={active:m.a.bool,"aria-label":m.a.string,block:m.a.bool,color:m.a.string,disabled:m.a.bool,outline:m.a.bool,tag:p.n,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),onClick:m.a.func,size:m.a.string,children:m.a.node,className:m.a.string,cssModule:m.a.object,close:m.a.bool},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(r.a)(t)),t}Object(o.a)(a,e);var t=a.prototype;return t.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],r=e.block,o=e.className,c=e.close,i=e.cssModule,m=e.color,u=e.outline,h=e.size,f=e.tag,E=e.innerRef,g=Object(l.a)(e,b);c&&"undefined"===typeof g.children&&(g.children=s.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(u?"-outline":"")+"-"+m,y=Object(p.j)(d()(o,{close:c},c||"btn",c||v,!!h&&"btn-"+h,!!r&&"btn-block",{active:a,disabled:this.props.disabled}),i);g.href&&"button"===f&&(f="a");var k=c?"Close":null;return s.a.createElement(f,Object(n.a)({type:"button"===f&&g.onClick?"button":void 0},g,{className:y,ref:E,onClick:this.onClick,"aria-label":t||k}))},a}(s.a.Component);f.propTypes=h,f.defaultProps={color:"secondary",tag:"button"},a.a=f}}]);
//# sourceMappingURL=120.32c9014a.chunk.js.map