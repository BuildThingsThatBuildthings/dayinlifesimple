document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('booking-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Collect form data
        const formData = {
            clubhouse: document.getElementById('clubhouse').value,
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value
        };
        
        // Store form data (you can send this to your backend if needed)
        localStorage.setItem('bookingFormData', JSON.stringify(formData));
        
        // Open Calendly in a popup
        Calendly.initPopupWidget({
            url: 'https://calendly.com/hideoutgolf/member-for-a-day'
        });
    });
});
