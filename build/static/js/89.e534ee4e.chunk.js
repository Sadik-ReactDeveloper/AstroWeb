(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[89],{1185:function(e,t,a){"use strict";a.r(t);var n=a(202),l=a(196),o=a(197),c=a(198),r=a(199),i=a(0),m=a.n(i),u=a(605),p=a(606),E=a(619),s=a(681),v=a(677),d=a(643),h=(a(646),a(200)),f=(a(710),a(59)),g=a(610),y=a.n(g),b=a(621),_=a.n(b),C=(a(60),a(682)),S=a(1124),k=a(1125),N=a(1126),O=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(e){var o;return Object(l.a)(this,a),(o=t.call(this,e)).submitPlaceHandler=function(e){e.preventDefault();var t={place:o.state.place};console.log("shgdjhg",t),f.a.post("/user/geo_detail",t).then((function(e){var t;o.setState({data:e.data}),console.log("place",null===(t=e.data.geonames)||void 0===t?void 0:t.place_name),_()("Success!","Submitted SuccessFull!","success")})).catch((function(e){_()("Error!","You clicked the button!","error"),console.log(e)}))},o.changeHandler=function(e){o.setState(Object(n.a)({},e.target.name,e.target.value))},o.handleshowmatch=function(){var e,t,a,n,l={m_day:o.state.m_day,m_month:o.state.m_month,m_year:o.state.m_year,m_hour:o.state.m_hour,m_min:o.state.m_min,m_lat:null===(e=o.state.selectedCity)||void 0===e?void 0:e.latitude,m_lon:null===(t=o.state.selectedCity)||void 0===t?void 0:t.longitude,m_tzone:o.state.timezone,f_day:o.state.f_day,f_month:o.state.f_month,f_year:o.state.f_year,f_hour:o.state.f_hour,f_min:o.state.f_min,f_lat:null===(a=o.state.selectedCity1)||void 0===a?void 0:a.latitude,f_lon:null===(n=o.state.selectedCity1)||void 0===n?void 0:n.longitude,f_tzone:o.state.timezonef};console.log(l),f.a.post("/user/match_making_report",l).then((function(e){console.log("matchmakingreport",e.data.data),_()("Success!","Submitted SuccessFull!","success"),o.props.history.push({pathname:"/kundalimatchlist",state:{data:e.data.data,male:o.state.Name1,female:o.state.Name2}})})).catch((function(e){_()("Error!","You clicked the button!","error"),console.log(e)}))},o.submitHandler=function(e){e.preventDefault(),o.state.selectedCity&&o.state.selectedCity1?o.handleshowmatch():_()("Fill All Details")},o.state={m_day:"",m_month:"",m_year:"",m_hour:"",m_min:"",Name1:"",Name2:"",f_day:"",f_month:"",f_year:"",f_hour:"",f_min:"",timezone:"",timezonef:"",matchmakingreport:{},data:{},place:"",searchQuery:"",state:[],city:[],country:[],selectedCountry:null,selectedCountry1:null,selectedState:null,selectedState1:null,selectedCity:null,selectedCity1:null},o}return Object(o.a)(a,[{key:"handleInputChanged",value:function(e){this.setState({searchQuery:e.target.value}),f.a.post("/user/geo_detail",{place:this.state.searchQuery}).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)})),console.log(this.state.searchQuery)}},{key:"componentDidMount",value:function(){this.props.match.params.id}},{key:"render",value:function(){var e,t,a,n,l,o,c,r=this,i=this.state.matchmakingreport;return m.a.createElement(h.a,{headerTop:"visible"},m.a.createElement("section",{className:"pt-0 pb-0"},m.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(y.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},m.a.createElement(u.a,null,m.a.createElement(p.a,null,m.a.createElement(E.a,{md:"12"},m.a.createElement("div",{className:"leftcont text-left"},m.a.createElement("h1",null,"Kundli Matching"),m.a.createElement("h3",null,"Find your right one, through matchmaking"),m.a.createElement("h3",null,null===i||void 0===i||null===(e=i.ashtakoota)||void 0===e?void 0:e.received_points))))))),m.a.createElement(u.a,null,m.a.createElement(p.a,null,m.a.createElement(E.a,{md:"12"},m.a.createElement(s.a,{className:"mb-50 pt-d"},m.a.createElement("h3",null,"Free Match Making - Kundli Milan & Gun Milan to Check Possibilities of Marriage"),m.a.createElement("p",null,"Kundli milan or kundali matching is an important consideration to make when you decide to get married. Kundli matching, also called Gun matching or Horoscope matching is the first step towards marriage when the parents decide to match the kundlis of the girl and the boy to ensure the couple is compatible.The gun milan exercise has been a part of India's culture for 1000s of years now and continues to be so. So, if you too are the lucky one who is planning to get married, and hence looking for a horoscope matching with someone you have started liking, then Astrotalk can help you. The Kundali milan online software on Astrotalk has been prepared by the top astrologers of Astrotalk. The software caters to the free Kundli milan needs of the individuals and gives you insights; such as the number of guns matching for the girl and the boy, what they are compatible in, what their future would be like if they get married, and so much more. The online gun milan software can save you time and the hassle of going out to look for an astrologer to get the gun milan exercise done. Also, in case you have any doubts about the free kundali milan offered by Astrotalk, you can always connect with the astrologers on board and get those doubts sorted for yourself."),m.a.createElement("div",{className:"match-bx"},m.a.createElement("form",{onSubmit:this.submitHandler},m.a.createElement(p.a,null,m.a.createElement(E.a,{md:"12"},m.a.createElement("h3",null,"Fill Up Partner's Detail"),m.a.createElement(p.a,null,m.a.createElement(E.a,{md:"6"},m.a.createElement("div",{className:"form-m"},m.a.createElement(p.a,null,m.a.createElement(E.a,{md:"12"},m.a.createElement("label",null,"Name"),m.a.createElement("input",{type:"text",name:"Name1",placeholder:"Name",value:this.state.Name1,onChange:this.changeHandler})),m.a.createElement(E.a,{md:"6"},m.a.createElement("label",null,"Birth Day"),m.a.createElement(v.a,{className:"form-control",name:"m_day",type:"select",value:this.state.m_day,onChange:this.changeHandler},m.a.createElement("option",null,"--Select--"),m.a.createElement("option",null,"1"),m.a.createElement("option",null,"2"),m.a.createElement("option",null,"3"),m.a.createElement("option",null,"4"),m.a.createElement("option",null,"5"),m.a.createElement("option",null,"6"),m.a.createElement("option",null,"7"),m.a.createElement("option",null,"8"),m.a.createElement("option",null,"9"),m.a.createElement("option",null,"10"),m.a.createElement("option",null,"11"),m.a.createElement("option",null,"12"),m.a.createElement("option",null,"13"),m.a.createElement("option",null,"14"),m.a.createElement("option",null,"15"),m.a.createElement("option",null,"16"),m.a.createElement("option",null,"17"),m.a.createElement("option",null,"18"),m.a.createElement("option",null,"19"),m.a.createElement("option",null,"20"),m.a.createElement("option",null,"21"),m.a.createElement("option",null,"22"),m.a.createElement("option",null,"23"),m.a.createElement("option",null,"25"),m.a.createElement("option",null,"26"),m.a.createElement("option",null,"27"),m.a.createElement("option",null,"28"),m.a.createElement("option",null,"29"),m.a.createElement("option",null,"30"),m.a.createElement("option",null,"31"))),m.a.createElement(E.a,{md:"6"},m.a.createElement("label",null,"Birth Month"),m.a.createElement(v.a,{className:"form-control",name:"m_month",type:"select",value:this.state.m_month,onChange:this.changeHandler},m.a.createElement("option",null,"--Select--"),m.a.createElement("option",null,"1"),m.a.createElement("option",null,"2"),m.a.createElement("option",null,"3"),m.a.createElement("option",null,"4"),m.a.createElement("option",null,"5"),m.a.createElement("option",null,"6"),m.a.createElement("option",null,"7"),m.a.createElement("option",null,"8"),m.a.createElement("option",null,"9"),m.a.createElement("option",null,"10"),m.a.createElement("option",null,"11"),m.a.createElement("option",null,"12"))),m.a.createElement(E.a,{md:"6"},m.a.createElement("label",null,"Birth Year"),m.a.createElement(v.a,{className:"form-control",name:"m_year",type:"select",value:this.state.m_year,onChange:this.changeHandler},m.a.createElement("option",null,"--Select--"),m.a.createElement("option",{value:"1942"},"1942"),m.a.createElement("option",{value:"1943"},"1943"),m.a.createElement("option",{value:"1944"},"1944"),m.a.createElement("option",{value:"1945"},"1945"),m.a.createElement("option",{value:"1946"},"1946"),m.a.createElement("option",{value:"1947"},"1947"),m.a.createElement("option",{value:"1948"},"1948"),m.a.createElement("option",{value:"1949"},"1949"),m.a.createElement("option",{value:"1950"},"1950"),m.a.createElement("option",{value:"1951"},"1951"),m.a.createElement("option",{value:"1952"},"1952"),m.a.createElement("option",{value:"1953"},"1953"),m.a.createElement("option",{value:"1954"},"1954"),m.a.createElement("option",{value:"1955"},"1955"),m.a.createElement("option",{value:"1956"},"1956"),m.a.createElement("option",{value:"1957"},"1957"),m.a.createElement("option",{value:"1958"},"1958"),m.a.createElement("option",{value:"1959"},"1959"),m.a.createElement("option",{value:"1960"},"1960"),m.a.createElement("option",{value:"1961"},"1961"),m.a.createElement("option",{value:"1962"},"1962"),m.a.createElement("option",{value:"1963"},"1963"),m.a.createElement("option",{value:"1964"},"1964"),m.a.createElement("option",{value:"1965"},"1965"),m.a.createElement("option",{value:"1966"},"1966"),m.a.createElement("option",{value:"1967"},"1967"),m.a.createElement("option",{value:"1968"},"1968"),m.a.createElement("option",{value:"1969"},"1969"),m.a.createElement("option",{value:"1970"},"1970"),m.a.createElement("option",{value:"1971"},"1971"),m.a.createElement("option",{value:"1972"},"1972"),m.a.createElement("option",{value:"1973"},"1973"),m.a.createElement("option",{value:"1974"},"1974"),m.a.createElement("option",{value:"1975"},"1975"),m.a.createElement("option",{value:"1976"},"1976"),m.a.createElement("option",{value:"1977"},"1977"),m.a.createElement("option",{value:"1978"},"1978"),m.a.createElement("option",{value:"1979"},"1979"),m.a.createElement("option",{value:"1980"},"1980"),m.a.createElement("option",{value:"1981"},"1981"),m.a.createElement("option",{value:"1982"},"1983"),m.a.createElement("option",{value:"1983"},"1983"),m.a.createElement("option",{value:"1984"},"1984"),m.a.createElement("option",{value:"1985"},"1985"),m.a.createElement("option",{value:"1986"},"1986"),m.a.createElement("option",{value:"1987"},"1987"),m.a.createElement("option",{value:"1988"},"1988"),m.a.createElement("option",{value:"1989"},"1989"),m.a.createElement("option",{value:"1990"},"1990"),m.a.createElement("option",{value:"1991"},"1991"),m.a.createElement("option",{value:"1992"},"1992"),m.a.createElement("option",{value:"1993"},"1993"),m.a.createElement("option",{value:"1994"},"1994"),m.a.createElement("option",{value:"1995"},"1995"),m.a.createElement("option",{value:"1996"},"1996"),m.a.createElement("option",{value:"1997"},"1997"),m.a.createElement("option",{value:"1998"},"1998"),m.a.createElement("option",{value:"1999"},"1999"),m.a.createElement("option",{value:"2000"},"2000"),m.a.createElement("option",{value:"2001"},"2001"),m.a.createElement("option",{value:"2002"},"2002"),m.a.createElement("option",{value:"2003"},"2003"),m.a.createElement("option",{value:"2004"},"2004"),m.a.createElement("option",{value:"2005"},"2005"),m.a.createElement("option",{value:"2006"},"2006"),m.a.createElement("option",{value:"2007"},"2007"),m.a.createElement("option",{value:"2008"},"2008"),m.a.createElement("option",{value:"2009"},"2009"),m.a.createElement("option",{value:"2010"},"2010"),m.a.createElement("option",{value:"2011"},"2011"),m.a.createElement("option",{value:"2012"},"2012"),m.a.createElement("option",{value:"2013"},"2013"),m.a.createElement("option",{value:"2011"},"2014"),m.a.createElement("option",{value:"2011"},"2015"),m.a.createElement("option",{value:"2011"},"2016"),m.a.createElement("option",{value:"2011"},"2017"),m.a.createElement("option",{value:"2011"},"2018"),m.a.createElement("option",{value:"2011"},"2019"),m.a.createElement("option",{value:"2011"},"2020"),m.a.createElement("option",{value:"2011"},"2021"),m.a.createElement("option",{value:"2011"},"2022"),m.a.createElement("option",{value:"2011"},"2023"),m.a.createElement("option",{value:"2011"},"2024"),m.a.createElement("option",{value:"2011"},"2025"),m.a.createElement("option",{value:"2011"},"2026"),m.a.createElement("option",{value:"2011"},"2021"),m.a.createElement("option",{value:"2011"},"2027"),m.a.createElement("option",{value:"2011"},"2028"),m.a.createElement("option",{value:"2011"},"2029"),m.a.createElement("option",{value:"2011"},"2030"))),m.a.createElement(E.a,{md:"6"},m.a.createElement("label",null,"Birth Hour"),m.a.createElement("select",{className:"form-control",name:"m_hour",type:"select",value:this.state.m_hour,onChange:this.changeHandler},m.a.createElement("option",null,"--Select--"),m.a.createElement("option",null,"1"),m.a.createElement("option",null,"2"),m.a.createElement("option",null,"3"),m.a.createElement("option",null,"4"),m.a.createElement("option",null,"5"),m.a.createElement("option",null,"6"),m.a.createElement("option",null,"7"),m.a.createElement("option",null,"8"),m.a.createElement("option",null,"9"),m.a.createElement("option",null,"10"),m.a.createElement("option",null,"11"),m.a.createElement("option",null,"12"),m.a.createElement("option",null,"13"),m.a.createElement("option",null,"14"),m.a.createElement("option",null,"15"),m.a.createElement("option",null,"16"),m.a.createElement("option",null,"17"),m.a.createElement("option",null,"18"),m.a.createElement("option",null,"19"),m.a.createElement("option",null,"20"),m.a.createElement("option",null,"21"),m.a.createElement("option",null,"22"),m.a.createElement("option",null,"23"),m.a.createElement("option",null,"00"))),m.a.createElement(E.a,{md:"6"},m.a.createElement("label",null,"Birth Minute"),m.a.createElement("select",{className:"form-control",name:"m_min",value:this.state.m_min,onChange:this.changeHandler},m.a.createElement("option",null,"--Select--"),m.a.createElement("option",null,"1"),m.a.createElement("option",null,"2"),m.a.createElement("option",null,"3"),m.a.createElement("option",null,"4"),m.a.createElement("option",null,"5"),m.a.createElement("option",null,"6"),m.a.createElement("option",null,"7"),m.a.createElement("option",null,"8"),m.a.createElement("option",null,"9"),m.a.createElement("option",null,"10"),m.a.createElement("option",null,"11"),m.a.createElement("option",null,"12"),m.a.createElement("option",null,"13"),m.a.createElement("option",null,"14"),m.a.createElement("option",null,"15"),m.a.createElement("option",null,"16"),m.a.createElement("option",null,"17"),m.a.createElement("option",null,"18"),m.a.createElement("option",null,"19"),m.a.createElement("option",null,"20"),m.a.createElement("option",null,"21"),m.a.createElement("option",null,"22"),m.a.createElement("option",null,"23"),m.a.createElement("option",null,"24"),m.a.createElement("option",null,"25"),m.a.createElement("option",null,"26"),m.a.createElement("option",null,"27"),m.a.createElement("option",null,"28"),m.a.createElement("option",null,"29"),m.a.createElement("option",null,"30"),m.a.createElement("option",null,"31"),m.a.createElement("option",null,"32"),m.a.createElement("option",null,"33"),m.a.createElement("option",null,"34"),m.a.createElement("option",null,"35"),m.a.createElement("option",null,"36"),m.a.createElement("option",null,"37"),m.a.createElement("option",null,"38"),m.a.createElement("option",null,"39"),m.a.createElement("option",null,"40"),m.a.createElement("option",null,"41"),m.a.createElement("option",null,"42"),m.a.createElement("option",null,"43"),m.a.createElement("option",null,"44"),m.a.createElement("option",null,"45"),m.a.createElement("option",null,"46"),m.a.createElement("option",null,"47"),m.a.createElement("option",null,"48"),m.a.createElement("option",null,"49"),m.a.createElement("option",null,"50"),m.a.createElement("option",null,"51"),m.a.createElement("option",null,"52"),m.a.createElement("option",null,"53"),m.a.createElement("option",null,"54"),m.a.createElement("option",null,"55"),m.a.createElement("option",null,"56"),m.a.createElement("option",null,"57"),m.a.createElement("option",null,"58"),m.a.createElement("option",null,"59"),m.a.createElement("option",null,"00"))),m.a.createElement(E.a,{md:"6"},m.a.createElement("label",null,"Country"),m.a.createElement(C.a,{options:S.a.getAllCountries(),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:this.state.selectedCountry,onChange:function(e){r.setState({selectedCountry:e})}})),m.a.createElement(E.a,{md:"6"},m.a.createElement("label",null,"State"),m.a.createElement(C.a,{options:null===k.a||void 0===k.a?void 0:k.a.getStatesOfCountry(null===(t=this.state.selectedCountry)||void 0===t?void 0:t.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:this.state.selectedState,onChange:function(e){r.setState({selectedState:e})}})),m.a.createElement(E.a,{md:"6"},m.a.createElement("label",null,"City"),m.a.createElement(C.a,{options:N.a.getCitiesOfState(null===(a=this.state.selectedState)||void 0===a?void 0:a.countryCode,null===(n=this.state.selectedState)||void 0===n?void 0:n.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:this.state.selectedCity,onChange:function(e){r.setState({selectedCity:e}),f.a.post("/user/time_zone",{country_code:null===e||void 0===e?void 0:e.countryCode}).then((function(e){var t,a;r.setState({timezone:null===e||void 0===e||null===(t=e.data)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.timezone})})).catch((function(e){console.log(e)}))}}))))),m.a.createElement(E.a,{md:"6"},m.a.createElement("div",{className:"form-m"},m.a.createElement(p.a,null,m.a.createElement(E.a,{md:"12"},m.a.createElement("label",null,"Name"),m.a.createElement("input",{type:"text",name:"Name2",value:this.state.Name2,onChange:this.changeHandler,placeholder:"Name"})),m.a.createElement(E.a,{md:"6"},m.a.createElement("label",null,"Birth Day"),m.a.createElement(v.a,{className:"form-control",name:"f_day",type:"select",value:this.state.f_day,onChange:this.changeHandler},m.a.createElement("option",null,"--Select--"),m.a.createElement("option",null,"1"),m.a.createElement("option",null,"2"),m.a.createElement("option",null,"3"),m.a.createElement("option",null,"4"),m.a.createElement("option",null,"5"),m.a.createElement("option",null,"6"),m.a.createElement("option",null,"7"),m.a.createElement("option",null,"8"),m.a.createElement("option",null,"9"),m.a.createElement("option",null,"10"),m.a.createElement("option",null,"11"),m.a.createElement("option",null,"12"),m.a.createElement("option",null,"13"),m.a.createElement("option",null,"14"),m.a.createElement("option",null,"15"),m.a.createElement("option",null,"16"),m.a.createElement("option",null,"17"),m.a.createElement("option",null,"18"),m.a.createElement("option",null,"19"),m.a.createElement("option",null,"20"),m.a.createElement("option",null,"21"),m.a.createElement("option",null,"22"),m.a.createElement("option",null,"23"),m.a.createElement("option",null,"25"),m.a.createElement("option",null,"26"),m.a.createElement("option",null,"27"),m.a.createElement("option",null,"28"),m.a.createElement("option",null,"29"),m.a.createElement("option",null,"30"),m.a.createElement("option",null,"31"))),m.a.createElement(E.a,{md:"6"},m.a.createElement("label",null,"Birth Month"),m.a.createElement(v.a,{className:"form-control",name:"f_month",type:"select",value:this.state.f_month,onChange:this.changeHandler},m.a.createElement("option",null,"--Select--"),m.a.createElement("option",null,"1"),m.a.createElement("option",null,"2"),m.a.createElement("option",null,"3"),m.a.createElement("option",null,"4"),m.a.createElement("option",null,"5"),m.a.createElement("option",null,"6"),m.a.createElement("option",null,"7"),m.a.createElement("option",null,"8"),m.a.createElement("option",null,"9"),m.a.createElement("option",null,"10"),m.a.createElement("option",null,"11"),m.a.createElement("option",null,"12"))),m.a.createElement(E.a,{md:"6"},m.a.createElement("label",null,"Birth Year"),m.a.createElement(v.a,{className:"form-control",name:"f_year",type:"select",value:this.state.f_year,onChange:this.changeHandler},m.a.createElement("option",null,"--Select--"),m.a.createElement("option",{value:"1942"},"1942"),m.a.createElement("option",{value:"1943"},"1943"),m.a.createElement("option",{value:"1944"},"1944"),m.a.createElement("option",{value:"1945"},"1945"),m.a.createElement("option",{value:"1946"},"1946"),m.a.createElement("option",{value:"1947"},"1947"),m.a.createElement("option",{value:"1948"},"1948"),m.a.createElement("option",{value:"1949"},"1949"),m.a.createElement("option",{value:"1950"},"1950"),m.a.createElement("option",{value:"1951"},"1951"),m.a.createElement("option",{value:"1952"},"1952"),m.a.createElement("option",{value:"1953"},"1953"),m.a.createElement("option",{value:"1954"},"1954"),m.a.createElement("option",{value:"1955"},"1955"),m.a.createElement("option",{value:"1956"},"1956"),m.a.createElement("option",{value:"1957"},"1957"),m.a.createElement("option",{value:"1958"},"1958"),m.a.createElement("option",{value:"1959"},"1959"),m.a.createElement("option",{value:"1960"},"1960"),m.a.createElement("option",{value:"1961"},"1961"),m.a.createElement("option",{value:"1962"},"1962"),m.a.createElement("option",{value:"1963"},"1963"),m.a.createElement("option",{value:"1964"},"1964"),m.a.createElement("option",{value:"1965"},"1965"),m.a.createElement("option",{value:"1966"},"1966"),m.a.createElement("option",{value:"1967"},"1967"),m.a.createElement("option",{value:"1968"},"1968"),m.a.createElement("option",{value:"1969"},"1969"),m.a.createElement("option",{value:"1970"},"1970"),m.a.createElement("option",{value:"1971"},"1971"),m.a.createElement("option",{value:"1972"},"1972"),m.a.createElement("option",{value:"1973"},"1973"),m.a.createElement("option",{value:"1974"},"1974"),m.a.createElement("option",{value:"1975"},"1975"),m.a.createElement("option",{value:"1976"},"1976"),m.a.createElement("option",{value:"1977"},"1977"),m.a.createElement("option",{value:"1978"},"1978"),m.a.createElement("option",{value:"1979"},"1979"),m.a.createElement("option",{value:"1980"},"1980"),m.a.createElement("option",{value:"1981"},"1981"),m.a.createElement("option",{value:"1982"},"1983"),m.a.createElement("option",{value:"1983"},"1983"),m.a.createElement("option",{value:"1984"},"1984"),m.a.createElement("option",{value:"1985"},"1985"),m.a.createElement("option",{value:"1986"},"1986"),m.a.createElement("option",{value:"1987"},"1987"),m.a.createElement("option",{value:"1988"},"1988"),m.a.createElement("option",{value:"1989"},"1989"),m.a.createElement("option",{value:"1990"},"1990"),m.a.createElement("option",{value:"1991"},"1991"),m.a.createElement("option",{value:"1992"},"1992"),m.a.createElement("option",{value:"1993"},"1993"),m.a.createElement("option",{value:"1994"},"1994"),m.a.createElement("option",{value:"1995"},"1995"),m.a.createElement("option",{value:"1996"},"1996"),m.a.createElement("option",{value:"1997"},"1997"),m.a.createElement("option",{value:"1998"},"1998"),m.a.createElement("option",{value:"1999"},"1999"),m.a.createElement("option",{value:"2000"},"2000"),m.a.createElement("option",{value:"2001"},"2001"),m.a.createElement("option",{value:"2002"},"2002"),m.a.createElement("option",{value:"2003"},"2003"),m.a.createElement("option",{value:"2004"},"2004"),m.a.createElement("option",{value:"2005"},"2005"),m.a.createElement("option",{value:"2006"},"2006"),m.a.createElement("option",{value:"2007"},"2007"),m.a.createElement("option",{value:"2008"},"2008"),m.a.createElement("option",{value:"2009"},"2009"),m.a.createElement("option",{value:"2010"},"2010"),m.a.createElement("option",{value:"2011"},"2011"),m.a.createElement("option",{value:"2012"},"2012"),m.a.createElement("option",{value:"2013"},"2013"),m.a.createElement("option",{value:"2011"},"2014"),m.a.createElement("option",{value:"2011"},"2015"),m.a.createElement("option",{value:"2011"},"2016"),m.a.createElement("option",{value:"2011"},"2017"),m.a.createElement("option",{value:"2011"},"2018"),m.a.createElement("option",{value:"2011"},"2019"),m.a.createElement("option",{value:"2011"},"2020"),m.a.createElement("option",{value:"2011"},"2021"),m.a.createElement("option",{value:"2011"},"2022"),m.a.createElement("option",{value:"2011"},"2023"),m.a.createElement("option",{value:"2011"},"2024"),m.a.createElement("option",{value:"2011"},"2025"),m.a.createElement("option",{value:"2011"},"2026"),m.a.createElement("option",{value:"2011"},"2021"),m.a.createElement("option",{value:"2011"},"2027"),m.a.createElement("option",{value:"2011"},"2028"),m.a.createElement("option",{value:"2011"},"2029"),m.a.createElement("option",{value:"2011"},"2030"))),m.a.createElement(E.a,{md:"6"},m.a.createElement("label",null,"Birth Hour"),m.a.createElement("select",{className:"form-control",name:"f_hour",type:"select",value:this.state.f_hour,onChange:this.changeHandler},m.a.createElement("option",null,"--Select--"),m.a.createElement("option",null,"1"),m.a.createElement("option",null,"2"),m.a.createElement("option",null,"3"),m.a.createElement("option",null,"4"),m.a.createElement("option",null,"5"),m.a.createElement("option",null,"6"),m.a.createElement("option",null,"7"),m.a.createElement("option",null,"8"),m.a.createElement("option",null,"9"),m.a.createElement("option",null,"10"),m.a.createElement("option",null,"11"),m.a.createElement("option",null,"12"),m.a.createElement("option",null,"13"),m.a.createElement("option",null,"14"),m.a.createElement("option",null,"15"),m.a.createElement("option",null,"16"),m.a.createElement("option",null,"17"),m.a.createElement("option",null,"18"),m.a.createElement("option",null,"19"),m.a.createElement("option",null,"20"),m.a.createElement("option",null,"21"),m.a.createElement("option",null,"22"),m.a.createElement("option",null,"23"),m.a.createElement("option",null,"24"))),m.a.createElement(E.a,{md:"6"},m.a.createElement("label",null,"Birth Minute"),m.a.createElement("select",{className:"form-control",name:"f_min",value:this.state.f_min,onChange:this.changeHandler},m.a.createElement("option",null,"--Select--"),m.a.createElement("option",null,"1"),m.a.createElement("option",null,"2"),m.a.createElement("option",null,"3"),m.a.createElement("option",null,"4"),m.a.createElement("option",null,"5"),m.a.createElement("option",null,"6"),m.a.createElement("option",null,"7"),m.a.createElement("option",null,"8"),m.a.createElement("option",null,"9"),m.a.createElement("option",null,"10"),m.a.createElement("option",null,"11"),m.a.createElement("option",null,"12"),m.a.createElement("option",null,"13"),m.a.createElement("option",null,"14"),m.a.createElement("option",null,"15"),m.a.createElement("option",null,"16"),m.a.createElement("option",null,"17"),m.a.createElement("option",null,"18"),m.a.createElement("option",null,"19"),m.a.createElement("option",null,"20"),m.a.createElement("option",null,"21"),m.a.createElement("option",null,"22"),m.a.createElement("option",null,"23"),m.a.createElement("option",null,"24"),m.a.createElement("option",null,"25"),m.a.createElement("option",null,"26"),m.a.createElement("option",null,"27"),m.a.createElement("option",null,"28"),m.a.createElement("option",null,"29"),m.a.createElement("option",null,"30"),m.a.createElement("option",null,"31"),m.a.createElement("option",null,"32"),m.a.createElement("option",null,"33"),m.a.createElement("option",null,"34"),m.a.createElement("option",null,"35"),m.a.createElement("option",null,"36"),m.a.createElement("option",null,"37"),m.a.createElement("option",null,"38"),m.a.createElement("option",null,"39"),m.a.createElement("option",null,"40"),m.a.createElement("option",null,"41"),m.a.createElement("option",null,"42"),m.a.createElement("option",null,"43"),m.a.createElement("option",null,"44"),m.a.createElement("option",null,"45"),m.a.createElement("option",null,"46"),m.a.createElement("option",null,"47"),m.a.createElement("option",null,"48"),m.a.createElement("option",null,"49"),m.a.createElement("option",null,"50"),m.a.createElement("option",null,"51"),m.a.createElement("option",null,"52"),m.a.createElement("option",null,"53"),m.a.createElement("option",null,"54"),m.a.createElement("option",null,"55"),m.a.createElement("option",null,"56"),m.a.createElement("option",null,"57"),m.a.createElement("option",null,"58"),m.a.createElement("option",null,"59"),m.a.createElement("option",null,"00"))),m.a.createElement(E.a,{md:"6"},m.a.createElement("label",null,"Country"),m.a.createElement(C.a,{options:S.a.getAllCountries(),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:this.state.selectedCountry1,onChange:function(e){r.setState({selectedCountry1:e})}})),m.a.createElement(E.a,{md:"6"},m.a.createElement("label",null,"State"),m.a.createElement(C.a,{options:null===k.a||void 0===k.a?void 0:k.a.getStatesOfCountry(null===(l=this.state.selectedCountry)||void 0===l?void 0:l.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:this.state.selectedState1,onChange:function(e){r.setState({selectedState1:e})}})),m.a.createElement(E.a,{md:"6"},m.a.createElement("label",null,"City"),m.a.createElement(C.a,{options:N.a.getCitiesOfState(null===(o=this.state.selectedState)||void 0===o?void 0:o.countryCode,null===(c=this.state.selectedState)||void 0===c?void 0:c.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:this.state.selectedCity1,onChange:function(e){r.setState({selectedCity1:e}),f.a.post("/user/time_zone",{country_code:null===e||void 0===e?void 0:e.countryCode}).then((function(e){var t,a;r.setState({timezonef:null===e||void 0===e||null===(t=e.data)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.timezone})})).catch((function(e){console.log(e)}))}}))," ")))))),m.a.createElement("div",{className:"mt-2"},m.a.createElement(d.a,{className:"btn btn-warning mt-2"},"Match Making")),m.a.createElement(p.a,null," "))))))))}}]),a}(m.a.Component);t.default=O},610:function(e,t,a){e.exports=a.p+"static/media/astrologin-bg.f858568c.jpg"},646:function(e,t,a){},681:function(e,t,a){"use strict";var n=a(7),l=a(15),o=a(0),c=a.n(o),r=a(4),i=a.n(r),m=a(78),u=a.n(m),p=a(54),E=["className","cssModule","color","body","inverse","outline","tag","innerRef"],s={tag:p.n,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},v=function(e){var t=e.className,a=e.cssModule,o=e.color,r=e.body,i=e.inverse,m=e.outline,s=e.tag,v=e.innerRef,d=Object(l.a)(e,E),h=Object(p.j)(u()(t,"card",!!i&&"text-white",!!r&&"card-body",!!o&&(m?"border":"bg")+"-"+o),a);return c.a.createElement(s,Object(n.a)({},d,{className:h,ref:v}))};v.propTypes=s,v.defaultProps={tag:"div"},t.a=v},710:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(700);t.default=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("div",{className:"mst-serch"},l.a.createElement(o.ReactSearchAutocomplete,{items:[{id:0,name:"Cobol"},{id:1,name:"JavaScript"},{id:2,name:"Basic"},{id:3,name:"PHP"},{id:4,name:"Java"}],onSearch:function(e,t){console.log(e,t)},onHover:function(e){console.log(e)},onSelect:function(e){console.log(e)},onFocus:function(){},autoFocus:!0,formatResult:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{style:{display:"block",textAlign:"left"}},"id: ",e.id),l.a.createElement("span",{style:{display:"block",textAlign:"left"}},"name: ",e.name))}}))))}}}]);
//# sourceMappingURL=89.e534ee4e.chunk.js.map