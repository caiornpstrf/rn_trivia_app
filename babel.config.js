module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          _assets: './src/assets',
          _components: './src/components',
          _store: './src/data/store',
          _model: './src/data/model',
          _navigation: './src/navigation',
          _screens: './src/screens',
        },
      },
    ],
  ],
};
