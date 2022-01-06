import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { ApiSync } from './ApiSync';
import { Model } from './Model';

interface UserProps{
  name?: string,
  age?: number,
  id?: number
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps>{

  static buildUser(data: UserProps): User{
    return new User(
      new Attributes<UserProps>(data),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    )
  }

}