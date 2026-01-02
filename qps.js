// Grabbing DOM elements
const programSelect = document.getElementById("program");
const semesterSelect = document.getElementById("semester");
const sessionSelect = document.getElementById("session");
const subjectSelect = document.getElementById("subject");

// Data with links
const data = {
  bpharma: {
    6: {
      "Winter-Summer (2020-2024)": {
        "Medicinal chemistry III": "https://drive.google.com/file/d/1SvqN9SSlEYJ5F4dDY_qXURO_hcT4iK5_/view?usp=sharing",
        "Pharmacology III": "https://drive.google.com/file/d/12EzvPAL4wkXhgCh1qC6KmwYVb7zQeJ8l/view?usp=drive_link",
        "Herbal drug technology": "https://drive.google.com/file/d/1jgyOR01ZmqlkmAJe47YOO_qcBddssjqp/view?usp=drive_link",
        "Biopharmaceutics and pharmacokinetics": "https://drive.google.com/file/d/1mdrTKyowgkyLgUy4b4b3aYDpa59KsA4_/view?usp=drive_link",
        "Industial pharmacy I": "https://drive.google.com/file/d/1dlZwNSEQ5NC6mR-leqTPuE-JK9N-ldU6/view?usp=drive_link"
      },
    },





    4: {
      "Winter-Summer (2020-2024)": {
        "Pharmaceutical organic chemistry  III": "https://drive.google.com/file/d/1bjcUdgubCHFyBA_3uhNmUB-zfC7mgdDN/view?usp=drive_link",
        "Medicinal Chemistry I": "https://drive.google.com/file/d/1cnszk5_QLaDcKVb4nd1g31CU_qxuJibV/view?usp=drive_link",
        "Physical pharmaceutics II": "https://drive.google.com/file/d/1cpQoUK9WiqHiehVfXBcMoR2GWMildjon/view?usp=drive_link",
        "Pharmacology I": "https://drive.google.com/file/d/1cpzyKQbJSQffAfuo92cVBlY4asKkNlkD/view?usp=drive_link",
        "Pharmacutical Jurisprudence": "https://drive.google.com/file/d/1dBi7p0UgCDr2UylYQeML_QV6EN-UBHsh/view?usp=drive_link"
      },
      "Summer 2025": {
        "Pharmaceutical organic chemistry  III": "https://drive.google.com/file/d/1EwtNdOsMRxjyAsKU6fxo6SlotzrsL5Iy/view?usp=drive_link",
        "Medicinal Chemistry I": "https://drive.google.com/file/d/1mLo2rgAO1f7O-6RC92WE3FJbJeuEbCHr/view?usp=drive_link",
        "Physical pharmaceutics II": "https://drive.google.com/file/d/1D8BhCF9tX9Uy5zdhavoUwYGS8ljezE3N/view?usp=drive_link",
        "Pharmacology I": "https://drive.google.com/file/d/1J18_6YloiU3n20cnQyjFrped8BZcYzjr/view?usp=drive_link",
        "Pharmacutical Jurisprudence": "https://drive.google.com/file/d/1qVbAiTHntlX9MD3-_N4qCvBWlslJ7C_P/view?usp=drive_link"
      },
    },



    2: {
      "Winter-Summer (2020-2024)": {
        "Human anatomy & Physiology II ": "https://drive.google.com/file/d/1aco_TIdN-v847vxo6ZH3NCswwZ0ZE3kU/view?usp=drive_link",
        "Pharmaceutical Organic Chemistry I": "https://drive.google.com/file/d/1-5I_ntKcV-SPgzZp1x02CsoK07cLaiug/view?usp=drive_link",
        "Pharmaceutical enginerring": "https://drive.google.com/file/d/1Li9kilJ8vhym-gl_VEtJnRldVyg1AsKu/view?usp=drive_link"
      },
      "Summer 2025": {
        "Human anatomy & Physiology II ": "https://drive.google.com/file/d/1Ya26E2jL1D69ksiRoNxRpiFHu7TjlgHD/view?usp=drive_link",
        "Pharmaceutical Organic Chemistry I": "https://drive.google.com/file/d/19opj8tj0mqAgk0BNHYEU3uCIQeT52bEs/view?usp=drive_link",
        "Pharmaceutical enginerring": "https://drive.google.com/file/d/1fKhWVVVD97sF7nG0zudUGhP4O3UcSqAV/view?usp=drive_link"
      },
    },



    3 : {
      "Winter-Summer (2020-2024)": {
        "Pharmaceutical organic chemistry  II": "https://drive.google.com/file/d/1JOGo2PJuTHJjVzk2a26eh_v1peHiwMlC/view?usp=drive_link",
        "Physical pharmaceutics I": "https://drive.google.com/file/d/1JOpXHDuuB2neecm-qvxWhWdKiIf0aosD/view?usp=drive_link",
        "Biochemistry ": "https://drive.google.com/file/d/1JYobDDgnC-4QO_RwZbxKmxj17S8FuBWW/view?usp=drive_link",
        "PathoPhysiology": "https://drive.google.com/file/d/1J_W3xj8TxSnxg6FtqgRiMiSVodyev8Yt/view?usp=drive_link",
        "Pharmacognosy & Phytochemistry I": "https://drive.google.com/file/d/1JbEfZ-mtzWBIvXyzKAfvJsgQeU3SMT5g/view?usp=drive_link"
      },
      "Summer 2025": {
        "Pharmaceutical organic chemistry  II": "https://drive.google.com/file/d/1dXqQAOMeNLpgXnkSPetTrBGcvdZ-GI2d/view?usp=drive_link",
        "Physical pharmaceutics I": "https://drive.google.com/file/d/1VAmvEFSahV1Z8lA0O6p2JI6eXY6jWsaB/view?usp=drive_link",
        "Biochemistry ": "https://drive.google.com/file/d/1Vy94HqvFNG7YIAXihtFCY-lb_lCFsXIb/view?usp=drive_link",
        "PathoPhysiology": "https://drive.google.com/file/d/1Gbq0UfDZ5FB5I-1S4mCreLeYNLl90R0c/view?usp=drive_link",
        "Pharmacognosy & Phytochemistry I": "https://drive.google.com/file/d/1gqwpyDC_T0aDKVVEIOHzPhzCZ1Eb9VJ7/view?usp=drive_link"
      },
    },



    1: {
      "Winter-Summer (2020-2023)": {
        "Human anatomy & Physiology I ": "https://drive.google.com/file/d/1ccawD0fAvhJ-5NgO3I1uCqQeyFCiN6KZ/view?usp=drive_link",
        "Pharmaceutical Analysis I": "https://drive.google.com/file/d/1caIkXAHhJuOi9s6SjgSMVKlPgF1JdaNa/view?usp=drive_link",
        "Pharmaceutical inorganic chemistry": "https://drive.google.com/file/d/1ceF61eP1-ZaMAjZH30LwvfVKksoampxT/view?usp=drive_link",
        "Pharmaceutics":"https://drive.google.com/file/d/1ckNcn9sOBCz-KljF7st65Mojzl2fy7xm/view?usp=drive_link",
      },
      "Summer 2025": {
        "Human anatomy & Physiology I ": "https://drive.google.com/file/d/16FdHyb_yjWNnZlj4AIyC2qPQzY_6qJ_O/view?usp=drive_link",
        "Pharmaceutical Analysis I": "https://drive.google.com/file/d/17HBCGnZmL4lq2OxP6vgoL9fOHxp3z9aX/view?usp=drive_link",
        "Pharmaceutical inorganic chemistry": "https://drive.google.com/file/d/11nTOke77pwGHiPZ2UXmzSqK2NAqL-azt/view?usp=drive_link",
        "Pharmaceutics":"https://drive.google.com/file/d/1qxZWWns_NU5vctCTanJahy64X_mzWcbr/view?usp=drive_link",
      },
    },


    5: {
      "Winter-Summer (2019-2024)": {
        "Medicinal Chemistry II": "https://drive.google.com/file/d/1Li9kilJ8vhym-gl_VEtJnRldVyg1AsKu/view?usp=drive_link",
        "Pharmacology II": "https://drive.google.com/file/d/1CJvMCQ-SnzZwVDmTW21bsBFHpbQnM1FA/view?usp=drive_link",
        "Pharmacogonsy & Phytochemisry II": "https://drive.google.com/file/d/1CSaptWDQ3LRr4FuOcSQbcMtDZWRGXP8l/view?usp=drive_link",
        "Pharmaceutical Microbiology": "https://drive.google.com/file/d/1CSdTMR0GP_PxELD6T6XSjEZ2w9qpCYZN/view?usp=drive_link",
        "Pharmaceutical Biotechnology": "https://drive.google.com/file/d/1C_0zd4U86soz9D7iWKMVq4gaM-mIS_de/view?usp=drive_link"
      },
      "Summer 2025 ": {
        "Medicinal Chemistry II": "https://drive.google.com/file/d/15VjMjGJ1-YpOFCDt-DcWesGpxWgf7aKa/view?usp=drive_link",
        "Pharmacology II": "https://drive.google.com/file/d/1ziQsysJI3RTg3MN4kyJ02JXjQWvd_5pF/view?usp=drive_link",
        "Pharmacogonsy & Phytochemisry II": "https://drive.google.com/file/d/1gmQBDqYDpXw3NM6cCP-40JVHRbmi_uUO/view?usp=drive_link",
        "Pharmaceutical Microbiology": "https://drive.google.com/file/d/1PWdp8sPNbGtFK2BDE61ZUDNxPeWFU8c7/view?usp=drive_link",
        "Pharmaceutical Biotechnology": "https://drive.google.com/file/d/1ZXp9uzLaJZvgKraw5N3sjt3ZZqo_Z1VA/view?usp=drive_link"
      },
    },



    7: {
      "Winter-Summer (2020-2025)": {
        "Instrumental Methods of Analysis": "https://drive.google.com/file/d/1_JDQ2bdP8hbYp6vlyD7dt9xTd2_MiXzD/view?usp=drive_link",
        "Industrial Pharmacy II": "https://drive.google.com/file/d/1LXL8lH_p5lLmZF-QGfrlVIBX2eEu5qXa/view?usp=drive_link",
        "Pharmacy Practice": "https://drive.google.com/file/d/1jGFtTCIR0inQbKIesZgQH0NxmaCpbbmA/view?usp=drive_link",
        "Novel Drug Delivery Systems": "https://drive.google.com/drive/folders/1h5WBbVwBXDZEGuJvqqbnHjSSCWj5btFc?usp=drive_link",
        "Quality Assurance": "https://drive.google.com/drive/folders/1S0ZKpaTgwpGX7pWMm5WZK0Pcw0jObpcZ?usp=drive_link"
      },
    },


    8: {
      "Winter-Summer (2021-2025)": {
        "Biostatistic & Research methodology": "https://drive.google.com/file/d/1tXKVr-UsjDZRYHPqmFFKy5rc-aT5qpFR/view?usp=drivesdk",
        "Social & Preventive Pharmacy": "https://drive.google.com/file/d/1tXKVr-UsjDZRYHPqmFFKy5rc-aT5qpFR/view?usp=drivesdk",
        "Pharma marketing management": "https://drive.google.com/file/d/1TAjDpYV8d_bU8lalId8Dm1kPxjtlAl2D/view?usp=drivesdk",
        "Cosmetic science": "https://drive.google.com/file/d/1BqXGit91tIADQ_N7dDkLOMlm2TDo69JG/view?usp=drivesdk"
      },
    },


  },
  mpharma: {
    1: {
      "Winter 2020": {
        "Advanced Medicinal Chemistry": "https://example.com/mpharma/sem1/winter2020_medicinal_chemistry.pdf",
      },
    },
  },
};

