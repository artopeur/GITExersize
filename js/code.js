function run() {
    console.log("Running...");
}

function hide_run_button() {
    const runButton = document.getElementById("run-button");
    if (runButton) {
        runButton.style.display = "none";
    }
    else {
        console.warn("Run button not found.");
    }
}
function show_run_button() {
    const runButton = document.getElementById("run-button");
    if (runButton) {
        runButton.style.display = "inline-block";
    }
    else {
        console.warn("Run button not found.");
    }
}