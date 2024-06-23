import React from 'react';

export const ThemeContext = React.createContext({
  toggleTheme: () => {}, // default empty function
});

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  const toggleTheme = () => {
    const currentTheme = document.body.getAttribute('data-theme');
    document.body.setAttribute(
      'data-theme',
      currentTheme === 'dark' ? 'light' : 'dark',
    );
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
