(window.webpackJsonp=window.webpackJsonp||[]).push([[1411],{1547:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var o=r(1),n=r(9),a=(r(0),r(1621)),i={title:"Taro.getBluetoothDevices(OBJECT)",sidebar_label:"getBluetoothDevices"},c={id:"version-3.0.0-beta.5/apis/device/bluetooth/getBluetoothDevices",title:"Taro.getBluetoothDevices(OBJECT)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c [`wx.getBluetoothDevices`](https://developers.weixin.qq.com/miniprogram/dev/api/wx.getBluetoothDevices.html)\uff0c\u652f\u6301 `Promise` \u5316\u4f7f\u7528\u3002\r",source:"@site/versioned_docs/version-3.0.0-beta.5/apis/device/bluetooth/getBluetoothDevices.md",permalink:"/taro/docs/3.0.0-beta.5/apis/device/bluetooth/getBluetoothDevices",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.0.0-beta.5/apis/device/bluetooth/getBluetoothDevices.md",version:"3.0.0-beta.5",sidebar_label:"getBluetoothDevices",sidebar:"version-3.0.0-beta.5/API",previous:{title:"Taro.getBluetoothAdapterState(OBJECT)",permalink:"/taro/docs/3.0.0-beta.5/apis/device/bluetooth/getBluetoothAdapterState"},next:{title:"Taro.getConnectedBluetoothDevices(OBJECT)",permalink:"/taro/docs/3.0.0-beta.5/apis/device/bluetooth/getConnectedBluetoothDevices"}},l=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]}],u={rightToc:l};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.getBluetoothDevices.html"}),Object(a.b)("inlineCode",{parentName:"a"},"wx.getBluetoothDevices")),"\uff0c\u652f\u6301 ",Object(a.b)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),Object(a.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.getBluetoothDevices(params).then(...)\n")))}p.isMDXComponent=!0},1621:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return v}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=n.a.createContext({}),p=function(e){var t=n.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},s=function(e){var t=p(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(o.forwardRef)((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),d=o,v=s["".concat(i,".").concat(d)]||s[d]||b[d]||a;return r?n.a.createElement(v,c({ref:t},u,{components:r})):n.a.createElement(v,c({ref:t},u))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);