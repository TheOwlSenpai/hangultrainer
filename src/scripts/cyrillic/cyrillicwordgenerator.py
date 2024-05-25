import itertools
import pandas as pd

# Define the syllables and their romanized forms for each language
data = {
    'Russian': {
        'vowels': {
            'А': 'a',
            'Е': 'e',
            'Ё': 'yo',
            'И': 'i',
            'О': 'o',
            'У': 'u', 
            'Ы': 'eu',
            'Э': 'e',
            'Ю': 'yu',
            'Я': 'ya'
        },
        'consonants': {
            'Б': 'b',
            'В': 'v',
            'Г': 'g',
            'Д': 'd',
            'Ж': 'zh',
            'З': 'z', 
            'Й': 'y',
            'К': 'k',
            'Л': 'l',
            'М': 'm',
            'Н': 'n',
            'П': 'p', 
            'Р': 'r',
            'С': 's',
            'Т': 't',
            'Ф': 'f',
            'Х': 'kh',
            'Ц': 'ts', 
            'Ч': 'ch',
            'Ш': 'sh',
            'Щ': 'shch'
        }
    },
    'Ukrainian': {
        'vowels': {
            'А': 'a',
            'Е': 'e',
            'Є': 'ye',
            'И': 'i',
            'І': 'i',
            'Ї': 'yi', 
            'О': 'o',
            'У': 'u',
            'Ю': 'yu',
            'Я': 'ya'
        },
        'consonants': {
            'Б': 'b',
            'В': 'v',
            'Г': 'h',
            'Д': 'd',
            'Ж': 'zh',
            'З': 'z', 
            'Й': 'y',
            'К': 'k',
            'Л': 'l',
            'М': 'm',
            'Н': 'n',
            'П': 'p', 
            'Р': 'r',
            'С': 's',
            'Т': 't',
            'Ф': 'f',
            'Х': 'kh',
            'Ц': 'ts', 
            'Ч': 'ch',
            'Ш': 'sh',
            'Щ': 'shch'
        }
    },
    'Bulgarian': {
        'vowels': {
            'А': 'a',
            'Е': 'e',
            'И': 'i',
            'О': 'o',
            'У': 'u',
            'Ъ': 'a', 
            'Ю': 'yu',
            'Я': 'ya'
        },
        'consonants': {
            'Б': 'b',
            'В': 'v',
            'Г': 'g',
            'Д': 'd',
            'Ж': 'zh',
            'З': 'z', 
            'Й': 'y',
            'К': 'k',
            'Л': 'l',
            'М': 'm',
            'Н': 'n',
            'П': 'p', 
            'Р': 'r',
            'С': 's',
            'Т': 't',
            'Ф': 'f',
            'Х': 'h',
            'Ц': 'ts', 
            'Ч': 'ch',
            'Ш': 'sh',
            'Щ': 'sht'
        }
    }
}

# Define the combinations patterns
patterns = {
    1 : ['vowels'], # only_vowels
    2 : ['vowels', 'consonants'], # vowel_consonant
    3 : ['consonants', 'vowels'], # consonant_vowel
    4 : ['consonants', 'vowels', 'consonants'] #consonant_vowel_consonant
}

# Generate all possible combinations for each language and pattern
for language, syllables in data.items():
    combinations = []
    for type_id, pattern in patterns.items():
        for combo in itertools.product(*[syllables[p] for p in pattern]):
            cyrillic = ''.join(combo)
            romanized = ''.join([syllables[p][c] for p, c in zip(pattern, combo)])
            combinations.append((cyrillic, romanized, type_id))
    
    # Write combinations to CSV
    df = pd.DataFrame(combinations, columns=['cyrillic', 'romanized', 'type'])
    df.to_csv(f'{language}_combinations.csv', index=False)
