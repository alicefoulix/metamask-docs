"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3235],{20077:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var a=n(74848),r=n(28453),s=n(11470),o=n(19365);const c={sidebar_label:"React",sidebar_position:1,description:"Set up the SDK in your React dapp.",tags:["JavaScript SDK"]},i="Use MetaMask SDK with React",l={id:"how-to/use-sdk/javascript/react/index",title:"Use MetaMask SDK with React",description:"Set up the SDK in your React dapp.",source:"@site/wallet/how-to/use-sdk/javascript/react/index.md",sourceDirName:"how-to/use-sdk/javascript/react",slug:"/how-to/use-sdk/javascript/react/",permalink:"/feat-ui-drawer/wallet/how-to/use-sdk/javascript/react/",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/javascript/react/index.md",tags:[{inline:!0,label:"JavaScript SDK",permalink:"/feat-ui-drawer/wallet/tags/java-script-sdk"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"React",sidebar_position:1,description:"Set up the SDK in your React dapp.",tags:["JavaScript SDK"]},sidebar:"walletSidebar",previous:{title:"JavaScript",permalink:"/feat-ui-drawer/wallet/how-to/use-sdk/javascript/"},next:{title:"React UI",permalink:"/feat-ui-drawer/wallet/how-to/use-sdk/javascript/react/react-ui"}},d={},u=[{value:"Steps",id:"steps",level:2},{value:"1. Install the SDK",id:"1-install-the-sdk",level:3},{value:"2. Import the SDK",id:"2-import-the-sdk",level:3},{value:"3. Wrap your project with <code>MetaMaskProvider</code>",id:"3-wrap-your-project-with-metamaskprovider",level:3},{value:"4. Use the SDK",id:"4-use-the-sdk",level:3},{value:"Example",id:"example",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"use-metamask-sdk-with-react",children:"Use MetaMask SDK with React"}),"\n",(0,a.jsxs)(t.p,{children:["Import ",(0,a.jsx)(t.a,{href:"/feat-ui-drawer/wallet/concepts/sdk/",children:"MetaMask SDK"})," into your React dapp to enable your users to\neasily connect to the MetaMask browser extension and MetaMask Mobile.\nThe SDK for React has the ",(0,a.jsx)(t.a,{href:"/feat-ui-drawer/wallet/how-to/use-sdk/javascript/#prerequisites",children:"same prerequisites"})," as for standard JavaScript."]}),"\n",(0,a.jsx)(t.admonition,{title:"React UI",type:"info",children:(0,a.jsxs)(t.p,{children:["This page provides instructions for using the standard ",(0,a.jsx)(t.code,{children:"@metamask/sdk-react"})," package.\nAlternatively, you can use the ",(0,a.jsx)(t.a,{href:"/feat-ui-drawer/wallet/how-to/use-sdk/javascript/react/react-ui",children:(0,a.jsx)(t.code,{children:"@metamask/sdk-react-ui"})})," package to easily use\n",(0,a.jsx)(t.a,{href:"https://wagmi.sh/",children:"wagmi"})," hooks and a pre-styled UI button component for connecting to MetaMask."]})}),"\n",(0,a.jsx)(t.h2,{id:"steps",children:"Steps"}),"\n",(0,a.jsx)(t.h3,{id:"1-install-the-sdk",children:"1. Install the SDK"}),"\n",(0,a.jsx)(t.p,{children:"In your project directory, install the SDK using Yarn or npm:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"yarn add @metamask/sdk-react\n"})}),"\n",(0,a.jsx)(t.p,{children:"or"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npm i @metamask/sdk-react\n"})}),"\n",(0,a.jsx)(t.h3,{id:"2-import-the-sdk",children:"2. Import the SDK"}),"\n",(0,a.jsx)(t.p,{children:"In your project script, add the following to import the SDK:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",metastring:'title="index.tsx"',children:'import { MetaMaskProvider } from "@metamask/sdk-react";\n'})}),"\n",(0,a.jsxs)(t.h3,{id:"3-wrap-your-project-with-metamaskprovider",children:["3. Wrap your project with ",(0,a.jsx)(t.code,{children:"MetaMaskProvider"})]}),"\n",(0,a.jsxs)(t.p,{children:["Wrap your root component in a ",(0,a.jsx)(t.code,{children:"MetaMaskProvider"}),".\nFor example:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",metastring:'title="index.tsx"',children:'import React from "react";\nimport ReactDOM from "react-dom/client";\nimport App from "./App";\nimport { MetaMaskProvider } from "@metamask/sdk-react";\n\nconst root = ReactDOM.createRoot(\n  document.getElementById("root") as HTMLElement\n);\n\nroot.render(\n  <React.StrictMode>\n    <MetaMaskProvider\n      debug={false}\n      sdkOptions={{\n        dappMetadata: {\n          name: "Example React Dapp",\n          url: window.location.href,\n        },\n        infuraAPIKey: process.env.INFURA_API_KEY,\n        // Other options.\n      }}\n    >\n      <App />\n    </MetaMaskProvider>\n  </React.StrictMode>\n);\n'})}),"\n",(0,a.jsxs)(t.p,{children:["When initializing ",(0,a.jsx)(t.code,{children:"MetaMaskProvider"}),", set ",(0,a.jsx)(t.code,{children:"debug"})," to ",(0,a.jsx)(t.code,{children:"true"})," to activate debug mode.\nFor the full list of options you can set for ",(0,a.jsx)(t.code,{children:"sdkOptions"}),", see the\n",(0,a.jsx)(t.a,{href:"/feat-ui-drawer/wallet/reference/sdk-js-options",children:"JavaScript SDK options reference"}),".\nImportant options include:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/feat-ui-drawer/wallet/reference/sdk-js-options#dappmetadata",children:(0,a.jsx)(t.code,{children:"dappMetadata"})})," - Use this to display information\nabout your dapp in the MetaMask connection modal."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/feat-ui-drawer/wallet/reference/sdk-js-options#infuraapikey",children:(0,a.jsx)(t.code,{children:"infuraAPIKey"})})," - Use this to\n",(0,a.jsx)(t.a,{href:"/feat-ui-drawer/wallet/how-to/use-sdk/javascript/make-read-only-requests",children:"make read-only RPC requests"})," from your dapp."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/feat-ui-drawer/wallet/reference/sdk-js-options#modals",children:(0,a.jsx)(t.code,{children:"modals"})})," - Use this to ",(0,a.jsx)(t.a,{href:"/feat-ui-drawer/wallet/how-to/use-sdk/javascript/display-custom-modals",children:"customize the logic and UI of\nthe displayed modals"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"4-use-the-sdk",children:"4. Use the SDK"}),"\n",(0,a.jsxs)(t.p,{children:["Use the SDK by using the ",(0,a.jsx)(t.code,{children:"useSDK"})," hook in your React components.\nFor example:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",metastring:'title="App.tsx"',children:'import { useSDK } from "@metamask/sdk-react";\nimport React, { useState } from "react";\n\nexport const App = () => {\n  const [account, setAccount] = useState<string>();\n  const { sdk, connected, connecting, provider, chainId } = useSDK();\n\n  const connect = async () => {\n    try {\n      const accounts = await sdk?.connect();\n      setAccount(accounts?.[0]);\n    } catch (err) {\n      console.warn("failed to connect..", err);\n    }\n  };\n\n  return (\n    <div className="App">\n      <button style={{ padding: 10, margin: 10 }} onClick={connect}>\n        Connect\n      </button>\n      {connected && (\n        <div>\n          <>\n            {chainId && `Connected chain: ${chainId}`}\n            <p></p>\n            {account && `Connected account: ${account}`}\n          </>\n        </div>\n      )}\n    </div>\n  );\n};\n'})}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"useSDK return values"}),(0,a.jsx)("p",{children:(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"sdk"}),": Main SDK object that facilitates connection and actions related to MetaMask."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"connected"}),": Boolean value indicating if the dapp is connected to MetaMask."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"connecting"}),": Boolean value indicating if a connection is in process."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"provider"}),": The provider object which can be used for lower-level interactions with the Ethereum blockchain."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"chainId"}),": Currently connected blockchain's chain ID."]}),"\n"]})})]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"connect"})," method initiates a connection to MetaMask and returns an array of connected accounts."]}),"\n",(0,a.jsxs)(t.p,{children:["You can also ",(0,a.jsxs)(t.a,{href:"/feat-ui-drawer/wallet/how-to/use-sdk/javascript/connect-and-sign",children:["use the ",(0,a.jsx)(t.code,{children:"connectAndSign"})," method"]})," to\nconnect to MetaMask and sign data in a single interaction:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'const connectAndSign = async () => {\n  try {\n    const signResult = await sdk?.connectAndSign({\n      msg: "Connect + Sign message",\n    });\n    setResponse(signResult);\n  } catch (err) {\n    console.warn("failed to connect..", err);\n  }\n};\n'})}),"\n",(0,a.jsxs)(t.p,{children:["You can also ",(0,a.jsx)(t.a,{href:"/feat-ui-drawer/wallet/how-to/use-sdk/javascript/batch-json-rpc-requests",children:"batch multiple JSON-RPC requests"})," using the\n",(0,a.jsx)(t.code,{children:"metamask_batch"})," method."]}),"\n",(0,a.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(t.p,{children:"You can copy the full React example to get started:"}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(o.A,{value:"Root component",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",metastring:'title="index.tsx"',children:'import React from "react";\nimport ReactDOM from "react-dom/client";\nimport App from "./App";\nimport { MetaMaskProvider } from "@metamask/sdk-react";\n\nconst root = ReactDOM.createRoot(\n  document.getElementById("root") as HTMLElement\n);\n\nroot.render(\n  <React.StrictMode>\n    <MetaMaskProvider\n      debug={false}\n      sdkOptions={{\n        dappMetadata: {\n          name: "Example React Dapp",\n          url: window.location.href,\n        },\n        infuraAPIKey: process.env.INFURA_API_KEY,\n        // Other options\n      }}\n    >\n      <App />\n    </MetaMaskProvider>\n  </React.StrictMode>\n);\n'})})}),(0,a.jsx)(o.A,{value:"React component",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",metastring:'title="App.tsx"',children:'import { useSDK } from "@metamask/sdk-react";\nimport React from "react";\n\nexport const App = () => {\n  const [account, setAccount] = useState<string>();\n  const { sdk, connected, connecting, provider, chainId } = useSDK();\n\n  const connect = async () => {\n    try {\n      const accounts = await sdk?.connect();\n      setAccount(accounts?.[0]);\n    } catch (err) {\n      console.warn("failed to connect..", err);\n    }\n  };\n\n  return (\n    <div className="App">\n      <button style={{ padding: 10, margin: 10 }} onClick={connect}>\n        Connect\n      </button>\n      {connected && (\n        <div>\n          <>\n            {chainId && "Connected chain: ${chainId}"}\n            <p></p>\n            {account && "Connected account: ${account}"}\n          </>\n        </div>\n      )}\n    </div>\n  );\n};\n'})})})]}),"\n",(0,a.jsxs)(t.p,{children:["See the ",(0,a.jsx)(t.a,{href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/create-react-app",children:"example React dapp"}),"\nin the JavaScript SDK GitHub repository for more information."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var a=n(18215);const r={tabItem:"tabItem_Ymn6"};var s=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,o),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(96540),r=n(18215),s=n(23104),o=n(56347),c=n(205),i=n(57485),l=n(31682),d=n(70679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=p(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[l,u]=m({queryString:n,groupId:r}),[f,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,d.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),j=(()=>{const e=l??f;return h({value:e,tabValues:s})?e:null})();(0,c.A)((()=>{j&&i(j)}),[j]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=n(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=n(74848);function v(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),d=e=>{const t=e.currentTarget,n=i.indexOf(t),r=c[n].value;r!==a&&(l(t),o(r))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:c.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>i.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.A)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function g(e){const t=f(e);return(0,k.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,k.jsx)(v,{...t,...e}),(0,k.jsx)(b,{...t,...e})]})}function w(e){const t=(0,x.A)();return(0,k.jsx)(g,{...e,children:u(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var a=n(96540);const r={},s=a.createContext(r);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);