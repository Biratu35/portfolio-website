// === AOS Init ===
        AOS.init({
            duration: 1000,
            once: true
        });

        // === Hamburger Menu Toggle ===
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        // const mobileOverlay = document.getElementById('mobile-overlay'); // Uncomment if you add a mobile overlay div

        hamburger.addEventListener('click', () => {
            const expanded = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', String(!expanded));
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            // mobileOverlay.classList.toggle('active'); // Uncomment if you use the overlay
        });

        // === Close nav on link click (mobile) ===
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    hamburger.click();
                }
            });
        });

        // === Dark Mode Toggle ===
        const darkToggle = document.getElementById('dark-toggle');

        darkToggle.addEventListener('click', () => {
            const isDark = document.body.classList.toggle('dark');
            darkToggle.innerHTML = isDark ? '☀️ Light' : '🌙 Dark';
            darkToggle.setAttribute('aria-pressed', String(isDark));
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });

        // === Load saved theme on startup ===
        window.addEventListener('load', () => {
            const isDark = localStorage.getItem('theme') === 'dark';
            if (isDark) {
                document.body.classList.add('dark');
                darkToggle.innerHTML = '☀️ Light';
                darkToggle.setAttribute('aria-pressed', 'true');
            } else {
                darkToggle.innerHTML = '🌙 Dark';
            }

            // Typing effect (Welcome Message)
            const welcomeEl = document.querySelector('#welcome-section h1');
            const text = "Hi, I'm Biratu Lemessa";
            if (welcomeEl) { // Check if element exists before typing effect
                welcomeEl.textContent = '';
                let i = 0;
                function typing() {
                    if (i < text.length) {
                        welcomeEl.textContent += text.charAt(i);
                        i++;
                        setTimeout(typing, 80);
                    }
                }
                typing();
            }
        });

        // === Scroll to Top Button ===
        const scrollBtn = document.getElementById('scrollToTop');

        window.addEventListener('scroll', () => {
            scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
        });

        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
