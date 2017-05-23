import { Component } from '@angular/core';
//import { Camera } from 'ionic-native';
@Component({
 selector: 'page-image',
 templateUrl: 'image.html'
})
export class ImagePage {
  base64Image
  constructor() {}
//  accessGallery(){
//    Camera.getPicture({
//      sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
//      destinationType: Camera.DestinationType.DATA_URL
//     }).then((imageData) => {
//       this.base64Image = 'data:image/jpeg;base64,'+imageData;
//      }, (err) => {
//       console.log(err);
//     });
//   }
}