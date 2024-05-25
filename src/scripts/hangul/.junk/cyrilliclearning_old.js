// Add an event listener for the theme toggle button
document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);

function toggleTheme() {
    const body = document.body;
    const themeToggleBtn = document.getElementById('theme-toggle-btn');

    body.classList.toggle('light');

    const isLightTheme = body.classList.contains('light');
    themeToggleBtn.innerHTML = isLightTheme ? '<i class="moon-icon" color="#333">Dark</i>' : '<i class="sun-icon">Light</i>';
}

let syllableData = {
    Bulgarian: [],
    Russian: [],
    Ukrainian: []
};

// Show loading indicator
document.getElementById('loadingIndicator').style.display = 'block';

// Load CSV data
function loadCSVData(language) {
    return fetch(`${language}_combinations.csv`)
        .then(response => response.text())
        .then(data => {
            let parsedData = PapaParse.parse(data, { header: true }).data;
            syllableData[language] = parsedData;
        });
}

// Load all languages data
Promise.all([
    loadCSVData('Bulgarian'),
    loadCSVData('Russian'),
    loadCSVData('Ukrainian')
]).then(() => {
    console.log('All CSV data loaded');
    document.getElementById('loadingIndicator').style.display = 'none';
    document.getElementById('generateBtn').disabled = false;
}).catch(error => {
    console.error('Error loading CSV data:', error);
});

function generateCyrillicWord() {
    let length = document.getElementById("length_slider").value;
    let selectElement = document.getElementById('languageSelect');
    let selectedLanguage = selectElement.value;

    let languageData = syllableData[selectedLanguage];

    if (languageData.length === 0) {
        alert('CSV data not loaded yet. Please try again.');
        return;
    }

    let selectedWords = [];
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * languageData.length);
        selectedWords.push(languageData[randomIndex]);
    }

    // Generate the word and its romanized equivalent
    let word = '';
    let romanizedWord = '';
    selectedWords.forEach(item => {
        word += item.cyrillic;
        romanizedWord += item.romanized;
    });

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
    if (userInput.toLowerCase() === correctRomanizedWord.toLowerCase()) {
        alert("Correct!");
    } else {
        alert("Incorrect. Try again.");
    }
}
