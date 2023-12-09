import os
import re

result = 0
schema = []

with open(os.path.dirname(__file__) + "/input.txt", encoding="utf-8") as file:
    for line in file:
        schema.append(line.strip())

line_length = len(schema[0])
schema = "".join(schema)
num_str = ""
is_valid_num = False


def is_symbol(char: str):
    return re.match(r"[^\d\.]", char)


def is_valid_char(index: int):
    is_valid = False

    try:
        is_valid = (
            is_symbol(schema[index - 1])
            or is_symbol(schema[index - line_length + 1])
            or is_symbol(schema[index - line_length])
            or is_symbol(schema[index - line_length - 1])
        )
    except IndexError:
        pass

    if is_valid:
        return is_valid

    try:
        is_valid = (
            is_symbol(schema[index + 1])
            or is_symbol(schema[index + line_length - 1])
            or is_symbol(schema[index + line_length])
            or is_symbol(schema[index + line_length + 1])
        )
    except IndexError:
        pass

    return is_valid


for i, char in enumerate(schema):
    if char.isdigit():
        num_str += char

        if not is_valid_num:
            is_valid_num = is_valid_char(i)
    else:
        if is_valid_num:
            result += int(num_str)
        num_str = ""
        is_valid_num = False

print(result)
