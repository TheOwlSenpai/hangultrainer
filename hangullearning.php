<?php
if (isset($_GET['difficulty']) && isset($_GET['length'])) {
    $difficulty = intval($_GET['difficulty']);
    $length = intval($_GET['length']);

    if ($difficulty < 1 || $difficulty > 5 || $length < 1 || $length > 10) {
        echo json_encode(['error' => 'Invalid input']);
        exit;
    }

    $filename = "difficulty" . $difficulty . ".csv";
    if (!file_exists($filename)) {
        echo json_encode(['error' => 'File not found']);
        exit;
    }

    $words = [];
    if (($handle = fopen($filename, "r")) !== false) {
        while (($data = fgetcsv($handle, 1000, ",")) !== false) {
            $words[] = $data;
        }
        fclose($handle);
    }

    $selectedWords = [];
    for ($i = 0; $i < $length; $i++) {
        $randomIndex = array_rand($words);
        $selectedWords[] = $words[$randomIndex];
    }

    $hangulWord = '';
    $romanizedWord = '';
    foreach ($selectedWords as $word) {
        $hangulWord .= $word[0];
        $romanizedWord .= $word[1];
    }

    echo json_encode(['word' => $hangulWord, 'romanized' => $romanizedWord]);
} else {
    echo json_encode(['error' => 'Missing parameters']);
}
?>