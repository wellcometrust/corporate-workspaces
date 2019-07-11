module.exports = function (api) {
  const presets = [
    '@babel/preset-env',
    '@babel/preset-react'
  ];

  const plugins = [
    // [
    //   'styled-components',
    //   {
    //     ssr: true,
    //     displayName: true,
    //     preprocess: false,
    //   },
    // ],
  ];

  console.log('CONFIG running');

  return {
    presets,
    plugins,
  };
};
