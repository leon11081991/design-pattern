const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // 打包的入口文件
  output: {
    path: __dirname, // 當前目錄
    filename: "./release/bundle.js", // webpack會幫忙創建出來
  },
  module: {
    rules: [
      {
        test: /\.js?$/, // 要檢驗哪些檔案
        exclude: /(node_modules)/, // 忽略 node_modules
        use: {
          loader: "babel-loader", // 檢驗後要進行 babel處理(ES6轉ES5讓瀏覽器可以執行),
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // 指定打包後的檔案插入到哪個模板中
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "./release"), // 設置本地端根目錄(從 release資料夾取得檔案)
    },
    open: true, // 會自動開啟瀏覽器
    port: 9000,
  },
};
