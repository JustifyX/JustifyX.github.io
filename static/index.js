const hoverImage = document.getElementById('hoverImage');
let currentImageIndex = 0;
let currentDesriptionIndex = 0;
const images = [
    "/static/responsive web design certificate.PNG",
    "/static/Front End Development Libraries.PNG",
    "/static/First Design.jpeg",
    "/static/Second Design.jpeg",
    "/static/Third Design.jpeg",
    "/static/Blog Website.jpeg",

];

const descriptions = [
    "Responsive Web Design Certificate from FreeCodeCamp. Check authenticity <a href='https://www.freecodecamp.org/certification/JustifyX/responsive-web-design' target='_blank'>Here!</a>",
    "Front End Development Libraries Certificate from FreeCodeCamp. Check authencity <a href='https://www.freecodecamp.org/certification/JustifyX/front-end-development-libraries' target='_blank'>Here!</a>",
    "Design I made for a school with a serious vibe.",
    "Really simplistic design that I made for a school.",
    "A playful design I made for a school.",
    "My own Blog website! Check it out <a href='https://justifyx-blog.onrender.com/' target='_blank'>Here!</a>",
];

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    document.getElementById('workHoverImage').src = images[currentImageIndex];
    document.getElementById('workDescription').innerHTML = descriptions[currentImageIndex];
}

function showContent(section) {
    document.querySelectorAll('.content').forEach(function(content) {
        content.style.display = 'none';
    });

    document.getElementById(section + 'Content').style.display = 'block';

    // Hide or show the certificate image based on the section
    if (section === 'work') {
        document.getElementById('workImageContainer').style.display = 'block';
    } else {
        document.getElementById('workImageContainer').style.display = 'none';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const headings = document.querySelectorAll('.listz h2');
    const contents = document.querySelectorAll('.content');

    headings.forEach((heading) => {
        heading.addEventListener('mouseenter', function() {
            if (!heading.classList.contains('clicked')) {
                heading.style.color = getH1Color(heading.getAttribute('data-section'));
            }
        });

        heading.addEventListener('mouseleave', function() {
            if (!heading.classList.contains('clicked')) {
                heading.style.color = 'black';
            }
        });

        heading.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            showContent(section);

            // Reset color for all headings
            headings.forEach((h) => {
                h.style.color = 'black';
                h.classList.remove('clicked');
            });

            // Change color for the clicked heading
            this.style.color = getH1Color(section);
            this.classList.add('clicked');
        });
    });

    function getH1Color(section) {
        return getComputedStyle(document.querySelector('.' + section)).color;
    }
});

    function showContent(section) {
        document.querySelectorAll('.content').forEach(function(content) {
            content.style.display = 'none';
        });

        document.getElementById(section + 'Content').style.display = 'block';
    }

    function showContent(section) {
        document.querySelectorAll('.content').forEach(function(content) {
            content.style.display = 'none';
        });
    
        document.getElementById(section + 'Content').style.display = 'block';
    
        document.querySelector('body').className = section;
    }

    showContent('about');
    

    document.addEventListener("DOMContentLoaded", function () {
        const headings = document.querySelectorAll('.listz h2');
        const contents = document.querySelectorAll('.content');
        const hoverImage = document.getElementById('hoverImage');
        const tooltip = document.querySelector('.tooltip');
        let animationFrameId;
    
        headings.forEach((heading) => {
            heading.addEventListener('mouseover', function () {
                if (!heading.classList.contains('clicked')) {
                    heading.style.color = getH1Color(heading.textContent.toLowerCase());
                }
            });
    
            heading.addEventListener('mouseout', function () {
                if (!heading.classList.contains('clicked')) {
                    heading.style.color = 'black';
                }
            });
    
            heading.addEventListener('click', function () {
                // Remove 'clicked' class from all headings
                headings.forEach((h) => h.classList.remove('clicked'));
    
                // Add 'clicked' class to the clicked heading
                heading.classList.add('clicked');
    
                // Reset color for all headings
                headings.forEach((h) => h.style.color = 'black');
    
                // Change color for the clicked heading
                heading.style.color = getH1Color(heading.textContent.toLowerCase());
    
                // Display the corresponding content
                contents.forEach((content) => content.style.display = 'none');
                document.getElementById(heading.textContent.toLowerCase() + 'Content').style.display = 'block';
            });
        });
    
        document.addEventListener('mousemove', (e) => {
            if (!animationFrameId) {
                animationFrameId = requestAnimationFrame(() => {
                    handleMouseMove(e);
                    animationFrameId = null;
                });
            }
        });
    
        hoverImage.addEventListener('mouseleave', () => {
            cancelAnimationFrame(animationFrameId);
            hoverImage.style.transform = 'rotateX(0deg) rotateY(0deg)';
            updateShadow(hoverImage, 0, 0);
        });
    
        tooltip.addEventListener('mousemove', (e) => {
            e.stopPropagation();
        });
    
        function handleMouseMove(e) {
            const { clientX, clientY } = e;
            const { left, top, width, height } = hoverImage.getBoundingClientRect();
            const centerX = left + width / 2;
            const centerY = top + height / 2;
            const deltaX = clientX - centerX;
            const deltaY = clientY - centerY;
    
            const rotateX = -deltaY * 0.1;
            const rotateY = deltaX * 0.1;
    
            hoverImage.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            updateShadow(hoverImage, deltaX, deltaY);
        }
    
        function updateShadow(target, deltaX, deltaY) {
            const shadowOffsetX = deltaX / 10;
            const shadowOffsetY = deltaY / 10;
            const shadowBlur = 20;
            const shadowColor = 'rgba(0, 0, 0, 0.3)';
            const boxShadow = `${-shadowOffsetX}px ${-shadowOffsetY}px ${shadowBlur}px ${shadowColor}`;
    
            target.style.boxShadow = boxShadow;
        }
    
        function getH1Color(section) {
            return getComputedStyle(document.querySelector('.' + section)).color;
        }
    });
document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = hoverImage.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;

    const rotateX = -y * 10;
    const rotateY = x * 10;

    hoverImage.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

hoverImage.addEventListener('mouseleave', () => {
    hoverImage.style.transform = 'rotateX(0deg) rotateY(0deg)';
});

const tooltip = document.querySelector('.tooltip');

document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = hoverImage.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;

    const rotateX = -y * 10;
    const rotateY = x * 10;

    hoverImage.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

hoverImage.addEventListener('mouseleave', () => {
    hoverImage.style.transform = 'rotateX(0deg) rotateY(0deg)';
});

tooltip.addEventListener('mousemove', (e) => {
    e.stopPropagation();
});

