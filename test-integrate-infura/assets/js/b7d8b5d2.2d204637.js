"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[29443],{46240:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=n(74848),a=n(28453);const s={description:"A tutorial for sending ERC-20 tokens."},i="Send an ERC-20 token",o={id:"tutorials/ethereum/send-erc-20-token-rust",title:"Send an ERC-20 token",description:"A tutorial for sending ERC-20 tokens.",source:"@site/services/tutorials/ethereum/send-erc-20-token-rust.md",sourceDirName:"tutorials/ethereum",slug:"/tutorials/ethereum/send-erc-20-token-rust",permalink:"/test-integrate-infura/services/tutorials/ethereum/send-erc-20-token-rust",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/tutorials/ethereum/send-erc-20-token-rust.md",tags:[],version:"current",frontMatter:{description:"A tutorial for sending ERC-20 tokens."},sidebar:"servicesSidebar",previous:{title:"Use web3.js",permalink:"/test-integrate-infura/services/tutorials/ethereum/send-a-transaction/use-web3.js"},next:{title:"Subscribe to pending transactions",permalink:"/test-integrate-infura/services/tutorials/ethereum/subscribe-to-pending-transactions"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Send the token",id:"send-the-token",level:2},{value:"1. Create a new project",id:"1-create-a-new-project",level:3},{value:"2. Edit the dependencies",id:"2-edit-the-dependencies",level:3},{value:"3. Copy the contract ABI",id:"3-copy-the-contract-abi",level:3},{value:"4. Update the main code",id:"4-update-the-main-code",level:3},{value:"4. Run the code",id:"4-run-the-code",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"send-an-erc-20-token",children:"Send an ERC-20 token"}),"\n",(0,r.jsxs)(t.p,{children:["In this tutorial we'll use Rust and the ",(0,r.jsx)(t.a,{href:"https://www.gakonst.com/ethers-rs/getting-started/intro.html",children:"ethers-rs library"})," to send an ERC-20 token from one address to another. This tutorial uses the Sepolia testnet and sends the ",(0,r.jsx)(t.a,{href:"https://sepolia.etherscan.io/token/0x779877a7b0d9e8603169ddbd7836e478b4624789#code",children:"Chainlink token (LINK)"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Make sure that you have test LINK in your MetaMask wallet. You can obtain test LINK for the Sepolia network using the ",(0,r.jsx)(t.a,{href:"https://faucets.chain.link/",children:"Chainlink faucet"}),". Make sure that the ",(0,r.jsx)(t.code,{children:"Ethereum Sepolia"})," network is selected on the top right of the faucet page when you connect your MetaMask wallet."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://doc.rust-lang.org/cargo/getting-started/installation.html",children:"Install Rust from The Cargo Book"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"send-the-token",children:"Send the token"}),"\n",(0,r.jsx)(t.h3,{id:"1-create-a-new-project",children:"1. Create a new project"}),"\n",(0,r.jsx)(t.p,{children:"Open a terminal and create a new project."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-Rust",children:"cargo new infura_rs\n"})}),"\n",(0,r.jsxs)(t.p,{children:["This creates the ",(0,r.jsx)(t.code,{children:"infura_rs"})," directory with the following structure:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"infura_rs\n\u251c\u2500\u2500 Cargo.toml\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 main.rs\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["Refer to the ",(0,r.jsx)(t.a,{href:"https://doc.rust-lang.org/cargo/getting-started/first-steps.html",children:"Cargo documentation"})," for more information about getting started with Cargo."]})}),"\n",(0,r.jsx)(t.h3,{id:"2-edit-the-dependencies",children:"2. Edit the dependencies"}),"\n",(0,r.jsxs)(t.p,{children:["Open ",(0,r.jsx)(t.code,{children:"Cargo.toml"})," with your preferred editor and add the following dependencies to it:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-toml",children:'[dependencies]\nethers = "2.0"\neyre = "0.6.8"\nhex = "0.4.3"\ntokio = { version = "1.28.2", features = ["full"] }\nserde_json = "1.0.96"\n'})}),"\n",(0,r.jsx)(t.h3,{id:"3-copy-the-contract-abi",children:"3. Copy the contract ABI"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Create a text file with the name ",(0,r.jsx)(t.code,{children:"ct.json"})," in the ",(0,r.jsx)(t.code,{children:"infura-rs"})," project directory. Visit the ",(0,r.jsx)(t.a,{href:"https://sepolia.etherscan.io/token/0x779877a7b0d9e8603169ddbd7836e478b4624789#code",children:"ChainLink Token site on Etherscan"})," and copy the ",(0,r.jsx)(t.code,{children:"Contract ABI"})," (you will see it in a bottom section of the page) into the ",(0,r.jsx)(t.code,{children:"ct.json"})," file."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"4-update-the-main-code",children:"4. Update the main code"}),"\n",(0,r.jsxs)(t.p,{children:["Open the Rust source ",(0,r.jsx)(t.code,{children:"src/main.rs"})," and replace its contents with the following code:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",metastring:"showLineNumbers",children:'use ethers::{\n    middleware::SignerMiddleware,\n    providers::{Http, Middleware, Provider},\n    signers::{LocalWallet, Signer},\n    types::{Address, U256},\n    contract::abigen\n};\nuse eyre::Result;\nuse std::convert::TryFrom;\nuse std::sync::Arc;\nuse serde_json::Value;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n\n    // connect to the network, don\'t forget to replace your INFURA_API_KEY\n    let provider = Provider::<Http>::try_from("https://sepolia.infura.io/v3/INFURA_API_KEY")?;\n\n    let chain_id = provider.get_chainid().await?;\n\n    let contract_address = "0x779877A7B0D9E8603169DdbD7836e478b4624789".parse::<Address>()?;\n\n    // define a `ERC20Contract` struct from the ABI\n    abigen!(ERC20Contract, "./ct.json",);\n\n    let to_address = "0xF1B792820b52e6503208CAb98ec0B7b89ac64D6A".parse::<Address>()?;\n\n    // Create the contract instance to let us call methods of the contract and let it sign transactions with the sender wallet.\n    // for simplicity replace the private key (without 0x), ofc it always recommended to load it from an .env file or external vault\n    let wallet: LocalWallet = "SIGNER_PRIVATE_KEY"\n        .parse::<LocalWallet>()?\n        .with_chain_id(chain_id.as_u64());\n\n    let signer = Arc::new(SignerMiddleware::new(provider, wallet.with_chain_id(chain_id.as_u64())));\n    let contract = ERC20Contract::new(contract_address, signer);\n\n    // Fetch the decimals used by the contract so we can compute the decimal amount to send.\n    let whole_amount: u64 = 1;\n    let decimals = contract.decimals().call().await?;\n    let decimal_amount = U256::from(whole_amount) * U256::exp10(decimals as usize);\n\n    // Transfer the desired amount of tokens to the `to_address`\n    let tx = contract.transfer(to_address, decimal_amount);\n    let pending_tx = tx.send().await?;\n    let _mined_tx = pending_tx.await?;\n\n    println!("Transaction Receipt: {}", serde_json::to_string(&_mined_tx)?);\n\n    // Extract the tx hash for printing\n    let json_str = serde_json::to_string(&_mined_tx)?;\n    let json: Value = serde_json::from_str(&json_str)?;\n\n    if let Some(transaction_hash) = json["transactionHash"].as_str() {\n        println!("\\n URL: https://sepolia.etherscan.io/tx/{}", transaction_hash);\n    } else {\n        println!("Transaction Hash not found");\n    }\n\n   Ok(())\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"Next, make the following updates to the above code:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["On line 17 replace the ",(0,r.jsx)(t.code,{children:"INFURA_API_KEY"})," with the API key of your API project from\n",(0,r.jsx)(t.a,{href:"../../dashboard/create-api.md",children:"Infura dashboard"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["On line 30 replace the ",(0,r.jsx)(t.code,{children:"SIGNER_PRIVATE_KEY"})," with the private key of your Ethereum account."]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{title:"Secure your keys",type:"tip",children:(0,r.jsxs)(t.p,{children:["To better secure your keys, follow the recommended approach described in the section ",(0,r.jsx)(t.a,{href:"/test-integrate-infura/services/tutorials/ethereum/send-a-transaction/use-web3.js#4-create-the-env-file",children:"Create the .env file"}),"."]})}),"\n",(0,r.jsx)(t.h3,{id:"4-run-the-code",children:"4. Run the code"}),"\n",(0,r.jsxs)(t.p,{children:["From the ",(0,r.jsx)(t.code,{children:"infura_rs"})," directory, run the code."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"cargo run\n"})}),"\n",(0,r.jsx)(t.p,{children:"You will see an output similar to the following."}),"\n",(0,r.jsx)(t.admonition,{title:"Use the wrap button",type:"note",children:(0,r.jsx)(t.p,{children:"Use the wrap button on the top right of the below code block window for wrapped display."})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-log",children:'Finished dev [unoptimized + debuginfo] target(s) in 0.31s\n     Running `target/debug/infura_rs`\nTransaction Receipt: {"transactionHash":"0x301ae601943c5a1822886bf36e58c289ef942ca4bb08226ea3090b685aef9c7e","transactionIndex":"0x4","blockHash":"0xba6c880b14a7927ed2b6a5ac4e434d13d051dc770fe5f68666bb4d9b9ee1faed","blockNumber":"0x3a91b7","from":"0xe33fef60722ba79989aeaa1b6e6daf7f351c0fbb","to":"0x779877a7b0d9e8603169ddbd7836e478b4624789","cumulativeGasUsed":"0xd4673","gasUsed":"0x86fe","contractAddress":null,"logs":[{"address":"0x779877a7b0d9e8603169ddbd7836e478b4624789","topics":["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef","0x000000000000000000000000e33fef60722ba79989aeaa1b6e6daf7f351c0fbb","0x000000000000000000000000f1b792820b52e6503208cab98ec0b7b89ac64d6a"],"data":"0x0000000000000000000000000000000000000000000000000de0b6b3a7640000","blockHash":"0xba6c880b14a7927ed2b6a5ac4e434d13d051dc770fe5f68666bb4d9b9ee1faed","blockNumber":"0x3a91b7","transactionHash":"0x301ae601943c5a1822886bf36e58c289ef942ca4bb08226ea3090b685aef9c7e","transactionIndex":"0x4","logIndex":"0x7","removed":false}],"status":"0x1","logsBloom":"0x00000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000040000001000000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000082000000000000000000000000000000008000000100000000000000000000000000008000000000000000000000000000000000000000000000000000","type":"0x2","effectiveGasPrice":"0xb2d05e09"}\n\n URL: https://sepolia.etherscan.io/tx/0x301ae601943c5a1822886bf36e58c289ef942ca4bb08226ea3090b685aef9c7e\n'})}),"\n",(0,r.jsx)(t.p,{children:"Visit the URL displayed at the bottom of the above terminal log to confirm the transfer of the LINK token."})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(96540);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);