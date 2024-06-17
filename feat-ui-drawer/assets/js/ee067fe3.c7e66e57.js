"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6744],{35571:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=n(74848),r=n(28453);const o={description:"Secure your dapp using HTTPS and CSP.",sidebar_position:10},i="Secure your dapp",a={id:"how-to/secure-dapp",title:"Secure your dapp",description:"Secure your dapp using HTTPS and CSP.",source:"@site/wallet/how-to/secure-dapp.md",sourceDirName:"how-to",slug:"/how-to/secure-dapp",permalink:"/feat-ui-drawer/wallet/how-to/secure-dapp",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/secure-dapp.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{description:"Secure your dapp using HTTPS and CSP.",sidebar_position:10},sidebar:"walletSidebar",previous:{title:"Run a development network",permalink:"/feat-ui-drawer/wallet/how-to/run-devnet"},next:{title:"Concepts",permalink:"/feat-ui-drawer/wallet/concepts"}},c={},d=[{value:"Use HTTPS",id:"use-https",level:2},{value:"Use Content Security Policy",id:"use-content-security-policy",level:2},{value:"Use CSP with a server setup",id:"use-csp-with-a-server-setup",level:3},{value:"Use CSP with a static site",id:"use-csp-with-a-static-site",level:3},{value:"Configure your CSP",id:"configure-your-csp",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"secure-your-dapp",children:"Secure your dapp"}),"\n",(0,s.jsxs)(t.p,{children:["We recommend implementing security controls, such as ",(0,s.jsx)(t.a,{href:"#use-https",children:"HTTPS"})," and\n",(0,s.jsx)(t.a,{href:"#use-content-security-policy",children:"Content Security Policy (CSP)"}),", to improve the security of your dapp\nand protect your users."]}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsx)(t.p,{children:"The following security advice isn't exhaustive."})}),"\n",(0,s.jsx)(t.h2,{id:"use-https",children:"Use HTTPS"}),"\n",(0,s.jsx)(t.p,{children:"HTTPS can protect your dapp against attackers who might try to eavesdrop or tamper the communication\nchannel between your dapp and your users.\nHTTPS encrypts data transmitted between the web server and the user's browser, making it\ndifficult for attackers to intercept or modify the data."}),"\n",(0,s.jsxs)(t.p,{children:["To secure your dapp using HTTPS, obtain an SSL/TLS certificate from a trusted certificate authority (CA).\nFor example, ",(0,s.jsx)(t.a,{href:"https://letsencrypt.org/",children:"Let's Encrypt"})," offers free SSL/TLS certificates."]}),"\n",(0,s.jsx)(t.p,{children:"Install the certificate it on your web server.\nIf you're using a static website hosting service, it might have a default way to enable HTTPS on\nyour dapp."}),"\n",(0,s.jsx)(t.h2,{id:"use-content-security-policy",children:"Use Content Security Policy"}),"\n",(0,s.jsxs)(t.p,{children:["Content Security Policy (CSP) is a security feature that can protect your dapp against various\ntypes of attacks, such as ",(0,s.jsx)(t.a,{href:"https://owasp.org/www-community/attacks/xss/",children:"cross-site scripting (XSS)"}),"\nand ",(0,s.jsx)(t.a,{href:"https://owasp.org/www-community/attacks/Clickjacking",children:"clickjacking"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["CSP defines a set of policies that the browser must follow when displaying the dapp.\nSee the full list of CSP directives that you can enable for your dapp in the\n",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy",children:"MDN CSP reference documentation"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"use-csp-with-a-server-setup",children:"Use CSP with a server setup"}),"\n",(0,s.jsxs)(t.p,{children:["If you dapp uses a server setup, enable CSP by setting the ",(0,s.jsx)(t.code,{children:"Content-Security-Policy"})," header in all\nresponses from your server.\nFor example, in Express.js, add the following middleware at the top of your server:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"app.use((req, res, next) => {\n  res.setHeader(\n    \"Content-Security-Policy\",\n    \"default-src 'self'; frame-ancestors 'none'\"\n  );\n  next();\n});\n"})}),"\n",(0,s.jsx)(t.p,{children:"In a header, this looks like the following:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"Content-Security-Policy: default-src 'self'; frame-ancestors 'none'\n"})}),"\n",(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(t.a,{href:"https://content-security-policy.com/examples/",children:"more examples"})," of CSP in popular web frameworks\nand languages."]}),"\n",(0,s.jsx)(t.h3,{id:"use-csp-with-a-static-site",children:"Use CSP with a static site"}),"\n",(0,s.jsxs)(t.p,{children:["If your dapp uses a third party hosting provider, and you can't set a custom\n",(0,s.jsx)(t.code,{children:"Content-Security-Policy"})," header in the server responses, you can enable CSP by using the\n",(0,s.jsxs)(t.a,{href:"https://content-security-policy.com/examples/meta/",children:[(0,s.jsx)(t.code,{children:"<meta>"})," HTML tag"]}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Add this tag to the ",(0,s.jsx)(t.code,{children:"head"})," section of an HTML file to instruct the browser on which CSP directives\nshould be followed.\nFor example:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:"<head>\n  <meta\n    http-equiv=\"Content-Security-Policy\"\n    content=\"default-src 'self'; frame-ancestors 'none'\"\n  />\n</head>\n"})}),"\n",(0,s.jsx)(t.h3,{id:"configure-your-csp",children:"Configure your CSP"}),"\n",(0,s.jsx)(t.p,{children:"CSP configuration is specific to each dapp.\nWe recommend starting with the following secure and restrictive CSP:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"default-src 'self'; frame-ancestors 'none'\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"default-src 'self'"})," - By default, your dapp's code can't load or connect to content from outside\nyour domain."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"frame-ancestors 'none'"})," - Your dapp can't be embedded within the webpage of another domain (to\nprevent ",(0,s.jsx)(t.a,{href:"https://owasp.org/www-community/attacks/Clickjacking",children:"clickjacking attacks"}),")."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["From here, you can make adjustments as needed by your dapp to support the content you want to load.\nFor example, if your dapp loads images hosted on ",(0,s.jsx)(t.a,{href:"https://opensea.io/",children:"OpenSea"}),", you can enable this\nby adding ",(0,s.jsx)(t.code,{children:"img-src 'opensea.io'"})," to your CSP:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"default-src: 'self'; frame-ancestors 'none'; img-src: 'opensea.io'\n"})}),"\n",(0,s.jsxs)(t.p,{children:["For more information and common use cases for CSP, see the\n",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP",children:"MDN CSP documentation"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var s=n(96540);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);