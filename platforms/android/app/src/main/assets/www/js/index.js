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

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);
var url_file = "file:///sdcard/sdcard/HubAgentApp/soti.xml";

let directoryName = "HubAgentApp";
let fileName = "soti.xml";

    function onDeviceReady() {

        console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
        // get tmc from soti file
        window.resolveLocalFileSystemURL(cordova.file.externalRootDirectory, (rootDirEntry) => getSubDirectory(rootDirEntry), fail);
    }



    function getSubDirectory(rootDirEntry) {
        rootDirEntry.getDirectory(directoryName, { create: false },(dirEntry) => getFile(dirEntry), fail);
    }

    function getFile(dirEntry) {
        dirEntry.getFile(fileName, { create: false, exclusive: false },(fileEntry)=> readFile(fileEntry), fail);
    }

    function readFile(fileEntry) {
        console.log(JSON.stringify(fileEntry));
        fileEntry.file(function (file) {
            console.log(JSON.stringify(file));
            let reader = new FileReader();
            reader.onloadend = function (evt) {
                
                var parser = new DOMParser();
                var doc = parser.parseFromString(this.result, "application/xml");
                var deviceTmcName = doc.querySelector('Name');
                var pickDevice = deviceTmcName.textContent.replace('TMC', 'pick');

                // show picking inside iframe after we have device numbr
                var iframe = document.createElement('iframe');
                // iframe.src = `http://172.26.60.24/pair/${pickDevice}`;
                iframe.src = `https://www.youtube.com/embed/tgbNymZ7vqY`;
                iframe.style.width = "320px";
                iframe.style.height = "580px";             
                document.body.appendChild(iframe);

                let t4 = document.createElement("textarea");
                t4.innerHTML = JSON.stringify(pickDevice);
                document.body.appendChild(t4);

            }
            reader.readAsText(file);
        }, fail);
    }

    function fail(error) {
        //show err 1
        var er1 = document.createElement("textarea");
        er1.innerHTML = JSON.stringify("please check that soti file is on path => sdcard/HubAgentApp/soti.xml");
        er1.style.width = "320px";
        er1.style.height = "320px";
        document.body.appendChild(er1);

        // show error 2
        var er2 = document.createElement("textarea");
        er2.innerHTML = JSON.stringify("אנא צור קשר עם תמיכה טכנית");
        er2.style.width = "320px";
        er2.style.height = "320px";
        document.body.appendChild(er2);
    }
