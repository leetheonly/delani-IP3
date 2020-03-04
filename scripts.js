$(document).ready(function(){
  $("#img1").click(function() {
$("#design").slideToggle();
  $("#img1").slideToggle();    
  });
}
);
$(document).ready(function(){
  $("#design").click(function(){
      $("#design").fadeToggle();
      $("#img1").fadeToggle()
  });

});

$(document).ready(function(){
  $("#img2").click(function() {
$("#devp").slideToggle();
  $("#img2").slideToggle();    
  });
});

$(document).ready(function(){
  $("#devp").click(function() {
$("#devp").fadeToggle();
  $("#img2").fadeToggle();    
  });
});



$(document).ready(function(){
  $("#img3").click(function() {
$("#prod").slideToggle();
  $("#img3").slideToggle();    
  });
});

$(document).ready(function(){
  $("#prod").click(function(){
      $("#prod").fadeToggle();
      $("#img3").fadeToggle()
  });

});

function submitFormData() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  if (name !== "" && email !== "" && message !== "");
  alert("Hey " + name + " " + "thank you for contacting us.Delani Studio has received your message");
  event.preventDefault();
}
