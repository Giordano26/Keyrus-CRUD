export abstract class Entity<T> {
    protected readonly _id: string;
    public readonly props: T;
  
    constructor (props: T, id: string) {
      this._id = id  //? id : new UniqueEntityID();
      this.props = props;
    }
  
    public equals (object?: Entity<T>) : boolean | undefined {
  
      if (object == null || object == undefined) {
        return false;
      }
  
      if (this === object) {
        return true;
      }

    }
}