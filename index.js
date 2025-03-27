
        function calculateBMI() {
            let bodymass = document.getElementById("bodymass").value;
            let height = document.getElementById("height").value;
            if (bodymass > 0 && height > 0) {
                let bmi = (bodymass / (height * height)).toFixed(2);
                let message = "Your BMI is " + bmi;
                document.getElementById("popover").innerText = message;
                document.getElementById("popover").style.display = "block";
                setTimeout(() => {
                    document.getElementById("popover").style.display = "none";
                }, 3000);
            } else {
                alert("Please enter a valid bodymass and height!");
            }
        }
