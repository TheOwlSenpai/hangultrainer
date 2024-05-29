<?php

function generateJapaneseWord($type, $difficulty, $length) {
    $csvFile = $type . $difficulty . ".csv";
    $combinations = [];

    if (!file_exists($csvFile)) {
        return ['error' => 'CSV file not found'];
    }

    if (($handle = fopen($csvFile, "r")) !== false) {
        while (($data = fgetcsv($handle, 150, ",")) !== false) {
            $combinations[] = $data;
        }
        fclose($handle);
    } else {
        return ['error' => 'Unable to open CSV file'];
    }

    if ($length == 1) {
        $selectedCombinations = [rand(0, count($combinations) - 1)];
    } else {
        $selectedCombinations = array_rand($combinations, $length);
        if (!is_array($selectedCombinations)) {
            $selectedCombinations = [$selectedCombinations];
        }
    }

    $word = '';
    $romanizedWord = '';

    foreach ($selectedCombinations as $index) {
        $word .= $combinations[$index][0];
        $romanizedWord .= $combinations[$index][1];
    }

    return ['japaneseWord' => $word, 'romanizedWord' => $romanizedWord];
}

$type = isset($_POST['type']) ? $_POST['type'] : 'hiragana';
$difficulty = isset($_POST['difficulty']) ? intval($_POST['difficulty']) : 3;
$length = isset($_POST['length']) ? intval($_POST['length']) : 5;

$result = generateJapaneseWord($type, $difficulty, $length);

header('Content-Type: application/json');
echo json_encode($result);

?>