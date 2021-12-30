interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

printVehicle(oldCivic);

//reusability with interfaces
interface Reportable {
  summary(): string
}

const myCarObj={
  name:'civic',
  model: 2020,
  summary(){
    return `car name is ${this.name} and model is ${this.model}`
  }
}

const myTaskObj={
  chapter:1,
  topic: 'Introduction to blockchain',
  summary(){
    return `I have read topic ${this.topic} of chapter ${this.chapter}`
  }
}

const printReport = (obj:Reportable) =>{console.log(obj.summary())}

printReport(myCarObj)
printReport(myTaskObj)