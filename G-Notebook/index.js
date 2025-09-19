// Change these to your own credentials
        const USER_ID = "Sarfaraz";
        const USER_PASS = "778155@Sa";

        function checkLogin() {
            const user = document.getElementById("username").value;
            const pass = document.getElementById("password").value;
            const error = document.getElementById("loginError");

            if (user === USER_ID && pass === USER_PASS) {
                document.getElementById("loginBox").style.display = "none";
                document.getElementById("app").style.display = "flex";
            } else {
                error.style.display = "block";
            }
        }

        // 🔹 Allow pressing Enter to login
        document.getElementById("username").addEventListener("keydown", function (e) {
            if (e.key === "Enter") checkLogin();
        });
        document.getElementById("password").addEventListener("keydown", function (e) {
            if (e.key === "Enter") checkLogin();
        });
