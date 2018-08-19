var button=document.getElementById('Import');

button.onclick=function(){
  var thePath='C:\\Users\\Krescanko';
  // window.open('file://' + thePath, 'explorer');
  var spawn = require('child_process').spawn,
    child    = spawn('C:\\Windows\\explorer.exe',
    ["%USERPROFILE%\\documents"]);

}
