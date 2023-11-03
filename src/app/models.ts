export interface IConfig {
  hideFlag?: boolean;
  hideCode?: boolean;
  hideName?: boolean;
  hideDialCode?: boolean;
  hideCapital?: boolean;
  hideLanguage?: boolean;
  hideSearch?: boolean;
}

export interface ICountry {
  name?: string;
  code?: string;
  capital?: string;
  region?: string;
  currency?: ICurrency
  language?: ILanguage
  dialling_code?: string;
  isoCode?: string;
  demonym?: string;
}

export interface ICurrency {
  code?: string | null;
  name?: string;
  symbol?: string | null;
}

export interface ILanguage {
    code?: string;
    name?: string;
    iso639_2?: string,
    nativeName?: string
}
