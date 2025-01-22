
    document.addEventListener("DOMContentLoaded", () => {
        const programSelect = document.getElementById("program");
        const semesterSelect = document.getElementById("semester");

        programSelect.addEventListener("change", () => {
            const selectedProgram = programSelect.value;

            // Clear existing options
            semesterSelect.innerHTML = '<option value="">Select</option>';

            if (selectedProgram === "bpharma") {
                for (let i = 1; i <= 8; i++) {
                    const option = document.createElement("option");
                    option.value = i;
                    option.textContent = `Semester ${i}`;
                    semesterSelect.appendChild(option);
                }
            } else if (selectedProgram === "mpharma") {
                for (let i = 1; i <= 4; i++) {
                    const option = document.createElement("option");
                    option.value = i;
                    option.textContent = `Semester ${i}`;
                    semesterSelect.appendChild(option);
                }
            }
        });
    });
 // Set a dynamic background image
 const heroSection = document.querySelector('.hero');
 const dynamicImage = 'path-to-your-new-dynamic-image.jpg'; // Update with the new image URL
 heroSection.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${dynamicImage})`;