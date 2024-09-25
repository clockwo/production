import { ChangeEvent, useMemo } from 'react';

import cls from './Select.module.scss';

import classNames, { Mods } from '@/shared/lib/classNames/classNames';

export interface SelectOptions<T extends string> {
    value: T,
    content: string
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: SelectOptions<T>[];
    value?: T;
    onChange: (value: T) => void;
    readonly?: boolean
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className, label, options, onChange, value, readonly,
    } = props;

    const optionList = useMemo(() => options?.map((opt) => (
        <option className={cls.option} key={opt.value} value={opt.value}>
            {opt.content}
        </option>
    )), [options]);

    const mods: Mods = {};

    const onChangeClick = (event: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(event.target.value as T);
    };

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && <span className={cls.label}>{label}</span>}
            <select disabled={readonly} className={cls.select} value={value} onChange={onChangeClick}>
                {optionList}
            </select>
        </div>
    );
};