// Populate semesters based on program selection
programSelect.addEventListener("change", () => {
  const program = programSelect.value;
  semesterSelect.innerHTML = `<option value="">--Select Semester--</option>`;
  sessionSelect.innerHTML = `<option value="">--Select Session--</option>`;
  subjectSelect.innerHTML = `<option value="">--Select Subject--</option>`;
  sessionSelect.disabled = true;
  subjectSelect.disabled = true;

  if (program) {
    Object.keys(data[program]).forEach((semester) => {
      semesterSelect.innerHTML += `<option value="${semester}">Semester ${semester}</option>`;
    });
    semesterSelect.disabled = false;
  } else {
    semesterSelect.disabled = true;
  }
});

// Populate sessions based on semester selection
semesterSelect.addEventListener("change", () => {
  const program = programSelect.value;
  const semester = semesterSelect.value;
  sessionSelect.innerHTML = `<option value="">--Select Session--</option>`;
  subjectSelect.innerHTML = `<option value="">--Select Subject--</option>`;
  subjectSelect.disabled = true;

  if (semester && data[program][semester]) {
    Object.keys(data[program][semester]).forEach((session) => {
      sessionSelect.innerHTML += `<option value="${session}">${session}</option>`;
    });
    sessionSelect.disabled = false;
  } else {
    sessionSelect.disabled = true;
  }
});

