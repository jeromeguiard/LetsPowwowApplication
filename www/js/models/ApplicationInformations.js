/** Represent all informations
 *
 * @constructor
 *
 * */
function applicationInfos(){
    new Rest("/api/v1/content_type/", "GET" ,{"limit" : "100"},{},null, storeContentType );
    new Rest("/api/v1/category/", "GET" ,{"limit" : "45"},{},null, storeCategory );
}

/**
 *CallBack function to store element retrieve from the server regarding the ContentType
 *
 * @param response {string} - Represent the api key
 *
 * */
function storeContentType(response){
    window.localStorage.setItem("content_type",JSON.stringify(response));
}

/**
 *CallBack function to store element retrieve from the server regarding the Category
 *
 * @param response {string} - Represent the api key
 *
 * */
function storeCategory(response){
    window.localStorage.setItem("category",JSON.stringify(response));
}