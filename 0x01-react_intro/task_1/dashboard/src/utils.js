function getFullYear() {
  today = new Date();
  return today.getFullYear();
}

function getFooterCopy(isIndex = False) {
  if (isIndex) {
    return "Holberton School";
  } else {
    return "Holberton School main dashboard";
  }
}