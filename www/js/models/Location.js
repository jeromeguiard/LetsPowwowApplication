function getPosition(){
   // window.localStorage.setItem("position","116.4301,39.98273");
   alert("ert");
    navigator.geolocation.getCurrentPosition(getPositionOnSuccess, onErrorGeo);
    //callBack();
}

function onErrorGeo(error){
    console.log("can't get");
    window.localStorage.setItem("position","116.4301,39.98273");
}

function getPositionOnSuccess(position){
//    window.localStorage.setItem("position","116.4301,39.98273");
  // console.log("position"+position.coords.longitude+","+position.coords.latitude);
   alert("ert1");
    window.localStorage.setItem("position",position.coords.longitude+","+position.coords.latitude);
}


function getPositionAsPoint(){

    var location = window.localStorage.getItem("position");
    var locationTab = location.split(",");
    return "POINT ("+ locationTab[0] + " "+locationTab[1]+")";

}
