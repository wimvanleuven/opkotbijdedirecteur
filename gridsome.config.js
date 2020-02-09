// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
      .loader('style-resources-loader')
      .options({
        patterns: [
          path.resolve(__dirname, './src/assets/scss/*.sass'),
          path.resolve(__dirname, './src/assets/scss/*.scss'),
        ],
      })
}

module.exports = {
  siteName: 'opkotbijdedirecteur',
  siteDescription: 'opkotbijdedirecteur is op kot gaan in een historisch kader met alle luxe en comfort in ♥︎je Leuven',
  siteUrl: 'https://opkotbijdedirecteur.be',
  titleTemplate: '%s | okbdd',
  plugins: []
};
