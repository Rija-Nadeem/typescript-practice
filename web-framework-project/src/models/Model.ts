import {AxiosPromise, AxiosResponse} from 'axios';

interface ModelAttributes<T> {
  get<K extends keyof T>(key: K): T[K],
  set(update: T): void,
  getAll(): T
}
interface Sync<T> {
  fetch(id: number): AxiosPromise,
  save(data: T): AxiosPromise
}
interface Events {
  on(eventName: string, callback: ()=>void ): void,
  trigger(eventName: string): void
}
interface hasId{
  id?: number
}

export class Model<T extends hasId> {

  constructor(
      private attrs: ModelAttributes<T>,
      private events: Events,
      private sync: Sync<T>
    ){}

  get on(){
    return this.events.on;
  }

  get trigger(){
    return this.events.trigger;
  }

  get get(){
    return this.attrs.get;
  }

  set(data: T): void{
    this.attrs.set(data);
    this.trigger('change');
  }

  fetch(){
    const id=this.get('id')

    if(typeof id !== 'number'){
      throw new Error('Cannot fetch without an id');
    }

    this.sync.fetch(id).then((res: AxiosResponse) => {
      this.set(res.data)
    } )
  }

  save(){
    this.sync.save(this.attrs.getAll()).then((): void => {
      this.trigger('save');
    }).catch((): void => {
      this.trigger('error');
    });
  }

}