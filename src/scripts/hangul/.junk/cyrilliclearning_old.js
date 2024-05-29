// Add an event listener for the theme toggle button
document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);

function toggleTheme() {
    const body = document.body;
    const themeToggleBtn = document.getElementById('theme-toggle-btn');

    body.classList.toggle('light');

    const isLightTheme = body.classList.contains('light');
    themeToggleBtn.innerHTML = isLightTheme ? '<i class="moon-icon" color="#333">Dark</i>' : '<i class="sun-icon">Light</i>';
}

function generateCyrillicWord() {
    let length = document.getElementById("length_slider").value;
    let selectElement = document.getElementById('languageSelect');
    let selectedLanguage = selectElement.value;

    // Define the syllables arrays
    let russianSyllables = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ы', 'Э', 'Ю', 'Я'];
    let romanizedRussian = ['a', 'b', 'v', 'g', 'd', 'e', 'yo', 'zh', 'z', 'i', 'y', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'f', 'kh', 'ts', 'ch', 'sh', 'shch', 'eu', 'e', 'yu', 'ya'];

    let ukrainianSyllables = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Є', 'Ж', 'З', 'И', 'І', 'Ї', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ю', 'Я'];
    let romanizedUkrainian = ['a', 'b', 'v', 'h', 'd', 'e', 'ye', 'zh', 'z', 'i', 'i', 'yi', 'y', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'f', 'kh', 'ts', 'ch', 'sh', 'shch', 'yu', 'ya'];

    let bulgarianSyllables = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ю', 'Я'];
    let romanizedBulgarian = ['a', 'b', 'v', 'g', 'd', 'e', 'zh', 'z', 'i', 'y', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'f', 'h', 'ts', 'ch', 'sh', 'sht', 'a', 'yu', 'ya'];

    // Variables to hold the selected syllables
    let cyrillicSyllables, romanizedSyllables;

    // Select the appropriate syllables based on the selected language
    if (selectedLanguage == "Bulgarian") {
        cyrillicSyllables = bulgarianSyllables;
        romanizedSyllables = romanizedBulgarian; 
    } else if (selectedLanguage == "Russian") {
        cyrillicSyllables = russianSyllables;
        romanizedSyllables = romanizedRussian;
    } else if (selectedLanguage == "Ukrainian") {
        cyrillicSyllables = ukrainianSyllables;
        romanizedSyllables = romanizedUkrainian;
    }

    // Generate random Cyrillic word and its romanized equivalent
    let word = '';
    let romanizedWord = '';
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * cyrillicSyllables.length);
        word += cyrillicSyllables[randomIndex];
        romanizedWord += romanizedSyllables[randomIndex];
    }

    // Display the Cyrillic word
    document.getElementById("cyrillicWord").innerText = "Cyrillic Word: " + word;
    document.getElementById("wordDisplay").style.display = "block";

    // Store the correct romanized word in a data attribute
    document.getElementById("wordDisplay").setAttribute("data-correct-romanized", romanizedWord);
}

function checkCyrillicWord() {
    let userInput = document.getElementById("romanizedInput").value;
    let correctRomanizedWord = document.getElementById("wordDisplay").getAttribute("data-correct-romanized");

    // Compare user input with the correct Romanized word
    // For simplicity, you can do a case-insensitive comparison
    if (userInput.toLowerCase() === correctRomanizedWord.toLowerCase()) {
        alert("Correct!");
    } else {
        alert("Incorrect. Try again.");
    }
}