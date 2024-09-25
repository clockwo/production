import { Project } from 'ts-morph';
import path from 'path';

const project = new Project();

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();
const uiPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');
const sharedUiDir = project.getDirectory(uiPath);
const componentsDirs = sharedUiDir?.getDirectories();

// componentsDirs?.forEach((dir) => {
//     const indexFile = dir.getSourceFile('index.ts');
//
//     if (indexFile && !indexFile.getFullText().includes('*')) return;
//
//     if (indexFile) {
//         indexFile.delete();
//     }
//
//     dir.createSourceFile('index.ts', `export * from './${dir.getBaseName()}';\n`);
// });

files.forEach((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations();
    importDeclarations.forEach((importDeclaration) => {
        const value = importDeclaration.getModuleSpecifierValue();
        if (value.startsWith('@/shared/ui')) {
            const newPath = value.split('/').slice(0, 4).join('/');
            importDeclaration.setModuleSpecifier(newPath);
        }
    });
});

project.save();
