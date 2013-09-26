function Position(){

    this.location = window.localStorage.getItem("position");

    this.returnAsPoint = function(){
        var locationTab = this.location.split(",");
        return "POINT ("+ locationTab[0] + " "+locationTab[1]+")";
    };
}