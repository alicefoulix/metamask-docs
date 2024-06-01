"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[58520],{51971:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(74848),o=n(28453),s=n(43123);const i={description:"How to perform tasks on the Mantle network."},a="How to",c={id:"network-apis/mantle/how-to/index",title:"How to",description:"How to perform tasks on the Mantle network.",source:"@site/services/network-apis/mantle/how-to/index.md",sourceDirName:"network-apis/mantle/how-to",slug:"/network-apis/mantle/how-to/",permalink:"/test-integrate-infura/services/network-apis/mantle/how-to/",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/network-apis/mantle/how-to/index.md",tags:[],version:"current",frontMatter:{description:"How to perform tasks on the Mantle network."},sidebar:"servicesSidebar",previous:{title:"Supported networks",permalink:"/test-integrate-infura/services/network-apis/mantle/choose-a-network"},next:{title:"Get testnet ETH",permalink:"/test-integrate-infura/services/network-apis/mantle/how-to/get-testnet-eth"}},l={},d=[];function m(t){const e={h1:"h1",p:"p",...(0,o.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"how-to",children:"How to"}),"\n",(0,r.jsx)(e.p,{children:"Learn how to perform tasks on the Mantle network."}),"\n",(0,r.jsx)(s.A,{})]})}function u(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(m,{...t})}):m(t)}},43123:(t,e,n)=>{n.d(e,{A:()=>x});n(96540);var r=n(18215),o=n(84142),s=n(20053),i=n(28774),a=n(16654),c=n(21312),l=n(49259);const d={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F"};var m=n(74848);function u(t){let{href:e,children:n,flaskOnly:r}=t;return(0,m.jsx)(i.A,{href:e,className:(0,s.A)("card padding--lg",d.cardContainer,{[l.A.flaskOnly]:r}),children:n})}function f(t){let{href:e,icon:n,title:r,description:o,flaskOnly:i}=t;return(0,m.jsxs)(u,{flaskOnly:i,href:e,children:[(0,m.jsxs)("h2",{className:(0,s.A)("text--truncate",d.cardTitle),title:r,children:[n," ",r]}),o&&(0,m.jsx)("p",{className:(0,s.A)("text--truncate",d.cardDescription),title:o,children:o})]})}function p(t){let{item:e}=t;const n=(0,o.Nr)(e);return n?(0,m.jsx)(f,{flaskOnly:!!e.customProps?.flask_only,href:n,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??(0,c.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function h(t){let{item:e}=t;const n=(0,a.A)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.cC)(e.docId??void 0);return(0,m.jsx)(f,{flaskOnly:!!e.customProps?.flask_only,href:e.href,icon:n,title:e.label,description:e.description??r?.description})}function k(t){let{item:e}=t;switch(e.type){case"link":return(0,m.jsx)(h,{item:e});case"category":return(0,m.jsx)(p,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function w(t){let{className:e}=t;const n=(0,o.$S)();return(0,m.jsx)(x,{items:n.items,className:e})}function x(t){const{items:e,className:n}=t;if(!e)return(0,m.jsx)(w,{...t});const s=(0,o.d1)(e);return(0,m.jsx)("section",{className:(0,r.A)("row",n),children:s.map(((t,e)=>(0,m.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,m.jsx)(k,{item:t})},e)))})}},20053:(t,e,n)=>{function r(t){var e,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=r(t[e]))&&(o&&(o+=" "),o+=n);else for(e in t)t[e]&&(o&&(o+=" "),o+=e);return o}n.d(e,{A:()=>o});const o=function(){for(var t,e,n=0,o="";n<arguments.length;)(t=arguments[n++])&&(e=r(t))&&(o&&(o+=" "),o+=e);return o}},49259:(t,e,n)=>{n.d(e,{A:()=>r});const r={cardContainer:"cardContainer_C0Dw",flaskOnly:"flaskOnly_ADUl",cardTitle:"cardTitle_ZNcV",cardIcon:"cardIcon_naep"}},28453:(t,e,n)=>{n.d(e,{R:()=>i,x:()=>a});var r=n(96540);const o={},s=r.createContext(o);function i(t){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:i(t.components),r.createElement(s.Provider,{value:e},t.children)}}}]);