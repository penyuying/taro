(window.webpackJsonp=window.webpackJsonp||[]).push([[786],{1621:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return s}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},f=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=p(r),m=n,s=f["".concat(c,".").concat(m)]||f[m]||b[m]||a;return r?o.a.createElement(s,i({ref:t},l,{components:r})):o.a.createElement(s,i({ref:t},l))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},925:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(1),o=r(9),a=(r(0),r(1621)),c={id:"2018-06-25-the-birth-of-taro",title:"\u4e3a\u4f55\u6211\u4eec\u8981\u7528 React \u6765\u5199\u5c0f\u7a0b\u5e8f - Taro \u8bde\u751f\u8bb0",author:"luckyadam",author_url:"https://github.com/luckyadam",author_image_url:"https://avatars2.githubusercontent.com/u/1782542?s=400&u=d20514a52100ed1f82282bcfca6f49052793c889&v=4"},i={permalink:"/taro/blog/2018-06-25-the-birth-of-taro",editUrl:"https://github.com/nervjs/taro/edit/blog/blog/2018-06-25-the-birth-of-taro.md",source:"@site/blog/2018-06-25-the-birth-of-taro.md",description:"\u4ece\u53bb\u5e74\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7684\u8bde\u751f\uff0c\u5230\u4eca\u5e74\u7684\u9010\u6e10\u706b\u70ed\uff0c\u4ee5\u53ca\u5f02\u519b\u7a81\u8d77\u7684\u8f7b\u5e94\u7528\u3001\u767e\u5ea6\u5c0f\u7a0b\u5e8f\u7b49\u7684\u51fa\u73b0\uff0c\u524d\u7aef\u53ef\u4ee5\u5ef6\u4f38\u7684\u9886\u57df\u5df2\u7ecf\u8d8a\u6765\u8d8a\u5e7f\uff0c\u5f53\u7136\u4e5f\u610f\u5473\u7740\u4e1a\u52a1\u5728\u4e0d\u65ad\u6269\u5927\u3002\u8fd9\u65f6\u5019\uff0c\u5982\u4f55\u901a\u8fc7\u6280\u672f\u624b\u6bb5\u6765\u63d0\u5347\u5f00\u53d1\u6548\u7387\uff0c\u5e94\u5bf9\u4e0d\u65ad\u589e\u957f\u7684\u4e1a\u52a1\uff0c\u5c31\u662f\u4e00\u4e2a\u503c\u5f97\u63a2\u7d22\u7684\u8bdd\u9898\u3002\u672c\u6587\u5c06\u5bf9 Taro \u8bde\u751f\u7684\u6545\u4e8b\uff0c\u8fdb\u884c\u6df1\u5165\u6d45\u51fa\u5730\u4ecb\u7ecd\uff0c\u8bb0\u5f55\u4e0b\u8fd9\u4e2a\u5fd9\u788c\u7684\u6625\u590f\u4e4b\u4ea4\u53d1\u751f\u7684\u6545\u4e8b\u3002",date:"2018-06-25T00:00:00.000Z",tags:[],title:"\u4e3a\u4f55\u6211\u4eec\u8981\u7528 React \u6765\u5199\u5c0f\u7a0b\u5e8f - Taro \u8bde\u751f\u8bb0",readingTime:3.33,truncated:!0,prevItem:{title:"\u9996\u4e2a\u591a\u7aef UI \u7ec4\u4ef6\u5e93 - Taro UI \u53d1\u5e03",permalink:"/taro/blog/2018-08-24-the-birth-of-taro-ui"},nextItem:{title:"\u591a\u7aef\u7edf\u4e00\u5f00\u53d1\u6846\u67b6 - Taro",permalink:"/taro/blog/2018-06-07-Taro"}},u=[],l={rightToc:u};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u4ece\u53bb\u5e74\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7684\u8bde\u751f\uff0c\u5230\u4eca\u5e74\u7684\u9010\u6e10\u706b\u70ed\uff0c\u4ee5\u53ca\u5f02\u519b\u7a81\u8d77\u7684\u8f7b\u5e94\u7528\u3001\u767e\u5ea6\u5c0f\u7a0b\u5e8f\u7b49\u7684\u51fa\u73b0\uff0c\u524d\u7aef\u53ef\u4ee5\u5ef6\u4f38\u7684\u9886\u57df\u5df2\u7ecf\u8d8a\u6765\u8d8a\u5e7f\uff0c\u5f53\u7136\u4e5f\u610f\u5473\u7740\u4e1a\u52a1\u5728\u4e0d\u65ad\u6269\u5927\u3002\u8fd9\u65f6\u5019\uff0c\u5982\u4f55\u901a\u8fc7\u6280\u672f\u624b\u6bb5\u6765\u63d0\u5347\u5f00\u53d1\u6548\u7387\uff0c\u5e94\u5bf9\u4e0d\u65ad\u589e\u957f\u7684\u4e1a\u52a1\uff0c\u5c31\u662f\u4e00\u4e2a\u503c\u5f97\u63a2\u7d22\u7684\u8bdd\u9898\u3002\u672c\u6587\u5c06\u5bf9 Taro \u8bde\u751f\u7684\u6545\u4e8b\uff0c\u8fdb\u884c\u6df1\u5165\u6d45\u51fa\u5730\u4ecb\u7ecd\uff0c\u8bb0\u5f55\u4e0b\u8fd9\u4e2a\u5fd9\u788c\u7684\u6625\u590f\u4e4b\u4ea4\u53d1\u751f\u7684\u6545\u4e8b\u3002"))}p.isMDXComponent=!0}}]);