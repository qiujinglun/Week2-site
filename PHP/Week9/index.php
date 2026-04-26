<p>Please enter a whole number</p>

<form method="get">
    <input name="number" type="text">
    <input type="submit" value="GO!">
</form>

<?php

function isPrime($n) {
    if ($n < 2) return false;

    $limit = (int) sqrt($n);

    for ($i = 2; $i <= $limit; $i++) {
        if ($n % $i == 0) {
            return false;
        }
    }

    return true;
}

if (isset($_GET["number"])) {

    $num = $_GET["number"];

    if (!is_numeric($num) || intval($num) != $num) {
        echo "Enter a number";
    } else {
        $num = intval($num);

        if (isPrime($num)) {
            echo "$num is a prime number";
        } else {
            echo "$num is not prime";
        }
    }
}

?>