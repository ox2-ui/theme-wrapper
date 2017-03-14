import React, { PropTypes } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '@ox2/theme-mui';

const muiTheme = getMuiTheme(theme);


/**
 * Theme Component
 */
const Theme = ({ children }) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    {children}
  </MuiThemeProvider>
);


Theme.propTypes = {
  children: PropTypes.node.isRequired,

};

export default Theme;
