// Main JavaScript file for Dental Practice website

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Load header and footer
    loadHeaderFooter();
    
    // Initialize navigation
    initializeNavigation();
    
    // Initialize mobile menu
    initializeMobileMenu();
    
    // Initialize forms
    initializeForms();
    
    // Initialize appointment form if it exists
    if (document.getElementById('appointmentForm')) {
        initializeAppointmentForm();
    }
    
    // Initialize contact form if it exists
    if (document.getElementById('contactForm')) {
        initializeContactForm();
    }
    
    // Initialize smooth scrolling
    initializeSmoothScrolling();
    
    // Initialize navigation highlighting
    initializeScrollSpy();
    
    // Initialize animations
    setTimeout(initializeAnimations, 100);
});

// Load header and footer content
function loadHeaderFooter() {
    // Header content
    const headerHTML = `
        <!-- Emergency Notice -->
        <div class="emergency-notice">
            🚨 Dental Emergency? Call us 24/7 at (555) 123-4567 🚨
        </div>

        <!-- Header -->
        <header class="site-header">
            <div class="container">
                <div class="header-content">
                    <div class="logo">
                        <div class="logo-icon">🦷</div>
                        <div>
                            <h1>Dental</h1>
                            <small>Your Smile is Our Priority</small>
                        </div>
                    </div>
                    <div class="header-contact">
                        <div class="phone-number">📞 (555) 123-4567</div>
                        <a href="contact.html" class="emergency-btn">Emergency Care</a>
                    </div>
                </div>
            </div>
        </header>

        <!-- Navigation -->
        <nav class="main-nav">
            <div class="container">
                <div class="nav-container">
                    <ul class="nav-menu">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="team.html">Our Team</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="appointment.html" style="background: #2ECC71; border-radius: 5px;">Book Appointment</a></li>
                    </ul>
                    <button class="mobile-menu-toggle" aria-label="Toggle mobile menu">
                        <div class="hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>
            </div>
        </nav>

        <!-- Mobile Menu Overlay -->
        <div class="mobile-menu-overlay"></div>
    `;

    // Footer content
    const footerHTML = `
        <footer class="site-footer">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-section">
                        <h4>Dental</h4>
                        <p>Providing exceptional dental care with a gentle touch for over 15 years. Your smile is our priority.</p>
                        <div style="margin-top: 15px;">
                            <a href="#" style="margin-right: 15px;">Facebook</a>
                            <a href="#" style="margin-right: 15px;">Instagram</a>
                            <a href="#" style="margin-right: 15px;">Google Reviews</a>
                        </div>
                    </div>
                    
                    <div class="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="services.html">Our Services</a></li>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="team.html">Meet Our Team</a></li>
                            <li><a href="appointment.html">Book Appointment</a></li>
                            <li><a href="contact.html">Contact Us</a></li>
                            <li><a href="contact.html">Emergency Care</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-section">
                        <h4>Patient Resources</h4>
                        <ul>
                            <li><a href="#">New Patient Information</a></li>
                            <li><a href="#">Insurance & Financing</a></li>
                            <li><a href="#">Pre & Post Care Instructions</a></li>
                            <li><a href="#">Frequently Asked Questions</a></li>
                            <li><a href="#">Patient Portal Login</a></li>
                            <li><a href="#">Leave a Review</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-section">
                        <h4>Contact Information</h4>
                        <p><strong>Address:</strong><br>
                        123 Main Street, Suite 100<br>
                        Your City, ST 12345</p>
                        
                        <p><strong>Phone:</strong> (555) 123-4567<br>
                        <strong>Emergency:</strong> (555) 123-4567<br>
                        <strong>Email:</strong> info@smilesdental.com</p>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <p>
                    <a href="#" style="color: #2ECC71;">Privacy Policy</a> | 
                    <a href="#" style="color: #2ECC71;">Terms of Service</a> | 
                    <a href="#" style="color: #2ECC71;">Accessibility Statement</a></p>
                </div>
            </div>
        </footer>
    `;

    // Insert header and footer
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');
    
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
    }
    
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
}

