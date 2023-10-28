export enum SupportedLocale {
  EN = 'en',
  UK = 'uk',
}

export enum localeNumbersSeparators {
  'en' = ',',
  'uk' = ',',
}

export const DEFAULT_LOCALE = SupportedLocale.EN

export const SUPPORTED_LOCALES = Object.values(SupportedLocale)

export function isSupportedLocale(locale: string): locale is SupportedLocale {
  return SUPPORTED_LOCALES.includes(locale as SupportedLocale)
}