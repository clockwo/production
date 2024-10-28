import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ToggleFeatures } from '@/shared/lib/features';
import { Button as ButtonDepricated, ButtonTheme } from '@/shared/ui/depricated/Button';
import { Button } from '@/shared/ui/redesign/Button';

interface LanguageSwitcherProps {
    short?: boolean;
}

export const LanguageSwitcher = memo(({ short }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const onToggle = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <ToggleFeatures
            feature="isAppRedesign"
            on={
                <Button onClick={onToggle} variant="clear">
                    {short ? t('Short Translate') : t('Translate')}
                </Button>
            }
            off={
                <ButtonDepricated theme={ButtonTheme.BACKGROUND_INVERTED} onClick={onToggle}>
                    {short ? t('Short Translate') : t('Translate')}
                </ButtonDepricated>
            }
        />
    );
});
