(function(e){function t(t){for(var s,i,o=t[0],l=t[1],u=t[2],_=0,p=[];_<o.length;_++)i=o[_],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);c&&c(t);while(p.length)p.shift()();return n.push.apply(n,u||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],s=!0,o=1;o<r.length;o++){var l=r[o];0!==a[l]&&(s=!1)}s&&(n.splice(t--,1),e=i(i.s=r[0]))}return e}var s={},a={app:0},n=[];function i(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=s,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(r,s,function(t){return e[t]}.bind(null,s));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/Wal-O-Mat-Vue/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=l;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var s=r("85ec"),a=r.n(s);a.a},"20f4":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header",{attrs:{index:-1}}),r("b-container",[r("b-row",[r("b-col",{attrs:{md:"6","offset-md":"3"}},[r("Selector")],1)],1)],1)],1)},n=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div")},o=[],l=(r("a9e3"),{name:"Header",props:{index:Number}}),u=l,c=r("2877"),_=Object(c["a"])(u,i,o,!1,null,"2c83d9c8",null),p=_.exports,d=r("e9b1"),b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"selector"}},["welcome"===e.current_scene?r("Welcome",{attrs:{set_year:e.setYear,year_list:e.listOfAllYears(),set_scene:e.set_scene,year:e.year,get_date:e.get_date}}):e._e(),"question"!==e.current_scene&&"result"!==e.current_scene||e.year===e.getYear()?e._e():r("Archive_Banner",{attrs:{year:e.year}}),"question"===e.current_scene?r("Question_Container",{attrs:{questions:e.getYearData(e.year).questions,answers:e.answers,update_results:this.update_results,user_results:e.user_results,set_scene:e.set_scene,set_results_length:e.set_results_length}}):e._e(),"result"===e.current_scene?r("Results",{attrs:{answers:e.answers,results:e.user_results,year_data:e.getYearData(e.year),set_scene:e.set_scene}}):e._e()],1)},h=[],y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"question-box-div"},[r("b-jumbotron",[r("template",{slot:"lead"},[e._v(" "+e._s(e.questions[e.index].question)+" "),r("Question_Progress_Bar",{attrs:{user_results:e.user_results}})],1),r("hr",{staticClass:"my-4"}),r("b-list-group",e._l(e.answers,(function(t){return r("b-list-group-item",{key:t.val,class:[e.user_results[e.index]===t.val?"active":""],on:{click:function(r){return e.update_results(e.index,t.val)}}},[e._v(" "+e._s(t.txt)+" ")])})),1),e._v(" "+e._s(e.user_results)+" "),0===e.index?r("b-button",{attrs:{disabled:""}},[e._v("Back")]):r("b-button",{on:{click:e.back}},[e._v("Back")]),e.questions.length-1===e.index?r("b-button",{on:{click:function(t){return e.set_scene("result")}}},[e._v("Submit")]):r("b-button",{on:{click:e.next}},[e._v("Next")])],2)],1)},f=[],v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-progress",{staticClass:"mt-2",attrs:{max:e.user_results.length,"show-value":""}},[r("b-progress-bar",{attrs:{value:e.answered(),"show-progress":"",animated:""}},[e._v("Answered "+e._s(e.answered())+"/"+e._s(e.user_results.length))])],1)},m=[],g=(r("4de4"),{name:"Question_Progress_Bar",props:{user_results:Array},methods:{answered:function(){var e=this.user_results.filter((function(e){return!(null===e||void 0===e)})).length;return console.log(e),e}}}),w=g,k=Object(c["a"])(w,v,m,!1,null,"3330c127",null),q=k.exports,x={name:"Question_Container",components:{Question_Progress_Bar:q},props:{questions:Array,answers:Array,update_results:Function,user_results:Array,set_scene:Function,set_results_length:Function},data:function(){return{index:0}},methods:{next:function(){this.index++},back:function(){this.index--}},created:function(){console.log(this.user_results.length),0===this.user_results.length&&this.set_results_length(this.questions.length)}},A=x,O=(r("5fb6"),Object(c["a"])(A,y,f,!1,null,"11a29738",null)),P=O.exports,B=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"jumbotron-results"}},[r("User_Has_Skipped_Question_Alert",{attrs:{results:e.results}}),r("b-jumbotron",{attrs:{header:"Results"},scopedSlots:e._u([{key:"lead",fn:function(){return[e._v(" We Believe that "+e._s(e.partyArray(e.results,e.year_data.parties)[0].party)+" is the best choice for you! ")]},proxy:!0}])},[r("hr",{staticClass:"my-4"}),r("div",{attrs:{id:"Tabular"}},[r("b-tabs",{attrs:{"content-class":"mt-3"}},[r("b-tab",{attrs:{title:"By Party",active:""}},[e._l(e.year_data.parties,(function(t){return r("div",{key:t.q_id},[r("Results_By_Party",{attrs:{results:e.results,party:t,questions:e.year_data.questions,answers:e.answers}}),r("br")],1)})),r("br")],2),r("b-tab",{attrs:{title:"By Question"}},e._l(e.year_data.questions,(function(t){return r("div",{key:t.q_id},[r("Results_By_Question",{attrs:{results:e.results,parties:e.year_data.parties,question:t,answers:e.answers}}),r("br")],1)})),0)],1)],1),r("div",{attrs:{id:"go_back"}},[r("hr",{staticClass:"my-4"}),r("b-button",{on:{click:function(t){return e.set_scene("question")}}},[e._v("Go Back")])],1)])],1)},j=[],S=(r("b0c0"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Party-Card"},[r("b-card",{attrs:{"no-body":""}},[r("b-card-header",[r("h3",[e._v(e._s(e.question.question))]),r("i",[e._v("You Answered: "+e._s(e.userNumber2Agree(e.results[e.question.q_id])))])]),r("b-list-group",e._l(e.parties,(function(t){return r("Results_By_Question_Party_Item",{key:t.name,attrs:{party:t,question:e.question,answers:e.answers,number2answer:e.userNumber2Agree}})})),1)],1)],1)}),C=[],N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-list-group-item",{class:e.visible?null:"collapsed",attrs:{"aria-expanded":e.visible?"true":"false","aria-controls":"collapse-0"},on:{click:function(t){e.visible=!e.visible}}},[r("h6",[e._v(e._s(e.partyNumber2Agree(e.party.answers[e.question.q_id].answer_level))+" | "+e._s(e.party.name))]),r("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-0"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[e._v(" "+e._s(e.party.answers[e.question.q_id].answer)+" ")])],1)},Y=[],Q={name:"Results_By_Question_Party_Item",props:{party:Object,question:Object,answers:Array},data:function(){return{visible:!1}},methods:{partyNumber2Agree:function(e){return-1===e?"Disagree":0===e?"Neutral":1===e?"Agree":"Error. Please report this to the dev"}}},R=Q,T=Object(c["a"])(R,N,Y,!1,null,"7b407c48",null),D=T.exports,E={name:"Results_By_Question",components:{Results_By_Question_Party_Item:D},props:{question:Object,parties:Array,results:Array,answers:Array},methods:{userNumber2Agree:function(e){for(var t=0;t<this.answers.length;t++)if(this.answers[t].val===e)return this.answers[t].txt;return"No Answer"}}},$=E,H=Object(c["a"])($,S,C,!1,null,"3db3522f",null),F=H.exports,W=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Party-Card"},[r("b-card",{attrs:{"no-body":""}},[r("b-card-header",[r("h3",[e._v(e._s(e.party.name))]),e._v(" "+e._s(e.results)+" "),r("Results_By_Party_Progress_Bar",{attrs:{party:e.party,results:e.results}})],1),r("b-list-group",e._l(e.questions,(function(t){return r("Result_By_Party_Question_Item",{key:t.q_id,attrs:{question:t,party:e.party,result:e.results[t.q_id],answers:e.answers}})})),1),r("b-card-footer",[e._v("For More Info Regarding the Party, you can visit "+e._s(e.party.website))])],1)],1)},I=[],M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-progress",{staticClass:"mt-2",attrs:{max:e.results.length,"show-value":""}},[r("b-progress-bar",{attrs:{value:e.agree,variant:"success"}}),r("b-progress-bar",{attrs:{value:e.slightly_disagree,variant:"warning"}}),r("b-progress-bar",{attrs:{value:e.disagree,variant:"danger"}})],1)},G=[],J={name:"Results_By_Party_Progress_Bar",props:{party:Object,results:Array},data:function(){return{agree:0,slightly_disagree:0,disagree:0}},created:function(){this.process_results(this.results)},methods:{process_results:function(){this.agree=0,this.slightly_disagree=0,this.disagree=0;for(var e=0;e<this.results.length;e++){var t=this.party.answers[e].answer_level,r=0===this.results[e]?0:this.results[e]>0?1:-1;switch(Math.abs(t-r)){case 0:this.agree++;break;case 1:this.slightly_disagree++;break;case 2:this.disagree++;break;default:console.error("PANIC, WE GOT SOMETHING NOT 012")}}}}},U=J,z=Object(c["a"])(U,M,G,!1,null,"170782fe",null),V=z.exports,K=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-list-group-item",{class:e.visible?null:"collapsed",attrs:{"aria-expanded":e.visible?"true":"false","aria-controls":"collapse-0"},on:{click:function(t){e.visible=!e.visible}}},[r("h6",[e._v(e._s(e.partyNumber2Agree(e.party.answers[e.question.q_id].answer_level))+" | "+e._s(e.question.question))]),r("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-0"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[r("i",[e._v("You Answered: "+e._s(e.userNumber2Agree(e.result)))]),r("hr",{staticClass:"my-4"}),e._v(" "+e._s(e.party.answers[e.question.q_id].answer)+" ")])],1)},L=[],X={name:"Result_By_Party_Question_Item",props:{question:Object,party:Object,answers:Array,result:Number},data:function(){return{visible:!1}},methods:{partyNumber2Agree:function(e){return-1===e?"Disagree":0===e?"Neutral":1===e?"Agree":"Error. Please report this to the dev"},userNumber2Agree:function(e){for(var t=0;t<this.answers.length;t++)if(this.answers[t].val===e)return this.answers[t].txt;return"No Answer"}}},Z=X,ee=Object(c["a"])(Z,K,L,!1,null,"18b0fbdc",null),te=ee.exports,re={name:"Results_By_Party",components:{Result_By_Party_Question_Item:te,Results_By_Party_Progress_Bar:V},props:{party:Object,results:Array,questions:Array,answers:Array}},se=re,ae=Object(c["a"])(se,W,I,!1,null,"02299f65",null),ne=ae.exports,ie=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.results.filter((function(e){return void 0!==e})).length!==e.results.length?r("b-alert",{attrs:{show:"",dismissible:"",variant:"warning"}},[e._v("Some questions have been skipped, these shall be interpreted as neutral "),r("hr"),e._v(" TODO: Change the behaviour to better interpret skips")]):e._e()},oe=[],le={name:"User_Has_Skipped_Question_Alert",props:{results:Array}},ue=le,ce=Object(c["a"])(ue,ie,oe,!1,null,"6519d3b8",null),_e=ce.exports,pe={name:"Results",components:{User_Has_Skipped_Question_Alert:_e,Results_By_Party:ne,Results_By_Question:F},props:{year_data:Object,answers:Array,results:Array,set_scene:Function},computed:{stripped_results:function(){return this.results.filter((function(e){return!(null===e||void 0===e)}))}},methods:{partyPoints:function(e,t){for(var r=0,s=0;s<e.length;s++){var a=t.answers[s].answer_level,n=e[s];r+=0===a?1-(n<0?-1*n:n):n*a}return r},partyArray:function(e,t){for(var r=[],s=0;s<t.length;s++)r[s]={party:t[s].name,points:this.partyPoints(e,t[s])};return r.sort((function(e,t){return t.points-e.points}))}}},de=pe,be=Object(c["a"])(de,B,j,!1,null,"b0fa4a6c",null),he=be.exports,ye=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-jumbotron",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v(" Wal-o-mat ")]},proxy:!0},{key:"lead",fn:function(){return[e._v(" Welcome to the Walomat! Here goes Infos about the HSW including this years date! "),r("hr",{staticClass:"my-4"}),e._v(" "+e._s("Date of "+e.year+"'s HSW: \t"+(null===e.get_date(e.year)?"Not Published":e.get_date(e.year)))+" ")]},proxy:!0}])},[e.year_list.includes(this.year)?r("b-button",{on:{click:function(t){return e.set_scene("question")}}},[e._v("Start")]):r("b-button",{attrs:{disabled:""}},[e._v("Start")]),r("Set_Year_Dropdown",{attrs:{set_year:e.set_year,year_list:e.year_list}})],1)},fe=[],ve=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-dropdown",{staticClass:"m-md-2",attrs:{id:"dropdown-1",text:"Archived Years"}},e._l(e.year_list,(function(t){return r("b-dropdown-item",{key:t,on:{click:function(r){return e.set_year(t)}}},[e._v(e._s(t))])})),1)},me=[],ge={name:"Set_Year_Dropdown",props:{year_list:Array,set_year:Function}},we=ge,ke=Object(c["a"])(we,ve,me,!1,null,"2cc2b143",null),qe=ke.exports,xe={name:"Welcome",components:{Set_Year_Dropdown:qe},props:{year_list:Array,set_year:Function,set_scene:Function,year:Number,get_date:Function}},Ae=xe,Oe=Object(c["a"])(Ae,ye,fe,!1,null,"6fa0f8ff",null),Pe=Oe.exports,Be=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-alert",{attrs:{show:"",dismissible:"",variant:"warning"}},[r("div",{attrs:{id:"DivBcAlertsCantBeClicked"}},[e._v(" You are viewing the archive of "+e._s(e.year)+". Refresh the page to select another year. "),r("hr"),e._v(" TODO: Think about changing this to a click to trigger refresh (reset quiz) ")])])},je=[],Se={name:"Archive_Banner",props:{year:Number}},Ce=Se,Ne=Object(c["a"])(Ce,Be,je,!1,null,"4283e020",null),Ye=Ne.exports,Qe={name:"Selector",components:{Archive_Banner:Ye,Welcome:Pe,Results:he,Question_Container:P},data:function(){return{year:this.getYear(),current_scene:"welcome",user_results:[],answers:[{val:-2,txt:"Strongly Disagree"},{val:-1,txt:"Somewhat Disagree"},{val:0,txt:"Neutral"},{val:1,txt:"Somewhat Agree"},{val:2,txt:"Strongly Agree"}]}},methods:{set_results_length:function(e){this.user_results=new Array(e)},get_date:function(e){for(var t in d)if(console.log(d[t]),d[t].year===e)return d[t].date;return null},set_scene:function(e){this.current_scene=e},update_results:function(e,t){s["default"].set(this.user_results,e,t)},getYear:function(){return(new Date).getFullYear()},getYearData:function(e){for(var t=0;t<d.length;t++)if(d[t].year===e)return d[t];return null},setYear:function(e){this.year=e,this.archive_override=!0},listOfAllYears:function(){for(var e=[],t=0;t<d.length;t++)e[t]=d[t].year;return e}}},Re=Qe,Te=Object(c["a"])(Re,b,h,!1,null,"3ed5b60c",null),De=Te.exports,Ee={name:"App",components:{Selector:De,Header:p},data:function(){return{year:this.getYear(),answers:[{val:-2,txt:"Strongly Disagree"},{val:-1,txt:"Somewhat Disagree"},{val:0,txt:"Neutral"},{val:1,txt:"Somewhat Agree"},{val:2,txt:"Strongly Agree"}]}},methods:{getYear:function(){return(new Date).getFullYear()},getYearData:function(e){for(var t=0;t<d.length;t++)if(d[t].year===e)return d[t];return null},setYear:function(e){this.year=e},listOfAllYears:function(){for(var e=[],t=0;t<d.length;t++)e[t]=d[t].year;return e}}},$e=Ee,He=(r("034f"),Object(c["a"])($e,a,n,!1,null,null,null)),Fe=He.exports,We=r("5f5b");r("f9e3"),r("2dd8");s["default"].use(We["a"]),s["default"].config.productionTip=!1,new s["default"]({render:function(e){return e(Fe)}}).$mount("#app")},"5fb6":function(e,t,r){"use strict";var s=r("20f4"),a=r.n(s);a.a},"85ec":function(e,t,r){},e9b1:function(e){e.exports=JSON.parse('[{"year":2020,"date":"2020-07-07","parties":[{"name":"The Party","website":"tp.com","answers":[{"q_id":0,"answer_level":0,"answer":"Bacon ipsum dolor amet swine drumstick shoulder kielbasa. Capicola pork chop prosciutto meatball. Porchetta pastrami shankle bacon pork belly. Ball tip alcatra sausage pancetta pork chop pork belly salami spare ribs landjaeger prosciutto turkey venison pig."},{"q_id":1,"answer_level":1,"answer":"Bacon ipsum dolor amet swine drumstick shoulder kielbasa. Capicola pork chop prosciutto meatball. Porchetta pastrami shankle bacon pork belly. Ball tip alcatra sausage pancetta pork chop pork belly salami spare ribs landjaeger prosciutto turkey venison pig."},{"q_id":2,"answer_level":-1,"answer":"Bacon ipsum dolor amet swine drumstick shoulder kielbasa. Capicola pork chop prosciutto meatball. Porchetta pastrami shankle bacon pork belly. Ball tip alcatra sausage pancetta pork chop pork belly salami spare ribs landjaeger prosciutto turkey venison pig."},{"q_id":3,"answer_level":0,"answer":"Bacon ipsum dolor amet swine drumstick shoulder kielbasa. Capicola pork chop prosciutto meatball. Porchetta pastrami shankle bacon pork belly. Ball tip alcatra sausage pancetta pork chop pork belly salami spare ribs landjaeger prosciutto turkey venison pig."}]},{"name":"The New Party","website":"TNP.com","answers":[{"q_id":0,"answer_level":1,"answer":"Here be an answer to the 0th question"},{"q_id":1,"answer_level":1,"answer":"Here be an answer to the 1st question"},{"q_id":2,"answer_level":-1,"answer":"Here be an answer to the 2nd question"},{"q_id":3,"answer_level":1,"answer":"Here be an answer to the 3rd question"}]}],"questions":[{"q_id":0,"question":"This is my first Question"},{"q_id":1,"question":"This is my second question"},{"q_id":2,"question":"This is my third question"},{"q_id":3,"question":"This is my last question"}]},{"year":2018,"date":"2018-02-02","parties":[{"name":"The Party of 2018","website":"tp.com","answers":[{"q_id":0,"answer_level":0,"answer":"2018"},{"q_id":1,"answer_level":1,"answer":"Bacon ipsum dolor amet swine drumstick shoulder kielbasa. Capicola pork chop prosciutto meatball. Porchetta pastrami shankle bacon pork belly. Ball tip alcatra sausage pancetta pork chop pork belly salami spare ribs landjaeger prosciutto turkey venison pig."},{"q_id":2,"answer_level":-1,"answer":"Bacon ipsum dolor amet swine drumstick shoulder kielbasa. Capicola pork chop prosciutto meatball. Porchetta pastrami shankle bacon pork belly. Ball tip alcatra sausage pancetta pork chop pork belly salami spare ribs landjaeger prosciutto turkey venison pig."}]}],"questions":[{"q_id":0,"question":"This is my first Question of 2018"},{"q_id":1,"question":"This is my second question of 2018"},{"q_id":2,"question":"This is my third question of 2018"}]}]')}});
//# sourceMappingURL=app.ba76af83.js.map