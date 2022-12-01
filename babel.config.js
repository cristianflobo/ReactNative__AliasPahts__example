module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
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
          '.png',
          'jpg',
        ],
        imageTypes: [".png",".gif",".jpg"],
        alias: {
          '@screens': './src/screens',
          '@components': './src/components',
          '@images': './src/images',
        },
      },
    ],
  ],
};
