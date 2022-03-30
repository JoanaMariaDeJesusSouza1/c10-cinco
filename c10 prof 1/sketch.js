// array e matrizes é uma variiavel que permite armazenar varios valores
//indice/index  [0]     [1]     [2]      [3]                  
var onePiece=["luffy","Ozoro","Ussopi","nami"];
console.log(onePiece);
console.log(onePiece[1]);

//para inserir um novo valor no array usamos push.
onePiece.push("goingMary");
onePiece.push("sunny");
onePiece.push("sanji");
console.log(onePiece)

//para remover o ultimo valor no array usamos o pop.
onePiece.pop();
console.log(onePiece);

// para remover, deletar um valor especifico.
//remove mas mantem o espaço no array
delete onePiece[1];
console.log(onePiece)

//remove do array
onePiece.splice(2,1);
console.log(onePiece)

//acrescenta um elemento espesifico ou troca ele dentro do array
onePiece[1]="chopper";
console.log(onePiece)


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  dawSprites();
}































