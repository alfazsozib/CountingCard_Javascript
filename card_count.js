let count = 0;

function cnt_card(cards) {
  switch(cards){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count+=1;
      break;
   case 7:
   case 8:
   case 9:
    count == 0;
    break;
   case 10:
   case 'J':
   case 'Q':
   case 'K':
   case 'A':
    count-=1;
    break;
}

// condition to print results in string  

  if (count > 0){
    return count+' Bet';
  }else{
    return count+' Hold';
  }   
  return "Nope";
}

cnt_card(2); cnt_card(3); cnt_card(7); cnt_card('K'); cnt_card('A');
