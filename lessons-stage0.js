// ═══════════════════════════════════════════════
// lessons-stage0.js — Stage 00: Blockchain Fundamentals
// ═══════════════════════════════════════════════

const LESSONS_STAGE0 = {

"what-is-blockchain": {
  stage: "Stage 00 · Blockchain Fundamentals", stageColor: "var(--ink-3)",
  title: "What is a Blockchain?",
  subtitle: "Blockchains are a new kind of computer — one that nobody controls but everyone can use. This lesson explores what makes blockchains structurally different from everything that came before.",
  sections: [
    { title: "A New Kind of Computer", body: `<p>We interact with computers every day — smartphones, laptops, web servers. Each is designed for specific strengths. A blockchain is another kind of computer with a radically different design goal: it runs <strong>without any single owner or operator</strong>.</p><p>Instead of one machine running code and storing data, a blockchain spreads both across thousands of independent computers worldwide. No single participant controls the result. The software runs, and the data persists, because many people all agree to maintain it together.</p>` },
    { title: "Key Concepts", keypoints: [
      "Blockchains are computers owned by no single party — they run on a distributed network of independent nodes.",
      "Unlike web servers, no company can unilaterally shut down a blockchain or change its rules.",
      "Decentralized applications (dApps) run their logic on-chain, making execution verifiable and tamper-evident.",
      "Blockchains trade efficiency for trust — slower and more expensive than traditional systems, but far more resistant to manipulation.",
      "The right question is always: does this use case actually need decentralization? Not every problem does."
    ]}
  ],
  prev: null, next: "decentralized-computer"
},

"decentralized-computer": {
  stage: "Stage 00 · Blockchain Fundamentals", stageColor: "var(--ink-3)",
  title: "Decentralized Computer",
  subtitle: "Every tool is optimized for something. Blockchains trade raw performance for censorship-resistance and shared ownership. Understanding the trade-offs separates good blockchain engineers from everyone else.",
  sections: [
    { title: "Optimized for Different Jobs", body: `<p>A smartphone prioritizes portability. A gaming PC prioritizes raw compute. A web server prioritizes availability. A blockchain is optimized for something entirely different: <strong>trustless agreement among strangers</strong>. It doesn't need to be fast. It needs to be the kind of system where you don't have to know or trust anyone else to be confident your transaction is valid and permanent.</p>` },
    { title: "The Trade-offs of Decentralization", body: `<p>Running the same computation on thousands of computers is inherently wasteful. If Alice's bank server processes a payment, one machine does the work. If Alice sends a blockchain transaction, thousands of nodes each independently verify and record it. Throughput is lower. Cost per operation is higher. Finality takes longer.</p><p>What you get in return: no single entity can reverse your transaction, freeze your account, or change the rules after the fact. For payments between parties who don't trust each other — or for systems that must remain censorship-resistant — these trade-offs are worth making.</p>` },
    { title: "Why This Matters for Zcash", body: `<p>Zcash inherits all blockchain properties — plus adds private-by-default transactions via zero-knowledge proofs. The decentralized, permissionless nature of Zcash means no bank or government can unilaterally block a shielded payment. You're not just obscuring data from observers — you're operating on infrastructure that nobody can shut down.</p>` }
  ],
  prev: "what-is-blockchain", next: "decentralized-apps"
},

"decentralized-apps": {
  stage: "Stage 00 · Blockchain Fundamentals", stageColor: "var(--ink-3)",
  title: "Decentralized Applications",
  subtitle: "Traditional apps run on servers you don't control. Decentralized apps run on blockchains — their logic is public, verifiable, and unstoppable once deployed.",
  sections: [
    { title: "What Makes an App Decentralized?", body: `<p>A traditional app runs its business logic on servers owned by a company. You trust that company to execute transactions honestly and not change the rules. A decentralized application (dApp) moves that logic onto a blockchain as a <strong>smart contract</strong> — a program stored on-chain that executes automatically when its conditions are met. No company runs the servers. No single entity can modify the contract after deployment.</p>` },
    { title: "dApps vs Traditional Applications", body: `<p><strong>Traditional apps:</strong> fast, cheap, easy to update, but you trust the operator. They can change terms, freeze accounts, or go offline.</p><p><strong>dApps:</strong> slower and more expensive, but execution is verifiable and rules are enforced by code. No special trust in an operator is required.</p><p>This distinction matters most for financial applications — exchanges, lending protocols, payment systems — where the integrity of execution is the core product.</p>` },
    { title: "dApps on Zcash", body: `<p>Zcash is primarily a payments blockchain rather than a smart contract platform. Zcash wallets, payment processors, and explorer tools are all applications built on top of the chain. Their transaction validity is enforced by the Zcash protocol itself — not by any company. That's the decentralized application model at work.</p>` }
  ],
  prev: "decentralized-computer", next: "blockchain-use-cases"
},

"blockchain-use-cases": {
  stage: "Stage 00 · Blockchain Fundamentals", stageColor: "var(--ink-3)",
  title: "Blockchain Use Cases",
  subtitle: "Blockchains excel in specific situations. The key skill is knowing when decentralization actually solves a real problem — and when it just adds friction.",
  sections: [
    { title: "When Blockchains Add Real Value", body: `<p>Blockchains are the right tool when your problem involves: <strong>multiple parties who don't trust each other</strong>, <strong>a need for public verifiability</strong>, or <strong>resistance to censorship by a central authority</strong>.</p><p>Strong use cases: cross-border payments (no single bank controls the transfer), decentralized finance (lending without custodians), supply chain provenance (multiple parties recording into a shared ledger), and digital ownership (certificates, voting records).</p>` },
    { title: "Where Blockchains Fall Short", body: `<p>For applications where you trust the operator, need high throughput, or require easy logic updates, traditional databases beat blockchains on every dimension. A ride-hailing app doesn't need a blockchain. Adding one creates cost and complexity without meaningful benefit.</p><p>The discipline here is honest analysis: <em>what trust assumption am I trying to eliminate?</em> If you can't answer that clearly, you probably don't need a blockchain.</p>` },
    { title: "Zcash's Core Use Case", body: `<p>Zcash is purpose-built for one thing done exceptionally well: <strong>private, programmable money</strong>. Its use case is payments and value transfer where financial privacy is a requirement — not a nice-to-have. This applies to individuals protecting themselves from surveillance, businesses protecting commercially sensitive payment data, and anyone transacting across borders without wanting to expose their financial history.</p>` }
  ],
  prev: "decentralized-apps", next: "payments-use-case"
},

"payments-use-case": {
  stage: "Stage 00 · Blockchain Fundamentals", stageColor: "var(--ink-3)",
  title: "Payments Use Case",
  subtitle: "Payments are the most natural fit for blockchain technology. This lesson builds intuition for how a blockchain payment system works from first principles.",
  sections: [
    { title: "What a Payment System Needs", body: `<p>Any payment system needs to solve three problems: it must know who owns what (balances), enforce that you can only spend what you own (transfer rules), and record changes so they can't be disputed later (the ledger). Traditional systems solve these with centralized databases controlled by banks. Blockchain systems solve them with a shared, distributed ledger enforced by cryptography and consensus — no central database required.</p>` },
    { title: "How Blockchain Payments Work", body: `<p>When Alice sends Bob 5 ZEC, she creates a transaction that says: "debit 5 from my address, credit 5 to Bob's address." She signs it with her private key — mathematical proof that she authorized the transfer. Nodes broadcast this transaction, verify the signature, check that Alice has sufficient balance, and include it in a block. Once in the chain, the transfer is permanent.</p><p>No bank processed this. No payment gateway took a cut. No jurisdiction can unilaterally block it.</p>` },
    { title: "Zcash's Private Payments", body: `<p>The same primitives that enable simple payments are extended in Zcash to support private versions: the amounts and parties can be hidden from the public ledger while still being cryptographically verifiable. You get the trustlessness of a blockchain with the confidentiality of a private transaction.</p>` }
  ],
  prev: "blockchain-use-cases", next: "account-balances"
},

"account-balances": {
  stage: "Stage 00 · Blockchain Fundamentals", stageColor: "var(--ink-3)",
  title: "Account Balances & Transfers",
  subtitle: "How does a blockchain keep track of who owns what? Two models exist — account-based and UTXO-based — each with different implications for privacy and programmability.",
  sections: [
    { title: "Two Models for Tracking Ownership", body: `<p>The <strong>account model</strong> stores a balance for each address directly. When you transfer funds, the system debits one account and credits another — just like a bank.</p><p>The <strong>UTXO model</strong> works differently. The ledger stores a set of unspent transaction outputs — discrete chunks of value. Your "balance" is the sum of all UTXOs you control. When you spend, you consume one or more UTXOs and create new ones. Change comes back to you as a new UTXO.</p>` },
    { title: "Why UTXOs Matter for Privacy", body: `<p>The UTXO model has a privacy advantage: each spend is a fresh transaction, and with Zcash's shielded pool, UTXOs can be encrypted. Zcash uses a variation of the UTXO model for shielded transactions, called <strong>notes</strong>. A note is like an encrypted UTXO — it encodes a value and a recipient but hides both from outside observers using zero-knowledge proofs.</p>` },
    { title: "Transfers in Practice", body: `<p>To transfer value on a blockchain, you construct a transaction referencing inputs (UTXOs you own) and outputs (new UTXOs for the recipient and change). You sign it with your private key and broadcast it to the network. Nodes verify you haven't double-spent any input and that the math balances, then include your transaction in a block.</p>` }
  ],
  prev: "payments-use-case", next: "ledger"
},

"ledger": {
  stage: "Stage 00 · Blockchain Fundamentals", stageColor: "var(--ink-3)",
  title: "The Ledger",
  subtitle: "A blockchain is an append-only ledger that everyone can verify but no one can rewrite. This structure is what gives it its trust properties.",
  sections: [
    { title: "What is a Ledger?", body: `<p>A ledger is a record of transactions. Banks have maintained ledgers for centuries. The problem with traditional ledgers is that they're controlled by a single institution you must trust.</p><p>A blockchain ledger eliminates that single point of trust by distributing the ledger across thousands of nodes. Every node holds a complete copy. New entries are only added when the network reaches consensus. Once written, entries are cryptographically linked to all previous entries — changing any historical record would break every subsequent block and be immediately detectable.</p>` },
    { title: "Immutability Through Cryptography", body: `<p>Each block contains a <strong>cryptographic hash</strong> of the previous block — a mathematical fingerprint. Change even one byte of a block's data and its hash changes completely. Since each block commits to the hash of the one before it, the entire chain forms a tamper-evident structure. You cannot quietly rewrite a transaction in block 1000 without invalidating every subsequent block.</p>` },
    { title: "Zcash's Encrypted Ledger", body: `<p>Most blockchains are fully transparent — anyone can read every transaction. Zcash solves this with an encrypted ledger: shielded transactions appear on-chain as opaque entries. The blockchain knows the rules were followed (no double-spends, amounts balance) but observers cannot read the details. It's an immutable ledger that's also private — the best of both worlds.</p>` }
  ],
  prev: "account-balances", next: "signatures"
},

"signatures": {
  stage: "Stage 00 · Blockchain Fundamentals", stageColor: "var(--ink-3)",
  title: "Cryptographic Signatures",
  subtitle: "Public-key cryptography is the foundation of blockchain security. Signatures prove ownership and authorization without revealing secrets.",
  sections: [
    { title: "Public Keys, Private Keys, and Signatures", body: `<p>Every blockchain account is a <strong>keypair</strong>: a private key (secret, known only to you) and a public key (derived from the private key, safe to share). Your wallet address is derived from your public key.</p><p>When you send a transaction, you <strong>sign</strong> it with your private key. This produces a digital signature — mathematical proof that you authorized this specific transaction. Anyone with your public key can verify the signature is valid without learning your private key. Easy to verify, impossible to forge without the private key.</p>` },
    { title: "Why Signatures Matter", body: `<p>Without signatures, anyone could create a transaction claiming to spend your funds. When a node receives your transaction, the first thing it checks is: does this signature verify against the public key associated with this address? If not, rejected instantly.</p><p>If you lose your private key, you lose access to your funds permanently. This is the price of self-custody — but also its power. Nobody can freeze your account or reset your access.</p>` },
    { title: "Signatures in Zcash", body: `<p>Zcash uses the <strong>RedJubjub</strong> signature scheme for shielded transactions — designed to work efficiently inside zero-knowledge proof systems. Transparent addresses use standard <strong>secp256k1</strong> ECDSA signatures, the same scheme as Bitcoin. Understanding signatures is the prerequisite for understanding spending authorization in shielded Zcash transactions.</p>` }
  ],
  prev: "ledger", next: "tx-ordering"
},

"tx-ordering": {
  stage: "Stage 00 · Blockchain Fundamentals", stageColor: "var(--ink-3)",
  title: "Transaction Ordering Through Consensus",
  subtitle: "When thousands of nodes receive transactions at slightly different times, how do they agree on one canonical order? This is the consensus problem.",
  sections: [
    { title: "Why Ordering Matters", body: `<p>Imagine Alice has 10 ZEC and tries to send it to both Bob and Carol simultaneously. Both transactions are valid in isolation, but together they're a double-spend. The network needs to decide which happened "first" — and doing so without any central authority.</p><p>Nodes around the world receive transactions at different times due to network latency. Two nodes might see the same transactions in different orders. Without consensus, different nodes would end up with different ledgers — the chain would fragment.</p>` },
    { title: "How Consensus Solves It", body: `<p>Consensus protocols give the network a way to agree on one canonical sequence. Rather than every node deciding independently, the protocol designates a process for periodically bundling pending transactions into a block and agreeing on which block comes next.</p><p>Bitcoin and Zcash use <strong>Proof of Work</strong>, where miners compete to solve a computationally expensive puzzle. The winner adds the next block. This makes it prohibitively expensive to rewrite history — you'd need more compute than the entire honest network combined.</p>` },
    { title: "Finality and Depth", body: `<p>A transaction's security grows with the number of blocks built on top of it. At six confirmations, reversing your transaction would require re-mining six blocks faster than the entire network — practically impossible. Most services require 3–10 confirmations before treating a deposit as final.</p>` }
  ],
  prev: "signatures", next: "longest-chain"
},

"longest-chain": {
  stage: "Stage 00 · Blockchain Fundamentals", stageColor: "var(--ink-3)",
  title: "Longest Chain Consensus",
  subtitle: "When two valid blocks are found at the same height, how does the network converge on one? The longest chain rule is the simple elegance at the heart of Nakamoto consensus.",
  sections: [
    { title: "Forks and Fork Resolution", body: `<p>Occasionally, two miners solve the proof-of-work puzzle at almost the same time. Both broadcast valid blocks. The chain has temporarily forked.</p><p>Bitcoin and Zcash resolve this with one simple rule: <strong>follow the chain with the most cumulative work</strong>. Miners build on whichever block they received first, and within a few blocks, one branch will have more work behind it. Nodes switch to that branch. The shorter branch is orphaned.</p>` },
    { title: "Why This Works", body: `<p>The longest chain rule is self-correcting: rational miners always extend the chain with the most work because that's where the block rewards are. An attacker trying to rewrite history would need to build a longer chain than the honest network — which requires majority hash power. As long as more than 50% of miners are honest, the honest chain will always outpace any attack.</p>` },
    { title: "Zcash and Proof of Work", body: `<p>Zcash uses the <strong>Equihash</strong> proof-of-work algorithm — memory-hard by design to resist ASIC dominance and keep mining accessible. Miners are rewarded with newly issued ZEC plus transaction fees for each valid block they find. This creates the game-theoretic foundation that makes the protocol secure without any central authority.</p>` }
  ],
  prev: "tx-ordering", next: "tx-lifecycle"
},

"tx-lifecycle": {
  stage: "Stage 00 · Blockchain Fundamentals", stageColor: "var(--ink-3)",
  title: "Transaction Lifecycle",
  subtitle: "From the moment you hit send to permanent settlement — a transaction goes through several distinct phases. Understanding each one makes you a better developer.",
  sections: [
    { title: "Phase 1: Construction", body: `<p>A transaction begins in your wallet. The wallet selects which inputs to spend, constructs the outputs (recipient and change), calculates the fee, and signs everything with your private key. For shielded Zcash transactions, this phase also involves generating a zero-knowledge proof — a computationally intensive step that can take several seconds.</p>` },
    { title: "Phase 2: Broadcast and Mempool", body: `<p>The signed transaction is broadcast to the peer-to-peer network. Each node validates it — checking signatures, ensuring inputs are unspent, verifying the ZK proof if shielded, and confirming the fee is sufficient. If valid, the node adds it to its <strong>mempool</strong>: a staging area of pending transactions waiting to be included in a block. The transaction propagates within seconds, but has zero confirmations — pending, not settled.</p>` },
    { title: "Phase 3: Inclusion and Finality", body: `<p>Miners select transactions from the mempool (typically prioritizing higher fees) and bundle them into a block. Once a miner finds a valid proof-of-work solution, they broadcast the block. Other nodes verify and add it to their chain. Your transaction now has one confirmation.</p><p>With each subsequent block, the transaction becomes harder to reverse. Most wallets display incoming transactions as "pending" until they reach a minimum confirmation threshold. At that point, the payment is considered final for practical purposes.</p>` }
  ],
  prev: "longest-chain", next: "sybil-protection"
},

"sybil-protection": {
  stage: "Stage 00 · Blockchain Fundamentals", stageColor: "var(--ink-3)",
  title: "Sybil Protection",
  subtitle: "What stops a single attacker from creating a million fake identities and taking over the network? Sybil protection mechanisms are the answer.",
  sections: [
    { title: "The Sybil Problem", body: `<p>In a decentralized network where anyone can join, what stops a malicious actor from creating 10,000 fake node identities and using them to manipulate decisions or flood the mempool? If votes were simply counted by number of nodes, an attacker could spin up thousands of virtual machines and dominate any decision. The network would appear decentralized but be controlled by one entity.</p>` },
    { title: "Cost-Based Defenses", body: `<p>The solution is to make identities cost something that can't be faked at scale.</p><p><strong>Proof of Work:</strong> Your voting power is proportional to the computational work you contribute. Spinning up 10,000 fake identities doesn't help — each needs real compute to produce valid blocks. Zcash uses this.</p><p><strong>Proof of Stake:</strong> Your voting power is proportional to the cryptocurrency you lock up as collateral. Both make large-scale Sybil attacks economically prohibitive.</p>` },
    { title: "Why It Matters for Developers", body: `<p>As a developer building on Zcash, you rely on Sybil protection every time a transaction you broadcast is included in a block. The mempool and peer-to-peer network also have rate-limiting mechanisms to prevent spam. Understanding that these protections exist — and why — helps you reason about the security properties your application inherits from the underlying protocol.</p>` }
  ],
  prev: "tx-lifecycle", next: "smart-contracts"
},

"smart-contracts": {
  stage: "Stage 00 · Blockchain Fundamentals", stageColor: "var(--ink-3)",
  title: "Smart Contracts",
  subtitle: "Smart contracts are self-executing programs stored on a blockchain. They run exactly as coded — no intermediaries, no exceptions.",
  sections: [
    { title: "What is a Smart Contract?", body: `<p>A smart contract is code deployed on a blockchain. It has an address, can hold funds, and executes automatically when its conditions are triggered. Nobody runs the server. Nobody can alter the code once deployed. The blockchain itself enforces execution.</p><p>Classic example: an escrow contract holds Alice's payment until Bob delivers an item and an oracle confirms delivery. On delivery, funds release automatically. If no delivery happens by deadline, funds return to Alice. No escrow agent required.</p>` },
    { title: "Programmable Money", body: `<p>Smart contracts unlock programmable money — financial instruments with conditions baked in. DeFi protocols (lending, borrowing, trading) are built entirely from smart contracts. NFTs are contracts that define ownership rules.</p><p>Limitation: smart contracts on most platforms are fully transparent. Everyone can see the logic, the state, and the funds. For financial applications, this transparency is a significant privacy vulnerability.</p>` },
    { title: "Smart Contracts and Zcash", body: `<p>Zcash is primarily a payments chain — it doesn't support general-purpose contracts like Ethereum. However, Zcash does support limited programmability through transaction conditions, and more expressive programmability is on the roadmap. Building on Zcash means building payments, wallets, and integrations using the protocol's rich transaction types rather than arbitrary code.</p>` }
  ],
  prev: "sybil-protection", next: "native-tokens"
},

"native-tokens": {
  stage: "Stage 00 · Blockchain Fundamentals", stageColor: "var(--ink-3)",
  title: "Native Tokens",
  subtitle: "Every blockchain has a native token — the currency used to pay transaction fees, reward validators, and represent value on the chain. ZEC is Zcash's native token.",
  sections: [
    { title: "What Makes a Token 'Native'?", body: `<p>A native token is built into the blockchain protocol itself, not as a smart contract layered on top. It's what miners receive as block rewards and the unit used to denominate transaction fees. Unlike contract-based tokens, native tokens can't be arbitrarily inflated by a deployer — their supply and issuance schedule are enforced by the protocol itself.</p>` },
    { title: "ZEC Specifics", body: `<p>ZEC has a fixed supply cap of <strong>21 million coins</strong>, identical to Bitcoin. It's issued as a block reward that halves approximately every four years. The current block reward includes <strong>20% to the Zcash Dev Fund</strong> — funding core protocol development. ZEC can exist in two forms: <strong>transparent ZEC</strong> on the public ledger, or <strong>shielded ZEC</strong> in the private Orchard pool. Both are the same token; the difference is in how they're stored and transacted.</p>` },
    { title: "Fees and Denominations", body: `<p>ZEC is divisible to 8 decimal places. The smallest unit is called a <strong>zatoshi</strong>: 1 ZEC = 100,000,000 zatoshis. Transaction fees are denominated in zatoshis and are typically very small — Zcash ZIP-317 defines a fee calculation based on the number of logical actions in a transaction, keeping fees low and predictable for developers.</p>` }
  ],
  prev: "smart-contracts", next: "erc20-tokens"
},

"erc20-tokens": {
  stage: "Stage 00 · Blockchain Fundamentals", stageColor: "var(--ink-3)",
  title: "Fungible Token Standards",
  subtitle: "ERC-20 and similar standards define how custom tokens behave on programmable blockchains. Understanding token standards clarifies what's unique about native coins vs. contract-based tokens.",
  sections: [
    { title: "What is ERC-20?", body: `<p>ERC-20 is a standard interface for fungible tokens on Ethereum. Any token that implements this interface — transfer, approve, allowance — can be used by any wallet, exchange, or DeFi protocol that understands the standard. It's interoperability through standardization. Thousands of tokens exist as ERC-20 contracts: stablecoins, governance tokens, DeFi assets.</p>` },
    { title: "Fungible vs Non-Fungible", body: `<p><strong>Fungible tokens</strong> are interchangeable. One ZEC equals any other ZEC. Fungibility is essential for currency — you don't care which dollar bill you receive, only how many.</p><p><strong>Non-fungible tokens (NFTs)</strong> are unique. Each token has a distinct identity and may have different properties or value.</p><p>ZEC strives to be fungible. Shielded transactions improve fungibility by breaking the transaction history link that allows chain analysis to "taint" coins based on their history.</p>` },
    { title: "Token Standards and Zcash", body: `<p>Zcash doesn't currently support ERC-20-style custom tokens natively. ZEC is the only first-class asset on the Zcash chain. The concept of token standards is important context for understanding the broader ecosystem, and Zcash's future roadmap includes more expressive asset support.</p>` }
  ],
  prev: "native-tokens", next: "wrapped-tokens"
},

"wrapped-tokens": {
  stage: "Stage 00 · Blockchain Fundamentals", stageColor: "var(--ink-3)",
  title: "Wrapped Native Tokens",
  subtitle: "Wrapped tokens are a bridge mechanism — they let native coins participate in smart contract ecosystems that don't natively support them.",
  sections: [
    { title: "The Wrapping Problem", body: `<p>ETH is Ethereum's native token, but it predates the ERC-20 standard. Early DeFi contracts expected an ERC-20 interface that ETH doesn't implement. The solution: <strong>WETH (Wrapped ETH)</strong> — a contract you send ETH to, which gives you an equivalent ERC-20 token back. You can unwrap at any time. 1 WETH = 1 ETH, always. Wrapping turns a native asset into a contract-compatible form without changing its economic properties.</p>` },
    { title: "Cross-Chain Wrapping", body: `<p>The same idea extends cross-chain. <strong>Wrapped Bitcoin (WBTC)</strong> is an ERC-20 token on Ethereum, each backed 1:1 by real BTC held in custody. This lets Bitcoin holders participate in Ethereum DeFi without selling their BTC. The tradeoff: cross-chain wrapping introduces custodian risk — someone holds the underlying BTC, and that custodian could be compromised.</p>` },
    { title: "ZEC Wrapping and Privacy", body: `<p>Wrapped ZEC exists in various forms, allowing ZEC to participate in DeFi ecosystems on other chains. However, wrapped ZEC loses its privacy properties: a wrapped ZEC on Ethereum is a transparent ERC-20, not a shielded note. For developers building privacy-preserving applications, keeping value in native shielded ZEC is important. Wrapping is useful for interoperability but comes at the cost of Zcash's privacy guarantees.</p>` }
  ],
  prev: "erc20-tokens", next: "token-decimals"
},

"token-decimals": {
  stage: "Stage 00 · Blockchain Fundamentals", stageColor: "var(--ink-3)",
  title: "Token Decimals",
  subtitle: "Tokens don't move in fractional amounts at the protocol level — they move in integers. Decimals are a display convention that trips up more developers than you'd expect.",
  sections: [
    { title: "Why Decimals Exist", body: `<p>Blockchains store balances as unsigned integers — whole numbers. There's no concept of a fraction at the protocol level. To allow sub-unit transfers, the convention is to store values in the smallest denomination and use a decimal field to tell wallets and UIs how many places to shift when displaying to users.</p><p>ETH has 18 decimals: 1 ETH = 10<sup>18</sup> wei. USDC has 6 decimals. ZEC has 8 decimals: 1 ZEC = 100,000,000 zatoshis — matching Bitcoin's satoshi denominations.</p>` },
    { title: "The Bug That Keeps Happening", body: `<p>Decimal errors are a common class of wallet bug. If your code treats a raw amount (in zatoshis) as if it's already in human-readable units, you'll send a million times too little — or price something at a million times too much.</p><p><strong>Best practice:</strong> do all arithmetic in the base unit (zatoshis). Only convert to human-readable units at display time. Never store "human" amounts in your database if you're doing financial math.</p>` },
    { title: "Zatoshis in Practice", body: `<p>When querying balances via the Zcash RPC or Zaino APIs, amounts are typically returned in ZEC as a decimal number. When constructing transactions programmatically, you may work in zatoshis. Always read the API documentation carefully to confirm which unit is expected. A fee specified in ZEC where zatoshis were expected will drain your user's wallet.</p>` }
  ],
  prev: "wrapped-tokens", next: "vms-and-blockchains"
},

"vms-and-blockchains": {
  stage: "Stage 00 · Blockchain Fundamentals", stageColor: "var(--ink-3)",
  title: "Virtual Machines & Blockchains",
  subtitle: "A virtual machine is the execution engine of a blockchain. Understanding VMs clarifies what blockchains can and cannot compute, and why different chains have different capabilities.",
  sections: [
    { title: "What is a Virtual Machine?", body: `<p>A virtual machine (VM) is software that simulates a computer. It provides a sandboxed execution environment — code runs inside the VM and cannot access the host system directly. In the blockchain context, the VM defines what kind of code can run on the chain, how that code accesses state, and what operations are permitted. Smart contracts are the programs a VM runs.</p>` },
    { title: "The EVM and Beyond", body: `<p>The <strong>Ethereum Virtual Machine (EVM)</strong> is the most widely deployed blockchain VM. It's Turing-complete — it can run any computable program — and has been adopted by dozens of other chains for compatibility.</p><p>Other VMs exist: the <strong>SVM</strong> (Solana), <strong>WASM</strong>-based VMs (Polkadot, Near), and purpose-built VMs for specific applications. Each makes different tradeoffs in expressiveness, performance, and safety.</p>` },
    { title: "Zcash and the VM Question", body: `<p>Zcash does not use a general-purpose VM. Instead, it has a specialized transaction validation engine optimized for private payments — specifically, for verifying zero-knowledge proofs (Groth16 and Halo2). This specialization is what makes Zcash's cryptographic verification fast and efficient. As a Zcash developer, you're building on top of the payment protocol rather than programming a VM.</p>` }
  ],
  prev: "token-decimals", next: "state-machine"
},

"state-machine": {
  stage: "Stage 00 · Blockchain Fundamentals", stageColor: "var(--ink-3)",
  title: "What is a State Machine?",
  subtitle: "Every blockchain is, at its core, a deterministic state machine. This is the cleanest mental framework for reasoning about how blockchains work.",
  sections: [
    { title: "State Machines Defined", body: `<p>A state machine has a defined <strong>current state</strong> that transitions to a new state in response to inputs. A traffic light: current state is green, input is a timer, new state is yellow. The transitions are deterministic — the same input always produces the same next state.</p><p>A blockchain is a state machine where the <strong>state</strong> is the entire UTXO set, the <strong>inputs</strong> are transactions, and the <strong>transition function</strong> is the consensus rules. A block is a batch of inputs that transitions the state from block N to block N+1.</p>` },
    { title: "Determinism and Consensus", body: `<p>The critical property is <strong>determinism</strong>: given the same starting state and the same sequence of transactions, every node will compute the exact same resulting state. This is what makes distributed consensus possible — nodes don't need to coordinate on a result, they just need to agree on the sequence of inputs.</p><p>Any non-determinism breaks this guarantee — which is why blockchain systems go to great lengths to eliminate external dependencies.</p>` },
    { title: "Zcash as a State Machine", body: `<p>The Zcash state includes: the UTXO set for transparent transactions, the set of unspent shielded notes in each pool (Sprout, Sapling, Orchard), the nullifier set (to prevent double-spends), and chain metadata. Each block transitions this state by spending some notes and UTXOs and creating new ones. Zero-knowledge proofs ensure shielded state transitions are valid without revealing what changed.</p>` }
  ],
  prev: "vms-and-blockchains", next: "variety-of-vms"
},

"variety-of-vms": {
  stage: "Stage 00 · Blockchain Fundamentals", stageColor: "var(--ink-3)",
  title: "Variety of Virtual Machines",
  subtitle: "Not all blockchain VMs are equal. Each major VM represents different tradeoffs in programmability, performance, and the kinds of applications it enables.",
  sections: [
    { title: "EVM — The Standard", body: `<p>The <strong>Ethereum Virtual Machine</strong> is the most widely deployed and battle-tested blockchain VM. Stack-based, Turing-complete, with a massive ecosystem of tools, auditors, and existing contracts. Its dominance means EVM-compatible chains can immediately tap into Solidity/Vyper developer tooling and existing protocol code.</p>` },
    { title: "SVM, WASM, and Specialized VMs", body: `<p><strong>Solana's SVM</strong> processes transactions in parallel using an accounts model that requires declaring which accounts a transaction will access — enabling massive throughput.</p><p><strong>WASM-based VMs</strong> (WebAssembly) offer near-native execution speed and are language-agnostic (Rust, Go, C++). Used by Polkadot, Near, and others.</p><p><strong>Specialized VMs</strong> like Zcash's ZK verification engine are purpose-built for one job — verifying Halo2 proofs at scale.</p>` },
    { title: "Choosing the Right Chain", body: `<p>VM choice determines your tools, language, and runtime constraints. For private payments and ZEC-denominated applications, Zcash is the right chain. For DeFi composability or EVM familiarity, Ethereum or an EVM chain makes sense. For high-frequency trading, Solana's SVM may be appropriate. The ecosystem is diverse by design — each VM enables different application categories.</p>` }
  ],
  prev: "state-machine", next: "testnets"
},

"testnets": {
  stage: "Stage 00 · Blockchain Fundamentals", stageColor: "var(--ink-3)",
  title: "Why Testnets Exist",
  subtitle: "Mainnet mistakes are permanent and expensive. Testnets give developers a safe sandbox to build and break things before touching real funds.",
  sections: [
    { title: "What is a Testnet?", body: `<p>A testnet is a parallel blockchain that runs the same software as mainnet but uses worthless tokens. Transactions are real in the technical sense — processed by real nodes following real consensus rules — but the native token has no monetary value.</p><p>Zcash's testnet is called <strong>TAZ</strong> (Testnet Zcash). The TAZ token is free — get it from a faucet. It behaves exactly like ZEC in every technical way, including shielded transactions and zero-knowledge proofs. It just doesn't cost anything to acquire or lose.</p>` },
    { title: "What Testnets Are Good For", body: `<p>Testnets are essential for: testing wallet integrations without risking user funds, verifying that your transaction construction is correct before sending real ZEC, testing edge cases, and validating that shielded transfers work end-to-end before mainnet deployment.</p><p>General workflow: <strong>build locally → test on testnet with TAZ → deploy to mainnet with real ZEC</strong>. Never skip the testnet step, especially for applications handling other people's funds.</p>` },
    { title: "Getting TAZ", body: `<p>The Zcash testnet faucet will send you TAZ upon request — search for the current URL as it changes periodically. Your wallet needs to be configured to connect to testnet nodes. Both Zebra and zcashd support testnet mode via configuration flags. Zaino also has a testnet mode that connects to testnet Zebra nodes.</p>` }
  ],
  prev: "variety-of-vms", next: "what-is-zcash"
}

}; // end LESSONS_STAGE0
