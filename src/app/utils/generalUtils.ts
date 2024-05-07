import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function typedObjectEntries<T extends object>(obj: T): Array<[keyof T, T[keyof T]]> {
  return Object.entries(obj) as Array<[keyof T, T[keyof T]]>;
}

export function typedObjectKeys<T extends object>(obj: T): Array<keyof T> {
  return Object.keys(obj) as Array<keyof T>;
}

export function typedObjectValues<T>(obj: Record<string, T>): T[] {
  return Object.values(obj);
}

export function getValueByKey<T extends object, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
