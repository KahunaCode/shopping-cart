console.log("asdfasdfsdfasdfas")

var stuff = [{product: "Finger Toothbrush", description: "A helping hand to a nicer smile.", price: 1.11}, {product: "Barry Manilow's Greatest Hits Collection Vol 1", description: "Music the way it should be! Reminisce the past glory as your ship to happiness has sailed.", price: 39.57}, {product: "Ramen Oreos", description: "The overly used cliche 'East Meets West' comes to life as Nabisco has infused the savory flavors of the Far East sandwiched between two chocolate wafers. Dip that in your sake.", price: 8.88}, {product: "Woof Washer 360", description: "Wash your dirty stinky mutt in minutes! Water and dog not included." , price: 9.29}, {product: "Sauna Pants", description: "Is it hot in here? Indeed. It's my pants. Look cool while losing weight.", price: 2.33}, {product: "Hug Me Pillow", description: "No more lonely nights as you snuggle with your best friend. And it will never walk out on you.", price: 599.99}];


var pics = ["images/finger-tooth-brush.jpg", "images/manilow.jpg", "images/ramen-oreos.jpg", "images/woof-washer.jpg", "images/sauna-pants.jpg", "images/hugme.jpg"]

for (var i = 0; i<stuff.length; i++){
	//console.log(stuff[i]["product"])
	var cartRow = document.createElement("div");
	cartRow.className = "cartrow"
	
	var productPic = document.createElement("div");
	productPic.className = "pPic"
	picElem = document.createElement("img")
	picElem.className = "pEl"
	picElem.src = pics[i]
	productPic.appendChild(picElem)
	
	cartRow.appendChild(productPic)

	var productDiv = document.createElement("div");
	productDiv.className = "product"
	
	var nameDiv = document.createElement("div")
	nameDiv.className = "productNameDiv"
	var nameH3 = document.createElement("h3");
	nameH3.innerHTML = stuff[i]["product"]
	var descText = document.createElement("p");
	descText.className = "productDescription"
	descText.innerHTML = stuff[i]["description"]
	nameDiv.appendChild(nameH3);
	nameDiv.appendChild(descText);

	productDiv.appendChild(nameDiv)
	cartRow.appendChild(productDiv)

	var priceDiv = document.createElement("div")
	priceDiv.className = "price"
	priceDiv.innerHTML = stuff[i]["price"]
	cartRow.appendChild(priceDiv)
	console.log(priceDiv)

	cartContainer.appendChild(cartRow)
}

var subTotal = 0
for (var i =0; i<stuff.length; i++){
	subTotal += stuff[i]["price"]
}

//console.log("subtotal = "+subTotal)
var subDiv = document.createElement("div");
subDiv.className = "subDivEl"
var subLeft = document.createElement("div");
var subLeftH3 = document.createElement("h3");
subLeftH3.innerHTML = "Subtotal"
subLeft.className = "subLeftH3El"
subLeft.appendChild(subLeftH3);

var subRt = document.createElement("div");
var subRtH3 = document.createElement("h3");
subRtH3.innerHTML = subTotal
subRtH3.className = "subRtH3El"
subRt.appendChild(subRtH3);

subDiv.appendChild(subLeft);
subDiv.appendChild(subRt);

cartContainer.appendChild(subDiv)