// Initialize mobile menu functionality
function initializeMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const overlay = document.querySelector('.mobile-menu-overlay');
    const body = document.body;
    
    if (!mobileToggle || !navMenu || !overlay) return;
    
    // Toggle mobile menu
    mobileToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleMobileMenu();
    });
    
    // Close menu when overlay is clicked
    overlay.addEventListener('click', function() {
        closeMobileMenu();
    });
    
    // Close menu when menu item is clicked
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMobileMenu();
        });
    });
    
    // Close menu on window resize if screen becomes large
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });
    
    // Close menu when escape key is pressed
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });
    
    function toggleMobileMenu() {
        const isActive = navMenu.classList.contains('active');
        
        if (isActive) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    }
    
    function openMobileMenu() {
        navMenu.classList.add('active');
        overlay.classList.add('active');
        mobileToggle.classList.add('active');
        body.style.overflow = 'hidden';
        
        // Focus management for accessibility
        const firstLink = navMenu.querySelector('a');
        if (firstLink) {
            setTimeout(() => firstLink.focus(), 100);
        }
    }
    
    function closeMobileMenu() {
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        mobileToggle.classList.remove('active');
        body.style.overflow = '';
        
        // Return focus to toggle button
        mobileToggle.focus();
    }
    
    // Handle clicking outside menu
    document.addEventListener('click', function(e) {
        const isClickInsideNav = navMenu.contains(e.target);
        const isClickOnToggle = mobileToggle.contains(e.target);
        
        if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });
}

// Initialize navigation highlighting
function initializeNavigation() {
    // Get current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Highlight current page in navigation
    setTimeout(() => {
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                link.classList.add('active');
            }
        });
    }, 100);
}

// Initialize smooth scrolling for anchor links
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.site-header')?.offsetHeight || 0;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize scroll spy for navigation highlighting
function initializeScrollSpy() {
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// Initialize all forms
function initializeForms() {
    // Add form validation styling
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearError);
    });
}

// Initialize appointment form
function initializeAppointmentForm() {
    const appointmentForm = document.getElementById('appointmentForm');
    if (!appointmentForm) return;

    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    const dateInputs = appointmentForm.querySelectorAll('input[type="date"]');
    dateInputs.forEach(input => {
        input.setAttribute('min', today);
    });

    // Form submission
    appointmentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateAppointmentForm()) {
            submitAppointmentForm();
        }
    });

    // Dynamic form updates
    const patientTypeSelect = document.getElementById('patientType');
    
    if (patientTypeSelect) {
        patientTypeSelect.addEventListener('change', updateServiceOptions);
    }
}

// Initialize contact form
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateContactForm()) {
            submitContactForm();
        }
    });
}

// Update service options based on patient type
function updateServiceOptions() {
    const patientType = document.getElementById('patientType').value;
    const serviceSelect = document.getElementById('serviceType');
    
    if (!serviceSelect) return;
    
    // Clear current options except the first one
    while (serviceSelect.children.length > 1) {
        serviceSelect.removeChild(serviceSelect.lastChild);
    }
    
    let services = [];
    
    if (patientType === 'new') {
        services = [
            { value: 'consultation', text: 'New Patient Consultation' },
            { value: 'cleaning', text: 'Comprehensive Exam & Cleaning' },
            { value: 'emergency', text: 'Emergency/Pain' }
        ];
    } else if (patientType === 'existing') {
        services = [
            { value: 'cleaning', text: 'Routine Cleaning & Exam' },
            { value: 'filling', text: 'Dental Filling' },
            { value: 'crown', text: 'Crown/Bridge' },
            { value: 'whitening', text: 'Teeth Whitening' },
            { value: 'emergency', text: 'Emergency/Pain' },
            { value: 'cosmetic', text: 'Cosmetic Consultation' },
            { value: 'other', text: 'Other (specify in notes)' }
        ];
    }
    
    services.forEach(service => {
        const option = document.createElement('option');
        option.value = service.value;
        option.textContent = service.text;
        serviceSelect.appendChild(option);
    });
}

// Validate appointment form
function validateAppointmentForm() {
    let isValid = true;
    const requiredFields = [
        'firstName', 'lastName', 'email', 'phone', 
        'patientType', 'serviceType', 'preferredDate', 'preferredTime'
    ];
    
    requiredFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field && !field.value.trim()) {
            showError(field, 'This field is required');
            isValid = false;
        }
    });
    
    // Validate email
    const email = document.getElementById('email');
    if (email && email.value && !isValidEmail(email.value)) {
        showError(email, 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate phone
    const phone = document.getElementById('phone');
    if (phone && phone.value && !isValidPhone(phone.value)) {
        showError(phone, 'Please enter a valid phone number');
        isValid = false;
    }
    
    // Validate consent checkbox
    const consent = document.getElementById('consent');
    if (consent && !consent.checked) {
        showError(consent, 'You must agree to the terms and conditions');
        isValid = false;
    }
    
    return isValid;
}

// Validate contact form
function validateContactForm() {
    let isValid = true;
    const requiredFields = ['firstName', 'lastName', 'email', 'subject', 'message'];
    
    requiredFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field && !field.value.trim()) {
            showError(field, 'This field is required');
            isValid = false;
        }
    });
    
    // Validate email
    const email = document.getElementById('email');
    if (email && email.value && !isValidEmail(email.value)) {
        showError(email, 'Please enter a valid email address');
        isValid = false;
    }
    
    return isValid;
}

