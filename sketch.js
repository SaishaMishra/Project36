var dog,sadDog,happyDog;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed=createButton("Feed The Dog");
  feed.position(700,95);
  feed.mousedPressed(feedDog);

  addFood = createButton("Add Food")
  addfood.position(700,95);
  addFood.mousedPressed(addFoods);

}

function draw() {
  background(46,139,87);
  drawSprites();
}

//function to read food Stock
getCount(){
  var foodStockRef = database.ref("foodStock");
  foodstockRef.on("value", function(data){
      foodStock = data.val()
  })
      
  
}


//function to update food stock and last fed time
updateCount(count){
  database.ref("/").update({
      'foodStock' : count 

})
}

//function to add food in stock
update(name){
  var foodIndex = "food"+foodStock;
  database.ref(foodIndex).set({
      'name' : name
  })        
}
}