function UserDevice(){


    this.uri ="userdevice/";

    this.device_id;
    this.os_version;
    this.device_type;
    this.device_push_token;

    this.buildFromProp = function(device_id, os_version, device_type, device_push_token){
        this.device_id = device_id;
        this.os_version = os_version;
        this.device_type = device_type;
        this.device_push_token = device_push_token;
    };

    this.buildFromDict = function(dict){
        this.device_id = dict["device_id"];
        this.os_version = dict["os_version"];
        this.device_type = dict["device_type"];
        this.device_push_token = dict["device_push_token"];
    };
}
