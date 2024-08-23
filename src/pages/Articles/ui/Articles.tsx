import classNames from 'shared/lib/classNames/classNames';
import { ArticleList, IArticle } from 'enitites/Article';
import styles from './Articles.module.scss';

interface ArticleProps {
    className?: string;
}

const mook = {
    id: '1',
    title: 'JavaScript News',
    subtitle: 'Что нового в JavaScript за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1500,
    createdAt: '26.02.2022',
    type: ['IT', 'Programming'],
    user: {
        id: '1',
        username: 'Maksim Freelancer',
        avatar: 'https://play-lh.googleusercontent.com/Qen7AErcMTWKrlhPpQrMS6teGFffDDc3NHMlf7LbecC_Tlxp6OdaEUMLPJDnd1bT9w=w526-h296-rw',
    },
    blocks: [
        {
            id: '1',
            type: 'TEXT',
            title: 'Основные обновления',
            paragraphs: [
                'JavaScript продолжает развиваться с новыми функциями и улучшениями. В этом году было в'
                + 'ведено множество новых возможностей, таких как оператор Nullish Coalescing и Optional Chaining.',
                'Разработчики активно обсуждают перспективы п'
                + 'ерехода на ES2022 и его влияние на современные приложения.',
            ],
        },
        {
            id: '2',
            type: 'IMAGE',
            src: 'https://example.com/js-update-2022.png',
            title: 'График использования ES2022',
        },
    ],
} as IArticle;

const Articles = (props: ArticleProps) => {
    const { className } = props;

    return (
        <div className={classNames(styles.Article, {}, [className])}>
            <ArticleList
                articles={new Array(16).fill(0).map((_, index) => ({
                    ...mook, id: String(index),
                }))}
                isLoading={false}
            />
        </div>
    );
};

export default Articles;
