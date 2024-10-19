function viewPDF(fileName) {
    // Show the PDF viewer and set the iframe source to the selected PDF
    const pdfViewer = document.getElementById('pdf-viewer');
    const pdfFrame = document.getElementById('pdf-frame');
    pdfFrame.src = `notes/${fileName}`; // Assumes PDFs are stored in a "notes" folder
    pdfViewer.style.display = 'block'; // Show the PDF viewer section
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    this.reset();
});
