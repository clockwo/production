import { memo } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import { ICodeBlock } from '@/entities/Article/model/types/types';
import { Button } from '@/shared/ui/Button/Button';
import CopyIcon from '@/shared/assets/svg/copy.svg';
import styles from './ArticleCodeBlock.module.scss';

interface ArticleCodeBlockProps extends Partial<ICodeBlock> {
    className?: string;
}

export const ArticleCodeBlock = memo((props: ArticleCodeBlockProps) => {
    const { className, code } = props;

    const onClick = async () => {
        if (code) {
            await navigator.clipboard.writeText(code);
        }
    };

    return (
        <div className={styles.wrapper}>
            <pre className={classNames(styles.ArticleCodeBlock, {}, [className])}>
                <Button onClick={onClick} className={styles.copyButton}>
                    <CopyIcon />
                </Button>
                <code>
                    {code}
                </code>
            </pre>
        </div>
    );
});
