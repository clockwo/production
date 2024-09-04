const getQueryParams = (params: Record<string, string>) => {
    const searchParams = new URLSearchParams(window.location.search);
    Object.entries(params).forEach(([key, value]) => {
        searchParams.set(key, value);
    });
    return `?${searchParams.toString()}`;
};

export const addQueryParams = (params: Record<string, string>) => {
    window.history.pushState(null, '', getQueryParams(params));
};
