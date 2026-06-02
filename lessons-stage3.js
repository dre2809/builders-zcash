// ═══════════════════════════════════════════════
// lessons-stage3.js — Stage 03: Contribute to Zcash + Capstone
// ═══════════════════════════════════════════════

const LESSONS_STAGE3 = {

"contribute-zebra": {
  stage: "Stage 03 · Contribute to Zcash", stageColor: "var(--purple)",
  title: "Contribute to Zebra",
  subtitle: "Zebra is the Zcash Foundation's consensus node. Contributing to it means contributing to the core infrastructure that every Zcash application depends on.",
  sections: [
    { title: "Getting Started", body: `<p>Zebra lives at <code>github.com/ZcashFoundation/zebra</code>. The codebase is Rust — you'll need a recent stable Rust toolchain. Clone the repo, run <code>cargo build</code>, then <code>cargo test</code> to ensure the test suite passes. The Zebra team maintains excellent contributor documentation in <code>CONTRIBUTING.md</code> and the <code>book/</code> directory.</p><p>Good first issues are labeled <code>D-easy</code> in the GitHub issue tracker — curated by the Zebra team as appropriate entry points for new contributors.</p>` },
    { title: "Architecture Overview", body: `<p>Zebra is structured as a set of crates: <code>zebra-chain</code> (data types — blocks, transactions, addresses), <code>zebra-state</code> (database layer using RocksDB), <code>zebra-network</code> (peer-to-peer networking), <code>zebra-consensus</code> (validation logic), and <code>zebrad</code> (the daemon binary). Understanding which crate owns which responsibility is key before making changes.</p><p>The codebase uses tokio for async, tower for service composition, and color-eyre for error handling.</p>` },
    { title: "Contribution Workflow", body: `<p>1. Find or file an issue — discuss the proposed change with maintainers before writing code. 2. Fork the repo and create a feature branch. 3. Write the code with tests. Zebra has a strong testing culture — unit tests, integration tests, and property-based tests. 4. Open a PR against <code>main</code> with a clear description of what changed and why. 5. Respond to review comments — Zebra reviews are thorough. 6. Once approved and CI passes, a maintainer merges. Typical PR timeline: days to weeks depending on complexity.</p>` }
  ],
  prev: "project-merchant-checkout", next: "contribute-zaino"
},

"contribute-zaino": {
  stage: "Stage 03 · Contribute to Zcash", stageColor: "var(--purple)",
  title: "Contribute to Zaino",
  subtitle: "Zaino is the data access layer connecting nodes to wallets and apps. Contributions here directly improve the developer experience for everyone building on Zcash.",
  sections: [
    { title: "What Zaino Needs", body: `<p>Zaino is younger than Zebra and has more surface area for contribution. Active areas: expanding gRPC API coverage, performance improvements to compact block delivery, address indexing, and RPC compatibility for zcashd migration. The Zaino team is actively seeking contributors who have experience building applications on Zcash — you understand the gaps from the developer side.</p><p>Repo: <code>github.com/zingolabs/zaino</code>. The codebase is Rust with tonic for gRPC. Get oriented by reading the architecture documentation in the repo first.</p>` },
    { title: "High-Impact Areas", body: `<p>Contributions with outsized impact: improving the API's documentation and error messages (directly helps app developers), adding test coverage for edge cases in block streaming, improving reconnection and fault tolerance (critical for production reliability), and expanding address query support for transparent address use cases. If you've hit a bug or limitation building your Stage 2 projects, that's often the best place to contribute — you understand the problem intimately.</p>` },
    { title: "Working with the Zaino Team", body: `<p>The Zaino team is active on the Zcash R&D Discord and responds quickly to GitHub issues. Before working on anything substantial, open an issue to discuss approach — the team may have context about why things are the way they are. Small, focused PRs are merged faster than large, sweeping changes. Build trust with small contributions before tackling core architectural work.</p>` }
  ],
  prev: "contribute-zebra", next: "contribute-zallet"
},

"contribute-zallet": {
  stage: "Stage 03 · Contribute to Zcash", stageColor: "var(--purple)",
  title: "Contribute to Zallet",
  subtitle: "Zallet is ECC's reference wallet implementation. Contributing here shapes the default Zcash wallet experience for developers and users.",
  sections: [
    { title: "Zallet's Development Status", body: `<p>Zallet is under active development by ECC and is not yet at 1.0 — making it an excellent time to contribute. The codebase is Rust, targeting the Z3 stack. Contributions are especially valuable in: testing and validation of key management flows, RPC API coverage (implementing zcashd-compatible methods for migration), documentation, and UI/UX for the daemon's JSON-RPC API surface.</p><p>Repo: <code>github.com/zcash/zallet</code>. Check the project board for current priorities — ECC maintains a public roadmap.</p>` },
    { title: "Key Contribution Areas", body: `<p>High-priority areas: comprehensive seed backup and recovery testing (critical for user safety), Unified Address handling edge cases, viewing key export/import, transaction construction for complex flows (multi-recipient, memos, expiry), and integration tests that run against a live testnet. If you built Zingolib-based applications in Stage 2, your experience with the wallet API surface is directly applicable here.</p>` },
    { title: "ECC Contributor Guidelines", body: `<p>ECC uses a signed Contributor License Agreement (CLA) — sign it before your first PR. They require all code to have tests, follow the existing code style (enforced by CI), and include clear commit messages. ECC engineers do thorough code reviews focused on correctness and security. For wallet code where bugs can lose user funds, this rigor is appropriate — embrace it. The review process will make you a better engineer.</p>` }
  ],
  prev: "contribute-zaino", next: "contribute-zingolib"
},

"contribute-zingolib": {
  stage: "Stage 03 · Contribute to Zcash", stageColor: "var(--purple)",
  title: "Contribute to Zingolib",
  subtitle: "Zingolib is the most battle-tested Zcash wallet library. Contributing to it improves the foundation that production wallets depend on.",
  sections: [
    { title: "Zingolib's Contribution Model", body: `<p>Zingolib is maintained by Zingo Labs and developed openly on GitHub (<code>github.com/zingolabs/zingolib</code>). The team is relatively small but responsive. Best entry points: adding tests for edge cases you discovered while building, fixing documented bugs, improving error messages and observability, and extending the API to cover use cases not currently supported.</p>` },
    { title: "Rust Expertise Required", body: `<p>Zingolib is non-trivial Rust: async code, cryptographic operations, and complex state management. You'll need solid Rust fundamentals. Good preparation: complete the Rust Book, understand async/await with tokio, and review the Zingolib codebase architecture (start with <code>src/lib.rs</code> and follow the types). The codebase has comments explaining the cryptographic operations — read those carefully before modifying crypto-adjacent code.</p>` },
    { title: "Impact of Contributions", body: `<p>Zingolib powers Ywallet and Zingo Wallet — both have real user bases. A bug fix in Zingolib can benefit thousands of users directly. A new feature unlocks new application categories for all developers building on it. This is the leverage of open-source infrastructure contributions: your code runs everywhere the library is used. Take that seriously — it means both higher potential impact and higher responsibility to get it right.</p>` }
  ],
  prev: "contribute-zallet", next: "community-tooling"
},

"community-tooling": {
  stage: "Stage 03 · Contribute to Zcash", stageColor: "var(--purple)",
  title: "Community Tooling",
  subtitle: "Beyond the core protocol, the Zcash ecosystem needs explorers, monitoring tools, SDKs, and developer utilities. Building community tooling is one of the highest-impact contributions you can make.",
  sections: [
    { title: "What the Ecosystem Needs", body: `<p>Gaps in the current Zcash developer toolscape: a high-quality open-source block explorer with shielded transaction support (showing counts without revealing details), a transaction fee estimator tool, a testnet faucet with a good UI, a Zcash-specific development environment setup tool, and better TypeScript/JavaScript SDK coverage for web developers. If you've felt friction building on Zcash, that friction is an opportunity.</p>` },
    { title: "Zcash Grants Program", body: `<p>The Zcash Foundation and ZCG (Zcash Community Grants) fund community tooling projects. If you have a well-scoped project idea, you can apply for a grant. The process: write a proposal describing the tool, its user benefit, your implementation plan, timeline, and budget. The ZCG committee reviews proposals regularly. Successful community tooling grants have funded explorers, wallet improvements, documentation, and developer libraries.</p><p>Start small — grants for modest community tools ($5–$20k range) have a shorter review cycle than large infrastructure grants. Build credibility with smaller contributions first.</p>` },
    { title: "Coordinating with the Community", body: `<p>Before building a community tool, check what already exists and talk to the community. The Zcash R&D Discord, the Zcash Forum, and the ZCG grants repository are good places to announce intentions and get feedback. Often, improving an existing tool is more valuable than building a new one from scratch. Coordination prevents duplicate effort.</p>` }
  ],
  prev: "contribute-zingolib", next: "writing-docs"
},

"writing-docs": {
  stage: "Stage 03 · Contribute to Zcash", stageColor: "var(--purple)",
  title: "Writing Documentation",
  subtitle: "Good documentation is infrastructure. Zcash's developer experience depends on clear, accurate, up-to-date documentation — and this is an area where contributions have high impact and low barrier to entry.",
  sections: [
    { title: "Where Documentation Lives", body: `<p>Zcash documentation is distributed across several repos: the <strong>Zcash Protocol Specification</strong> (<code>zips.z.cash</code>), <strong>ZIPs repository</strong> (<code>github.com/zcash/zips</code>), <strong>Zebra book</strong> (<code>github.com/ZcashFoundation/zebra/book</code>), <strong>Zingolib docs</strong> (inline Rust docs + GitHub wiki), and <strong>ECC developer documentation</strong>. Each has different maintainers and contribution processes.</p><p>Start by identifying where you personally got confused — that's where documentation is weakest.</p>` },
    { title: "What Good Zcash Docs Look Like", body: `<p>The best documentation: explains the why before the how, provides working code examples (tested and kept up to date), covers error handling and common failure modes explicitly, links to related concepts for context, and is written for the developer's perspective (not the protocol designer's). Compare the Zebra book to the zcashd legacy docs — the difference in quality shows what's possible.</p>` },
    { title: "How to Contribute Docs", body: `<p>Most repos accept documentation PRs the same way as code PRs — fork, edit, open a PR. For the Zebra book, docs are in <code>book/src/</code> as Markdown. For Rust crates, documentation is inline in <code>/// doc comments</code> which get published to docs.rs. For ZIPs, the process is more formal — read the ZIP process document before proposing new ZIPs. For tutorials and guides, the ECC developer blog and Zcash Foundation blog both accept community submissions.</p>` }
  ],
  prev: "community-tooling", next: "testing-qa"
},

"testing-qa": {
  stage: "Stage 03 · Contribute to Zcash", stageColor: "var(--purple)",
  title: "Testing & QA",
  subtitle: "Zcash is financial infrastructure — bugs have real consequences. Contributing to the testing ecosystem is one of the most valuable things you can do.",
  sections: [
    { title: "Testing Philosophy in Zcash", body: `<p>The Zcash codebase takes testing seriously. Zebra has: unit tests for every major component, integration tests that run against a live testnet node, property-based tests (using proptest) for cryptographic operations, and fuzz tests for parsing logic. This culture means new contributions must come with tests — but it also means the codebase is more reliable than most open-source projects of similar complexity.</p>` },
    { title: "Where to Add Tests", body: `<p>High-value testing contributions: edge case tests for transaction construction (dust amounts, maximum inputs, expiry heights), integration tests for Zaino's streaming APIs (disconnection and reconnect, large block delivery), wallet sync tests (interrupted sync, reorg handling), and end-to-end tests that send ZEC on testnet and verify receipt. If you found a bug in Stage 2, the first thing you should do before fixing it is write a failing test that reproduces it.</p>` },
    { title: "Testing on Testnet", body: `<p>The most realistic testing uses the live testnet (TAZ). Automated testnet tests are valuable because they exercise the full stack — real peer-to-peer networking, real block production, real ZK proof generation and verification. Setting up a CI pipeline that runs against testnet catches classes of bugs that unit tests miss. The Zebra CI already does some of this — study it as a model for your own integration test suites.</p>` }
  ],
  prev: "writing-docs", next: "bug-reports"
},

"bug-reports": {
  stage: "Stage 03 · Contribute to Zcash", stageColor: "var(--purple)",
  title: "Bug Reports",
  subtitle: "A well-written bug report is a contribution. Learning to file clear, reproducible bug reports is a skill that makes you more effective and welcomed by any open-source project.",
  sections: [
    { title: "What Makes a Good Bug Report", body: `<p>A good bug report contains: <strong>environment</strong> (OS, Rust version, library version, testnet or mainnet), <strong>steps to reproduce</strong> (exact commands or code that triggers the bug), <strong>expected behavior</strong> (what you expected to happen), <strong>actual behavior</strong> (what actually happened, with error messages/logs), and if possible, a <strong>minimal reproducible example</strong>.</p><p>Bad bug reports: "it doesn't work," "I'm getting an error," "Zebra crashed." These waste maintainer time and often get closed as insufficient information.</p>` },
    { title: "Security Bug Reports", body: `<p>Security bugs in Zcash (consensus bugs, cryptographic weaknesses, fund-loss vectors) must <strong>NOT be reported publicly</strong>. Use the responsible disclosure process: email <code>security@z.cash</code> with a detailed description. The Zcash Foundation and ECC take security reports seriously and respond quickly. If the bug is valid, they'll work with you on a fix and may award a bounty before public disclosure.</p><p>When in doubt about whether something is a security bug, treat it as one. It's better to over-disclose privately than to publicly announce a vulnerability before it's fixed.</p>` },
    { title: "Following Up on Your Reports", body: `<p>After filing a bug report, check back in a few days. Maintainers may need clarification. Be responsive — a bug report that goes quiet often gets closed without resolution. If the bug is fixed, verify the fix in your environment and comment on the issue. Building a reputation for thorough, accurate bug reports is valuable — you'll get taken more seriously for future contributions.</p>` }
  ],
  prev: "testing-qa", next: "writing-tutorials"
},

"writing-tutorials": {
  stage: "Stage 03 · Contribute to Zcash", stageColor: "var(--purple)",
  title: "Writing Tutorials",
  subtitle: "Tutorials convert developers from curious to capable. Writing one based on your Stage 2 experience is one of the highest-leverage contributions you can make to the ecosystem.",
  sections: [
    { title: "What Makes a Good Tutorial", body: `<p>Good tutorials are opinionated and outcome-focused: they get the reader to a working result as quickly as possible. Structure: goal statement (what will you build/learn?), prerequisites (what do you need before starting?), step-by-step instructions with expected output at each step, troubleshooting for common errors, and next steps for extending the work.</p><p>Bad tutorials: assume too much prior knowledge, skip error handling, use outdated library versions, or end without a working result. Test your tutorial end-to-end on a fresh machine before publishing.</p>` },
    { title: "Tutorial Ideas Based on Stage 2", body: `<p>Topics with no good tutorials in the current Zcash ecosystem: "Build a ZEC payment gateway in 30 minutes," "Send your first shielded transaction with Zingolib," "Deploy Zebra + Zaino on a VPS," "Build a Zcash light wallet with the iOS SDK," and "Integrate ZEC payments into a WooCommerce store." These are all achievable Stage 2 projects that would make excellent published tutorials.</p>` },
    { title: "Where to Publish", body: `<p>The Zcash Foundation and ECC developer blogs accept community tutorial submissions — reach out via Discord or email. The Zcash Forum is a good place for draft feedback before formal submission. Dev.to, Hashnode, and Medium work for personal publication with good discoverability. GitHub repositories with well-structured README documentation serve as semi-permanent tutorials — projects that get used get found.</p>` }
  ],
  prev: "bug-reports", next: "developer-education"
},

"developer-education": {
  stage: "Stage 03 · Contribute to Zcash", stageColor: "var(--purple)",
  title: "Developer Education",
  subtitle: "Teaching others multiplies your impact. From workshops to videos to courses, developer education is how ecosystems grow.",
  sections: [
    { title: "Formats That Work", body: `<p>Effective developer education formats: <strong>live workshops</strong> (high engagement, immediate Q&A, but hard to scale), <strong>video tutorials</strong> (asynchronous, reusable, broad reach), <strong>written guides</strong> (searchable, indexable, long tail), and <strong>code samples and templates</strong> (developers copy-paste first, read second). The best content combines formats: a video walkthrough with a companion written guide and a GitHub repo with starting code.</p>` },
    { title: "ZCG Education Grants", body: `<p>Zcash Community Grants specifically funds developer education. If you want to create a course, video series, or workshop curriculum for Zcash developers, a ZCG grant is the right vehicle. Strong proposals include: a clear target audience (beginner, intermediate, advanced), specific learning outcomes, content outline, production plan, and distribution strategy. Past successful education grants have covered Rust basics for Zcash developers, ZK proofs fundamentals, and wallet integration workshops.</p>` },
    { title: "Building Your Developer Community Presence", body: `<p>Sustained developer education requires presence and credibility. Build yours by: being active and helpful in the Zcash Discord and Forum, consistently shipping small contributions over time, sharing what you learn publicly (blog posts, Twitter threads, talks at local meetups), and mentoring newcomers once you have enough experience. Developer advocates who are genuinely technical — who have shipped real Zcash code — are rare and valuable.</p>` }
  ],
  prev: "writing-tutorials", next: "capstone-build"
},

"capstone-build": {
  stage: "Capstone · Final Stage", stageColor: "var(--purple)",
  title: "Build Your Production App",
  subtitle: "The capstone begins: build a production-quality application on Zcash infrastructure — real code, real architecture, real use case.",
  sections: [
    { title: "What Production-Ready Means", body: `<p>Production-ready doesn't mean perfect — it means deployable, maintainable, and trustworthy for real users. For a Zcash application: handles all error states gracefully, has a thoughtful security model for key management, protects user privacy by defaulting to shielded, has meaningful test coverage, and is documented well enough that someone else could maintain it.</p><p>The scope can be modest — a well-executed payment gateway is more impressive than an ambitious but half-finished "super-app." Scope to what you can finish and finish to a high standard.</p>` },
    { title: "Choosing Your Application", body: `<p>Strong capstone application ideas: a privacy-preserving recurring payment system, a ZEC-based crowdfunding platform, a shielded payroll tool for small teams, a tip button widget for content creators, or an extension of one of your Stage 2 projects to production quality. Choose something you'd actually use or that solves a problem you understand — motivation matters for the quality of the final result.</p>` },
    { title: "Architecture Review Before Building", body: `<p>Before writing code: document your architecture. What are the components? How do they communicate? Where are the trust boundaries? What's the threat model for your users' funds? Share the architecture in the Zcash Discord for feedback before committing to it. A 30-minute async discussion can prevent weeks of rework. Write an architecture decision record (ADR) capturing your choices and trade-offs — this becomes part of your documentation.</p>` }
  ],
  prev: "developer-education", next: "capstone-deploy"
},

"capstone-deploy": {
  stage: "Capstone · Final Stage", stageColor: "var(--purple)",
  title: "Deploy on Mainnet",
  subtitle: "Real deployment. Real ZEC. This is the step that separates builders from learners.",
  sections: [
    { title: "Pre-Deployment Checklist", body: `<p>Before going live on mainnet: run your full test suite against testnet until it's green, do a security review of all key management and fund-handling code, stress-test your node infrastructure under load, ensure your monitoring and alerting are operational, have a documented incident response plan (what do you do if funds are at risk?), and have a clear user communication plan for outages or issues.</p><p>Consider a staged rollout: invite a small group of trusted beta users first, run for a week with real but small amounts, then open broadly.</p>` },
    { title: "Infrastructure for Production", body: `<p>Production Zcash infrastructure: run your own Zebra node on dedicated hardware (not shared hosting — chain sync is resource-intensive), deploy Zaino on the same server, use a reverse proxy (nginx) in front of Zaino's gRPC with TLS termination, set up automated backups of your node's chain state, and use a separate hot wallet with minimal funds for operational payments. Never run production wallet keys on the same server as your node.</p>` },
    { title: "The First Real Transaction", body: `<p>The first ZEC transaction your production system processes is a milestone. Send a small test amount to yourself first. Verify the full flow: amount detected, confirmation counted, action triggered. Check your monitoring shows the event. Then open to users. Document this moment — the block height and txid of your first production transaction. It's the beginning of your project's on-chain history.</p>` }
  ],
  prev: "capstone-build", next: "capstone-pr"
},

"capstone-pr": {
  stage: "Capstone · Final Stage", stageColor: "var(--purple)",
  title: "Merge a PR into Zcash",
  subtitle: "One merged PR into an official Zcash repository is the mark of a genuine protocol contributor — not just a user of the ecosystem, but a builder of it.",
  sections: [
    { title: "Choosing Your PR Target", body: `<p>The right PR is meaningful but achievable. Options in roughly increasing difficulty: documentation improvement in any Zcash repo, additional test coverage for an existing feature, bug fix for a filed issue, new utility method in Zingolib or a wallet SDK, performance improvement to compact block scanning, or a new feature in Zaino's API.</p><p>Start by browsing "good first issue" labels across Zcash repositories. If nothing there fits, look at the bugs you filed in Stage 3 — the bugs you found are good candidates for fixing yourself.</p>` },
    { title: "The Code Review Process", body: `<p>Zcash maintainers do thorough code reviews. Expect: requests for tests you haven't written, suggestions to restructure code for clarity, questions about your approach, and sometimes outright rejection if the change doesn't align with project direction. This is normal and valuable — absorb the feedback, update your PR, and push again. The review process is a mentorship opportunity from engineers who know these codebases deeply.</p>` },
    { title: "After the Merge", body: `<p>Your merged PR is publicly visible forever in the project's git history. Add it to your resume and portfolio immediately. Share it in the Zcash Discord's contributions channel — the community celebrates these. Consider writing a blog post about what you changed and why. And then find the next PR to submit. One merged contribution tends to lead to more.</p>` }
  ],
  prev: "capstone-deploy", next: "capstone-demo"
},

"capstone-demo": {
  stage: "Capstone · Final Stage", stageColor: "var(--purple)",
  title: "Present at Demo Day",
  subtitle: "Demo Day is your public graduation — showing the Zcash community, mentors, and potential employers what you've built.",
  sections: [
    { title: "What to Prepare", body: `<p>A compelling demo day presentation has three parts: the <strong>problem</strong> (what gap in the Zcash ecosystem does your project address?), the <strong>demo</strong> (a live walkthrough of your working application — budget 8–10 minutes, show a real transaction), and the <strong>technical depth</strong> (what was hard? what did you learn? what would you do differently?).</p><p>Rehearse the demo at least five times. Things that always go wrong live: network connectivity, wallet sync timing, UI state that only happens in your screen recording. Have a pre-recorded backup of the critical demo flows.</p>` },
    { title: "The Audience", body: `<p>Demo Day is attended by program mentors, Zcash Foundation staff, ECC team members, ZCG committee members, and other builders in the cohort. These are the people who can: offer employment, recommend you for grants, introduce you to other builders, or collaborate on future projects. Treat the demo as a professional opportunity, not just a grade. Follow up with everyone who expressed interest after the event.</p>` },
    { title: "After Demo Day", body: `<p>Demo Day is a beginning, not an end. Next steps: publish your project open-source on GitHub with a clear README, write a post-mortem blog post (what worked, what didn't, what you'd build next), apply for a ZCG grant to extend your project if it has broader potential, and stay engaged with the builder community. The Zcash ecosystem is small enough that consistent presence matters — people remember builders who show up and keep building.</p>` }
  ],
  prev: "capstone-pr", next: null
}

}; // end LESSONS_STAGE3
