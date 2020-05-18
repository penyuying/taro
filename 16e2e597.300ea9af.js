(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{1621:function(t,e,n){"use strict";n.d(e,"a",(function(){return O})),n.d(e,"b",(function(){return j}));var l=n(0),c=n.n(l);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,c=function(t,e){if(null==t)return{};var n,l,c={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(c[n]=t[n]);return c}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}var o=c.a.createContext({}),u=function(t){var e=c.a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):b({},e,{},t)),n},O=function(t){var e=u(t.components);return c.a.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return c.a.createElement(c.a.Fragment,{},e)}},p=Object(l.forwardRef)((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,a=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),O=u(n),p=l,j=O["".concat(a,".").concat(p)]||O[p]||d[p]||r;return n?c.a.createElement(j,b({ref:e},o,{components:n})):c.a.createElement(j,b({ref:e},o))}));function j(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,a=new Array(r);a[0]=p;var b={};for(var i in e)hasOwnProperty.call(e,i)&&(b[i]=e[i]);b.originalType=t,b.mdxType="string"==typeof t?t:l,a[1]=b;for(var o=2;o<r;o++)a[o]=n[o];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},275:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return a})),n.d(e,"metadata",(function(){return b})),n.d(e,"rightToc",(function(){return i})),n.d(e,"default",(function(){return u}));var l=n(1),c=n(9),r=(n(0),n(1621)),a={title:"Taro.startFacialRecognitionVerify(option)",sidebar_label:"startFacialRecognitionVerify"},b={id:"apis/open-api/facial/startFacialRecognitionVerify",title:"Taro.startFacialRecognitionVerify(option)",description:"\u5f00\u59cb\u4eba\u8138\u8bc6\u522b\u8ba4\u8bc1",source:"@site/docs/apis/open-api/facial/startFacialRecognitionVerify.md",permalink:"/taro/docs/next/apis/open-api/facial/startFacialRecognitionVerify",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/open-api/facial/startFacialRecognitionVerify.md",version:"next",sidebar_label:"startFacialRecognitionVerify",sidebar:"API",previous:{title:"Taro.checkIsSupportFacialRecognition(option)",permalink:"/taro/docs/next/apis/open-api/facial/checkIsSupportFacialRecognition"},next:{title:"Taro.startFacialRecognitionVerifyAndUploadVideo(option)",permalink:"/taro/docs/next/apis/open-api/facial/startFacialRecognitionVerifyAndUploadVideo"}},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"CallbackResult",id:"callbackresult",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],o={rightToc:i};function u(t){var e=t.components,n=Object(c.a)(t,["components"]);return Object(r.b)("wrapper",Object(l.a)({},o,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u5f00\u59cb\u4eba\u8138\u8bc6\u522b\u8ba4\u8bc1"),Object(r.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"(option?: Option) => Promise<CallbackResult>\n")),Object(r.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(r.b)("h3",{id:"option"},"Option"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"name"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(r.b)("td",null,"\u8eab\u4efd\u8bc1\u540d\u79f0")),Object(r.b)("tr",null,Object(r.b)("td",null,"idCardNumber"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(r.b)("td",null,"\u8eab\u4efd\u8bc1\u540d\u79f0")),Object(r.b)("tr",null,Object(r.b)("td",null,"checkAliveType"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u4ea4\u4e92\u65b9\u5f0f")),Object(r.b)("tr",null,Object(r.b)("td",null,"complete"),Object(r.b)("td",null,Object(r.b)("code",null,"(res: CallbackResult) => void")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(r.b)("tr",null,Object(r.b)("td",null,"fail"),Object(r.b)("td",null,Object(r.b)("code",null,"(res: CallbackResult) => void")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(r.b)("tr",null,Object(r.b)("td",null,"success"),Object(r.b)("td",null,Object(r.b)("code",null,"(result: CallbackResult) => void")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(r.b)("h3",{id:"callbackresult"},"CallbackResult"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"errMsg"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",null,"\u9519\u8bef\u4fe1\u606f")),Object(r.b)("tr",null,Object(r.b)("td",null,"errCode"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",null,"\u9519\u8bef\u7801")),Object(r.b)("tr",null,Object(r.b)("td",null,"verifyResult"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",null,"\u8ba4\u8bc1\u7ed3\u679c")))),Object(r.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"API"),Object(r.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"H5"),Object(r.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"Taro.startFacialRecognitionVerify"),Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}))))))}u.isMDXComponent=!0}}]);