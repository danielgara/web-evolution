<!DOCTYPE html>
<html>
<body>

<h2>Welcome Page - Secret Location</h2>

<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST['name']); 
  $password = htmlspecialchars($_POST['password']); 
  if (empty($password) or $password != '123456') {
    echo "<p>You cannot enter to this site</b>";
  } else {
    echo "<p>Hello, $name! You're the best</b>";
  }
}

?>

</body>
</html>