function Profile(){

    this.uri ="profile/";
    this.id;
    this.nickname;
    this.gender;
    this.photo;
    this.user;
    this.notifications;
    this.language;
    this.image;

    var that = this;

    this.buildFromProp = function(id, nickname, gender, photo, user, notifications, language){
        this.image = new Image();
        this.id = id;
        this.nickname= nickname;
        this.gender = gender;
        this.photo = photo;
        this.user = user;
        this.notifications = notifications;
        this.language = language;
    };

    this.buildFromDict = function(dict){
        this.image = new Image();
        this.id = dict["id"];
        this.nickname= dict["nickname"];
        this.gender = dict["gender"];
        this.photo = dict["photo"];
        this.user = dict["user"];
        this.notifications = dict["notifications"];
        this.language = dict["language"];
        this.sync_tencent = dict["sync_tencent"];
        this.sync_weibo = dict["sync_weibo"];
        this.sync_renren = dict["sync_renren"];
    };

    this.retrieveProfile = function(userId){
        var uri = "/api/v1/profile/" ;
        var params = {"user": userId};
        var apikey = new ApiKey();
        var headers = {};
        apikey.setKeyToHeaders(headers);
        new Rest(uri, "GET", params, headers, null, this.storeUser);
    };

    this.storeUser = function(response){

        var responseAsJson = response[0];
        var profile =  new Profile();
        profile.buildFromDict(response[0]);
        window.localStorage.setItem("profile", JSON.stringify(profile));
    };

    function postAProfilePhoto(request){
        var profilePhotoId  = request.getResponseHeader('Location').split("/")[6];
        that.patchValue("photo", "/api/v1/profilephoto/"+profilePhotoId+"/");
    };


    this.patchValue = function(param, value){
        var apikey = new ApiKey();
        var headers = {}
        apikey.setKeyToHeaders(headers);
        this[param] = value;
        var data =  this.getValueAsJson(param);
        new Rest("/api/v1/profile/"+this.id+"/", "PATCH", null, headers,data, null);
    };


     this.patchImage = function(imageData){
        var img = document.getElementById('myImage');
        img.src = "data:image/jpeg;base64," + imageData;
        var profilePhotoInformations = {};
        var i = new Image();
        profilePhotoInformations.original_image = {"content-type":"image/jpg",
                                                   "file":imageData,
                                                   "name": i.getPhotoName()};
        new Rest("/api/v1/profilephoto/","post",null,{},JSON.stringify(profilePhotoInformations), postAProfilePhoto);

    };

    this.getValueAsJson= function(param){
        var jsonData = {};
        jsonData[param] = this[param];
        return  JSON.stringify(jsonData);
    };

}
