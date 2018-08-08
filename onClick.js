var button=document.getElementById('button1');

button.onclick=function(){
  var thePath='C:\\Users\\Krescanko';
  // window.open('file://' + thePath, 'explorer');
  var spawn = require('child_process').spawn,
    child    = spawn('C:\\Windows\\explorer.exe',
    ["%USERPROFILE%\\documents"]);

}