// Validate individual field
function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    // Clear previous errors
    clearError(e);
    
    // Check required fields
    if (field.hasAttribute('required') && !value) {
        showError(field, 'This field is required');
        return false;
    }
    
    // Validate email
    if (field.type === 'email' && value && !isValidEmail(value)) {
        showError(field, 'Please enter a valid email address');
        return false;
    }
    
    // Validate phone
    if (field.type === 'tel' && value && !isValidPhone(value)) {
        showError(field, 'Please enter a valid phone number');
        return false;
    }
    
    return true;
}

// Submit appointment form
function submitAppointmentForm() {
    const form = document.getElementById('appointmentForm');
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.textContent = 'Booking Appointment...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Show success message
        showSuccessMessage('Appointment request submitted successfully! We\'ll contact you within 24 hours to confirm.');
        
        // Reset form
        form.reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
}

// Submit contact form
function submitContactForm() {
    const form = document.getElementById('contactForm');
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.textContent = 'Sending Message...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Show success message
        showSuccessMessage('Message sent successfully! We\'ll get back to you within 24 hours.');
        
        // Reset form
        form.reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
}

// Show error message
function showError(field, message) {
    // Remove existing error
    clearError({ target: field });
    
    // Add error class
    field.classList.add('error');
    field.style.borderColor = '#e74c3c';
    
    // Create error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.color = '#e74c3c';
    errorDiv.style.fontSize = '14px';
    errorDiv.style.marginTop = '5px';
    
    // Insert error message
    field.parentNode.appendChild(errorDiv);
}

// Clear error message
function clearError(e) {
    const field = e.target;
    field.classList.remove('error');
    field.style.borderColor = '#e9ecef';
    
    const errorMsg = field.parentNode.querySelector('.error-message');
    if (errorMsg) {
        errorMsg.remove();
    }
}

// Show success message
function showSuccessMessage(message) {
    // Create success banner
    const successDiv = document.createElement('div');
    successDiv.className = 'success-banner';
    successDiv.innerHTML = `
        <div class="container">
            <div style="background: #2ECC71; color: white; padding: 20px; border-radius: 10px; text-align: center; font-weight: 600;">
                ✅ ${message}
            </div>
        </div>
    `;
    
    // Insert at top of page
    document.body.insertBefore(successDiv, document.body.firstChild);
    
    // Remove after 5 seconds
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Phone validation
function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    const cleanPhone = phone.replace(/[\s\-\(\)\.]/g, '');
    return phoneRegex.test(cleanPhone) && cleanPhone.length >= 10;
}

// Utility function to format phone number as user types
function formatPhoneNumber(input) {
    const value = input.value.replace(/\D/g, '');
    const formattedValue = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    input.value = formattedValue;
}

// Add phone formatting to phone inputs
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const phoneInputs = document.querySelectorAll('input[type="tel"]');
        phoneInputs.forEach(input => {
            input.addEventListener('input', function() {
                formatPhoneNumber(this);
            });
        });
    }, 500);
});

// Intersection Observer for animations
function initializeAnimations() {
    const animatedElements = document.querySelectorAll('.service-card, .feature-item, .testimonial-card, .team-member');
    
    if (animatedElements.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Handle emergency banner clicks for analytics
document.addEventListener('click', function(e) {
    if (e.target.matches('.emergency-btn, .emergency-call-btn')) {
        console.log('Emergency button clicked');
    }
});

// Export functions for potential external use
window.SmilesDental = {
    validateEmail: isValidEmail,
    validatePhone: isValidPhone,
    formatPhoneNumber: formatPhoneNumber,
    showSuccessMessage: showSuccessMessage,
    showError: showError,
    clearError: clearError,
    toggleMobileMenu: function() {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        if (mobileToggle) {
            mobileToggle.click();
        }
    }
};