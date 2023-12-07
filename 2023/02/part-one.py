import os
import re

result = 0


with open(os.path.dirname(__file__) + "/input.txt", encoding="utf-8") as file:
    for line in file:
        game_id_str, game_sets_str = line.split(":")
        game_id_int = int(game_id_str.replace("Game ", ""))
        is_valid = True

        for match in re.finditer(r"(?P<cube_count>\d+)\s(?P<color>\w+)", game_sets_str):
            cube_count = int(match.group("cube_count"))
            color = match.group("color")

            if (
                (color == "red" and cube_count > 12)
                or (color == "green" and cube_count > 13)
                or (color == "blue" and cube_count > 14)
            ):
                is_valid = False
                break

        if is_valid:
            result += game_id_int

print(result)
