import styles from './SpinnerLoader.module.scss';

interface SpinnerLoaderProps {
    width?: number;
    padding?: number;
}

export const SpinnerLoader = (props: SpinnerLoaderProps) => {
    const { width, padding } = props;

    return (
        <div
            className={styles.SpinnerLoader}
            style={{
                width: `${width}px`,
                padding: `${padding}px`,
            }}
        />
    );
};
