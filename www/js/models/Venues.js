/*function Venues(){

    this.venuesList;



    this.feelVenues = function(response){
       // console.log(response);
        this.venuesList = JSON.parse(response).objects;
        window.localStorage.setItem("venues",JSON.stringify(this.venuesList));

    };

    this.retrieveVenues= function(){
        var params = {"near" : localStorage.getItem("position")+",400m"};
        var headers = {};
        var apikey = new ApiKey();
        headers = apikey.setKeyToHeaders(headers);
        new Rest("/api/v1/venue/", params, headers, this.feelVenues );
    };
    this.returnVenues= function(){
        var valueToReturn = JSON.parse(window.localStorage.getItem("venues"));
        if(valueToReturn == null){
            window.setTimeout(console.log("timeout"),5500);
        }
        valueToReturn = JSON.parse(window.localStorage.getItem("venues"));
        return  valueToReturn;
    };


}*/