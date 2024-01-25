<!DOCTYPE html>
<html>
<body>

<h2>Products Page</h2>

<form method="post" action="products.php">
  Search by name: <input type="text" name="name" />  <input type="submit" />
</form>

<?php
include 'ProductDAO.php';

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['name'])) {
  $products = ProductDAO::searchByName($_POST['name']);
} else {
  $products = ProductDAO::getAll();
}

// Iterate over the products array and display them in HTML
echo '<ul>';
for ($i = 0; $i < count($products); $i++) {
    echo '<li>' . $products[$i]['name'] . '</li>';
}
echo '</ul>';

?>

</body>
</html>