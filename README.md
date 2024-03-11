# Hangul Learning App

<img width="919" alt="Screenshot 2024-03-11 at 1 24 30 PM" src="https://github.com/TheOwlSenpai/hangultrainer/assets/45239129/726decdd-8352-413b-874e-0a68fa028190">

## Introduction

This project is a Hangul learning application that helps users practice and enhance their understanding of the Korean script. The app generates random Hangul words based on user-defined settings, providing an interactive learning experience. The application consists of a Flask backend for word generation and a Java Servlet frontend for handling user interactions.

## Features

- Generate random Hangul words with customizable difficulty levels.
- Romanize Hangul words for pronunciation practice.
- User-friendly web interface for an interactive learning experience.
- Log generated words and user attempts for future analysis.

## Project Structure

```plaintext
.
├── LICENSE
├── README.md
├── WEB-INF
│   ├── README.md
│   ├── classes
│   │   ├── HangulServlet.class
│   │   └── word_logs.csv
│   ├── lib
│   │   └── servlet-api.jar
│   └── web.xml
├── bin
│   └── HangulServlet.class
├── hangulLearning.js
├── index.jsp
├── src
│   ├── HangulServlet.java
│   └── scripts
│       ├── difficulty1.csv
│       ├── difficulty2.csv
│       ├── difficulty3.csv
│       ├── difficulty4.csv
│       ├── difficulty5.csv
│       ├── hangul_syllables.csv
│       └── wordgenerator.py
└── styles.css
```

## Backend (Flask)

The backend is implemented in Python using Flask. It provides a RESTful API for generating Hangul words with specified difficulty levels and lengths. The server runs on `http://localhost:4848`.

### Installation and Usage

1. Install required dependencies:
   ```bash
   pip install flask pandas korean-romanizer
   ```

2. Run the Flask server:
   ```bash
   python your_flask_app.py
   ```

3. Access the API at `http://localhost:4848/generate_word?length_word={length}&difficulty={difficulty}`.

## Frontend (Java Servlet)

The frontend is implemented using Java Servlets. It communicates with the Flask backend to generate Hangul words, retrieve Romanized versions, and log user attempts.

### Prerequisites

- Java Servlet environment (e.g., Apache Tomcat)

### Configuration

1. Update the Flask API endpoint in `HangulServlet.java` to match your Flask server.

2. Deploy the Servlet to your Servlet container.

3. Access the app at `http://localhost:{your_servlet_port}/HangulServlet?length_slider={length}&difficulty={difficulty}`.

## Web Interface

The web interface provides a user-friendly platform for users to interact with the Hangul learning application. It includes settings for difficulty levels, word length selection, and an interactive display for learning and testing.

### Usage

1. Open `index.jsp` in a web browser.

2. Configure the settings using the provided controls.

3. Click the "Generate Word" button to generate a random Hangul word.

4. Enter the Romanized word in the input field and click "Check" to verify your answer.

## Logs

User attempts and generated words are logged in the `word_logs.csv` file located in the `WEB-INF/classes` directory. The log includes the length, difficulty, and timestamp of each attempt.

## Version History

- **Version 1.2:** Improved user interface, added dark mode, and enhanced error handling.
- **Version 1.1:** Implemented word logging and Romanization features.
- **Version 1.0:** Initial release with basic word generation functionality.

## Contributors

- [Your Name](link_to_your_github_profile)
- [Another Contributor](link_to_another_github_profile)

## License

This project is licensed under the [MIT License](LICENSE). See the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README according to your project details. Include screenshots, deployment instructions, and any additional information that enhances the documentation.
