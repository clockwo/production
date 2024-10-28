import { Project } from 'ts-morph';

const project = new Project();

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

const layer = 'src/shared';

const isAbsolutePath = (value: string): boolean => value.startsWith(layer);

files.forEach((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations();
    importDeclarations.forEach((importDeclaration) => {
        const value = importDeclaration.getModuleSpecifierValue();
        if (isAbsolutePath(value)) {
            // console.log(`@/${value.split('/').slice(1).join('/')}`);
            importDeclaration.setModuleSpecifier(`@/${value.split('/').slice(1).join('/')}`);
        }
    });
});

project.save();
