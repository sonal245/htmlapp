alert("enter the value of a!")
let a=prompt("enter a here ","578")
a=number.parseInt(a)
alert("you enterd a type of" + (typeof a))
let write = confirm("do you want to write it to the page")
if(write)
{
    document.write(a)
}
else{
    document.write("please allow me to write ")
}
document.write(a)
