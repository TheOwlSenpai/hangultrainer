function generateWord() {
    var length = document.getElementById("length_slider").value;

    // Make a request to the servlet with the selected length
    var servletUrl = "HangulServlet?length_slider=" + length;

    // Example using fetch API
    fetch(servletUrl)
        .then(response => response.json())
        .then(data => {
            // Display the Hangul word
            document.getElementById("hangulWord").innerText = "Hangul Word: " + data.koreanWord;
            document.getElementById("wordDisplay").style.display = "block";

            // Store the correct romanized word in a data attribute
            document.getElementById("wordDisplay").setAttribute("data-correct-romanized", data.romanizedWord);
        })
        .catch(error => console.error('Error:', error));
}

function checkWord() {
    var userInput = document.getElementById("romanizedInput").value;
    var correctRomanizedWord = document.getElementById("wordDisplay").getAttribute("data-correct-romanized");

    // Compare user input with the correct Romanized word
    // For simplicity, you can do a case-insensitive comparison
    if (userInput.toLowerCase() === correctRomanizedWord.toLowerCase()) {
        alert("Correct!");
    } else {
        alert("Incorrect. Try again.");
    }
}
