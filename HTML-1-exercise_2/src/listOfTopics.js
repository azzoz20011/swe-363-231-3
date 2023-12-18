let topic = document.getElementById('topic')
var ul = document.createElement('ul')
var li = document.createElement('li')
var li2 = document.createElement('li')
var li3 = document.createElement('li')
var li4 = document.createElement('li')
var li5 = document.createElement('li')

var header = document.createElement('h3')

ul.id = 'domList'
li.className = 'listing'
li2.className = 'listing'
li3.className = 'listing'
li4.className = 'listing'
li5.className = 'listing'

var text0  = document.createTextNode("This is a list of the comming blogs.")
var text1 = document.createTextNode("what is better JS or PHP")
var text2  = document.createTextNode("Sigmund freud vs Carl Jung ")
var text3  = document.createTextNode("Book review: the death and life of great american cities")
var text4  = document.createTextNode("the best way to become senior engineer ")
var text5  = document.createTextNode("Book review: the power broker ")

header.appendChild(text0)

topic.append(header)

li.appendChild(text1)
li2.appendChild(text2)
li3.appendChild(text3)
li4.appendChild(text4)
li5.appendChild(text5)

ul.appendChild(li)
ul.appendChild(li2)
ul.appendChild(li3)
ul.appendChild(li4)
ul.appendChild(li5)
topic.appendChild(ul)