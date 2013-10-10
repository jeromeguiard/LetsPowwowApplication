/**
 *
 * @constructor
 */
function Category(){


    this.uri ="category/";

    this.name;
    this.icon;
    this.description;


    this.buildFromProp=function(name, icon, description){
        this.name = name;
        this.icon = icon;
        this.description = description;
    };


    this.buidFromDict = function(dict){
        this.name = dict["name"];
        this.icon = dict["icon"];
        this.description = dict["description"];
    }
}