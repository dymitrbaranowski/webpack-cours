import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

type Mode = "production" | "development";

interface EnvVariables {
  mode: Mode; // 'development' | 'production'
  port: number; // Optional, as it may not be used in all configurations
  // Add other environment variables as needed
  // [key: string]: any; // Allow other properties if needed
}

export default (env: EnvVariables) => {
  const config: webpack.Configuration = {
    entry: path.resolve(__dirname, "src", "index.ts"),
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
      new webpack.ProgressPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    devServer: {
      port: env.port ?? 3000,
      open: true,
    },
  };

  return config;
};
