import { ApplicationStatus, Role } from '../../src/apollo/__generated__/types';

function enumKeys<O extends object, K extends keyof O = keyof O>(obj: O): K[] {
  return Object.keys(obj).filter((k) => Number.isNaN(+k)) as K[];
}

function enumToList<O extends object>(obj: O) {
  const keys = enumKeys(obj);
  return keys.map((key) => obj[key]);
}

export const roles = enumToList(Role);

export const applicationStatusList = enumToList(ApplicationStatus);
