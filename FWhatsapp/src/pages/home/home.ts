import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Contact_1Page } from '../contact-1/contact-1';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController , private camera: Camera ) {
  }

   
next()
{
  this.navCtrl.push(Contact_1Page)
}

cam()
{
const options: CameraOptions = {
  quality: 100,
  destinationType: this.camera.DestinationType.FILE_URI,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}

this.camera.getPicture(options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64 (DATA_URL):
 let base64Image = 'data:image/jpeg;base64,' + imageData;
}, (err) => {
 // Handle error
});

}
}

