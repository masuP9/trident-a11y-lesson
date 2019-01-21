module.exports = context => ({
  map     : false,
  plugins : {
    'postcss-easy-import' : {},
    'postcss-preset-env'  : {},
    'cssnano'             : true
  }
});
