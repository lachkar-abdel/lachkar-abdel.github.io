(function(t){function e(e){for(var n,r,a=e[0],c=e[1],l=e[2],d=0,u=[];d<a.length;d++)r=a[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&u.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(u.length)u.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,a=1;a<i.length;a++){var c=i[a];0!==o[c]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},o={app:0},s=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var p=c;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"0d45":function(t,e,i){},"1b05":function(t,e,i){},3004:function(t,e,i){"use strict";i("b70e")},"303d":function(t,e,i){"use strict";i("0d45")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container",attrs:{id:"app"}},[i("HeaderRS"),i("BodyRS"),i("FooterRS")],1)},s=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"row",attrs:{id:"projet-vue-js"}},[i("div",{staticClass:"col-md-4",attrs:{id:"title"}},[i("img",{staticStyle:{"border-radius":"50%"},attrs:{src:"https://scontent.frba3-1.fna.fbcdn.net/v/t39.30808-6/p526x296/271611067_4981358541928034_3034190985300173038_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=lLeyzwBps_YAX_kIgp1&_nc_oc=AQm9r6NBCqbvE1qLAzLEGHrdeF6CjXzUu1-k7mxob_fCAKOm0TNSCFtTP9kRGNcmmR0&_nc_ht=scontent.frba3-1.fna&oh=00_AT9cN7-SsjpuW4aazc2zneASngiw79O3dMclz6YjmIgK3w&oe=61E0A36D",height:"238",width:"250"}}),i("h1",{staticClass:"text-monospace"},[t._v(t._s(t.name.first+" "+t.name.last))]),i("p",{staticClass:"text-muted",attrs:{id:"position"}},[i("span",[t._v(t._s(t.name.position))])])]),i("div",{staticClass:"col-md-8"},[i("div",{staticClass:"item-contact"},t._l(t.contact,(function(e,n){return i("div",{key:n,staticClass:"text-muted contact",class:e.type},[e.link?[i("a",{attrs:{href:e.link}},[t._v(t._s(e.value))])]:[t._v(" "+t._s(e.value)+" ")]],2)})),0)])]),i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-md-6 col-centered"},[i("div",{staticClass:"text-muted",attrs:{id:"about"}},[t._v(" "+t._s(t.name.about)+" ")])])])])},a=[],c={name:"HeaderRS",data:function(){return{logo:"./assets/avatar.jpg",name:{first:"Abdelghafor",middle:"",last:"Lachkar",about:"I am a full stack developer, I work projects concerning mobile app development and web development. For the moment, I am working as a freelancer. I am always ready to learn new technologies and start new projects. For any other information, feel free to contact me.",position:"FULL STACK DEVELOPER"},contact:[{type:"adress",value:"Sala al-Jadida, Rabat , Morocco"},{type:"mail",value:"Lachkar.dev@gmail.com"},{type:"github",value:"Github.com/lachkar-abdel",link:"http://github.com/lachkar-abdel"}]}}},l=c,p=(i("3004"),i("2877")),d=Object(p["a"])(l,r,a,!1,null,null,null),u=d.exports,m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6"},t._l(t.sections.filter((function(t){return!t.right})),(function(t,e){return i("SectionRS",{key:"section-left-"+e,attrs:{section:t}})})),1),i("div",{staticClass:"col-md-6"},t._l(t.sections.filter((function(t){return t.right})),(function(t,e){return i("SectionRS",{key:"section-right-"+e,attrs:{section:t}})})),1)])},f=[],v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("h2",{staticClass:"section-title"},[t._v(t._s(t.section.title))]),i("div",{staticClass:"section-head"}),i("div",{staticClass:"sections"},t._l(t.section.items,(function(e,n){return i("div",{key:n,staticClass:"section"},[i("h3",{staticClass:"subtitle"},[e.timeperiod?[t._v(t._s(e.timeperiod)+" - ")]:t._e(),t._v(" "+t._s(e.title)+" ")],2),e.descriptions?t._l(e.descriptions,(function(e,n){return i("div",{key:n,staticClass:"description"},[i("ul",[i("li",{staticClass:"text-muted",domProps:{innerHTML:t._s("- "+e)}})])])})):t._e()],2)})),0)])},g=[],h={name:"SectionRS",props:{section:Object}},b=h,S=(i("303d"),Object(p["a"])(b,v,g,!1,null,null,null)),_=S.exports,C={name:"BodyRS",components:{SectionRS:_},data:function(){return{sections:[{right:!1,title:"EXPERIENCE",items:[{timeperiod:"09/2021 → CURRENT",title:"DataFlex",descriptions:["Conception and Development of Mobile Application DawiDari.","Creation of a web API with <strong>ASP.NET Core</strong> MVC.","Development a Mobile App with <strong>Flutter</strong>."]},{timeperiod:"2016 → 2019",title:"Freelance Works",descriptions:["Creation of Mobile Applications with <strong>Java</strong>.","Creation of Web Applications with <strong>Angular</strong>."]},{timeperiod:2015,title:"Ministry Of Justice",descriptions:["Conception and Development of a Management Application.","Creation of <strong>ASP.NET</strong> Web Application Using MVC and Entity Framework.","Managment Project with Team Foundation Server (TFS)"]}]},{right:!0,title:"PROJECTS",items:[{timeperiod:"2021",title:"le17ocean.com",descriptions:["Creation of an Interactive Dashboards in <strong>Angular</strong>.",'Creation of the web interface with <strong>AMP</strong> technology, <u><a href="http://le17ocean.com/">17ocean</a></u>',"Creation of the web API with <strong>.net core</strong>.","Project conception and development using <strong>MEAN</strong> stack."]},{timeperiod:"2020",title:"Law Qcm",descriptions:['Creation of Mobile Applications with <strong>Java</strong>, <u><a href="https://play.google.com/store/apps/details?id=com.qcm.droit">Law Qcm</a></u>']},{timeperiod:"2020",title:"Multiple choice law questions",descriptions:['Creation of Mobile Applications with <strong>Java</strong>, <u><a href="https://play.google.com/store/apps/details?id=com.qcmdroit.arabe">Multiple choice</a></u>']},{timeperiod:"2019",title:"with the legal system QCM",descriptions:['Creation of Mobile Applications with <strong>Java</strong>, <u><a href="https://play.google.com/store/apps/details?id=com.qcmdroit.arabe">legal system</a></u>']}]},{right:!1,title:"STUDIES",items:[{timeperiod:2021,title:"Professional university license",descriptions:["Web and Mobile Applications Development at Ibn Tofail University."]},{timeperiod:2016,title:"Skills training",descriptions:["Web and Mobile Applications Development at SFIJ."]},{timeperiod:2014,title:"Specialized Technician Diploma",descriptions:["Specialized Technician Diploma in Software Development."]},{timeperiod:2012,title:"Scientific Baccalaureate",descriptions:["High-school Diploma in Biology"]}]},{right:!1,title:"CERTIFICATIONS",items:[{timeperiod:2018,title:"Udacity",descriptions:["Full Stack Developer"]},{timeperiod:2016,title:"Microsoft® Specialist",descriptions:["Microsoft® Specialist: Programming in HTML5 with JavaScript and CSS3."]}]},{right:!0,title:"SKILLS",items:[{title:"Teamwork and autonomy",descriptions:["Git, TFS"]},{title:"Technologies",descriptions:["C#, TypeScript, JavaScript"]},{title:"Web Technologies",descriptions:["Angular, VueJs, Node Js, AMP"]},{title:"Frameworks",descriptions:[" ASP.NET Core, Flutter"]},{title:"DataBase",descriptions:["SQL, NoSQL"]},{title:"DevOps and CI",descriptions:["Docker, Vagrant, Travis CI"]},{title:"Servers",descriptions:["Windows Server, AWS"]}]},{right:!0,title:"EXPERTISE",items:[{title:"Database Management"},{title:"Rest API Development"},{title:"Test Driven Development"}]}]}}},y=C,w=Object(p["a"])(y,m,f,!1,null,null,null),A=w.exports,T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-md-12"},[i("section",{staticClass:"interests"},[i("h2",{staticClass:"interests-title"},[t._v(t._s(t.interests.title))]),t._l(t.interests.items,(function(e,n){return[i("span",{key:n},[t._v(t._s(e.title)+" ")])]}))],2)])},k=[],M={name:"FooterRS",data:function(){return{interests:{title:"INTERESTS",template:"interests-section",items:[{title:"Traveling,"},{title:"football,"},{title:"Programming,"}]}}}},E=M,j=(i("68b3"),Object(p["a"])(E,T,k,!1,null,null,null)),P=j.exports,R={name:"app",components:{HeaderRS:u,BodyRS:A,FooterRS:P}},D=R,O=(i("034f"),Object(p["a"])(D,o,s,!1,null,null,null)),I=O.exports;i("1b05");n["a"].config.productionTip=!0,new n["a"]({render:function(t){return t(I)}}).$mount("#app")},"68b3":function(t,e,i){"use strict";i("98b5")},"85ec":function(t,e,i){},"98b5":function(t,e,i){},b70e:function(t,e,i){}});
//# sourceMappingURL=app.749a4a6d.js.map