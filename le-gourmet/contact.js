  // Animation au scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observer les éléments avec animation
        document.querySelectorAll('.fade-in').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.8s ease';
            observer.observe(el);
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.main-nav');
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(255,255,255,0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
            } else {
                navbar.style.background = 'rgba(255,255,255,0.95)';
                navbar.style.boxShadow = 'none';
            }
        });

        // Contact Form Handling
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            const submitBtn = document.querySelector('.btn-submit');
            const originalText = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
            submitBtn.disabled = true;
            
            // Simulate API call delay
            setTimeout(() => {
                // Show success message
                document.getElementById('successMessage').style.display = 'block';
                
                // Reset form
                this.reset();
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Scroll to success message
                document.getElementById('successMessage').scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    document.getElementById('successMessage').style.display = 'none';
                }, 5000);
                
            }, 2000);
        });

        // Form validation styling
        document.querySelectorAll('.form-control').forEach(input => {
            input.addEventListener('blur', function() {
                if (this.hasAttribute('required') && !this.value.trim()) {
                    this.style.borderColor = '#dc3545';
                } else {
                    this.style.borderColor = '#e0e0e0';
                }
            });
            
            input.addEventListener('focus', function() {
                this.style.borderColor = 'var(--primary-gold)';
            });
        });

        // Phone number formatting
        document.getElementById('telephone').addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0) {
                if (value.length <= 2) {
                    value = value;
                } else if (value.length <= 5) {
                    value = value.substring(0, 2) + '.' + value.substring(2);
                } else if (value.length <= 7) {
                    value = value.substring(0, 2) + '.' + value.substring(2, 5) + '.' + value.substring(5);
                } else {
                    value = value.substring(0, 2) + '.' + value.substring(2, 5) + '.' + value.substring(5, 7) + '.' + value.substring(7, 9);
                }
            }
            e.target.value = value;
        });

        // Smooth scrolling for internal links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Auto-resize textarea
        document.getElementById('message').addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = this.scrollHeight + 'px';
        });

        // Add some interactivity to info cards
        document.querySelectorAll('.info-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px)';
                this.style.boxShadow = '0 20px 50px rgba(0,0,0,0.2)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 15px 40px rgba(0,0,0,0.15)';
            });
        });

        // Form field focus effects
        document.querySelectorAll('.form-control').forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.style.transform = 'scale(1.02)';
                this.parentElement.style.transition = 'transform 0.2s ease';
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'scale(1)';
            });
        });