import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext from './ThemeContext';

type ThemeProps = {
  theme:any,
  children:any
}

const ThemeProvider = ({ theme, children }:ThemeProps) => (
  <ThemeContext.Provider value={theme}>
    {children}
  </ThemeContext.Provider>
);

ThemeProvider.propTypes = {
  theme: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
};

ThemeProvider.defaultProps = {};

export default ThemeProvider;
