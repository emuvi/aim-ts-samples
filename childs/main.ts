export class Father {
  private _options: Options;

  public constructor(options: Options) {
    this._options = options;
  }

  public printName() {
    console.log(this._options.name);
  }
}

export class Child extends Father {
  public constructor() {
    super(test());
  }
}

function test(): Options {
  return {
    name: "Ords",
  };
}

export type Options = {
  name: string;
};

new Child().printName();
