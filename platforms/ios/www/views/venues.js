Powwow.venues = function() {


    var params = {"near" : localStorage.getItem("position")+",400m", "order_by" :"-checkin_count"};
    var apikey = new ApiKey();
    var headers = {}
    var venue_id= [];


    var viewModel = {
       dataSource: {
           load: function(loadOptions){

               var dfd = new $.Deferred();
               var server= "http://wp7.letspw.com";
               if (loadOptions.refresh) {
                   url = server+"/api/v1/venue/"+"?format=json";
                   if (params != null){
                       for (key in params){
                           url = url+"&"+key+"="+params[key];
                       }
                   }

                   $.ajax({
                       url:url,
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
                   })
                   .done( function(data){

                       for(key in data.objects){
                           venue_id.push(data.objects[key].id);
                           window.localStorage.setItem("venue_"+data.objects[key].id, JSON.stringify(data.objects[key]));
                       }
                           window.localStorage.setItem("venuesId", venue_id);
                       dfd.resolve(data.objects)
                   })
                   .fail(function(data){
                       alert("fail");
                       alert(JSON.stringify(data));
                   });
                   return dfd.promise();
               }
               }

           }
       };



    return viewModel;
};