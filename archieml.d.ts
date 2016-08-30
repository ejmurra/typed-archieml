export interface AmlOptions {
  comments: boolean;
}

declare namespace archieml {
  function load(content: string, opts?: AmlOptions): any;
}

export = archieml;
