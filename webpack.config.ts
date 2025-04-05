import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import "webpack-dev-server"; // Importing the types for webpack-dev-server

type Mode = "production" | "development";

interface EnvVariables {
  mode: Mode; // 'development' | 'production'
  port: number; // Optional, as it may not be used in all configurations
  // Add other environment variables as needed
  // [key: string]: any; // Allow other properties if needed
}

export default (env: EnvVariables) => {
  const isDev = env.mode === "development";
  const isProd = env.mode === "production";

  const config: webpack.Configuration = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[name].[contenthash].js",
      clean: true,
    },
    //   mode: "development",
    mode: env.mode ?? "development",
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
      }),
      // new HtmlWebpackPlugin(),
      isDev && new webpack.ProgressPlugin(),
      isProd &&
        new MiniCssExtractPlugin({
          filename: isProd ? "css/[name].[contenthash:8].css" : "[name].css",
          chunkFilename: isProd
            ? "css[name].[contenthash:8].css"
            : "[name].css",
        }),
    ].filter(Boolean),
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
        {
          // ts-loader is a TypeScript loader for Webpack that allows you to compile TypeScript files into JavaScript.
          // It uses the TypeScript compiler (tsc) under the hood to perform the compilation.
          // ts-loader is a popular choice for integrating TypeScript with Webpack, as it provides a seamless way to handle TypeScript files in your Webpack build process.
          // Если б мы не использовали тайпскрипт: нужен был бы babel-loader
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    devtool: isDev && "inline-source-map",
    devServer: isDev
      ? {
          port: env.port ?? 3000,
          open: true,
        }
      : undefined,
  };

  return config;
};
