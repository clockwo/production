import { ChangeEvent, memo, useMemo } from 'react';
import classNames, { TMods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOptions {
    value: string,
    content: string
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOptions[];
    value?: string;
    onChange: (value: string) => void;
    readonly?: boolean
}

export const Select = memo((props: SelectProps) => {
    const {
        className, label, options, onChange, value, readonly,
    } = props;

    const optionList = useMemo(() => options?.map((opt) => (
        <option className={cls.option} key={opt.value} value={opt.value}>
            {opt.content}
        </option>
    )), [options]);

    const mods: TMods = {};

    const onChangeClick = (event: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(event.target.value);
    };

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && <span className={cls.label}>{label}</span>}
            <select disabled={readonly} className={cls.select} value={value} onChange={onChangeClick}>
                {optionList}
            </select>
        </div>
    );
});
