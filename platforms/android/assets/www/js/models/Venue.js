function Venue(){

    this.uri ="venue/";

    this.title;
    this.description;
    this.id;
    this.position;
    this.like;
    this.checkin;

    this.buildFromProp = function(title, description, id, position, like, checkin){
        this.title= title;
        this.description = description;
        this.id = id;
        this.position = position;
        this.like = like;
        this.checkin = checkin;
    };

    this.buildFromDict = function(dict){
        this.title= dict.title_en_us;
        this.description = dict.description;
        this.id = dict.id;
        this.position = dict.venue_point;
        this.like = dict.like;
        this.checkin = dict.checkin;
    };

    this.toHtml = function(){
        var mainDiv = document.createElement("div");
        mainDiv.setAttribute("onclick", "displayVenue("+this.id+");");
        var titleHeader = document.createElement("h1");
        titleHeader.innerHTML = this.title;
        var descriptionDiv= document.createElement("div");
        descriptionDiv.innerHTML = this.description;
        var informationDiv = document.createElement("div");
        informationDiv.innerHTML = "There is "+this.like+" persons like it and <br/> "+
            this.checkin + " checkins";
        mainDiv.appendChild(titleHeader);
        mainDiv.appendChild(descriptionDiv);
        mainDiv.appendChild(informationDiv);
        return mainDiv;
    };




    this.displayOneSingleVenue=function(){
        var pageTitle = document.getElementById("title");
        pageTitle.innerHTML = this.title;

        var pageDescription = document.getElementById("description");
        pageDescription.innerHTML = this.description;

        var pageCheckin = document.getElementById("checkin");
        pageCheckin.innerHTML = this.checkin;

        var pageLike = document.getElementById("like");
        pageLike.innerHTML = this.like;
    };


    this.store = function(){
        window.localStorage.setItem("Venue_"+this.id,JSON.stringify(this));
    };

    this.displayOnMap= function(map){
        if (typeof google == "undefined"){
            return "google lib not imported";
        }

        var coordinateAsString = this.position.replace("POINT (","").replace(")","");
        var coordinates = new google.maps.LatLng(parseFloat(coordinateAsString.split(" ")[1]),
            parseFloat(coordinateAsString.split(" ")[0]));

        var marker = new google.maps.Marker({
            position: coordinates,
            title: this.title,
            icon : "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
        });
        marker.setMap(map);
    };
}

