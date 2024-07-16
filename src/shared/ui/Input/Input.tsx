import { ChangeEvent, InputHTMLAttributes, memo } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    onChange?: (value: string) => void;
    value?: string,
    placeHolderText?: string,
    status?: InputStatus,
    errorMessage?: string
}

export enum InputStatus {
    ERROR = 'error'
}

export const Input = memo((props: InputProps) => {
    const {
        onChange,
        value,
        placeHolderText,
        status,
        errorMessage,
        ...otherProps
    } = props;

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <div className={cls.wrapper}>
            <input
                type="text"
                className={classNames(cls.Input, {}, [cls[status]])}
                {...otherProps}
                placeholder={placeHolderText}
                value={value}
                onChange={onInputChange}
            />
            {errorMessage && <span className={cls.errorMessage}>{errorMessage}</span>}
        </div>

    );
});
