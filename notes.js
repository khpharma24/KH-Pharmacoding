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
            "Pharmaceutics I": {
                1: "https://drive.google.com/file/d/15mBK36jTa2Enb9gdib90LzfiQzMFoHIi/view?usp=drive_link",
                prescription:"https://drive.google.com/file/d/1KfofdLevWBYD1x3jD-U5N38v8EOwzk1h/view?usp=drive_link",
                pharmacopoieas : "https://drive.google.com/file/d/1I6xOCBVByrwXdtoocUj80LROfU9A2rjA/view?usp=drive_link",
                dosageform: "https://drive.google.com/file/d/1CPgOhygIL-H3O-YG3J5Em984VnJL90Pf/view?usp=drive_link",
                2: "https://drive.google.com/file/d/15jlU6kuS_OTkvNweOxvzDALEZXOg-7ce/view?usp=drive_link",
                UNIT2PART2: "https://drive.google.com/file/d/1JR2YIAXyL5pcmBU4_KLJEk540VCEDkGf/view?usp=drive_link",
                3: "https://drive.google.com/file/d/14ctv-cPMQx8H_G3_45XQ2obbxpMiVWXc/view?usp=drive_link",
                4: "https://drive.google.com/file/d/1gOho-4-KCFURh8azhsXOuN_bWxgJMVG4/view?usp=drive_link",
                5: "https://drive.google.com/file/d/17-n_A9JSuOhGJhkI5_pZajY7l-SW8cm7/view?usp=drive_link"
               
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
