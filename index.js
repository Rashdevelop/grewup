window.addEventListener('load', function() {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
});




const follower = document.getElementById('follower');
let mouseX = 0, mouseY = 0;
let posX = 0, posY = 0;

// Smoothly follow the cursor with better proximity
function animateFollower() {
    // Adjust the position using a factor of 0.2 for faster convergence
    posX += (mouseX - posX) * 0.2;
    posY += (mouseY - posY) * 0.2;

    follower.style.left = `${posX}px`;
    follower.style.top = `${posY}px`;

    requestAnimationFrame(animateFollower);
}

// Update mouse position immediately
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Start the animation loop
animateFollower();

const links = document.querySelectorAll('a');
follower.style.transition = 'width 0.3s, height 0.3s, background 0.3s';

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        follower.style.width = '50px';
        follower.style.height = '50px';
        follower.style.background = 'none'; // Clear any background, including gradients
        follower.style.backgroundColor = 'transparent'; // Transparent background
        follower.style.border = '2px solid purple'; // Transparent background
        // follower.style.borderImage = 'pink'; // Gradient border
        follower.style.borderRadius = '50%'; // Transparent background


    });
    
    link.addEventListener('mouseout', () => {
        follower.style.width = '30px';
        follower.style.height = '30px';
        follower.style.background = 'linear-gradient(45deg, rgb(255, 107, 32), rgb(135, 33, 198), rgb(228, 56, 21))'; // Gradient background
        follower.style.border = 'none'; // Remove the border when not hovering
    });
});

document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault(); // Prevent the default form submission
    
    // Collect form data
    const formData = {
        fullname: document.getElementById('name').value,
        phoneNumber: document.getElementById('number').value,
        email: document.getElementById('email').value,
        companyName: document.getElementById('mssg').value,
        companyType: document.getElementById('category').value,
        services: document.querySelector('input[name="services"]:checked') ? document.querySelector('input[name="services"]:checked').value : ''
    };
    
    // Send data to the backend using fetch (POST request)
    try {
        const response = await fetch(`/submit-form`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData) // Send the data as JSON
        });

        if (response.ok) {
            // Clear the form if submission is successful
            document.getElementById('contactForm').reset();
            alert('Greatt! Our team will get back to you');
        } else {
            alert('Error submitting the form');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error submitting the form');
    }
});
var section = document.querySelector('.contact_section');
if (section) {
    section.classList.remove('follower');
  }