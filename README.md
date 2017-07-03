# `tstc(1)`

`tstc` wraps TypeScript compiler to allow transformer plugins.

`tstc` does its best to keep up with TypeScript releases. We do this by keeping the wrapper shallow and small.

## Usage

### Installation

Install using npm

```
npm i -g typescript-transformer
```
Then use it just like `tsc`:
```
tstc my-file.ts
```

Every command line flag that's supported by `tsc` is supported by `tst.

### Adding a plugin

Install plugins from npm and add it under `tstPlugins` under `compilerOptions`.

```json
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "outDir": "dist",
        "tstcPlugins": [
            { "name": "sample-tstc-plugin" }
        ]
    }
}
```
Pulgins are applied with the same order of `tstcPlugins` array.

## Existing plugins

* CSS Modules plugin

## Writing a plugin

A tstc plugin exports a function that conforms to `TSTCPlugin` interface as default exports.

```ts
import { TSTCPlugin } from 'tstc';

export default const plugin: TSTCPlugin = (transform) => {
    // Code here
    transform((node) => {
        return node;
    });
}
```

The `"main"` field of your plugin `package.json` should point to JavaScript file that exports the plugin function using CommonJS `module.exports`.

