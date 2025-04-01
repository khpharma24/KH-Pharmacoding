const programSelect = document.getElementById("program");
const semesterSelect = document.getElementById("semester");
const subjectSelect = document.getElementById("subject");
const downloadLinkContainer = document.createElement("div"); // For showing the download link
document.querySelector("form").appendChild(downloadLinkContainer);

// Data with links
const data = {
    bpharma: {
        1: {
            "Human Anatomy & Physiology I": "https://drive.google.com/file/d/1tJuDWlhc3GQ_FZWn1YfUerFaK_TILT-L/view",
            "Pharmaceutical analysis  I": "https://drive.google.com/file/d/15vpzmCUy2IpavTKBWd7E6Ho2V75kbuuV/view?usp=drive_link",
            "Pharmaceutics ": "https://drive.google.com/file/d/1uPOPIS-2OziT_RukxMxq4cBnNqqq1bZ1/view?usp=drive_link",
            "Pharmaceutical inorganic chemistry  ": "https://drive.google.com/file/d/1CQID-Ei8CBVcCQtJCtFScSv-lTYsv_fS/view?usp=drive_link"
        },
        3: {
            "Pharmaceutical organic chemistry II": "https://drive.google.com/file/d/1aTvHprWuK-ZcV8wacB5G6tynj3DrM4yq/view",
            "Physical Pharmaceutics I": "https://drive.google.com/file/d/1njYawnyX2thlzsBx9rtNDEV_ym71_RzY/view",
            "Biochemistry": "https://drive.google.com/file/d/1_TMtBscQyKAlVYk1a24lttSn0D4Rz05T/view",
            "Pathophysiology": "https://drive.google.com/file/d/1WX82ndbKeRMBYFwDyWqyYm7dXNl0n7vN/view",
            "Pharmacognosy & Phytochemistry I": "https://drive.google.com/file/d/1zEP-A0wyreqUILINErvaE394amvgUToG/view"
        },
        4: {
            "Pharmaceutical organic chemistry III": "https://drive.google.com/file/d/1fauGNN2IT4sXa9mbmNA-nt9t0IZaZH6U/view?usp=drive_link",
            "Medicinal chemisrty I": "https://drive.google.com/file/d/1wJYosbkKi_btTWNQyzgPk57PO8Dhc-Cr/view?usp=drive_link",
            "Physical Pharmaceutics I": "https://drive.google.com/file/d/17RnYc6XlDJQFagNuJw_AGrOVMR_4PJYt/view?usp=drive_link",
            "Pharmacology I": "https://drive.google.com/file/d/1kLvxGyYW3QxPi-Nd6nqCeZzWl7HigwXc/view?usp=drive_link",
            "Pharmaceutical jurisprudence": "https://drive.google.com/file/d/1zEP-A0wyreqUILINErvaE394amvgUToG/view"
        }

    },
    mpharma: {
        1: {
            "Advanced Medicinal Chemistry": "https://example.com/mpharma/sem1/medicinal_chemistry.pdf"
        }
    }
};

// Populate semesters based on program selection
programSelect.addEventListener("change", () => {
    const program = programSelect.value;
    semesterSelect.innerHTML = `<option value="">--Select Semester--</option>`;
    subjectSelect.innerHTML = `<option value="">--Select Subject--</option>`;
    subjectSelect.disabled = true;
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

// Display the download link based on subject selection
subjectSelect.addEventListener("change", () => {
    const program = programSelect.value;
    const semester = semesterSelect.value;
    const subject = subjectSelect.value;

    if (subject && data[program][semester][subject]) {
        const link = data[program][semester][subject];
        downloadLinkContainer.innerHTML = `
            <a href="${link}" target="_blank" class="download-link">Download IMP QUESTIONS</a>
        `;
    } else {
        downloadLinkContainer.innerHTML = "";
    }
});
