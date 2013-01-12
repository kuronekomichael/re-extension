document.querySelector('#save_button').addEventListener('click', function(){
    localStorage["ext_id"] = document.getElementById("ext_id").value;

    var status = document.getElementById("status");
    status.innerHTML = "Options Saved.(" + localStorage["ext_id"] + ")";
    setTimeout(function() {
        status.innerHTML = "";
    }, 1500);
});
document.getElementById("ext_id").value = localStorage["ext_id"] ? localStorage["ext_id"] : '';
