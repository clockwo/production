import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, ButtonTheme } from '@/shared/ui/Button';

interface LanguageSwitcherProps {
    short?: boolean;
}

export const LanguageSwitcher = memo(({ short }: LanguageSwitcherProps) => {
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
