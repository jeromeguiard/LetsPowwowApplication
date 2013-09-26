/** Represent an Api-Key object
 * @class
 *
 * */
function ApiKey(){

    this.uri = "apikey/";

    this.key;
    this.user;

    /**
     *Feel data of an api-key instance from a dict
     *
     * @param key {string} - Represent the api key
     * @param user {*} - Represent the user
     */
    this.buildFromProp= function(key, user){
        this.key = key;
        this.user = user;
    };

    /**
     * Feel data of an api-key instance from a dict
     *
     * @method
     * @param {Array} dict - Dictionary that contains all needed parameter to fit informations
     * */
    this.buildFromDict = function(dict){
        this.key = dict["key"];
        this.user = dict["user"];
    };


    /**
     * Set the Authorization parameters from local storage
     * @method
     * @param {Array} headers - Headers request
     * @return {Array} - Headers with Authorization parameters from Local Storage
     */
    this.setKeyToHeaders= function(headers){
        headers["Authorization"] = "Apikey " + window.localStorage.getItem("username")+
            ":"+window.localStorage.getItem("apiKey");
        return headers;
    };

     /**
      * Store api key in locale storage then bring the user to an other view "venues"
      * 
      * @param {Array} response  - Response from the server
      */
        this.storeApiKeyFromApiResponse = function(response){

        var responseAsJson = response;
        window.localStorage.setItem("apiKey", responseAsJson[0].key);
        var userId = (responseAsJson[0].user).split("/")[4];
        window.localStorage.setItem("userId", userId);

        var profile =  new Profile();
        profile.retrieveProfile(userId);
        //Call application to retrieve needed informations that the application will use
        applicationInfos();
        Powwow.app.navigate("venues");
    };

    /**
     * Get the username/password, set it with basic authorization
     *
     * @param {string} username - Represent the username of the user
     * @param {string} password - Represent the user password
     *
     * @callback this.storeApiKeyFromApiResponse
     * */
    this.retrieveApiKeyFromServer =function(username, password){
        var headers = {"Authorization" : "Basic "+btoa(username +":"+password)};
        new Rest("/api/v1/apikey/", "get", null, headers, null,  this.storeApiKeyFromApiResponse);
      };

    /**
     * Store api key in locale storage then bring the user to an other view "user" use in registration
     *
     * @param {Array} response  - Response from the server
     */
           this.storeApiKeyFromApiResponseRegistration = function(response){
        var responseAsJson = response;
        window.localStorage.setItem("apiKey", responseAsJson[0].key);
        var profile =  new Profile();
        var userId = window.localStorage.getItem("userId");
        profile.retrieveProfile(userId);
        applicationInfos();
        Powwow.app.navigate("user");
    };

    /**
     * Get the username/password, set it with basic authorization, use in registration
     *
     * @param {string} username - Represent the username of the user
     * @param {string} password - Represent the user password
     *
     * @callback this.storeApiKeyFromApiResponse
     * */
    this.retrieveApiKeyFromServerRegistration  =function(username, password){
        var headers = {"Authorization" : "Basic "+btoa(username +":"+password)};
        alert("retrieve Api key")
        new Rest("/api/v1/apikey/", "get", null, headers, null,  this.storeApiKeyFromApiResponseRegistration);
    };

}
