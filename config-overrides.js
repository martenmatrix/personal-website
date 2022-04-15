/* config-overrides.js */
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

// imagemin is unable to compress gifs over 10mbs, that is why this currently fails

module.exports = function override(config, env) {
    config.plugins = (config.plugins || []).concat(
        new ImageMinimizerPlugin({
        minimizer: {
            implementation: ImageMinimizerPlugin.imageminMinify,
            options: {
                plugins: [
                    "gifsicle",
                    "svgo"
                ]
            }
        }
    }));
    return config;
}
