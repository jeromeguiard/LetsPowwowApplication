
window.Powwow = {};
window.login = ko.observable(true);

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },



    // Update DOM on a Received Event
    receivedEvent: function(id) {
       // alert(device.name ); //undefined
       // alert(device.platform  ); //ok
        //alert(device.uuid  ); //ok
       // alert(device.version ); //4.3

        getPosition();
        $(function() {

            Powwow.app = new DevExpress.framework.html.HtmlApplication(
                { namespace: Powwow,
                  defaultLayout: "slideout",
                  navigation: [
                    {
                        title: "Venues",
                        action: "#venues",
                        icon: "home"

                    },
                    {
                        title: "About",
                        action: "#about",
                        icon: "info"

                    },
                    {
                        "title": "Maps",
                        "action": "#map",
                        "icon": "map"

                    },
                      {
                          "title": "User",
                          "action": "#user",
                          "icon": "user"

                      }
                    ]}
            );
            Powwow.app.router.register(":view", { view: "login" });
            Powwow.app.router.register(":view", { view: "venues" });
            Powwow.app.router.register(":view/:id", { view: "venuesDetails",id:undefined });
            Powwow.app.router.register(":view/:id", { view: "checkin",id:undefined });
            Powwow.app.router.register(":view", { view: "map" });
            Powwow.app.router.register(":view", { view: "user" });
            Powwow.app.router.register(":view", { view: "registration" });
            Powwow.app.navigate("login");
        });;

    }

};
