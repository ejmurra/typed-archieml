declare namespace archieml {
  interface AmlOptions {
    comments: boolean;
  }
  function load(content: string, opts?: AmlOptions): any;
}

export = archieml;
