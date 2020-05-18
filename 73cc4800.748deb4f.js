(window.webpackJsonp=window.webpackJsonp||[]).push([[691],{1621:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p({},n,{},e)),t},b=function(e){var n=l(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=l(t),d=r,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||a;return t?o.a.createElement(m,p({ref:n},s,{components:t})):o.a.createElement(m,p({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=d;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var s=2;s<a;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},830:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return l}));var r=t(1),o=t(9),a=(t(0),t(1621)),c={title:"\u4f7f\u7528 Redux"},p={id:"redux",title:"\u4f7f\u7528 Redux",description:"\u5728 Taro \u4e2d\u53ef\u4ee5\u81ea\u7531\u5730\u4f7f\u7528 `React` \u751f\u6001\u4e2d\u975e\u5e38\u6d41\u884c\u7684\u6570\u636e\u6d41\u7ba1\u7406\u5de5\u5177 [Redux](https://redux.js.org/) \u6765\u89e3\u51b3\u590d\u6742\u9879\u76ee\u7684\u6570\u636e\u7ba1\u7406\u95ee\u9898\u3002\u800c\u4e3a\u4e86\u66f4\u65b9\u4fbf\u5730\u4f7f\u7528 `Redux` \uff0cTaro \u63d0\u4f9b\u4e86\u4e0e [react-redux](https://redux.js.org/basics/usage-with-react) API \u51e0\u4e4e\u4e00\u81f4\u7684\u5305 `@tarojs/redux` \u6765\u8ba9\u5f00\u53d1\u4eba\u5458\u83b7\u5f97\u66f4\u52a0\u826f\u597d\u7684\u5f00\u53d1\u4f53\u9a8c\u3002",source:"@site/docs/redux.md",permalink:"/taro/docs/next/redux",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/redux.md",version:"next",sidebar:"docs",previous:{title:"\u4ece\u65e7\u7248\u672c\u8fc1\u79fb\u5230 Taro Next",permalink:"/taro/docs/next/migration"},next:{title:"\u4f7f\u7528 CSS Modules",permalink:"/taro/docs/next/css-modules"}},i=[{value:"Hooks",id:"hooks",children:[{value:"\u5728 Redux \u4e2d\u4f7f\u7528 Hooks",id:"\u5728-redux-\u4e2d\u4f7f\u7528-hooks",children:[]},{value:"<code>useSelector</code>",id:"useselector",children:[]},{value:"<code>useDispatch</code>",id:"usedispatch",children:[]},{value:"<code>useStore</code>",id:"usestore",children:[]}]}],s={rightToc:i};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u5728 Taro \u4e2d\u53ef\u4ee5\u81ea\u7531\u5730\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"React")," \u751f\u6001\u4e2d\u975e\u5e38\u6d41\u884c\u7684\u6570\u636e\u6d41\u7ba1\u7406\u5de5\u5177 ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://redux.js.org/"}),"Redux")," \u6765\u89e3\u51b3\u590d\u6742\u9879\u76ee\u7684\u6570\u636e\u7ba1\u7406\u95ee\u9898\u3002\u800c\u4e3a\u4e86\u66f4\u65b9\u4fbf\u5730\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"Redux")," \uff0cTaro \u63d0\u4f9b\u4e86\u4e0e ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://redux.js.org/basics/usage-with-react"}),"react-redux")," API \u51e0\u4e4e\u4e00\u81f4\u7684\u5305 ",Object(a.b)("inlineCode",{parentName:"p"},"@tarojs/redux")," \u6765\u8ba9\u5f00\u53d1\u4eba\u5458\u83b7\u5f97\u66f4\u52a0\u826f\u597d\u7684\u5f00\u53d1\u4f53\u9a8c\u3002"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u4e0b\u6587\u4e2d\u793a\u4f8b\u4ee3\u7801\u5747\u5728 ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/NervJS/taro-redux-sample"}),"taro-redux-sample"))),Object(a.b)("p",null,"\u9996\u5148\u8bf7\u5b89\u88c5 ",Object(a.b)("inlineCode",{parentName:"p"},"redux")," \u3001 ",Object(a.b)("inlineCode",{parentName:"p"},"@tarojs/redux")," \u548c ",Object(a.b)("inlineCode",{parentName:"p"},"@tarojs/redux-h5"),"\uff0c\u4ee5\u53ca\u4e00\u4e9b\u9700\u8981\u7528\u5230\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"redux")," \u4e2d\u95f4\u4ef6"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ yarn add redux @tarojs/redux @tarojs/redux-h5 redux-thunk redux-logger\n# \u6216\u8005\u4f7f\u7528 npm\n$ npm install --save redux @tarojs/redux @tarojs/redux-h5 redux-thunk redux-logger\n")),Object(a.b)("p",null,"\u968f\u540e\u53ef\u4ee5\u5728\u9879\u76ee ",Object(a.b)("inlineCode",{parentName:"p"},"src")," \u76ee\u5f55\u4e0b\u65b0\u589e\u4e00\u4e2a ",Object(a.b)("inlineCode",{parentName:"p"},"store")," \u76ee\u5f55\uff0c\u5728\u76ee\u5f55\u4e0b\u589e\u52a0 ",Object(a.b)("inlineCode",{parentName:"p"},"index.js")," \u6587\u4ef6\u7528\u6765\u914d\u7f6e ",Object(a.b)("inlineCode",{parentName:"p"},"store"),"\uff0c\u6309\u81ea\u5df1\u559c\u597d\u8bbe\u7f6e ",Object(a.b)("inlineCode",{parentName:"p"},"redux")," \u7684\u4e2d\u95f4\u4ef6\uff0c\u4f8b\u5982\u4e0b\u9762\u4f8b\u5b50\u4e2d\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"redux-thunk")," \u548c ",Object(a.b)("inlineCode",{parentName:"p"},"redux-logger")," \u8fd9\u4e24\u4e2a\u4e2d\u95f4\u4ef6"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"// src/store/index.js\nimport { createStore, applyMiddleware } from 'redux'\nimport thunkMiddleware from 'redux-thunk'\nimport { createLogger } from 'redux-logger'\nimport rootReducer from '../reducers'\n\nconst middlewares = [\n  thunkMiddleware,\n  createLogger()\n]\n\nexport default function configStore () {\n  const store = createStore(rootReducer, applyMiddleware(...middlewares))\n  return store\n}\n")),Object(a.b)("p",null,"\u63a5\u4e0b\u6765\u5728\u9879\u76ee\u5165\u53e3\u6587\u4ef6 ",Object(a.b)("inlineCode",{parentName:"p"},"app.js")," \u4e2d\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"@tarojs/redux")," \u4e2d\u63d0\u4f9b\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"Provider")," \u7ec4\u4ef6\u5c06\u524d\u9762\u5199\u597d\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"store")," \u63a5\u5165\u5e94\u7528\u4e2d"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"// src/app.js\nimport Taro, { Component } from '@tarojs/taro'\nimport { Provider } from '@tarojs/redux'\n\nimport configStore from './store'\nimport Index from './pages/index'\n\nimport './app.scss'\n\nconst store = configStore()\n\nclass App extends Component {\n  render() {\n    return (\n      <Provider store={store}>\n        {this.props.children}\n      </Provider>\n    )\n  }\n}\n\nTaro.render(<App />, document.getElementById('app'))\n\n")),Object(a.b)("p",null,"\u7136\u540e\u5c31\u53ef\u4ee5\u5f00\u59cb\u4f7f\u7528\u4e86\u3002\u5982 ",Object(a.b)("inlineCode",{parentName:"p"},"redux")," \u63a8\u8350\u7684\u90a3\u6837\uff0c\u53ef\u4ee5\u589e\u52a0"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"constants")," \u76ee\u5f55\uff0c\u7528\u6765\u653e\u7f6e\u6240\u6709\u7684 ",Object(a.b)("inlineCode",{parentName:"li"},"action type")," \u5e38\u91cf"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"actions")," \u76ee\u5f55\uff0c\u7528\u6765\u653e\u7f6e\u6240\u6709\u7684 ",Object(a.b)("inlineCode",{parentName:"li"},"actions")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"reducers")," \u76ee\u5f55\uff0c\u7528\u6765\u653e\u7f6e\u6240\u6709\u7684 ",Object(a.b)("inlineCode",{parentName:"li"},"reducers"))),Object(a.b)("p",null,"\u4f8b\u5982\u6211\u4eec\u8981\u5f00\u53d1\u4e00\u4e2a\u7b80\u5355\u7684\u52a0\u3001\u51cf\u8ba1\u6570\u5668\u529f\u80fd"),Object(a.b)("p",null,"\u65b0\u589e ",Object(a.b)("inlineCode",{parentName:"p"},"action type")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"// src/constants/counter.js\nexport const ADD = 'ADD'\nexport const MINUS = 'MINUS'\n")),Object(a.b)("p",null,"\u65b0\u589e ",Object(a.b)("inlineCode",{parentName:"p"},"reducer")," \u5904\u7406"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"// src/reducers/counter.js\nimport { ADD, MINUS } from '../constants/counter'\n\nconst INITIAL_STATE = {\n  num: 0\n}\n\nexport default function counter (state = INITIAL_STATE, action) {\n  switch (action.type) {\n    case ADD:\n      return {\n        ...state,\n        num: state.num + 1\n      }\n    case MINUS:\n      return {\n        ...state,\n        num: state.num - 1\n      }\n    default:\n      return state\n  }\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"// src/reducers/index.js\nimport { combineReducers } from 'redux'\nimport counter from './counter'\n\nexport default combineReducers({\n  counter\n})\n\n")),Object(a.b)("p",null,"\u65b0\u589e ",Object(a.b)("inlineCode",{parentName:"p"},"action")," \u5904\u7406"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"// src/actions/counter.js\nimport {\n  ADD,\n  MINUS\n} from '../constants/counter'\n\nexport const add = () => {\n  return {\n    type: ADD\n  }\n}\nexport const minus = () => {\n  return {\n    type: MINUS\n  }\n}\n\n// \u5f02\u6b65\u7684 action\nexport function asyncAdd () {\n  return dispatch => {\n    setTimeout(() => {\n      dispatch(add())\n    }, 2000)\n  }\n}\n\n")),Object(a.b)("p",null,"\u6700\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u9875\u9762\uff08\u6216\u8005\u7ec4\u4ef6\uff09\u4e2d\u8fdb\u884c\u4f7f\u7528\uff0c\u6211\u4eec\u5c06\u901a\u8fc7 ",Object(a.b)("inlineCode",{parentName:"p"},"tarojs/redux")," \u63d0\u4f9b\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"connect")," \u65b9\u6cd5\u5c06 ",Object(a.b)("inlineCode",{parentName:"p"},"redux")," \u4e0e\u6211\u4eec\u7684\u9875\u9762\u8fdb\u884c\u8fde\u63a5"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"// src/pages/index/index.js\nimport Taro, { Component } from '@tarojs/taro'\nimport { View, Text } from '@tarojs/components'\nimport { connect } from '@tarojs/redux'\nimport './index.scss'\n\nimport { add, minus, asyncAdd } from '../../actions/counter'\n\n@connect(({ counter }) => ({\n  counter\n}), (dispatch) => ({\n  add () {\n    dispatch(add())\n  },\n  dec () {\n    dispatch(minus())\n  },\n  asyncAdd () {\n    dispatch(asyncAdd())\n  }\n}))\nclass Index extends Component {\n  config = {\n    navigationBarTitleText: '\u9996\u9875'\n  }\n\n  render () {\n    return (\n      <View className='todo'>\n        <Button className='add_btn' onClick={this.props.add}>+</Button>\n        <Button className='dec_btn' onClick={this.props.dec}>-</Button>\n        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>\n        <View>{this.props.counter.num}</View>\n      </View>\n    )\n  }\n}\n\nexport default Index\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"connect")," \u65b9\u6cd5\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570 ",Object(a.b)("inlineCode",{parentName:"p"},"mapStateToProps")," \u4e0e ",Object(a.b)("inlineCode",{parentName:"p"},"mapDispatchToProps")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"mapStateToProps"),"\uff0c\u51fd\u6570\u7c7b\u578b\uff0c\u63a5\u53d7\u6700\u65b0\u7684 ",Object(a.b)("inlineCode",{parentName:"li"},"state")," \u4f5c\u4e3a\u53c2\u6570\uff0c\u7528\u4e8e\u5c06 ",Object(a.b)("inlineCode",{parentName:"li"},"state")," \u6620\u5c04\u5230\u7ec4\u4ef6\u7684 ",Object(a.b)("inlineCode",{parentName:"li"},"props")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"mapDispatchToProps"),"\uff0c\u51fd\u6570\u7c7b\u578b\uff0c\u63a5\u6536 ",Object(a.b)("inlineCode",{parentName:"li"},"dispatch()")," \u65b9\u6cd5\u5e76\u8fd4\u56de\u671f\u671b\u6ce8\u5165\u5230\u5c55\u793a\u7ec4\u4ef6\u7684 ",Object(a.b)("inlineCode",{parentName:"li"},"props")," \u4e2d\u7684\u56de\u8c03\u65b9\u6cd5")),Object(a.b)("h2",{id:"hooks"},"Hooks"),Object(a.b)("h3",{id:"\u5728-redux-\u4e2d\u4f7f\u7528-hooks"},"\u5728 Redux \u4e2d\u4f7f\u7528 Hooks"),Object(a.b)("p",null,"\u4f7f\u7528 hooks \u7684\u57fa\u672c\u8bbe\u7f6e\u548c\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"connect")," \u7684\u8bbe\u7f6e\u662f\u4e00\u6837\u7684\uff0c\u4f60\u9700\u8981\u8bbe\u7f6e\u4f60\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"store"),"\uff0c\u5e76\u628a\u4f60\u7684\u5e94\u7528\u653e\u5728 ",Object(a.b)("inlineCode",{parentName:"p"},"Provider")," \u7ec4\u4ef6\u4e2d\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const store = configreStore(rootReducer)\n\nclass App extends Components {\n    render () {\n        return (\n            <Provider store={store}>\n                <Index />\n            </Provider>\n        )\n    }\n}\n")),Object(a.b)("p",null,"\u5728\u8fd9\u6837\u7684\u60c5\u51b5\u4e0b\uff0c\u4f60\u5c31\u53ef\u4ee5\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"taro-redux")," \u63d0\u4f9b\u7684 Hooks API \u5728\u51fd\u6570\u5f0f\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u3002"),Object(a.b)("h3",{id:"useselector"},Object(a.b)("inlineCode",{parentName:"h3"},"useSelector")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const result : any = useSelector(selector : Function, equalityFn? : Function)\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"useSelector")," \u5141\u8bb8\u4f60\u4f7f\u7528 selector \u51fd\u6570\u4ece\u4e00\u4e2a Redux Store \u4e2d\u83b7\u53d6\u6570\u636e\u3002"),Object(a.b)("p",null,"Selector \u51fd\u6570\u5927\u81f4\u76f8\u5f53\u4e8e ",Object(a.b)("inlineCode",{parentName:"p"},"connect")," \u51fd\u6570\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"mapStateToProps")," \u53c2\u6570\u3002Selector \u4f1a\u5728\u7ec4\u4ef6\u6bcf\u6b21\u6e32\u67d3\u65f6\u8c03\u7528\u3002",Object(a.b)("inlineCode",{parentName:"p"},"useSelector")," \u540c\u6837\u4f1a\u8ba2\u9605 Redux store\uff0c\u5728 Redux action \u88ab dispatch \u65f6\u8c03\u7528\u3002"),Object(a.b)("p",null,"\u4f46 ",Object(a.b)("inlineCode",{parentName:"p"},"useSelector")," \u8fd8\u662f\u548c ",Object(a.b)("inlineCode",{parentName:"p"},"mapStateToProps")," \u6709\u4e00\u4e9b\u4e0d\u540c\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u4e0d\u50cf ",Object(a.b)("inlineCode",{parentName:"li"},"mapStateToProps")," \u53ea\u8fd4\u56de\u5bf9\u8c61\u4e00\u6837\uff0cSelector \u53ef\u80fd\u4f1a\u8fd4\u56de\u4efb\u4f55\u503c\u3002"),Object(a.b)("li",{parentName:"ul"},"\u5f53\u4e00\u4e2a action dispatch \u65f6\uff0c",Object(a.b)("inlineCode",{parentName:"li"},"useSelector")," \u4f1a\u628a selector \u7684\u524d\u540e\u8fd4\u56de\u503c\u505a\u4e00\u6b21\u6d45\u5bf9\u6bd4\uff0c\u5982\u679c\u4e0d\u540c\uff0c\u7ec4\u4ef6\u4f1a\u5f3a\u5236\u66f4\u65b0\u3002"),Object(a.b)("li",{parentName:"ul"},"Selector \u51fd\u6570\u4e0d\u63a5\u53d7 ",Object(a.b)("inlineCode",{parentName:"li"},"ownProps")," \u53c2\u6570\u3002\u4f46 selector \u53ef\u4ee5\u901a\u8fc7\u95ed\u5305\u8bbf\u95ee\u51fd\u6570\u5f0f\u7ec4\u4ef6\u4f20\u9012\u4e0b\u6765\u7684 props\u3002")),Object(a.b)("h4",{id:"\u4f7f\u7528\u6848\u4f8b"},"\u4f7f\u7528\u6848\u4f8b"),Object(a.b)("p",null,"\u57fa\u672c\u4f7f\u7528\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro, { Components } from '@tarojs/taro'\nimport { useSelector } from '@tarojs/redux'\n\nexport const CounterComponent = () => {\n  const counter = useSelector(state => state.counter)\n  return <View>{counter}</View>\n}\n")),Object(a.b)("p",null,"\u4f7f\u7528\u95ed\u5305\u51b3\u5b9a\u5982\u4f55 select \u6570\u636e\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"export const TodoListItem = props => {\n  const todo = useSelector(state => state.todos[props.id])\n  return <View>{todo.text}</View>\n}\n\n")),Object(a.b)("h4",{id:"\u8fdb\u9636\u4f7f\u7528"},"\u8fdb\u9636\u4f7f\u7528"),Object(a.b)("p",null," \u4f60\u8fd8\u53ef\u4ee5\u8bbf\u95ee ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://react-redux.js.org/api/hooks#using-memoizing-selectors"}),"react-redux \u6587\u6863")," \u4e86\u89e3\u5982\u4f55\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"reselect")," \u7f13\u5b58 selector\u3002"),Object(a.b)("h3",{id:"usedispatch"},Object(a.b)("inlineCode",{parentName:"h3"},"useDispatch")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const dispatch = useDispatch()\n")),Object(a.b)("p",null,"\u8fd9\u4e2a Hook \u8fd4\u56de Redux store \u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"dispatch")," \u5f15\u7528\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765 dispatch actions\u3002"),Object(a.b)("h4",{id:"\u4f7f\u7528\u6848\u4f8b-1"},"\u4f7f\u7528\u6848\u4f8b"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro, { Components } from '@tarojs/taro'\nimport { useDispatch } from '@tarojs/redux'\n\nexport const CounterComponent = ({ value }) => {\n  const dispatch = useDispatch()\n\n  return (\n    <View>\n      <Text>{value}</Text>\n      <Button onClick={() => dispatch({ type: 'increment-counter' })}>\n        Increment counter\n      </Button>\n    </View>\n  )\n}\n")),Object(a.b)("p",null,"\u5f53\u6211\u4eec\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"dispatch")," \u4f20\u9012\u56de\u8c03\u5230\u4e00\u4e2a\u5b50\u7ec4\u4ef6\u65f6\uff0c\u63a8\u8350\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"useCallback")," \u628a\u56de\u8c03\u7f13\u5b58\u8d77\u6765\uff0c\u56e0\u4e3a\u7ec4\u4ef6\u53ef\u80fd\u56e0\u4e3a\u5f15\u7528\u6539\u53d8\u800c\u91cd\u65b0\u6e32\u67d3\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"// CounterComponent.js\nexport const CounterComponent = ({ value }) => {\n  const dispatch = useDispatch()\n  const incrementCounter = useCallback(\n    () => dispatch({ type: 'increment-counter' }),\n    [dispatch]\n  )\n\n  return (\n    <View>\n      <Text>{value}</Text>\n      <MyIncrementButton onIncrement={incrementCounter} />\n    </View>\n  )\n}\n\n// IncrementButton.js\nconst MyIncrementButton = ({ onIncrement }) => (\n  <Button onClick={onIncrement}>Increment counter</Button>\n)\n\nexport default Taro.memo(MyIncrementButton)\n")),Object(a.b)("h3",{id:"usestore"},Object(a.b)("inlineCode",{parentName:"h3"},"useStore")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const store = useStore()\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"useStore")," \u8fd4\u56de\u4e00\u4e2a store \u5f15\u7528\u548c ",Object(a.b)("inlineCode",{parentName:"p"},"Provider")," \u7ec4\u4ef6\u5f15\u7528\u5b8c\u5168\u4e00\u81f4\u3002"),Object(a.b)("p",null,"\u8fd9\u4e2a hook \u53ef\u80fd\u5e76\u4e0d\u7ecf\u5e38\u4f7f\u7528\u3002",Object(a.b)("inlineCode",{parentName:"p"},"useSelector")," \u5927\u90e8\u5206\u60c5\u51b5\u662f\u4f60\u7684\u7b2c\u4e00\u9009\u62e9\uff0c\u5982\u679c\u9700\u8981\u66ff\u6362 reducers \u7684\u60c5\u51b5\u4e0b\u53ef\u80fd\u4f1a\u4f7f\u7528\u5230\u8fd9\u4e2a API\u3002"),Object(a.b)("h4",{id:"\u4f7f\u7528\u6848\u4f8b-2"},"\u4f7f\u7528\u6848\u4f8b"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro, { Components } from '@tarojs/taro'\nimport { useStore } from '@tarojs/redux'\n\nexport const CounterComponent = ({ value }) => {\n  const store = useStore()\n\n  // EXAMPLE ONLY! Do not do this in a real app.\n  // The component will not automatically update if the store state changes\n  return <div>{store.getState()}</div>\n}\n")))}l.isMDXComponent=!0}}]);