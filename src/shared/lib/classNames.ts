type TMods = Record<string, boolean | string>;

const classNames = (
    cls: string,
    mods: TMods = {},
    additional: string[] = [],
): string => [
    cls,
    ...additional,
    ...Object.entries(mods)
        .filter(([className, value]) => value)
        .map(([className, value]) => className),
].join(' ').trim();

export default classNames;
