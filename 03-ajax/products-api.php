<?php

include 'ProductDAO.php';
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['name'])) {
    $products = ProductDAO::searchByName($_POST['name']);
    header('Content-Type: application/json');
    echo json_encode($products);
}

?>