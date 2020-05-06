module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    proxy: 'http://api.circleklift.com'
    // proxy: 'http://localhost:8080'
  }
};