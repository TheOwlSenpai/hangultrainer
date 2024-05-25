<?php
// Function to generate Cyrillic word and its romanized version
function generateCyrillicWord($length, $language) {
    $csvFile = $language . "_combinations.csv";
    $combinations = [];
    
    // Read CSV file
    if (($handle = fopen($csvFile, "r")) !== FALSE) {
        while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
            $combinations[] = $data;
        }
        fclose($handle);
    }
    
    // Randomly select combinations based on word length
    if ($length == 1) {
        $selectedCombinations = array(rand(0, count($combinations) - 1));
    } else {
        $selectedCombinations = array_rand($combinations, $length);
    }
    
    $word = '';
    $romanizedWord = '';
    
    if (!is_array($selectedCombinations)) {
        $selectedCombinations = [$selectedCombinations];
    }
    
    foreach ($selectedCombinations as $index) {
        $word .= $combinations[$index][0];
        $romanizedWord .= $combinations[$index][1];
    }
    
    return ['cyrillicWord' => $word, 'romanizedWord' => $romanizedWord];
}

// Get length and selected language from POST data
$length = isset($_POST['length']) ? intval($_POST['length']) : 5;
$language = isset($_POST['language']) ? $_POST['language'] : 'Russian';

// Generate Cyrillic word and its romanized version
$result = generateCyrillicWord($length, $language);

// Return JSON response
header('Content-Type: application/json');
echo json_encode($result);
?>