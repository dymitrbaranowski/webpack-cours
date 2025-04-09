import webpack from "webpack";
// import "webpack-dev-server"; // Importing the types for webpack-dev-server
import { buildWebpack } from "./config/build/buildWebpack";
import { BuildMode, BuildPaths } from "./config/build/types/types";
import path from "path";

interface EnvVariables {
  mode: BuildMode; // 'development' | 'production'
  port: number;
  // Optional, as it may not be used in all configurations
  analyzer?: boolean;
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    output: path.resolve(__dirname, "dist"),
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? "development",
    paths,
    analyzer: env.analyzer,
  });

  return config;
};
