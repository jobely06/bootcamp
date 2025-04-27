sample ="Welcome To Bootcamp"
sample_text = sample.istitle()
print(sample_text)

text = input("What is your name?: ")

print("Capitalized Result: ", text.capitalize())
print("Is there an special character?: ", text.isalnum())
print(f"Casefolded Text:", text.casefold())
print("Count of sample letter: ", text.count('e'))

while True:
    Age=input("How old are you?: ")
    if Age.isdigit():
        Age=int(Age)
        print(f"Your Age is {Age}.")
        break
    else:
        print("input numbers only :) ")