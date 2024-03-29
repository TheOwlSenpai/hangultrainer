<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hangul Learning App</title>
    <script src="hangulLearning.js" defer></script>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <div class="body">
        <div class="title-theme">
            <h1>Hangul Learning App</h1>
            <button class="moon-sun" id="theme-toggle-btn" onclick="toggleTheme()">
                <i class="sun-icon">Light</i>
            </button>
        </div>
        
        <script>
            function toggleTheme() {
                const body = document.body;
                const themeToggleBtn = document.getElementById('theme-toggle-btn');
        
                body.classList.toggle('light');
        
                const isLightTheme = body.classList.contains('light');
                themeToggleBtn.innerHTML = isLightTheme ? '<i class="moon-icon" color="#333">Dark</i>' : '<i class="sun-icon">Light</i>';
            }
        </script>        

        <div class="fieldset">
            <div class="legend">Settings</div>
            <div class="radio">
                <label>
                    <input type="radio" value="1" name="difficulty" id="difficulty1"><span>1</span>
                </label>
                <label>
                    <input type="radio" value="2" name="difficulty" id="difficulty2"><span>2</span>
                </label>
                <label>
                    <input type="radio" value="3" name="difficulty" id="difficulty3"><span>3</span>
                </label>
                <label>
                    <input type="radio" value="4" name="difficulty" id="difficulty4" checked><span>4</span>
                </label>
                <label>
                    <input type="radio" value="5" name="difficulty" id="difficulty5"><span>5</span>
                </label>
            </div>
            <label for="length_slider">Choose Word Length (1-10):</label>
            <input type="range" min="1" max="10" value="5" id="length_slider">
            <button onclick="generateWord()">Generate Word</button>
            
        </div>
    </div>
    <div id="wordDisplay" style="display:none;" class="body">
            <p id="radio_d"></p>
            <p id="hangulWord"></p>
            <label for="romanizedInput">Enter Romanized Word:</label>
            <input type="text" id="romanizedInput">
            <button onclick="checkWord()">Check</button>
    </div>

</body>
</html>
