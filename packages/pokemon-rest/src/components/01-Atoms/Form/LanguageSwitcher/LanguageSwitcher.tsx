import React, { useEffect, useState } from 'react';
import PokemonListService from '@/services/pokemonListService';
import { useGlobalContext } from '@/context/Context';

/**
 * The language switcher.
 * @param props
 * @constructor The functional component for switching languages.
 */
const LanguageSwitcher: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [currentLanguage, setCurrentLanguage] = useState<string>('en');
  const [languageList, setLanguageList] = useState<Array<string>>([]);
  const { setLanguage } = useGlobalContext();

  useEffect(() => {
    PokemonListService.getLanguages()
      .then((response: any) => {
        setLanguageList(response.data.results.map(language => language.name));
      })
      .catch((e: any) => {
        console.log(e);
      });
  }, []);

  const handleChange = (event) => {
    setCurrentLanguage(event.target.value);
    setLanguage(event.target.value);
  };

  return (
    <div className={className}>
      <select name="languages" value={currentLanguage}
              onChange={handleChange}>
        {languageList.map(language => <option
          key={language} value={language}>{language}</option>)}
      </select>
    </div>
  );
};
export default LanguageSwitcher;
