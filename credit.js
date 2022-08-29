setInterval(creditUpdateTimer, 1000);

function creditUpdateTimer() {
    // total_learning_time = total_learning_time + Math.floor(60 * Math.random());
    let reward = "";
    for (let i = 60; i < total_learning_time; i = i + 60) {
        reward += "&#127775";
    }
    document.getElementById("score").innerHTML = total_learning_time.toFixed(2).toString();
    document.getElementById("reward").innerHTML = reward.toString();
}
