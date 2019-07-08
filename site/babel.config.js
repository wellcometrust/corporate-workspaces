module.exports = function (api) {
  api.cache(true);

  const presets = ['@npoc/components/babel.config'];

  return {
    presets,
  };
};
