function applicationInfos(){
    new Rest("/api/v1/content_type/", "GET" ,{"limit" : "100"},{},null, storeContentType );
    new Rest("/api/v1/category/", "GET" ,{"limit" : "45"},{},null, storeCategory ) ;

}

function storeContentType(response){
    window.localStorage.setItem("content_type",JSON.stringify(response));
}

function storeCategory(response){
    window.localStorage.setItem("category",JSON.stringify(response));
}