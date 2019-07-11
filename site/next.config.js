const withPlugins = require('next-compose-plugins');
const withFonts = require('next-fonts');
const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');

const nextConfig = {
  distDir: '../dist',
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));

    return config;
  }
};

module.exports = withPlugins([
  [withFonts]
], nextConfig);

