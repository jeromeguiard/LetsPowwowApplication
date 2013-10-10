Powwow.venues = function() {
    /*
    * Datasource for the layout should have those parameters
    * title, image, id, categoryNumber, likeCount, checkinCount
    * */

    var params = {"near" : localStorage.getItem("position")+",400m", "order_by" :"-checkin_count"};
    var apikey = new ApiKey();
    var headers = {} ;
    var venue_id= [];

    var computeReturnedData = function(venue){
        var venueInformations= {};
        var category = venue.category.split("/")[4];
        venueInformations.title = venue.title_en_us;
        venueInformations.id = venue.id;
        venueInformations.likeIcon = 'dx-icon-like';
        venueInformations.checkinIcon = 'dx-icon-info';
        if(venue.logo == null){
            var categories = JSON.parse(window.localStorage.getItem("category"));
            for(key in categories){
                var currentCategory = categories[key];
                if (currentCategory.id == category){
                    venueInformations.image =  currentCategory.thumbnail;
                }
            }
        }else{
            venueInformations.image = venue.logo_thumbnail;
        }

//        venueInformations.likeCount=venue.like_count;
        venueInformations.likeCount=0;

        venueInformations.checkinCount= venue.checkin_count;

        return venueInformations;
    };

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
                                   xhr.setRequestHeader("Authorization", "Apikey " +
                                       window.localStorage.getItem("username")+
                                       ":"+window.localStorage.getItem("apiKey"));
                               }
                           }
                       }
                   })
                   // Action to perfom when data retrievement is done
                   .done( function(data){
                       var dataToReturn=[];
                       for(key in data.objects){
                           var currentVenue = data.objects[key];
                           venue_id.push(currentVenue.id);
                           window.localStorage.setItem("venue_"+currentVenue.id,
                                                        JSON.stringify(currentVenue));
                           dataToReturn.push(computeReturnedData(currentVenue));
                       }
                       window.localStorage.setItem("venuesId", venue_id);
                       dfd.resolve(dataToReturn)
                   })

                    //if fail
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