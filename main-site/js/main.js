document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. CALL BUTTON TRACKING ---
    // This finds all buttons with 'data-track-call' attribute
    const callButtons = document.querySelectorAll('[data-track-call]');

    callButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Replace this URL with your formsubmit.co endpoint
            // We use 'no-cors' mode to just fire and forget without waiting for a complex response
            // The 'message' field tells you what happened
            const notifyUrl = "https://formsubmit.co/ajax/apgreenisenonboarding@gmail.com";
            
            fetch(notifyUrl, {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    _subject: "URGENT: Call Button Clicked on Website",
                    message: "Someone clicked the 'Call Us' button on the website. Be ready for an incoming call."
                })
            }).catch(() => {});
            
            // The phone dialer will open automatically because of href="tel:..."
        });
    });


    // --- 2. FORM SUCCESS CHECK ---
    // If url contains ?status=success (from planning form redirect)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('status') === 'success') {
        const formContainer = document.querySelector('.planning-form');
        if(formContainer) {
            formContainer.innerHTML = `
                <div style="text-align:center; padding: 2rem; background: #e8f5e9; border-radius: 8px;">
                    <h3 style="color:#2e7d32">Thank you.</h3>
                    <p>We have received your information and will be in touch shortly.</p>
                </div>
            `;
        }
    }
});