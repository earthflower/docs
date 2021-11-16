---
sidebar_position: 2
---

# signRaw

signRaw is used to sign a message and returns serialized buffer.

```js
  const response = await window.earth.signRaw('hello'); 
  console.log(response);
 /*   
   {"type":"Buffer","data":[214,171,29,166]}
*/
```