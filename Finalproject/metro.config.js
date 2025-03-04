const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);

  return {
    ...defaultConfig,
    transformer: {
      assetPlugins: ['expo-asset/tools/hashAssetFiles'],
      babelTransformerPath: require.resolve('metro-react-native-babel-transformer'),
    },
    resolver: {
      assetExts: [...defaultConfig.resolver.assetExts, 'png', 'jpg', 'jpeg', 'svg', 'gif'],
      sourceExts: ['jsx', 'js', 'ts', 'tsx', 'json'],
    },
  };
})();

