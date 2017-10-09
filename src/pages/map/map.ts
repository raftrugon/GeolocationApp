import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import {GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng} from '@ionic-native/google-maps';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  providers:[GoogleMaps]
})
export class Map {

  public map:GoogleMap;

  constructor(public navCtrl: NavController, public navParams: NavParams,
   public googleMaps: GoogleMaps, private platform:Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    this.platform.ready().then(()=>{
      let element: HTMLElement = document.getElementById('map');
      this.map = this.googleMaps.create(element);
      this.map.one(GoogleMapsEvent.MAP_READY).then((data:any)=>{
        //centrar el mapa en nuestra posición
        let myPosition:LatLng = new LatLng(37.359900, -5.986185);
        this.map.animateCamera({target: myPosition, zoom: 10});
      })
    }).catch(()=>alert('Google Maps is not avaiable'))
  }

}
