document.getElementById("profileForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let followers = parseInt(document.getElementById("followers").value);
    let following = parseInt(document.getElementById("following").value);
    let posts = parseInt(document.getElementById("posts").value);
    let age = parseInt(document.getElementById("age").value);

    let score = 0;

    // AI Logic Simulation Rules

    // Rule 1: Very low followers but high following
    if (followers < 50 && following > 500) {
        score += 2;
    }

    // Rule 2: Very few posts
    if (posts < 5) {
        score += 2;
    }

    // Rule 3: New account
    if (age < 3) {
        score += 2;
    }

    // Rule 4: Suspicious follower ratio
    if (followers / following < 0.1) {
        score += 2;
    }

    let resultDiv = document.getElementById("result");

    if (score >= 4) {
        resultDiv.innerHTML = "⚠️ This profile is likely FAKE.";
        resultDiv.style.color = "red";
    } else {
        resultDiv.innerHTML = "✅ This profile appears to be REAL.";
        resultDiv.style.color = "green";
    }
});