[![npm version](https://badge.fury.io/js/@growthpal%2Fdwh-key-maps.svg)](https://badge.fury.io/js/@growthpal%2Fdwh-key-maps)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# dwh-Key-Maps

## A npm package to handle dwh keys. It will contain various helper functions to manage dwh keys.

This project requires NodeJS (version 8 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
6.4.1
v8.16.0
```

## Usage
Install the package


```sh
npm install @growthpal/dwhKeyMaps
```

Import the package

```sh
const dwhKeyMaps = require("@growthpal/dwhKeyMaps")
or
import dwhKeyMaps from '@growthpal/dwhKeyMaps'
```

Current supported functions:
- convertV1ToV3Ids
    - Description: As the name suggest, this helper function will be used to convert v1 dwh ids to v3.
    - Usage: 
    ```sh
    const {convertV1ToV3Ids} = require("@growthpal/dwhKeyMaps")
    let v3Id = convertV1ToV3Ids(v1Id)
    ```