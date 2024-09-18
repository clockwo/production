import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ListBox } from 'shared/ui/popups/ui/ListBox/ListBox';
import { Currency } from '../../model/types/types';

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
