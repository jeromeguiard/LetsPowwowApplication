Powwow.registration = function(){

    function getInformationsAsJson(){
        var info = {};
        info.username = viewModel.usernameValue();
        info.email = viewModel.mailValue();
        info.password2 = viewModel.passwordValue();
        info.password1 = viewModel.password1Value();
        return JSON.stringify(info);
    }

    function postARegistration (request){
        var userId  = request.getResponseHeader('Location').split("/")[6];
        window.localStorage.setItem("userId", userId);
        window.localStorage.setItem("username", viewModel.usernameValue());
        var apikey = new ApiKey();
        apikey.retrieveApiKeyFromServerRegistration(viewModel.usernameValue(), viewModel.passwordValue());
    }

    var viewModel = {
        usernameValue : ko.observable(""),
        mailValue : ko.observable(""),
        passwordValue: ko.observable(""),
        password1Value : ko.observable(""),
        registerBtn : function(){
            new Rest("/api/v1/registration/","post",null,null,getInformationsAsJson(),postARegistration);
        }
     };
    return viewModel;
}