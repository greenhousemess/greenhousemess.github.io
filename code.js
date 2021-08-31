
home()

function home(){

var bazar = 0
var meal = 0
var mealrate = 0
for(var tb=0; tb<data[0].data.length; tb++){
bazar = bazar + data[0].data[tb][2]
}

for(var tm=0; tm<data[2].data.length; tm++){
meal = meal + data[2].data[tm][1]*0.5 + data[2].data[tm][3] + data[2].data[tm][5]
//console.log(meal)
}

var mostDeposit = 0
for(var md = 4; md<data.length; md = md + 2){
if(mostDeposit<data[md].data.length){
mostDeposit = data[md].data.length
}
}

mealrate = (bazar/meal).toFixed(2)

for(var i = 3; i<data.length; i = i + 2){
var listData = document.createElement('div')
listData.setAttribute('class', 'listData')

var borderName = document.createElement('div')
borderName.setAttribute('class', 'row1')
borderName.innerText = data[i].name
listData.appendChild(borderName)

var totalDeposit = 0
for(var j = 0; j<mostDeposit; j++){
var deposit = document.createElement('div')
deposit.setAttribute('class', 'row2 deposit')
var depositDate = document.createElement('div')
if(j<=data[i+1].data.length-1 && data[i+1].data[j][0]!="-"){
depositDate.innerText = new Date(data[i+1].data[j][0]).toString().substr(4, 11).replace(/ /g,', ').replace(',','')
}
else{
depositDate.innerText = "-"
}
var depositAmount = document.createElement('div')
if(j<=data[i+1].data.length-1){
depositAmount.innerText = data[i+1].data[j][1] + " Tk"
totalDeposit = totalDeposit + Number(data[i+1].data[j][1])
}
else{
depositAmount.innerText = "-"
}
if(data[i+1].data[j]==''){
depositDate.innerText = "-"
depositAmount.innerText = "-"
totalDeposit = 0
}
deposit.appendChild(depositDate)
deposit.appendChild(depositAmount)
listData.appendChild(deposit)
}

var TotalDeposit = document.createElement('div')
TotalDeposit.setAttribute('class', 'row3')
var TotalDeposit1 = document.createElement('div')
TotalDeposit1.innerText = "Total Deposit"
var TotalDeposit2 = document.createElement('div')
TotalDeposit2.innerText = totalDeposit + " Tk"
TotalDeposit.appendChild(TotalDeposit1)
TotalDeposit.appendChild(TotalDeposit2)
listData.appendChild(TotalDeposit)

var totalMeal = 0
var TotalMeal = document.createElement('div')
TotalMeal.setAttribute('class', 'row3')
var TotalMeal1 = document.createElement('div')
TotalMeal1.innerText = "Total Meal"
var TotalMeal2 = document.createElement('div')
//TotalMeal2.innerText = totalMeal
TotalMeal.appendChild(TotalMeal1)
TotalMeal.appendChild(TotalMeal2)
listData.appendChild(TotalMeal)

var MealAmount = document.createElement('div')
MealAmount.setAttribute('class', 'row3')
var MealAmount1 = document.createElement('div')
MealAmount1.innerText = "Meal Amount"
var MealAmount2 = document.createElement('div')
//MealAmount2.innerText = totalMeal*mealrate
MealAmount.appendChild(MealAmount1)
MealAmount.appendChild(MealAmount2)
listData.appendChild(MealAmount)

var Due = document.createElement('div')
Due.setAttribute('class', 'row3 due')
var Due1 = document.createElement('div')
Due1.innerText = "Due"
var Due2 = document.createElement('div')
//Due2.innerText = ((totalMeal*mealrate) - totalDeposit) + " Tk"
Due.appendChild(Due1)
Due.appendChild(Due2)
listData.appendChild(Due)

var Meal = document.createElement('div')
Meal.setAttribute('class', 'row4')
Meal.innerText = "Meal"
listData.appendChild(Meal)

var MealListLabel = document.createElement('div')
MealListLabel.setAttribute('class', 'row5 row')
var MealListLabel1 = document.createElement('div')
MealListLabel1.innerText = "Date"
var MealListLabel2 = document.createElement('div')
MealListLabel2.innerText = "Morning"
var MealListLabel3 = document.createElement('div')
MealListLabel3.innerText = "Noon"
var MealListLabel4 = document.createElement('div')
MealListLabel4.innerText = "Night"
MealListLabel.appendChild(MealListLabel1)
MealListLabel.appendChild(MealListLabel2)
MealListLabel.appendChild(MealListLabel3)
MealListLabel.appendChild(MealListLabel4)
listData.appendChild(MealListLabel)

for(var k = 0; k<31;k++){
var MealList = document.createElement('div')
MealList.setAttribute('class', 'row5 row')
var MealList1 = document.createElement('div')
MealList1.innerText = new Date(data[i].data[k][0]).toString().substr(4, 11).replace(/ /g,', ').replace(',','')
var MealList2 = document.createElement('div')
MealList2.innerText = data[i].data[k][1]*0.5
var MealList3 = document.createElement('div')
MealList3.innerText = data[i].data[k][2]
var MealList4 = document.createElement('div')
MealList4.innerText = data[i].data[k][3]
totalMeal = totalMeal + Number(data[i].data[k][1])*0.5 + Number(data[i].data[k][2]) + Number(data[i].data[k][3])
MealList.appendChild(MealList1)
MealList.appendChild(MealList2)
MealList.appendChild(MealList3)
MealList.appendChild(MealList4)
listData.appendChild(MealList)
}

TotalMeal2.innerText = totalMeal
MealAmount2.innerText = (totalMeal*mealrate).toFixed() + " Tk"
Due2.innerText = ((totalMeal*mealrate).toFixed() - totalDeposit) + " Tk"
list.appendChild(listData)
}

TOTALMEAL.innerText = meal
totalBazar.innerText = bazar + " Tk"
mealRate.innerText = mealrate + " Tk"
cash()
}







