export type TMods = Record<string, boolean | string | undefined>;

const classNames = (
    cls: string,
    mods: TMods = {},
    additional: Array<string | undefined> = [],
): string => [
    cls,
    ...additional,
    ...Object.entries(mods)
        .filter(([className, value]) => value)
        .map(([className, value]) => className),
].join(' ').trim();

export default classNames;
