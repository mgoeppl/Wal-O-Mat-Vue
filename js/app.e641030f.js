(function(e){function t(t){for(var s,i,l=t[0],o=t[1],u=t[2],d=0,p=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);c&&c(t);while(p.length)p.shift()();return n.push.apply(n,u||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],s=!0,l=1;l<r.length;l++){var o=r[l];0!==a[o]&&(s=!1)}s&&(n.splice(t--,1),e=i(i.s=r[0]))}return e}var s={},a={app:0},n=[];function i(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=s,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(r,s,function(t){return e[t]}.bind(null,s));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/Wal-O-Mat-Vue/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var c=o;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var s=r("85ec"),a=r.n(s);a.a},"1cfd":function(e,t,r){"use strict";var s=r("c52c"),a=r.n(s);a.a},"408a":function(e,t,r){},"43e1":function(e,t,r){},"49f8":function(e,t,r){var s={"./de.json":"6ce2","./en.json":"edd4"};function a(e){var t=n(e);return r(t)}function n(e){if(!r.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=n,e.exports=a,a.id="49f8"},"54f7":function(e,t,r){"use strict";var s=r("408a"),a=r.n(s);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header",{attrs:{index:-1}}),r("b-container",[r("b-row",[r("b-col",{attrs:{md:"6","offset-md":"3"}},[r("Selector")],1)],1)],1)],1)},n=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div")},l=[],o=(r("a9e3"),{name:"Header",props:{index:Number}}),u=o,c=r("2877"),d=Object(c["a"])(u,i,l,!1,null,"2c83d9c8",null),p=d.exports,_=r("e9b1"),h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"selector"}},["welcome"===e.current_scene?r("Welcome",{attrs:{set_year:e.setYear,year_list:e.listOfAllYears(),set_scene:e.set_scene,year:e.year,get_date:e.get_date}}):e._e(),"question"!==e.current_scene&&"result"!==e.current_scene||e.year===e.getYear()?e._e():r("Archive_Banner",{attrs:{year:e.year}}),"question"===e.current_scene?r("Question_Container",{attrs:{questions:e.getYearData(e.year).questions,answers:e.answers,update_results:this.update_results,user_results:e.user_results,set_scene:e.set_scene,set_results_length:e.set_results_length}}):e._e(),"star"===e.current_scene?r("Star_Screen",{attrs:{results:e.user_results,questions:e.getYearData(e.year).questions,star_array:e.star_array,set_star_array_length:e.set_star_array_length,flip_star:e.update_stars,set_scene:e.set_scene}}):e._e(),"result"===e.current_scene?r("Results",{attrs:{answers:e.answers,results:e.user_results,year_data:e.getYearData(e.year),set_scene:e.set_scene,star_array:e.star_array}}):e._e()],1)},g=[],b=(r("cb29"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"question-box-div"},[r("b-jumbotron",{attrs:{"header-level":"4",header:e.$t("questions.title")}},[r("template",{slot:"lead"},[e._v(" "+e._s(e.questions[e.index].question)+" "),r("Question_Progress_Bar",{attrs:{user_results:e.user_results}})],1),r("hr",{staticClass:"my-4"}),r("b-list-group",e._l(e.answers,(function(t){return r("b-list-group-item",{key:t.val,class:[e.user_results[e.index]===t.val?"active":""],on:{click:function(r){return e.update_results(e.index,t.val)}}},[e._v(" "+e._s(t.txt)+" ")])})),1),r("hr"),0===e.index?r("b-button",{attrs:{disabled:""}},[e._v(e._s(e.$t("button.back")))]):r("b-button",{on:{click:e.back}},[e._v(e._s(e.$t("button.back")))]),e.questions.length-1===e.index?r("b-button",{on:{click:function(t){return e.set_scene("star")}}},[e._v(e._s(e.$t("button.done")))]):r("b-button",{on:{click:e.next}},[e._v(e._s(e.$t("button.next")))]),r("p",{attrs:{id:"debug"}},[e._v(e._s(e.user_results))])],2)],1)}),y=[],v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-progress",{staticClass:"mt-2",attrs:{max:125,height:"2rem","show-value":""}},[r("b-progress-bar",{attrs:{value:100/e.user_results.length*e.answered(),"show-progress":"",animated:"",variant:"success"}},[e._v(e._s(e.$t("questions.bar.answered")))]),r("b-progress-bar",{attrs:{value:100-100/e.user_results.length*e.answered(),variant:"dark"}},[e._v(e._s(e.$t("questions.bar.unanswered")))]),r("b-progress-bar",{attrs:{value:25,variant:"secondary"}},[e._v(e._s(e.$t("questions.bar.weight")))])],1)},m=[],f=(r("4de4"),{name:"Question_Progress_Bar",props:{user_results:Array},methods:{answered:function(){var e=this.user_results.filter((function(e){return!(null===e||void 0===e)})).length;return console.log(e),e}}}),w=f,q=Object(c["a"])(w,v,m,!1,null,"0f3e44dc",null),k=q.exports,x={name:"Question_Container",components:{Question_Progress_Bar:k},props:{questions:Array,answers:Array,update_results:Function,user_results:Array,set_scene:Function,set_results_length:Function},data:function(){return{index:0}},methods:{next:function(){this.index++},back:function(){this.index--}},created:function(){console.log(this.user_results.length),0===this.user_results.length&&this.set_results_length(this.questions.length)}},A=x,S=(r("ac24"),Object(c["a"])(A,b,y,!1,null,"9de9ab64",null)),O=S.exports,j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"jumbotron-results"}},[r("b-jumbotron",{attrs:{header:"Results","header-level":"3"},scopedSlots:e._u([{key:"lead",fn:function(){return[e._v(" "+e._s(e.$t("results.recommendation",{party:e.party2string(e.partyArray(e.stripped_results,e.year_data.parties))}))+" ")]},proxy:!0}])},[r("p",{attrs:{id:"Debug"}},[e._v(e._s(e.partyArray(e.stripped_results,e.year_data.parties)))]),r("p",{attrs:{id:"Debug"}},[e._v(e._s(e.year_data.party))]),r("div",{attrs:{id:"buttons"}},[r("b-button",{on:{click:function(t){return e.set_scene("question")}}},[e._v(e._s(e.$t("button.change_answers")))]),r("b-button",{on:{click:function(t){return e.set_scene("star")}}},[e._v(e._s(e.$t("button.change_weight")))])],1),r("hr",{staticClass:"my-4"}),r("b-card",{attrs:{"no-body":""}},[r("div",{attrs:{id:"Tabular"}},[r("b-tabs",{attrs:{"content-class":"mt-3"}},[r("b-tab",{attrs:{title:e.$t("results.tab.party.title"),active:""}},[r("b-alert",{attrs:{show:"",variant:"info",dismissible:""}},[r("h4",{staticClass:"alert-heading"},[e._v(e._s(e.$t("results.tab.party.explanation_title")))]),r("hr"),e._v(" "+e._s(e.$t("results.tab.party.explanation"))+" ")]),e._l(e.year_data.parties,(function(t){return r("div",{key:t.q_id},[r("Results_By_Party",{attrs:{results:e.stripped_results,party:t,questions:e.year_data.questions,answers:e.answers,star_array:e.star_array}})],1)}))],2),r("b-tab",{attrs:{title:e.$t("results.tab.question.title")}},[r("b-alert",{attrs:{show:"",variant:"info",dismissible:""}},[r("h4",{staticClass:"alert-heading"},[e._v(" "+e._s(e.$t("results.tab.question.explanation_title")))]),r("hr"),e._v(" "+e._s(e.$t("results.tab.question.explanation"))+" ")]),e._l(e.year_data.questions,(function(t){return r("div",{key:t.q_id},[r("Results_By_Question",{attrs:{results:e.stripped_results,parties:e.year_data.parties,question:t,answers:e.answers,star_array:e.star_array}})],1)}))],2)],1)],1)])],1)],1)},C=[],B=(r("d81d"),r("b0c0"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Party-Card"},[r("b-card",{attrs:{"no-body":""}},[r("b-card-header",[r("h3",[e._v(e._s(e.question.question))]),r("div",{attrs:{id:"badges"}},[-1===e.results[e.question.q_id]?r("b-badge",{attrs:{pill:"",variant:"danger"}},[e._v("You: Disagree")]):e._e(),0===e.results[e.question.q_id]||void 0===e.results[e.question.q_id]?r("b-badge",{attrs:{pill:"",variant:"warning"}},[e._v("You: Neutral")]):e._e(),1===e.results[e.question.q_id]?r("b-badge",{attrs:{pill:"",variant:"success"}},[e._v("You: Agree")]):e._e(),e.star_array[e.question.q_id]?r("b-badge",{attrs:{pill:"",variant:"info"}},[e._v("★")]):e._e()],1)]),r("b-list-group",e._l(e.parties,(function(t){return r("Results_By_Question_Party_Item",{key:t.name,attrs:{starred:e.star_array[e.question.q_id],party:t,question:e.question,answers:e.answers,number2answer:e.userNumber2Agree}})})),1)],1)],1)}),P=[],$=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-list-group-item",{class:e.visible?null:"collapsed",attrs:{"aria-expanded":e.visible?"true":"false","aria-controls":"collapse-0"},on:{click:function(t){e.visible=!e.visible}}},[r("div",{staticClass:"d-flex justify-content-left align-items-stretch align-content-stretch",attrs:{id:"title"}},[r("div",{staticClass:"flex-grow-1",staticStyle:{"text-align":"justify"}},[r("h5",[e._v(e._s(e.party.name))])]),r("div",{staticStyle:{"text-align":"right"},attrs:{id:"badges"}},[-1===e.party.answers[e.question.q_id].answer_level?r("b-badge",{attrs:{pill:"",variant:"danger"}},[e._v("Disagree")]):e._e(),0===e.party.answers[e.question.q_id].answer_level||void 0===e.party.answers[e.question.q_id].answer_level?r("b-badge",{attrs:{pill:"",variant:"warning"}},[e._v("Neutral")]):e._e(),1===e.party.answers[e.question.q_id].answer_level?r("b-badge",{attrs:{pill:"",variant:"success"}},[e._v("Agree")]):e._e()],1)]),r("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-0"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[e._v(" "+e._s(e.party.answers[e.question.q_id].answer)+" ")])],1)},N=[],D={name:"Results_By_Question_Party_Item",props:{party:Object,question:Object,answers:Array},data:function(){return{visible:!1}},methods:{partyNumber2Agree:function(e){return-1===e?"Disagree":0===e?"Neutral":1===e?"Agree":"Error. Please report this to the dev"}}},E=D,T=(r("54f7"),Object(c["a"])(E,$,N,!1,null,"f3880eb4",null)),Y=T.exports,I={name:"Results_By_Question",components:{Results_By_Question_Party_Item:Y},props:{question:Object,parties:Array,results:Array,answers:Array,star_array:Array},methods:{userNumber2Agree:function(e){for(var t=0;t<this.answers.length;t++)if(this.answers[t].val===e)return this.answers[t].txt;return"No Answer"}}},F=I,Q=(r("e65b"),Object(c["a"])(F,B,P,!1,null,"225fb7f7",null)),R=Q.exports,W=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Party-Card"},[r("b-card",{attrs:{"no-body":""}},[r("b-card-header",[r("h3",[e._v(e._s(e.party.name))]),r("p",{attrs:{id:"Debug"}},[e._v(e._s(e.results))]),r("Results_By_Party_Progress_Bar",{attrs:{party:e.party,results:e.results}})],1),r("b-list-group",e._l(e.questions,(function(t){return r("Result_By_Party_Question_Item",{key:t.q_id,attrs:{question:t,party:e.party,result:e.results[t.q_id],answers:e.answers,starred:e.star_array[t.q_id]}})})),1),r("b-card-footer",{on:{click:function(t){return e.goTo(e.party.website)}}},[e._v(" "+e._s(e.$t("results.party_website",{party:e.party.name}))+" ")])],1)],1)},M=[],H=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-progress",{staticClass:"mt-2",attrs:{max:e.results.length,height:"2rem"}},[r("b-progress-bar",{attrs:{value:e.agree,variant:"success"}},[e._v("Completely Agree")]),r("b-progress-bar",{attrs:{value:e.slightly_disagree,variant:"warning"}},[e._v("Slightly Disagree")]),r("b-progress-bar",{attrs:{value:e.disagree,variant:"danger"}},[e._v("Strongly Disagree")])],1)},L=[],U={name:"Results_By_Party_Progress_Bar",props:{party:Object,results:Array},data:function(){return{agree:0,slightly_disagree:0,disagree:0}},created:function(){this.process_results_3(this.results)},methods:{process_results_3:function(){this.agree=0,this.slightly_disagree=0,this.disagree=0;for(var e=0;e<this.results.length;e++){var t=this.party.answers[e].answer_level,r=this.results[e];switch(Math.abs(t-r)){case 0:this.agree++;break;case 1:this.slightly_disagree++;break;case 2:this.disagree++;break;default:console.error("PANIC, WE GOT SOMETHING NOT 012")}}},process_results_5:function(){this.agree=0,this.slightly_disagree=0,this.disagree=0;for(var e=0;e<this.results.length;e++){var t=this.party.answers[e].answer_level,r=0===this.results[e]?0:this.results[e]>0?1:-1;switch(Math.abs(t-r)){case 0:this.agree++;break;case 1:this.slightly_disagree++;break;case 2:this.disagree++;break;default:console.error("PANIC, WE GOT SOMETHING NOT 012")}}}}},J=U,z=Object(c["a"])(J,H,L,!1,null,"02e00624",null),G=z.exports,V=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-list-group-item",{class:e.visible?"":"collapsed",attrs:{"aria-expanded":e.visible?"true":"false","aria-controls":"collapse-0"},on:{click:function(t){e.visible=!e.visible}}},[r("div",{staticClass:"d-flex justify-content-left align-items-stretch align-content-stretch",attrs:{id:"title"}},[r("div",{staticClass:"flex-grow-1",staticStyle:{"text-align":"left"}},[r("h5",[e._v(e._s(e.question.question))])]),r("div",{staticStyle:{"text-align":"center"},attrs:{id:"badgesparty"}},[-1===e.party.answers[e.question.q_id].answer_level?r("b-badge",{staticClass:"party",attrs:{pill:"",variant:"danger"}},[e._v("Disagree")]):e._e(),0===e.party.answers[e.question.q_id].answer_level||void 0===e.party.answers[e.question.q_id].answer_level?r("b-badge",{staticClass:"party",attrs:{pill:"",variant:"warning"}},[e._v("Neutral")]):e._e(),1===e.party.answers[e.question.q_id].answer_level?r("b-badge",{staticClass:"party",attrs:{pill:"",variant:"success"}},[e._v("Agree")]):e._e(),e.starred?e._e():r("br"),e.starred?r("b-badge",{attrs:{pill:"",variant:"info"}},[e._v("★")]):e._e(),e.starred?r("br"):e._e(),-1===e.result?r("b-badge",{staticClass:"you",attrs:{pill:"",variant:"danger"}},[e._v("You: Disagree")]):e._e(),0===e.result||void 0===e.result?r("b-badge",{staticClass:"you",attrs:{pill:"",variant:"warning"}},[e._v("You: Neutral")]):e._e(),1===e.result?r("b-badge",{staticClass:"you",attrs:{pill:"",variant:"success"}},[e._v("You: Agree")]):e._e()],1)]),r("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-0"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[r("div",{attrs:{id:"badgesuser"}}),r("hr"),e._v(" "+e._s(e.party.answers[e.question.q_id].answer)+" ")])],1)},Z=[],K={name:"Result_By_Party_Question_Item",props:{question:Object,party:Object,answers:Array,result:Number,starred:Boolean},data:function(){return{visible:!1}},methods:{partyNumber2Agree:function(e){return-1===e?"Disagree":0===e?"Neutral":1===e?"Agree":"Error. Please report this to the dev"},userNumber2Agree:function(e){for(var t=0;t<this.answers.length;t++)if(this.answers[t].val===e)return this.answers[t].txt;return"No Answer"}}},X=K,ee=(r("70f9"),Object(c["a"])(X,V,Z,!1,null,"f672069a",null)),te=ee.exports,re={name:"Results_By_Party",components:{Result_By_Party_Question_Item:te,Results_By_Party_Progress_Bar:G},props:{party:Object,results:Array,questions:Array,answers:Array,star_array:Array},methods:{goTo:function(e){window.open(e,"_blank","noreferrer noopener")}}},se=re,ae=(r("bd76"),Object(c["a"])(se,W,M,!1,null,"1ad7a4b7",null)),ne=ae.exports,ie={name:"Results",components:{Results_By_Party:ne,Results_By_Question:R},props:{year_data:Object,answers:Array,results:Array,set_scene:Function,star_array:Array},computed:{stripped_results:function(){return this.results.map((function(e){return void 0===e?0:e}))}},methods:{partyPoints:function(e,t){var r=0;console.log(t.name),console.log("[User, Party, Important, Points]");for(var s=0;s<e.length;s++){var a=t.answers[s].answer_level,n=e[s],i=0;this.star_array[s]?(0===n&&(-1===a&&(i=-1),0===a&&(i=0),1===a&&(i=-1)),-1===n&&(-1===a&&(i=2),0===a&&(i=-1),1===a&&(i=-2)),1===n&&(-1===a&&(i=-2),0===a&&(i=-1),1===a&&(i=2)),console.log("["+n+","+a+","+!0+","+i+"]")):(0===n&&(-1===a&&(i=0),0===a&&(i=1),1===a&&(i=0)),-1===n&&(-1===a&&(i=1),0===a&&(i=0),1===a&&(i=-1)),1===n&&(-1===a&&(i=-1),0===a&&(i=0),1===a&&(i=1)),console.log("["+n+","+a+","+!1+","+i+"]")),r+=i}return r},partyArray:function(e,t){var r=[];console.log(this.stripped_results);for(var s=0;s<t.length;s++)r[s]={party:t[s].name,points:this.partyPoints(this.stripped_results,t[s])};return r.sort((function(e,t){return t.points-e.points}))},party2string:function(e){for(var t=e[0].party,r=1;r<e.length;r++){var s=e[r-1].points,a=e[r].points;if(s!==a)break;t+=" & "+e[r].party}return t}}},le=ie,oe=(r("f43d"),Object(c["a"])(le,j,C,!1,null,"67eeee90",null)),ue=oe.exports,ce=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-jumbotron",{attrs:{"header-level":"4"},scopedSlots:e._u([{key:"header",fn:function(){return[e._v(" "+e._s(e.$t("welcome.title"))+" ")]},proxy:!0},{key:"lead",fn:function(){return[e._v(" "+e._s(e.$t("welcome.description"))+" "),r("br"),e._v(" "+e._s(e.$t("welcome.lang"))+" "),r("Flag"),r("hr",{staticClass:"my-4"}),null===e.get_date(e.year)?r("p",[e._v(e._s(e.$t("welcome.date.unknown")))]):r("p",[e._v(e._s(e.$t("welcome.date",{date:e.get_date(e.year)}))+" ")])]},proxy:!0}])},[e.year_list.includes(this.year)?r("b-button",{on:{click:function(t){return e.set_scene("question")}}},[e._v("Start")]):r("b-button",{attrs:{disabled:""}},[e._v("Start")]),r("Set_Year_Dropdown",{attrs:{set_year:e.set_year,year_list:e.year_list}})],1)},de=[],pe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flag"},[r("a",{class:"de"===e.$i18n.locale?"disabled":"enabled",on:{click:function(t){e.$i18n.locale="de"}}},[e._v(" 🇩🇪 ")]),r("a",{class:"en"===e.$i18n.locale?"disabled":"enabled",on:{click:function(t){e.$i18n.locale="en"}}},[e._v(" 🇬🇧 ")])])},_e=[],he={name:"Flag",data:function(){return{lang:"en",langs:["en","de"]}}},ge=he,be=(r("f800"),Object(c["a"])(ge,pe,_e,!1,null,"01850fe1",null)),ye=be.exports,ve=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-dropdown",{staticClass:"m-md-2",attrs:{id:"dropdown-1",text:"Archived Years"}},e._l(e.year_list,(function(t){return r("b-dropdown-item",{key:t,on:{click:function(r){return e.set_year(t)}}},[e._v(e._s(t))])})),1)},me=[],fe={name:"Set_Year_Dropdown",props:{year_list:Array,set_year:Function}},we=fe,qe=Object(c["a"])(we,ve,me,!1,null,"2cc2b143",null),ke=qe.exports,xe={name:"Welcome",components:{Set_Year_Dropdown:ke,Flag:ye},props:{year_list:Array,set_year:Function,set_scene:Function,year:Number,get_date:Function}},Ae=xe,Se=Object(c["a"])(Ae,ce,de,!1,null,"6f1736b6",null),Oe=Se.exports,je=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-alert",{attrs:{show:"",dismissible:"",variant:"warning"}},[r("div",{attrs:{id:"DivBcAlertsCantBeClicked"}},[e._v(" You are viewing the archive of "+e._s(e.year)+". Refresh the page to select another year. "),r("hr"),e._v(" TODO: Think about changing this to a click to trigger refresh (reset quiz) ")])])},Ce=[],Be={name:"Archive_Banner",props:{year:Number}},Pe=Be,$e=Object(c["a"])(Pe,je,Ce,!1,null,"4283e020",null),Ne=$e.exports,De=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"Star"}},[r("b-jumbotron",{attrs:{"header-level":"4",header:e.$t("star.title")},scopedSlots:e._u([{key:"lead",fn:function(){return[e._v(" "+e._s(e.$t("star.description"))+" ")]},proxy:!0}])},[r("hr"),r("b-alert",{attrs:{show:"",dismissible:"",variant:"warning"}},[e._v(" This will be Removed Eventually, it's here for debugging "),r("hr"),e._v(" Scoring Table normal: "),r("table",{attrs:{border:"0",cellspacing:"0"}},[r("colgroup",{attrs:{span:"4",width:"85"}}),r("tbody",[r("tr",[r("td",{staticStyle:{border:"1px solid #000000"},attrs:{align:"left",height:"17"}}),r("td",{staticStyle:{border:"1px solid #000000"},attrs:{align:"right"}},[e._v("-1")]),r("td",{staticStyle:{border:"1px solid #000000"},attrs:{align:"right"}},[e._v("0")]),r("td",{staticStyle:{border:"1px solid #000000"},attrs:{align:"right"}},[e._v("1")])]),r("tr",[r("td",{staticStyle:{border:"1px solid #000000"},attrs:{align:"right",height:"17"}},[e._v("-1")]),r("td",{staticStyle:{border:"1px solid #000000"},attrs:{align:"right"}},[e._v("1")]),r("td",{staticStyle:{border:"1px solid #000000"},attrs:{align:"right"}},[e._v("0")]),r("td",{staticStyle:{border:"1px solid #000000"},attrs:{align:"right"}},[e._v("-1")])]),r("tr",[r("td",{staticStyle:{border:"1px solid #000000"},attrs:{align:"right",height:"17"}},[e._v("0")]),r("td",{staticStyle:{border:"1px solid #000000"},attrs:{align:"right"}},[e._v("0")]),r("td",{staticStyle:{border:"1px solid #000000"},attrs:{align:"right"}},[e._v("1")]),r("td",{staticStyle:{border:"1px solid #000000"},attrs:{align:"right"}},[e._v("0")])]),r("tr",[r("td",{staticStyle:{border:"1px solid #000000"},attrs:{align:"right",height:"17"}},[e._v("1")]),r("td",{staticStyle:{border:"1px solid #000000"},attrs:{align:"right"}},[e._v("-1")]),r("td",{staticStyle:{border:"1px solid #000000"},attrs:{align:"right"}},[e._v("0")]),r("td",{staticStyle:{border:"1px solid #000000"},attrs:{align:"right"}},[e._v("1")])])])]),r("p"),r("p"),e._v(" Scoring Table: Important "),r("table",{attrs:{border:"0",cellspacing:"0"}},[r("colgroup",{attrs:{span:"4",width:"85"}}),r("tbody",[r("tr",[r("td",{staticStyle:{border:"1px solid #000000"},attrs:{align:"left",height:"17"}}),r("td",{staticStyle:{border:"1px solid #000000"},attrs:{align:"right"}},[e._v("-1")]),r("td",{staticStyle:{border:"1px solid #000000"},attrs:{align:"right"}},[e._v("0")]),r("td",{staticStyle:{border:"1px solid #000000"},attrs:{align:"right"}},[e._v("1")])]),r("tr",[r("td",{staticStyle:{border:"1px solid #000000"},attrs:{align:"right",height:"17"}},[e._v("-1")]),r("td",{staticStyle:{border:"1px solid #000000"},attrs:{align:"right"}},[e._v("2")]),r("td",{staticStyle:{border:"1px solid #000000"},attrs:{align:"right"}},[e._v("-1")]),r("td",{staticStyle:{border:"1px solid #000000"},attrs:{align:"right"}},[e._v("2")])]),r("tr",[r("td",{staticStyle:{border:"1px solid #000000"},attrs:{align:"right",height:"17"}},[e._v("0")]),r("td",{staticStyle:{border:"1px solid #000000"},attrs:{align:"right"}},[e._v("-1")]),r("td",{staticStyle:{border:"1px solid #000000"},attrs:{align:"right"}},[e._v("2")]),r("td",{staticStyle:{border:"1px solid #000000"},attrs:{align:"right"}},[e._v("-1")])]),r("tr",[r("td",{staticStyle:{border:"1px solid #000000"},attrs:{align:"right",height:"17"}},[e._v("1")]),r("td",{staticStyle:{border:"1px solid #000000"},attrs:{align:"right"}},[e._v("-2")]),r("td",{staticStyle:{border:"1px solid #000000"},attrs:{align:"right"}},[e._v("-1")]),r("td",{staticStyle:{border:"1px solid #000000"},attrs:{align:"right"}},[e._v("-2")])])])]),r("p")]),r("User_Has_Skipped_Question_Alert",{attrs:{results:e.results}}),r("b-list-group",e._l(e.questions,(function(t){return r("b-list-group-item",{key:t.q_id,class:[e.star_array[t.q_id]?"active":""]+" d-flex justify-content-between align-items-center",on:{click:function(r){return e.star(t.q_id)}}},[r("div",{staticStyle:{"text-align":"left"}},[e._v(" "+e._s(t.question))]),-1===e.results[t.q_id]?r("b-badge",{attrs:{pill:"",variant:"danger"}},[e._v("Disagree")]):e._e(),0===e.results[t.q_id]||void 0===e.results[t.q_id]?r("b-badge",{attrs:{pill:"",variant:"warning"}},[e._v("Neutral")]):e._e(),1===e.results[t.q_id]?r("b-badge",{attrs:{pill:"",variant:"success"}},[e._v("Agree")]):e._e()],1)})),1),r("hr"),r("b-button",{on:{click:function(t){return e.set_scene("question")}}},[e._v(e._s(e.$t("button.back")))]),r("b-button",{on:{click:function(t){return e.set_scene("result")}}},[e._v(e._s(e.$t("button.show_results")))])],1)],1)},Ee=[],Te=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.results.filter((function(e){return void 0!==e})).length!==e.results.length?r("b-alert",{attrs:{show:"",dismissible:"",variant:"warning"}},[r("h4",{staticClass:"alert-heading"},[e._v(e._s(e.$t("star.skip.title")))]),r("hr"),r("p",[e._v(e._s(e.$t("star.skip.text")))])]):e._e()},Ye=[],Ie={name:"User_Has_Skipped_Question_Alert",props:{results:Array}},Fe=Ie,Qe=Object(c["a"])(Fe,Te,Ye,!1,null,"934517b6",null),Re=Qe.exports,We={components:{User_Has_Skipped_Question_Alert:Re},name:"Star_Screen",props:{results:Array,questions:Array,star_array:Array,set_star_array_length:Function,flip_star:Function,set_scene:Function},methods:{star:function(e){console.log("click"),this.flip_star(e)}}},Me=We,He=(r("1cfd"),Object(c["a"])(Me,De,Ee,!1,null,"c1ac4d66",null)),Le=He.exports,Ue={name:"Selector",components:{Star_Screen:Le,Archive_Banner:Ne,Welcome:Oe,Results:ue,Question_Container:O},data:function(){return{year:this.getYear(),current_scene:"welcome",user_results:[],answers:[{val:-1,txt:"Disagree"},{val:0,txt:"Neutral"},{val:1,txt:"Agree"}],star_array:[]}},methods:{set_results_length:function(e){this.user_results=new Array(e).fill()},set_star_array_length:function(e){this.star_array=new Array(e).fill(),console.log("Set to length "+this.questions.length);for(var t=0;t<this.star_array.length;t++)console.log("Iteration "+t),this.star_array[t]=!1},get_date:function(e){for(var t in _)if(console.log(_[t]),_[t].year===e)return _[t].date;return null},set_scene:function(e){this.current_scene=e},update_results:function(e,t){s["default"].set(this.user_results,e,t)},update_stars:function(e){s["default"].set(this.star_array,e,!this.star_array[e])},getYear:function(){return(new Date).getFullYear()},getYearData:function(e){for(var t=0;t<_.length;t++)if(_[t].year===e)return _[t];return null},setYear:function(e){this.year=e,this.archive_override=!0},listOfAllYears:function(){for(var e=[],t=0;t<_.length;t++)e[t]=_[t].year;return e}}},Je=Ue,ze=Object(c["a"])(Je,h,g,!1,null,"2fdf7fd8",null),Ge=ze.exports,Ve={name:"App",components:{Selector:Ge,Header:p},data:function(){return{year:this.getYear()}},methods:{getYear:function(){return(new Date).getFullYear()},getYearData:function(e){for(var t=0;t<_.length;t++)if(_[t].year===e)return _[t];return null},setYear:function(e){this.year=e},listOfAllYears:function(){for(var e=[],t=0;t<_.length;t++)e[t]=_[t].year;return e}}},Ze=Ve,Ke=(r("034f"),Object(c["a"])(Ze,a,n,!1,null,null,null)),Xe=Ke.exports,et=r("5f5b"),tt=(r("f9e3"),r("2dd8"),r("ecee")),rt=r("c074"),st=r("ad3d"),at=(r("4160"),r("d3b7"),r("ac1f"),r("466d"),r("159b"),r("ddb0"),r("a925"));function nt(){var e=r("49f8"),t={};return e.keys().forEach((function(r){var s=r.match(/([A-Za-z0-9-_]+)\./i);if(s&&s.length>1){var a=s[1];t[a]=e(r)}})),t}s["default"].use(at["a"]);var it=new at["a"]({locale:"en",fallbackLocale:"en",messages:nt()});tt["c"].add(rt["a"]),s["default"].component("font-awesome-icon",st["a"]),s["default"].use(et["a"]),s["default"].config.productionTip=!1,new s["default"]({i18n:it,render:function(e){return e(Xe)}}).$mount("#app")},6465:function(e,t,r){},"6ce2":function(e){e.exports=JSON.parse('{"welcome":{"title":"Wal-O-Mat - Auch in Deutsch <3","description":"Hi, dat Ding ist so \'nen Wahl-O-Mat. Der tut Sachen empfehlen per Algorithmen, Cloud und KI (kein Blockchain leider)","date":"Die nächste Hochschulwahl ist am {date}","dateunknown":"Leider wissen wir nicht wann die nächste HSW ist :(","lang":"Sprache ändern","archive":"Archivierte Jahren","postal":"Man kann auch per Briefwahl wählen :)"},"questions":{"title":"Fragen","bar":"Beantwortet"},"button":{"back":"Zurück","start":"Start","next":"Weiter","done":"Fertig","show_results":"Resultate","change_answers":"Antwort Ändern","change_weight":"Gewichtung Ändern"},"badge":{"you":"Du:","disagree":"Ablehnen","agree":"Zustimmen","neutral":"Neutral"},"star":{"title":"Wichtige Fragen","description":"Ist eine Frage ganz wichtig für dich? Wähl es aus und es wird extra bewertet :).","algorithm":"Falls du Bock auf Algorithmen hast, kannst du hier klicken!.","skip":{"title":"Skipped Answers","text":"Some questions have been skipped, these shall be interpreted as neutral"}},"results":{"title":"Resultate","recommendation":"Wir glauben, dass die Liste {party} die beste Wahl für dich ist!","party_website":"Für mehr Infos bzgl. {party}, kannst du ihre Webseite besuchen {website}.","tab":{"party":{"title":"Nach Liste","explanation_title":"Erklaerung (Liste)","explanation":"Langer Text der erklärt wie das ganze hier Funktioniert. Ich hab kein Bock und es ist 1 Uhr Morgens. Sorry"},"question":{"title":"Nach Frage","explanation_title":"Erklaerung (Frage)","explanation":"Bla Bla Bla, siehe Explanation.Party "}}},"archive":{"todo":"todo"}}')},"70f9":function(e,t,r){"use strict";var s=r("a3b4"),a=r.n(s);a.a},"85ec":function(e,t,r){},"8d0c":function(e,t,r){},a3b4:function(e,t,r){},ac24:function(e,t,r){"use strict";var s=r("43e1"),a=r.n(s);a.a},bd76:function(e,t,r){"use strict";var s=r("6465"),a=r.n(s);a.a},c2d4:function(e,t,r){},c52c:function(e,t,r){},e65b:function(e,t,r){"use strict";var s=r("8d0c"),a=r.n(s);a.a},e9b1:function(e){e.exports=JSON.parse('[{"year":2020,"date":"2020-07-07","parties":[{"name":"The Party","website":"https://fs.tum.de","answers":[{"q_id":0,"answer_level":1,"answer":"Bacon ipsum dolor amet swine drumstick shoulder kielbasa. Capicola pork chop prosciutto meatball. Porchetta pastrami shankle bacon pork belly. Ball tip alcatra sausage pancetta pork chop pork belly salami spare ribs landjaeger prosciutto turkey venison pig."},{"q_id":1,"answer_level":1,"answer":"Bacon ipsum dolor amet swine drumstick shoulder kielbasa. Capicola pork chop prosciutto meatball. Porchetta pastrami shankle bacon pork belly. Ball tip alcatra sausage pancetta pork chop pork belly salami spare ribs landjaeger prosciutto turkey venison pig."},{"q_id":2,"answer_level":-1,"answer":"Bacon ipsum dolor amet swine drumstick shoulder kielbasa. Capicola pork chop prosciutto meatball. Porchetta pastrami shankle bacon pork belly. Ball tip alcatra sausage pancetta pork chop pork belly salami spare ribs landjaeger prosciutto turkey venison pig."},{"q_id":3,"answer_level":0,"answer":"Bacon ipsum dolor amet swine drumstick shoulder kielbasa. Capicola pork chop prosciutto meatball. Porchetta pastrami shankle bacon pork belly. Ball tip alcatra sausage pancetta pork chop pork belly salami spare ribs landjaeger prosciutto turkey venison pig."}]},{"name":"The New Party","website":"https://TNP.com","answers":[{"q_id":0,"answer_level":0,"answer":"Here be an answer to the 0th question"},{"q_id":1,"answer_level":1,"answer":"Here be an answer to the 1st question"},{"q_id":2,"answer_level":-1,"answer":"Here be an answer to the 2nd question"},{"q_id":3,"answer_level":-1,"answer":"Here be an answer to the 3rd question"}]},{"name":"Character Tester Party","website":"https://www.ctp.de","answers":[{"q_id":0,"answer_level":-1,"answer":"160: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient."},{"q_id":1,"answer_level":-1,"answer":"320: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringill"},{"q_id":2,"answer_level":1,"answer":"1000/1: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. N"},{"q_id":3,"answer_level":1,"answer":"1000/3: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.\\nNulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.\\nVivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. N "}]}],"questions":[{"q_id":0,"question":"This is my first Question. It is pretty short."},{"q_id":1,"question":"This is my second question. My lack of creativity is showing"},{"q_id":2,"question":"Turns out I need a third longer question to test formatting #smart"},{"q_id":3,"question":"This is my last question. it should be even longer! So I added another sentence to test out things that are multiple lines long, because formatting CSS is hard."}]},{"year":2018,"date":"2018-02-02","parties":[{"name":"The Party of 2018","website":"tp.com","answers":[{"q_id":0,"answer_level":0,"answer":"2018"},{"q_id":1,"answer_level":1,"answer":"Bacon ipsum dolor amet swine drumstick shoulder kielbasa. Capicola pork chop prosciutto meatball. Porchetta pastrami shankle bacon pork belly. Ball tip alcatra sausage pancetta pork chop pork belly salami spare ribs landjaeger prosciutto turkey venison pig."},{"q_id":2,"answer_level":-1,"answer":"Bacon ipsum dolor amet swine drumstick shoulder kielbasa. Capicola pork chop prosciutto meatball. Porchetta pastrami shankle bacon pork belly. Ball tip alcatra sausage pancetta pork chop pork belly salami spare ribs landjaeger prosciutto turkey venison pig."}]}],"questions":[{"q_id":0,"question":"This is my first Question of 2018"},{"q_id":1,"question":"This is my second question of 2018"},{"q_id":2,"question":"This is my third question of 2018"}]}]')},edd4:function(e){e.exports=JSON.parse('{"welcome":{"title":"Wal-O-Mat","description":"Welcome to the Walomat! We can help you inform yourself regarding the upcoming university elections.","date":"The next university election shall take place on the {date}","dateunknown":"We don\'t know when the next university election is taking place :(","lang":"Change Language","archive":"Archived Years","postal":"You can also vote by post. Applications can be done here."},"questions":{"title":"Questions","bar":{"answered":"Answered","unanswered":"Unanswered","weight":"Weighting"}},"button":{"back":"Back","start":"Start","next":"Next","done":"Done","show_results":"Results","change_answers":"Change Answers","change_weight":"Change Weighting"},"badge":{"you":"You:","disagree":"Disagree","agree":"Agree","neutral":"Neutral"},"star":{"title":"Important Questions","description":"Are particular important for you? Select them below and we will make sure they are counted extra.","algorithm":"If you are interested in the algorithm, please click here.","skip":{"title":"Skipped Answers","text":"Some questions have been skipped, these shall be interpreted as neutral"}},"results":{"title":"Results","recommendation":"We find that you have similar opinions to {party}! TODO: Check this string","party_website":"Tap here to go to {party}\'s Website","tab":{"party":{"title":"By Party","explanation_title":"Explanation (By Party)","explanation":" If you want to find out more about each party and why they may agree, or disagree with you, you can tap on the question and it will give you the parties explanation. Oh and the star means the question was important for you "},"question":{"explanation_title":"Explanation (By Question)","title":"By Question","explanation":" If you want to find out more about each party and why they may agree, or disagree with you, you can tap on the question and it will give you the parties explanation. Oh and the star means the question was important for you"}},"archive":{"todo":"todo"}}}')},f08d:function(e,t,r){},f43d:function(e,t,r){"use strict";var s=r("f08d"),a=r.n(s);a.a},f800:function(e,t,r){"use strict";var s=r("c2d4"),a=r.n(s);a.a}});
//# sourceMappingURL=app.e641030f.js.map