function cash(){
var deposite = data[0].data
var bazar = data[1].data

var listData = document.createElement('div')
listData.setAttribute('class', 'listData')
var Name = document.createElement('div')
Name.setAttribute('class', 'row1')
Name.innerText = "Debit"
listData.appendChild(Name)
var List = document.createElement('div')
List.setAttribute('class', 'row5 row')
var List1 = document.createElement('div')
List1.innerText =  "Date"
var List2 = document.createElement('div')
List2.innerText = "Amount"
var List3 = document.createElement('div')
List3.innerText = "Source"
var List4 = document.createElement('div')
List4.innerText = "Voucher"
List.appendChild(List1)
List.appendChild(List2)
List.appendChild(List3)
List.appendChild(List4)
listData.appendChild(List)
cashList.appendChild(listData)

for(var c=0;c<bazar.length-2;c++){
var List = document.createElement('div')
List.setAttribute('class', 'rowC')
var List1 = document.createElement('div')
var List2 = document.createElement('div')
var List3 = document.createElement('div')
var List4 = document.createElement('div')
List.appendChild(List1)
List.appendChild(List2)
List.appendChild(List3)
List.appendChild(List4)
listData.appendChild(List)

if(c>deposite.length-1 || deposite[0]==""){
List1.innerText = '-'
List2.innerText = "-"
List3.innerText = "-"
List4.innerText = "-"
}
else{
if(deposite[c][0]=="-"){
List1.innerText =""
}
else{
List1.innerText = new Date(deposite[c][0]).toString().substr(4, 11).replace(/ /g,', ').replace(',','')
}
List3.innerText = deposite[c][2]
List2.innerHTML = "<pre style='min-width:max-content;margin-top:0px'>"+deposite[c][1]+"</pre>"
if(deposite[c][3]=="-"){
List4.innerText = ""
}
else{
List4.setAttribute('style','cursor:pointer')
List4.setAttribute('onclick', "OpenVoucher('"+deposite[c][3]+"')")
List4.innerText = "see"
}
}
}
setTimeout(function(){loader.style.display="none"; allData.style.display='inline'; }, 1000)
}