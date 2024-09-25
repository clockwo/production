import {
    Field, Label, Listbox as HListBox, ListboxButton, ListboxOption, ListboxOptions,
} from '@headlessui/react';
import { AnchorPropsWithSelection } from '@headlessui/react/dist/internal/floating';
import { ReactNode } from 'react';

import styles from './ListBox.module.scss';

export interface ListBoxOption<T extends string> {
    value: T;
    label: ReactNode;
}

interface ListBoxProps<T extends string> {
    label?: string;
    value?: T;
    options: ListBoxOption<T>[]
    onChange?: (value: T) => void;
    anchor?: AnchorPropsWithSelection
    readonly?: boolean
}

export const ListBox = <T extends string>(props: ListBoxProps<T>) => {
    const {
        label = '',
        options,
        onChange,
        value = '',
        anchor = 'bottom',
        readonly = false,
    } = props;

    const onSelectChange = (value: T) => {
        onChange?.(value);
    };

    return (
        <Field className={styles.ListBoxField} disabled={readonly}>
            {label && <Label>{label}</Label>}
            <HListBox
                onChange={onSelectChange}
                value={value}
            >
                <ListboxButton className={styles.button}>{value}</ListboxButton>
                <ListboxOptions transition anchor={anchor} className={styles.options}>
                    {options.map((item) => (
                        <ListboxOption
                            className={styles.option}
                            key={item.value}
                            value={item.value}
                        >
                            {item.label}
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </HListBox>
        </Field>

    );
};
