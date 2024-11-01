import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Country } from '../../model/types/types';

import { ListBox } from '@/shared/ui/depricated/popups';

interface CountrySelectProps {
    value?: Country
    onChange?: (value: Country) => void
    readonly?: boolean
}

const options = [
    { value: Country.RUSSIA, label: Country.RUSSIA },
    { value: Country.UKRAINE, label: Country.UKRAINE },
    { value: Country.USA, label: Country.USA },
    { value: Country.POLAND, label: Country.POLAND },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { t } = useTranslation();
    const { value, onChange, readonly } = props;
    return (
        <ListBox
            options={options}
            value={value}
            onChange={onChange}
            anchor="top"
            readonly={readonly}
            label={t('Set country')}
        />
    );
});
