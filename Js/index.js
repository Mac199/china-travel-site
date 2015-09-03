$(document).ready(function(){
 $('#userinput form input[name="destination"]').focus(function(){
    $('#myModal').modal({
      show:true
    });
 });
});