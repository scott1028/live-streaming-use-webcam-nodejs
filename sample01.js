'use strict';

const LiveCam = require('livecam');
const webcam_server = new LiveCam({
    "start" : function() {
        console.log('WebCam server started!');
    },
    "ui_addr" : "0.0.0.0",
    "ui_port" : 11000,
});
 
webcam_server.broadcast();
