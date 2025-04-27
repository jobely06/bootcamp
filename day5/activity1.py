balance = 100000

while True:
    transaction = input("Type \n 1 (deposit)\n 2 (withdraw)\n 3 (view balance)\n 0 (quit)\n: ")

    if transaction == "1":
        amount = float(input("Enter deposit amount: "))
        balance += amount
        print(f"Deposited: ₱{amount:,.2f}")

    elif transaction == "2":
        amount = float(input("Enter withdrawal amount: "))
        if amount <= balance:
            balance -= amount
            print(f"Withdraw: ₱{amount:,.2f}")
        else:
            print("Wa man diay kay kwarta!")

    elif transaction == "3":
        print(f"Current balance: ₱{balance:,.2f}")

    elif transaction == "0":
        print("Thank you for Banking!")
        break

    else:
        print("Pataka gyud! Klaro anang 1, 2, 3 ug 0 ray pilianan!")