export const replaceSpacesWithDash = (title: string): string => {
  const lowercaseTitle: string = lowerCase(`${title}`);
  return lowercaseTitle.replace(/\/| /g, '-'); // replace / and space with -
};

export const replaceDashWithSpaces = (title: string): string => {
  const lowercaseTitle: string = lowerCase(`${title}`);
  return lowercaseTitle.replace(/-|\/| /g, ' '); // replace - / and space with -
};

export const replaceAmpersandWithSpace = (title: string): string => {
  return title.replace(/&/g, '');
};

export const replaceAmpersandAndDashWithSpace = (title: string): string => {
  const titleWithoutDash = replaceDashWithSpaces(title);
  return titleWithoutDash.replace(/&| /g, ' ');
};

export function firstLetterUppercase(str: string): string {
  const valueString = str.toLowerCase();
  return valueString
    .split(' ')
    .map(
        (value: string) =>
        `${value.charAt(0).toUpperCase()}${value.slice(1).toLowerCase()}`
    )
    .join(' ');
}

export function lowerCase(str: string): string {
  return str.toLowerCase();
}

export const toUpperCase = (str: string): string => {
  return str ? str.toUpperCase() : str;
};

export function isEmail(email: string): boolean {
  const regexExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
  return regexExp.test(email);
}

export function isDataURL(value: string): boolean {
  const dataUrlRegex =
  /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\\/?%\s]*)\s*$/i;
  return dataUrlRegex.test(value);
}
