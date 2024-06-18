import React, { useEffect, useMemo, useState } from 'react';
import * as api from '../api/categories';

export const CategoriesContext = React.createContext({
  getAll: () => [],
  add: () => {},
  remove: () => {},
  update: () => {},
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const loadCategories = () => api.getAll().then(setCategories);

  useEffect(() => {
    loadCategories();
  }, []);

  const value = useMemo(() => ({
    getAll: () => {
      return categories;
    },
    add: async (category) => {
      const newCategory = await api.add(category);

      setCategories([...categories, newCategory]);
    },
    remove: async (id) => {
      await api.remove(id);

      setCategories(categories.filter(category => category._id !== id));
    },
    update: async () => {
      return;
    }
  }), [categories]);

  return (
    <CategoriesProvider value={value}>
      {children}
    </CategoriesProvider>
  );
};
