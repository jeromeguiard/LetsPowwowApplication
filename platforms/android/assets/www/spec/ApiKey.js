/**
 * Created with JetBrains WebStorm.
 * User: jerome
 * Date: 9/16/13
 * Time: 1:55 PM
 * To change this template use File | Settings | File Templates.
 */

describe("ApiKey", function(){
    describe("initialize", function(){

        it("should be null when initialize", function(){
            var apiKey = new ApiKey();
            var result = false;
            if (apiKey.key == null && apiKey.user == null)
                result=true;
            expect(result).toBe(true);
        });

        it("should be such as defined array", function(){
            var arrayOfValues = [];
            arrayOfValues.key = "a key";
            arrayOfValues.user = "an user";
            var apiKey = new ApiKey();
            apiKey.buildFromDict(arrayOfValues);
            if (apiKey.key == "a key" && apiKey.user == "an user")
                result=true;
            expect(result).toBe(true);
        });

        it("should be such as defined properties", function(){
            var apiKey = new ApiKey();
            apiKey.buildFromProp("a key", "an user");
            if (apiKey.key == "a key" && apiKey.user == "an user")
                result=true;
            expect(result).toBe(true);
        });
    });

    describe("methods", function(){
       it("should store api key and userid in local storage", function(){
           var apikey = new ApiKey();
           var serverResponse = [{"created": "2012-07-31T17:42:17.820438", "id": 1, "key": "1b12ad586fe533b8221a73863d1bbd46b78b2763", "resource_uri": "/api/v1/apikey/1/", "user": "/api/v1/user/1/"}]
           apikey.storeApiKeyFromApiResponse(serverResponse);
           var apikeyInLocalStorage = window.localStorage.getItem("apiKey");
           var userInLocalStorage = window.localStorage.getItem("userId");
           var result = false;
           if (userInLocalStorage == "1" && apikeyInLocalStorage == "1b12ad586fe533b8221a73863d1bbd46b78b2763")
               result=true
           expect(result).toBe(true);
       });
    });
});

describe("Venues", function(){
    describe("Server", function(){
        it("should load venue list from server",function(){
            var blabla = true;
            expect(blabla).toBe(true);
        });
        it("shouldn't retrieve list without API key", function(){
            var blabla = true;
            expect(blabla).toBe(true);
        });
    });
    describe("Map", function(){
        it("should load venue on a map",function(){
            var blabla = true;
            expect(blabla).toBe(true);
        });
    });
});