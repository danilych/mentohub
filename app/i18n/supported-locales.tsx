export enum SupportedLocale {
  EN = 'en',
  UA = 'ua',
}

export enum localeNumbersSeparators {
  'en' = ',',
  'ua' = ',',
}

export const DEFAULT_LOCALE = SupportedLocale.EN

export const SUPPORTED_LOCALES = Object.values(SupportedLocale)

export function isSupportedLocale(locale: string): locale is SupportedLocale {
  return SUPPORTED_LOCALES.includes(locale as SupportedLocale)
}