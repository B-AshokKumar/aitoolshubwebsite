// Search Button
const searchBtn = document.getElementById("searchBtn");

if (searchBtn) {
    searchBtn.addEventListener("click", function () {

        let keyword = document.querySelector(".hero-search input").value.trim();

        if (keyword === "") {
            alert("Please enter AI tool name.");
            return;
        }

        alert("Searching for: " + keyword);
    });
}

// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("navMenu");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", function () {
        nav.classList.toggle("show");
    });

    document.querySelectorAll("#navMenu a").forEach(link => {
        link.addEventListener("click", function () {
            nav.classList.remove("show");
        });
    });

}

// Copy Prompt
document.querySelectorAll(".copy-btn").forEach(button => {
    button.addEventListener("click", function () {

        const text = this.parentElement.querySelector("p").innerText;

        navigator.clipboard.writeText(text);

        this.innerHTML = "✅ Copied!";

        setTimeout(() => {
            this.innerHTML = "📋 Copy Prompt";
        }, 2000);

    });
});

// AI Tools Filter
const filterButtons = document.querySelectorAll(".filter-btn");
const toolCards = document.querySelectorAll(".directory-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        toolCards.forEach(card => {

            if (filter === "all" || card.dataset.category === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});
