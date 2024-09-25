import { memo, useState } from 'react';

import { Button, ButtonTheme } from '../Button/Button';
import { HStack } from '../Stack';
import styles from './StarRating.module.scss';

import StarIcon from '@/shared/assets/svg/star.svg';
import classNames from '@/shared/lib/classNames/classNames';

interface StarRatingProps {
    className?: string;
    rating?: number;
    onClick?: (value: number) => void;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
    const {
        className, rating = 0, onClick,
    } = props;
    const [currentStar, setCurrentStar] = useState(rating);
    const [isSelected, setIsSelected] = useState(Boolean(rating));

    const onChangeStar = (value: number) => () => {
        if (!isSelected) {
            onClick?.(value);
            setCurrentStar(value);
            setIsSelected(true);
        }
    };

    const onHover = (value: number) => () => {
        if (!isSelected) {
            setCurrentStar(value);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStar(0);
        }
    };

    return (
        <HStack gap="8" onMouseLeave={onLeave} className={classNames(styles.StarRating, {}, [className])}>
            {
                stars.map((star) => (
                    <Button
                        key={star}
                        theme={ButtonTheme.CLEAR}
                        onClick={onChangeStar(star)}
                        onMouseEnter={onHover(star)}
                    >
                        <StarIcon
                            className={classNames('', {
                                [styles.selected]: currentStar >= star,
                                [styles.isSelected]: isSelected,
                            }, [])}
                        />
                    </Button>
                ))
            }
        </HStack>
    );
});
