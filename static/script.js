document.getElementById('preview-btn').addEventListener('click', () => {
    const fileInput = document.getElementById('file');
    const file = fileInput.files[0];

    if (!file) {
        alert("Please upload a file to preview!");
        return;
    }

    const fileURL = URL.createObjectURL(file);
    if (file.type === "application/pdf") {
        window.open(fileURL, '_blank');
    } else {
        alert("Preview is only available for PDF files.");
    }
});
