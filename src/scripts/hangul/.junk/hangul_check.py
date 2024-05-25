from korean_romanizer.romanizer import Romanizer
import sys

def main():
    # Check if the correct number of arguments is provided
    if len(sys.argv) != 3:
        print("Usage: python hangul_check.py <korean_hangul> <romanization> /usr")
        sys.exit(1)

    korean_word = sys.argv[1]
    romanization = sys.argv[2]

    # Romanize the Korean word
    try:
        romanized_word = romanize_hangul(korean_word)
        if romanized_word == romanization:
            print("1")
        else:
            print("0")
    except ValueError as e:
        print(f"Error: {e}")

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

if __name__ == "__main__":
    main()
