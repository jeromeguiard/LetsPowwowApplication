Powwow.login = function() {
    var viewModel = {
        title: ko.observable('Login'),
        username: ko.observable('Username'),
        password: ko.observable('Password'),
        usernameValue: ko.observable('powwow'),
        passwordValue: ko.observable('P0ww0w'),
        loginValue: ko.observable('Click to login'),
        registrationText : "Do not have account. Click here to register",
        login: function() {

            var apikey = new ApiKey();
            window.localStorage.setItem("username",this.usernameValue());
            apikey.retrieveApiKeyFromServer(this.usernameValue(), this.passwordValue());

        },
        registerPage : function(){
            Powwow.app.navigate("registration");
        }

    };
    return viewModel;
};