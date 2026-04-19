# Zcash Builders

> A practical, hands-on developer program for Zcash. Ship real apps on mainnet, contribute to open source, become a Zcash developer.

**Live site:** [builders.z.cash](https://builders.z.cash) *(soon)*

---

## What this is

`builders.z.cash` is a **40-hour, 8-week Zcash developer program** — and a permanent public infrastructure for anyone who wants to build on Zcash.

- **Curriculum** · 8 weeks, 8 labs, 3 mandatory outputs
- **Infrastructure** · public zebrad nodes, zkool wallet engine, TAZ faucet
- **Starter** · `docker-compose` stack, first shielded tx in 10 minutes
- **Open** · MIT-licensed, community-run

This repo contains the site and the local dev stack.

## Repo layout

```
.
├── index.html            # builders.z.cash landing
├── docker-compose.yml    # local dev stack
├── config/
│   ├── zebrad.toml       # zebrad testnet config (RPC enabled)
│   └── zcash.conf        # lightwalletd → zebrad bridge
└── README.md
```

## Run the site locally

```bash
git clone https://github.com/Michae2xl/builders-zcash.git
cd builders-zcash
python3 -m http.server 8080
# open http://localhost:8080
```

## Run the Zcash dev stack locally

Needs Docker + Docker Compose.

```bash
docker-compose up -d
docker-compose logs -f zebrad    # wait for first sync (~5 min, checkpointed)
```

Services:

| Service | Port | Purpose |
|---------|------|---------|
| zebrad RPC | `8232` | JSON-RPC chain data |
| zebrad P2P | `18233` | Peer network |
| lightwalletd | `9067` | gRPC for light wallets |
| zkool | `8001` | GraphQL wallet |

### First shielded transaction

```bash
# Create account (pools=7: all pools)
curl -s http://localhost:8001/graphql \
  -H "Content-Type: application/json" \
  -d '{"query":"mutation { createAccount(name:\"dev\", seedPhrase:\"\", pools:7) }"}' | jq

# Get your UA
curl -s http://localhost:8001/graphql \
  -d '{"query":"{ addressByAccount(id:1) { ua } }"}' | jq

# Request TAZ (from our faucet — soon)
curl -X POST https://faucet.builders.z.cash/drip \
  -H "Authorization: Bearer $GITHUB_TOKEN" \
  -d '{"address":"<YOUR_UA>"}'

# Send shielded tx (pool bitmask: 1=t, 2=sapling, 4=orchard)
curl -s http://localhost:8001/graphql \
  -d '{"query":"mutation { pay(accountId:1, recipients:[{address:\"utest1...\",amount:\"0.01\",memo:\"hello\"}], srcPools:4) }"}' | jq
```

## Public infrastructure

| Endpoint | Status | Purpose |
|----------|--------|---------|
| `zebra-mainnet.builders.z.cash` | 🟢 Live | zebrad mainnet RPC |
| `zebra-testnet.builders.z.cash` | 🟢 Live | zebrad testnet RPC |
| `zkool-testnet.builders.z.cash/graphql` | 🟢 Live | zkool wallet GraphQL |
| `faucet.builders.z.cash` | 🟢 Live | TAZ faucet, GitHub OAuth |
| `github.com/builders-zcash/devcontainer` | ⚪ Soon | Codespaces image |
| `app.builders.z.cash` | ⚪ Soon | Progress + certs dashboard |

## Curriculum

8 weeks · 40 hours · 5h/week (3h self-paced + 2h lab)

1. **Environment & Node Operation** — zebrad, lightwalletd, Zaino
2. **Wallet SDK** — `zcash_client_backend`, HD derivation, UAs (ZIP-316)
3. **Chain Layer** — ZebraRPC deep dive, block explorer
4. **Shielded Transactions** — zkool GraphQL, Orchard, Halo2 proofs
5. **Viewing Keys & Selective Disclosure** — FVK/IVK/OVK, ZIP-310
6. **Product Build** — wallet UI / payment gateway / shielded tool
7. **Testing & Security** — property tests, fuzzing, Zcash pitfalls
8. **Ship & Contribute** — mainnet deploy + blog post + OSS PR

Full details: see the site, `#program`.

## Graduate requirements

Three tangible outputs — no attendance certificates:

1. A project running on Zcash **mainnet** with real value
2. A technical **blog post** documenting what you built
3. An open-source **PR** in an official Zcash repo (`zebra`, `zallet`, `zkool2`, `zcash-wallet-sdk`, `zcash-migrate`)

## Stack

- Frontend: single-file HTML + CSS + vanilla JS (no build step)
- Infra: `zebrad` (Rust), `lightwalletd` (Go), `zkool` (Rust + GraphQL)
- Typography: Instrument Serif, Inter, JetBrains Mono
- Design: dark editorial · gold `#F4B728`

## Contributing

Issues and PRs welcome. For curriculum contributions, open an issue first with the proposed change.

## Related Zcash OSS

- [zfnd/zebra](https://github.com/ZcashFoundation/zebra) — Rust full node
- [zcash/wallet](https://github.com/zcash/wallet) — Zallet, the new reference wallet
- [hhanh00/zkool2](https://github.com/hhanh00/zkool2) — wallet engine with Orchard/Halo2
- [Michae2xl/zcash-migrate](https://github.com/Michae2xl/zcash-migrate) — Bitcoin → Zcash migration tool
- [ZcashFoundation/zaino](https://github.com/ZcashFoundation/zaino) — indexer

## License

MIT — see [LICENSE](LICENSE)

---

*Community-run · Built on Zcash · builders.z.cash*
