import * as ts from 'typescript';

export interface TSTCPluginOptions {
    [key: string]: string;
}

export type TSTCPluginFactory =
    (options: TSTCPluginOptions) => TSTCPlugin

/**
 * TSTPlugin is function that returns a transformer function and gets transformation
 * context and an optional type checker as arguments.
 */
export type TSTCPlugin =
        (context: ts.TransformationContext, options: TSTCPluginOptions, typeChecker?: ts.TypeChecker) =>
            (sourceFile: ts.SourceFile) => ts.SourceFile;
