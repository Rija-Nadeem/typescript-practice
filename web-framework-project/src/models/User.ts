import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Sync } from './Sync';
import {AxiosResponse} from 'axios';

interface UserProps{
  name?: string,
  age?: number,
  id?: number
}

const rootUrl = 'http://localhost:3000/users';

export class User{

  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  public attrs: Attributes<UserProps>;

  constructor(data: UserProps){
    this.attrs = new Attributes<UserProps>(data)
  }

  get on(){
    return this.events.on;
  }

  get trigger(){
    return this.events.trigger;
  }

  get get(){
    return this.attrs.get;
  }

  set(data: UserProps): void{
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