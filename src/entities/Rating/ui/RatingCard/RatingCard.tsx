import { useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

import styles from './RatingCard.module.scss';

import { useModal } from '@/shared/hooks/useModal/useModal';
import classNames from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';
import { Input } from '@/shared/ui/Input';
import { Modal } from '@/shared/ui/Modal';
import { HStack, VStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating';
import { Text, TextColor } from '@/shared/ui/Text';

interface RatingCardProps {
    className?: string;
    title?: string;
    rating?: number;
    feedBackTitle?: string;
    hasFeedBack?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
}

export const RatingCard = (props: RatingCardProps) => {
    const {
        className,
        title = 'empty',
        rating = 0,
        feedBackTitle,
        hasFeedBack,
        onAccept,
        onCancel,
    } = props;
    const { t } = useTranslation();
    const { isOpen, setOpen, setClose } = useModal();
    const [starsCount, setStarsCount] = useState(rating);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedBack) {
            setOpen();
        } else {
            onAccept?.(selectedStarsCount);
        }
    }, [hasFeedBack, onAccept, setOpen]);

    const onAcceptClick = useCallback(() => {
        setClose();
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, setClose, starsCount]);

    const onCloseClick = useCallback(() => {
        setClose();
        onCancel?.(starsCount);
    }, [onCancel, setClose, starsCount]);

    const content = (
        <VStack max gap="16" align="center">
            <Text title={feedBackTitle} color={TextColor.INVERTED} />
            <Input onChange={setFeedback} placeholder={t('Your review')} />
            <HStack gap="8" justify="between" max>
                <Button theme={ButtonTheme.BACKGROUND_INVERTED} onClick={onAcceptClick}>Отправить</Button>
                <Button theme={ButtonTheme.BACKGROUND_INVERTED} onClick={onCloseClick}>Закрыть</Button>
            </HStack>
        </VStack>
    );

    return (
        <>
            <VStack align="center" gap="16" className={classNames(styles.RatingCard, {}, [className])} max>
                <Text title={starsCount ? 'Спасибо за оценку!' : title} color={TextColor.INVERTED} />
                <StarRating rating={starsCount} onClick={onSelectStars} />
            </VStack>
            <BrowserView>
                <Modal isOpen={isOpen} onClose={setClose}>
                    {content}
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isOpen} onClose={setClose}>
                    {content}
                </Drawer>
            </MobileView>
        </>
    );
};
