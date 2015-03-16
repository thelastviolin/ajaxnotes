/* Ajax Functions */



/* Generic Functions */

function setHtml(id, text) {
  var tag = document.getElementById(id);
  if (tag) {
    tag.innerHTML = text;
  }
}

function getValue(id) {
    var tag = document.getElementById(id);
    if (tag) {
        return tag.value;
    }
}


function getTime() {
  var d = new Date();
  var result = d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  var hours = d.getHours();
  var time_of_day = "AM";
  if (hours > 12) {
  	hours -= 12;
  	time_of_day = "PM";
  }
  else if (hours == 0) {
  	hours = 12;
  }
  result += " " + pad(hours) + ":" + pad(d.getMinutes()) + " " + time_of_day;
  console.log(result);
  return result;
}

function formatTime(time) {
  var d = new Date(time);
  var result = d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  var hours = d.getHours();
  var time_of_day = "AM";
  if (hours > 12) {
  	hours -= 12;
  	time_of_day = "PM";
  }
  else if (hours == 0) {
  	hours = 12;
  }
  result += " " + pad(hours) + ":" + pad(d.getMinutes()) + " " + time_of_day;
  return result;
}