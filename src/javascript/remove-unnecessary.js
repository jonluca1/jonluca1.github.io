const element = document.getElementById('remove_this');

var TryRemoveUnne = 0;

try {
    element.remove();
}
catch(err) {
    //console.log(err);
    var TryRemoveUnne = 1
}

function test_removeUnnecessary() {
    alert("remove-unnecessary.js is loaded");
}
console.log("\u2705 remove-unnecessary.js 1.1 is loaded");

if (TryRemoveUnne == 1) {
    console.log("^^ No unnecessary elements to remove ^^")
}