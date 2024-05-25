import sys
import random
import pandas as pd

def csv_arr(path):
    # Read the CSV file containing Korean syllables
    df = pd.read_csv(path)
    return df['Syllable'].to_numpy()

def generate_word(syllables, lenght_word):
    # Choose random syllables from the array
    random_syllables = random.choices(syllables, k=lenght_word)
    return ''.join(random_syllables)

def main():
    if len(sys.argv) != 2:
        print("Usage: python word_generator.py <number of syllables>")
        sys.exit(1)

    try:
        lenght_word = int(sys.argv[1])
        if lenght_word <= 0:
            print("Number of syllables must be a positive integer.")
            sys.exit(1)
    except ValueError:
        print("Invalid input. Please provide a positive integer for the number of syllables.")
        sys.exit(1)

    path = './hangul_syllables.csv'  # Replace with the actual path
    syllables = csv_arr(path)

    random_korean_word = generate_word(syllables, lenght_word)
    print(f"{random_korean_word}")

if __name__ == "__main__":
    main()
