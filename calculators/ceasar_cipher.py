original = str(input("Enter a code to be ciphered: "))
key = int(input("Enter the key: "))

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
    code = (convert_to[j]+key)%26
    # print(code)
    ciphered += convert_fro[code].upper()

print("The ciphered code is: " + ciphered)
