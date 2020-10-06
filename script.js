function Person(first, last, age, interests, img) {
  this.name = {
    'first': first,
    'last': last
  };

  this.age = age;
  this.interests = interests;
  this.img = img;
}


let bob = new Person("Bob", "Sponge", 20, ['jellyfish catching', "Sandy", "friendship"], "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png")

var x = document.getElementById("person").src = bob.img

let patrick = new Person("Patrick", "Star", 20, ['sleeping', 'eating', 'fun'], "https://upload.wikimedia.org/wikipedia/en/3/33/Patrick_Star.svg")

var y = document.getElementById("person2").src = patrick.img

function Math(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
    
}

Math.prototype.add = function() {
    return this.num1 + this.num2
}

Math.prototype.subtract = function() {
    return this.num1 - this.num2
}

problem = new Math(1,2)

console.log(problem.add())
console.log(problem.subtract())

///////////////////////////////////

