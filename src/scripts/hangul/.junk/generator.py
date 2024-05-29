import hangul_jamo as jamo
import csv
from korean_romanizer.romanizer import Romanizer

# Define consonants, vowels, and final consonants
initial_consonants_easy = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ']
initial_consonants = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ']
medial_vowels_easy = ['ㅏ', 'ㅑ', 'ㅓ', 'ㅕ', 'ㅗ', 'ㅛ', 'ㅜ', 'ㅠ', 'ㅡ', 'ㅣ']
medial_vowels = ['ㅏ', 'ㅑ', 'ㅓ', 'ㅕ', 'ㅗ', 'ㅛ', 'ㅜ', 'ㅠ', 'ㅡ', 'ㅣ', 'ㅐ', 'ㅒ', 'ㅔ', 'ㅖ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅢ']
final_consonants_easy = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ']
final_consonants = [' ', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ']

def romanize_hangul(word):
    # Check if the input is a valid string
    if not isinstance(word, str):
        raise ValueError('Input must be a string')

    # Create a Romanizer instance with the 'text' argument
    romanizer = Romanizer(text=word)

    try:
        # Romanize the Hangul word
        romanized_word = romanizer.romanize()
    except AttributeError:
        # Handle the case where romanization fails due to NoneType issues
        romanized_word = ''
    
    # Return the romanized word
    return romanized_word

diff_1 = []
for letter in initial_consonants_easy:
    diff_1.append(letter)

for letter in medial_vowels_easy:
    diff_1.append(letter)

diff_2 = []
for letter in final_consonants:
    diff_2.append(letter)

for letter in medial_vowels:
    diff_2.append(letter)

diff_3 = []
for initial in initial_consonants:
    for medial in medial_vowels:
        syllable = initial + medial
        jm_syllable = jamo.compose(f'{syllable}')
        diff_3.append(jm_syllable)

diff_4 = []
for syllable in diff_3:
    diff_4.append(syllable)

for initial in initial_consonants:
    for medial in medial_vowels:
        for final in final_consonants_easy:
            syllable = initial + medial + final
            jm_syllable = jamo.compose(f'{syllable}')
            diff_4.append(jm_syllable)

diff_5 = []  # Generate triple syllables
for initial in initial_consonants:
    for medial in medial_vowels:
        for final in final_consonants:
            syllable = initial + medial + final
            jm_syllable = jamo.compose(f'{syllable}')
            diff_5.append(jm_syllable)

for initial in initial_consonants:
    for medial in medial_vowels:
        syllable = initial + medial
        jm_syllable = jamo.compose(f'{syllable}')
        diff_5.append(jm_syllable)

# Write syllables to a CSV file
with open('difficulty1.csv', 'w', newline='', encoding='utf-8') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(['Syllable', 'Romanized'])
    for syllable in diff_1:
        writer.writerow([syllable, romanize_hangul(syllable)])

# Write syllables to a CSV file
with open('difficulty2.csv', 'w', newline='', encoding='utf-8') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(['Syllable', 'Romanized'])
    for syllable in diff_2:
        writer.writerow([syllable, romanize_hangul(syllable)])

# Write syllables to a CSV file
with open('difficulty3.csv', 'w', newline='', encoding='utf-8') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(['Syllable', 'Romanized'])
    for syllable in diff_3:
        writer.writerow([syllable, romanize_hangul(syllable)])

# Write syllables to a CSV file
with open('difficulty4.csv', 'w', newline='', encoding='utf-8') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(['Syllable', 'Romanized'])
    for syllable in diff_4:
        writer.writerow([syllable, romanize_hangul(syllable)])

# Write syllables to a CSV file
with open('difficulty5.csv', 'w', newline='', encoding='utf-8') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(['Syllable', 'Romanized'])
    for syllable in diff_5:
        writer.writerow([syllable, romanize_hangul(syllable)])

print(f"Generated {len(diff_1) + len(diff_2) + len(diff_3) + len(diff_4) + len(diff_5)} Hangul syllables and saved them to CSV files.")
