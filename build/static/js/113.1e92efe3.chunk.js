(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[113],{1132:function(e,t,a){"use strict";a.r(t);var n=a(202),l=a(196),r=a(197),o=a(198),c=a(199),i=a(0),s=a.n(i),m=a(604),u=a(605),p=a(615),d=a(678),f=a(645),h=a(200),b=a(71),E=a(621),g=a.n(E),v=a(608),_=a.n(v),y=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]}),r.setState({selectedName:e.target.files[0].name}),console.log("cdcd",e.target.files[0])},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var t=JSON.parse(localStorage.getItem("user_id")),a=localStorage.getItem("astroId"),n=new FormData;n.append("userid",t),n.append("astroid",a),n.append("mobile",parseInt(r.state.mobile)),n.append("firstname",r.state.firstname),n.append("lastname",r.state.lastname),n.append("dob",r.state.dob),n.append("p_firstname",r.state.p_firstname),n.append("p_lastname",r.state.p_lastname),n.append("birthPlace",r.state.birthPlace),n.append("p_birthPlace",r.state.p_birthPlace),n.append("date_of_time",r.state.date_of_time),n.append("p_date_of_time",r.state.p_date_of_time),n.append("gender",r.state.gender),n.append("marital_status",r.state.marital_status),n.append("occupation",r.state.occupation),n.append("topic_of_cnsrn",r.state.topic_of_cnsrn),n.append("entertopic_of_cnsrn",r.state.entertopic_of_cnsrn),null!==r.state.selectedFile&&n.append("file",r.state.selectedFile),b.a.post("/user/add_chat_intake",n).then((function(e){g()("Success!","Submitted SuccessFull!","success"),r.props.history.push("/CallListData")})).catch((function(e){g()("Error!","You clicked the button!","error")}))},r.state={userid:"",astroid:"",mobile:"",firstname:"",p_firstname:"",lastname:"",p_lastname:"",dob:"",p_dob:"",date_of_time:"",p_date_of_time:"",birthPlace:"",p_birthPlace:"",gender:"",marital_status:"",occupation:"",topic_of_cnsrn:"",entertopic_of_cnsrn:"",data:[],selectedFile:{},selectedName:""},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=JSON.parse(localStorage.getItem("user_id"));b.a.get("/user/viewoneuser/".concat(t)).then((function(t){e.setState({mobile:t.data.data.mobile})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return s.a.createElement(h.a,{headerTop:"visible"},s.a.createElement("section",{className:"pt-0 pb-0"},s.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(_.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},s.a.createElement(m.a,null,s.a.createElement(u.a,null,s.a.createElement(p.a,{md:"12"},s.a.createElement("div",{className:"leftcont text-left"},s.a.createElement("h1",null,"Call InTake Form"))))))),s.a.createElement("section",{className:""},s.a.createElement(m.a,null,s.a.createElement(u.a,null,s.a.createElement(p.a,{lg:"12"},s.a.createElement("div",{className:"wal-amt"},s.a.createElement("h3",null,"Call InTake Form "),s.a.createElement("hr",null),s.a.createElement("form",{onSubmit:this.submitHandler},s.a.createElement(u.a,null,s.a.createElement(p.a,{md:"4"},s.a.createElement("div",{class:"form-group mtb-10"},s.a.createElement("label",null,"Mobile Number*"),s.a.createElement("input",{type:"text",name:"mobile",value:this.state.mobile,onChange:this.changeHandler,required:!0,placeholder:"Enter Your Number"}))),s.a.createElement(p.a,{md:"4"},s.a.createElement("div",{class:"form-group mtb-10"},s.a.createElement("label",null,"First Name*"),s.a.createElement("input",{type:"text",name:"firstname",required:!0,placeholder:"Enter Your FirstName",value:this.state.fullname,onChange:this.changeHandler}))),s.a.createElement(p.a,{md:"4"},s.a.createElement("div",{class:"form-group mtb-10"},s.a.createElement("label",null," Last Name*"),s.a.createElement("input",{required:!0,type:"text",name:"lastname",placeholder:"Enter Your  Lastname",value:this.state.lastname,onChange:this.changeHandler}))),s.a.createElement(p.a,{md:"4"},s.a.createElement("div",{class:"form-group mtb-10"},s.a.createElement("label",null,"Date of Birth*"),s.a.createElement("input",{type:"date",name:"dob",value:this.state.dob,onChange:this.changeHandler,required:!0,placeholder:"Enter Your Number"}))),s.a.createElement(p.a,{md:"4"},s.a.createElement("div",{class:"form-group mtb-10"},s.a.createElement("label",null,"Date of Time*"),s.a.createElement("input",{type:"time",name:"date_of_time",value:this.state.date_of_time,onChange:this.changeHandler,required:!0,placeholder:"Enter Your Number"}))),s.a.createElement(p.a,{md:"4"},s.a.createElement("div",{class:"form-group mtb-10"},s.a.createElement("label",null,"Birth Place*"),s.a.createElement("input",{type:"text",name:"birthPlace",value:this.state.birthPlace,onChange:this.changeHandler,required:!0,placeholder:"Enter Your  Birth Place"}))),s.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},s.a.createElement("label",null,"Gender*"),s.a.createElement(d.a,{id:"exampleSelect",name:"gender",type:"select",value:this.state.data.gender,onChange:this.changeHandler},s.a.createElement("option",null,"Select Gender"),s.a.createElement("option",null,"Male"),s.a.createElement("option",null,"Female"))),s.a.createElement(p.a,{md:"4"},s.a.createElement("div",{class:"form-group mtb-10"},s.a.createElement("label",null,"Marital Status*"),s.a.createElement(d.a,{type:"select",name:"marital_status",value:this.state.marital_status,onChange:this.changeHandler},s.a.createElement("option",null,"Select Marital Status"),s.a.createElement("option",null,"Single"),s.a.createElement("option",null,"Married"),s.a.createElement("option",null,"Divorced"),s.a.createElement("option",null,"Separated"),s.a.createElement("option",null,"Widowed")))),s.a.createElement(p.a,{md:"4"},s.a.createElement("div",{class:"form-group mtb-10"},s.a.createElement("label",null,"Occupation*"),s.a.createElement(d.a,{type:"select",name:"occupation",value:this.state.data.occupation,onChange:this.changeHandler},s.a.createElement("option",null,"Select Employed in"),s.a.createElement("option",null,"Private Sector"),s.a.createElement("option",null,"Govt Sector"),s.a.createElement("option",null,"Business/Self Employed"),s.a.createElement("option",null,"Civil Services"),s.a.createElement("option",null,"Defence"),s.a.createElement("option",null,"Not Working"),s.a.createElement("option",null,"Student")))),s.a.createElement(p.a,{md:"4"},s.a.createElement("div",{class:"form-group mtb-10"},s.a.createElement("label",null,"Topic of concern*"),s.a.createElement(d.a,{type:"select",name:"topic_of_cnsrn",value:this.state.data.topic_of_cnsrn,onChange:this.changeHandler},s.a.createElement("option",null,"Select Topic"),s.a.createElement("option",null,"Career and Business"),s.a.createElement("option",null,"Marriage"),s.a.createElement("option",null,"Love and Relationship"),s.a.createElement("option",null,"Wealth and Property"),s.a.createElement("option",null,"Education"),s.a.createElement("option",null,"Legal Matters"),s.a.createElement("option",null,"Child Name Consultation"),s.a.createElement("option",null,"Business Name Consultation"),s.a.createElement("option",null,"Gem Stone Consultation"),s.a.createElement("option",null,"Commodity trading consultation"),s.a.createElement("option",null,"Match making"),s.a.createElement("option",null,"Birth Time Rectification"),s.a.createElement("option",null,"Name Correction Consultation"),s.a.createElement("option",null,"Travel Abroad Consulation"),s.a.createElement("option",null,"Remedy Consultation"),s.a.createElement("option",null,"Health Consultation"),s.a.createElement("option",null,"Others")))),s.a.createElement(p.a,{md:"4"},s.a.createElement("div",{class:"form-group mtb-10"},s.a.createElement("label",null,"Enter topic of concern:"),s.a.createElement("input",{type:"text",name:"entertopic_of_cnsrn",required:!0,placeholder:"Enter Your Fullname",value:this.state.entertopic_of_cnsrn,onChange:this.changeHandler}))),s.a.createElement(p.a,{md:"4"},s.a.createElement("div",{class:"form-group mtb-10"},s.a.createElement("label",null,"Patner First Name*"),s.a.createElement("input",{type:"text",name:"p_firstname",placeholder:"Enter Your Patner firstname",value:this.state.p_firstname,onChange:this.changeHandler}))),s.a.createElement(p.a,{md:"4"},s.a.createElement("div",{class:"form-group mtb-10"},s.a.createElement("label",null,"Patner Last Name*"),s.a.createElement("input",{type:"text",name:"p_lastname",placeholder:"Enter Your Patner Lastname",value:this.state.p_lastname,onChange:this.changeHandler}))),s.a.createElement(p.a,{md:"4"},s.a.createElement("div",{class:"form-group mtb-10"},s.a.createElement("label",null," Patner Date of Birth*"),s.a.createElement("input",{type:"date",name:"p_dob",value:this.state.p_dob,onChange:this.changeHandler,placeholder:"Enter Your Number"}))),s.a.createElement(p.a,{md:"4"},s.a.createElement("div",{class:"form-group mtb-10"},s.a.createElement("label",null," Patner Date of Time*"),s.a.createElement("input",{type:"time",name:"p_date_of_time",value:this.state.p_date_of_time,onChange:this.changeHandler,placeholder:"Enter Your Number"}))),s.a.createElement(p.a,{md:"4"},s.a.createElement("div",{class:"form-group mtb-10"},s.a.createElement("label",null," Partnar Birth Place"),s.a.createElement("input",{type:"text",name:"p_birthPlace",value:this.state.p_birthPlace,onChange:this.changeHandler,placeholder:"Enter Your  Birth Place"}))),s.a.createElement(p.a,{md:"4"},s.a.createElement("div",{class:"form-group mtb-10"},s.a.createElement("label",null," Attachment"),s.a.createElement("input",{type:"file",onChange:this.onChangeHandler,accept:"image/png, image/jpeg,.doc,image/jpg,.pdf",required:!0}))),s.a.createElement(p.a,{md:"12",className:"mt-3"},s.a.createElement(f.a,{className:"btn btn-warning"},"Start Call with ",localStorage.getItem("astroname")))))))))))}}]),a}(s.a.Component);t.default=y},608:function(e,t,a){e.exports=a.p+"static/media/astrologin-bg.f858568c.jpg"},615:function(e,t,a){"use strict";var n=a(7),l=a(15),r=a(0),o=a.n(r),c=a(4),i=a.n(c),s=a(78),m=a.n(s),u=a(54),p=["className","cssModule","widths","tag"],d=i.a.oneOfType([i.a.number,i.a.string]),f=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:d,offset:d})]),h={tag:u.n,xs:f,sm:f,md:f,lg:f,xl:f,className:i.a.string,cssModule:i.a.object,widths:i.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},E=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},g=function(e){var t=e.className,a=e.cssModule,r=e.widths,c=e.tag,i=Object(l.a)(e,p),s=[];r.forEach((function(t,n){var l=e[t];if(delete i[t],l||""===l){var r=!n;if(Object(u.h)(l)){var o,c=r?"-":"-"+t+"-",p=E(r,t,l.size);s.push(Object(u.j)(m()(((o={})[p]=l.size||""===l.size,o["order"+c+l.order]=l.order||0===l.order,o["offset"+c+l.offset]=l.offset||0===l.offset,o)),a))}else{var d=E(r,t,l);s.push(d)}}})),s.length||s.push("col");var d=Object(u.j)(m()(t,s),a);return o.a.createElement(c,Object(n.a)({},i,{className:d}))};g.propTypes=h,g.defaultProps=b,t.a=g},645:function(e,t,a){"use strict";var n=a(7),l=a(15),r=a(203),o=a(20),c=a(0),i=a.n(c),s=a(4),m=a.n(s),u=a(78),p=a.n(u),d=a(54),f=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],h={active:m.a.bool,"aria-label":m.a.string,block:m.a.bool,color:m.a.string,disabled:m.a.bool,outline:m.a.bool,tag:d.n,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),onClick:m.a.func,size:m.a.string,children:m.a.node,className:m.a.string,cssModule:m.a.object,close:m.a.bool},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(r.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],r=e.block,o=e.className,c=e.close,s=e.cssModule,m=e.color,u=e.outline,h=e.size,b=e.tag,E=e.innerRef,g=Object(l.a)(e,f);c&&"undefined"===typeof g.children&&(g.children=i.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(u?"-outline":"")+"-"+m,_=Object(d.j)(p()(o,{close:c},c||"btn",c||v,!!h&&"btn-"+h,!!r&&"btn-block",{active:t,disabled:this.props.disabled}),s);g.href&&"button"===b&&(b="a");var y=c?"Close":null;return i.a.createElement(b,Object(n.a)({type:"button"===b&&g.onClick?"button":void 0},g,{className:_,ref:E,onClick:this.onClick,"aria-label":a||y}))},t}(i.a.Component);b.propTypes=h,b.defaultProps={color:"secondary",tag:"button"},t.a=b},678:function(e,t,a){"use strict";var n=a(7),l=a(15),r=a(203),o=a(20),c=a(0),i=a.n(c),s=a(4),m=a.n(s),u=a(78),p=a.n(u),d=a(54),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:d.n,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.focus=a.focus.bind(Object(r.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.type,o=e.bsSize,c=e.valid,s=e.invalid,m=e.tag,u=e.addon,h=e.plaintext,b=e.innerRef,E=Object(l.a)(e,f),g=["radio","checkbox"].indexOf(r)>-1,v=new RegExp("\\D","g"),_=m||("select"===r||"textarea"===r?r:"input"),y="form-control";h?(y+="-plaintext",_=m||"input"):"file"===r?y+="-file":"range"===r?y+="-range":g&&(y=u?null:"form-check-input"),E.size&&v.test(E.size)&&(Object(d.p)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=E.size,delete E.size);var C=Object(d.j)(p()(t,s&&"is-invalid",c&&"is-valid",!!o&&"form-control-"+o,y),a);return("input"===_||m&&"function"===typeof m)&&(E.type=r),E.children&&!h&&"select"!==r&&"string"===typeof _&&"select"!==_&&(Object(d.p)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete E.children),i.a.createElement(_,Object(n.a)({},E,{ref:b,className:C,"aria-invalid":s}))},t}(i.a.Component);b.propTypes=h,b.defaultProps={type:"text"},t.a=b}}]);
//# sourceMappingURL=113.1e92efe3.chunk.js.map