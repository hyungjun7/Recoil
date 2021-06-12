(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),o=(n(0),n(151)),c={title:"useRecoilValue(state)",sidebar_label:"useRecoilValue()"},l={unversionedId:"api-reference/core/useRecoilValue",id:"api-reference/core/useRecoilValue",isDocsHomePage:!1,title:"useRecoilValue(state)",description:"\u8fd4\u56de\u7ed9\u5b9a Recoil state \u7684\u503c\u3002",source:"@site/i18n/zh-hans/docusaurus-plugin-content-docs/current/api-reference/core/useRecoilValue.md",slug:"/api-reference/core/useRecoilValue",permalink:"/zh-hans/docs/api-reference/core/useRecoilValue",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/zh-hans/docusaurus-plugin-content-docs/current/api-reference/core/useRecoilValue.md",version:"current",sidebar_label:"useRecoilValue()",sidebar:"docs",previous:{title:"useRecoilState(state)",permalink:"/zh-hans/docs/api-reference/core/useRecoilState"},next:{title:"useSetRecoilState(state)",permalink:"/zh-hans/docs/api-reference/core/useSetRecoilState"}},i=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]}],s={toc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u8fd4\u56de\u7ed9\u5b9a Recoil state \u7684\u503c\u3002"),Object(o.b)("p",null,"\u4f7f\u7528\u6b64 hook \u4f1a\u4f7f\u7ec4\u4ef6\u9690\u5f0f\u5730\u8ba2\u9605\u7ed9\u5b9a\u7684 state\u3002"),Object(o.b)("hr",null),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"function useRecoilValue<T>(state: RecoilValue<T>): T;\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"state"),"\uff1a\u4e00\u4e2a ",Object(o.b)("a",{parentName:"li",href:"/docs/api-reference/core/atom"},Object(o.b)("inlineCode",{parentName:"a"},"atom"))," \u6216 ",Object(o.b)("a",{parentName:"li",href:"/docs/api-reference/core/selector"},Object(o.b)("inlineCode",{parentName:"a"},"selector")))),Object(o.b)("hr",null),Object(o.b)("p",null,"\u5f53\u4e00\u4e2a\u7ec4\u4ef6\u9700\u8981\u5728\u4e0d\u5199\u5165 state \u7684\u60c5\u51b5\u4e0b\u8bfb\u53d6 state \u65f6\uff0c\u63a8\u8350\u4f7f\u7528\u8be5 hook\uff0c\u56e0\u4e3a\u8be5 hook \u53ef\u4ee5\u540c\u65f6\u5728",Object(o.b)("strong",{parentName:"p"},"\u53ea\u8bfb state")," \u548c",Object(o.b)("strong",{parentName:"p"},"\u53ef\u5199 state")," \u4e2d\u4f7f\u7528\u3002Atom \u662f\u53ef\u5199 state\uff0c\u800c selector \u53ef\u4ee5\u662f\u53ea\u8bfb\uff0c\u4e5f\u53ef\u4ee5\u662f\u53ef\u5199\u7684\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u53c2\u8003 ",Object(o.b)("a",{parentName:"p",href:"/docs/api-reference/core/selector"},Object(o.b)("inlineCode",{parentName:"a"},"selector()")),"\u3002"),Object(o.b)("p",null,"\u5728 React \u7ec4\u4ef6\u4e2d\uff0c\u4f7f\u7528\u672c hook \u5c06\u4f1a\u8ba2\u9605\u8be5\u7ec4\u4ef6\uff0c\u5e76\u4e14\u5728 state \u66f4\u65b0\u65f6\u91cd\u65b0\u6e32\u67d3\u8be5\u7ec4\u4ef6\u3002\u8be5 hook \u5728 state \u5f02\u5e38\u6216\u8005\u5728\u5f02\u6b65\u89e3\u6790\u65f6\u629b\u51fa\u5f02\u5e38\u3002\u8be6\u7ec6\u53ef\u4ee5\u53c2\u8003",Object(o.b)("a",{parentName:"p",href:"/docs/guides/asynchronous-data-queries"},"\u6307\u5357"),"\u3002"),Object(o.b)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"import {atom, selector, useRecoilValue} from 'recoil';\n\nconst namesState = atom({\n  key: 'namesState',\n  default: ['', 'Ella', 'Chris', '', 'Paul'],\n});\n\nconst filteredNamesState = selector({\n  key: 'filteredNamesState',\n  get: ({get}) => get(namesState).filter((str) => str !== ''),\n});\n\nfunction NameDisplay() {\n  const names = useRecoilValue(namesState);\n  const filteredNames = useRecoilValue(filteredNamesState);\n\n  return (\n    <>\n      Original names: {names.join(',')}\n      <br />\n      Filtered names: {filteredNames.join(',')}\n    </>\n  );\n}\n")))}u.isMDXComponent=!0},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,m=p["".concat(c,".").concat(f)]||p[f]||b[f]||o;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);