export class Document {
  constructor(public children: Document[] = null, public description: string,
              public id: string, public name: string,  public url: string, ) {}
}

