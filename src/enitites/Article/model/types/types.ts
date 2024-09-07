import { User } from 'enitites/User';

export enum ArticleSortField {
    VIEWS = 'views',
    TITLE = 'title',
    CREATED = 'createdAt',
}

export enum ArticleBlockType {
    TEXT = 'TEXT',
    CODE = 'CODE',
    IMAGE = 'IMAGE'
}

export enum ArticleType {
    ALL = 'ALL',
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS'
}

export enum ArticleView {
    BIG = 'big',
    SMALL = 'small',
}

export interface IBaseBlock {
    id: string;
    type: ArticleBlockType;
}

export interface ICodeBlock extends IBaseBlock {
    type: ArticleBlockType.CODE;
    code: string;
}

export interface ITextBlock extends IBaseBlock {
    type: ArticleBlockType.TEXT;
    title?: string;
    paragraphs: string[];
}

export interface IImageBlock extends IBaseBlock {
    type: ArticleBlockType.IMAGE;
    title?: string;
    src: string;
}

export type ArticleBlock = ICodeBlock | ITextBlock | IImageBlock;

export interface IArticle {
    id: string;
    title: string;
    subtitle?: string;
    user: User;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[],
    blocks: ArticleBlock[]
}
