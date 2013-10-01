/**
 * Request position to the device
 *
 * */
function getPosition(){
    var positionsOptions = { maximumAge: 1200000, timeout: 10000, enableHighAccuracy: false };
    navigator.geolocation.getCurrentPosition(getPositionOnSuccess, onErrorGeo, positionsOptions);
}

/**
 * Manage position error by creating a default one in the localStorage
 *
 * */
function onErrorGeo(error){
    window.localStorage.setItem("position","116.4301,39.98273");
}

/**
 * Function called when the position retrievment successed
 *
 * */
function getPositionOnSuccess(position){
    window.localStorage.setItem("position",position.coords.longitude+","+position.coords.latitude);
}

/**
 * Return the location saved in the local storage as a POINT(X Y)
 *
 * */
function getPositionAsPoint(){
    var location = window.localStorage.getItem("position");
    var locationTab = location.split(",");
    return "POINT ("+ locationTab[0] + " "+locationTab[1]+")";

}
