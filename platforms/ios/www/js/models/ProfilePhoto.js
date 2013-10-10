/**
 *
 * @constructor
 */
function ProfilePhoto(){


    this.uri ="profilephoto/";

    this.original_image;

    this.buildFromProp= function(original_image){
        this.original_image = original_image;
    };

    this.buildFromDict = function(dict){
        this.original_image = dict["original_image"];
    };
}