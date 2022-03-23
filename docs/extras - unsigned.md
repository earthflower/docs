---
sidebar_position: 4
---

# Unsigned queries

`canisterAgent` is wrapper for httpAgent with DIDs injected. `canisterAgent` is very useful for anonymous queries that are unsigned useful for fetching data etc

```js
import { canisterAgent } from "@earthwallet/assets";
const canisterId = 'ryjl3-tyaaa-aaaaa-aaaba-cai';
  const response = await canisterAgent({
    canisterId: canisterId,
    method: 'account_balance_dfx',
    args: {
      account:
        '0ba1b7b1643929210dc41a8afbe031bd1b5e81dbc8e3b3b64978f5f743f058c3',
    }
  });
  // { e8s: 123400000 }
``` 

Above query example returns balance from ICP ledger canister

Anything **unclear** or **issue** in this docs? [Please connect at Discord!](https://discord.gg/B8G75XZ92K)
