import os

result = 0
schema = []

with open(os.path.dirname(__file__) + "/input.txt", encoding="utf-8") as file:
    for line in file:
        win_nums, card_nums = line.strip().split("|")
        _, win_nums = win_nums.strip().split(":")
        win_nums = [int(win_num) for win_num in win_nums.split(" ") if win_num]
        card_nums = [int(card_num) for card_num in card_nums.split(" ") if card_num]

        win_nums_len = len([win_num for win_num in win_nums if win_num in card_nums])

        if win_nums_len > 0:
            result += 2 ** (win_nums_len - 1)


print(result)
