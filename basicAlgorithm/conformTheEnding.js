function conformEnding(str, target){

  sub = str.slice(-target  )

  console.log(sub);

  if (sub === target){
    return true;
  }else{
  return false;
}

}

conformEnding("String", 'g');