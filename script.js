document.getElementById("resume-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const title = document.getElementById("title").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const website = document.getElementById("website").value;
    const about = document.getElementById("about").value;
    const experience = document.getElementById("experience").value;
    const education = document.getElementById("education").value;
    const skills = document.getElementById("skills").value.split(",");

    // Generate resume HTML
    const resumeHTML = `
        <header>
            <h1>${name}</h1>
            <p>${title}</p>
        </header>
        <section class="contact-info">
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Website:</strong> ${website}</p>
        </section>
        <section class="about">
            <h2>About Me</h2>
            <p>${about}</p>
        </section>
        <section class="experience">
            <h2>Experience</h2>
            <p>${experience.replace(/\n/g, "<br>")}</p>
        </section>
        <section class="education">
            <h2>Education</h2>
            <p>${education.replace(/\n/g, "<br>")}</p>
        </section>
        <section class="skills">
            <h2>Skills</h2>
            <div class="skills-list">
                ${skills.map(skill => `<span>${skill.trim()}</span>`).join("")}
            </div>
        </section>
    `;

    // Display resume
    const resumeOutput = document.getElementById("resume-output");
    resumeOutput.innerHTML = resumeHTML;
    resumeOutput.style.display = "block";
});
