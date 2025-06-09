import { Compilation, Compiler, WebpackPluginInstance } from "webpack";

export class MyWebpackPlugin implements WebpackPluginInstance {
  apply(compiler: Compiler) {
    compiler.hooks.compilation.tap("MyWebpackPlugin", (compilation) => {
      compilation.hooks.processAssets.tapPromise(
        {
          name: "MyWebpackPlugin",
          stage: Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_TRANSFER,
        },
        async () => {
          compilation.getAssets().forEach((asset) => console.log(asset.name));
        },
      );
    });
  }
}
