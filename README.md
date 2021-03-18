# jeus API for javascript

**Javascript** jeus API package, Support **Node.js**, and **Browser**

## Installation

```bash
npm install --save jeus
```

## Getting Started

### with Node.js

```javascript
const jeus = require('jeus')

```

## Authentication

```
basic auth
```

## jeus API

* basic auth: jeusadmin id, password

### jeus.admin.command(url: string, auth: object = {}, params: object = {})

execute jeus command 

```javascript
var url = 'http://localhost:9736/jsonCommand/command.json';
var auth = {
    username : USERNAME,
    password : PASSWORD
}
var params = {
    "jeusadmin": {
        "command": "server-info",
        "options":[
            "-server server1",
            "-state"
        ],
        "argument": null
    }
};

jeus.admin.command(url, auth, params);
```
### jeus.admin.api(url: string, auth: object = {}, params: object = {})

```javascript
var url = 'http://localhost:9736/jsonCommand/command.json';
var auth = {
    username : USERNAME,
    password : PASSWORD
}
var params = {
    "command": "server-info",
    "options":[
        "-server server1",
        "-state"
    ],
    "argument": null
}

jeus.admin.command(url, auth, params);
```
## Details 
https://technet.tmaxsoft.com/upload/download/online/jeus/pver-20170202-000001/reference-book/ch04.html#jeusadmin-json-support

## License

[MIT](https://github.com/hkjang/jeus/blob/master/LICENSE)

Copyright 2018-2020. [hkjang](https://github.com/hkjang). All rights reserved.
