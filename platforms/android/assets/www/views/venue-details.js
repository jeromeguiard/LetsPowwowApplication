Powwow.venueDetails= function(params){

    var venue = JSON.parse(window.localStorage.getItem("venue_"+params.id));

    new Rest("/api/v1/like/", "get", {sender:window.localStorage.getItem("userId"),receiver_object_id:params.id}, {},null, changeLikedValue );


    var likeArray = {"content_type" : "/api/v1/content_type/36/",
                     "receiver_object_type": "venue",
                     "receiver_object_id": params.id,
                     "sender":"/api/v1/user/"+window.localStorage.getItem("userId")+"/"};

    function changeLikedValue(objects){
        if (objects.length == 1){
            viewModel.liked = true;
            viewModel.likeText("Unlike") ;
            viewModel.likeID = objects.id;
        }

    }

    function postALike(request){
        viewModel.likeID = request.getResponseHeader('Location').split("/")[6];
        viewModel.liked = true;
        viewModel.likeText("Unlike") ;
    }

    function deleteALike(request){
        viewModel.liked = false;
        viewModel.likeText("Like") ;
    }

    var viewModel = {
        id : venue.id,
        title : venue.title_en_us,
        description :venue.description_en_us,
        like_count : venue.like_count,
        checkin_count : venue.checkin_count,
        checkin : function(){
           Powwow.app.navigate("checkin/"+params.id)  ;
        },
        liked :false,
        likeID : 0,
        likeText : ko.observable("Like"),
        like : function(){
           if (this.liked){
               if (viewModel.likeID != null && viewModel.likeID != ""){
                   new Rest("/api/v1/like/"+viewModel.likeID+"/", "delete", null, {},null, deleteALike ) ;
               }
           }else{
               new Rest("/api/v1/like/", "POST", null, {},JSON.stringify(likeArray), postALike() ) ;
           }
        },
        galleryData : [
        ]
    };

    console.log(window.localStorage.getItem("venue_"+params.id));
    console.log(viewModel.title);
    return viewModel;
}