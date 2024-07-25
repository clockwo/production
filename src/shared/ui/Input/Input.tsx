import { ChangeEvent, InputHTMLAttributes, memo } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

export enum InputStatus {
    ERROR = 'error'
}

interface InputProps extends HTMLInputProps {
    onChange?: (value: string) => void;
    value?: string,
    placeHolderText?: string,
    status?: InputStatus,
    errorMessage?: string
    label?: string
    readonly?: boolean
}

export const Input = memo((props: InputProps) => {
    const {
        onChange,
        value,
        placeHolderText,
        status,
        errorMessage,
        label,
        readonly = false,
        ...otherProps
    } = props;

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
    };

    return (
        <div className={cls.wrapper}>
            {label && <p className={cls.label}>{label}</p>}
            <input
                type="text"
                className={classNames(cls.Input, { [cls.disabled]: readonly }, [cls.status])}
                placeholder={placeHolderText}
                value={value}
                onChange={onInputChange}
                readOnly={readonly}
                {...otherProps}
            />
            {errorMessage && <span className={cls.errorMessage}>{errorMessage}</span>}
        </div>

    );
});
