import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Currency } from '../../model/types/types';

import { ListBox } from '@/shared/ui/depricated/popups';

interface CurrencySelectProps {
    value?: Currency
    onChange?: (value: Currency) => void
    readonly?: boolean
}

const options = [
    { value: Currency.RUB, label: Currency.RUB },
    { value: Currency.EUR, label: Currency.EUR },
    { value: Currency.USD, label: Currency.USD },
];

export const CurrencySelect = memo(({
    value, onChange, readonly,
}: CurrencySelectProps) => {
    const { t } = useTranslation();

    return (
        <ListBox
            options={options}
            value={value}
            onChange={onChange}
            anchor="top"
            readonly={readonly}
            label={t('Set currency')}
        />
    );
});
