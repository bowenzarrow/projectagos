// Allow TypeScript to understand Webpack require.context
declare function require(path: string): any;

declare interface NodeRequire {
  context(
    directory: string,
    useSubdirectories?: boolean,
    regExp?: RegExp
  ): {
    keys(): string[];
    <T = any>(id: string): T;
  };
}
