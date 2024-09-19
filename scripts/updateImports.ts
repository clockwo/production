import { Project } from 'ts-morph';

const project = new Project();

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

const pathMap: Record<string, string> = {
    app: 'app',
    entities: 'entities',
    features: 'features',
    shared: 'shared',
    pages: 'pages',
    widgets: 'widgets',
};

const isAbsolutePath = (value: string): boolean => {
    const splitString = value.split('/');
    return Boolean(pathMap[splitString[0]]);
};

files.forEach((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations();
    importDeclarations.forEach((importDeclaration) => {
        const value = importDeclaration.getModuleSpecifierValue();
        if (isAbsolutePath(value)) {
            importDeclaration.setModuleSpecifier(`@/${value}`);
        }
    });
});

project.save();
