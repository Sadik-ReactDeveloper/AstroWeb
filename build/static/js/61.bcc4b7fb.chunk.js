(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[61],{1207:function(t,e,a){"use strict";a.r(e);var o=a(196),n=a(197),r=a(198),i=a(199),s=a(0),c=a.n(s),l=a(605),u=a(606),d=a(619),h=a(610),f=a.n(h),m=a(200),v=(a(629),a(59)),g=a(92),p=a(206),y=(a(695),a(210)),b=a.n(y),E=function(t){Object(r.a)(a,t);var e=Object(i.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={userChatList:[],Activeastro:{},index:""},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var t=this,e=localStorage.getItem("astroId");v.a.get("/admin/getoneAstro/".concat(e)).then((function(e){var a;console.log(e.data.data),t.setState({Activeastro:null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.data})})).catch((function(t){console.log(t)}));var a=JSON.parse(localStorage.getItem("user_id"));console.log(a),v.a.get("/user/getroomid/".concat(a)).then((function(e){var a,o,n;(console.log(null===(a=e.data)||void 0===a?void 0:a.data),!0===e.data.status)&&t.setState({userChatList:null===(o=e.data)||void 0===o?void 0:o.data,roomid:null===(n=e.data.data)||void 0===n?void 0:n.roomid})})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){var t=this,e=this.state,a=e.userChatList,o=e.index;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container"}),c.a.createElement("ul",null,a.length?a.map((function(e,a){var n,r;return c.a.createElement("li",{className:"astrolistmain",style:{backgroundColor:"".concat(o===a?"#ef9014":"white")}},c.a.createElement("div",{key:null===e||void 0===e?void 0:e._id,className:"list-main",onClick:function(){t.props.getChatRoomId(e,a),t.setState({index:a})}},c.a.createElement("div",{className:"imglf"},c.a.createElement("img",{src:null===(n=e.astroid)||void 0===n?void 0:n.img,className:"app-img",alt:"astroimg"})),c.a.createElement("div",{onClick:function(){return t.props.getChatRoomId(e)},className:"lst-con"},c.a.createElement("h5",{onClick:function(){return t.props.getChatRoomId(e)}},null===(r=e.astroid)||void 0===r?void 0:r.fullname),c.a.createElement("p",{onClick:function(){return t.props.getChatRoomId(e)}},e.msg))))})):null))}}]),a}(c.a.Component),w=function(t){Object(r.a)(a,t);var e=Object(i.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).componentDidMount=function(){},n.state={userChatList:[],Activeastro:{},index:""},n}return Object(n.a)(a,[{key:"render",value:function(){return console.log("roomChatData",this.props.roomChatData),c.a.createElement(c.a.Fragment,null,this.props.roomChatData.length?this.props.roomChatData.map((function(t,e){return c.a.createElement(c.a.Fragment,null,"user"===t.type?c.a.createElement("div",{className:"message me"},c.a.createElement("div",{className:"message-body"},t.msg)):c.a.createElement("div",{className:"message"},c.a.createElement("div",{className:"message-body"},t.msg)))})).reverse():null)}}]),a}(c.a.Component),C=a(212),S=a(621),O=a.n(S);function I(){I=function(){return t};var t={},e=Object.prototype,a=e.hasOwnProperty,o=Object.defineProperty||function(t,e,a){t[e]=a.value},n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function c(t,e,a){return Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(k){c=function(t,e,a){return t[e]=a}}function l(t,e,a,n){var r=e&&e.prototype instanceof h?e:h,i=Object.create(r.prototype),s=new x(n||[]);return o(i,"_invoke",{value:w(t,a,s)}),i}function u(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(k){return{type:"throw",arg:k}}}t.wrap=l;var d={};function h(){}function f(){}function m(){}var v={};c(v,r,(function(){return this}));var g=Object.getPrototypeOf,p=g&&g(g(j([])));p&&p!==e&&a.call(p,r)&&(v=p);var y=m.prototype=h.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var n;o(this,"_invoke",{value:function(o,r){function i(){return new e((function(n,i){!function o(n,r,i,s){var c=u(t[n],t,r);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"==typeof d&&a.call(d,"__await")?e.resolve(d.__await).then((function(t){o("next",t,i,s)}),(function(t){o("throw",t,i,s)})):e.resolve(d).then((function(t){l.value=t,i(l)}),(function(t){return o("throw",t,i,s)}))}s(c.arg)}(o,r,n,i)}))}return n=n?n.then(i,i):i()}})}function w(t,e,a){var o="suspendedStart";return function(n,r){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===n)throw r;return N()}for(a.method=n,a.arg=r;;){var i=a.delegate;if(i){var s=C(i,a);if(s){if(s===d)continue;return s}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===o)throw o="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);o="executing";var c=u(t,e,a);if("normal"===c.type){if(o=a.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(o="completed",a.method="throw",a.arg=c.arg)}}}function C(t,e){var a=e.method,o=t.iterator[a];if(void 0===o)return e.delegate=null,"throw"===a&&t.iterator.return&&(e.method="return",e.arg=void 0,C(t,e),"throw"===e.method)||"return"!==a&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+a+"' method")),d;var n=u(o,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,d;var r=n.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function j(t){if(t){var e=t[r];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,n=function e(){for(;++o<t.length;)if(a.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:N}}function N(){return{value:void 0,done:!0}}return f.prototype=m,o(y,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:f,configurable:!0}),f.displayName=c(m,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,s,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(E.prototype),c(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,a,o,n,r){void 0===r&&(r=Promise);var i=new E(l(e,a,o,n),r);return t.isGeneratorFunction(a)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(y),c(y,s,"Generator"),c(y,r,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),a=[];for(var o in e)a.push(o);return a.reverse(),function t(){for(;a.length;){var o=a.pop();if(o in e)return t.value=o,t.done=!1,t}return t.done=!0,t}},t.values=j,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(a,o){return i.type="throw",i.arg=t,e.next=a,o&&(e.method="next",e.arg=void 0),!!o}for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n],i=r.completion;if("root"===r.tryLoc)return o("end");if(r.tryLoc<=this.prev){var s=a.call(r,"catchLoc"),c=a.call(r,"finallyLoc");if(s&&c){if(this.prev<r.catchLoc)return o(r.catchLoc,!0);if(this.prev<r.finallyLoc)return o(r.finallyLoc)}else if(s){if(this.prev<r.catchLoc)return o(r.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return o(r.finallyLoc)}}}},abrupt:function(t,e){for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var r=n;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var i=r?r.completion:{};return i.type=t,i.arg=e,r?(this.method="next",this.next=r.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),O(a),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===t){var o=a.completion;if("throw"===o.type){var n=o.arg;O(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,a){return this.delegate={iterator:j(t),resultName:e,nextLoc:a},"next"===this.method&&(this.arg=void 0),d}},t}var x=function(t){Object(r.a)(a,t);var e=Object(i.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).formatTime=function(t){var e="0".concat(t%60).slice(-2),a="".concat(Math.floor(t/60)),o="0".concat(a%60).slice(-2),n="0".concat(Math.floor(t/3600)).slice(-2);return"".concat(n," : ").concat(o," : ").concat(e)},n.handlestartinterval=function(){n.apicall.current=setInterval((function(){var t=JSON.parse(localStorage.getItem("user_id")),e=localStorage.getItem("videoCallAstro_id");sessionStorage.setItem("typeofcall","Chat");var a={userId:t,astroId:e,status:!0};v.a.post("/user/addCallDuration",a).then((function(t){console.log("callduration",t.data),Object(C.a)()})).catch((function(t){console.log(t.response.data.message),"Insufficient balance for the call"===t.response.data.message&&(n.handlestop(),n.props.history.push("/allastrologerlist"),O()("You have Low Balance"))}))}),6e4)},n.handleStart=function(){n.countRef.current=setInterval((function(){n.setState({setTimer:n.state.setTimer+1})}),1e3),n.handlestartinterval()},n.handlePause=function(){clearInterval(n.countRef.current),clearInterval(n.apicall.current)},n.handlestop=function(){n.handlePause();var t=JSON.parse(localStorage.getItem("user_id")),e=localStorage.getItem("videoCallAstro_id");sessionStorage.setItem("typeofcall","Chat");var a={userId:t,astroId:e,status:!1};v.a.post("/user/addCallDuration",a).then((function(t){console.log("callduration per min",t.data)})).catch((function(t){console.log(t.response.data.message)}))},n.componentDidMount=function(){var t=localStorage.getItem("astroId");v.a.get("/admin/getoneAstro/".concat(t)).then((function(t){var e;console.log(t.data.data),n.setState({Activeastro:null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.data})})).catch((function(t){console.log(t)}));if(JSON.parse(localStorage.getItem("minute"))){var e=JSON.parse(localStorage.getItem("minute"));n.setState({minutes:e,seconds:60*e}),n.startTimer(),n.secondsToTime(60*e)}var a=JSON.parse(localStorage.getItem("user_id"));v.a.get("/user/getroomid/".concat(a)).then((function(t){console.log(t.data.data),!0===t.data.status&&n.setState({data:t.data.data,fullname:t.data.data.fullname,userimg:t.data.data.userimg,time:""})})).catch((function(t){console.log(t)}))},n.getChatRoom=function(t,e){n.setState({Historydata:e});var a=JSON.parse(localStorage.getItem("user_id")),o={astroid:null===t||void 0===t?void 0:t._id,msg:n.state.msg};""!=n.state.CurrentRoomid?v.a.get("/user/allchatwithuser/".concat(n.state.CurrentRoomid)).then((function(t){var e;console.log(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.data),n.handleStart(),!0===t.data.status&&n.setState({roomChatData:null===t||void 0===t?void 0:t.data.data})})).catch((function(t){console.log(t)})):v.a.post("/user/addchat/".concat(a),o).then((function(t){var e,a,o,r,i,s;(console.log("chat",t.data),n.setState({CurrentRoomid:null===t||void 0===t||null===(e=t.data)||void 0===e||null===(a=e.data)||void 0===a?void 0:a.roomid}),console.log("chat",null===t||void 0===t||null===(o=t.data)||void 0===o||null===(r=o.data)||void 0===r?void 0:r.roomid),!0===t.data.status)&&(n.setState({msg:""}),v.a.get("/user/allchatwithuser/".concat(null===t||void 0===t||null===(i=t.data)||void 0===i||null===(s=i.data)||void 0===s?void 0:s.roomid)).then((function(t){var e;console.log(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.data),!0===t.data.status&&n.setState({roomChatData:null===t||void 0===t?void 0:t.data.data})})).catch((function(t){console.log(t)})))})).catch((function(t){console.log(t)}))},n.handlechat=function(){console.log(n.state.roomId),v.a.get("/user/allchatwithuser/".concat(n.state.roomId)).then((function(t){var e;console.log(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.data),!0===t.data.status&&n.setState({roomChatData:null===t||void 0===t?void 0:t.data.data})})).catch((function(t){console.log(t)}))},n.getChatRoomId=function(){var t=Object(g.a)(I().mark((function t(e,a){var o,r,i;return I().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.setState({Historydata:!0}),n.setState({sendbutton:null===(o=e.astroid)||void 0===o?void 0:o._id}),n.setState({Index:a}),console.log("user",e),localStorage.setItem("videoCallAstro_id",null===e||void 0===e||null===(r=e.astroid)||void 0===r?void 0:r._id),console.log("userdata",e),n.setState({astroId:null===e||void 0===e||null===(i=e.astroid)||void 0===i?void 0:i._id,roomId:null===e||void 0===e?void 0:e.roomid}),n.handlechat();case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),n.submitHandler=function(){var t=Object(g.a)(I().mark((function t(e,a,o){var r,i,s;return I().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),r=localStorage.getItem("astroId"),i=JSON.parse(localStorage.getItem("user_id")),console.log("first",i),""==n.state.msg){t.next=10;break}return s={astroid:r,msg:n.state.msg},t.next=8,v.a.post("/user/addchat/".concat(i),s).then((function(t){var e,a,o,r;(console.log("hdfkjh",null===(e=t.data)||void 0===e||null===(a=e.data)||void 0===a?void 0:a.roomid),!0===t.data.status)&&(n.setState({msg:""}),v.a.get("/user/allchatwithuser/".concat(null===(o=t.data)||void 0===o||null===(r=o.data)||void 0===r?void 0:r.roomid)).then((function(t){var e;console.log(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.data),!0===t.data.status&&n.setState({roomChatData:null===t||void 0===t?void 0:t.data.data})})).catch((function(t){console.log(t)})))})).catch((function(t){console.log(t)}));case 8:t.next=11;break;case 10:O()("Input filed is blank","Fill it before send");case 11:case"end":return t.stop()}}),t)})));return function(e,a,o){return t.apply(this,arguments)}}(),n.handleChange=function(t){n.setState({msg:t.target.value})},n.countRef=c.a.createRef(),n.apicall=c.a.createRef(),n.callmsg=c.a.createRef(),n.state={Index:"",Historydata:!1,setTimer:0,data:{},sendbutton:"",Activeastro:{},CurrentRoomid:"",roomChatData:[],userId:"",astroId:"",msg:"hello",roomId:"",time:{},seconds:900,minutes:15},n.timer=0,n.startTimer=n.startTimer.bind(Object(p.a)(n)),n.countDown=n.countDown.bind(Object(p.a)(n)),n}return Object(n.a)(a,[{key:"secondsToTime",value:function(t){var e=t%3600,a=e%60;return{h:Math.floor(t/3600),m:Math.floor(e/60),s:Math.ceil(a)}}},{key:"startTimer",value:function(){0===this.timer&&this.state.seconds>0&&(this.timer=setInterval(this.countDown,1e3))}},{key:"countDown",value:function(){var t=0!==this.state.seconds?this.state.seconds-1:alert("out time");this.setState({time:this.secondsToTime(t),seconds:t}),0===t&&clearInterval(this.timer)}},{key:"render",value:function(){var t,e,a,o,n=this;return c.a.createElement("section",{className:"app-chatbg"},c.a.createElement(l.a,null,c.a.createElement("div",{class:"app rt-chat"},c.a.createElement("div",{class:"contact-list"},c.a.createElement("h1",{class:"title"},"My messages"),c.a.createElement(E,{getChatRoomId:function(t,e){return n.getChatRoomId(t,e)},getChatRoom:function(t,e){return n.getChatRoom(t,e)},data:this.state.Historydata})),c.a.createElement("div",{class:"messages"},c.a.createElement("div",{className:"chat-header"},c.a.createElement("p",null,c.a.createElement("span",null,c.a.createElement("img",{src:this.state.roomChatData.length>0?null===(t=this.state.roomChatData[0])||void 0===t||null===(e=t.astroid)||void 0===e?void 0:e.img[0]:b.a,className:"app-img",alt:""})),this.state.roomChatData.length>0?null===(a=this.state.roomChatData[0])||void 0===a||null===(o=a.astroid)||void 0===o?void 0:o.fullname:null)),c.a.createElement("div",{class:"messages-history"},c.a.createElement(w,{roomChatData:this.state.roomChatData.length>0?this.state.roomChatData:[]}))))))}}]),a}(c.a.Component),j=function(t){Object(r.a)(a,t);var e=Object(i.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={userChatHistory:[]},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var t=this,e=(this.props.match.params.id,JSON.parse(localStorage.getItem("user_id")));console.log(e),v.a.get("/user/getOne_Conversation_Wallet/".concat(e)).then((function(e){console.log("userChatList",e.data.data),!0===e.data.status&&t.setState({userChatList:e.data.data})})).catch((function(t){console.log(t)})),v.a.get("/user/userChathistory/".concat(e)).then((function(e){console.log("chatList",e.data.data),!0===e.data.status&&t.setState({userChatHistory:e.data.data})})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){this.state.userChatHistory;return c.a.createElement(m.a,{headerTop:"visible"},c.a.createElement("section",{className:"pt-0 pb-0"},c.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(f.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},c.a.createElement(l.a,null,c.a.createElement(u.a,null,c.a.createElement(d.a,{md:"12"},c.a.createElement("div",{className:"leftcont text-left"},c.a.createElement("h1",null,"User Chat History"))))))),c.a.createElement("section",{style:{marginTop:"52px"},className:"userchathistory"},c.a.createElement(l.a,null,c.a.createElement("div",{className:"container mt-3"},c.a.createElement(x,null)))))}}]),a}(c.a.Component);e.default=j},610:function(t,e,a){t.exports=a.p+"static/media/astrologin-bg.f858568c.jpg"},619:function(t,e,a){"use strict";var o=a(7),n=a(15),r=a(0),i=a.n(r),s=a(4),c=a.n(s),l=a(78),u=a.n(l),d=a(54),h=["className","cssModule","widths","tag"],f=c.a.oneOfType([c.a.number,c.a.string]),m=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:f,offset:f})]),v={tag:d.n,xs:m,sm:m,md:m,lg:m,xl:m,className:c.a.string,cssModule:c.a.object,widths:c.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(t,e,a){return!0===a||""===a?t?"col":"col-"+e:"auto"===a?t?"col-auto":"col-"+e+"-auto":t?"col-"+a:"col-"+e+"-"+a},y=function(t){var e=t.className,a=t.cssModule,r=t.widths,s=t.tag,c=Object(n.a)(t,h),l=[];r.forEach((function(e,o){var n=t[e];if(delete c[e],n||""===n){var r=!o;if(Object(d.h)(n)){var i,s=r?"-":"-"+e+"-",h=p(r,e,n.size);l.push(Object(d.j)(u()(((i={})[h]=n.size||""===n.size,i["order"+s+n.order]=n.order||0===n.order,i["offset"+s+n.offset]=n.offset||0===n.offset,i)),a))}else{var f=p(r,e,n);l.push(f)}}})),l.length||l.push("col");var f=Object(d.j)(u()(e,l),a);return i.a.createElement(s,Object(o.a)({},c,{className:f}))};y.propTypes=v,y.defaultProps=g,e.a=y},629:function(t,e,a){},695:function(t,e,a){}}]);
//# sourceMappingURL=61.bcc4b7fb.chunk.js.map