import * as path from 'path';
import * as fs from 'fs';
import * as ts from 'typescript';
import * as commander from 'commander';

export * from './tst.plugin';

import { readJSON } from './helpers';
import { addTscOptions } from './options';
import { compile } from './compiler';
import { TSTCPluginFactory, TSTCPluginOptions, TSTCPlugin } from './tst.plugin';

interface ExtendedConfig {
    compilerOptions?: ts.CompilerOptions;
    tstcPlugins?: Array<{name: string; options: TSTCPluginOptions;}>;
}

commander.version(require('../package.json').version);
addTscOptions(commander);

const projectPath = path.resolve(commander.project || __dirname);
const config = readJSON<ExtendedConfig>(path.join(projectPath, 'tsconfig.json'));
const projectPackage = readJSON<any>(path.join(projectPath, 'package.json'));

const tstcPlugins = config.tstcPlugins;

// Perform checks
if  (config.tstcPlugins) {
    if (!Array.isArray(config.tstcPlugins)) {
        throw new TypeError('tstPlugins must be an array');
    }
    config.tstcPlugins.forEach((plugin, index) => {
        if (typeof plugin.name !== 'string') {
            throw new TypeError(`plugin at index ${index} does not have a name`);
        };
        if (!projectPackage.dependencies || projectPackage.dependencies[plugin.name]) {
            throw new ReferenceError(`Can not find plugin ${name} in package.json dependencies`);
        }
    });
}

const plugins = tstcPlugins.map(({name, options = {}}) => {
    const pluginFactory: TSTCPluginFactory = require(name);
    return pluginFactory(options);
});

compile([], config.compilerOptions, plugins)
