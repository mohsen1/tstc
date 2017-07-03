import * as fs from 'fs';
const strip = require('strip-json-comments');

/**
 * Read JSON file with comments
 * @param filePath
 */
export function readJSON<T>(filePath: string) {
    return JSON.parse(strip(fs.readFileSync(filePath).toString())) as T;
}
