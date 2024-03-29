# Hangul Learning App

## Introduction

<img width="919" alt="Screenshot 2024-03-11 at 1 24 30 PM" src="https://github.com/TheOwlSenpai/hangultrainer/assets/45239129/0cf1029e-9814-4e6e-9407-3b93c612b6af">

*Correction: how the would -> how the word

This project is a Hangul learning application that helps users practice and enhance their understanding of the Korean script. The app generates random Hangul words based on user-defined settings, providing an interactive learning experience. The application consists of a Flask backend for word generation and a Java Servlet frontend for handling user interactions.

## Documentation

- [README.md](README.md)
- [USER-GUIDE.md](USER-GUIDE.md)
- [PYTHON.md](PYTHON.md)
- [JAVA-SERVLET.md](JAVA-SERVLET.md)
- [HTML-CSS-JS.md](HTML-CSS-JS.md)

## Features

- Generate random Hangul words with customizable difficulty levels.
- Romanize Hangul words for pronunciation practice.
- User-friendly web interface for an interactive learning experience.
- Log generated words and user attempts for future analysis.

More on [USER-GUIDE.md](USER-GUIDE.md)

## Project Structure

```plaintext
.
├── .vscode
│   └── settings.json
├── HTML-CSS-JS.md --              HTML-CSS-JS Doc
├── JAVA-SERVLET.md --             JAVA-SERVLET Doc
├── LICENSE
├── PYTHON.md --                   PYTHON Doc
├── README.md --                   READ-ME Doc
├── USER-GUIDE.md --               USER-GUIDE Doc
├── WEB-INF
│   ├── classes
│   │   ├── HangulServlet.class -- Java servlet class file
│   │   └── word_logs.csv --       Logs
│   ├── lib
│   │   └── servlet-api.jar --     Servlet api (you still need to link yours)
│   └── web.xml --                 Servlet Mapping
├── hangulLearning.js --           JavaScript
├── index.jsp --                   Home page (index.jsp)
├── src --                         Sources
│   ├── HangulServlet.java --      Java Servlet source code
│   └── scripts --                 python scripts
│       ├── .junk
│       │   ├── generator.py
│       │   ├── hangul_check.py
│       │   └── word_generator.py
│       ├── difficulty1.csv --     list of korean syllables
│       ├── difficulty2.csv --     list of korean syllables
│       ├── difficulty3.csv --     list of korean syllables
│       ├── difficulty4.csv --     list of korean syllables
│       ├── difficulty5.csv --     list of korean syllables
│       └── wordgenerator.py --    Python word geverator API 
└── styles.css
```

## Python API (Flask)

The python API is implemented in Python using Flask. This API is used for generating Hangul words with specified difficulty levels and lengths. 

The server runs on `http://localhost:4848`.

### Installation and Usage

1. Install required dependencies:
   ```bash
   pip install flask pandas korean-romanizer
   ```

2. Run the Flask server:
   ```bash
   python path/to/hangultrainer/src/sripts/wordgenerator.py
   ```

3. Access the API at `http://localhost:4848/generate_word?length_word={length}&difficulty={difficulty}`.

For more information consult [PYTHON.md](PYTHON.md)

## Java Servlet

The frontend is implemented using Java Servlets. It communicates with the Flask backend to generate Hangul words, retrieve Romanized versions, and log user attempts.

### Prerequisites

- Java Servlet environment (e.g., Apache Tomcat)

### Configuration

1. Update the Flask API endpoint in `HangulServlet.java` to match your Flask server. (default: `http://localhost:4848`)

2. Deploy the Servlet to your Servlet container.

More on [JAVA-SERVLET.md](JAVA-SERVLET.md)

## Web Interface

The web interface provides a user-friendly platform for users to interact with the Hangul learning application. It includes settings for difficulty levels, word length selection, and an interactive display for learning and testing.

More in [HTML-CSS-JS.md](HTML-CSS-JS.md)

### Usage

1. Access the app at `http://localhost:{your_servlet_port}/HangulServlet?length_slider={length}&difficulty={difficulty}`.

2. Configure the settings using the provided controls for length and difficulty. 

3.  Choose your preferred theme with the button Dark/Light   

4. Click the "Generate Word" button to generate a random Hangul word.

5. Enter the Romanized translation in the input field and click "Check" to verify your answer. A pop-up will tell if the input is correct or incorrect.

More in [USER-GUIDE.md](USER-GUIDE.md)

## Logs

User attempts and generated words are logged in the `word_logs.csv` file located in the `WEB-INF/classes` directory. The log includes the length, difficulty, and timestamp of each attempt.

## Version History

- **Version 1.2:** Improved user interface, added dark and white mode, and enhanced overall graphical design.
- **Version 1.1:** Implemented word logging and difficulty parameter.
- **Version 1.0:** Initial release with the possibility to only set the lenght.

## Contributors

- [Rolando Mignone](https://github.com/TheOwlSenpai)

## License

This project is licensed under the GNU license v3. See the [LICENSE](LICENSE) file for details.
