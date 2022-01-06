import axios, {AxiosResponse} from 'axios';

interface UserProps{
  name?: string,
  age?: number,
  id?: number
}
type CallBack = ()=>void;

export class User{
  events: { [key: string]: CallBack[] } = {};
  constructor(private data: UserProps){}

  get(propName: string): string|number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: CallBack): void{
    const handler = this.events[eventName] || [];
    handler.push(callback);
    this.events[eventName] = handler;
  }

  trigger(eventName: string): void{
    const handler = this.events[eventName];
    if(!handler || handler.length===0) return;
    handler.forEach((cb: CallBack)=>{cb()});
  }

  fetch(): void{
    axios.get(`http://localhost:3000/users/${this.get('id')}`)
    .then((response: AxiosResponse)=>{this.set(response.data)})
  }

  save(): void{
    const id=this.get('id');
    id ? axios.put(`http://localhost:3000/users/${id}`,this.data) : axios.post(`http://localhost:3000/users`,this.data)
  }
}