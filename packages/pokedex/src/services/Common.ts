/**
 * Get Id from Url.
 *
 * @param  {String} url - URL of content item.
 *
 * @return {number} id of content item.
 */
export const getIdFromURL = (url: string): number | undefined => {
    if (!url || typeof url === "undefined") return undefined;
    const urlParts = url.split("/");
    return Number(urlParts[urlParts.length - 2]);
}
