"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6026],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=o(n),d=r,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||s;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var o=2;o<s;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4371:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const s={description:"Install Snaps dependencies."},l="Install Snaps",i={unversionedId:"get-started/install-snaps",id:"get-started/install-snaps",title:"Install Snaps",description:"Install Snaps dependencies.",source:"@site/snaps/get-started/install-snaps.md",sourceDirName:"get-started",slug:"/get-started/install-snaps",permalink:"/fix-git-login-delete-preivews/snaps/get-started/install-snaps",draft:!1,tags:[],version:"current",frontMatter:{description:"Install Snaps dependencies."},sidebar:"snapsSidebar",previous:{title:"Get started",permalink:"/fix-git-login-delete-preivews/snaps/category/get-started"},next:{title:"Snaps quickstart",permalink:"/fix-git-login-delete-preivews/snaps/get-started/quickstart"}},p={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install MetaMask Flask",id:"install-metamask-flask",level:2},{value:"Install the Snaps CLI",id:"install-the-snaps-cli",level:2}],c={toc:o};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"install-snaps"},"Install Snaps"),(0,r.kt)("p",null,"To use Snaps, you must install ",(0,r.kt)("a",{parentName:"p",href:"#install-metamask-flask"},"MetaMask Flask")," and the ",(0,r.kt)("a",{parentName:"p",href:"#install-the-snaps-cli"},"Snaps CLI"),"."),(0,r.kt)("p",null,"You can then ",(0,r.kt)("a",{parentName:"p",href:"/fix-git-login-delete-preivews/snaps/get-started/quickstart"},"get started quickly using the Snaps template"),"."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Up-to-date Chromium or Firefox browser"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js")," version 16 or later"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"npm")," or ",(0,r.kt)("a",{parentName:"li",href:"https://yarnpkg.com/"},"Yarn"))),(0,r.kt)("h2",{id:"install-metamask-flask"},"Install MetaMask Flask"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://metamask.io/flask/"},"MetaMask Flask")," is a canary distribution for developers that provides\naccess to upcoming MetaMask features.\nSnaps is the first feature rolled out in the Flask environment."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/metamask-flask-developmen/ljfoeinjpaedjfecbmggjgodbgkmjkjk"},"Install Flask"),"\nin a new browser profile, or disable any existing installed versions of MetaMask before installing\nFlask."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Running multiple instances of MetaMask in the same browser profile breaks dapp interactions.")),(0,r.kt)("h2",{id:"install-the-snaps-cli"},"Install the Snaps CLI"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/fix-git-login-delete-preivews/snaps/reference/cli/"},"Snaps CLI")," provides commands for initiating a snap project and building,\nexecuting, and serving your snap for local development."),(0,r.kt)("p",null,"In a terminal window, install the CLI globally using npm or Yarn:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g @metamask/snaps-cli\nor\nyarn global add @metamask/snaps-cli\n")),(0,r.kt)("p",null,"Verify the installation and display usage instructions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap --help\n")))}u.isMDXComponent=!0}}]);