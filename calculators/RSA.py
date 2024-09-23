import time

def is_prime(n: int) -> bool:
    if n <= 1:
        return False  # 0 and 1 are not prime numbers
    if n <= 3:
        return True   # 2 and 3 are prime numbers
    if n % 2 == 0 or n % 3 == 0:
        return False  # Exclude multiples of 2 and 3

    # Check for factors from 5 to the square root of n
    for i in range(5, int(n**0.5) + 1, 6):
        if n % i == 0 or n % (i + 2) == 0:
            return False

    return True  # n is prime

print("WELCOME TO RSA KEY-PAIR GENERATOR")
print(" ")
time.sleep(1)

# user inputs
p = int(input("Enter prime number p: "))
q = int(input("Enter prime number q: "))
print(" ")

# calculate n
n = p * q
print("The modulus value (N) is : " + str(n))

# calculate quotion
quotion = (p-1) * (q-1)
print("The quotion value (ø(N)) is : " + str(quotion))

#invalid factors
factors = set()
for i in range(2, p-1):
    if is_prime(i):
        if (p-1) % i == 0:
            factors.add(i)
for i in range(2, q-1):
    if is_prime(i):
        if (q-1) % i == 0:
            factors.add(i)

print("The invalid factors are : " + str(factors))
print(" ")

# calculate public key
# i = 2
# while i:
#     if is_prime(i):
#         if i in factors:
#             pass
#         else:
#             public_key = i
#             break
#     i += 1

# print("The public key is : " + str(public_key))

e = int(input("choose your prime public key: "))

# calculate private key
k = 1
while k:
    d = (k * quotion + 1) % e
    if d == 0:
        private_key = int((k * quotion + 1) / e)
        break
    k += 1
print("The Selected K is : " + str(k))
print("The private key is : " + str(private_key))