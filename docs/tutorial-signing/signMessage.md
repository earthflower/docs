---
sidebar_position: 1
---

# signMessage

### Sign Canister Method

signMessage is used to sign a canister methods update or query by connected user.

```js
  const response = await window.earth.signMessage({
    canisterId: 'bzsui-sqaaa-aaaah-qce2a-cai',
    method: 'bearer',
    args: 'lwi75-7akor-uwiaa-aaaaa-b4arg-qaqca-aac6a-q'
  });
  console.log(response);
 /*   
  {
    "ok": "afb264de8057a9ba7f79a51c80f99354004e686bb650172032aada5126e7f014"
  } 
*/
```

`canisterId` and `method` are mandatory. `args` can be `undefined` or optional based on corresponding arguments of that canister method.

:::tip
With ICP, signMessage is best suited for canister update methods like transfer, list, sell, create etc. Usually, canister queries that are repetitive like read, get, fetch etc can be fetched with anonymous/no identity. More info can be found at Dfinity docs [Query and update methods](https://smartcontracts.org/docs/developers-guide/concepts/canisters-code.html#query-update)  
:::



### Error Handling

Incase of any error from signMessage, an object with  `{type:"error", message:"some info"}` is resolved. For example,

```js
  const response = await window.earth.signMessage({
    canisterId: 'bzsui-sqaaa-aaaah-qce2a-cai',
    method: 'bearer',
    args: 'lwi75-7akor-uwiaa-aaaaa-b4arg-qaqca-aac6a-xxx'
  });
  console.log(response);
 /*   
  {
    type: "error",
    message: "Call failed:
              "Canister": bzsui-sqaaa-aaaah-qce2a-cai
              "Method": bearer (query)
              "Status": "rejected"
              "Code": "CanisterError"
              "Message": "IC0503: Canister bzsui-sqaaa-aaaah-qce2a-cai trapped explicitly: RTS error: blob_of_principal: invalid principal"
  } 
*/
```

### Sign Batch Canister Methods 
signMessage can be used for batch queries or batch calls  canister methods by sending array of canister methods.

```js
 const response = await window.earth.signMessage([{
    canisterId: 'bzsui-sqaaa-aaaah-qce2a-cai',
    method: 'bearer',
    args: {
        "token": "lwi75-7akor-uwiaa-aaaaa-b4arg-qaqca-aac6a-q",
        "user": {
            "address": "afb264de8057a9ba7f79a51c80f99354004e686bb650172032aada5126e7f014"
        }
      }
    },
    {
    canisterId: 'oeee4-qaaaa-aaaak-qaaeq-cai',
    method: 'tokens',
    args: '0ba1b7b1643929210dc41a8afbe031bd1b5e81dbc8e3b3b64978f5f743f058c3',
    }
    ]);
  console.log(response);

  /* 
  [{
  "ok": "1"
  },
  {
  "ok": [
    5542
  ]
}]
  */

```
In the above example, batch query is sent to multiple canisters


### Troubleshooting with BigInt and Principals
Here is canister Method for listing an NFT token `xbxdl-yakor-uwiaa-aaaaa-cuaab-eaqca-aacwt-a`. The expected arguments are `token (text)`, `from_subaccount (opt vec nat8)` and `price (opt nat64)`
```js
const response = await window.earth.signMessage({
      canisterId: 'oeee4-qaaaa-aaaak-qaaeq-cai',
      method: "list"
      args: {
        "price": [223412341211000000000],
        "from_subaccount": [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
        "token": "xbxdl-yakor-uwiaa-aaaaa-cuaab-eaqca-aacwt-a"
    }});
```
 * In case arguments of type `nat64` please use `int` instead of `bigInt` i.e `123`. Currently, earth wallet doesn't have out of the box support for bigInt numbers like `123n` or `BigInt(123)`.  
 * As, all signMessages are parsed by serialization and de-serialization of extension, arguments of type `principal` are serialized and canister actor couldn't parse serialized `principal`. 
 * In next version, we can provide support for `BigInt` and `principal` with custom parser.



Anything **unclear** or **issue** in this docs? [Please connect at Discord!](https://discord.gg/B8G75XZ92K)