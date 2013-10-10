/**
 *
 * @constructor
 */
function Checkin(){


    this.location;
    this.status;
    this.venue;
    this.user;
    this.picture;
    this.content;

    this.buildFromProp= function (location, status, venue, user, picture, content)
    {
        this.location = location;
        this.status = status;
        this.venue = venue;
        this.user = user;
        this.picture = picture;
        this.content = content;
    }

    this.toJsonFile= function(){

    }
}