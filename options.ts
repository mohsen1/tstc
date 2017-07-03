import { CommanderStatic } from 'commander';

/**
 * Add all tsc command line options
 * @param commander
 */
export function addTscOptions(commander: CommanderStatic) {
    commander
        .option('--all', 'Show all compiler options.')
        .option('--init', 'Initializes a TypeScript project and creates a tsconfig.json file.')
        .option('-p [FILE OR DIRECTORY], --project [FILE OR DIRECTORY]', 'Compile the project given the path to its configuration file, or to a folder with a \'tsconfig.json\'')
    // .option(' --pretty                                           Stylize errors and messages using color and context (experimental).
    // .option(' -w, --watch                                        Watch input files.
    // .option(' -t VERSION, --target VERSION                       Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'.
    // .option(' -m KIND, --module KIND                             Specify module code generation: 'commonjs', 'amd', 'system', 'umd' or 'es2015'.
    // .option(' --lib                                              Specify library files to be included in the compilation:
    // .option('                                                      'es5' 'es6' 'es2015' 'es7' 'es2016' 'es2017' 'esnext' 'dom' 'dom.iterable' 'webworker' 'scripthost' 'es2015.core' 'es2015.collection' 'es2015.generator' 'es2015.iterable' 'es2015.promise' 'es2015.proxy' 'es2015.reflect' 'es2015.symbol' 'es2015.symbol.wellknown' 'es2016.array.include' 'es2017.object' 'es2017.sharedmemory' 'es2017.string' 'esnext.asynciterable'
    // .option(' --allowJs                                          Allow javascript files to be compiled.
    // .option(' --jsx KIND                                         Specify JSX code generation: 'preserve', 'react-native', or 'react'.
    // .option(' -d, --declaration                                  Generates corresponding '.d.ts' file.
    // .option(' --sourceMap                                        Generates corresponding '.map' file.
    // .option(' --outFile FILE                                     Concatenate and emit output to single file.
    // .option(' --outDir DIRECTORY                                 Redirect output structure to the directory.
    // .option(' --removeComments                                   Do not emit comments to output.
    // .option(' --noEmit                                           Do not emit outputs.
    // .option(' --strict                                           Enable all strict type-checking options.
    // .option(' --noImplicitAny                                    Raise error on expressions and declarations with an implied 'any' type.
    // .option(' --strictNullChecks                                 Enable strict null checks.
    // .option(' --noImplicitThis                                   Raise error on 'this' expressions with an implied 'any' type.
    // .option(' --alwaysStrict                                     Parse in strict mode and emit "use strict" for each source file.
    // .option(' --noUnusedLocals                                   Report errors on unused locals.
    // .option(' --noUnusedParameters                               Report errors on unused parameters.
    // .option(' --noImplicitReturns                                Report error when not all code paths in function return a value.
    // .option(' --noFallthroughCasesInSwitch                       Report errors for fallthrough cases in switch statement.
    // .option(' --types                                            Type declaration files to be included in compilation.
}
