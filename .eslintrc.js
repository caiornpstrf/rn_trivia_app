module.exports = {
  root: true,
  extends: '@react-native-community',
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.ts', '.js', '.jsx', '.json'],
        map: [
          ['_components', './src/components'],
          ['_assets', './src/assets'],
        ],
      },
    },
  },
};
