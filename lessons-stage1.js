// ═══════════════════════════════════════════════
// lessons-stage1.js — Stage 01: Understand Zcash
// ═══════════════════════════════════════════════

const LESSONS_STAGE1 = {

"what-is-zcash": {
  stage: "Stage 01 · Understand Zcash", stageColor: "var(--gold)",
  title: "What is Zcash?",
  subtitle: "Zcash is a privacy-focused cryptocurrency that uses zero-knowledge proofs to enable shielded transactions — payments where amounts and participants are hidden on a public, decentralized blockchain.",
  sections: [
    { title: "The Core Innovation", body: `<p>Zcash was launched in 2016 as a fork of the Bitcoin codebase with one transformative addition: <strong>zk-SNARKs</strong> — zero-knowledge succinct non-interactive arguments of knowledge. These allow a transaction to prove it follows all the rules (no double-spending, amounts balance) without revealing the sender, receiver, or amount to anyone except the intended parties.</p><p>This solves a fundamental tension in blockchain design: public ledgers are auditable but not private. Zcash's shielded pool provides both — the chain is fully verifiable, but the contents of shielded transactions are encrypted.</p>` },
    { title: "Transparent and Shielded Addresses", body: `<p>Zcash supports two address types. <strong>Transparent addresses</strong> (starting with "t1") work like Bitcoin — all transaction details are public. <strong>Shielded addresses</strong> hide sender, receiver, and amount using ZK proofs.</p><p>The latest address type is <strong>Unified Addresses (UA)</strong> — a single address that can receive funds in any pool. The Zcash community and ECC strongly encourage using shielded transactions by default.</p>` },
    { title: "Zcash vs Bitcoin", body: `<p>Zcash shares Bitcoin's fixed 21M supply cap, UTXO-based model, and proof-of-work consensus. Key differences: Zcash adds a shielded transaction pool, uses the Equihash PoW algorithm, has a Dev Fund (20% of block rewards), and follows a faster halving schedule. For a developer, the most significant difference is that building on Zcash requires understanding the shielded pool's key management and proof generation.</p>` }
  ],
  prev: "testnets", next: "privacy-vs-transparency"
},

"privacy-vs-transparency": {
  stage: "Stage 01 · Understand Zcash", stageColor: "var(--gold)",
  title: "Privacy vs Transparency",
  subtitle: "Not every transaction needs to be private. Understanding when to use transparent vs shielded addresses is one of the first decisions you'll make as a Zcash developer.",
  sections: [
    { title: "The Privacy Spectrum", body: `<p>Transparent Zcash transactions are fully public — anyone can see the sender, receiver, and amount. They're functionally similar to Bitcoin transactions. Shielded transactions encrypt all three using zero-knowledge proofs.</p><p>Between these extremes, Zcash supports hybrid options: you can shield funds (transparent → shielded), deshield them (shielded → transparent), or send fully shielded (shielded → shielded). Modern wallets use shielded addresses by default.</p>` },
    { title: "When Transparency Makes Sense", body: `<p>Some use cases genuinely benefit from transparency: <strong>exchange deposits</strong> (exchanges need to attribute incoming funds to accounts), <strong>compliance use cases</strong> (some businesses must demonstrate transaction history to regulators), and <strong>public donations</strong> (showing donors their contribution was received and used).</p><p>Viewing keys provide a middle path: a shielded transaction can be transparent to a specific auditor who holds the viewing key, while remaining opaque to the world.</p>` },
    { title: "The Anonymity Set Problem", body: `<p>Privacy is strongest when many people use shielded transactions — each shielded transaction hides in a larger crowd. If only 5% of transactions are shielded, shielded users are easy to flag simply by being unusual. This is why Zcash developers are encouraged to default to shielded: not just for their own users' privacy, but to strengthen the anonymity set for everyone on the network.</p>` }
  ],
  prev: "what-is-zcash", next: "shielded-transactions"
},

"shielded-transactions": {
  stage: "Stage 01 · Understand Zcash", stageColor: "var(--gold)",
  title: "Shielded Transactions",
  subtitle: "Shielded transactions are the core feature of Zcash. They encrypt transaction details using zero-knowledge proofs, making payments private without sacrificing verifiability.",
  sections: [
    { title: "How Shielding Works", body: `<p>When Alice sends shielded ZEC to Bob, the transaction creates an encrypted <strong>note</strong> on the blockchain. The note encodes the value and Bob's address, encrypted under Bob's public key. Alongside it, Alice includes a zero-knowledge proof demonstrating: the input notes she's spending are valid and unspent, the output notes have a valid value, and her authorization is valid — all without revealing any of those values to observers.</p><p>The blockchain records the commitment to the new note and a <strong>nullifier</strong> for each spent input (preventing double-spends) but nothing else. Chain observers see only: "a shielded transaction occurred."</p>` },
    { title: "The Three Shielded Pools", body: `<p><strong>Sprout</strong> (2016): the original Zcash privacy protocol. Now deprecated — do not use in new development.</p><p><strong>Sapling</strong> (2018): dramatically faster proof generation, enabling mobile wallets. Still active but being superseded.</p><p><strong>Orchard</strong> (2022): the current state of the art. Uses the Halo2 proving system — no trusted setup required, stronger security assumptions. All new development should target Orchard.</p>` },
    { title: "Developer Implications", body: `<p>Building with shielded transactions means: proof generation adds latency (typically 1–3 seconds), transaction construction is more complex than transparent, and users need the correct address type. Always verify which pool a recipient address corresponds to before sending. Unified Addresses abstract this — they resolve to the correct pool automatically.</p>` }
  ],
  prev: "privacy-vs-transparency", next: "viewing-keys"
},

"viewing-keys": {
  stage: "Stage 01 · Understand Zcash", stageColor: "var(--gold)",
  title: "Viewing Keys",
  subtitle: "Viewing keys let you selectively disclose transaction data to specific parties — auditors, compliance officers, or users — without giving up control of funds.",
  sections: [
    { title: "The Problem Viewing Keys Solve", body: `<p>A fully shielded payment is private from everyone — including an auditor who needs to verify it happened. For businesses operating under compliance requirements, pure opacity is not viable. Viewing keys allow a shielded address holder to share read-only access to transactions with a designated party, without giving them spending power.</p>` },
    { title: "Types of Viewing Keys", body: `<p><strong>Incoming Viewing Key (IVK):</strong> allows the holder to see all incoming transactions to an address. The auditor can see what you received but not what you sent.</p><p><strong>Full Viewing Key (FVK):</strong> allows the holder to see all incoming and outgoing transactions for an address. Provides a complete view of account activity without spending authority.</p><p><strong>Payment Disclosure:</strong> a one-time disclosure of a specific transaction to a specific party — proving that a particular payment occurred without revealing any other account activity.</p>` },
    { title: "Implementing Viewing Key Support", body: `<p>Wallets and applications that support viewing keys can export them as human-readable strings. Auditing software can import a viewing key and scan the blockchain for all transactions it can decrypt. Zingolib and the Wallet SDKs support viewing key export/import. If your application serves businesses with compliance requirements, building viewing key support is a significant differentiator.</p>` }
  ],
  prev: "shielded-transactions", next: "zk-snark-basics"
},

"zk-snark-basics": {
  stage: "Stage 01 · Understand Zcash", stageColor: "var(--gold)",
  title: "zk-SNARK Basics",
  subtitle: "Zero-knowledge proofs are the cryptographic engine powering Zcash's privacy. You don't need to implement them — but understanding what they do will make you a better Zcash developer.",
  sections: [
    { title: "What is a Zero-Knowledge Proof?", body: `<p>A zero-knowledge proof allows a <strong>prover</strong> to convince a <strong>verifier</strong> that a statement is true without revealing any information beyond the truth of the statement itself.</p><p>In Zcash: the prover (sender's wallet) convinces verifiers (all nodes) that "this transaction is valid" without revealing sender, receiver, or amounts. The network knows the rules were followed. Nobody learns what was transacted.</p>` },
    { title: "zk-SNARKs vs Halo2", body: `<p><strong>zk-SNARKs</strong> (Succinct Non-Interactive Arguments of Knowledge) are a specific flavor of ZK proof. Non-interactive means the prover sends one message. Succinct means the proof is small and fast to verify.</p><p>The original Zcash used Groth16 SNARKs, which required a <strong>trusted setup</strong> ceremony. If that ceremony was compromised, an attacker could create counterfeit ZEC undetectably.</p><p><strong>Halo2</strong> (used in Orchard) eliminates the trusted setup using a recursive proof system — stronger security assumptions, no ceremony, and recursive composability for future upgrades.</p>` },
    { title: "What This Means for Developers", body: `<p>As an application developer, you won't write ZK circuits — that's the protocol team's job. What matters to you: proof generation is CPU-intensive and adds latency (use background threads), proof verification is fast (nodes verify quickly), and proof generation requires the proving key (downloaded on first wallet sync). Design your UX to handle the 1–3 second proof generation time gracefully — show a progress indicator, not a frozen UI.</p>` }
  ],
  prev: "viewing-keys", next: "zcashd"
},

"zcashd": {
  stage: "Stage 01 · Understand Zcash", stageColor: "var(--gold)",
  title: "Legacy zcashd",
  subtitle: "zcashd was the original Zcash node implementation. Understanding its role and limitations helps you understand why the ecosystem moved to the modern Z3 stack.",
  sections: [
    { title: "What zcashd Was", body: `<p>zcashd was the reference Zcash node implementation, maintained by ECC and forked from Bitcoin Core. It handled everything: peer-to-peer networking, consensus, mempool management, block production, wallet functionality, and a JSON-RPC API. One binary did it all.</p><p>For years, zcashd was the only way to run a Zcash node. Most exchanges, explorers, and wallet backends connected to zcashd via its RPC interface.</p>` },
    { title: "Why zcashd is Being Deprecated", body: `<p>ECC announced in 2023 that zcashd would be sunset. The reasons: the codebase was large and difficult to maintain, it bundled wallet and node concerns that are better separated, and a Rust-based alternative (Zebra) had matured to production-readiness. zcashd is being phased out in favor of the <strong>Z3 stack</strong> — Zebra + Zaino + Zallet — which cleanly separates consensus, data access, and wallet concerns.</p><p>If you're maintaining existing zcashd integrations, plan your migration. New development should target the Z3 stack.</p>` },
    { title: "RPC Compatibility", body: `<p>Many existing integrations (exchanges, payment processors) use zcashd's JSON-RPC API. Zebra is implementing zcashd RPC compatibility to ease migration. Check the Zebra documentation for the current status of specific RPC methods. Some methods may need to be replaced with Zaino gRPC calls during migration.</p>` }
  ],
  prev: "zk-snark-basics", next: "zebra"
},

"zebra": {
  stage: "Stage 01 · Understand Zcash", stageColor: "var(--gold)",
  title: "Zebra",
  subtitle: "Zebra is the modern Zcash consensus node — a Rust implementation focused on correctness, performance, and clean separation of concerns.",
  sections: [
    { title: "What Zebra Does", body: `<p>Zebra is the consensus and networking layer of the Zcash node stack. It handles: peer-to-peer networking, block and transaction validation, chain state management (UTXO set, shielded note commitments, nullifier set), and mempool management. Written entirely in Rust by the Zcash Foundation, designed from the ground up for the Zcash protocol — no Bitcoin Core inheritance.</p>` },
    { title: "Running Zebra", body: `<p>Zebra is open source at <code>github.com/ZcashFoundation/zebra</code>. You run it as a daemon — it syncs the full chain, maintains chain state, and accepts API connections from Zaino or RPC clients. Minimum recommended hardware: 4+ CPU cores, 16GB RAM, 100GB+ SSD storage. The Zcash Foundation maintains Docker images and binary releases.</p>` },
    { title: "Zebra for Developers", body: `<p>Most application developers won't interact with Zebra directly — they'll use Zaino as the abstraction layer on top. But understanding Zebra helps you reason about what's happening under the hood: when you query chain data or broadcast a transaction through Zaino, Zebra is the component doing the actual protocol work. Infrastructure operators (exchanges, payment processors, explorers) configure and monitor Zebra directly.</p>` }
  ],
  prev: "zcashd", next: "zaino"
},

"zaino": {
  stage: "Stage 01 · Understand Zcash", stageColor: "var(--gold)",
  title: "Zaino",
  subtitle: "Zaino is the data access layer of the Z3 stack — a gRPC service that sits between Zebra and wallets/apps, providing a clean API for querying chain data.",
  sections: [
    { title: "Zaino's Role", body: `<p>Zebra maintains the full chain state but doesn't expose a convenient API for wallet operations. That's Zaino's job. Zaino runs alongside Zebra, indexes additional data needed by wallets (transaction scanning hints, compact blocks for light clients), and exposes a <strong>Lightwalletd-compatible gRPC API</strong> that wallets and apps use to query the chain without running a full node themselves.</p><p>Think of it as the data gateway: Zebra handles protocol correctness, Zaino handles data accessibility.</p>` },
    { title: "What Zaino Exposes", body: `<p>Zaino's API includes: <code>GetLatestBlock</code>/<code>GetBlock</code> for chain data, <code>GetTransaction</code> for transaction lookup, <code>SendTransaction</code> for broadcasting, compact block streaming for light wallet scanning, and address-based transaction queries. The API is designed to support both full-node wallets and light wallets efficiently.</p>` },
    { title: "Lightwalletd Compatibility", body: `<p>Zaino implements the <strong>lightwalletd</strong> gRPC protocol — the same API used by the Lightwalletd server since 2019. Any application already written against lightwalletd can migrate to Zaino without changing application code. If you're starting fresh, use Zaino. If you're migrating, Zaino's compatibility means a drop-in replacement.</p>` }
  ],
  prev: "zebra", next: "zallet"
},

"zallet": {
  stage: "Stage 01 · Understand Zcash", stageColor: "var(--gold)",
  title: "Zallet",
  subtitle: "Zallet is ECC's next-generation wallet implementation — modular, embeddable, and designed to be the wallet backend for the modern Zcash ecosystem.",
  sections: [
    { title: "What Zallet Is", body: `<p>Zallet is a wallet library and daemon maintained by ECC. Unlike the wallet built into zcashd, Zallet is a <strong>separate, composable component</strong>. It connects to Zaino for chain data, handles key management and address derivation, manages transaction scanning and note tracking, and constructs and signs transactions — including generating zero-knowledge proofs for shielded transactions.</p><p>Zallet can be run as a standalone daemon (with a JSON-RPC API for local use) or embedded as a library in larger applications.</p>` },
    { title: "Zallet vs Zingolib", body: `<p>Both Zallet and Zingolib are Zcash wallet libraries with different origins. <strong>Zingolib</strong> (by Zingo Labs) is a mature, actively maintained library with production deployments in Ywallet and Zingo Wallet — currently has more production mileage. <strong>Zallet</strong> is ECC's implementation, targeting the full Z3 stack and designed as the reference implementation going forward. Both are good choices for new development.</p>` },
    { title: "Unified Address Support", body: `<p>Both Zallet and Zingolib fully support <strong>Unified Addresses</strong> — the current recommended address format. UAs bundle multiple receiver types (Orchard, Sapling, transparent) into one address. When you send to a UA, the wallet automatically uses the most private pool available. As a developer, you get UA support for free — expose UA addresses to your users and let the library handle pool selection.</p>` }
  ],
  prev: "zaino", next: "nodes"
},

"nodes": {
  stage: "Stage 01 · Understand Zcash", stageColor: "var(--gold)",
  title: "Nodes & Peers",
  subtitle: "The Zcash network is a peer-to-peer network of nodes. Understanding the network topology is essential for building reliable applications.",
  sections: [
    { title: "Full Nodes vs Light Clients", body: `<p>A <strong>full node</strong> (like Zebra) downloads and validates every block and transaction. It maintains the complete chain state and can independently verify anything on the chain. Running a full node makes your application maximally trustless.</p><p>A <strong>light client</strong> (like a mobile wallet) trusts a server (like Zaino) to provide chain data. It downloads compact block data to scan for relevant transactions, but doesn't validate full block headers. Faster and cheaper to run, but introduces trust in the server.</p>` },
    { title: "Peer Discovery and Networking", body: `<p>When Zebra starts, it discovers peers through DNS seed nodes and then propagates peer addresses through the network. Nodes maintain connections to a set of peers and share blocks and transactions bidirectionally. Transaction broadcast: when your wallet submits a transaction to Zaino, Zaino forwards it to Zebra, which propagates it to all connected peers.</p>` },
    { title: "Node Health and Reliability", body: `<p>For production applications, node reliability is critical. Running your own Zebra node gives full control but requires maintenance. The tradeoff: operational simplicity (hosted Zaino) vs. full trustlessness (your own node). For high-value applications (exchanges, payment processors), always run your own node.</p>` }
  ],
  prev: "zallet", next: "mempool"
},

"mempool": {
  stage: "Stage 01 · Understand Zcash", stageColor: "var(--gold)",
  title: "Mempool",
  subtitle: "The mempool is the waiting room for unconfirmed transactions. Understanding how it works helps you build applications that handle pending transactions correctly.",
  sections: [
    { title: "What is the Mempool?", body: `<p>The mempool (memory pool) is an in-memory data structure maintained by each node. It holds valid but unconfirmed transactions waiting to be included in a block. Each node's mempool can differ slightly due to network propagation delays, but they converge over time.</p><p>When a miner creates a new block, they select transactions from their mempool (typically prioritizing higher fee rates) and include them in the block. Once confirmed, those transactions leave the mempool.</p>` },
    { title: "Mempool and Fee Market", body: `<p>The Zcash mempool is typically small compared to Bitcoin because Zcash has lower transaction volume. Fees are calculated per ZIP-317: a fixed base fee plus a per-action fee. This makes fees predictable and low for typical transactions. In periods of high activity, transactions with insufficient fees may be delayed.</p>` },
    { title: "Building Against the Mempool", body: `<p>Applications should handle the distinction between confirmed and unconfirmed transactions carefully. Show unconfirmed transactions as pending, not settled. Use Zaino's transaction streaming API to get notified of new transactions in real time. Never treat a 0-confirmation transaction as final for any value-sensitive operation.</p>` }
  ],
  prev: "nodes", next: "blocks"
},

"blocks": {
  stage: "Stage 01 · Understand Zcash", stageColor: "var(--gold)",
  title: "Blocks & Finality",
  subtitle: "Blocks are the fundamental unit of the blockchain. Understanding block structure and finality is essential for building correct payment flows.",
  sections: [
    { title: "Block Structure", body: `<p>A Zcash block contains: a <strong>block header</strong> (previous block hash, Merkle root of transactions, timestamp, difficulty target, nonce), a <strong>coinbase transaction</strong> (miner reward + Dev Fund outputs), and a list of regular transactions. Zcash blocks are produced approximately every 75 seconds — roughly 1152 blocks per day.</p>` },
    { title: "Confirmations and Finality", body: `<p>Zcash uses probabilistic finality. Standard confirmation requirements: 1 confirmation for low-value operations, 3–10 for moderate values, 20+ for high-value transactions. Zcash's 75-second block time means 10 confirmations takes ~12.5 minutes — faster than Bitcoin's equivalent wait.</p>` },
    { title: "Scanning Blocks for Wallet Data", body: `<p>Shielded wallets must scan every block to find notes addressed to them — there's no transparent index of "all transactions to this address." Zaino provides compact block streaming to make this efficient: compact blocks contain only the data needed for scanning. Wallets decrypt these locally using their keys to find notes belonging to them.</p>` }
  ],
  prev: "mempool", next: "consensus-rules"
},

"consensus-rules": {
  stage: "Stage 01 · Understand Zcash", stageColor: "var(--gold)",
  title: "Consensus Rules",
  subtitle: "Consensus rules define what makes a valid Zcash transaction or block. Violating them means rejection by the network. Knowing the rules helps you build applications that always produce valid transactions.",
  sections: [
    { title: "What Are Consensus Rules?", body: `<p>Consensus rules are the protocol-level checks that every node performs on every transaction and block it receives. Rules include: signatures must verify, notes must not be double-spent, ZK proofs must verify, transaction amounts must balance, block hash must meet difficulty target, and dozens of others.</p><p>Consensus rules are codified in the <strong>Zcash Protocol Specification</strong> — a formal document defining every rule precisely. Zebra and zcashd both implement these rules.</p>` },
    { title: "Protocol Upgrades (Network Upgrades)", body: `<p>Zcash uses periodic network upgrades (NUs) to add features and change rules. Notable upgrades: <strong>Sapling (NU2, 2018)</strong> added fast shielded transactions. <strong>Canopy (NU4, 2020)</strong> activated the Dev Fund. <strong>NU5 (2022)</strong> added Orchard and Unified Addresses. Each upgrade activates at a specific block height. Applications must handle this correctly during transition periods.</p>` },
    { title: "Fee Rules (ZIP-317)", body: `<p>Transaction fees follow <strong>ZIP-317</strong>: a base fee plus a per-action fee (each input note, output note, and join-split is an "action"). In practice, standard wallet-to-wallet transactions cost roughly 0.00001–0.0001 ZEC. Applications constructing transactions should use the ZIP-317 formula or rely on wallet libraries (Zingolib, Zallet) to calculate fees automatically.</p>` }
  ],
  prev: "blocks", next: "rpc-basics"
},

"rpc-basics": {
  stage: "Stage 01 · Understand Zcash", stageColor: "var(--gold)",
  title: "RPC Basics",
  subtitle: "JSON-RPC is the traditional interface for interacting with Zcash nodes. Understanding it lets you work with both legacy zcashd infrastructure and modern Zebra implementations.",
  sections: [
    { title: "What is JSON-RPC?", body: `<p>JSON-RPC is a lightweight remote procedure call protocol using JSON for data encoding. You send a POST request with a method name and parameters; the server responds with the result or an error. It's simple, language-agnostic, and has been the standard interface for Bitcoin and Zcash nodes since Bitcoin's earliest days.</p>` },
    { title: "Key RPC Methods", body: `<p><code>getblockchaininfo</code> — chain status, sync progress, current height.<br><code>getblock</code> — retrieve a block by height or hash.<br><code>getrawtransaction</code> — retrieve a raw transaction.<br><code>sendrawtransaction</code> — broadcast a signed transaction.<br><code>z_getbalance</code> — get shielded balance for an address.<br><code>z_sendmany</code> — construct and send a shielded transaction.<br><code>z_listreceivedbyaddress</code> — list received transactions for a shielded address.</p><p>The <code>z_</code> prefix indicates a shielded operation — Zcash extensions to the Bitcoin RPC interface.</p>` },
    { title: "Moving to gRPC", body: `<p>For new development, prefer Zaino's gRPC API over the legacy JSON-RPC interface. gRPC offers: type-safe interfaces via Protocol Buffers, streaming support (essential for wallet scanning), better performance, and cleaner error handling. JSON-RPC is still relevant for exchange integrations and infrastructure tooling where the zcashd interface is expected.</p>` }
  ],
  prev: "consensus-rules", next: "zingolib"
}

}; // end LESSONS_STAGE1
