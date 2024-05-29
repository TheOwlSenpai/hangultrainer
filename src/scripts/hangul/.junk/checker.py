def remove_whitespace(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        lines = file.readlines()

    # Remove white spaces and newline characters
    cleaned_lines = [line.strip().replace(' ', '') for line in lines]

    with open(file_path, 'w', encoding='utf-8') as file:
        file.write('\n'.join(cleaned_lines))

# Replace 'file_path' with the path to your file
file_path = 'difficulty5.csv'
remove_whitespace(file_path)
print("White spaces removed successfully!")