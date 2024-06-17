"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[520],{436:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var s=a(74848),t=a(28453);const l={description:"Display your Snap's UI and metadata in the user's language.",sidebar_position:7},i="Localization",o={id:"features/localization",title:"Localization",description:"Display your Snap's UI and metadata in the user's language.",source:"@site/snaps/features/localization.md",sourceDirName:"features",slug:"/features/localization",permalink:"/feat-ui-drawer/snaps/features/localization",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/localization.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{description:"Display your Snap's UI and metadata in the user's language.",sidebar_position:7},sidebar:"snapsSidebar",previous:{title:"Lifecycle hooks",permalink:"/feat-ui-drawer/snaps/features/lifecycle-hooks"},next:{title:"Network access",permalink:"/feat-ui-drawer/snaps/features/network-access"}},r={},c=[{value:"Steps",id:"steps",level:2},{value:"1. Get the user&#39;s language",id:"1-get-the-users-language",level:3},{value:"2. Localize the Snap&#39;s UI",id:"2-localize-the-snaps-ui",level:3},{value:"3. Localize the Snap&#39;s manifest file",id:"3-localize-the-snaps-manifest-file",level:3},{value:"Example",id:"example",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"localization",children:"Localization"}),"\n",(0,s.jsx)(n.p,{children:"You can localize your Snap to display your Snap's user interface (UI) text and textual metadata (such as\ntitle and description) in the user's language."}),"\n",(0,s.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,s.jsx)(n.h3,{id:"1-get-the-users-language",children:"1. Get the user's language"}),"\n",(0,s.jsxs)(n.p,{children:["In your Snap's code, determine the user's language by using the\n",(0,s.jsx)(n.a,{href:"/feat-ui-drawer/snaps/reference/snaps-api#snap_getlocale",children:(0,s.jsx)(n.code,{children:"snap_getLocale"})})," API method.\nTo call ",(0,s.jsx)(n.code,{children:"snap_getLocale"}),", first request the required permission by adding it to the\n",(0,s.jsx)(n.code,{children:"initialPermissions"})," field in your manifest file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"initialPermissions": {\n  "snap_getLocale": {}\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Your Snap can then call ",(0,s.jsx)(n.code,{children:"snap_getLocale"})," to get the user's language code (for example, ",(0,s.jsx)(n.code,{children:"en"})," or ",(0,s.jsx)(n.code,{children:"es"}),")."]}),"\n",(0,s.jsx)(n.h3,{id:"2-localize-the-snaps-ui",children:"2. Localize the Snap's UI"}),"\n",(0,s.jsx)(n.p,{children:"Use the user's language code to localize your Snap's UI."}),"\n",(0,s.jsxs)(n.p,{children:["First, create locale files named ",(0,s.jsx)(n.code,{children:"snap/locales/<language_code>.json"}),", containing content in the\nfollowing format:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="en.json"',children:'{\n  "locale": "en",\n  "messages": {\n    "hello": {\n      "message": "Hello, world!",\n      "description": "The message that is returned when the `hello` method is called."\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"You can then use these files in a localization module.\nThe following is an example module:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import da from "../locales/da.json";\nimport en from "../locales/en.json";\nimport nl from "../locales/nl.json";\n\n// Default language, to be used if there is not a valid translation in\n// the requested locale.\nconst FALLBACK_LANGUAGE: Locale = "en";\n\nexport const locales = {\n  da: da.messages,\n  en: en.messages,\n  nl: nl.messages,\n};\n\nexport type Locale = keyof typeof locales;\n\nexport async function getMessage(id: keyof (typeof locales)[Locale]) {\n  const locale = (await snap.request({ method: "snap_getLocale" })) as Locale;\n  const { message } = locales[locale]?.[id] ?? locales[FALLBACK_LANGUAGE][id];\n\n  return message;\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You can then use the ",(0,s.jsx)(n.code,{children:"getMessage"})," function in your Snap's code to localize a message, which uses\nEnglish as the default if the user's locale isn't available."]}),"\n",(0,s.jsxs)(n.p,{children:["The following is an example of using ",(0,s.jsx)(n.code,{children:"getMessage"})," in a Snap's RPC request handler:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="index.ts"',children:'import { rpcErrors } from "@metamask/rpc-errors";\nimport type { OnRpcRequestHandler } from "@metamask/snaps-sdk";\n\nimport { getMessage } from "./locales";\n\nexport const onRpcRequest: OnRpcRequestHandler = async ({ request }) => {\n  switch (request.method) {\n    case "hello":\n      return await getMessage("hello");\n\n    default:\n      throw rpcErrors.methodNotFound({\n        data: { method: request.method },\n      });\n  }\n};\n'})}),"\n",(0,s.jsx)(n.h3,{id:"3-localize-the-snaps-manifest-file",children:"3. Localize the Snap's manifest file"}),"\n",(0,s.jsxs)(n.p,{children:["The Snap ",(0,s.jsx)(n.a,{href:"/feat-ui-drawer/snaps/learn/about-snaps/files#manifest-file",children:"manifest file"})," contains textual metadata such as\n",(0,s.jsx)(n.code,{children:"proposedName"})," and ",(0,s.jsx)(n.code,{children:"description"})," that you can localize to display in the user's language."]}),"\n",(0,s.jsx)(n.p,{children:"The following is an example of a localized manifest file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'{\n  "version": "1.1.1",\n  "description": "{{ description }}",\n  "proposedName": "{{ name }}",\n  "source": {\n    "shasum": "XXX",\n    "locales": [\n      "locales/da.json",\n      "locales/en.json",\n      "locales/nl.json"\n    ]\n  },\n  "initialPermissions": {\n    "snap_getLocale": {}\n  },\n  "manifestVersion": "0.1"\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["To localize your manifest file, add all available locales to the ",(0,s.jsx)(n.code,{children:"source.locales"})," section, listing\nthe locale files you created when ",(0,s.jsx)(n.a,{href:"#2-localize-the-snaps-ui",children:"localizing the Snap's UI"}),".\nThe example locale file provided in ",(0,s.jsx)(n.a,{href:"#2-localize-the-snaps-ui",children:"Step 2"})," follows MetaMask's format for\nmanifest localization."]}),"\n",(0,s.jsxs)(n.p,{children:["For each field that needs to be localized, replace its text with ",(0,s.jsx)(n.code,{children:"{{ <fieldName> }}"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["When displaying this metadata to the user, MetaMask searches for the proper locale file and replaces\nthe template string with its translation.\nIf it doesn't find the user's locale, MetaMask uses English (",(0,s.jsx)(n.code,{children:"en"}),") as the default."]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["See the ",(0,s.jsx)(n.a,{href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/localization",children:(0,s.jsx)(n.code,{children:"@metamask/localization-example-snap"})}),"\npackage for a full example of localizing a Snap."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>o});var s=a(96540);const t={},l=s.createContext(t);function i(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);