/**
 *
 * @constructor
 */
function Point(){

    this.uri ="point/";

    this.point;
    this.address;
    this.city;
    this.zipcode;
    this.country;
    this,radius_meters;


    this,buildFromProp = function(point, address, city, zipcode, country, radius_meters){
        this.point = point;
        this.address = address;
        this.city = city;
        this.zipcode = zipcode;
        this.country = country;
        this.radius_meters = radius_meters;
    };

    this.buildFromDict = function(dict){
        this.point = dict["point"];
        this.address = dict["address"];
        this.city = dict["city"];
        this.zipcode = dict["zipcode"];
        this.country = dict["country"];
        this.radius_meters = dict["radius_meters"];
    };
}
