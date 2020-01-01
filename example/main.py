vow=["a", "e", "i", "o", "u"]

letter = "recommended"
stri = letter.lower() 
result=''
for l in list(stri):
  for a in vow:
    if l not in vow:
      stri = "".join(stri.split(a))
    # elif l in vow and a == "e":
    #   stri = "".join(stri.split(a))
    # elif l in vow and a=="i":
    #   stri = "".join(stri.split(a))
    # elif l in vow and a=="o":
    #   stri = "".join(stri.split(a))
    # elif l in vow and a=="u": 
    #   result = "".join(stri.split(a))
print(stri)
