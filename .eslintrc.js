module.exports = {
  root: true,
  extends: '@react-native-community',
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.ts', '.js', '.jsx', '.json'],
        map: [
          ['_assets', './src/assets'],
          ['_components', './src/components'],
          ['_navigation', './src/navigation'],
          ['_screens', './src/screens'],
        ],
      },
    },
  },
};
