function boolChecker(bool) {
  if (typeof bool === 'boolean') { // por que si tiene comillas, no seria un string?
    return "You've given me a bool, thanks!";
  }

  return "No bool, not cool.";
}

console.log(boolChecker(true));
