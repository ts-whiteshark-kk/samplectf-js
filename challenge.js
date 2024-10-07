function checkInput() {
    const userInput = document.getElementById('userInput').value;
    let isFlagRevealed = false;

    // A fake check that always fails unless you intervene via debugging
    if (userInput === "letmein" && secretCondition()) {
        isFlagRevealed = true;
    }

    if (isFlagRevealed) {
        document.getElementById('result').innerText = "Congratulations! The flag is: CTF{debugging_fun}";
    } else {
        document.getElementById('result').innerText = "Try again! This isn't the correct input.";
    }
}

// A hidden condition that users can bypass or manipulate through debugging
function secretCondition() {
    let hidden = false;

    // Set a breakpoint here to alter this variable or step through
    hidden = false;  // This is the crucial part the user must modify
    console.log("You might want to change something here...");

    return hidden; // Normally this returns false, but users can change it via the debugger
}
