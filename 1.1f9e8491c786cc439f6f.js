(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{L6id:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),i=function(){},u=t("pMnS"),o=t("Ip0R"),r=t("mrSG"),a=t("MGBS"),s=t("zotm"),c=function(){function n(n){this.durationSelector=n}return n.prototype.call=function(n,l){return l.subscribe(new d(n,this.durationSelector))},n}(),d=function(n){function l(l,t){var e=n.call(this,l)||this;return e.durationSelector=t,e.hasValue=!1,e.durationSubscription=null,e}return r.b(l,n),l.prototype._next=function(n){try{var l=this.durationSelector.call(this,n);l&&this._tryNext(n,l)}catch(n){this.destination.error(n)}},l.prototype._complete=function(){this.emitValue(),this.destination.complete()},l.prototype._tryNext=function(n,l){var t=this.durationSubscription;this.value=n,this.hasValue=!0,t&&(t.unsubscribe(),this.remove(t)),(t=Object(s.a)(this,l))&&!t.closed&&this.add(this.durationSubscription=t)},l.prototype.notifyNext=function(n,l,t,e,i){this.emitValue()},l.prototype.notifyComplete=function(){this.emitValue()},l.prototype.emitValue=function(){if(this.hasValue){var l=this.value,t=this.durationSubscription;t&&(this.durationSubscription=null,t.unsubscribe(),this.remove(t)),this.value=null,this.hasValue=!1,n.prototype._next.call(this,l)}},l}(a.a),h=t("bne5"),p=t("6blF"),g=function(n){function l(l,t){var e=n.call(this,l,t)||this;return e.scheduler=l,e.work=t,e.pending=!1,e}return r.b(l,n),l.prototype.schedule=function(n,l){if(void 0===l&&(l=0),this.closed)return this;this.state=n;var t=this.id,e=this.scheduler;return null!=t&&(this.id=this.recycleAsyncId(e,t,l)),this.pending=!0,this.delay=l,this.id=this.id||this.requestAsyncId(e,this.id,l),this},l.prototype.requestAsyncId=function(n,l,t){return void 0===t&&(t=0),setInterval(n.flush.bind(n,this),t)},l.prototype.recycleAsyncId=function(n,l,t){if(void 0===t&&(t=0),null!==t&&this.delay===t&&!1===this.pending)return l;clearInterval(l)},l.prototype.execute=function(n,l){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var t=this._execute(n,l);if(t)return t;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},l.prototype._execute=function(n,l){var t=!1,e=void 0;try{this.work(n)}catch(n){t=!0,e=!!n&&n||new Error(n)}if(t)return this.unsubscribe(),e},l.prototype._unsubscribe=function(){var n=this.id,l=this.scheduler,t=l.actions,e=t.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==e&&t.splice(e,1),null!=n&&(this.id=this.recycleAsyncId(l,n,null)),this.delay=null},l}(function(n){function l(l,t){return n.call(this)||this}return r.b(l,n),l.prototype.schedule=function(n,l){return void 0===l&&(l=0),this},l}(t("pugT").a)),f=function(){function n(l,t){void 0===t&&(t=n.now),this.SchedulerAction=l,this.now=t}return n.prototype.schedule=function(n,l,t){return void 0===l&&(l=0),new this.SchedulerAction(this,n).schedule(t,l)},n.now=Date.now?Date.now:function(){return+new Date},n}(),m=new(function(n){function l(t,e){void 0===e&&(e=f.now);var i=n.call(this,t,function(){return l.delegate&&l.delegate!==i?l.delegate.now():e()})||this;return i.actions=[],i.active=!1,i.scheduled=void 0,i}return r.b(l,n),l.prototype.schedule=function(t,e,i){return void 0===e&&(e=0),l.delegate&&l.delegate!==this?l.delegate.schedule(t,e,i):n.prototype.schedule.call(this,t,e,i)},l.prototype.flush=function(n){var l=this.actions;if(this.active)l.push(n);else{var t;this.active=!0;do{if(t=n.execute(n.state,n.delay))break}while(n=l.shift());if(this.active=!1,t){for(;n=l.shift();)n.unsubscribe();throw t}}},l}(f))(g),b=t("isby");function w(n){var l=n.subscriber,t=n.counter,e=n.period;l.next(t),this.schedule({subscriber:l,counter:t+1,period:e},e)}var v=function(){function n(){this.appleInstalled=navigator.standalone,this.installed=!1,this.screenResize=Object(h.a)(window,"resize"),this.mobile=this.isMobile(),this.codeBuildUrl="https://codebuild.us-east-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiaDJBalRXU0ZsMktSN2dRN0tCVkxMUGU1dVhLTFQrdHlZM1A3N3ZoRHBTTUpLYWQ0Tmc0UHdHeFJzWHl6ZXZyS0xzb0FVU0xIdFV6ZUsvWWNlTU1NN2tZPSIsIml2UGFyYW1ldGVyU3BlYyI6Imt5SjVtSWJQL1MyVFBQVjMiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master"}return n.prototype.ngOnInit=function(){var n,l=this;window.matchMedia("(display-mode: standalone)").matches&&(this.installed=!0,console.log("This is running as standalone.")),this.screenResize.pipe((n=function(){return void 0===(n=200)&&(n=0),void 0===l&&(l=m),t=n,(Object(b.a)(t)||!(t-parseFloat(t)+1>=0)||n<0)&&(n=0),l&&"function"==typeof l.schedule||(l=m),new p.a(function(t){return t.add(l.schedule(w,n,{subscriber:t,counter:0,period:n})),t});var n,l,t},function(l){return l.lift(new c(n))})).subscribe(function(n){l.mobile=l.isMobile()})},n.prototype.isMobile=function(){return window.innerWidth<600},n}(),y=e.Ia({encapsulation:0,styles:[['.parallax[_ngcontent-%COMP%]{display:flex;min-height:100vh;flex-direction:column;background:url(home-splash.f3ec8cb2506307b74886.png) top/cover no-repeat fixed;position:relative;min-height:100%;z-index:0}.spash[_ngcontent-%COMP%]{height:35vh;width:100%;z-index:-1;-webkit-transform:translate(0,0);transform:translate(0,0)}.spash[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;width:80%;margin:30% auto;background-color:#1277caaf;padding:5px;border-radius:3px}@media screen and (min-width:600px){.spash[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{position:absolute;top:150px;left:20px;margin:auto;width:auto}}section[_ngcontent-%COMP%]:not(.spash){padding:50px 10px;background:#fff;color:#fff;margin:50px 0}section[_ngcontent-%COMP%]:not(:first-child){position:relative;background:#1278ca}section[_ngcontent-%COMP%]:not(:first-child):after, section[_ngcontent-%COMP%]:not(:first-child):before{background:inherit;content:\'\';display:block;height:50%;left:0;position:absolute;right:0;-webkit-transform-origin:100%;transform-origin:100%;z-index:-1;box-shadow:0 0 5px #727272}section[_ngcontent-%COMP%]:not(:first-child):before{top:0;-webkit-transform:skewY(1.5deg);transform:skewY(1.5deg)}section[_ngcontent-%COMP%]:not(:first-child):after{bottom:0;-webkit-transform:skewY(-1.5deg);transform:skewY(-1.5deg)}.detail-row[_ngcontent-%COMP%]{display:-ms-grid;display:grid;-ms-grid-columns:(1fr)[1];grid-template-columns:repeat(1,1fr)}.detail-row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80px;padding-right:10px;border-right:1px solid #fff;height:100px;margin:8px;-o-object-fit:contain;object-fit:contain;-ms-grid-row:1;-ms-grid-row-span:2;-ms-grid-column:1;grid-area:icon}.detail-row[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:-ms-grid;display:grid;grid-template-areas:"icon title" "icon details";-ms-grid-columns:108px 1fr;grid-template-columns:108px 1fr}.detail-row[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{-ms-grid-row:1;-ms-grid-column:2;grid-area:title}.detail-row[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{-ms-grid-row:2;-ms-grid-column:2;grid-area:details}footer[_ngcontent-%COMP%]{color:#000;padding:10px;background:#fff}footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}@media screen and (min-width:600px){.detail-row[_ngcontent-%COMP%]{-ms-grid-columns:(1fr)[3];grid-template-columns:repeat(3,1fr);justify-items:center}.detail-row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:80px;padding-bottom:10px;padding-right:0;border-right:none;border-bottom:1px solid #fff}.detail-row[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{justify-items:center;grid-template-areas:"icon" "title" "details";-ms-grid-columns:1fr;grid-template-columns:1fr}.detail-row[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0}.detail-row[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center}[_nghost-%COMP%]:before{display:block;position:relative;background-image:linear-gradient(to top,transparent 0,#000 120%);margin-bottom:-80px;height:80px;width:100%;content:\'\'}.spash[_ngcontent-%COMP%]{height:80vh}}']],data:{}});function M(n){return e.Ya(0,[(n()(),e.Ka(0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Xa(-1,null,["Thank you for installing my sample app!"]))],null,null)}function x(n){return e.Ya(0,[(n()(),e.Ka(0,0,null,null,38,"div",[["class","parallax"]],null,null,null,null,null)),(n()(),e.Ka(1,0,null,null,4,"section",[["class","spash"]],null,null,null,null,null)),(n()(),e.Ka(2,0,null,null,3,"p",[],null,null,null,null,null)),(n()(),e.Xa(-1,null,[" Welcome to my Angular playground. "])),(n()(),e.Ba(16777216,null,null,1,null,M)),e.Ja(5,16384,null,0,o.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.Ka(6,0,null,null,1,"section",[],[[4,"text-align",null]],null,null,null,null)),(n()(),e.Xa(-1,null,[" I use this place to test out web technologies with a focus on Angular 2+\n"])),(n()(),e.Ka(8,0,null,null,18,"section",[["class","detail-row"]],null,null,null,null,null)),(n()(),e.Ka(9,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),e.Ka(10,0,null,null,0,"img",[["alt","Angular"],["src","assets/angular.png"]],null,null,null,null,null)),(n()(),e.Ka(11,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),e.Xa(-1,null,["Angular"])),(n()(),e.Ka(13,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Xa(-1,null,[" Built using the Angular Framework. "])),(n()(),e.Ka(15,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),e.Ka(16,0,null,null,0,"img",[["alt","VSCode"],["src","assets/vscode.png"]],null,null,null,null,null)),(n()(),e.Ka(17,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),e.Xa(-1,null,["VS Code"])),(n()(),e.Ka(19,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Xa(-1,null,[" Developed with VS Code. "])),(n()(),e.Ka(21,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),e.Ka(22,0,null,null,0,"img",[["alt","github"],["src","assets/GitHub-Mark-Light-64px.png"]],null,null,null,null,null)),(n()(),e.Ka(23,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),e.Xa(-1,null,["GitHub Pages"])),(n()(),e.Ka(25,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Xa(-1,null,[" Hosted on GitHub using GitHub Pages. "])),(n()(),e.Ka(27,0,null,null,0,"div",[["style","flex: 1"]],null,null,null,null,null)),(n()(),e.Ka(28,0,null,null,10,"footer",[],null,null,null,null,null)),(n()(),e.Ka(29,0,null,null,3,"p",[],null,null,null,null,null)),(n()(),e.Xa(-1,null,[" Check out our "])),(n()(),e.Ka(31,0,null,null,1,"a",[["href","https://googlechrome.github.io/lighthouse/viewer/?gist=b27394dfa0e94c1b5e20e41a28c2b08f"],["rel","noopener"],["target","_blank"]],null,null,null,null,null)),(n()(),e.Xa(-1,null,[" \ud83d\udca1Lighthouse score \ud83c\udfe0 "])),(n()(),e.Ka(33,0,null,null,3,"p",[],null,null,null,null,null)),(n()(),e.Xa(-1,null,[" Special thanks to "])),(n()(),e.Ka(35,0,null,null,1,"a",[["href","https://cataas.com/#/"],["rel","noopener"],["target","_blank"]],null,null,null,null,null)),(n()(),e.Xa(-1,null,[" Cataas \ud83d\ude3b "])),(n()(),e.Ka(37,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Ka(38,0,null,null,0,"img",[["alt","Code Build Status"]],[[8,"src",4]],null,null,null,null))],function(n,l){n(l,5,0,l.component.installed)},function(n,l){var t=l.component;n(l,6,0,"center"),n(l,38,0,t.codeBuildUrl)})}var C=e.Ga("pg-home",v,function(n){return e.Ya(0,[(n()(),e.Ka(0,0,null,null,1,"pg-home",[],null,null,null,x,y)),e.Ja(1,114688,null,0,v,[],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),_=t("ZYCi"),O=function(){};t.d(l,"HomeModuleNgFactory",function(){return P});var P=e.Ha(i,[],function(n){return e.Pa([e.Qa(512,e.j,e.W,[[8,[u.a,C]],[3,e.j],e.v]),e.Qa(4608,o.l,o.k,[e.s,[2,o.r]]),e.Qa(1073742336,o.b,o.b,[]),e.Qa(1073742336,_.o,_.o,[[2,_.u],[2,_.k]]),e.Qa(1073742336,O,O,[]),e.Qa(1073742336,i,i,[]),e.Qa(1024,_.i,function(){return[[{path:"",component:v}]]},[])])})}}]);