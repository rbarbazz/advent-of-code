import os
import re

calibration_values = []

with open(os.path.dirname(__file__) + "/input.txt") as file:
    for line in file:
        line = line.rstrip()
        clean_line = re.sub("\D", "", line)
        calibration_value = int(clean_line[0] + clean_line[-1])
        calibration_values.append(calibration_value)

print(sum(calibration_values))
