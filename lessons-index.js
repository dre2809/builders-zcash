// ═══════════════════════════════════════════════
// lessons-index.js — merges all stage objects into LESSONS + defines SEQUENCE
// Load order in learn.html: stage0 → stage1 → stage2 → stage3 → this file
// ═══════════════════════════════════════════════

const LESSONS = Object.assign(
  {},
  LESSONS_STAGE0,
  LESSONS_STAGE1,
  LESSONS_STAGE2,
  LESSONS_STAGE3
);

const SEQUENCE = [
  // ── Stage 0: Blockchain Fundamentals ──
  "what-is-blockchain",
  "decentralized-computer",
  "decentralized-apps",
  "blockchain-use-cases",
  "payments-use-case",
  "account-balances",
  "ledger",
  "signatures",
  "tx-ordering",
  "longest-chain",
  "tx-lifecycle",
  "sybil-protection",
  "smart-contracts",
  "native-tokens",
  "erc20-tokens",
  "wrapped-tokens",
  "token-decimals",
  "vms-and-blockchains",
  "state-machine",
  "variety-of-vms",
  "testnets",
  // ── Stage 1: Understand Zcash ──
  "what-is-zcash",
  "privacy-vs-transparency",
  "shielded-transactions",
  "viewing-keys",
  "zk-snark-basics",
  "zcashd",
  "zebra",
  "zaino",
  "zallet",
  "nodes",
  "mempool",
  "blocks",
  "consensus-rules",
  "rpc-basics",
  // ── Stage 2: Build with Zcash ──
  "zingolib",
  "lightwallet-protocol",
  "json-rpc",
  "zaino-apis",
  "wallet-sdks",
  "wallet-development",
  "payment-integrations",
  "shielded-tx-flows",
  "merchant-tools",
  "privacy-ux",
  "run-zebra",
  "connect-zaino",
  "query-chain",
  "broadcast-tx",
  "project-wallet-dashboard",
  "project-payment-gateway",
  "project-tx-monitor",
  "project-merchant-checkout",
  // ── Stage 3: Contribute to Zcash ──
  "contribute-zebra",
  "contribute-zaino",
  "contribute-zallet",
  "contribute-zingolib",
  "community-tooling",
  "writing-docs",
  "testing-qa",
  "bug-reports",
  "writing-tutorials",
  "developer-education",
  // ── Capstone ──
  "capstone-build",
  "capstone-deploy",
  "capstone-pr",
  "capstone-demo"
];
