---
sidebar_position: 1
---

# Introduction

Let's discover **Earth Connect in less than 5 minutes**.

## Getting Started

Get started by **checking if earth wallet is installed**.

```js
if (window.earth !== undefined) {
    console.log('Earth Wallet Exists');
    //Do something
}
else {
    console.log('Dear User, Install Earth Wallet at https://www.earthwallet.io/');
}
```

**Earth Wallet** can be installed **[here](https://earthwallet.io)**.

## Connect user address to Dapp ⛓️

Get the user address

```js
 const account = await window.earth.enable();
 console.log('account: ' + account);
 //account: xyzzzz
```

Once connected, calling `earth.enable()` will give same connected address e.g xyzzz. Currently, user can select `ICP Secp256k1` addresses only.

#### Check if Earth Wallet is connected

```js
const isConnected = await window.earth.isConnected()
//{connected: false} or {connected: true}
```


Anything **unclear** or **issue** in this docs? [Please connect at Discord!](https://discord.gg/B8G75XZ92K)
