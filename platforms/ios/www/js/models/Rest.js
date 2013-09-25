/*
*
* specify uri, then the method
*
* params are going to be url filters
*
* headers meanly are used for the auth
*
* data is use if we need to send data (works with post/patch)
*
* callbafunction if needed, if not return a value when done
*
*/
function Rest(uri, method, params, headers, data,  callBackFunction){
//function Rest(uri, params, headers,   callBackFunction){
    console.log(uri) ;
    this.server= "http://wp7.letspw.com";

    url = this.server+uri+"?format=json";
    if (params != null){
        for (key in params){
            url = url+"&"+key+"="+params[key];
        }
    }

    var ajax_config = {
        url:url,
        type : method,
        data : data,
         beforeSend: function(xhr){
            if (headers != null){
                for (key in headers){
                    xhr.setRequestHeader(key, headers[key]);
                }

                if(headers["Authorization"] == undefined){

                    xhr.setRequestHeader("Authorization", "Apikey " + window.localStorage.getItem("username")+
                        ":"+window.localStorage.getItem("apiKey"));
                }
            }
        }
    }  ;

    if(data != null){
        ajax_config["contentType"] = "application/json";
    }


        //check auth
    $.ajax(ajax_config)
    .done( function(data, status, request){

        if (callBackFunction != null){
            if (uri == "/api/v1/like/" || uri == "/api/v1/registration/" || uri == "/api/v1/profilephoto/"){
                callBackFunction(request);
            }
           callBackFunction(data.objects);}
        else{
            var toast = $("#toast-success").data("dxToast");
            toast.show();
            return data;
        }
    })
    .fail(function(data){
        alert(uri + "fail");
        alert(JSON.stringify(data));
    });

}