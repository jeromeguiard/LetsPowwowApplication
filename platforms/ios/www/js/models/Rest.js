/**
*
* specify uri, then the method
*
* params are going to be url filters
*
* headers meanly are used for the auth
*
* data is use if we need to send data (works with post/patch)
*
* callbackfunction if needed, if not return a value when done
*
*/
/**
 *
 * @param uri {string} - Represent the uri if the resource
 * @param method  {string} - Method desire to interact with the server POST, GET, PATCH
 * @param params {Array} - Array of value to insert in the URL
 * @param headers {Array} - Specify headers
 * @param data {String} - Data to send to the server
 * @param callBackFunction {string} - Function to call after the response arrive
 * @constructor
 */
function Rest(uri, method, params, headers, data,  callBackFunction){

    this.debug = true;
    this.server= "http://wp7.letspw.com";
    url = this.server+uri+"?format=json";


    //Add needed parameters to the url
    if (params != null){
        for (key in params){
            url = url+"&"+key+"="+params[key];
        }
        if(url.length > 255){
            alert("Url too long");
        }
    }

    //Configuration for the ajax function
    var ajax_config = {
        url : url,
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
    };


    //Suppose that all data sent are within json format
    if(data != null){
        ajax_config["contentType"] = "application/json";
    }

    $.ajax(ajax_config)
    .done( function(data, status, request){

        if (callBackFunction != null){
            if (uri == "/api/v1/like/" || uri == "/api/v1/registration/" || uri == "/api/v1/profilephoto/"){
                callBackFunction(request);
            }
           callBackFunction(data.objects);
        }
        else{
            var toast = $("#toast-success").data("dxToast");
            toast.show();
            return data;
        }
    })
    .fail(function(data){
        if(this.debug){
            alert(uri + "fail");
            alert(JSON.stringify(data));
        }
        var toast = $("#toast-success").data("dxToast");
        toast.show();
    });

}