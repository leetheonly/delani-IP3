$(document).ready(function() {
  $("#toggle").click(function() {
    $("#design").hide();
    $("#toggle").show();
  });
}
);
function submitMyForm(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  if (name !=="" && email !== "" && message !=="");
  alert("Thank you,"+ name+ ""+ "We have received your message");
}
