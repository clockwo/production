export type Mods = Record<string, boolean | string | undefined>;

const classNames = (
    cls: string,
    mods: Mods = {},
    additional: Array<string | undefined> = [],
): string => [
    cls,
    ...additional,
    ...Object.entries(mods)
        .filter(([className, value]) => Boolean(value))
        .map(([className, value]) => className),
].join(' ').trim();

export default classNames;
