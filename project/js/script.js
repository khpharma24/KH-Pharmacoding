const semesterData = {
    bpharma: {
        1: ["Human Anatomy & Physiology I", "Pharmaceutical Analysis", "Pharmaceutics", "Pharmaceutical Inorganic Chemistry"],
        2: ["Human Anatomy & Physiology II", "Pharmaceutical Organic Chemistry I", "Pharmaceutical Engineering"],
        3: ["Pharmaceutical Organic Chemistry II", "Physical Pharmaceutics I", "Biochemistry", "Pathophysiology", "Pharmacognosy I"],
        4: ["Pharmaceutical Organic Chemistry III", "Medicinal Chemistry I", "Physical Pharmaceutics II", "Pharmacology I", "Pharmaceutical Jurisprudence"],
        5: ["Medicinal Chemistry II", "Pharmacology II", "Microbiology", "Biotechnology", "Pharmacognosy II"],
        6: ["Medicinal Chemistry III", "Pharmacology III", "Industrial Pharmacy I", "Biopharmaceutics", "Herbal Drug Technology"],
    },
    mpharma: {
        1: ["Advanced Pharmaceutics", "Pharmaceutical Chemistry", "Pharmacology Research"],
        2: ["Clinical Research", "Drug Design", "Advanced Biopharmaceutics"],
    }
};

// Populate semesters based on program
document.getElementById("program").addEventListener("change", function () {
    const program = this.value;
    const semesterSelect = document.getElementById("semester");
    semesterSelect.disabled = !program;
    semesterSelect.innerHTML = `<option value="">Select Semester</option>`;

    if (program) {
        const semesters = Object.keys(semesterData[program]);
        semesters.forEach((sem) => {
            semesterSelect.innerHTML += `<option value="${sem}">Semester ${sem}</option>`;
        });
    }

    document.getElementById("subject").innerHTML = `<option value="">Select Subject</option>`;
    document.getElementById("unit").disabled = true;
    document.getElementById("pdfLink").innerHTML = "";
});

// Populate subjects based on semester
document.getElementById("semester").addEventListener("change", function () {
    const program = document.getElementById("program").value;
    const semester = this.value;
    const subjectSelect = document.getElementById("subject");
    subjectSelect.disabled = !semester;
    subjectSelect.innerHTML = `<option value="">Select Subject</option>`;

    if (semester && program) {
        const subjects = semesterData[program][semester];
        subjects.forEach((subject) => {
            subjectSelect.innerHTML += `<option value="${subject.toLowerCase().replace(/\s+/g, "-")}">${subject}</option>`;
        });
    }

    document.getElementById("unit").disabled = true;
    document.getElementById("pdfLink").innerHTML = "";
});

// Enable unit selection and generate link
document.getElementById("subject").addEventListener("change", function () {
    const subject = this.value;
    const unitSelect = document.getElementById("unit");
    unitSelect.disabled = !subject;
    document.getElementById("pdfLink").innerHTML = "";
});

// Generate the PDF link
document.getElementById("unit").addEventListener("change", function () {
    const program = document.getElementById("program").value;
    const semester = document.getElementById("semester").value;
    const subject = document.getElementById("subject").value;
    const unit = this.value;

    if (program && semester && subject && unit) {
        const pdfPath = `pdfs/${subject}/unit-${unit}.pdf`;
        document.getElementById("pdfLink").innerHTML = `<a href="${pdfPath}" target="_blank">Download Unit ${unit} PDF</a>`;
    }
});
