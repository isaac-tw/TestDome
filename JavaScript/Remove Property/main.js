// https://www.testdome.com/questions/javascript/remove-property/76546

function removeProperty(obj, prop) {
  if (prop in obj) {
    delete obj[prop];
    return true;
  }
  return false;
}
