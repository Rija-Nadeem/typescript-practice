import {Map} from './Map';
import {User} from './User';
import {Company} from './Company';

const map = new Map('myMap');
const user = new User();
const company = new Company();

map.marker(user);
map.marker(company);

