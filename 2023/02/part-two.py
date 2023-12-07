import os
import re
from collections import defaultdict
import math

result = 0


with open(os.path.dirname(__file__) + "/input.txt", encoding="utf-8") as file:
    for line in file:
        _, game_sets_str = line.split(":")
        color_max_cube_count_mapping = defaultdict(int)

        for match in re.finditer(r"(?P<cube_count>\d+)\s(?P<color>\w+)", game_sets_str):
            cube_count = int(match.group("cube_count"))
            color = match.group("color")

            if color_max_cube_count_mapping[color] < cube_count:
                color_max_cube_count_mapping[color] = cube_count

        result += math.prod(color_max_cube_count_mapping.values())

print(result)
