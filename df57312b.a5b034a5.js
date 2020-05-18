(window.webpackJsonp=window.webpackJsonp||[]).push([[1302],{1438:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return i}));var a=n(1),c=n(9),l=(n(0),n(1621)),r={title:"Taro.onCompassChange(callback)",sidebar_label:"onCompassChange"},b={id:"apis/device/compass/onCompassChange",title:"Taro.onCompassChange(callback)",description:"\u76d1\u542c\u7f57\u76d8\u6570\u636e\u53d8\u5316\u4e8b\u4ef6\u3002\u9891\u7387\uff1a5 \u6b21/\u79d2\uff0c\u63a5\u53e3\u8c03\u7528\u540e\u4f1a\u81ea\u52a8\u5f00\u59cb\u76d1\u542c\uff0c\u53ef\u4f7f\u7528 Taro.stopCompass \u505c\u6b62\u76d1\u542c\u3002",source:"@site/docs/apis/device/compass/onCompassChange.md",permalink:"/taro/docs/next/apis/device/compass/onCompassChange",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/device/compass/onCompassChange.md",version:"next",sidebar_label:"onCompassChange",sidebar:"API",previous:{title:"Taro.startCompass(option)",permalink:"/taro/docs/next/apis/device/compass/startCompass"},next:{title:"Taro.offCompassChange(callback)",permalink:"/taro/docs/next/apis/device/compass/offCompassChange"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Callback",id:"callback",children:[]},{value:"OnCompassChangeCallbackResult",id:"oncompasschangecallbackresult",children:[]},{value:"accuracy",id:"accuracy",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],u={rightToc:o};function i(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u76d1\u542c\u7f57\u76d8\u6570\u636e\u53d8\u5316\u4e8b\u4ef6\u3002\u9891\u7387\uff1a5 \u6b21/\u79d2\uff0c\u63a5\u53e3\u8c03\u7528\u540e\u4f1a\u81ea\u52a8\u5f00\u59cb\u76d1\u542c\uff0c\u53ef\u4f7f\u7528 Taro.stopCompass \u505c\u6b62\u76d1\u542c\u3002"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/compass/wx.onCompassChange.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"(callback: Callback) => void\n")),Object(l.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(l.b)("h3",{id:"callback"},"Callback"),Object(l.b)("p",null,"\u7f57\u76d8\u6570\u636e\u53d8\u5316\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"(result: OnCompassChangeCallbackResult) => void\n")),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"result"),Object(l.b)("td",null,Object(l.b)("code",null,"OnCompassChangeCallbackResult"))))),Object(l.b)("h3",{id:"oncompasschangecallbackresult"},"OnCompassChangeCallbackResult"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"accuracy"),Object(l.b)("td",null,Object(l.b)("code",null,"string | number")),Object(l.b)("td",null,"\u7cbe\u5ea6",Object(l.b)("br",null),Object(l.b)("br",null),"\u7531\u4e8e\u5e73\u53f0\u5dee\u5f02\uff0caccuracy \u5728 iOS/Android \u7684\u503c\u4e0d\u540c\u3002",Object(l.b)("br",null),Object(l.b)("br",null),"- iOS\uff1aaccuracy \u662f\u4e00\u4e2a number \u7c7b\u578b\u7684\u503c\uff0c\u8868\u793a\u76f8\u5bf9\u4e8e\u78c1\u5317\u6781\u7684\u504f\u5dee\u30020 \u8868\u793a\u8bbe\u5907\u6307\u5411\u78c1\u5317\uff0c90 \u8868\u793a\u6307\u5411\u4e1c\uff0c180 \u8868\u793a\u6307\u5411\u5357\uff0c\u4f9d\u6b64\u7c7b\u63a8\u3002",Object(l.b)("br",null),"- Android\uff1aaccuracy \u662f\u4e00\u4e2a string \u7c7b\u578b\u7684\u679a\u4e3e\u503c\u3002")),Object(l.b)("tr",null,Object(l.b)("td",null,"direction"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",null,"\u9762\u5bf9\u7684\u65b9\u5411\u5ea6\u6570")))),Object(l.b)("h3",{id:"accuracy"},"accuracy"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"high"),Object(l.b)("td",null,"\u9ad8\u7cbe\u5ea6")),Object(l.b)("tr",null,Object(l.b)("td",null,"medium"),Object(l.b)("td",null,"\u4e2d\u7b49\u7cbe\u5ea6")),Object(l.b)("tr",null,Object(l.b)("td",null,"low"),Object(l.b)("td",null,"\u4f4e\u7cbe\u5ea6")),Object(l.b)("tr",null,Object(l.b)("td",null,"no-contact"),Object(l.b)("td",null,"\u4e0d\u53ef\u4fe1\uff0c\u4f20\u611f\u5668\u5931\u53bb\u8fde\u63a5")),Object(l.b)("tr",null,Object(l.b)("td",null,"unreliable"),Object(l.b)("td",null,"\u4e0d\u53ef\u4fe1\uff0c\u539f\u56e0\u672a\u77e5")),Object(l.b)("tr",null,Object(l.b)("td",null,"unknow ","{value}"),Object(l.b)("td",null,"\u672a\u77e5\u7684\u7cbe\u5ea6\u679a\u4e3e\u503c\uff0c\u5373\u8be5 Android \u7cfb\u7edf\u6b64\u65f6\u8fd4\u56de\u7684\u8868\u793a\u7cbe\u5ea6\u7684 value \u4e0d\u662f\u4e00\u4e2a\u6807\u51c6\u7684\u7cbe\u5ea6\u679a\u4e3e\u503c")))),Object(l.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.onCompassChange(function (res) {\n  console.log(res.direction)\n})\n")),Object(l.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Taro.onCompassChange"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))))))}i.isMDXComponent=!0},1621:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),c=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var u=c.a.createContext({}),i=function(e){var t=c.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):b({},t,{},e)),n},s=function(e){var t=i(e.components);return c.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},O=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=i(n),O=a,d=s["".concat(r,".").concat(O)]||s[O]||p[O]||l;return n?c.a.createElement(d,b({ref:t},u,{components:n})):c.a.createElement(d,b({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=O;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,r[1]=b;for(var u=2;u<l;u++)r[u]=n[u];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);