

// Overlay
function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

// end of overlay


//check if HTML5 storage is supported
function check_web_storage_support() {
    if(typeof(Storage) !== "undefined") {
        return(true);
    }
    else {
        alert("Web storage unsupported!");
        return(false);
    }
}

function save() {
    if(check_web_storage_support() == true) {
        var area = document.getElementById("area");
        if(area.value != '') {
            localStorage.setItem("note", area.value);
        }
        else {
            alert("Write someting to save");
        }
    }
}


var home = document.getElementById('notepad').innerHTML;
var saveClear = document.getElementById('saveClear').innerHTML;
display_saved_note();


function display_saved_note() {
    if(check_web_storage_support() == true) {
        result = localStorage.getItem('note');
    }
    if(result === null) {
        result = "";
    }

    document.getElementById('area').value = result;
}


function clear() {
    document.getElementById('area').value = "";
}



