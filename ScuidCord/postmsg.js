var btn = document.getElementById("Send");
var msg = document.getElementById("msg").value;
var usrn = document.getElementById("usrn").value;
var secpad = "00";
btn.addEventListener("click", postmsg);
function postmsg() {
    var d = new Date();
    svmsg('[' + d.getHours() + ':' + 
    d.getMinutes() + ':' + 
    (secpad + d.getSeconds()).slice(-secpad.length) + 
    '] ' + usrn + ': ' + msg);
}

function svmsg(msg) {
    var msgFileContent = "";
    //CONTINUE HERE, SOMEHOW OPEN TEXT FILE AND SAVE AND READ MSGS AND THEN SOMEHOW LIST THEM ON THE WEBSITE WITHOUT DUPLICATES
    alert(msgFileContent);

}