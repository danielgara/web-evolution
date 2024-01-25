<?php

class ProductDAO {
    public static $products = array(
        array("name" => "Apple iPhone 13", "price" => 799),
        array("name" => "Samsung Galaxy S21", "price" => 699),
        array("name" => "Google Pixel 6", "price" => 599),
        array("name" => "OnePlus 9", "price" => 729),
        array("name" => "Sony Xperia 5 III", "price" => 999)
    );

    public static function getAll() {
        return ProductDAO::$products;
    }

    public static function searchByName($name) {
        $results = array();
        foreach (ProductDAO::$products as $product) {
            if (stripos($product['name'], $name) !== false) {
                $results[] = $product;
            }
        }
        return $results;
    }
}

?>