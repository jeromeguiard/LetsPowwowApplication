Powwow.user = function(){

    var profile_info = JSON.parse(window.localStorage.getItem("profile"));
    var profile = new Profile();
    profile.buildFromDict(profile_info);

    var viewModel = {
        nickname :  ko.observable(profile_info.nickname),
        sync_tencent :   ko.observable(profile_info.sync_tencent),
        sync_weibo :   ko.observable(profile_info.sync_weibo),
        sync_renren :   ko.observable(profile_info.sync_renren),
        patchNickname : function(){
            profile.patchValue("nickname", viewModel.nickname());
        },
        patchRenren : function(){
            profile.patchValue("sync_renren", !viewModel.sync_renren());
        },
        patchTencent: function(){
            profile.patchValue("sync_tencent", !viewModel.sync_tencent());
        },
        patchWeibo : function(){
            profile.patchValue("sync_weibo", !viewModel.sync_weibo());

        },
        src : ko.computed(function(){
            if (typeof profile.photo.original_image != "undefined"){
                return profile.photo.original_image;
            }else{
                return "/img/logo.png";
            }
        }),
        actionsheet: {
            showActionSheet: function() {
                var actionSheet = $("#action_sheet").data("dxActionSheet");
                actionSheet.show();
            },
            items: [
                {
                    text: "New photo",

                    clickAction: function(){
                        var img = document.getElementById("myImage");
                        profile.image.takePhoto(profile.patchImage);

                    }
                },
                {
                    text: "Select from gallery",
                    clickAction: function(){
                        var img = document.getElementById("myImage");
                        profile.image.getPhotoFromLibrary(profile.patchImage);

                    }
                }

            ]
        }

    };
  ;
    return viewModel;
}