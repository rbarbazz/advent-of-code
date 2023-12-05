import re
import os

digit_mapping = {
    "one": "1",
    "two": "2",
    "three": "3",
    "four": "4",
    "five": "5",
    "six": "6",
    "seven": "7",
    "eight": "8",
    "nine": "9",
}


def replace_spelled_out_digit(match):
    return digit_mapping[match.group(1)]


calibration_values = []

with open(os.path.dirname(__file__) + "/input.txt") as file:
    for line in file:
        line = line.rstrip()
        line = re.sub(
            "(?=(" + "|".join(digit_mapping.keys()) + "))",
            replace_spelled_out_digit,
            line,
            flags=re.IGNORECASE,
        )
        clean_line = re.sub("\D", "", line)
        calibration_value = int(clean_line[0] + clean_line[-1])
        calibration_values.append(calibration_value)

print(sum(calibration_values))
