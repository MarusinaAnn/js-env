const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map", // Карты кода для отладки
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"), // Указываем папку для сервера
    },
    historyApiFallback: true, // Поддержка маршрутизации для SPA
    open: true, // Автоматическое открытие браузера
    compress: true, // Сжатие файлов
    hot: true, // Включаем Hot Module Replacement
    port: 8080, // Порт для локального сервера
    watchFiles: ["src/**/*"], // Автоматическое отслеживание изменений
  },
});
