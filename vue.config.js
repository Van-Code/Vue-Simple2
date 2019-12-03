module.exports = {
  transpileDependencies: ["vuetify"],
  indexPath: "../index.html",
  outputDir: "dist",
  publicPath:
    process.env.NODE_ENV === "production"
      ? "./dist"
      : "/dist",
  chainWebpack: config => {
    config.resolve.alias
      .set("vue$", "vue/dist/vue.esm.js");
  },
  filenameHashing: false,
  configureWebpack: {
    output: {
      filename: "bundle.js"
    }
  },
  devServer: {
    proxy: "http://localhost" //for loading common files
  },
  runtimeCompiler: true //for compiling html files in admin
};
