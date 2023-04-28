"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@mui/material/styles");

var _index = _interopRequireDefault(require("@mui/material/colors/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var rawTheme = (0, _styles.createTheme)({
  palette: {
    primary: {
      light: '#69696a',
      main: '#28282a',
      dark: '#1e1e1f'
    },
    secondary: {
      light: '#fff5f8',
      main: '#00aCe4',
      dark: '#001F47'
    },
    warning: {
      main: '#ffc071',
      dark: '#ffb25e'
    },
    error: {
      xLight: _index["default"][50],
      main: _index["default"][500],
      dark: _index["default"][700]
    },
    success: {
      xLight: _index["default"][50],
      main: _index["default"][500],
      dark: _index["default"][700]
    }
  },
  typography: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: 14,
    fontWeightLight: 300,
    // Work Sans
    fontWeightRegular: 400,
    // Work Sans
    fontWeightMedium: 700,
    // Roboto Condensed
    fontFamilySecondary: "'Roboto Condensed', sans-serif"
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          fontFamily: "'Work Sans', sans-serif"
        }
      }
    }
  }
});
var fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightMedium,
  fontFamily: rawTheme.typography.fontFamilySecondary,
  textTransform: 'uppercase'
};

var theme = _objectSpread({}, rawTheme, {
  palette: _objectSpread({}, rawTheme.palette, {
    background: _objectSpread({}, rawTheme.palette.background, {
      "default": rawTheme.palette.common.white,
      placeholder: _index["default"][200]
    })
  }),
  typography: _objectSpread({}, rawTheme.typography, {
    fontHeader: fontHeader,
    h1: _objectSpread({}, rawTheme.typography.h1, {}, fontHeader, {
      letterSpacing: 0,
      fontSize: 60
    }),
    h2: _objectSpread({}, rawTheme.typography.h2, {}, fontHeader, {
      fontSize: 48
    }),
    h3: _objectSpread({}, rawTheme.typography.h3, {}, fontHeader, {
      fontSize: 42
    }),
    h4: _objectSpread({}, rawTheme.typography.h4, {}, fontHeader, {
      fontSize: 36
    }),
    h5: _objectSpread({}, rawTheme.typography.h5, {
      fontSize: 20,
      fontWeight: rawTheme.typography.fontWeightLight
    }),
    h6: _objectSpread({}, rawTheme.typography.h6, {}, fontHeader, {
      fontSize: 18
    }),
    subtitle1: _objectSpread({}, rawTheme.typography.subtitle1, {
      fontSize: 18
    }),
    body1: _objectSpread({}, rawTheme.typography.body2, {
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 16
    }),
    body2: _objectSpread({}, rawTheme.typography.body1, {
      fontSize: 14
    })
  })
});

var _default = theme;
exports["default"] = _default;