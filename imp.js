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
        
        2: {
            "Human Anatomy & Physiology II": "https://drive.google.com/file/d/1sU5ETkmA-MzDgVWSQ6pQb854JrVU2Qpr/view?usp=drive_link",
           
        },

        3: {
            "Pharmaceutical organic chemistry II": "https://drive.google.com/file/d/1S6jR4zHS0KbuIu-6V7FkWQe_jzVZ5dyQ/view?usp=drive_link",
            "Physical Pharmaceutics I": "https://drive.google.com/file/d/1RMZw5MEBJpIxnJn7F_Zgip54eAtYwztb/view?usp=drive_link",
            "Biochemistry": "https://drive.google.com/file/d/1RKlY9PyJxVhS-6CH1Zd-I5XsPgHKwi-T/view?usp=drive_link",
            "Pathophysiology": "https://drive.google.com/file/d/1ReXVnrFoPhdFG1OYfb_3s03HTbZ3JM4W/view?usp=drive_link",
            "Pharmacognosy & Phytochemistry I": "https://drive.google.com/file/d/1S8yGw6OQkmyP4zoDwyBetz1YCI_cc-bW/view?usp=drive_link"
        },
        4: {
            "Pharmaceutical organic chemistry III": "https://drive.google.com/file/d/1fauGNN2IT4sXa9mbmNA-nt9t0IZaZH6U/view?usp=drive_link",
            "Medicinal chemisrty I": "https://drive.google.com/file/d/1wJYosbkKi_btTWNQyzgPk57PO8Dhc-Cr/view?usp=drive_link",
            "Physical Pharmaceutics II": "https://drive.google.com/file/d/17RnYc6XlDJQFagNuJw_AGrOVMR_4PJYt/view?usp=drive_link",
            "Pharmacology I": "https://drive.google.com/file/d/1kLvxGyYW3QxPi-Nd6nqCeZzWl7HigwXc/view?usp=drive_link",
            "Pharmaceutical jurisprudence": "https://drive.google.com/file/d/1CNxo4pN0M5_1UNKlGANOpBDJ-GDXfvhE/view?usp=drive_link"
        },
        5: {
            "Medicinal chemisrty II": "https://drive.google.com/file/d/1R4XPGULALfEvxIOWubpVoIjiZQiv0nYY/view?usp=drive_link",
            "Pharmacology II": "https://drive.google.com/file/d/1R54LrJo8ifSJv8rcMw6gzP021j-_1YOi/view?usp=drive_link",
            "Pharmacognosy & Phytochemistry II": "https://drive.google.com/file/d/1R6u7cOALm2_TT29ilS_wxVPnDV3GmK7v/view?usp=drive_link",
            "Pharmaceutical Microbiology ": "https://drive.google.com/file/d/1REV8XdX5lY_5LsvX6tA0KMXtOT7seveT/view?usp=drive_link",
            "Pharmaceutical Biotechnology": "https://drive.google.com/file/d/1RJRr4_gysjn3yjahn1Qm2mG8rMJlAwKa/view?usp=drive_link"
        },
        6: {
            "Medicinal chemisrty III": "https://drive.google.com/file/d/1aziYy6bWo7mPVdL-jGvzWLfJKZyvxi_V/view?usp=sharing",
            "Pharmacology III": "https://drive.google.com/file/d/1ol0MJXimmarzHRkg87k7zGHSCDuXPzki/view?usp=drive_link",
            "Herbal drug technology": "https://drive.google.com/file/d/1rMSUvxbp1f5AAlM4MHPQ2KI29EWj8h4j/view?usp=drive_link",
            "Biopharmaceutics & pharmacokinetics ": "https://drive.google.com/file/d/1LvwA9RshaLJ1B6RnC6pfGXdFJ-qbjdND/view?usp=drive_link",
            "Industrail pharmacy I": "https://drive.google.com/file/d/10tKmpxVLF3o4Q3XsufbLPA1vWh7W7gKc/view?usp=drive_link"
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
