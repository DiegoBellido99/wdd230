document.addEventListener("DOMContentLoaded", () => {
    
    const currentTimestamp = new Date().toISOString();

    document.querySelector("#timestamp").value = currentTimestamp;
});