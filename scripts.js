function submit() {
  var dd = parseInt(document.getElementById("name").value);
  var mm = parseInt(document.getElementById("Email").value);
  var yy = parseInt(document.getElementById("message").value);
}
$(document).ready(function() {
  $("#toggle").click(function() {
    $("#design").hide();
    $("#toggle").show();
  });
}
);
function myForm(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  if (name !=="" && email !== "" && message !=="");
  alert("Thank you,"+ name+ ""+ "We have received your message");
}
