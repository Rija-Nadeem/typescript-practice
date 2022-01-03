import { CharactersCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([5,0,-1]);
numbersCollection.sort();
console.log('numbers array', numbersCollection)

const charactersCollection = new CharactersCollection('rija');
charactersCollection.sort();
console.log('characters array', charactersCollection)