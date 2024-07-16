import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface LanguageSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = memo(({ className, short }) => {
    const { t, i18n } = useTranslation();

    const onToggle = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme={ButtonTheme.BACKGROUND_INVERTED}
            onClick={onToggle}
        >
            {short ? t('Short Translate') : t('Translate')}
            {}
        </Button>
    );
});
