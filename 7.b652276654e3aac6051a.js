"use strict";(self.webpackChunkwebpack_project=self.webpackChunkwebpack_project||[]).push([[7],{7:function(e,t,n){n.r(t),n.d(t,{Layout:function(){return o}});var r=n(294),a=n(387),c=n(283);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,c,u,l=[],i=!0,o=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(l.push(r.value),l.length!==t);i=!0);}catch(e){o=!0,a=e}finally{try{if(!i&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(o)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i=function(e){var t=e.clicked,n=e.updated,l=u((0,r.useState)("None"),2),i=l[0],o=l[1],s=c.T.useAllCurrenciesQuery().data,f=u(c.T.useLazyAllCurrenciesQuery(),2),d=f[0],v=f[1].data,m=(new Date).toLocaleTimeString();return(0,r.useEffect)((function(){s&&o(s.date)}),[s]),(0,r.useEffect)((function(){n&&v&&o(v.date)}),[v,n]),r.createElement("header",{className:"navbar"},r.createElement("div",{className:"navbar__content"},r.createElement("div",{className:"navbar__logo"},"Currencies"),r.createElement("div",{className:"navbar__update"},r.createElement("div",null,"Last Data Update: ",i,n&&r.createElement("div",null,"Last Request: ",m)),r.createElement(a.z,{variant:a.W.navbar,onClick:function(){t((function(e){return e+1})),d()}},"Update"))))},o=function(e){var t=e.children,n=e.clicked,a=e.updated;return r.createElement("div",{className:"layout"},r.createElement(i,{clicked:n,updated:a}),r.createElement("main",null,t))}},387:function(e,t,n){n.d(t,{z:function(){return c},W:function(){return r}});var r,a=n(294);!function(e){e.navbar="__navbar",e.list="__list"}(r||(r={}));var c=function(e){var t=e.onClick,n=e.variant,r=e.children;return a.createElement("button",{className:"button button".concat(n),onClick:t},r)}}}]);