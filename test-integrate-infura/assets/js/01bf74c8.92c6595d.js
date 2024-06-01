"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[73862],{32482:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var t=n(74848),s=n(28453),a=n(11470),o=n(19365);const l={description:"Use Caddy to set Infura as a backup for your node."},i="Use Infura as a backup for your node",u={id:"tutorials/ethereum/use-infura-as-a-reverse-proxy/use-infura-as-a-backup-for-your-node",title:"Use Infura as a backup for your node",description:"Use Caddy to set Infura as a backup for your node.",source:"@site/services/tutorials/ethereum/use-infura-as-a-reverse-proxy/use-infura-as-a-backup-for-your-node.md",sourceDirName:"tutorials/ethereum/use-infura-as-a-reverse-proxy",slug:"/tutorials/ethereum/use-infura-as-a-reverse-proxy/use-infura-as-a-backup-for-your-node",permalink:"/test-integrate-infura/services/tutorials/ethereum/use-infura-as-a-reverse-proxy/use-infura-as-a-backup-for-your-node",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/tutorials/ethereum/use-infura-as-a-reverse-proxy/use-infura-as-a-backup-for-your-node.md",tags:[],version:"current",frontMatter:{description:"Use Caddy to set Infura as a backup for your node."},sidebar:"servicesSidebar",previous:{title:"Set up a simple reverse proxy",permalink:"/test-integrate-infura/services/tutorials/ethereum/use-infura-as-a-reverse-proxy/set-up-a-simple-reverse-proxy"},next:{title:"Layer 2 networks",permalink:"/test-integrate-infura/services/tutorials/layer-2-networks"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Create a project directory",id:"1-create-a-project-directory",level:3},{value:"2. Install Caddy",id:"2-install-caddy",level:3},{value:"3. Create a Node.js stub",id:"3-create-a-nodejs-stub",level:3},{value:"4. Run the Node.js stub",id:"4-run-the-nodejs-stub",level:3},{value:"5. Create the reverse proxy",id:"5-create-the-reverse-proxy",level:3},{value:"6. Run the reverse proxy",id:"6-run-the-reverse-proxy",level:3},{value:"7. Make a request",id:"7-make-a-request",level:3}];function h(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"use-infura-as-a-backup-for-your-node",children:"Use Infura as a backup for your node"}),"\n",(0,t.jsxs)(r.p,{children:["In this tutorial, you'll use ",(0,t.jsx)(r.a,{href:"https://caddyserver.com/",children:"Caddy"})," to set up a reverse proxy with two upstreams, one from your own node, and one from Infura as a backup."]}),"\n",(0,t.jsx)(r.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["An ",(0,t.jsx)(r.a,{href:"/test-integrate-infura/services/get-started/infura",children:"Ethereum project"})," on Infura"]}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://nodejs.org/en/download/",children:"Node.js installed"})}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://brew.sh/",children:"Homebrew"})," installed"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"steps",children:"Steps"}),"\n",(0,t.jsx)(r.h3,{id:"1-create-a-project-directory",children:"1. Create a project directory"}),"\n",(0,t.jsx)(r.p,{children:"Create a new directory for your project. You can do this from the command line:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"mkdir reverseProxy\n"})}),"\n",(0,t.jsx)(r.p,{children:"Change into the new directory:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"cd reverseProxy\n"})}),"\n",(0,t.jsx)(r.h3,{id:"2-install-caddy",children:"2. Install Caddy"}),"\n",(0,t.jsx)(r.p,{children:"Install Caddy in the project directory using Homebrew:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"brew install caddy\n"})}),"\n",(0,t.jsx)(r.h3,{id:"3-create-a-nodejs-stub",children:"3. Create a Node.js stub"}),"\n",(0,t.jsxs)(r.p,{children:["You may be running your own Ethereum node, but for the sake of this tutorial, you can substitute a node with a Node.js stub. Create a file named ",(0,t.jsx)(r.code,{children:"main.js"})," in the project directory with the following content:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:'const https = require("https");\nconst fs = require("fs");\nconst options = {\n  key: fs.readFileSync("<PATH_TO_CERTIFICATE_KEY_FILE>.pem"),\n  cert: fs.readFileSync("<PATH_TO_CERTIFICATE_FILE>.pem"),\n};\n\nconst hostname = "127.0.0.1";\nconst port = 9000;\n\nconst server = https.createServer(options, function (req, res) {\n  res.statusCode = 200;\n  res.setHeader("Content-Type", "text/plain");\n  setTimeout(() => {\n    res.end("Reverse proxy success!\\n");\n  }, 1000);\n});\n\nserver.listen(port, hostname, () => {\n  console.log(`Server running at https://${hostname}:${port}/`);\n});\n'})}),"\n",(0,t.jsxs)(r.p,{children:["This sets up a backend HTTPS service running on ",(0,t.jsx)(r.code,{children:"127.0.0.1:9000"})," (",(0,t.jsx)(r.code,{children:"localhost:9000"}),") and displays a success message if the proxy works."]}),"\n",(0,t.jsx)(r.admonition,{type:"warning",children:(0,t.jsxs)(r.p,{children:["When creating a reverse proxy with multiple upstreams, Caddy requires ",(0,t.jsx)(r.em,{children:"all"})," upstream endpoints to be HTTP or HTTPS. In this tutorial, because the backup Infura endpoint is HTTPS, you must create a TLS certificate for your localhost (if you're not already using your own private HTTPS node)."]})}),"\n",(0,t.jsxs)(r.p,{children:["You can ",(0,t.jsx)(r.a,{href:"https://web.dev/how-to-use-local-https/#setup",children:"install and use mkcert"})," to generate a certificate key file and certificate file for your stub:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"brew install mkcert\nmkcert -install\nmkcert localhost\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Replace ",(0,t.jsx)(r.code,{children:"<PATH_TO_CERTIFICATE_KEY_FILE>"})," and ",(0,t.jsx)(r.code,{children:"<PATH_TO_CERTIFICATE_FILE>"})," in ",(0,t.jsx)(r.code,{children:"main.js"})," with the generated files."]}),"\n",(0,t.jsx)(r.h3,{id:"4-run-the-nodejs-stub",children:"4. Run the Node.js stub"}),"\n",(0,t.jsx)(r.p,{children:"In a new terminal window, from your project directory, start the Node.js stub and leave that connection open:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"node main.js\n"})}),"\n",(0,t.jsx)(r.h3,{id:"5-create-the-reverse-proxy",children:"5. Create the reverse proxy"}),"\n",(0,t.jsxs)(r.p,{children:["To create the reverse proxy, create a text file named ",(0,t.jsx)(r.code,{children:"Caddyfile"})," with the following content:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"localhost:3000\n\nreverse_proxy https://localhost:9000 https://goerli.infura.io {\n   header_up Host {/v3/<YOUR_API_KEY>}\n}\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Ensure you replace ",(0,t.jsx)(r.code,{children:"<YOUR_API_KEY>"})," with the API key for your Ethereum project."]}),"\n",(0,t.jsxs)(r.p,{children:["In this example, the reverse proxy retrieves information from ",(0,t.jsx)(r.code,{children:"localhost:9000"}),", and redirects it to ",(0,t.jsx)(r.code,{children:"localhost:3000"}),". If ",(0,t.jsx)(r.code,{children:"localhost:9000"})," stops responding, Caddy will move on to retrieve information from the Infura Goerli endpoint. Using ",(0,t.jsx)(r.code,{children:"header_up Host"})," allows you to include your API key to both the Goerli and localhost endpoints."]}),"\n",(0,t.jsx)(r.h3,{id:"6-run-the-reverse-proxy",children:"6. Run the reverse proxy"}),"\n",(0,t.jsx)(r.p,{children:"In a new terminal window, from your project directory, run the reverse proxy using Caddy:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"caddy run\n"})}),"\n",(0,t.jsx)(r.h3,{id:"7-make-a-request",children:"7. Make a request"}),"\n",(0,t.jsxs)(r.p,{children:["In a new terminal window, make a curl request to ",(0,t.jsx)(r.code,{children:"localhost"}),". The following example executes a ",(0,t.jsx)(r.code,{children:"web3_clientVersion"})," request:"]}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(o.A,{value:"Example CURL request",label:"Example CURL request",default:!0,children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'curl http://localhost:3000/v3/<YOUR_API_KEY> \\\n<strong>  -X POST \\\n</strong>  -H "Content-Type: application/json" \\\n  -d \'{"jsonrpc":"2.0","method":"web3_clientVersion","params": [],"id":1}\'</code></pre>\n'})})}),(0,t.jsx)(o.A,{value:"Example result",label:"Example result",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"Reverse proxy success!\n"})})})]}),"\n",(0,t.jsxs)(r.p,{children:["The success message from ",(0,t.jsx)(r.code,{children:"main.js"})," should display, because you've asked the reverse proxy to go to ",(0,t.jsx)(r.code,{children:"localhost:9000"})," first."]}),"\n",(0,t.jsx)(r.p,{children:"If you close the Node.js server and send the request again, you should get the result from the Infura Goerli node:"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(o.A,{value:"Example CURL request",label:"Example CURL request",default:!0,children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'curl http://localhost:3000/v3/<YOUR_API_KEY> \\\n<strong>  -X POST \\\n</strong>  -H "Content-Type: application/json" \\\n  -d \'{"jsonrpc":"2.0","method":"web3_clientVersion","params": [],"id":1}\'</code></pre>\n'})})}),(0,t.jsx)(o.A,{value:"Example result",label:"Example result",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:'{"jsonrpc":"2.0","id":1,"result":"Geth/v1.10.8-omnibus-aef5bfb3/linux-amd64/go1.16.7"}\n'})})})]}),"\n",(0,t.jsx)(r.p,{children:"The reverse proxy ignores the localhost node, since it's not functioning, and defaults to the backup Infura Goerli node!"})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,r,n)=>{n.d(r,{A:()=>o});n(96540);var t=n(18215);const s={tabItem:"tabItem_Ymn6"};var a=n(74848);function o(e){let{children:r,hidden:n,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,o),hidden:n,children:r})}},11470:(e,r,n)=>{n.d(r,{A:()=>w});var t=n(96540),s=n(18215),a=n(23104),o=n(56347),l=n(205),i=n(57485),u=n(31682),c=n(70679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:s}}=e;return{value:r,label:n,attributes:t,default:s}}))}(n);return function(e){const r=(0,u.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function p(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function f(e){let{queryString:r=!1,groupId:n}=e;const s=(0,o.W6)(),a=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,i.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(s.location.search);r.set(a,e),s.replace({...s.location,search:r.toString()})}),[a,s])]}function m(e){const{defaultValue:r,queryString:n=!1,groupId:s}=e,a=h(e),[o,i]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:a}))),[u,d]=f({queryString:n,groupId:s}),[m,x]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,a]=(0,c.Dv)(n);return[s,(0,t.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),j=(()=>{const e=u??m;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{j&&i(j)}),[j]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),x(e)}),[d,x,a]),tabValues:a}}var x=n(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(74848);function v(e){let{className:r,block:n,selectedValue:t,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const r=e.currentTarget,n=i.indexOf(r),s=l[n].value;s!==t&&(u(r),o(s))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;r=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;r=i[n]??i[i.length-1];break}}r?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},r),children:l.map((e=>{let{value:r,label:n,attributes:a}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>i.push(e),onKeyDown:d,onClick:c,...a,className:(0,s.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function b(e){let{lazy:r,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=a.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:a.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function g(e){const r=m(e);return(0,y.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,y.jsx)(v,{...r,...e}),(0,y.jsx)(b,{...r,...e})]})}function w(e){const r=(0,x.A)();return(0,y.jsx)(g,{...e,children:d(e.children)},String(r))}},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>l});var t=n(96540);const s={},a=t.createContext(s);function o(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);