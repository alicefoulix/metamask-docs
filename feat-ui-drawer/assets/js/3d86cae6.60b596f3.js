"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6433],{84407:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=t(74848),i=t(28453);const a={description:"Enable your users to sign in with Ethereum.",sidebar_position:2},o="Sign in with Ethereum",r={id:"how-to/sign-data/siwe",title:"Sign in with Ethereum",description:"Enable your users to sign in with Ethereum.",source:"@site/wallet/how-to/sign-data/siwe.md",sourceDirName:"how-to/sign-data",slug:"/how-to/sign-data/siwe",permalink:"/feat-ui-drawer/wallet/how-to/sign-data/siwe",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/sign-data/siwe.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Enable your users to sign in with Ethereum.",sidebar_position:2},sidebar:"walletSidebar",previous:{title:"Sign data",permalink:"/feat-ui-drawer/wallet/how-to/sign-data/"},next:{title:"Display in MetaMask",permalink:"/feat-ui-drawer/wallet/how-to/display"}},d={},c=[{value:"Domain binding",id:"domain-binding",level:2},{value:"Example",id:"example",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"sign-in-with-ethereum",children:"Sign in with Ethereum"}),"\n",(0,s.jsxs)(n.p,{children:["You can set up ",(0,s.jsx)(n.a,{href:"https://docs.login.xyz/",children:"Sign-In with Ethereum (SIWE)"})," to enable users to easily\nsign in to your dapp by authenticating with their MetaMask wallet."]}),"\n",(0,s.jsxs)(n.p,{children:["MetaMask supports the SIWE standard message format as specified in ",(0,s.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-4361",children:"ERC-4361"}),".\nWhen your dapp prompts a user to sign a message that follows the SIWE format,\nMetaMask parses the message and gives the user a friendly interface prompting them to sign in to\nyour dapp:"]}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:t(99421).A,alt:"Sign-in with Ethereum request",style:{border:"1px solid #DCDCDC"}})}),"\n",(0,s.jsx)(n.h2,{id:"domain-binding",children:"Domain binding"}),"\n",(0,s.jsx)(n.p,{children:"MetaMask supports domain binding with SIWE to help prevent phishing attacks.\nWhen a site asks a user to sign a SIWE message, but the domain in the message doesn't match the site\nthe user is on, MetaMask displays a warning in the sign-in interface.\nThe user must explicitly select to proceed, accepting the risk of a phishing attack."}),"\n",(0,s.jsx)(n.admonition,{title:"important",type:"caution",children:(0,s.jsxs)(n.p,{children:["MetaMask displays a prominent warning for mismatched domains, but does ",(0,s.jsx)(n.strong,{children:"not"})," block users from\nbypassing the warning and accepting the sign-in request.\nThis is to not break existing dapps that may have use cases for mismatched domains."]})}),"\n",(0,s.jsxs)("div",{class:"row",children:[(0,s.jsx)("div",{class:"column",children:(0,s.jsx)("img",{src:t(53650).A,alt:"Sign-in bad domain",style:{border:"1px solid #DCDCDC"}})}),(0,s.jsx)("div",{class:"column",children:(0,s.jsx)("img",{src:t(29243).A,alt:"Sign-in bad domain pop-up",style:{border:"1px solid #DCDCDC"}})})]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["The following is an example of setting up SIWE with MetaMask using\n",(0,s.jsx)(n.a,{href:"/wallet/reference/personal_sign",children:(0,s.jsx)(n.code,{children:"personal_sign"})}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",metastring:'title="index.js"',children:'const siweSign = async (siweMessage) => {\n  try {\n    const from = accounts[0];\n    const msg = `0x${Buffer.from(siweMessage, "utf8").toString("hex")}`;\n    const sign = await provider // Or window.ethereum if you don\'t support EIP-6963.\n      .request({\n        method: "personal_sign",\n        params: [msg, from],\n      });\n    siweResult.innerHTML = sign;\n  } catch (err) {\n    console.error(err);\n    siweResult.innerHTML = `Error: ${err.message}`;\n  }\n};\n\nsiwe.onclick = async () => {\n  const domain = window.location.host;\n  const from = accounts[0];\n  const siweMessage = `${domain} wants you to sign in with your Ethereum account:\\n${from}\\n\\nI accept the MetaMask Terms of Service: https://community.metamask.io/tos\\n\\nURI: https://${domain}\\nVersion: 1\\nChain ID: 1\\nNonce: 32891757\\nIssued At: 2021-09-30T16:25:24.000Z`;\n  siweSign(siweMessage);\n};\n'})}),"\n",(0,s.jsx)(n.p,{children:"The following HTML displays the SIWE button:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",metastring:'title="index.html"',children:'<h4>Sign-In with Ethereum</h4>\n<button type="button" id="siwe">Sign-In with Ethereum</button>\n<p class="alert">Result:<span id="siweResult"></span></p>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["See the ",(0,s.jsx)(n.a,{href:"https://metamask.github.io/test-dapp/#siwe",children:"live example"})," and\n",(0,s.jsx)(n.a,{href:"https://github.com/MetaMask/test-dapp",children:"test dapp source code"})," for more information."]})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},29243:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/siwe-bad-domain-2-71ffe32c342b4c06e47927271989cacf.png"},53650:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/siwe-bad-domain-f344d17ce12a9914b4f1f2101bfe4ed1.png"},99421:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/siwe-4a7560a7233d0b709b2484ef550529d4.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var s=t(96540);const i={},a=s.createContext(i);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);