import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from '@/shared/lib/classNames/classNames';
import { Select, SelectOptions } from '@/shared/ui/Select/Select';
import { SortOrder } from '@/shared/types';
import styles from './ArticleSelectSort.module.scss';
import { ArticleSortField } from '@/entities/Article';

interface ArticleSelectSortProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (order: SortOrder) => void;
    onChangeSort: (order: ArticleSortField) => void;
}

export const ArticleSelectSort = (props: ArticleSelectSortProps) => {
    const {
        sort, order, onChangeOrder, onChangeSort, className,
    } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOptions<SortOrder>[]>(() => [
        {
            value: SortOrder.ASC,
            content: t('Ascending'),
        },
        {
            value: SortOrder.DESC,
            content: t('Descending'),
        },
    ], [t]);

    const sortFieldOptions = useMemo<SelectOptions<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('Created at'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('By title'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('By views'),
        },
    ], [t]);

    return (
        <div className={classNames(styles.ArticleSelectSort, {}, [className])}>
            <Select
                label={t('Sort by')}
                value={sort}
                options={sortFieldOptions}
                onChange={onChangeSort}
            />
            <Select
                label={t('Order by')}
                value={order}
                options={orderOptions}
                onChange={onChangeOrder}
            />
        </div>
    );
};
