<!DOCTYPE html>
<html>
<body>

<h2>Products Page (With AJAX)</h2>

Search by name: <input type="text" id="name" />  
<input type="button" id="search" value="Search" />

<div id="result"></div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("#search").click(function(){
    var name = $("#name").val();
    $.ajax({
      url: 'products-api.php',
      type: 'post',
      data: {name: name},
      success: function(response){
        $("#result").html(JSON.stringify(response, null, 2));
      }
    });
  });
});
</script>

</body>
</html>