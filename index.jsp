<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hangul Learning App</title>
    <script src="hangulLearning.js" defer></script>
</head>
<body>
    <h1>Hangul Learning App</h1>
    
    <label for="length_slider">Choose Word Length (1-10):</label>
    <input type="range" min="1" max="10" value="5" id="length_slider">
    <button onclick="generateWord()">Generate Word</button>


    <div id="wordDisplay" style="display:none;">
        <p id="hangulWord"></p>
        <label for="romanizedInput">Enter Romanized Word:</label>
        <input type="text" id="romanizedInput">
        <button onclick="checkWord()">Check</button>
    </div>
</body>
</html>
