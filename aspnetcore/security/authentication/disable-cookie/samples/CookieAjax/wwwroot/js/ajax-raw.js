﻿
// with header
function callApiWithHeader() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/your-api-url", true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 401) {
                // handle authentication here
            }
            else if (xhr.status >= 200 && xhr.status < 300) {
                // do you business logic here
            }
            else {
                console.error("request fail");
            }
        }
    };
}

// with querystring
function callApiWithQueryString() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/your-api-url?X-Requested-With=XMLHttpRequest", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 401) {
                // handle authentication here
            }
            else if (xhr.status >= 200 && xhr.status < 300) {
                // do you business logic here
            }
            else {
                console.error("request fail");
            }
        }
    };
}
