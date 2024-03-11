from flask import Flask, request, jsonify
import random
import pandas as pd
from korean_romanizer.romanizer import Romanizer

app = Flask(__name__)

def csv_arr(path):
    # Read the CSV file containing Korean syllables
    df = pd.read_csv(path)
    return df['Syllable'].to_numpy()

def generate_word(syllables, length_word):
    # Choose random syllables from the array
    random_syllables = random.choices(syllables, k=length_word)
    return ''.join(random_syllables)

def romanize_hangul(word):
    # Check if the input is a valid string
    if not isinstance(word, str):
        raise ValueError('Input must be a string')

    # Create a Romanizer instance with the 'text' argument
    romanizer = Romanizer(text=word)

    # Romanize the Hangul word
    romanized_word = romanizer.romanize()

    # Return the romanized word
    return romanized_word

@app.route('/generate_word', methods=['GET'])
def generate_word_api():
    try:
        length_word = int(request.args.get('length_word'))
        difficulty = int(request.args.get('difficulty'))

        if difficulty <= 0:
            return jsonify({'error': 'Difficulty must be a positive integer'}), 400
        
        if length_word <= 0:
            return jsonify({'error': 'Number of syllables must be a positive integer.'}), 400
    
    except ValueError:
        return jsonify({'error': 'Invalid input. Please provide a positive integer for the number of syllables.'}), 400

    if difficulty == 1:
        path = '/Users/rolandomignone/Documents/school/Python/hangultrainer/src/scripts/difficulty1.csv'
    elif difficulty == 2:
        path = '/Users/rolandomignone/Documents/school/Python/hangultrainer/src/scripts/difficulty2.csv'
    elif difficulty == 3:
        path = '/Users/rolandomignone/Documents/school/Python/hangultrainer/src/scripts/difficulty3.csv'
    elif difficulty == 4:
        path = '/Users/rolandomignone/Documents/school/Python/hangultrainer/src/scripts/difficulty4.csv'
    elif difficulty == 5:
        path = '/Users/rolandomignone/Documents/school/Python/hangultrainer/src/scripts/difficulty5.csv'
    
    syllables = csv_arr(path)

    random_korean_word = generate_word(syllables, length_word)

    romanized_korean_word = romanize_hangul(random_korean_word)

    return jsonify({'korean_word': random_korean_word, 'romanized_word': romanized_korean_word})

if __name__ == "__main__":
    app.run(port=4848)