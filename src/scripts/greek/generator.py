import itertools
import pandas as pd

data = {
    'vowels': {
        'Α': 'a',
        'Ε': 'e',
        'Η': 'i',
        'Ι': 'i',
        'Ο': 'o',
        'Υ': 'y',
        'Ω': 'o'
    },
    'consonants': {
        'Β': 'v',
        'Γ': 'g',
        'Δ': 'd',
        'Ζ': 'z',
        'Θ': 'th',
        'Κ': 'k',
        'Λ': 'l',
        'Μ': 'm',
        'Ν': 'n',
        'Ξ': 'x',
        'Π': 'p',
        'Ρ': 'r',
        'Σ': 's',
        'Τ': 't',
        'Φ': 'f',
        'Χ': 'ch',
        'Ψ': 'ps'
    }
}

patterns = {
    1: ['vowels'],
    2: ['vowels', 'consonants'],
    3: ['consonants', 'vowels'],
    4: ['consonants', 'vowels', 'consonants']
}

combinations = []

for type_id, pattern in patterns.items():
    # Create lists of letters based on the pattern
    letters = [data[category] for category in pattern]
    # Create all combinations for the given pattern
    for combo in itertools.product(*letters):
        greek = ''.join(combo)
        romanized = ''.join([data[category][char] for category, char in zip(pattern, combo)])
        combinations.append((greek, romanized, type_id))

df = pd.DataFrame(combinations, columns=['Greek', 'Romanized', 'Type'])
df.to_csv('greek_combinations.csv', index=False)
