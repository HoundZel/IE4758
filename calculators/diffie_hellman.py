import time

print("WELCOME TO DIFFIE HELLMAN CALCULATOR")
print(" ")
time.sleep(1)

#user inputs
q = int(input("Enter shared value q: "))
a = int(input("Enter shared value a: "))
userA = int(input("Enter UserA's secret key: "))
userB = int(input("Enter UserB's secret key: "))
print(" ")

# generate public key
publicA = (a**userA) % q
publicB = (a**userB) % q
print("The public key of User A is : " + str(publicA))
print("The public key of User B is : " + str(publicB))
print(" ")

#common variable
fromA = (publicB**userA) % q
fromB = (publicA**userB) % q
print("The common secret key from A is : " + str(fromA))
print("The common secret key from B is : " + str(fromB))