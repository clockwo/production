import {
    JsxAttribute, Node, Project, ts,
} from 'ts-morph';
import SyntaxKind = ts.SyntaxKind;

const project = new Project();
const removedFeatureName = process.argv[2]; // name
const featureState = process.argv[3]; // off/on

const toggleFunctionName = 'toggleFeatures';
const toggleReactElementName = 'ToggleFeatures';

if (!removedFeatureName) {
    throw new Error('Укажите название фича-флага');
}

if (featureState !== 'off' && featureState !== 'on') {
    throw new Error('Укажите правильное состояние (on или off)');
}

project.addSourceFilesAtPaths('src/**/*.{ts,tsx}');

const files = project.getSourceFiles();

const isToggleFunction = (node: Node) => {
    let isToggleNode = false;
    if (node.asKind(SyntaxKind.CallExpression)) {
        node.forEachChild((child) => {
            if (child.isKind(SyntaxKind.Identifier) && child.getText() === toggleFunctionName) {
                isToggleNode = true;
            }
        });
    }
    return isToggleNode;
};

const isToggleComponent = (node: Node) => {
    let isToggleNode = false;
    if (node.asKind(SyntaxKind.JsxSelfClosingElement)) {
        const identifier = node.getFirstDescendantByKind(SyntaxKind.Identifier);
        isToggleNode = identifier?.getText() === toggleReactElementName;
    }
    return isToggleNode;
};

const replaceToggleFunction = (node: Node) => {
    if (isToggleFunction(node)) {
        const objectOptions = node.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression);

        if (!objectOptions) return;

        const onFunctionProperty = objectOptions.getProperty('on');
        const offFunctionProperty = objectOptions.getProperty('off');

        const featureNameProperty = objectOptions.getProperty('name');

        const onFunction = onFunctionProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
        const offFunction = offFunctionProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
        const featureName = featureNameProperty
            ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
            ?.getText()
            .slice(1, -1);

        if (featureName !== removedFeatureName) return;

        if (featureState === 'off') {
            node.replaceWithText(offFunction?.getBody().getText() ?? '');
        }

        if (featureState === 'on') {
            node.replaceWithText(onFunction?.getBody().getText() ?? '');
        }
    }
};

const getAttributeNodeByName = (jsxAttributes: JsxAttribute[], name: string) => jsxAttributes.find((node) => node.getNameNode().getText() === name);

const replaceComponent = (node: Node) => {
    if (isToggleComponent(node)) {
        const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute);

        const onAttribute = getAttributeNodeByName(attributes, 'on');
        const offAttribute = getAttributeNodeByName(attributes, 'off');

        const featureNameAttribute = getAttributeNodeByName(attributes, 'feature');

        const featureName = featureNameAttribute?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
            ?.getText()
            ?.slice(1, -1);

        if (featureName !== removedFeatureName) return;

        const offValue = offAttribute?.getFirstDescendantByKind(SyntaxKind.JsxExpression)?.getExpression();
        const onValue = onAttribute?.getFirstDescendantByKind(SyntaxKind.JsxExpression)?.getExpression();

        if (featureState === 'on' && onValue) {
            node.replaceWithText(onValue.getText());
        }

        if (featureState === 'off' && offValue) {
            node.replaceWithText(offValue.getText());
        }
    }
};

files.forEach((sourceFile) => {
    sourceFile.forEachDescendant((node) => {
        replaceToggleFunction(node);
        replaceComponent(node);
    });
});

project.save();
