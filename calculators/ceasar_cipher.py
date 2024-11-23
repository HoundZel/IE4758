original = str(input("Enter a code to be ciphered: "))
key = int(input("Enter the key: "))
rotate = int(input("Enter 0 to encrypt and 1 to decrypt: "))

convert_to = {}
convert_fro = {}

for i in range(97,123,1):
    convert_to[chr(i)] = i-97
    convert_to[chr(i-32)] = i-97
    convert_fro[i-97] = chr(i)

# print(convert_to)
# print(convert_fro)

ciphered = ""
for j in original:
    if rotate == 0:
        code = (convert_to[j]+key)%26
    else:
        code = (convert_to[j]-key)%26
    # print(code)
    ciphered += convert_fro[code].upper()

print("The ciphered code is: " + ciphered)
