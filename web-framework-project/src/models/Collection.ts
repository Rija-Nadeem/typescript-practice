import { Eventing } from "./Eventing";
import axios, { AxiosResponse } from 'axios';

export class Collection<T, K>{
  events: Eventing =  new Eventing();
  models: T[] = []

  constructor(public rootUrl: string, public deserialize: (json: K)=>T){}

  get trigger(){
    return this.events.trigger;
  }

  get on(){
    return this.events.on;
  }

  fetch(): void{
    axios.get(this.rootUrl).then((response: AxiosResponse)=>{
      response.data.forEach((value: K) => {
        this.models.push(this.deserialize(value));
      });

      this.trigger('change');
    })
  }
}