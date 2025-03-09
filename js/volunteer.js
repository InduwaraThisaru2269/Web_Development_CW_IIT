const volunteerPrograms = [
    { id: 1, name: "Food Distribution", category: "food", date: "2025-03-15", available: true,image: "../images/Food_Volunteer.jpg", description: "Help distribute food to those in need in local communities.", location: "Local Community Centers", duration: "Ongoing" },
    { id: 2, name: "Teaching Kids", category: "education", date: "2025-03-20", available: true, image: "../images/Teaching_students.jpg", description: "Teach children essential skills for their future.", location: "Community Schools", duration: "3 Months" },
    { id: 3, name: "Urban Farming", category: "agriculture", date: "2025-04-01", available: false, image: "../images/Farming_Community.jpg", description: "Help build urban farms to promote sustainability.", location: "City Parks", duration: "Ongoing" },
    { id: 4, name: "Community Kitchen", category: "food", date: "2025-03-25", available: true, image: "../images/Kitchen_Volunteer.jpg", description: "Assist in cooking and distributing meals in community kitchens.", location: "Community Centers", duration: "Ongoing" }
];

function displayPrograms(programs = volunteerPrograms) {
    const list = document.getElementById("volunteer-list");
    list.innerHTML = "";

    programs.forEach(prog => {
        const card = document.createElement("div");
        card.className = "volunteer-card";
        card.innerHTML = `
            <h3>${prog.name}</h3>
            <!-- Image Placeholder -->
            <div class="article-image">
                <img src="${prog.image}" alt="${prog.name} Image">
            </div>
            <div class="card-info">
                <p><strong>Location:</strong> ${prog.location}</p>
                <p><strong>Availability:</strong> ${prog.available ? "Open" : "Full"}</p>
                <p><strong>Duration:</strong> ${prog.duration}</p>
            </div>
            <div class="details">
                <p><strong>Description:</strong> ${prog.description}</p>
                <p><strong>Contact:</strong> volunteer@zerohunger.org</p>
                <button>Sign Up</button>
            </div>
        `;
        list.appendChild(card);
    });

    // Populate sign-up dropdown
    const programSelect = document.getElementById("program-select");
    programSelect.innerHTML = '<option value="">Select a Program</option>';
    programs.filter(p => p.available).forEach(prog => {
        const option = document.createElement("option");
        option.value = prog.id;
        option.textContent = prog.name;
        programSelect.appendChild(option);
    });
}

function filterPrograms() {
    const category = document.getElementById("category-filter").value;
    const availability = document.getElementById("availability-filter").value;

    let filtered = volunteerPrograms;
    if (category) filtered = filtered.filter(prog => prog.category === category);
    if (availability === "open") filtered = filtered.filter(prog => prog.available);
    if (availability === "full") filtered = filtered.filter(prog => !prog.available);

    displayPrograms(filtered);
}

function fetchVolunteerPrograms() {
    setTimeout(() => {
        displayPrograms(volunteerPrograms);
    });
}

document.addEventListener("DOMContentLoaded", fetchVolunteerPrograms);

document.getElementById("volunteer-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for signing up!");
});
