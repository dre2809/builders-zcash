// ═══════════════════════════════════════════════
// lessons-stage0.js — Stage 00: Blockchain Fundamentals
// Bitcoin/Zcash-aligned. No smart contract or EVM content.
// ═══════════════════════════════════════════════

const LESSONS_STAGE0 = {

"what-is-blockchain": {
  stage: "Stage 00 · Blockchain Fundamentals", stageColor: "var(--ink-3)",
  title: "What is a Blockchain?",
  subtitle: "A blockchain is a shared, append-only ledger maintained by thousands of independent computers. No single person owns it. No single person can change it.",
  sections: [
    { title: "A New Kind of Ledger", body: `<p>For centuries, humans have kept ledgers — records of who owns what, who sent what to whom. Banks maintain them. Governments maintain them. The problem with every traditional ledger is that it lives on a server controlled by someone, and you have to trust that someone to keep the records accurate and honest.</p>
<p>A blockchain changes this: instead of one institution maintaining one database, thousands of computers around the world each hold an identical copy. Every new transaction is broadcast to all of them simultaneously. A transaction only becomes permanent when the majority of the network agrees it's valid.</p>
<p>The result: a ledger that nobody controls but that everyone can verify — and that nobody can secretly alter.</p>` },
    { title: "Why This Matters", keypoints: [
      "No single point of failure — even if thousands of nodes go offline, the network keeps running.",
      "No single point of trust — you don't need to trust any institution; the math and the consensus enforce the rules.",
      "Transparent and auditable — anyone can verify the full history of transactions independently.",
      "Censorship-resistant — no government or corporation can unilaterally block a valid transaction.",
      "Zcash extends this with privacy: a public, verifiable ledger where transaction details are encrypted."
    ]}
  ],
  prev: null, next: "decentralized-computer"
},

"decentralized-computer": {
  stage: "Stage 00 · Blockchain Fundamentals", stageColor: "var(--ink-3)",
  title: "Decentralized Computer",
  subtitle: "Every tool is optimized for something. Blockchains trade raw performance for censorship-resistance and shared ownership.",
  sections: [
    { title: "Optimized for Different Jobs", body: `<p>A smartphone prioritizes portability. A web server prioritizes availability and speed. A blockchain is optimized for something entirely different: <strong>trustless agreement among strangers</strong>.</p>
<p>Running the same computation on thousands of computers is inherently wasteful. If Alice's bank server processes a payment, one machine does the work. If Alice sends a blockchain transaction, thousands of nodes each independently verify and record it. Throughput is lower. Cost per operation is higher. Finality takes longer.</p>
<p>What you get in return: no single entity can reverse your transaction, freeze your account, or change the rules after the fact. For payments between parties who don't trust each other — or for systems that must remain censorship-resistant — these trade-offs are absolutely worth making.</p>` },
    { title: "The Bitcoin Model", body: `<p>Bitcoin demonstrated that this design actually works at global scale. A network of thousands of volunteer nodes, maintaining a shared ledger, with no company running it — and it has operated continuously since 2009 without a single day of downtime.</p>
<p>Zcash inherits this same model: a decentralized, permissionless network of nodes that anyone can join. No bank or government can unilaterally block a Zcash transaction. Nobody can confiscate ZEC without access to your private key. That's the power of the decentralized computer.</p>` },
    { title: "What Decentralized Means in Practice", body: `<p>Decentralized doesn't mean anonymous nodes in a vacuum. It means the <em>rules</em> are enforced by software, not by people. The consensus rules — what makes a valid transaction, how new coins are issued, what the maximum supply is — are encoded in software that every node runs. Changing the rules requires convincing the majority of the network to upgrade. No CEO can change them overnight.</p>` }
  ],
  prev: "what-is-blockchain", next: "blockchain-use-cases"
},

"blockchain-use-cases": {
  stage: "Stage 00 · Blockchain Fundamentals", stageColor: "var(--ink-3)",
  title: "Blockchain Use Cases",
  subtitle: "Blockchains excel in specific situations. The key skill is knowing when decentralization actually solves a real problem — and when it just adds friction.",
  sections: [
    { title: "When Blockchains Add Real Value", body: `<p>Blockchains are the right tool when your problem involves: <strong>multiple parties who don't trust each other</strong>, <strong>a need for public verifiability</strong>, or <strong>resistance to censorship by a central authority</strong>.</p>
<p>Strong use cases: cross-border payments (no single bank controls the transfer), remittances (sending money home without losing 8–15% to intermediaries), censorship-resistant savings (storing value outside a broken financial system), supply chain provenance (multiple parties recording into a shared ledger), and digital ownership (certificates, voting records).</p>` },
    { title: "Where Blockchains Fall Short", body: `<p>For applications where you trust the operator, need high throughput, or require easy logic updates, traditional databases beat blockchains on every dimension. A ride-hailing app doesn't need a blockchain. A hospital's internal record system doesn't need a blockchain. Adding one creates cost and complexity without meaningful benefit.</p>
<p>The discipline here is honest analysis: <em>what trust assumption am I trying to eliminate?</em> If you can't answer that clearly, you probably don't need a blockchain.</p>` },
    { title: "Zcash's Core Use Case", body: `<p>Zcash is purpose-built for one thing done exceptionally well: <strong>private, digital money</strong>. Its use case is payments and value transfer where financial privacy is a requirement — not a nice-to-have.</p>
<p>This applies to individuals protecting themselves from surveillance, businesses protecting commercially sensitive payment data, journalists and activists operating under repressive governments, and anyone transacting across borders without wanting to expose their full financial history to the world.</p>` }
  ],
  prev: "decentralized-computer", next: "payments-use-case"
},

"payments-use-case": {
  stage: "Stage 00 · Blockchain Fundamentals", stageColor: "var(--ink-3)",
  title: "Payments Use Case",
  subtitle: "Payments are the most natural fit for blockchain technology. This lesson builds intuition for how a blockchain payment system works from first principles.",
  sections: [
    { title: "What a Payment System Needs", body: `<p>Any payment system needs to solve three problems: it must know who owns what (balances), enforce that you can only spend what you own (transfer rules), and record changes so they can't be disputed later (the ledger). Traditional systems solve these with centralized databases controlled by banks. Blockchain systems solve them with a shared, distributed ledger enforced by cryptography and consensus — no central database required.</p>` },
    { title: "How Blockchain Payments Work", body: `<p>When Alice sends Bob 5 ZEC, she creates a transaction that says: "debit 5 from my address, credit 5 to Bob's address." She signs it with her private key — mathematical proof that she authorized the transfer. Nodes broadcast this transaction, verify the signature, check that Alice has sufficient balance, and include it in a block. Once in the chain, the transfer is permanent.</p>
<p>No bank processed this. No payment gateway took a cut. No jurisdiction can unilaterally block it. This is the core value proposition of blockchain payments — and Bitcoin proved it works. Zcash extends it with privacy.</p>` },
    { title: "Zcash's Private Payments", body: `<p>Bitcoin payments are fully visible to anyone who looks. Your entire transaction history is public. Zcash extends the same model with a shielded pool: the amounts and parties can be hidden from the public ledger while still being cryptographically verifiable. You get the trustlessness of a blockchain with the confidentiality of a private transaction — the best of both worlds for financial privacy.</p>` }
  ],
  prev: "blockchain-use-cases", next: "account-balances"
},

"account-balances": {
  stage: "Stage 00 · Blockchain Fundamentals", stageColor: "var(--ink-3)",
  title: "Account Balances & UTXOs",
  subtitle: "How does a blockchain keep track of who owns what? Bitcoin and Zcash use the UTXO model — a powerful approach that enables both efficiency and privacy.",
  sections: [
    { title: "The UTXO Model", body: `<p>Bitcoin and Zcash use the <strong>Unspent Transaction Output (UTXO)</strong> model. Rather than storing a balance for each address, the ledger stores a set of discrete chunks of value — each one an output from a previous transaction that hasn't been spent yet.</p>
<p>Your "balance" is the sum of all UTXOs you control. When you spend, you consume one or more UTXOs entirely and create new ones — one for the recipient, one as change back to yourself. You can never spend "part" of a UTXO; you must consume the whole thing.</p>
<p>Think of it like physical cash: if you have a $20 bill and something costs $12, you hand over the $20 and receive $8 back as change. You can't tear off $12 from the bill.</p>` },
    { title: "Why UTXOs Matter for Privacy", body: `<p>The UTXO model has important privacy implications. Each transaction creates fresh outputs — a natural break in the flow of funds. Zcash's shielded pool takes this further: shielded UTXOs (called <strong>notes</strong>) are fully encrypted. A note encodes a value and a recipient but hides both from outside observers using zero-knowledge proofs.</p>
<p>This means that when you receive a shielded payment, it appears on-chain as an opaque commitment. The only person who knows they received it — and how much — is the person with the correct key to decrypt it.</p>` },
    { title: "Account Model vs UTXO", body: `<p>For comparison: Ethereum uses an <em>account model</em> where each address has a stored balance, like a bank account. Debit one account, credit another. Simpler to reason about, but every balance change is publicly linked to a persistent address — making on-chain privacy much harder to achieve. Bitcoin and Zcash's UTXO model is the stronger foundation for financial privacy.</p>` }
  ],
  prev: "payments-use-case", next: "ledger"
},

"ledger": {
  stage: "Stage 00 · Blockchain Fundamentals", stageColor: "var(--ink-3)",
  title: "The Ledger",
  subtitle: "A blockchain is an append-only ledger that everyone can verify but no one can rewrite. This structure is what gives it its trust properties.",
  sections: [
    { title: "What is a Ledger?", body: `<p>A ledger is a record of transactions. Banks have maintained ledgers for centuries. The problem with traditional ledgers is that they're controlled by a single institution you must trust to keep them accurate and unaltered.</p>
<p>A blockchain ledger eliminates that single point of trust by distributing the ledger across thousands of nodes. Every node holds a complete copy. New entries are only added when the network reaches consensus. Once written, entries are cryptographically linked to all previous entries — changing any historical record would break every subsequent block and be immediately detectable by every node on the network.</p>` },
    { title: "Append-Only by Design", body: `<p>A blockchain can only grow — it cannot be edited. Every block is permanently sealed by its hash (a cryptographic fingerprint). You can add new blocks on top, but you cannot go back and change an old one without redoing all the work that came after it. This append-only property is what makes blockchain records trustworthy: past transactions are as permanent as anything in the physical world.</p>` },
    { title: "Zcash's Encrypted Ledger", body: `<p>Most blockchains are fully transparent — anyone can read every transaction. Zcash solves this with an encrypted ledger: shielded transactions appear on-chain as opaque entries. The blockchain knows the rules were followed (no double-spends, amounts balance) but observers cannot read the details. It's an immutable public ledger that also protects financial privacy — a combination that didn't exist before Zcash.</p>` }
  ],
  prev: "account-balances", next: "hash-functions"
},

"hash-functions": {
  stage: "Stage 00 · Blockchain Fundamentals", stageColor: "var(--ink-3)",
  title: "Hash Functions",
  subtitle: "Cryptographic hash functions are the mathematical glue holding blockchains together. Every block, every transaction, every address depends on them.",
  sections: [
    { title: "What is a Hash Function?", body: `<p>A cryptographic hash function takes any input — a word, a file, an entire block of transactions — and produces a fixed-length output called a <strong>hash</strong> or <strong>digest</strong>. For example, the SHA-256 hash of "Zcash" is always the same specific 64-character string, regardless of where or when you compute it.</p>
<p>Three critical properties make hash functions useful for blockchains:</p>
<p><strong>Deterministic:</strong> the same input always produces the same output.</p>
<p><strong>One-way:</strong> given a hash, you cannot reverse-engineer the original input. The only way to find an input that produces a specific hash is to try billions of inputs — which is exactly what Bitcoin and Zcash miners do.</p>
<p><strong>Avalanche effect:</strong> changing even one character of the input completely changes the hash. "Zcash" and "zcash" produce totally different hashes. This means you can't secretly tweak a transaction and hope nobody notices — the hash will give you away.</p>` },
    { title: "How Hashes Chain Blocks Together", body: `<p>Each block in the blockchain contains the hash of the previous block in its header. This is how the "chain" part works: Block 100 contains the hash of Block 99. Block 101 contains the hash of Block 100. And so on.</p>
<p>If you try to alter a transaction in Block 99, Block 99's hash changes. But Block 100 was built using Block 99's <em>old</em> hash — so Block 100 is now invalid too. And Block 101 is invalid. Every block after the alteration breaks, and every node on the network can instantly detect the fraud. This chain of hashes is what makes blockchain history immutable.</p>` },
    { title: "Hashes in Zcash", body: `<p>Zcash uses several hash functions for different purposes. <strong>SHA-256</strong> (also used by Bitcoin) appears in Equihash mining and transaction IDs. <strong>BLAKE2b</strong> is used in the transaction digest algorithm (ZIP 244) for signing — chosen for speed and security. <strong>Pedersen hashes</strong> and <strong>Poseidon</strong> appear inside the zero-knowledge proof circuits, where hash functions must be efficiently provable. Understanding that different hash functions exist for different jobs is part of understanding Zcash's architecture.</p>` }
  ],
  prev: "ledger", next: "merkle-trees"
},

"merkle-trees": {
  stage: "Stage 00 · Blockchain Fundamentals", stageColor: "var(--ink-3)",
  title: "Merkle Trees",
  subtitle: "Merkle trees are a data structure that lets you verify a single transaction is in a block without downloading the entire block. They're essential to how Bitcoin and Zcash work.",
  sections: [
    { title: "The Problem Merkle Trees Solve", body: `<p>A Zcash block can contain hundreds of transactions. If you want to verify that a specific transaction is in a specific block, you'd normally need to download all the other transactions in that block too — just to confirm yours is there.</p>
<p>Merkle trees solve this elegantly. All transactions in a block are hashed and then paired up, with each pair hashed together, and those hashes paired and hashed again, until you reach a single hash at the top — the <strong>Merkle root</strong>. This root is stored in the block header.</p>` },
    { title: "How Merkle Proofs Work", body: `<p>To prove transaction T is in a block, you only need the hashes of T's "sibling" nodes up the tree — called a <strong>Merkle proof</strong> or <strong>proof of inclusion</strong>. A light wallet can verify your payment is confirmed using only a small number of hashes, not the entire block of transactions.</p>
<p>This is fundamental to how Zcash's light wallets work: mobile devices don't download full blocks, but they can still cryptographically verify that specific transactions are included in the chain.</p>` },
    { title: "Merkle Trees for Shielded Notes", body: `<p>Zcash uses a special <strong>note commitment tree</strong> — a Merkle tree of all shielded note commitments ever created. This tree has a fixed depth and is append-only. When you spend a shielded note, your zero-knowledge proof includes a Merkle proof showing that the note commitment exists in the tree — without revealing <em>which</em> note you're spending. This is a core component of how shielded transactions achieve privacy while remaining verifiable.</p>` }
  ],
  prev: "hash-functions", next: "signatures"
},

"signatures": {
  stage: "Stage 00 · Blockchain Fundamentals", stageColor: "var(--ink-3)",
  title: "Cryptographic Signatures",
  subtitle: "Public-key cryptography is the foundation of blockchain security. Signatures prove ownership and authorization without revealing secrets.",
  sections: [
    { title: "Public Keys, Private Keys, and Signatures", body: `<p>Every blockchain account is a <strong>keypair</strong>: a private key (secret, known only to you) and a public key (derived from the private key, safe to share). Your wallet address is derived from your public key.</p>
<p>When you send a transaction, you <strong>sign</strong> it with your private key. This produces a digital signature — mathematical proof that you authorized this specific transaction. Anyone with your public key can verify the signature is valid without learning your private key. Easy to verify, impossible to forge without the private key.</p>` },
    { title: "Why Signatures Replace Trust", body: `<p>Without signatures, anyone could create a transaction claiming to spend your funds. Signatures enforce the rule that only the private key holder can authorize a spend. When a node receives your transaction, the first thing it checks is: does this signature verify against the public key associated with this address? If not, rejected instantly — no human decision required.</p>
<p><strong>If you lose your private key, you lose access to your funds permanently.</strong> This is the price of self-custody — but also its power. Nobody can freeze your account or reset your access. The math is the authority.</p>` },
    { title: "Signatures in Zcash", body: `<p>Transparent Zcash addresses use <strong>secp256k1 ECDSA</strong> signatures — the same scheme as Bitcoin. Shielded transactions use <strong>RedJubjub</strong> — a signature scheme specifically designed to work efficiently inside zero-knowledge proof systems. The Jubjub elliptic curve was chosen because arithmetic on it is highly efficient to prove in a zk-SNARK circuit, which is crucial for Zcash's proof generation performance.</p>` }
  ],
  prev: "merkle-trees", next: "tx-ordering"
},

"tx-ordering": {
  stage: "Stage 00 · Blockchain Fundamentals", stageColor: "var(--ink-3)",
  title: "Transaction Ordering Through Consensus",
  subtitle: "When thousands of nodes receive transactions at slightly different times, how do they agree on one canonical order? This is the consensus problem — and it's what Bitcoin solved.",
  sections: [
    { title: "Why Ordering Matters", body: `<p>Imagine Alice has 10 ZEC and tries to send it to both Bob and Carol simultaneously. Both transactions are valid in isolation, but together they're a double-spend. The network needs to decide which happened "first" and reject the second — and must do so without any central authority to arbitrate.</p>
<p>Nodes around the world receive transactions at different times due to network latency. Two nodes might see the same transactions in different orders. Without a consensus mechanism, different nodes would end up with different ledgers — the chain would fragment and become worthless.</p>` },
    { title: "Proof of Work Consensus", body: `<p>Bitcoin's solution — adopted by Zcash — is <strong>Proof of Work (PoW)</strong>. Miners compete to find a number (called a <strong>nonce</strong>) that, when included in the block header and hashed, produces a hash below a target value. Finding this nonce requires enormous computation — billions of guesses per second. But verifying it is instant: just hash the header and check.</p>
<p>The miner who finds this nonce first gets to add the next block and receives the block reward. This computational cost is what makes the chain secure: rewriting history requires redoing all that computational work, which is economically prohibitive.</p>` },
    { title: "Finality and Depth", body: `<p>A transaction's security grows with the number of blocks built on top of it. One confirmation means one block has been found since your transaction. Six confirmations means six blocks — at which point reversing your transaction would require redoing six blocks' worth of proof-of-work faster than the entire honest network is adding new blocks. Practically impossible.</p>
<p>Most services require 3–10 confirmations before treating a deposit as final. Zcash's 75-second block time means 10 confirmations takes about 12.5 minutes.</p>` }
  ],
  prev: "signatures", next: "longest-chain"
},

"longest-chain": {
  stage: "Stage 00 · Blockchain Fundamentals", stageColor: "var(--ink-3)",
  title: "Longest Chain Consensus",
  subtitle: "When two valid blocks are found at the same height, how does the network converge on one? The longest chain rule is the simple elegance at the heart of Nakamoto consensus.",
  sections: [
    { title: "Forks and Fork Resolution", body: `<p>Occasionally, two miners solve the proof-of-work puzzle at almost the same time. Both broadcast valid blocks. The chain has temporarily forked — two competing versions of history exist, each valid.</p>
<p>Bitcoin and Zcash resolve this with one simple rule: <strong>follow the chain with the most cumulative proof-of-work</strong> (often called the longest chain). Miners build on whichever block they received first, and within a few blocks, one branch will have more work behind it. Nodes switch to that branch. The shorter branch is orphaned — its transactions return to the mempool.</p>` },
    { title: "Why This Works", body: `<p>The longest chain rule is self-correcting: rational miners always extend the chain with the most work because that's where the block rewards are. An attacker trying to rewrite history would need to build a longer chain than the honest network — which requires more than 50% of total hash power (a "51% attack"). As long as the majority of miners are honest, the honest chain always wins.</p>
<p>Satoshi Nakamoto's original 2008 Bitcoin whitepaper proved mathematically that this works. Zcash inherits the same security proof.</p>` },
    { title: "Equihash: Zcash's PoW Algorithm", body: `<p>Zcash uses the <strong>Equihash</strong> proof-of-work algorithm rather than Bitcoin's SHA-256d. Equihash is memory-hard — finding a valid solution requires a large amount of RAM, not just raw computation. This was designed to resist the ASIC dominance that concentrated Bitcoin mining, keeping Zcash mining more accessible. In practice, ASICs for Equihash do exist, but the algorithm still provides strong security guarantees.</p>` }
  ],
  prev: "tx-ordering", next: "tx-lifecycle"
},

"tx-lifecycle": {
  stage: "Stage 00 · Blockchain Fundamentals", stageColor: "var(--ink-3)",
  title: "Transaction Lifecycle",
  subtitle: "From the moment you hit send to permanent settlement — a transaction goes through several distinct phases. Understanding each one makes you a better developer.",
  sections: [
    { title: "Phase 1: Construction", body: `<p>A transaction begins in your wallet. The wallet selects which UTXOs (or shielded notes) to spend, constructs the outputs (recipient and change), calculates the fee, and signs everything with your private key. For shielded Zcash transactions, this phase also involves generating a zero-knowledge proof — a computationally intensive step that can take a few seconds.</p>` },
    { title: "Phase 2: Broadcast and Mempool", body: `<p>The signed transaction is broadcast to the peer-to-peer network. Each node validates it — checking signatures, ensuring inputs are unspent, verifying the ZK proof if shielded, and confirming the fee meets the minimum. If valid, the node adds it to its <strong>mempool</strong>: a staging area of pending transactions waiting to be included in a block. The transaction propagates across the network within seconds, but has zero confirmations — it's pending, not settled.</p>` },
    { title: "Phase 3: Mining and Finality", body: `<p>Miners select transactions from the mempool (typically prioritizing higher fees) and bundle them into a candidate block. Once a miner finds a valid proof-of-work nonce, they broadcast the block. Other nodes verify it and add it to their chain. Your transaction now has one confirmation.</p>
<p>With each subsequent block mined on top, the transaction becomes harder to reverse. At 3–10 confirmations, the payment is considered final for practical purposes. The Zcash network mines a new block approximately every 75 seconds.</p>` }
  ],
  prev: "longest-chain", next: "mining-and-pow"
},

"mining-and-pow": {
  stage: "Stage 00 · Blockchain Fundamentals", stageColor: "var(--ink-3)",
  title: "Mining & Proof of Work",
  subtitle: "Mining is how new blocks are created, new ZEC is issued, and the network's security is maintained. Understanding it is fundamental to understanding how Bitcoin and Zcash work.",
  sections: [
    { title: "What Miners Do", body: `<p>A miner collects pending transactions from the mempool, constructs a candidate block, and then repeatedly hashes the block header — changing a field called the <strong>nonce</strong> with each attempt — until they find a hash that meets the network's current difficulty target (a hash that starts with a certain number of zeros).</p>
<p>This is pure trial and error. There's no shortcut. A miner might try billions of nonces before finding one that works. But when they do, they broadcast the block, collect the block reward (newly issued ZEC), and the search begins again for the next block.</p>` },
    { title: "Difficulty Adjustment", body: `<p>The Zcash network adjusts mining difficulty every block to maintain a target block time of approximately 75 seconds. If blocks are being found too quickly (miners have too much hash power), difficulty increases. If too slowly, it decreases. This self-regulation means the block time stays roughly constant regardless of how much mining hardware is on the network.</p>
<p>Zcash uses the <strong>Digishield</strong> difficulty adjustment algorithm — faster and more responsive than Bitcoin's two-week adjustment period, preventing large swings in block time.</p>` },
    { title: "Block Rewards and the Dev Fund", body: `<p>When a miner finds a valid block, they receive the <strong>block reward</strong> — newly issued ZEC plus all transaction fees in the block. As of the Canopy network upgrade (2020), the block reward is split: <strong>80% goes to miners</strong>, and <strong>8% goes to ZCG grants and 12% to a community lockbox</strong> — distributed among ECC, the Zcash Foundation, and community grant recipients to fund ongoing protocol development.</p>
<p>Like Bitcoin, Zcash has a fixed supply cap of <strong>21 million ZEC</strong>, and the block reward halves approximately every four years (current reward: 1.5625 ZEC post-May 2025 halving). The halving creates predictable, diminishing supply over time.</p>` }
  ],
  prev: "tx-lifecycle", next: "sybil-protection"
},

"sybil-protection": {
  stage: "Stage 00 · Blockchain Fundamentals", stageColor: "var(--ink-3)",
  title: "Sybil Protection",
  subtitle: "What stops a single attacker from creating a million fake identities and taking over the network? Sybil protection mechanisms are the answer.",
  sections: [
    { title: "The Sybil Problem", body: `<p>In a decentralized network where anyone can join, what stops a malicious actor from creating 10,000 fake node identities and using them to manipulate decisions or flood the network with spam? If each node had equal voting power, an attacker could spin up thousands of virtual machines and dominate any outcome. The network would appear decentralized but be controlled by one entity.</p>` },
    { title: "How Proof of Work Solves It", body: `<p>Bitcoin and Zcash use Proof of Work as their Sybil protection mechanism. Your influence over the chain is proportional to the computational work you contribute — not the number of node identities you create. Spinning up 10,000 fake nodes doesn't help an attacker, because each node still needs real computational hardware to produce valid blocks.</p>
<p>To actually take over the network, an attacker would need to acquire more than 50% of the total mining hash power — an enormously expensive proposition that becomes more expensive as more honest miners join the network. This is the game theory that makes Proof of Work secure.</p>` },
    { title: "Why It Matters for Developers", body: `<p>As a developer building on Zcash, you rely on Sybil protection every time a transaction you broadcast is included in a block. The mempool also has its own Sybil protections: transactions must include a minimum fee (ZIP-317) to prevent spam attacks that would flood nodes with worthless transactions. Understanding these protections helps you reason about the security properties your application inherits from the underlying protocol.</p>` }
  ],
  prev: "mining-and-pow", next: "native-tokens"
},

"native-tokens": {
  stage: "Stage 00 · Blockchain Fundamentals", stageColor: "var(--ink-3)",
  title: "Native Tokens & ZEC",
  subtitle: "Every blockchain has a native token — the currency used to pay transaction fees, reward miners, and represent value on the chain. ZEC is Zcash's native token.",
  sections: [
    { title: "What Makes a Token 'Native'?", body: `<p>A native token is built into the blockchain protocol itself. It's what miners receive as block rewards. It's the unit used to pay transaction fees. Every node understands it natively — no additional software or contract is required to use it.</p>
<p>Unlike tokens that exist on top of a platform, native tokens can't be arbitrarily inflated or restricted by a deployer. Their supply schedule, issuance rate, and transfer rules are hardcoded into the protocol itself, enforced by every node on the network.</p>` },
    { title: "ZEC Specifics", body: `<p>ZEC is Zcash's native token, sharing many properties with Bitcoin:</p>
<p>— Fixed supply cap of <strong>21 million ZEC</strong>, the same as Bitcoin.<br>
— Issuance via block rewards, halving approximately every 4 years.<br>
— Smallest unit: the <strong>zatoshi</strong> (1 ZEC = 100,000,000 zatoshis, like Bitcoin's satoshi).<br>
— ZEC can exist as <strong>transparent ZEC</strong> (publicly visible on the ledger) or <strong>shielded ZEC</strong> (encrypted in the Orchard pool). Both are the same token — the difference is where they're stored and how they're transacted.</p>` },
    { title: "Fees and ZIP-317", body: `<p>Transaction fees in Zcash follow <strong>ZIP-317</strong>: a fixed base fee plus a per-action fee (each input note, output note, and join-split counts as an "action"). This makes fees predictable and low for typical transactions — usually well under 0.001 ZEC. Fees are paid by the transaction sender and collected by the miner who includes the transaction in a block.</p>` }
  ],
  prev: "sybil-protection", next: "bitcoin-vs-zcash"
},

"bitcoin-vs-zcash": {
  stage: "Stage 00 · Blockchain Fundamentals", stageColor: "var(--ink-3)",
  title: "Bitcoin vs Zcash",
  subtitle: "Zcash is a direct descendant of Bitcoin. Understanding exactly what Zcash kept, what it changed, and why sets the foundation for everything that follows.",
  sections: [
    { title: "What Zcash Inherited from Bitcoin", body: `<p>Zcash is a fork of the Bitcoin codebase, launched in 2016. It kept the core properties that make Bitcoin valuable:</p>
<p>— The same <strong>21 million coin supply cap</strong>.<br>
— The same <strong>UTXO model</strong> for tracking value.<br>
— The same <strong>proof-of-work consensus</strong> mechanism (with a different algorithm).<br>
— The same <strong>peer-to-peer network</strong> architecture of independent nodes.<br>
— The same <strong>append-only ledger</strong> secured by cryptographic hashes.<br>
— The same <strong>halving schedule</strong> for block rewards.</p>
<p>If you understand Bitcoin, you understand roughly 80% of Zcash's architecture already.</p>` },
    { title: "What Zcash Added", body: `<p>Zcash's single transformative addition to the Bitcoin model is <strong>zero-knowledge proofs</strong> — specifically zk-SNARKs. These allow a transaction to prove it follows all the rules (no double-spending, amounts balance, authorization is valid) without revealing the sender, receiver, or amount to anyone except the intended parties.</p>
<p>This enabled Zcash to build a <strong>shielded pool</strong> — a pool of private UTXOs (called notes) where transactions are fully encrypted on-chain but still cryptographically verified by every node. Bitcoin has never achieved this. Privacy solutions on Bitcoin (like CoinJoin) are opt-in heuristics; Zcash's privacy is a protocol-level guarantee for shielded transactions.</p>` },
    { title: "Key Technical Differences", body: `<p><strong>Block time:</strong> Zcash ~75 seconds vs Bitcoin ~10 minutes.<br>
<strong>PoW algorithm:</strong> Zcash uses Equihash (memory-hard) vs Bitcoin's SHA-256d (compute-intensive).<br>
<strong>Dev Fund:</strong> Zcash allocates 20% of block rewards to fund development; Bitcoin has no such mechanism.<br>
<strong>Address types:</strong> Zcash has transparent addresses (like Bitcoin) and shielded addresses (unique to Zcash).<br>
<strong>Transaction size:</strong> Shielded Zcash transactions are larger than Bitcoin transactions due to the zero-knowledge proofs embedded in them.<br>
<strong>Zcash does not support general-purpose smart contracts</strong> — it is a payments chain, just like Bitcoin, with privacy as its defining feature.</p>` }
  ],
  prev: "native-tokens", next: "wrapped-tokens"
},

"wrapped-tokens": {
  stage: "Stage 00 · Blockchain Fundamentals", stageColor: "var(--ink-3)",
  title: "Wrapped Tokens & Interoperability",
  subtitle: "Wrapped tokens let native coins participate in other blockchain ecosystems. Understanding them helps you understand the broader crypto landscape — and why native ZEC matters.",
  sections: [
    { title: "What is a Wrapped Token?", body: `<p>A wrapped token is a representation of a coin from one blockchain, issued on another blockchain. For example, <strong>WBTC (Wrapped Bitcoin)</strong> is an ERC-20 token on Ethereum: each WBTC is backed 1:1 by real BTC held in custody. This lets Bitcoin holders participate in Ethereum-based applications without selling their BTC.</p>
<p>Wrapped tokens are always issued by a custodian or bridge — which introduces trust and custody risk. 1 WBTC = 1 BTC only as long as the custodian holding the BTC is honest and solvent. Several high-profile bridge hacks have destroyed hundreds of millions of dollars in wrapped assets.</p>` },
    { title: "Wrapped ZEC and Privacy", body: `<p>Wrapped ZEC (wzZEC and similar) exists on various platforms, allowing ZEC to be used in DeFi applications on other chains. However, wrapped ZEC loses its privacy properties entirely: a wrapped ZEC token on another chain is a transparent token on that chain's public ledger — no shielding, no zero-knowledge proofs, no privacy.</p>
<p>For developers building privacy-preserving applications, keeping value in native shielded ZEC is important. Wrapping is useful for interoperability but comes at the direct cost of the privacy guarantees that make Zcash unique.</p>` },
    { title: "Why This Matters", body: `<p>Understanding wrapped tokens helps you understand what Zcash is and isn't. Zcash's value comes from its native shielded pool — a property that exists only on the Zcash blockchain itself. Bridges and wrapped tokens can give ZEC access to other ecosystems, but they cannot replicate the privacy. The privacy lives on the Zcash chain, and that's where you'll build as a Zcash developer.</p>` }
  ],
  prev: "bitcoin-vs-zcash", next: "token-decimals"
},

"token-decimals": {
  stage: "Stage 00 · Blockchain Fundamentals", stageColor: "var(--ink-3)",
  title: "Token Decimals & Zatoshis",
  subtitle: "Tokens don't move in fractional amounts at the protocol level — they move in integers. Decimals are a display convention that trips up more developers than you'd expect.",
  sections: [
    { title: "Why Decimals Exist", body: `<p>Blockchains store balances as unsigned integers — whole numbers. There's no concept of a fraction at the protocol level. To allow sub-unit transfers (sending 0.001 ZEC), the convention is to store values in the smallest denomination and use a decimal offset to tell wallets and UIs how many places to shift when displaying to users.</p>
<p>ZEC has 8 decimal places: <strong>1 ZEC = 100,000,000 zatoshis</strong>. This mirrors Bitcoin's satoshi denomination exactly. At the protocol level, all amounts are integer zatoshis. The "ZEC" you see displayed is just 100,000,000 divided by the raw zatoshi amount.</p>` },
    { title: "The Bug That Keeps Happening", body: `<p>Decimal errors are a common class of wallet and integration bug. If your code treats a raw amount in zatoshis as if it's already in ZEC, you'll send a million times too little — or price something at a million times too much. Always be explicit about which unit you're working in.</p>
<p><strong>Best practice:</strong> do all arithmetic in the base unit (zatoshis). Only convert to human-readable ZEC at display time. Never store "ZEC" amounts in your database if you're doing financial math — store zatoshis.</p>` },
    { title: "Zatoshis in the Zcash APIs", body: `<p>When querying balances via the Zcash RPC or Zaino APIs, amounts are typically returned in ZEC as a decimal number (e.g., <code>"balance": "1.25000000"</code>). When constructing transactions programmatically or working with the ZIP-317 fee calculation, you'll work in zatoshis. Always read the API documentation carefully to confirm which unit is expected for each field. A fee specified in ZEC where zatoshis were expected will drain your user's wallet.</p>` }
  ],
  prev: "wrapped-tokens", next: "state-machine"
},

"state-machine": {
  stage: "Stage 00 · Blockchain Fundamentals", stageColor: "var(--ink-3)",
  title: "Blockchain as a State Machine",
  subtitle: "Every blockchain is a deterministic state machine. This is the cleanest mental model for understanding how blockchains process transactions and reach agreement.",
  sections: [
    { title: "State Machines Defined", body: `<p>A state machine has a defined <strong>current state</strong> that transitions to a new state in response to inputs. A traffic light: current state is green, input is a timer, new state is yellow. The transitions are <strong>deterministic</strong> — the same input from the same state always produces the same next state.</p>
<p>A blockchain is a state machine where the <strong>state</strong> is the entire UTXO set (who owns what), the <strong>inputs</strong> are transactions, and the <strong>transition function</strong> is the consensus rules. A block is a batch of inputs that transitions the state from block N to block N+1.</p>` },
    { title: "Why Determinism is Everything", body: `<p>The critical property is <strong>determinism</strong>: given the same starting state and the same sequence of transactions, every node in the world will compute the exact same resulting state. This is what makes distributed consensus possible. Nodes don't need to coordinate on the result — they just need to agree on the sequence of inputs, and determinism guarantees they'll arrive at the same state independently.</p>
<p>This is why blockchains can't use random numbers or rely on external data sources (like the current time) without careful design — any non-determinism would cause different nodes to compute different states, breaking consensus.</p>` },
    { title: "Zcash's State", body: `<p>The Zcash state includes several components: the <strong>transparent UTXO set</strong> (like Bitcoin's), the <strong>shielded note commitment trees</strong> for each pool (Sprout, Sapling, Orchard), the <strong>nullifier sets</strong> for each pool (preventing double-spends), and chain metadata like block headers. Each block transitions this state: spending some UTXOs/notes and creating new ones. Zero-knowledge proofs ensure shielded transitions are valid without revealing the details of what changed.</p>` }
  ],
  prev: "token-decimals", next: "testnets"
},

"testnets": {
  stage: "Stage 00 · Blockchain Fundamentals", stageColor: "var(--ink-3)",
  title: "Why Testnets Exist",
  subtitle: "Mainnet mistakes are permanent and expensive. Testnets give developers a safe sandbox to build and break things before touching real funds.",
  sections: [
    { title: "What is a Testnet?", body: `<p>A testnet is a parallel blockchain that runs the same software as mainnet but uses worthless tokens. Transactions are real in the technical sense — processed by real nodes following real consensus rules — but the native token has no monetary value.</p>
<p>Zcash's testnet is called <strong>TAZ</strong> (Testnet Zcash). The TAZ token is free — get it from the Zcash testnet faucet. It behaves exactly like ZEC in every technical way, including shielded transactions and zero-knowledge proofs. The only difference: losing it costs nothing.</p>` },
    { title: "What Testnets Are Good For", body: `<p>Testnets are essential for: testing wallet integrations without risking user funds, verifying that your transaction construction is correct before sending real ZEC, testing edge cases (what happens if a fee is too low? if a note expires?), and validating that shielded transfers work end-to-end in your application before mainnet deployment.</p>
<p>The golden rule: <strong>build locally → test on testnet with TAZ → deploy to mainnet with real ZEC</strong>. Never skip the testnet step, especially for applications handling other people's funds.</p>` },
    { title: "Getting TAZ from ZecHub", body: `<p>The Zcash testnet faucet provides free TAZ for development. ZecHub's developer resources page at <code>zechub.wiki/using-zcash/testnet</code> lists current faucet URLs (they change periodically). Your wallet needs to be configured to connect to testnet nodes rather than mainnet nodes. Zebra (zebrad) supports testnet mode via the <code>network = "Testnet"</code> configuration flag. Zaino also connects to testnet Zebra nodes when configured appropriately. Note: zcashd has been deprecated — all new development and testnet work should use Zebra.</p>` }
  ],
  prev: "state-machine", next: "what-is-zcash"
}

}; // end LESSONS_STAGE0
