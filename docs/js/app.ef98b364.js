(function(t){function e(e){for(var i,r,o=e[0],c=e[1],l=e[2],d=0,m=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&m.push(a[r][0]),a[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(m.length)m.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},a={app:0},s=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0339":function(t,e,n){var i={"./Angebots-Ansicht.png":"3eb9","./Fillialen-Ansicht.png":"4958","./Partner-Ansicht.png":"560c"};function a(t){var e=s(t);return n(e)}function s(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=s,t.exports=a,a.id="0339"},"04e1":function(t,e,n){"use strict";n("e02b")},"0e52":function(t,e,n){},1672:function(t,e,n){},"1a91":function(t,e,n){},2309:function(t,e,n){},2536:function(t,e,n){"use strict";n("1672")},"3eb9":function(t,e,n){t.exports=n.p+"img/Angebots-Ansicht.bf0ee341.png"},"490c":function(t,e,n){"use strict";n("2309")},4958:function(t,e,n){t.exports=n.p+"img/Fillialen-Ansicht.8cc299de.png"},"560c":function(t,e,n){t.exports=n.p+"img/Partner-Ansicht.39457d9b.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app-container"}},[n("main",{ref:"main",staticClass:"column align-center justify-center",attrs:{id:"main"}},[n("div",{attrs:{id:"router-view"}},[n("transition",{attrs:{name:"fade",mode:"out-in",duration:{enter:250,leave:250},appear:"appear"}},[n("router-view")],1)],1),n("a",{staticClass:"github",attrs:{href:"https://github.com/BennyAlex/Resuemee",target:"_blank"}},[t._v(" Sourcecode in Github anzeigen ")])]),n("div",{staticClass:"mdc-elevation--z20",attrs:{id:"navbar-top"}},[n("md-button",{attrs:{id:"app-title"},nativeOn:{click:function(e){return t.transitionTo(e,"/")}}},[t._v(" Benjamin Franz ")]),n("md-button",{nativeOn:{click:function(e){return t.transitionTo(e,"/kontakt")}}},[t._v(" Kontakt ")]),n("md-button",{nativeOn:{click:function(e){return t.transitionTo(e,"/projekte")}}},[t._v(" Projekte ")]),n("icon-button",{attrs:{id:"menu-icon-button"},nativeOn:{click:function(e){return t.toggleSidebar(e)}}},[n("div",{ref:"menuButton",staticClass:"menu-cross-s",attrs:{id:"menu-button"}},[n("div",{staticClass:"ani",attrs:{id:"ani"}})])])],1),n("div",{ref:"sidebar",staticClass:"mdc-elevation--z1",attrs:{id:"sidebar"}},[n("md-button",{nativeOn:{click:function(e){return t.transitionTo(e,"/kontakt")}}},[t._v(" Kontakt ")]),n("md-button",{nativeOn:{click:function(e){return t.transitionTo(e,"/projekte")}}},[t._v(" Projekte ")]),n("a",{staticClass:"github github-sidebar",attrs:{href:"https://github.com/BennyAlex/Resuemee",target:"_blank"}},[n("md-button",[t._v(" Sourcecode in Github anzeigen ")])],1)],1)])},s=[],r=n("2909"),o=n("b85c"),c=(n("99af"),n("ac1f"),n("5319"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{ref:"iconButton",staticClass:"mdc-icon-button material-icons no-select"},[t._t("default")],2)}),l=[],u=n("40ff"),d={name:"IconButton",data:function(){return{}},mounted:function(){var t=new u["a"](this.$refs.iconButton);t.unbounded=!0}},m=d,f=(n("acd5"),n("2877")),h=Object(f["a"])(m,c,l,!1,null,"1527dbba",null),p=h.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{ref:"button",staticClass:"mdc-button no-select",attrs:{href:t.href,target:"_blank"}},[n("div",{staticClass:"mdc-button__ripple"}),n("span",{staticClass:"mdc-button__label"},[t._t("default")],2)])},g=[],b={name:"MdButton",props:{href:{type:String,required:!1}},data:function(){return{}},mounted:function(){new u["a"](this.$refs.button)}},w=b,y=(n("c1f7"),Object(f["a"])(w,v,g,!1,null,"9af7958a",null)),_=y.exports,k={name:"App",components:{IconButton:p,MdButton:_},data:function(){return{sideBarOpen:!1}},methods:{toggleSidebar:function(){this.$refs.sidebar.classList.toggle("open"),this.$refs.main.classList.toggle("move-to-left"),this.$refs.menuButton.classList.toggle("animate"),this.sideBarOpen=!this.sideBarOpen},closeSidebar:function(t){this.sideBarOpen&&"menu-button"!==t.target.id&&"sidebar"!==t.target.id&&"ani"!==t.target.id&&this.toggleSidebar()},transitionTo:function(t,e){this.$router.currentRoute.path!==e&&this.$router.push(e)},setActiveButton:function(){var t=this.$router.currentRoute.path,e=document.querySelectorAll(".active-route");if(e){var n,i=Object(o["a"])(e);try{for(i.s();!(n=i.n()).done;){var a=n.value;a.classList.remove("active-route")}}catch(d){i.e(d)}finally{i.f()}}if("/"===t)document.querySelector("#app-title").classList.add("active-route");else{var s,c=[].concat(Object(r["a"])(document.querySelectorAll("#navbar-top .mdc-button")),Object(r["a"])(document.querySelectorAll("#sidebar .mdc-button"))),l=Object(o["a"])(c);try{for(l.s();!(s=l.n()).done;){var u=s.value;u.innerText.toLowerCase()===t.replace("/","")&&u.classList.add("active-route")}}catch(d){l.e(d)}finally{l.f()}}}},mounted:function(){window.addEventListener("click",this.closeSidebar),this.setActiveButton()},updated:function(){this.setActiveButton()}},C=k,x=(n("5c0b"),n("490c"),Object(f["a"])(C,a,s,!1,null,null,null)),j=x.exports,B=n("8c4f"),O=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("glass-card",{attrs:{title:"Willkommen!"}},[i("div",{staticClass:"row column-sm align-center height-100",attrs:{id:"container"}},[i("img",{staticClass:"height-100",attrs:{src:n("5fe9"),id:"image"}}),i("div",{staticClass:"column align-center justify-center center width-100-sm",attrs:{id:"me"}},[i("span",{attrs:{id:"name"}},[t._v(" Ich bin Benjamin Franz ")]),i("span",{staticClass:"subline center"},[t._v(" Fullstack Entwickler "),i("br"),t._v(" mit Leidenschaft für "),i("br"),t._v(" JavaScript Frameworks ")]),i("md-button",{staticClass:"mdc-button--raised mdc-elevation--z6",attrs:{href:"https://bennyalex.github.io/Lebenslauf/"}},[i("div",{staticClass:"row"},[i("span",{staticClass:"mdc-button-label"},[t._v("Lebenslauf")]),i("i",{staticClass:"material-icons mdc-button__icon"},[t._v(" assignment ")])])])],1)])])},P=[],E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"glass-card column mdc-elevation--z10"},[n("div",{staticClass:"row align-center no-select"},[t.showBackButton?n("div",{staticClass:"icon"},[n("icon-button",{nativeOn:{click:function(e){return t.goBack(e)}}},[t._v(" arrow_back ")])],1):t._e(),n("div",{class:t.showBackButton?"title":"title title-large"},[t._v(" "+t._s(t.title)+" ")])]),n("div",{staticClass:"card-content os-host-flexbox"},[n("overlay-scrollbars",{attrs:{options:{className:"os-theme-dark width-100 height-100 card-scrollbar",overflowBehavior:{x:"hidden"}}}},[t._t("default")],2)],1)])},L=[],I={name:"glass-card",components:{IconButton:p},props:{title:{type:String,required:!1},showBackButton:{type:Boolean,default:!1,required:!1}},data:function(){return{}},methods:{goBack:function(){this.$router.go(-1)}}},A=I,T=(n("2536"),Object(f["a"])(A,E,L,!1,null,"62f70846",null)),S=T.exports,z={name:"Home",components:{GlassCard:S,MdButton:_},data:function(){return{}}},$=z,M=(n("f2d5"),Object(f["a"])($,O,P,!1,null,"d459399c",null)),D=M.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("glass-card",{attrs:{title:"Kontakt",showBackButton:""}},[n("div",{ref:"container",staticClass:"row column-sm height-100 justify-space-between align-center"},[n("div",{staticClass:"width-50 width-100-sm",attrs:{id:"contact"}},[n("div",{staticClass:"row align-center"},[n("i",{staticClass:"material-icons"},[t._v(" my_location ")]),n("div",[n("span",{staticClass:"subline"},[t._v(" Adresse")]),t._v(" "),n("br"),t._v(" Wagnergäßchen 10 "),n("br"),t._v(" 97204 Höchberg ")])]),n("div",{staticClass:"row align-center"},[n("i",{staticClass:"material-icons"},[t._v(" email ")]),n("div",{staticClass:"break-word"},[n("span",{staticClass:"subline"},[t._v(" Email")]),t._v(" "),n("br"),n("a",{staticClass:"break-word",attrs:{id:"mail",href:"mailto:benjamin.alexander.franz@gmail.com"}},[t._v("benjamin.alexander.franz@gmail.com ")])])]),n("div",{staticClass:"row align-center"},[n("i",{staticClass:"material-icons"},[t._v(" phone ")]),n("div",[n("span",{staticClass:"subline"},[t._v(" Telefon")]),t._v(" "),n("br"),n("a",{attrs:{id:"phone",href:"tel:+4901714883330"}},[t._v("+49 0171 4883330")])])]),n("div",{staticClass:"row align-center"},[n("i",{staticClass:"material-icons"},[t._v(" cake ")]),n("div",[n("span",{staticClass:"subline"},[t._v(" Geburtstag")]),t._v(" "),n("br"),t._v(" am 06.02.1998 "),n("br"),t._v(" in Aschaffenburg ")])])]),n("div",{staticClass:"width-50 width-100-sm",style:{height:t.mapHeight},attrs:{id:"map"}})])])},V=[],N=n("e11e"),F=n.n(N),q=n("a5de"),H=n.n(q),J={name:"Kontakt",components:{GlassCard:S},data:function(){return{mapHeight:""}},mounted:function(){window.addEventListener("resize",this.resizeMap),this.resizeMap(),window.L=window.L||F.a,this.$nextTick((function(){var t=9.87759,e=49.78168,n=F.a.latLng(e,t),i=Object(N["map"])("map").setView(n,18);Object(N["tileLayer"])("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",{attribution:"",maxZoom:21,id:"mapbox/streets-v11",accessToken:"sk.eyJ1IjoiYmVubnlhbGV4IiwiYSI6ImNrNXdyZzhmejBvMGgza3J2cHNlcWtwM2wifQ.c4Iq6VYUmn3TY7G9wAOgdA"}).addTo(i),Object(N["marker"])(n,{icon:F.a.icon({iconUrl:H.a,iconSize:[42,42],popupAnchor:[0,-22]}),keyboard:!1,title:"Benjamin Franz",alt:"Benjamin Franz"}).addTo(i).bindPopup("Benjamin Franz",{closeButton:!1,autoClose:!1,closeOnClick:!1,closeOnEscapeKey:!1}).openPopup()}))},beforeDestroy:function(){window.removeEventListener("resize",this.resizeMap)},methods:{resizeMap:function(){this.mapHeight=window.getComputedStyle(this.$refs.container).height}}},K=J,R=(n("c26f"),Object(f["a"])(K,G,V,!1,null,"b9e3f074",null)),U=R.exports,Y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("glass-card",{attrs:{title:"Projekte",showBackButton:""}},[t._v(" 2 Projekte, die ich während meiner Ausbildung programmiert habe: "),i("div",{staticClass:"project row column-sm align-center-sm"},[i("div",{staticClass:"column width-100-sm",staticStyle:{width:"80%"}},[i("div",[i("b",[t._v("Material Design Inspired Color Picker")]),i("div",{staticClass:"subline"},[t._v(" Ein JavaScript Color-Picker, von Material Design inspiriert ")])]),i("div",{staticClass:"row grow align-center justify-center wrap buttons"},[i("md-button",{staticClass:"mdc-button--unelevated",attrs:{href:"https://bennyalex.github.io/material-design-inspired-color-picker/"}},[t._v(" Demo ")]),i("md-button",{staticClass:"mdc-button--outlined",attrs:{href:"https://github.com/BennyAlex/material-design-inspired-color-picker"}},[t._v(" In Github ansehen ")])],1)]),i("img",{attrs:{src:n("cc17"),id:"mdcp-img",alt:"Color Picker",title:"Color Picker"},on:{click:function(e){return t.showPickerImage()}}}),i("image-gallery",{ref:"pickerImage",attrs:{images:t.pickerImage}})],1),i("div",{staticClass:"project mfc"},[i("b",[t._v("Mainfrankencard-Datenbank")]),i("div",{staticClass:"subline"},[t._v(" Mein Abschlussprojekt. Internes Tool zum Verwalten von Mainfrankencard Partnern und Angeboten ")]),i("div",{staticClass:"preview-images row wrap align-center"},t._l(t.mfcImages,(function(e){return i("div",{key:e.id,staticClass:"width-100-sm"},[i("img",{attrs:{src:e.name,alt:e.alt,title:e.alt},on:{click:function(n){return t.showImageGallery(e.name)}}})])})),0),i("image-gallery",{ref:"imageGallery",attrs:{images:t.mfcImages}})],1)])},W=[],Z=(n("d81d"),n("d3b7"),n("ddb0"),n("159b"),n("466d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"imageGallery"},[n("transition",{attrs:{name:"image-gallery-fade"}},[t.visible?n("div",{staticClass:"image-gallery no-select",on:{mousedown:function(e){return e.stopPropagation(),t.hide(e)},touchdown:function(e){return e.stopPropagation(),t.hide(e)}}},[n("icon-button",{staticClass:"image-gallery-close",on:{mousedown:function(e){return e.stopPropagation(),t.hide(e)},touchdown:function(e){return e.stopPropagation(),t.hide(e)}}},[t._v(" close ")]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.has_prev()&&t.controlsVisible,expression:"has_prev() && controlsVisible"}],staticClass:"image-gallery-arrow image-gallery-arrow-left",on:{mousedown:function(e){return e.stopPropagation(),e.preventDefault(),t.prev(e)},touchdown:function(e){return e.stopPropagation(),e.preventDefault(),t.prev(e)}}},[n("transition",{attrs:{name:"image-gallery-fade"}},[n("icon-button",[t._v(" chevron_left ")])],1)],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.has_next()&&t.controlsVisible,expression:"has_next() && controlsVisible"}],staticClass:"image-gallery-arrow image-gallery-arrow-right",on:{mousedown:function(e){return e.stopPropagation(),e.preventDefault(),t.next(e)},touchdown:function(e){return e.stopPropagation(),e.preventDefault(),t.next(e)}}},[n("transition",{attrs:{name:"image-gallery-fade"}},[n("icon-button",[t._v(" chevron_right ")])],1)],1),n("transition",{attrs:{name:"image-gallery-fade"}},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.controlsVisible&&t.images[t.index].alt,expression:"controlsVisible && images[index].alt"}],staticClass:"image-gallery-caption mdc-elevation--z12",on:{mousedown:function(t){t.stopPropagation()},touchdown:function(t){t.stopPropagation()}}},[n("span",[t._v(t._s(t.images[t.index].alt))])])]),n("div",{staticClass:"image-gallery-main",on:{mousedown:function(e){return e.stopPropagation(),t.hide(e)},touchdown:function(e){return e.stopPropagation(),t.hide(e)}}},[n("div",{staticClass:"image-gallery-image-container",on:{mousedown:function(t){t.stopPropagation()},touchdown:function(t){t.stopPropagation()}}},[n("transition",{attrs:{name:t.slideTransitionName,mode:"out-in"}},[n("div",{key:t.index,staticClass:"image-gallery-image",style:t.imageStyle()})])],1)])],1):t._e()])],1)}),Q=[],X=(n("b0c0"),{name:"ImageGallery",components:{IconButton:p},props:{images:{type:Array,required:!0},directory:{type:String,default:""}},data:function(){return{timeoutDuration:3300,visible:!1,controlsVisible:!0,index:0,timer:null,slideTransitionName:"image-gallery-slide-next"}},mounted:function(){document.getElementById("app-container").appendChild(this.$refs.imageGallery),window.addEventListener("keydown",this.keyEventListener),window.addEventListener("mousemove",this.mouseEventListener),window.addEventListener("touchmove",this.mouseEventListener),window.addEventListener("mouseup",this.mouseEventListener)},destroyed:function(){window.removeEventListener("keydown",this.keyEventListener),window.removeEventListener("mousemove",this.mouseEventListener),window.removeEventListener("touchmove",this.mouseEventListener),window.removeEventListener("mouseup",this.mouseEventListener)},methods:{show:function(t){this.visible=!0,this.controlsVisible=!0;var e=this;if(t)for(var n=0;n<this.images.length;n++)if(this.images[n].name==t){this.index=n;break}clearTimeout(this.timer),this.timer=setTimeout((function(){e.controlsVisible=!1}),e.timeoutDuration),this.preloadNeighbourImages()},imageStyle:function(){return{"background-image":'url("'+this.directory+this.images[this.index].name+'")'}},hide:function(){this.visible=!1,this.index=0,clearTimeout(this.timer)},has_next:function(){return this.index+1<this.images.length},has_prev:function(){return this.index-1>=0},prev:function(){this.has_prev()&&(this.slideTransitionName="image-gallery-slide-prev",this.index-=1,this.preloadNeighbourImages())},next:function(){this.has_next()&&(this.slideTransitionName="image-gallery-slide-next",this.index+=1,this.preloadNeighbourImages())},keyEventListener:function(t){if(this.visible){var e=this;switch(this.controlsVisible=!0,clearTimeout(this.timer),this.timer=setTimeout((function(){e.controlsVisible=!1}),e.timeoutDuration),t.key){case"ArrowRight":this.next();break;case"ArrowLeft":this.prev();break;case"ArrowDown":case"ArrowUp":case" ":t.preventDefault();break;case"Escape":this.hide();break}}},mouseEventListener:function(){if(this.visible){var t=this;this.controlsVisible=!0,clearTimeout(this.timer),this.timer=setTimeout((function(){t.controlsVisible=!1}),t.timeoutDuration)}},preloadNeighbourImages:function(){var t=new Image;if(this.has_next())try{t.src=this.directory+this.images[this.index+1].name}catch(e){return}if(this.has_prev())try{t.src=this.directory+this.images[this.index-1].name}catch(e){return}}}}),tt=X,et=(n("faa2"),Object(f["a"])(tt,Z,Q,!1,null,"a9e4508e",null)),nt=et.exports,it=n("cc17");function at(t){return t.keys().map(t)}var st=at(n("0339")),rt=[];st.forEach((function(t,e){rt.push({alt:t.match(/\/img\/(.*?)\./i)[1],name:t,id:e})}));var ot={name:"Projekte",components:{GlassCard:S,ImageGallery:nt,MdButton:_},data:function(){return{mfcImages:rt,pickerImage:[{alt:"MD Color Picker",name:it,id:0}]}},methods:{showImageGallery:function(t){this.$refs.imageGallery.show(t)},showPickerImage:function(){this.$refs.pickerImage.show()}}},ct=ot,lt=(n("04e1"),Object(f["a"])(ct,Y,W,!1,null,"52a8b8b2",null)),ut=lt.exports;i["a"].use(B["a"]);var dt=[{path:"/",component:D},{path:"/kontakt",component:U},{path:"/projekte",component:ut},{path:"*",redirect:"/"}],mt=new B["a"]({mode:"history",base:"/",routes:dt}),ft=mt,ht=n("10a7");i["a"].use(ht["a"]),i["a"].config.silent=!0,i["a"].config.devtools=!1,i["a"].config.productionTip=!1,new i["a"]({router:ft,render:function(t){return t(j)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"5fe9":function(t,e,n){t.exports=n.p+"img/selfie2.a2b5079b.jpg"},"9c0c":function(t,e,n){},a5de:function(t,e,n){t.exports=n.p+"img/marker.27279ba9.svg"},ac09:function(t,e,n){},acd5:function(t,e,n){"use strict";n("f29f")},c1f7:function(t,e,n){"use strict";n("e21f")},c26f:function(t,e,n){"use strict";n("0e52")},cc17:function(t,e,n){t.exports=n.p+"img/MD Color Picker.aa0504d4.png"},e02b:function(t,e,n){},e21f:function(t,e,n){},f29f:function(t,e,n){},f2d5:function(t,e,n){"use strict";n("ac09")},faa2:function(t,e,n){"use strict";n("1a91")}});
//# sourceMappingURL=app.ef98b364.js.map