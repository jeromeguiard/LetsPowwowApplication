Powwow.checkin = function(params){

    var photo=null;
    var checkin = new Checkin();


    function getPhotoName(){
        var d= new Date();
        var dateAsString =d.getFullYear().toString() + d.getMonth().toString()+ d.getDate().toString() + d.getHours().toString() + d.getMinutes().toString()+ d.getSeconds().toString();
        return window.localStorage.getItem("username")+dateAsString+".jpg";
    }


    function takePhoto(){
        navigator.camera.getPicture(cameraSuccess, cameraError,
            {
                destinationType:Camera.DestinationType.DATA_URL,
                encodingType: Camera.EncodingType.JPEG
            });
    }

    function getPhotoFromLibrary() {
        navigator.camera.getPicture(cameraSuccess, cameraError, {
            destinationType: navigator.camera.DestinationType.DATA_URL,
            sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: Camera.EncodingType.JPEG
        });
    }


    function cameraSuccess(imageData) {
        var image = document.getElementById('myImage');
        photo = imageData;
        image.src = "data:image/jpeg;base64," + imageData;
        image.style="width: 200px;height: 100px;";
    }


    function cameraError(message) {
        alert('Failed because: ' + message);
    }

    var viewModel = {
        content : ko.observable('powwow'),
        checkinBtn : function(){

            checkin.buildFromProp( getPositionAsPoint(),
                1,
                "/api/v1/venue/"+params.id+"/",
                "/api/v1/user/"+window.localStorage.getItem("userId")+"/",
                //{"content-type":"image/png","file":imageData,"name":"temptest-jerome.png"},
                null,
                viewModel.content());
            alert(1);

            if (photo!=null){
                checkin.picture =  {"content-type":"image/jpg",
                    "file":photo,
                    "name":getPhotoName()}
            }

            new Rest("/api/v1/checkin/", "POST", null, {},JSON.stringify(checkin), null ) ;

            },
        actionsheet: {
            showActionSheet: function() {
                var actionSheet = $("#action_sheet").data("dxActionSheet");
                actionSheet.show();
            },
            items: [
                                {
                    text: "New photo",
                    clickAction: function(){takePhoto();}
                },
                {
                    text: "Select from gallery",
                    clickAction: function(){getPhotoFromLibrary();}
                }

            ]
        }
    };


   return viewModel;
}
