export function slugify(input: string): string {
  return input
    .normalize('NFKD')            // split accents
    .replace(/[\u0300-\u036f]/g, '') // remove diacritics
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')  // non-alnum -> hyphen
    .replace(/^-+|-+$/g, '');     // trim hyphens
}
