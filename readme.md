# vbb-short-station-name

**Removes stuff like " (Berlin)" from station names.** Shortens "strasse" to "str.".

- `S Südkreuz Bhf (Berlin)` -> `S Südkreuz`
- `S Beusselstraße` -> `S Beusselstr.`

[![npm version](https://img.shields.io/npm/v/vbb-short-station-name.svg)](https://www.npmjs.com/package/vbb-short-station-name)
[![dependency status](https://img.shields.io/david/derhuerst/vbb-short-station-name.svg)](https://david-dm.org/derhuerst/vbb-short-station-name)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/vbb-short-station-name.svg)


## Installing

```shell
npm install vbb-short-station-name
```


## Usage

```js
const shorten = require('vbb-short-station-name')
shorten('S Südkreuz Bhf (Berlin)') // -> 'S Südkreuz'
```


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/vbb-short-station-name/issues).
