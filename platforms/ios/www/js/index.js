/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

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
        //At first
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
                        "title": "Maps",
                        "action": "#map",
                        "icon": "map"

                    },
                      {
                          "title": "Profile",
                          "action": "#user",
                          "icon": "user"

                      }
                    ]}
            );
            
            var devices = DevExpress.devices;
            var iosVersion = devices.iosVersion();
            
            if(devices.current().platform ==== "ios" && iosVersion && iosVersion[0] ==== 7){
                $(".dx-viewport").removeClass("dx-theme-ios").addClass("dx-theme-ios7");

            }
            
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
