original = str(input("Enter a code to be ciphered: "))
key = int(input("Enter the key: "))

convert_to = {}
convert_fro = {}

for i in range(97,122,1):
    convert_to[chr(i)] = i-96
    convert_fro[i-96] = chr(i)

ciphered = ""
for j in original:
    code = (convert_to[j]+key)%26
    ciphered += convert_fro[code].upper()

print("The ciphered code is: " + ciphered)
