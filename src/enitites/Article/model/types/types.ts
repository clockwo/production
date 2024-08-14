export enum ArticleBlockType {
    TEXT = 'TEXT',
    CODE = 'CODE',
    IMAGE = 'IMAGE'
}

export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS'
}

interface IBaseBlock {
    id: string;
    type: ArticleBlockType;
}

interface ICodeBlock extends IBaseBlock {
    type: ArticleBlockType.CODE;
    code: string;
}

interface ITextBlock extends IBaseBlock {
    type: ArticleBlockType.TEXT;
    title?: string;
    paragraphs: string[];
}

interface IImageBlock extends IBaseBlock {
    type: ArticleBlockType.IMAGE;
    title?: string;
    src: string;
}

export type ArticleBlock = ICodeBlock | ITextBlock | IImageBlock;

export interface IArticle {
    id: string;
    title: string;
    subtitle?: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[],
    blocks: ArticleBlock[]
}
