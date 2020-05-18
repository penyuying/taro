(window.webpackJsonp=window.webpackJsonp||[]).push([[1383],{1519:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(1),a=n(9),i=(n(0),n(1621)),c={title:"Taro.connectWifi(OBJECT)",sidebar_label:"connectWifi"},o={id:"version-1.3.42/apis/device/wifi/connectWifi",title:"Taro.connectWifi(OBJECT)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c [`wx.connectWifi`](https://developers.weixin.qq.com/miniprogram/dev/api/wx.connectWifi.html)\uff0c\u652f\u6301 `Promise` \u5316\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-1.3.42/apis/device/wifi/connectWifi.md",permalink:"/taro/docs/1.3.42/apis/device/wifi/connectWifi",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.3.42/apis/device/wifi/connectWifi.md",version:"1.3.42",sidebar_label:"connectWifi",sidebar:"version-1.3.42/API",previous:{title:"Taro.getSystemInfoSync()",permalink:"/taro/docs/1.3.42/apis/device/systeminfo/getSystemInfoSync"},next:{title:"Taro.getConnectedWifi(OBJECT)",permalink:"/taro/docs/1.3.42/apis/device/wifi/getConnectedWifi"}},p=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],b={rightToc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.connectWifi.html"}),Object(i.b)("inlineCode",{parentName:"a"},"wx.connectWifi")),"\uff0c\u652f\u6301 ",Object(i.b)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),Object(i.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.connectWifi(params).then(...)\n")),Object(i.b)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Taro.connectWifi"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))))}l.isMDXComponent=!0},1621:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},s=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=l(n),d=r,m=s["".concat(c,".").concat(d)]||s[d]||f[d]||i;return n?a.a.createElement(m,o({ref:t},b,{components:n})):a.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var b=2;b<i;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);