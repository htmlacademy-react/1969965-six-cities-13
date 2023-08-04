export function turnFirstCharToUppercase(string: string): string {
  const result = string.replace(string[0], string[0].toUpperCase());
  return result;
}
