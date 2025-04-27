num = int(input("Enter a number: "))  
if num > 1 and all(num % i != 0 
    for i in range(2, int(num ** 0.5) + 1)):  
    print("It is a prime number")  
else:  
    print("not a prime number")