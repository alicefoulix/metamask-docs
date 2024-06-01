"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[48841],{16231:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=s(74848),i=s(28453);const r={description:"Subscribe to events using WebSockets."},o="Subscribe to events",a={id:"network-apis/linea/how-to/subscribe-to-events",title:"Subscribe to events",description:"Subscribe to events using WebSockets.",source:"@site/services/network-apis/linea/how-to/subscribe-to-events.md",sourceDirName:"network-apis/linea/how-to",slug:"/network-apis/linea/how-to/subscribe-to-events",permalink:"/test-integrate-infura/services/network-apis/linea/how-to/subscribe-to-events",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/network-apis/linea/how-to/subscribe-to-events.md",tags:[],version:"current",frontMatter:{description:"Subscribe to events using WebSockets."},sidebar:"servicesSidebar",previous:{title:"Get Linea testnet ETH",permalink:"/test-integrate-infura/services/network-apis/linea/how-to/bridge-funds-to-linea"},next:{title:"JSON-RPC methods",permalink:"/test-integrate-infura/services/network-apis/linea/json-rpc-methods/"}},c={},l=[{value:"Example event subscription",id:"example-event-subscription",level:2}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"subscribe-to-events",children:"Subscribe to events"}),"\n",(0,n.jsxs)(t.p,{children:["Use ",(0,n.jsx)(t.a,{href:"/test-integrate-infura/services/learn/websockets",children:"WebSockets"})," to ",(0,n.jsx)(t.a,{href:"/test-integrate-infura/services/network-apis/ethereum/json-rpc-methods/subscription-methods/",children:"subscribe"})," to events\non the blockchain. For example, monitor an NFT smart contract to alert you when a new NFT is minted."]}),"\n",(0,n.jsx)(t.p,{children:"Stateless HTTP WebSockets are supported, however, we recommend using the WSS protocol to set up bidirectional stateful\nsubscriptions."}),"\n",(0,n.jsx)(t.p,{children:"You need to be aware of the following when sending HTTP RPC requests:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Silent failures - ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#pings_and_pongs_the_heartbeat_of_websockets",children:"Users need to manage client-side silent failures"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"Load balancing - Unlike HTTP requests, WSS requests are not load-balanced to the fastest possible server."}),"\n",(0,n.jsx)(t.li,{children:"Retries - Retrying failed WebSocket requests typically requires custom JSON-RPC ID-based tracking, whereas support for\nretrying failed HTTP requests often is automatic, or easily configured."}),"\n",(0,n.jsxs)(t.li,{children:["Status codes - WebSockets use its own set of ",(0,n.jsx)(t.a,{href:"https://pkg.go.dev/github.com/gorilla/websocket#pkg-constants",children:"status codes"}),"\nto provide users with a disconnection reason. The service will respond with the standard\n",(0,n.jsx)(t.a,{href:"/test-integrate-infura/services/network-apis/ethereum/json-rpc-methods/#error-codes",children:"EVM response codes"})," for each JSON-RPC request."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"example-event-subscription",children:"Example event subscription"}),"\n",(0,n.jsx)(t.p,{children:"The following WebSocket subscription example fires a notification each time a new header is appended to the chain:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'$ wscat -c wss//linea-goerli.infura.io/v3/<API-KEY>\n> {"jsonrpc":  "2.0",  "id":  1,  "method":  "eth_subscribe",  "params":  ["newHeads"]}\n'})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>a});var n=s(96540);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);