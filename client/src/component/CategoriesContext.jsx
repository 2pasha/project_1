// import React, { useEffect, useMemo, useState } from 'react';
// import * as api from '../api/categories';

// export const CategoriesContext = React.createContext({
//   getAll,
//   // add,
//   // remove,
//   // update,
// });

// export const CategoriesProvider = ({ children }) => {
//   const [categories, setCategories] = useState([]);

//   const loadCategories = () => api.getAll().then(setCategories);

//   useEffect(() => {
//     loadCategories();
//   }, []);

//   const value = useMemo(() => ({
//     getAll: () => {
//       return categories;
//     }
//   }), [categories]);

//   return (
//     <CategoriesProvider value={value}>
//       {children}
//     </CategoriesProvider>
//   );
// };
