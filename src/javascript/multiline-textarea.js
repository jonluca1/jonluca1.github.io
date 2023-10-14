var textAreas = document.getElementsByTagName('textarea');

Array.prototype.forEach.call(textAreas, function (elem) {
    elem.placeholder = elem.placeholder.replace(/\\n/g, '\n');
});


function test_multiline_textarea() {
    alert("multiline-textarea.js is loaded");
}

console.log("\u2705 multiline-textarea.js 1.0 is loaded");