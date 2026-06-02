// ═══════════════════════════════════════════════
// lessons-stage2.js — Stage 02: Build with Zcash
// ═══════════════════════════════════════════════

const LESSONS_STAGE2 = {

"zingolib": {
  stage: "Stage 02 · Build with Zcash", stageColor: "var(--blue)",
  title: "Zingolib",
  subtitle: "Zingolib is a production-ready Rust library for building Zcash wallets and payment integrations. It powers Ywallet and Zingo Wallet, and is the most battle-tested Zcash wallet library available.",
  sections: [
    { title: "What Zingolib Provides", body: `<p>Zingolib is a Rust library (with FFI bindings for other languages) that handles the full wallet stack: connecting to Zaino for chain data, scanning blocks for relevant transactions, decrypting received notes, managing spending keys and addresses (including Unified Addresses), constructing transactions with automatic fee calculation, and generating zero-knowledge proofs for shielded transactions.</p><p>You instantiate a <code>LightClient</code>, give it a Zaino server address and your wallet keys, and it handles everything else.</p>` },
    { title: "Getting Started", body: `<p>Add to Cargo.toml: <code>zingolib = "..."</code>. Create a wallet with <code>LightClient::create_from_wallet_base</code>, providing a Zaino gRPC URL and either a seed phrase (for recovery) or generating a fresh wallet. Call <code>sync()</code> to scan the chain. Use <code>do_balance()</code> to get balances and <code>do_send()</code> to construct and broadcast transactions. The library handles all ZK proof generation internally.</p><p>Bindings exist for Swift and Kotlin via the Zcash wallet SDKs — mobile developers don't need to write Rust directly.</p>` },
    { title: "Production Considerations", body: `<p>Zingolib has been in production since 2021. Key notes: initial sync from genesis takes hours (use a birthday height or checkpoint to start from a recent block), sync is memory-intensive during scanning, and proof generation is CPU-intensive on transaction send. Design your UI around async operations with progress feedback. Zingolib's error handling is explicit — treat all results carefully and expose meaningful error messages to users.</p>` }
  ],
  prev: "rpc-basics", next: "lightwallet-protocol"
},

"lightwallet-protocol": {
  stage: "Stage 02 · Build with Zcash", stageColor: "var(--blue)",
  title: "Lightwallet Protocol",
  subtitle: "The lightwallet protocol defines how mobile and light clients scan the Zcash blockchain without running a full node — the foundation of every modern Zcash mobile wallet.",
  sections: [
    { title: "Why Light Wallets Need a Protocol", body: `<p>Running a full Zcash node requires ~100GB of storage and constant bandwidth. Mobile devices can't do this. Instead, light wallets download <strong>compact blocks</strong> — stripped-down versions of blocks containing only the data needed for scanning — and scan them locally using their keys.</p><p>The lightwallet protocol defines this data format and the gRPC API that servers (Zaino) expose for delivering compact blocks to light clients.</p>` },
    { title: "Compact Block Scanning", body: `<p>For each compact block, the wallet tries to decrypt each note ciphertext using its incoming viewing key. If decryption succeeds, the note belongs to this wallet. This process is called <strong>trial decryption</strong> — you try every note in every block. It's inherently parallel and has been heavily optimized in Zingolib and the wallet SDKs. On modern mobile hardware, scanning can process hundreds of blocks per second.</p>` },
    { title: "Security Model of Light Wallets", body: `<p>Light wallets trust the Zaino server to provide correct compact blocks. A malicious server could: withhold blocks (causing the wallet to miss incoming payments), or lie about transaction confirmation status. For high-value use cases, running your own Zebra+Zaino stack is the only fully trustless option.</p>` }
  ],
  prev: "zingolib", next: "json-rpc"
},

"json-rpc": {
  stage: "Stage 02 · Build with Zcash", stageColor: "var(--blue)",
  title: "JSON-RPC in Depth",
  subtitle: "Building integrations against the Zcash JSON-RPC API — the practical guide for exchange backends, payment processors, and infrastructure tools.",
  sections: [
    { title: "Connecting and Authentication", body: `<p>Zcash node RPC is exposed on a local port (default 8232 for mainnet, 18232 for testnet). Authentication uses HTTP Basic Auth with credentials from the node config file. Never expose the RPC port publicly without a firewall.</p><p>Example request: <code>curl -u user:pass -d '{"method":"getblockchaininfo","params":[]}' http://localhost:8232</code>. Most language ecosystems have libraries that wrap this for you.</p>` },
    { title: "Handling Async Operations", body: `<p>Some RPC operations are synchronous (block queries, balance checks). Others are long-running: <code>z_sendmany</code> may take several seconds due to proof generation. zcashd handles this with async operation IDs — <code>z_sendmany</code> returns an opid, and you poll <code>z_getoperationstatus</code> until completion. Zebra's RPC implementation may handle these differently; check current documentation for the specific node version you're integrating with.</p>` },
    { title: "Common Integration Patterns", body: `<p><strong>Exchange deposit detection:</strong> poll <code>z_listreceivedbyaddress</code> or scan via compact blocks. Use memo fields to identify which customer a deposit belongs to.</p><p><strong>Withdrawal processing:</strong> construct via <code>z_sendmany</code>. Always implement idempotency — if a send fails midway, check if the transaction was actually broadcast before retrying.</p><p><strong>Balance accounting:</strong> distinguish between confirmed (6+ confirmations) and unconfirmed balances. Never credit user accounts for unconfirmed deposits.</p>` }
  ],
  prev: "lightwallet-protocol", next: "zaino-apis"
},

"zaino-apis": {
  stage: "Stage 02 · Build with Zcash", stageColor: "var(--blue)",
  title: "Zaino APIs",
  subtitle: "Zaino's gRPC API is the modern way to interact with the Zcash chain. Type-safe, streaming-capable, and optimized for wallet and application use cases.",
  sections: [
    { title: "gRPC and Protocol Buffers", body: `<p>Zaino uses <strong>gRPC</strong> with Protocol Buffer-defined interfaces. This means you get strongly-typed request/response schemas, auto-generated client code in any language, bidirectional streaming, and better error types than JSON-RPC. The <code>.proto</code> files defining Zaino's API are in the Zaino repository.</p><p>To generate client code: download the proto files, run the appropriate language's protoc plugin (grpc-tools for Node.js, tonic for Rust), and you have a fully typed client library.</p>` },
    { title: "Key API Methods", body: `<p><code>GetLatestBlock</code> — current chain tip height and hash.<br><code>GetBlock</code> — full block data by height or hash.<br><code>GetTransaction</code> — transaction by txid.<br><code>GetCompactBlocks</code> — streaming compact blocks for wallet scanning.<br><code>GetSubtreeRoots</code> — Merkle tree data for Orchard note commitment tree.<br><code>SendTransaction</code> — broadcast a signed raw transaction.<br><code>GetAddressUtxos</code> — UTXOs for a transparent address.</p>` },
    { title: "Streaming in Practice", body: `<p>The streaming RPCs are what make Zaino powerful for wallets. <code>GetCompactBlocks</code> opens a persistent stream — Zaino pushes new compact blocks as they're mined. Your wallet processes them in real time without polling. When syncing from scratch, you request blocks from your wallet birthday and stream forward. After catching up, you subscribe to new blocks. This pattern is used by all production Zcash light wallets.</p>` }
  ],
  prev: "json-rpc", next: "wallet-sdks"
},

"wallet-sdks": {
  stage: "Stage 02 · Build with Zcash", stageColor: "var(--blue)",
  title: "Wallet SDKs",
  subtitle: "ECC's mobile wallet SDKs wrap Zingolib in Swift and Kotlin, making it easy to build production-quality Zcash wallets for iOS and Android.",
  sections: [
    { title: "iOS SDK", body: `<p>The <strong>Zcash Swift Wallet SDK</strong> (<code>github.com/zcash/ZcashLightClientKit</code>) provides a Swift package for building iOS Zcash wallets. Key types: <code>SDKSynchronizer</code> (manages sync), <code>DerivationTool</code> (key derivation and address generation), <code>Zatoshi</code> (type-safe amount handling).</p><p>The SDK handles: chain scanning, transaction construction, proof generation (in background threads), key derivation, and UA support. You provide the Zaino server URL and the user's seed phrase; the SDK handles everything else.</p>` },
    { title: "Android SDK", body: `<p>The <strong>Zcash Android SDK</strong> (<code>github.com/zcash/zcash-android-wallet-sdk</code>) mirrors the iOS SDK in Kotlin with coroutines for async operations. Same architecture: <code>Synchronizer</code> manages chain sync, typed amounts prevent decimal errors, full Orchard and Unified Address support. Targets modern Android (API 26+) and uses background workers for CPU-intensive operations like proof generation.</p>` },
    { title: "SDK Best Practices", body: `<p>Both SDKs are production-ready and used in ECC's own wallets (Zashi). Key practices: always use a <strong>wallet birthday height</strong> when restoring from seed. Handle sync state explicitly in your UI (scanning, synced, error). Never block the main thread during proof generation. Store seeds securely using the platform's secure enclave / keychain. Implement proper backup and recovery flows — without seed backup, users can permanently lose funds.</p>` }
  ],
  prev: "zaino-apis", next: "wallet-development"
},

"wallet-development": {
  stage: "Stage 02 · Build with Zcash", stageColor: "var(--blue)",
  title: "Wallet Development",
  subtitle: "Building a Zcash wallet is more complex than most payment integrations. This lesson covers the architecture decisions and UX considerations that separate good wallets from bad ones.",
  sections: [
    { title: "Wallet Architecture", body: `<p>A Zcash wallet has three layers: <strong>key management</strong> (seed phrase, key derivation, address generation), <strong>chain scanning</strong> (finding notes addressed to the user's keys), and <strong>transaction construction</strong> (building, signing, proving, and broadcasting).</p><p>Seed phrases follow BIP-39. Keys are derived using ZIP-32 for shielded keys and BIP-44 for transparent keys. Always derive keys deterministically from the seed.</p>` },
    { title: "The Sync Problem", body: `<p>Unlike transparent wallets, shielded wallets must scan every block to find their notes. Solutions to the initial sync problem: use a wallet birthday (start scanning from the date of wallet creation, not genesis), use checkpoints (pre-validated chain data to skip trusted ranges), and show users sync progress explicitly.</p><p>After the initial sync, only new blocks need to be scanned — typically a few blocks per minute. Subsequent app opens sync in seconds.</p>` },
    { title: "Security Critical Paths", body: `<p>Key security requirements: seed phrases must be stored encrypted using the platform's hardware security module. Never log keys, addresses, or transaction data to crash reporters or analytics. Implement proper screenshot prevention on seed phrase display screens. Require authentication (biometric or PIN) before any spending operation. The worst outcome in wallet development is a user losing funds due to a security bug — design defensively.</p>` }
  ],
  prev: "wallet-sdks", next: "payment-integrations"
},

"payment-integrations": {
  stage: "Stage 02 · Build with Zcash", stageColor: "var(--blue)",
  title: "Payment Integrations",
  subtitle: "Accepting ZEC payments in an application or e-commerce system — the practical patterns for reliable payment detection and confirmation.",
  sections: [
    { title: "Payment Detection Approaches", body: `<p>Three approaches to detecting incoming ZEC payments:</p><p><strong>1. Address monitoring via RPC:</strong> generate a unique address per customer, poll <code>z_listreceivedbyaddress</code> periodically. Simple but polling-based.</p><p><strong>2. Compact block scanning:</strong> run a Zaino-connected scanning service that watches for notes to your address set. Event-driven, scalable, supports shielded addresses. Required for high-volume systems.</p><p><strong>3. Memo-based identification:</strong> publish one payment address, require customers to include their order ID in the transaction memo field. Simple for users, but depends on customers correctly including memos.</p>` },
    { title: "Confirmation Policies", body: `<p>Choose your confirmation depth based on value and risk tolerance:</p><p><strong>0 confirmations:</strong> only for very low-value, high-trust scenarios.<br><strong>3 confirmations (~3.75 min):</strong> appropriate for most e-commerce.<br><strong>10 confirmations (~12.5 min):</strong> conservative, used by most exchanges.<br><strong>20+ confirmations:</strong> high-value transactions.</p>` },
    { title: "Handling Edge Cases", body: `<p>Decide upfront how your system handles edge cases: what if a customer sends the wrong amount? For shielded transactions, amounts are hidden on-chain — your system sees the decrypted amount after scanning. Build your payment matching logic to handle dust, overpayments, and underpayments gracefully. Always give users a clear view of their payment history and any outstanding amounts.</p>` }
  ],
  prev: "wallet-development", next: "shielded-tx-flows"
},

"shielded-tx-flows": {
  stage: "Stage 02 · Build with Zcash", stageColor: "var(--blue)",
  title: "Shielded Transaction Flows",
  subtitle: "The step-by-step flow of a shielded Zcash transaction — from note selection through proof generation, broadcasting, and confirmation.",
  sections: [
    { title: "Step 1: Note Selection", body: `<p>The wallet selects which unspent notes to use as inputs. The note selection algorithm aims to minimize transaction size (and therefore fees) while covering the send amount plus fee. Zingolib and the wallet SDKs implement note selection automatically. Notes can only be spent once; the wallet may need multiple notes to cover large amounts; and leaving small change notes creates "dust" that's expensive to spend later.</p>` },
    { title: "Step 2: Construction and Proof Generation", body: `<p>The wallet constructs the transaction in memory: it creates output notes for the recipient and change, computes the binding signature data, and generates the zero-knowledge proof for each shielded component. Proof generation uses the Orchard proving key and typically takes 1–3 seconds per shielded input/output on modern hardware.</p><p>The resulting transaction is a serialized blob including encrypted note ciphertexts, ZK proofs, signatures, and transparent components if any.</p>` },
    { title: "Step 3: Broadcast and Confirmation", body: `<p>The signed transaction is submitted to Zaino via <code>SendTransaction</code>, which forwards it to Zebra's mempool. Zebra validates the transaction (verifying all proofs and signatures — milliseconds) and propagates it to the peer-to-peer network. The wallet monitors for inclusion in a block. On confirmation, the spent input notes are marked as spent and new output notes become available.</p>` }
  ],
  prev: "payment-integrations", next: "merchant-tools"
},

"merchant-tools": {
  stage: "Stage 02 · Build with Zcash", stageColor: "var(--blue)",
  title: "Merchant Tools",
  subtitle: "Building checkout experiences that accept ZEC — from payment request generation to confirmation UX.",
  sections: [
    { title: "Payment Requests (ZIP-321)", body: `<p><strong>ZIP-321</strong> defines the Zcash payment request URI format: <code>zcash:&lt;address&gt;?amount=1.5&amp;memo=&lt;base64&gt;&amp;label=My+Store</code>. These URIs encode the recipient address, amount, and optional memo in a standardized format that any Zcash wallet can parse. Encode payment requests as QR codes for in-person scenarios or display them as clickable links in online checkout flows.</p><p>Using ZIP-321 URIs is strongly preferred over asking users to manually enter address and amount — it eliminates copy-paste errors.</p>` },
    { title: "Checkout Flow Design", body: `<p>A well-designed ZEC checkout flow: generate a unique address (or use memo-based order IDs with one address), display a ZIP-321 QR code and the amount due, show a payment countdown timer if appropriate, poll for payment confirmation in the background, and redirect to success on sufficient confirmations.</p><p>Set user expectations appropriately — a spinner labeled "Generating privacy proof…" is better than an unexplained freeze on the user's device.</p>` },
    { title: "Refunds and Edge Cases", body: `<p>Handling refunds for shielded payments requires storing the sender's address at checkout time (if they're using a Unified Address you can parse). For fully shielded payments where you don't have the sender's address, consider offering store credit as the refund mechanism. Define your refund policy clearly before launch.</p>` }
  ],
  prev: "shielded-tx-flows", next: "privacy-ux"
},

"privacy-ux": {
  stage: "Stage 02 · Build with Zcash", stageColor: "var(--blue)",
  title: "Privacy-Preserving UX",
  subtitle: "Designing user experiences that protect privacy without confusing users — the design principles that make Zcash applications trustworthy.",
  sections: [
    { title: "Default to Shielded", body: `<p>The most impactful design decision: make shielded the default. When a user creates a new wallet, show them a Unified Address. When they send, default to the most private pool available. Many users won't understand the difference — don't ask them to choose unless necessary. The application should make the private choice automatic.</p><p>If you must support transparent addresses (for exchange compatibility), label them clearly as "less private" and explain why.</p>` },
    { title: "What to Show and Not Show", body: `<p><strong>Show users:</strong> their balance, transaction history (decrypted), and sync status.</p><p><strong>Don't log externally:</strong> keys, addresses, or transaction data to analytics services.</p><p><strong>Avoid:</strong> displaying transaction IDs without explaining they're public identifiers, or sharing any user data with third-party services without explicit consent.</p>` },
    { title: "Memo Fields as a Privacy Risk", body: `<p>Zcash memos travel encrypted on-chain, readable only by the recipient (and anyone with the viewing key). But they're a privacy risk in your application layer: if your app logs memos, displays them in unencrypted backups, or syncs them to cloud services, you're leaking private transaction metadata. Treat memo contents with the same sensitivity as financial data.</p>` }
  ],
  prev: "merchant-tools", next: "run-zebra"
},

"run-zebra": {
  stage: "Stage 02 · Build with Zcash", stageColor: "var(--blue)",
  title: "Run Zebra",
  subtitle: "Setting up a production Zebra node — the practical guide to syncing, configuring, and operating the modern Zcash consensus node.",
  sections: [
    { title: "Installation", body: `<p>Install via Cargo: <code>cargo install --locked zebrad</code>, or download a pre-built binary from the GitHub releases page. Docker images are available: <code>docker pull zfnd/zebra</code>.</p><p>Minimum production hardware: 4 CPU cores, 16GB RAM, 200GB NVMe SSD (SSD is important — spinning disk is too slow for initial sync). A stable internet connection with at least 10Mbps is required for peer connectivity.</p>` },
    { title: "Configuration", body: `<p>Zebra is configured via a TOML file (<code>zebrad.toml</code>). Key settings: <code>[network] network = "Mainnet"</code>, <code>[state] cache_dir = "/path/to/data"</code>, <code>[rpc] listen_addr = "127.0.0.1:8232"</code> (keep RPC local), and <code>[grpc] listen_addr = "127.0.0.1:50051"</code> for Zaino connectivity.</p><p>Run with: <code>zebrad --config zebrad.toml start</code>. Initial sync takes 6–12 hours on good hardware.</p>` },
    { title: "Monitoring and Operations", body: `<p>Zebra exposes Prometheus metrics at <code>/metrics</code>. Key metrics: <code>zebrad_state_chain_tip_height</code> (current chain tip), <code>zebrad_network_peers</code> (peer count), and <code>zebrad_mempool_size</code>. Set up alerts for: tip height falling behind (node stalling), peer count below 8 (connectivity issue), and disk space below 20% free. Run Zebra as a systemd service for automatic restart on failure.</p>` }
  ],
  prev: "privacy-ux", next: "connect-zaino"
},

"connect-zaino": {
  stage: "Stage 02 · Build with Zcash", stageColor: "var(--blue)",
  title: "Connect to Zaino",
  subtitle: "Deploying and connecting Zaino — the data access layer that your wallets and applications will talk to.",
  sections: [
    { title: "Deploying Zaino", body: `<p>Zaino is deployed alongside Zebra. Install: <code>cargo install zaino</code> or use the Docker image. Configure Zaino to connect to your Zebra node's gRPC port. Zaino's config specifies: <code>zebra_addr</code> (your Zebra gRPC address), <code>listen_addr</code> (where Zaino exposes its gRPC API), and optionally TLS certificates for secure client connections.</p><p>Start Zaino after Zebra is synced. Zaino reads Zebra's chain state and builds its indexes — takes a few minutes on first start.</p>` },
    { title: "Connecting Your Application", body: `<p>Use the generated gRPC client for your language. The Zaino server address is typically <code>localhost:50051</code> for local development. For production, expose Zaino behind a TLS proxy (nginx, envoy) with proper certificate management. If you're supporting mobile clients (iOS/Android SDKs), you'll need a publicly accessible Zaino endpoint with TLS — mobile apps can't connect to insecure gRPC.</p>` },
    { title: "Using Hosted Zaino", body: `<p>Community-operated Zaino instances are available for development and testing — check the Zcash community forums and ECC developer documentation for current public endpoints. For production applications with real user funds, running your own Zebra+Zaino stack is strongly recommended. You want full control and reliability guarantees that community nodes don't provide.</p>` }
  ],
  prev: "run-zebra", next: "query-chain"
},

"query-chain": {
  stage: "Stage 02 · Build with Zcash", stageColor: "var(--blue)",
  title: "Query Chain Data",
  subtitle: "Practical patterns for reading blockchain data through Zaino — blocks, transactions, balances, and streaming updates.",
  sections: [
    { title: "Querying Blocks and Transactions", body: `<p>Use <code>GetLatestBlock</code> to get the current chain tip. Use <code>GetBlock</code> with a height or hash to retrieve a specific block. Use <code>GetTransaction</code> with a txid to look up a specific transaction. These are standard request-response RPCs — good for building block explorers, verifying specific transactions, or checking chain status.</p>` },
    { title: "Scanning for Wallet Transactions", body: `<p>For wallet applications, use <code>GetCompactBlocks</code> — a server-streaming RPC. Open the stream starting from your wallet birthday height (or the last block you processed), and Zaino will push compact blocks forward. Process each block: try to decrypt each note with your keys. Notes that decrypt successfully belong to your wallet.</p>` },
    { title: "Transparent Address Queries", body: `<p>For transparent address operations (exchange deposit addresses, legacy compatibility), use <code>GetAddressUtxos</code> to find unspent outputs for a set of addresses. Note: querying by transparent address reveals which addresses you're interested in to the Zaino operator — another reason to prefer shielded transactions for privacy-sensitive applications.</p>` }
  ],
  prev: "connect-zaino", next: "broadcast-tx"
},

"broadcast-tx": {
  stage: "Stage 02 · Build with Zcash", stageColor: "var(--blue)",
  title: "Broadcast Transactions",
  subtitle: "The final step: sending your constructed, signed transaction to the network and monitoring for confirmation.",
  sections: [
    { title: "Using SendTransaction", body: `<p>Call Zaino's <code>SendTransaction</code> RPC with the serialized, signed transaction bytes. Zaino forwards it to Zebra's mempool. Zebra validates the transaction (milliseconds) and propagates it to peers. If invalid, you get an error with the rejection reason.</p><p>Common rejection reasons: fee too low, input notes already spent (double-spend attempt), invalid proof, or transaction version not supported. Handle them distinctly in your application.</p>` },
    { title: "Idempotency and Retry Logic", body: `<p>Network errors can leave you uncertain: was the transaction successfully submitted? Since a valid Zcash transaction has a deterministic txid, you can safely retry submission — if the transaction is already in the mempool or chain, the node will respond accordingly. Store the txid immediately after constructing the transaction so you can check its status even if the submission call fails.</p>` },
    { title: "Monitoring Confirmation", body: `<p>After broadcasting, monitor for confirmation by watching new compact blocks in your scan stream. When you see a block containing your transaction's nullifiers, the transaction is included. Increment your confirmation count with each subsequent block. Give users clear feedback: "Transaction submitted," "1 of 3 confirmations," "Confirmed" — not a binary pending/done.</p>` }
  ],
  prev: "query-chain", next: "project-wallet-dashboard"
},

"project-wallet-dashboard": {
  stage: "Stage 02 · Build with Zcash", stageColor: "var(--blue)",
  title: "Project: Wallet Dashboard",
  subtitle: "Build a read-only wallet dashboard that displays balances, transaction history, and sync status for a Zcash address — your first full integration with the Z3 stack.",
  sections: [
    { title: "What You'll Build", body: `<p>A web or desktop application that: accepts a Unified Address or viewing key, connects to Zaino for chain data, scans blocks for relevant transactions, displays the address's balance (shielded and transparent), shows a transaction history timeline with amounts and memos, and shows live sync progress. Read-only — no spending functionality required.</p>` },
    { title: "Technical Requirements", keypoints: [
      "Connect to a Zaino gRPC endpoint (local testnet for development).",
      "Accept a Unified Address or Full Viewing Key as input.",
      "Implement compact block scanning from wallet birthday height.",
      "Decrypt incoming notes and display confirmed balance.",
      "Show transaction history: date, amount, memo, confirmation count.",
      "Display sync progress as a percentage or block count.",
      "Handle errors gracefully: connection failures, invalid keys."
    ]},
    { title: "Suggested Stack", body: `<p>Rust + Zingolib for the core scanning logic, with a simple web frontend or native desktop UI (Tauri is a natural fit for Rust backends). Alternatively, use the TypeScript/JavaScript gRPC client and implement scanning in Node.js — less cryptographic power but faster iteration for prototyping. Start with testnet (TAZ tokens) before connecting to mainnet.</p>` }
  ],
  prev: "broadcast-tx", next: "project-payment-gateway"
},

"project-payment-gateway": {
  stage: "Stage 02 · Build with Zcash", stageColor: "var(--blue)",
  title: "Project: Payment Gateway",
  subtitle: "Build a ZEC payment gateway — a backend service that generates payment addresses, detects incoming payments, and emits webhooks on confirmation.",
  sections: [
    { title: "What You'll Build", body: `<p>A backend service with: an API endpoint to create payment requests (returns a ZIP-321 URI and QR code), a background service that scans for incoming payments on generated addresses, webhook delivery when payments reach confirmation threshold, and a simple admin dashboard showing payment status. This is the core of any ZEC e-commerce integration.</p>` },
    { title: "Technical Requirements", keypoints: [
      "Generate unique addresses (or memo codes) per payment request.",
      "Persist payment requests with expected amount, customer ID, expiry.",
      "Run a background Zaino scanner that watches for incoming transactions.",
      "Match detected transactions to pending payment requests by address and amount.",
      "Emit webhook when payment reaches required confirmation depth.",
      "Handle expired and overpaid requests explicitly.",
      "Expose a status API for polling (for clients that can't receive webhooks)."
    ]},
    { title: "Extension Challenges", body: `<p>Once the basic gateway works, extend it: add support for partial payments (partial credit toward order), add refund support using stored sender addresses, build a simple checkout page UI with a QR code and countdown timer, and add testnet/mainnet switching. Document your API — this project structure is directly reusable for real ZEC payment integrations.</p>` }
  ],
  prev: "project-wallet-dashboard", next: "project-tx-monitor"
},

"project-tx-monitor": {
  stage: "Stage 02 · Build with Zcash", stageColor: "var(--blue)",
  title: "Project: Transaction Monitor",
  subtitle: "Build a live Zcash transaction monitor — a real-time dashboard showing mempool activity, new blocks, and chain statistics.",
  sections: [
    { title: "What You'll Build", body: `<p>A real-time web dashboard that shows: live transparent mempool transactions as they arrive, new blocks as they're mined (block height, tx count, miner fee collected), chain statistics (blocks per hour, average block time, mempool size over time), and shielded transaction counts (without revealing private details — just counts and sizes).</p>` },
    { title: "Technical Requirements", keypoints: [
      "Subscribe to Zaino's streaming API for new blocks.",
      "Parse and display block metadata (height, timestamp, tx count).",
      "Count and categorize transactions (transparent, shielded, mixed).",
      "Show mempool size in real time.",
      "Build a WebSocket bridge to push updates to a browser client.",
      "Chart block times and transaction volume over the last 100 blocks.",
      "Handle gaps in streaming (reconnect logic if Zaino connection drops)."
    ]},
    { title: "What You'll Learn", body: `<p>This project teaches streaming data handling — the key skill for building reactive Zcash applications. You'll get comfortable with Zaino's streaming gRPC APIs, understand block timing and chain statistics firsthand, and build the foundation of a block explorer. Extend it by adding address search (for transparent addresses), transaction lookup by txid, or historical charts using a time-series database backend.</p>` }
  ],
  prev: "project-payment-gateway", next: "project-merchant-checkout"
},

"project-merchant-checkout": {
  stage: "Stage 02 · Build with Zcash", stageColor: "var(--blue)",
  title: "Project: Merchant Checkout Tool",
  subtitle: "Build a point-of-sale and online checkout tool for merchants accepting ZEC — a polished, production-ready integration.",
  sections: [
    { title: "What You'll Build", body: `<p>A merchant checkout tool with: a web-based point-of-sale interface (enter amount in USD, display equivalent ZEC amount, show QR code), real-time payment detection, a confirmation display on payment received, and a transaction history log for the merchant. Optional: a simple Shopify or WooCommerce plugin wrapper. This project synthesizes everything from Stage 2 into a user-facing product.</p>` },
    { title: "Technical Requirements", keypoints: [
      "Fiat/ZEC conversion using a price feed API (CoinGecko or similar).",
      "ZIP-321 payment request URI generation.",
      "QR code generation and display.",
      "Real-time payment detection via Zaino scanning.",
      "Automatic confirmation on required depth.",
      "Merchant transaction history with date, amount (ZEC and fiat), status.",
      "Mobile-friendly UI (merchants use phones and tablets at POS)."
    ]},
    { title: "Portfolio Value", body: `<p>This project is the most directly valuable as a portfolio piece. It demonstrates: full-stack Zcash integration (node + wallet + payments + UI), real-world UX design for crypto payments, and an understanding of the full transaction lifecycle. Document it well, deploy it on testnet, and record a demo video. This is the kind of project that gets attention from Zcash ecosystem employers and grant committees.</p>` }
  ],
  prev: "project-tx-monitor", next: "contribute-zebra"
}

}; // end LESSONS_STAGE2
