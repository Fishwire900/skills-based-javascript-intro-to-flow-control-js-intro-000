function basicTeenager(age) {
  if (13<=19) {
return ("You are a teenager!")
  }
}
  basicTeenager(age);

function teenager(age) {
  if (13<=19) {
    return ("You are a teenager!")
  }
  else {
    return ("You are not a teenager")
  }
}
teenager(age);

function ageChecker(age) {
if (13<=19) {
  return ("You are a teenager!")
}
else if (0<12) {
  return ("You are a kid")
}
else {
  return ("You are a grownup")
}
}
ageChecker(age);

function ternaryTeenager(age) {
return (age ? "You are a teenager" : "You are not a teenager")
}
ternaryTeenager(13<=19);

function switchAge(age) {
  switch(age) {
    case 13:
      return "You are a teenager"
      break;
    case 14:
      return "You are a teenager"
      break;
    case 15:
      return "You are a teenager"
      break;
    case 16:
       return "You are a teenager"
      break;
    case 17:
       return "You are a teenager"
      break;
    case 18:
       return "You are a teenager"
      break;
    case 19:
       return "You are a teenager"
    default:
      return "You have an age"
    }
  }
