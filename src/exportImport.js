// If you u use a class or func from another file, first of all u most import that class/func in your target file,
// and before importing the parent file most be export that class/func to use in others source codes.

// V have tow type exporting(deafult, simple).
// export default: is the main exportation of file and you can use this key word for one class/func(in any file, it's unique).
// and called with `export default`.
// It's useage in import is like this => `import NAME from 'source/path';`

// sinmple export: with this key word you can export many class/func.
// It's used like this `import {name} from 'source/path';`.

// EXAMPLE:

export default function exportDefault() {
  console.log("export default...");
}

export const simpleExport = () => {
  console.log("simple export...");
};

// Import Exam:
// 4 Exam V want to import all the exports of this class, V most import them like below:
// import exportDefault, { simpleExport } from "./exportImport";
