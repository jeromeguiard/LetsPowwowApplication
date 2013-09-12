function ApiKey(){

    this.uri = "apikey/";

    this.key;
    this.user;

    this.buildFromProp= function(key){
        this.key = key;
        this.user = user;
    };

    this.buildFromDict = function(dict){
        this.key = dict["key"];
        this.user = dict["user"];
    };

    this.setKeyToHeaders= function(headers){
        headers["Authorization"] = "Apikey " + window.localStorage.getItem("username")+
            ":"+window.localStorage.getItem("apiKey");
        return headers;
    };

    this.storeApiKeyFromApiResponse = function(response){

        var responseAsJson = response;
        window.localStorage.setItem("apiKey", responseAsJson[0].key);
        var userId = (responseAsJson[0].user).split("/")[4];
        window.localStorage.setItem("userId", userId);

        var profile =  new Profile();
        profile.retrieveProfile(userId);
        applicationInfos();
        Powwow.app.navigate("venues");
    };

    this.retrieveApiKeyFromServer =function(username, password){
        var headers = {"Authorization" : "Basic "+btoa(username +":"+password)};
        new Rest("/api/v1/apikey/", "get", null, headers, null,  this.storeApiKeyFromApiResponse);
      };


    this.storeApiKeyFromApiResponseRegistration = function(response){
        var responseAsJson = response;
        window.localStorage.setItem("apiKey", responseAsJson[0].key);
        var profile =  new Profile();
        var userId = window.localStorage.getItem("userId");
        profile.retrieveProfile(userId);
        applicationInfos();
        console.log(window.localStorage.getItem("profile"));
        Powwow.app.navigate("user");
    };

    this.retrieveApiKeyFromServerRegistration  =function(username, password){
        var headers = {"Authorization" : "Basic "+btoa(username +":"+password)};
        alert("retrieve Api key")
        new Rest("/api/v1/apikey/", "get", null, headers, null,  this.storeApiKeyFromApiResponseRegistration);
    };

}
