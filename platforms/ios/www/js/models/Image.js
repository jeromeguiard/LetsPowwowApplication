function Image(){

    this.photo;

    this.getPhotoName = function(){
        var d= new Date();
        var dateAsString =d.getFullYear().toString() + d.getMonth().toString()+ d.getDate().toString() + d.getHours().toString() + d.getMinutes().toString()+ d.getSeconds().toString();
        return window.localStorage.getItem("username")+dateAsString+".jpg";
    };

  //  this.cameraSuccess = function(imageData) {
  //      var image = document.getElementById('myImage');
  //      this.photo = imageData;
  //      image.style="width: 200px;height: 100px;"
  //      image.src = "data:image/jpeg;base64," + imageData;
  //  };

    this.cameraError = function(message) {
        alert('Failed because: ' + message);
    };

    this.takePhoto = function(callback){
        navigator.camera.getPicture(callback, this.cameraError,
            {
                destinationType:Camera.DestinationType.DATA_URL,
                encodingType: Camera.EncodingType.JPEG
            });
    };

    this.getPhotoFromLibrary = function(callback) {
        navigator.camera.getPicture(callback, this.cameraError, {
            destinationType: navigator.camera.DestinationType.DATA_URL,
            sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: Camera.EncodingType.JPEG
        });
    };

    this.getPhoto=function(){
        alert(this.photo);
        return this.photo;
    }

}