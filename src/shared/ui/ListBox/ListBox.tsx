import {
    Listbox as HListBox, ListboxButton, ListboxOption, ListboxOptions,
} from '@headlessui/react';
import { AnchorPropsWithSelection } from '@headlessui/react/dist/internal/floating';
import styles from './ListBox.module.scss';

export interface ListBoxOption<T extends string> {
    value: T;
    label: string;
}

interface ListBoxProps<T extends string> {
    label?: string;
    value?: T;
    options: ListBoxOption<T>[]
    onChange?: (value: T) => void;
    anchor?: AnchorPropsWithSelection
}

export const ListBox = <T extends string>(props: ListBoxProps<T>) => {
    const {
        label = '',
        options,
        onChange,
        value = '',
        anchor = 'bottom',
    } = props;

    const onSelectChange = (value: T) => {
        onChange?.(value);
    };

    return (
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
    );
};
