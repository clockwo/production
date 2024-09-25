import { memo } from 'react';

import styles from './ArticleViewSelector.module.scss';

import { ArticleView } from '@/entities/Article';
import ListIcon from '@/shared/assets/svg/list.svg';
import TiledIcon from '@/shared/assets/svg/tiled.svg';
import classNames from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';

interface ArticleViewSelectorProps {
    className?: string;
    selectedView: ArticleView;
    viewChange?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.BIG,
        icon: <TiledIcon />,
    },
    {
        view: ArticleView.SMALL,
        icon: <ListIcon />,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, viewChange, selectedView } = props;

    const onClick = (view: ArticleView) => () => {
        viewChange?.(view);
    };

    return (
        <div className={classNames(styles.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((type) => (
                <Button
                    key={type.view}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(type.view)}
                    className={classNames('', { [styles.notSelected]: selectedView !== type.view }, [])}
                >
                    {type.icon}
                </Button>
            ))}
        </div>
    );
});
