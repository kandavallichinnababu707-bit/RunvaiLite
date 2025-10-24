async function generateResume() {
    const template = document.getElementById("templateSelect").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;

    // Load selected template
    const res = await fetch(`templates/${template}.html`);
    let html = await res.text();

    // Replace placeholders
    html = html.replace("{{name}}", name)
               .replace("{{email}}", email)
               .replace("{{phone}}", phone)
               .replace("{{education}}", education)
               .replace("{{experience}}", experience)
               .replace("{{skills}}", skills);

    document.getElementById("templateContainer").innerHTML = html;
    document.getElementById("resumePreview").classList.remove("hidden");
}

function downloadPDF() {
    const element = document.getElementById('resumePreview');
    html2pdf().from(element).save('MyResume.pdf');
}
