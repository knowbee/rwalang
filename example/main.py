vow=["a", "e", "i", "o", "u"]

stri = "Recommended"
result=''

for l in list(stri):
  for a in vow:
    if l in vow and a=="a":
      stri = "".join(stri.split(a))
    elif l in vow and a == "e":
      stri = "".join(stri.split(a))
    elif l in vow and a=="i":
      stri = "".join(stri.split(a))
    elif l in vow and a=="o":
      stri = "".join(stri.split(a))
    elif l in vow and a=="u": 
      result = "".join(stri.split(a))
print(result)
