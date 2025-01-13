document.getElementById('program').addEventListener('change', function() {
    const semesterSelect = document.getElementById('semester');
    const subjectSelect = document.getElementById('subject');
    const unitSelect = document.getElementById('unit');

    semesterSelect.innerHTML = '<option value="">Select Semester</option>';
    subjectSelect.innerHTML = '<option value="">Select Subject</option>';
    unitSelect.innerHTML = '<option value="">Select Unit</option>';

    const program = this.value;

    if (program === 'bpharma') {
        for (let i = 1; i <= 8; i++) {
            semesterSelect.innerHTML += `<option value="${i}">Semester ${i}</option>`;
        }
    } else if (program === 'mpharma') {
        for (let i = 1; i <= 4; i++) {
            semesterSelect.innerHTML += `<option value="${i}">Semester ${i}</option>`;
        }
    }
});

document.getElementById('semester').addEventListener('change', function() {
    const subjectSelect = document.getElementById('subject');
    const unitSelect = document.getElementById('unit');

    subjectSelect.innerHTML = '<option value="">Select Subject</option>';
    unitSelect.innerHTML = '<option value="">Select Unit</option>';

    const semester = this.value;
    const subjects = {
        1: ["Human Anatomy & Physiology I", "Pharmaceutical Analysis", "Pharmaceutics", "Pharmaceutical Inorganic Chemistry"],
        2: ["Human Anatomy & Physiology II", "Pharmaceutical Organic Chemistry I", "Pharmaceutical Engineering"],
        3: ["Pharmaceutical Organic Chemistry II", "Physical Pharmaceutics I", "Biochemistry", "Pathophysiology", "Pharmacognosy I"],
        4: ["Pharmaceutical Organic Chemistry III", "Medicinal Chemistry I", "Physical Pharmaceutics II", "Pharmacology I", "Pharmaceutical Jurisprudence"],
        5: ["Medicinal Chemistry II", "Pharmacology II", "Microbiology", "Biotechnology", "Pharmacognosy II"],
        6: ["Medicinal Chemistry III", "Pharmacology III", "Industrial Pharmacy I", "Biopharmaceutics", "Herbal Drug Technology"]
    };

    if (subjects[semester]) {
        subjects[semester].forEach(subject => {
            subjectSelect.innerHTML += `<option value="${subject}">${subject}</option>`;
        });
    }
});

document.getElementById('subject').addEventListener('change', function() {
    const unitSelect = document.getElementById('unit');
    unitSelect.innerHTML = '<option value="">Select Unit</option>';
    for (let i = 1; i <= 5; i++) {
        unitSelect.innerHTML += `<option value="unit${i}">Unit ${i}</option>`;
    }
});

document.getElementById('unit').addEventListener('change', function() {
    const program = document.getElementById('program').value;
    const semester = document.getElementById('semester').value;
    const unit = this.value;

    if (program && semester && unit) {
        const pdfPath = `pdfs/semester${semester}/${unit}.pdf`;
        window.open(pdfPath, '_blank');
    }
});
