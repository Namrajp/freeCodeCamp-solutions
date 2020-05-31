function checkObj(obj, checkProp) {
  // Only change code below this line
  var result = obj.hasOwnProperty(checkProp);
     if (result) {
      return obj[checkProp];
    }
    else {
      return "Not Found";
    }
  // Only change code above this line
}
checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift") 

