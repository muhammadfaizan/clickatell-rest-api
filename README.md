# Clickatell Rest Api

This is an unofficial Node.js REST API for the [Clickatell](https://www.clickatell.com/), which wraps their [REST API](https://www.clickatell.com/developers/2015/10/08/rest-api/).
## Installation

```sh
$ npm install --save clickatell-rest-api
```
## Basic Usage

```js
// require the module
const Clickatell = require('clickatell-rest-api');

// create a new clinet
const client = new Clickatell.client([YOUR AUTHORIZATION TOKEN HERE]);

// send a text message
client.sendNotification('+123456789', "Hey this is a message from my app")
.then(response => {
   // Do your task here
   console.log(response);
   return response
})
.catch(error => {
    // handle error here
    throw error
});
```

## Note
Any contrubution would be appreciated. Also raise issue or request a feature if needed.