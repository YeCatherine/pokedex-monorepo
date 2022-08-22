/**
 * @module
 *
 * To Title Case
 * @function
 * @param str
 */
export default function toTitleCase(str: string): string {
  return str.replace(/\w\S*/g, function prepare(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
