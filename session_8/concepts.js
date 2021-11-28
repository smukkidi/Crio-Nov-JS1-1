let a;
a = 10;

let b = 20;

function getName (parms)
{
  console.log(parms)
}

const getName1 = function (parms){
  console.log(parms);
}

getName("Sreeni");

getName1("Sreeni");

function aa(vall, getNameVar)
{
  console.log(vall, getNameVar)
}

aa(10, getName);