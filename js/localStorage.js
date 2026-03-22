function getItem(key) {
  return localStorage.getItem(key);
}

function setItem(key, value) {
  return localStorage.set(key, value);
}

function clear() {
  localStorage.clear();
}