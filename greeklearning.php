<?php

function generateGreekWord($length) {
    $csvFile = "greek_combinations.csv";
    $combinations = [];

    if (($handle = fopen($csvFile, "r")) !== FALSE) {
        while (($data = fgetcsv($handle, 4000, ",")) !== FALSE) {
            $combinations[] = $data;
        }
        fclose($handle);
    }
    
    // Randomly select combinations based on word length
    if ($length == 1) {
        $selectedCombinations = [array_rand($combinations)];
    } else {
        $selectedCombinations = array_rand($combinations, $length);
    }
    
    $word = '';
    $romanizedWord = '';
    
    // Ensure $selectedCombinations is an array
    if (!is_array($selectedCombinations)) {
        $selectedCombinations = [$selectedCombinations];
    }
    
    foreach ($selectedCombinations as $index) {
        $word .= $combinations[$index][0];
        $romanizedWord .= $combinations[$index][1];
    }

    return ['greekWord' => $word, 'romanizedWord' => $romanizedWord];
}

$length = isset($_POST['length']) ? intval($_POST['length']) : 3;

$result = generateGreekWord($length);

header('Content-Type: application/json');
echo json_encode($result);

?>
