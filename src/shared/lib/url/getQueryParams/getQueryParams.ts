export const getQueryParams = <T>(): T => {
    const query = new URLSearchParams(window.location.search);

    // @ts-ignore
    return query.entries().reduce((prev, [key, value]) => {
        if (value) {
            prev[key] = value;
        }
        return prev;
    }, {});
};
