module.exports = function(api) {
  const presets = ['next/babel', '@babel/preset-env', '@babel/preset-react', '@babel/preset-flow'];
  const plugins = [
    [
      'styled-components',
      {
        ssr: true,
        displayName: true,
        preprocess: false,
      },
    ],
  ];

  return {
    presets,
    plugins,
  };
};
