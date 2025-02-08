grade1 = int(input("Enter the grade: "))
grade2 = int(input("Enter the grade: "))
grade3 = int(input("Enter the grade: "))
grade4 = int(input("Enter the grade: "))
grade5 = int(input("Enter the grade: "))

totalgrade = grade1+grade2+grade3+grade4+grade5

avgrade = totalgrade/5

if avgrade <= 70:
    print("your average grade is",avgrade, " you failed")
else:
    print("your average grade is",avgrade, " you passed")
