(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1621:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),c=n.n(r);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},b=Object.keys(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=c.a.createContext({}),O=function(e){var t=c.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a({},t,{},e)),n},p=function(e){var t=O(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,b=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=O(n),s=r,d=p["".concat(l,".").concat(s)]||p[s]||u[s]||b;return n?c.a.createElement(d,a({ref:t},i,{components:n})):c.a.createElement(d,a({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=n.length,l=new Array(b);l[0]=s;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var i=2;i<b;i++)l[i]=n[i];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},194:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return O}));var r=n(1),c=n(9),b=(n(0),n(1621)),l={title:"Taro.setKeepScreenOn(option)",sidebar_label:"setKeepScreenOn"},a={id:"version-2.2.1/apis/device/screen/setKeepScreenOn",title:"Taro.setKeepScreenOn(option)",description:"\u8bbe\u7f6e\u662f\u5426\u4fdd\u6301\u5e38\u4eae\u72b6\u6001\u3002\u4ec5\u5728\u5f53\u524d\u5c0f\u7a0b\u5e8f\u751f\u6548\uff0c\u79bb\u5f00\u5c0f\u7a0b\u5e8f\u540e\u8bbe\u7f6e\u5931\u6548\u3002",source:"@site/versioned_docs/version-2.2.1/apis/device/screen/setKeepScreenOn.md",permalink:"/taro/docs/apis/device/screen/setKeepScreenOn",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.2.1/apis/device/screen/setKeepScreenOn.md",version:"2.2.1",sidebar_label:"setKeepScreenOn",sidebar:"version-2.2.1/API",previous:{title:"Taro.setScreenBrightness(option)",permalink:"/taro/docs/apis/device/screen/setScreenBrightness"},next:{title:"Taro.onUserCaptureScreen(callback)",permalink:"/taro/docs/apis/device/screen/onUserCaptureScreen"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Promised",id:"promised",children:[]},{value:"Option",id:"option",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:o};function O(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\u8bbe\u7f6e\u662f\u5426\u4fdd\u6301\u5e38\u4eae\u72b6\u6001\u3002\u4ec5\u5728\u5f53\u524d\u5c0f\u7a0b\u5e8f\u751f\u6548\uff0c\u79bb\u5f00\u5c0f\u7a0b\u5e8f\u540e\u8bbe\u7f6e\u5931\u6548\u3002"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.setKeepScreenOn.html"}),"\u53c2\u8003\u6587\u6863"))),Object(b.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<Promised>\n")),Object(b.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(b.b)("h3",{id:"promised"},"Promised"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"errMsg"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",null,"\u8c03\u7528\u7ed3\u679c")))),Object(b.b)("h3",{id:"option"},"Option"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"keepScreenOn"),Object(b.b)("td",null,Object(b.b)("code",null,"boolean")),Object(b.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(b.b)("td",null,"\u662f\u5426\u4fdd\u6301\u5c4f\u5e55\u5e38\u4eae")),Object(b.b)("tr",null,Object(b.b)("td",null,"complete"),Object(b.b)("td",null,Object(b.b)("code",null,"(res: CallbackResult) => void")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(b.b)("tr",null,Object(b.b)("td",null,"fail"),Object(b.b)("td",null,Object(b.b)("code",null,"(res: CallbackResult) => void")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(b.b)("tr",null,Object(b.b)("td",null,"success"),Object(b.b)("td",null,Object(b.b)("code",null,"(res: CallbackResult) => void")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(b.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"// \u4fdd\u6301\u5c4f\u5e55\u5e38\u4eae\nTaro.setKeepScreenOn({\n    keepScreenOn: true\n})\n")),Object(b.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Taro.setKeepScreenOn"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))))}O.isMDXComponent=!0}}]);