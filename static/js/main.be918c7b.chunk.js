(this.webpackJsonpmy_app=this.webpackJsonpmy_app||[]).push([[0],{126:function(e,t,a){},128:function(e,t,a){},430:function(e,t,a){"use strict";a.r(t);var o=a(9),n=a.n(o),r=a(120),c=a.n(r),s=(a(126),a(39)),l=a(50),i=a(1);function d(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("button",{type:"button",className:"btn btn-primary my-2 mx-5 ",onClick:e.ChangeMode,children:e.ModeInfo.ButtonText||"DarkMode"})})}function b(e){return Object(i.jsx)("div",{className:"accordion mx-5 my-5 ",id:"accordionExample",style:{BackgroundColor:e.ModeInfo.OtherColors},children:Object(i.jsxs)("div",{className:"accordion-item ",style:{BackgroundColor:e.ModeInfo.OtherColors},children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(i.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",style:{BackgroundColor:e.ModeInfo.OtherColors},children:"About developer"})}),Object(i.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",style:{BackgroundColor:e.ModeInfo.OtherColors},children:Object(i.jsx)("div",{className:"accordion-body",style:{BackgroundColor:e.ModeInfo.OtherColors},children:Object(i.jsx)("strong",{children:"Our info"})})})]})})}function j(e){return e.alert&&Object(i.jsx)("div",{children:Object(i.jsx)("div",{className:"alert alert-warning alert-dismissible fade show",role:"alert",children:Object(i.jsx)("strong",{children:e.alert.msg})})})}a(128),a(129);function h(){return Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("a",{className:"navbar-brand",href:"/",children:"Navbar"}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(i.jsxs)("ul",{className:"navbar-nav",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"About us"})})]})})]})})}function u(e){var t=Object(o.useState)(""),a=Object(s.a)(t,2),n=a[0],r=a[1],c={color:e.ModeInfo.Text_color,backgroundColor:e.ModeInfo.OtherColors},l=n.split(" ").length;return Object(i.jsxs)("div",{className:"mx-5",children:[Object(i.jsx)("form",{children:Object(i.jsxs)("div",{className:"form-group my-3",style:{backgroundColor:"cyan",color:"Green"},children:[Object(i.jsx)("label",{htmlFor:"exampleFormControlTextarea1",children:Object(i.jsx)("h4",{children:Object(i.jsx)("b",{children:"Type or Paste your text below"})})}),Object(i.jsx)("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"15",value:n,onChange:function(e){r(e.target.value)},style:c})]})}),Object(i.jsx)("button",{type:"button",className:"btn btn-primary my-3 mx-2",onClick:function(){var t=n;t=t.toUpperCase(),r(t),e.showAlert("Changed to UPPER-CASE","success")},children:"Change to UPPER-CASE"}),Object(i.jsx)("button",{type:"button",className:"btn btn-primary my-3 mx-2",onClick:function(){var t=n;t=t.toLowerCase(),r(t),e.showAlert("Changed to lower-case","success")},children:"Change to lower-case"}),Object(i.jsx)("button",{type:"button",className:"btn btn-primary my-3 mx-2",onClick:function(){r(""),e.showAlert("Text was erased","success")},children:"Erase"}),Object(i.jsx)("button",{type:"button",className:"btn btn-primary my-3 mx-2",onClick:function(){for(var t=n.split(" "),a="",o=0;o<t.length;o++)""!==t[o]&&(a+=t[o]+" ");r(a),e.showAlert("Removed extra-space","success")},children:"Remove extra spaces"}),Object(i.jsxs)("div",{className:"container mx-2",children:[Object(i.jsx)("h3",{children:Object(i.jsxs)("b",{children:["number of words = ",l," "]})}),Object(i.jsx)("h3",{children:Object(i.jsxs)("b",{children:["reading time = ",.3*l," seconds"]})})]})]})}var x=function(){var e=Object(l.useState)(null),t=Object(s.a)(e,2),a=t[0],o=t[1],n=Object(l.useState)({Text_color:"Black",bg_color:"White",ButtonText:"DarkMode",OtherColors:"Cyan"}),r=Object(s.a)(n,2),c=r[0],x=r[1];return Object(i.jsxs)("div",{style:{backgroundColor:c.bg_color,color:c.Text_color},className:"fill-window",children:[Object(i.jsx)(h,{}),Object(i.jsx)(j,{alert:a}),Object(i.jsx)(u,{ModeInfo:c,showAlert:function(e,t){o({msg:e,type:t}),setTimeout((function(){o(null)}),1e3)}}),Object(i.jsx)(d,{ModeInfo:c,ChangeMode:function(){"DarkMode"===c.ButtonText?x({Text_color:"White",bg_color:"Black",ButtonText:"LightMode",OtherColors:"DarkSlateBlue"}):x({Text_color:"Black",bg_color:"White",ButtonText:"DarkMode",OtherColors:"Cyan"})}}),Object(i.jsx)(b,{ModeInfo:c})]})},m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,431)).then((function(t){var a=t.getCLS,o=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),o(e),n(e),r(e),c(e)}))};c.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root")),m()}},[[430,1,2]]]);
//# sourceMappingURL=main.be918c7b.chunk.js.map