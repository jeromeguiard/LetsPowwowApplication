function User(){


    this.uri ="user/";

    this.id;
    this.username;
    this.email;

    this.buildFromProp = function(id, username, email){
        this.id = id;
        this.username = username;
        this.email = email;
    };

    this.buildFromDict = function(dict){
        this.id = dict["id"];
        this.username = dict["username"];
        this.email = dict["email"];
    };

    this.storeUser = function(){
        window.localStorage.setItem("user",JSON.stringify(this));
    };

    this,getUserFormStorage = function(){
        var u = new User();
        return u.buildFromDict(JSON.parse(window.localStorage.getItem("user")));
    };

}