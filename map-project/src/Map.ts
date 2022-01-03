/// <reference types="google.maps" />

export interface Mappable{
  location: {lat: number, lng: number}, 
  name: string
};

export class Map {
  private map: google.maps.Map;
  constructor(mapId: string){
    this.map = new google.maps.Map(document.getElementById(mapId),{
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    })
  }

  marker({location, name} : Mappable): void{
    new google.maps.Marker({
      position : location,
      map : this.map,
      title: name,
    });
  }

}