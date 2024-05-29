document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);

function toggleTheme() {
    const body = document.body;
    const themeToggleBtn = document.getElementById('theme-toggle-btn');

    body.classList.toggle('light');

    const isLightTheme = body.classList.contains('light');
    themeToggleBtn.innerHTML = isLightTheme ? '<i class="moon-icon" color="#333">Dark</i>' : '<i class="sun-icon">Light</i>';
}

function generateJapaneseWord() {
    let selectType = document.getElementById('typeSelect');
    let selectedType = selectType.value;
    let difficulty = document.querySelector('input[name="difficulty"]:checked').value;
    let length = document.getElementById("length_slider").value;

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'kanalearning.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let response = JSON.parse(xhr.responseText);
                document.getElementById("japaneseWord").innerText = "Kana Word: " + response.japaneseWord;
                document.getElementById("wordDisplay").style.display = "block";
                document.getElementById("wordDisplay").setAttribute("data-correct-romanized", response.romanizedWord);
            } else {
                console.error('Error:', xhr.statusText);
            }
        }
    };
    xhr.send("type=" + encodeURIComponent(selectedType) + "&difficulty=" + encodeURIComponent(difficulty) + "&length=" + encodeURIComponent(length));
}

function checkJapaneseWord() {
    let userInput = document.getElementById("romanizedInput").value;
    let correctRomanizedWord = document.getElementById("wordDisplay").getAttribute("data-correct-romanized");

    if (userInput.toLowerCase() === correctRomanizedWord.toLowerCase()) {
        alert("Correct!");
    } else {
        alert("Incorrect. Try again.");
    }
}

// cheatsheet
document.getElementById('cheatsheet-toggle-btn').addEventListener('click', function() {
    document.getElementById('cheatsheet-modal').style.display = 'block';
    openTab(null, 'Hiragana'); // Open Hiragana tab by default
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('cheatsheet-modal').style.display = 'none';
});

window.onclick = function(event) {
    if (event.target == document.getElementById('cheatsheet-modal')) {
        document.getElementById('cheatsheet-modal').style.display = 'none';
    }
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove('active');
    }
    
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('active');
    }
    
    document.getElementById(tabName).classList.add('active');
    if (evt) {
        evt.currentTarget.classList.add('active');
    } else {
        document.querySelector('.tablinks').classList.add('active');
    }
}