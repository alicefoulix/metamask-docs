"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[7170],{15680:(e,n,t)=>{t.d(n,{xA:()=>l,yg:()=>d});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(t),f=r,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||s;return t?a.createElement(d,o(o({ref:n},l),{},{components:t})):a.createElement(d,o({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=f;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},96257:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=t(58168),r=(t(96540),t(15680));const s={description:"Access the internet using the fetch function.",sidebar_position:8},o="Network access",i={unversionedId:"features/network-access",id:"features/network-access",title:"Network access",description:"Access the internet using the fetch function.",source:"@site/snaps/features/network-access.md",sourceDirName:"features",slug:"/features/network-access",permalink:"/snaps/features/network-access",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/network-access.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{description:"Access the internet using the fetch function.",sidebar_position:8},sidebar:"snapsSidebar",previous:{title:"Localization",permalink:"/snaps/features/localization"},next:{title:"Non-EVM networks",permalink:"/snaps/features/non-evm-networks"}},p={},c=[{value:"Steps",id:"steps",level:2},{value:"1. Request permission to access the internet",id:"1-request-permission-to-access-the-internet",level:3},{value:"2. Use the <code>fetch</code> function",id:"2-use-the-fetch-function",level:3},{value:"Example",id:"example",level:2}],l={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.A)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"network-access"},"Network access"),(0,r.yg)("p",null,"You can access the internet from a Snap using the global ",(0,r.yg)("inlineCode",{parentName:"p"},"fetch")," API."),(0,r.yg)("h2",{id:"steps"},"Steps"),(0,r.yg)("h3",{id:"1-request-permission-to-access-the-internet"},"1. Request permission to access the internet"),(0,r.yg)("p",null,"Request the ",(0,r.yg)("a",{parentName:"p",href:"/snaps/reference/permissions#endowmentnetwork-access"},(0,r.yg)("inlineCode",{parentName:"a"},"endowment:network-access"))," permission,\nwhich exposes the global ",(0,r.yg)("inlineCode",{parentName:"p"},"fetch")," API to the Snaps execution environment.\nAdd the following to your Snap's manifest file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:network-access": {}\n}\n')),(0,r.yg)("h3",{id:"2-use-the-fetch-function"},"2. Use the ",(0,r.yg)("inlineCode",{parentName:"h3"},"fetch")," function"),(0,r.yg)("p",null,"You can now use the ",(0,r.yg)("inlineCode",{parentName:"p"},"fetch")," function to access the internet.\nThe following example fetches a JSON file from the provided URL."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="index.ts"',title:'"index.ts"'},"async function getJson(url: string) {\n  const response = await fetch(url);\n  return await response.json();\n}\n")),(0,r.yg)("admonition",{title:"Same-origin policy and CORS",type:"info"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("inlineCode",{parentName:"p"},"fetch")," requests in a Snap are bound by the browser's\n",(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy#cross-origin_network_access"},"same-origin policy"),".\nSince Snap code is executed in an iframe with the ",(0,r.yg)("inlineCode",{parentName:"p"},"sandbox")," property, the browser sends an ",(0,r.yg)("inlineCode",{parentName:"p"},"Origin"),"\nheader with the value ",(0,r.yg)("inlineCode",{parentName:"p"},"null")," with outgoing requests.\nFor the Snap to be able to read the response, the server must send an\n",(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},(0,r.yg)("inlineCode",{parentName:"a"},"Access-Control-Allow-Origin"))," CORS header\nwith the value ",(0,r.yg)("inlineCode",{parentName:"p"},"*")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"null")," in the response.\nOtherwise, you might need to\n",(0,r.yg)("a",{parentName:"p",href:"https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141"},"set up a proxy"),".")),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("inlineCode",{parentName:"p"},"XMLHttpRequest")," isn't available in Snaps, and you should replace it with ",(0,r.yg)("inlineCode",{parentName:"p"},"fetch"),".\nIf your dependencies use ",(0,r.yg)("inlineCode",{parentName:"p"},"XMLHttpRequest"),", you can\n",(0,r.yg)("a",{parentName:"p",href:"/snaps/how-to/debug-a-snap/common-issues#patch-the-use-of-xmlhttprequest"},"patch it away"),".")),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"See the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/network-access"},(0,r.yg)("inlineCode",{parentName:"a"},"@metamask/network-access-example-snap")),"\npackage for a full example of accessing the internet from a Snap.\nThis example exposes a ",(0,r.yg)("a",{parentName:"p",href:"/snaps/learn/about-snaps/apis#custom-json-rpc-apis"},"custom JSON-RPC API")," for\ndapps to call the ",(0,r.yg)("inlineCode",{parentName:"p"},"fetch")," function from a Snap."))}m.isMDXComponent=!0}}]);