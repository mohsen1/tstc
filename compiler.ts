import * as ts from 'typescript';

import { TSTCPlugin } from './';

/**
 * Compile and return result TypeScript
 * @param filePath Path to file to compile
 */
export function compile(
    rootNames: string[],
    compilerOptions: ts.CompilerOptions,
    transformerPlugins: TSTCPlugin[],
) {
    const program = ts.createProgram(rootNames, compilerOptions);
    const sourceFiles = program.getSourceFiles().filter(sf => !sf.isDeclarationFile);
    const typeChecker = program.getTypeChecker();
    const transforms = transformerPlugins
        .map((plugin) => (context: ts.TransformationContext) => plugin(context, typeChecker));

    const result = ts.transform(sourceFiles, transforms);

    // Print diagnostics
    if (result.diagnostics && result.diagnostics.length) {
        for (const diag of result.diagnostics) {
            if (diag.file && diag.start) {
                const pos = diag.file.getLineAndCharacterOfPosition(diag.start);
                console.log(`(${pos.line}, ${pos.character}) ${diag.messageText}`);
            }
        }
    }

    const emitResult = program.emit();

    if (emitResult.emitSkipped) {
        throw new Error('Failed to emit JavaScript');
    }
}
