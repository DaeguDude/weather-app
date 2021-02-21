function getUserInput() {
  return document.querySelector('input[name="search-city"]').value;
}

function resetSearchInput() {
  document.querySelector('input[name="search-city"]').value = "";
}

export { getUserInput, resetSearchInput };
