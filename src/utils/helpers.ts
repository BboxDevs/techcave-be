import fs from 'fs';
import { z } from 'zod';

type ErrorCallback = () => void;

const isUrl = (input: string): boolean => {
  const urlSchema = z.string().url();

  return urlSchema.safeParse(input).success;
};

const isString = (input: unknown): input is string => {
  return typeof input === 'string';
};

export const returnValidatedURL = (
  input: unknown,
  errorCallback: ErrorCallback
): string => {
  if (!isString(input) || !isUrl(input)) errorCallback();

  return input as string;
};

export const readFile = (filePath: string) => {
  return fs.readFileSync(filePath, 'utf-8');
};
