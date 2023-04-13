export function siteUrl(path = "") {
    while (path.startsWith("/")) {
        path = path.slice(1);
    }
    return `${import.meta.env.BASE_URL}${path}`;
}
