import type React from 'react';

import styles from './Icon.module.scss';

import classNames from '@/shared/lib/classNames/classNames';
import { memo } from 'react';

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>;

interface IconBaseProps extends SvgProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

interface NonClickableIconProps extends IconBaseProps {
    clickable?: false;
}

interface ClickableBaseProps extends IconBaseProps {
    clickable?: true;
    onClick: () => void;
}

type IconProps = NonClickableIconProps | ClickableBaseProps;

export const Icon = memo((props: IconProps) => {
    const { className, Svg, width, height, clickable, ...otherProps } = props;
    const icon = (
        <Svg
            width={width}
            height={height}
            className={classNames(styles.Icon, {}, [className])}
            {...otherProps}
            onClick={undefined}
        />
    );

    if (clickable) {
        return (
            <button
                type="button"
                style={{
                    width,
                    height,
                }}
                onClick={props.onClick}
                className={styles.button}
            >
                {icon}
            </button>
        );
    }

    return icon;
});
