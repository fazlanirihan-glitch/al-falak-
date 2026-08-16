import en from '@/locales/en.json';
import ar from '@/locales/ar.json';

export type Locale = 'en' | 'ar';
export const locales: Locale[] = ['en', 'ar'];
export const defaultLocale: Locale = 'en';

export const localeConfig = {
  en: { name: 'English', nativeName: 'English', dir: 'ltr' as const, flag: '🇬🇧' },
  ar: { name: 'Arabic', nativeName: 'العربية', dir: 'rtl' as const, flag: '🇦🇪' },
};

const dictionaries = { en, ar };

export type Dictionary = typeof en;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getDir(locale: Locale): 'ltr' | 'rtl' {
  return localeConfig[locale].dir;
}
