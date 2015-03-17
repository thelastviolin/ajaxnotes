/* Ajax Functions */

function sendData(params, toUrl, callbackFunction) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4) {
      callbackFunction(xmlHttp, params);
    }
  }
  var parameters = '';
  for (var param in params) {
    parameters += param + '=' + escape(params[param]) + '&';
  }
  xmlHttp.open("GET", toUrl, true);
  xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xmlHttp.send(parameters);
}

function sendDate() {
  var text = getDate();
  if (text) {
    sendData({'date': text}, '/edit.html', handleDate);
  }
}

function handleDate(xmlHttp, params) {
  if (xmlHttp.responseText == 'OK') {
    setTimeout("loadPage('/');", 300);
  } else {
    showError(xmlHttp.responseText);
  }
}

function loadLoop() {
  var msSinceLast = (getDate() - lastLoad);
  if (msSinceLast > 10000) {
    loadPosts();
    lastLoad = getDate();
  }
  setTimeout('loadLoop();', 1000);
}

/* Specific Functions */

function setLastModified(id, text) {
  var tag = document.getElementById(id);
  if (tag) {
    tag.innerHTML = "last modified at " + text;
  }
}

/* Generic Functions */

function setHtml(id, text) {
  var tag = document.getElementById(id);
  if (tag) {
    tag.innerHTML = text;
  }
}

function setValue(id, text) {
  var tag = document.getElementById(id);
  if (tag) {
    tag.value = text;
  }
}

function getValue(id) {
    var tag = document.getElementById(id);
    if (tag) {
        return tag.value;
    }
}


function getDate() {
  var d = new Date();
  var result = d.getFullYear() + "-" + d.getMonth() + 1 + "-" + d.getDate();
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var minutesString;
  var time_of_day = "AM";
  if (hours > 12) {
  	hours -= 12;
  	time_of_day = "PM";
  }
  else if (hours == 0) {
  	hours = 12;
  }
  if (minutes < 10) {
    minutesString = "0" + minutes;
  }
  else {
    minutesString = minutes;
  }
  result += " " + hours + ":" + minutesString + " " + time_of_day;
  return result;
}

function getSimpleDate() {
  var d = new Date();
  var result = d.getFullYear() + "-" + d.getMonth() + 1 + "-" + d.getDate();
  return result;
}

function formatDate(time) {
  var d = new Date(time);
  var result = d.getFullYear() + "-" + d.getMonth() + 1 + "-" + d.getDate();
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var minutesString;
  var time_of_day = "AM";
  if (hours > 12) {
  	hours -= 12;
  	time_of_day = "PM";
  }
  else if (hours == 0) {
  	hours = 12;
  }
  if (minutes < 10) {
    minutesString = "0" + minutes;
  }
  else {
    minutesString = minutes;
  }
  result += " " + hours + ":" + minutesString + " " + time_of_day;
  return result;
}