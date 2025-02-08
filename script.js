    $(document).ready(function () {
            // Function to generate a random password
            function generatePassword(length) {
                const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
                let password = "";
                for (let i = 0; i < length; i++) {
                    const randomIndex = Math.floor(Math.random() * characters.length);
                    password += characters[randomIndex];
                }
                return password;
            }

            // Handle generate password button click
            $("#generateBtn").click(function () {
                const randomPassword = generatePassword(12); // Generate a 12-character password
                $("#passwordInput").val(randomPassword);
            });

            // Copy password to clipboard
            $("#copyBtn").click(function () {
                const password = $("#passwordInput").val();
                navigator.clipboard.writeText(password).then(() => {
                    alert("Password copied to clipboard!");
                });
            });
        });