// Populate subjects based on session selection
sessionSelect.addEventListener("change", () => {
  const program = programSelect.value;
  const semester = semesterSelect.value;
  const session = sessionSelect.value;
  subjectSelect.innerHTML = `<option value="">--Select Subject--</option>`;

  if (session && data[program][semester][session]) {
    Object.keys(data[program][semester][session]).forEach((subject) => {
      subjectSelect.innerHTML += `<option value="${subject}">${subject}</option>`;
    });
    subjectSelect.disabled = false;
  } else {
    subjectSelect.disabled = true;
  }
});

// Display download link based on subject selection
subjectSelect.addEventListener("change", () => {
  const program = programSelect.value;
  const semester = semesterSelect.value;
  const session = sessionSelect.value;
  const subject = subjectSelect.value;

  const linkContainer = document.querySelector(".container");
  const existingLink = document.querySelector(".download-link");
  if (existingLink) existingLink.remove(); // Remove any existing link

  if (subject && data[program][semester][session][subject]) {
    const link = data[program][semester][session][subject];
    const downloadLink = document.createElement("a");
    downloadLink.href = link;
    downloadLink.target = "_blank";
    downloadLink.textContent = `Download ${subject} Question Paper`;
    downloadLink.className = "download-link";
    downloadLink.style.display = "block";
    downloadLink.style.marginTop = "20px";
    linkContainer.appendChild(downloadLink);
  }
});

