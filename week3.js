function shortcut(string) {
  return string.replace(/[aeiou]/g, "");
}

// console.log(shortcut("hello"));
/* ----------------------------- Stringy Strings ---------------------------- */
function stringy(size) {
  let binary = "";
  for (let i = 0; i < size; i++) {
    if (i % 2 == 0) binary += "1";
    else binary += "0";
  }
  return binary;
}

// console.log(stringy(20));

/* ---------------------- Objectify a URL Query String ---------------------- */
// solution
function convertQueryToMap(query) {
    var obj = {};
    query.split('&').map(function(params) {
      var parts = params.split('=');
      if (!parts[1]) return {};
      parts[0].split('.').reduce(function(cur, next, i, arr) {
        if (!cur[next]) cur[next] = {};
        if (i === arr.length - 1) cur[next] = decodeURIComponent(parts[1]);
        return cur[next];
      }, obj);
    });
    return obj;
}

console.log(convertQueryToMap('user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue'));
