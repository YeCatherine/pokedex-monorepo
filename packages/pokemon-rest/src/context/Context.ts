import { createContext, useContext } from 'react';

/**
 * The global content type.
 */
export type GlobalContent = {
  language: string
  setLanguage: (c: string) => void
}

export const DEFAULT_LANGUAGE = 'en';
/**
 * The application Language.
 */
export const MyGlobalContext = createContext<GlobalContent>({
  language: DEFAULT_LANGUAGE,
  setLanguage: () => {
  }
});
export const useGlobalContext = () => useContext(MyGlobalContext);
