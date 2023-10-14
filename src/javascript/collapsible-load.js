
try {
    document.querySelectorAll('details').forEach((el) => {
        new Accordion(el);
    });

    function test_collapsible() {
        alert("Collapsible.js is loaded");
    }

    console.log("\u2705 Collapsible.js 2.1 is attached to details");

} catch (err) {
    console.log("\u274C Collapsible.js 2.1 Could not be loaded");
    console.log(err);
    console.log("---")
}