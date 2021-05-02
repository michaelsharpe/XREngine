(self.webpackChunk_xr3ngine_docs=self.webpackChunk_xr3ngine_docs||[]).push([[26579],{30876:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(2784);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=c,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function m(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=r.length,a=new Array(o);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:c,a[1]=i;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},28668:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return i},toc:function(){return s},default:function(){return p}});var n=r(7560),c=r(98283),o=(r(2784),r(30876)),a={id:"src_common_reducers_alert_actions.alertaction",title:"Interface: AlertAction",sidebar_label:"AlertAction",custom_edit_url:null},i={unversionedId:"docs-client-core/interfaces/src_common_reducers_alert_actions.alertaction",id:"docs-client-core/interfaces/src_common_reducers_alert_actions.alertaction",isDocsHomePage:!1,title:"Interface: AlertAction",description:"src/common/reducers/alert/actions.AlertAction",source:"@site/docs/docs-client-core/interfaces/src_common_reducers_alert_actions.alertaction.md",sourceDirName:"docs-client-core/interfaces",slug:"/docs-client-core/interfaces/src_common_reducers_alert_actions.alertaction",permalink:"/docs/docs/docs-client-core/interfaces/src_common_reducers_alert_actions.alertaction",editUrl:null,version:"current",sidebar_label:"AlertAction",frontMatter:{id:"src_common_reducers_alert_actions.alertaction",title:"Interface: AlertAction",sidebar_label:"AlertAction",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Interface: LoadedContentPacksAction",permalink:"/docs/docs/docs-client-core/interfaces/src_admin_reducers_contentpack_actions.loadedcontentpacksaction"},next:{title:"Interface: AlertState",permalink:"/docs/docs/docs-client-core/interfaces/src_common_reducers_alert_actions.alertstate"}},s=[{value:"Properties",id:"properties",children:[{value:"alertType",id:"alerttype",children:[]},{value:"message",id:"message",children:[]},{value:"type",id:"type",children:[]}]}],l={toc:s};function p(e){var t=e.components,r=(0,c.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/docs/docs-client-core/modules/src_common_reducers_alert_actions"},"src/common/reducers/alert/actions"),".AlertAction"),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"alerttype"},"alertType"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"alertType"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/docs-client-core/modules/src_common_reducers_alert_actions#alerttype"},(0,o.kt)("em",{parentName:"a"},"AlertType"))),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/c520d43fe/packages/client-core/src/common/reducers/alert/actions.ts#L10"},"packages/client-core/src/common/reducers/alert/actions.ts:10")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"message"},"message"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"message"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/c520d43fe/packages/client-core/src/common/reducers/alert/actions.ts#L11"},"packages/client-core/src/common/reducers/alert/actions.ts:11")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"type"},"type"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"type"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/c520d43fe/packages/client-core/src/common/reducers/alert/actions.ts#L9"},"packages/client-core/src/common/reducers/alert/actions.ts:9")))}p.isMDXComponent=!0}}]);