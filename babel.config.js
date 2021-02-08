const config = require('./babel.shared');

module.exports = {
    ...config,
    plugins: [
        ...config.plugins,
        ['react-hot-loader/babel', { modules: false }],
    ],
};