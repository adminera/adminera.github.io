
document.addEventListener("DOMContentLoaded", function () {
    const blocks = document.querySelectorAll(".project-block");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        {
            threshold: 0.1, 
        }
    );

    blocks.forEach((block) => {
        observer.observe(block);
    });
});

function toggleDetails(button) {
    const projectBlock = button.closest('.project-block');
    projectBlock.classList.toggle('expanded');
    
    const details = projectBlock.querySelector('.details');
    if (projectBlock.classList.contains('expanded')) {
        details.style.display = 'block';
        button.textContent = 'View Less';
    } else {
        details.style.display = 'none';
        button.textContent = 'View More';
    }
}

