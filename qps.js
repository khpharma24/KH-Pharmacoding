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
        "Medicinal chemisrty III": "https://drive.google.com/file/d/1SvqN9SSlEYJ5F4dDY_qXURO_hcT4iK5_/view?usp=sharing",
        "Pharmacology III": "https://drive.google.com/file/d/12EzvPAL4wkXhgCh1qC6KmwYVb7zQeJ8l/view?usp=drive_link",
        "Herbal drug technology": "https://drive.google.com/file/d/1jgyOR01ZmqlkmAJe47YOO_qcBddssjqp/view?usp=drive_link",
        "Biopharmaceutics and pharmacokinetics": "https://drive.google.com/file/d/1mdrTKyowgkyLgUy4b4b3aYDpa59KsA4_/view?usp=drive_link",
        "Industial pharmacy I": "https://drive.google.com/file/d/1dlZwNSEQ5NC6mR-leqTPuE-JK9N-ldU6/view?usp=drive_link"
      },
    },
    5: {
      "Winter-Summer (2020-2024)": {
        "Pharmaceutical organic chemisrty III": "https://drive.google.com/file/d/1bjcUdgubCHFyBA_3uhNmUB-zfC7mgdDN/view?usp=drivesdk",
      },
    },
    2: {
      "Summer 2021": {
        "Pharmaceutical Chemistry": "https://example.com/bpharma/sem2/summer2021_pharmaceutical_chemistry.pdf",
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
