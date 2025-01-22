const programSelect = document.getElementById("program");
const semesterSelect = document.getElementById("semester");
const subjectSelect = document.getElementById("subject");
const unitSelect = document.getElementById("unit");
const downloadLinkContainer = document.createElement("div"); // For showing the download link
document.querySelector("form").appendChild(downloadLinkContainer);

// Data with links
const data = {
    bpharma: {
        1: {
            "Human Anatomy & Physiology I": {
                1: "https://example.com/bpharma/sem1/unit1_human_anatomy.pdf",
                2: "https://example.com/bpharma/sem1/unit2_human_anatomy.pdf",
                3: "https://example.com/bpharma/sem1/unit3_human_anatomy.pdf",
                4: "https://example.com/bpharma/sem1/unit4_human_anatomy.pdf",
                5: "https://example.com/bpharma/sem1/unit5_human_anatomy.pdf"
            },
            "Pharmaceutical Analysis": {
                1: "https://example.com/bpharma/sem1/unit1_pharmaceutical_analysis.pdf",
                2: "https://example.com/bpharma/sem1/unit2_pharmaceutical_analysis.pdf",
                3: "https://example.com/bpharma/sem1/unit3_pharmaceutical_analysis.pdf",
                4: "https://example.com/bpharma/sem1/unit4_pharmaceutical_analysis.pdf",
                5: "https://example.com/bpharma/sem1/unit5_pharmaceutical_analysis.pdf"
            }
        },
        2: {
            "Human Anatomy & Physiology II": {
                1: "https://example.com/bpharma/sem2/unit1_human_anatomy2.pdf",
                2: "https://example.com/bpharma/sem2/unit2_human_anatomy2.pdf",
                3: "https://example.com/bpharma/sem2/unit3_human_anatomy2.pdf",
                4: "https://example.com/bpharma/sem2/unit4_human_anatomy2.pdf",
                5: "https://example.com/bpharma/sem2/unit5_human_anatomy2.pdf"
            }
        }
    },
    mpharma: {
        1: {
            "Advanced Medicinal Chemistry": {
                1: "https://example.com/mpharma/sem1/unit1_medicinal_chemistry.pdf",
                2: "https://example.com/mpharma/sem1/unit2_medicinal_chemistry.pdf",
                3: "https://example.com/mpharma/sem1/unit3_medicinal_chemistry.pdf",
                4: "https://example.com/mpharma/sem1/unit4_medicinal_chemistry.pdf",
                5: "https://example.com/mpharma/sem1/unit5_medicinal_chemistry.pdf"
            }
        }
    }
};

// Populate semesters based on program selection
programSelect.addEventListener("change", () => {
    const program = programSelect.value;
    semesterSelect.innerHTML = `<option value="">--Select Semester--</option>`;
    subjectSelect.innerHTML = `<option value="">--Select Subject--</option>`;
    unitSelect.innerHTML = `<option value="">--Select Unit--</option>`;
    subjectSelect.disabled = true;
    unitSelect.disabled = true;
    downloadLinkContainer.innerHTML = "";

    if (program) {
        Object.keys(data[program]).forEach(semester => {
            semesterSelect.innerHTML += `<option value="${semester}">Semester ${semester}</option>`;
        });
        semesterSelect.disabled = false;
    } else {
        semesterSelect.disabled = true;
    }
});

// Populate subjects based on semester selection
semesterSelect.addEventListener("change", () => {
    const program = programSelect.value;
    const semester = semesterSelect.value;
    subjectSelect.innerHTML = `<option value="">--Select Subject--</option>`;
    unitSelect.innerHTML = `<option value="">--Select Unit--</option>`;
    unitSelect.disabled = true;
    downloadLinkContainer.innerHTML = "";

    if (semester && data[program][semester]) {
        Object.keys(data[program][semester]).forEach(subject => {
            subjectSelect.innerHTML += `<option value="${subject}">${subject}</option>`;
        });
        subjectSelect.disabled = false;
    } else {
        subjectSelect.disabled = true;
    }
});

// Enable unit dropdown based on subject selection
subjectSelect.addEventListener("change", () => {
    const program = programSelect.value;
    const semester = semesterSelect.value;
    const subject = subjectSelect.value;
    unitSelect.innerHTML = `<option value="">--Select Unit--</option>`;
    downloadLinkContainer.innerHTML = "";

    if (subject && data[program][semester][subject]) {
        Object.keys(data[program][semester][subject]).forEach(unit => {
            unitSelect.innerHTML += `<option value="${unit}">Unit ${unit}</option>`;
        });
        unitSelect.disabled = false;
    } else {
        unitSelect.disabled = true;
    }
});

// Display the download link based on unit selection
unitSelect.addEventListener("change", () => {
    const program = programSelect.value;
    const semester = semesterSelect.value;
    const subject = subjectSelect.value;
    const unit = unitSelect.value;

    if (unit && data[program][semester][subject][unit]) {
        const link = data[program][semester][subject][unit];
        downloadLinkContainer.innerHTML = `
            <a href="${link}" target="_blank" class="download-link">Download Unit ${unit} Notes</a>
        `;
    } else {
        downloadLinkContainer.innerHTML = "";
    }
});
