"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5693],{61299:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=n(74848),s=n(28453);const o={description:"Restrict your Snap's RPC API methods.",sidebar_label:"Restrict RPC API methods",sidebar_position:4},i="Restrict a Snap's RPC API methods",a={id:"how-to/restrict-rpc-api",title:"Restrict a Snap's RPC API methods",description:"Restrict your Snap's RPC API methods.",source:"@site/snaps/how-to/restrict-rpc-api.md",sourceDirName:"how-to",slug:"/how-to/restrict-rpc-api",permalink:"/feat-ui-drawer/snaps/how-to/restrict-rpc-api",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/restrict-rpc-api.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Restrict your Snap's RPC API methods.",sidebar_label:"Restrict RPC API methods",sidebar_position:4},sidebar:"snapsSidebar",previous:{title:"Use environment variables",permalink:"/feat-ui-drawer/snaps/how-to/use-environment-variables"},next:{title:"Allow automatic connections",permalink:"/feat-ui-drawer/snaps/how-to/allow-automatic-connections"}},c={},d=[{value:"Restrict the whole API",id:"restrict-the-whole-api",level:2},{value:"Restrict by method and origin",id:"restrict-by-method-and-origin",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"restrict-a-snaps-rpc-api-methods",children:"Restrict a Snap's RPC API methods"}),"\n",(0,r.jsxs)(t.p,{children:["If the ",(0,r.jsx)(t.code,{children:"dapps"})," caveat of the ",(0,r.jsx)(t.a,{href:"/feat-ui-drawer/snaps/reference/permissions#endowmentrpc",children:(0,r.jsx)(t.code,{children:"endowment:rpc"})})," permission\nis set to ",(0,r.jsx)(t.code,{children:"true"}),", any dapp can call the Snap's RPC API by default.\nYou can ",(0,r.jsx)(t.a,{href:"#restrict-the-whole-api",children:"restrict the whole API"})," to specific dapp origins or\n",(0,r.jsx)(t.a,{href:"#restrict-by-method-and-origin",children:"restrict the API by method and origin"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"restrict-the-whole-api",children:"Restrict the whole API"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"endowment:rpc"})," permission has an optional\n",(0,r.jsx)(t.a,{href:"/feat-ui-drawer/snaps/reference/permissions#allowed-origins",children:(0,r.jsx)(t.code,{children:"allowedOrigins"})})," caveat.\nYou can use this to restrict the domains that are allowed to make calls to the Snap's RPC API."]}),"\n",(0,r.jsx)(t.h2,{id:"restrict-by-method-and-origin",children:"Restrict by method and origin"}),"\n",(0,r.jsxs)(t.p,{children:["Sometimes a more granular control is required, such as filtering by method ",(0,r.jsx)(t.em,{children:"and"})," caller origin."]}),"\n",(0,r.jsxs)(t.p,{children:["You can restrict by method and origin using the ",(0,r.jsx)(t.code,{children:"origin"})," parameter of the\n",(0,r.jsx)(t.a,{href:"/feat-ui-drawer/snaps/reference/entry-points#onrpcrequest",children:(0,r.jsx)(t.code,{children:"onRpcRequest"})})," entry point.\nFor example:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",metastring:'title="index.ts"',children:'import type { OnRpcRequestHandler, UnauthorizedError } from "@metamask/snaps-sdk";\n\ntype MethodPermission = "*" | string[];\n\nconst RPC_PERMISSIONS: Record<string, MethodPermission> = {\n  hello: "*",\n  secureMethod: [\n    "https://metamask.io",\n    "https://www.mydomain.com",\n  ]\n};\n\nconst isAllowed = (method: string, origin: string) => {\n  return RPC_PERMISSIONS[method] === "*" || RPC_PERMISSIONS[method].includes(origin);\n};\n\nexport const onRpcRequest: OnRpcRequestHandler = async ({\n  origin,\n  request,\n}) => {\n  // Check permissions.\n  if (!isAllowed(request.method, origin)) {\n    throw new UnauthorizedError(`Method ${request.method} not authorized for origin ${origin}.`);\n  }\n\n  switch (request.method) {\n    case "hello":\n      return "world!";\n\n    case "secureMethod":\n      return "The secret is: 42";\n\n    default:\n      throw new Error("Method not found.");\n  }\n};\n'})}),"\n",(0,r.jsx)(t.p,{children:"You can construct more powerful filtering methods using regular expressions or any other logic of\nyour choice."})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(96540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);