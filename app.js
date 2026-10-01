function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Amit"));

console.assert(
    greet("Amit") === "Hello, Amit!",
    "Test failed: greet function"
);