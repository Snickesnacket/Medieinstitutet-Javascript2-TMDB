import { useContext } from 'react';
import { LSContext } from '../contexts/localstorageContext';

const useViewed = () => {
  const viewContext = useContext(LSContext);

  if (!viewContext) {
    throw new Error(
      'Trying to use ThemeContext outside of ThemeContextProvider'
    );
  }

  return viewContext;
};

export default useViewed;
