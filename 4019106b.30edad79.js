(window.webpackJsonp=window.webpackJsonp||[]).push([[372],{1621:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,d=u["".concat(o,".").concat(f)]||u[f]||O[f]||c;return n?r.a.createElement(d,i({ref:t},b,{components:n})):r.a.createElement(d,i({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var b=2;b<c;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},511:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(9),c=(n(0),n(1621)),o={title:"Taro.offLocationChange(callback)",sidebar_label:"offLocationChange"},i={id:"apis/location/offLocationChange",title:"Taro.offLocationChange(callback)",description:"\u53d6\u6d88\u76d1\u542c\u5b9e\u65f6\u5730\u7406\u4f4d\u7f6e\u53d8\u5316\u4e8b\u4ef6",source:"@site/docs/apis/location/offLocationChange.md",permalink:"/taro/docs/next/apis/location/offLocationChange",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/location/offLocationChange.md",version:"next",sidebar_label:"offLocationChange",sidebar:"API",previous:{title:"Taro.onLocationChange(callback)",permalink:"/taro/docs/next/apis/location/onLocationChange"},next:{title:"Taro.getLocation(option)",permalink:"/taro/docs/next/apis/location/getLocation"}},l=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],b={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u53d6\u6d88\u76d1\u542c\u5b9e\u65f6\u5730\u7406\u4f4d\u7f6e\u53d8\u5316\u4e8b\u4ef6"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.offLocationChange.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"(callback: (res: CallbackResult) => void) => void\n")),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"callback"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",null,"\u5b9e\u65f6\u5730\u7406\u4f4d\u7f6e\u53d8\u5316\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Taro.offLocationChange"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))))))}p.isMDXComponent=!0}}]);