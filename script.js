document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        en: {
            navAbout: "About",
            navProjects: "Projects",
            navServices: "Services",
            navFaq: "FAQ",
            contactMe: "Contact Me",
            navAboutMobile: "About",
            navProjectsMobile: "Projects",
            navServicesMobile: "Services",
            navFaqMobile: "FAQ",
            homeGreeting: "Hello, I'm",
            homeSubtitle: "I'm passionate about creating modern and intuitive digital experiences.",
            homeButton: "View My Portfolio",
            aboutTitle: "About Me",
            aboutJourneyTitle: "My Journey in the Digital World",
            aboutDesc1: "With dual expertise in UI/UX Design and Web Development, I can transform user needs into intuitive interface designs using Figma, while also realizing them into responsive websites with HTML, CSS, and JavaScript.",
            aboutDesc2: "As a passionate new talent, I am ready to contribute and grow professionally to create user-centered and solution-oriented digital products.",
            aboutCVButton: "View My CV",
            skillsTitle: "My Skills",
            processTitle: "My Work Process",
            process1Title: "Discovery",
            process1Desc: "Understanding the project's goals, target audience, and scope.",
            process2Title: "Design",
            process2Desc: "Creating wireframes, prototypes, and appealing UI designs.",
            process3Title: "Development",
            process3Desc: "Translating designs into clean and functional code.",
            process4Title: "Deployment",
            process4Desc: "Testing, launching, and maintaining the application for optimal performance.",
            projectsTitle: "Featured Projects",
            projectsSubtitle: "Some of the works I have created.",
            project1Title: "Regional Language Translation",
            project2Title: "Truth or Dare Roulette",
            project3Title: "Decision Support System",
            project4Title: "Company Profile",
            project5Title: "Admin Dashboard",
            project6Title: "Digital Lottery",
            project7Title: "Digital Wedding Invitation",
            project1Desc: "A website for the introduction and translation of Central Kalimantan's regional languages.",
            project2Desc: "A roulette website for playing Truth or Dare when gathering with friends.",
            project3Desc: "A website to assist in the decision-making process using the Simple Additive Weighting method.",
            project4Desc: "An inspirational website for creating a company profile.",
            project5Desc: "An inspirational website for creating an admin dashboard to manage a company profile.",
            project6Desc: "An online lottery website to help draw numbers randomly and fairly.",
            project7Desc: "A digital wedding invitation website.",
            servicesTitle: "Featured Services",
            service1Title: "UI/UX Design",
            service1Desc: "Designing attractive, intuitive, and user-friendly interfaces.",
            service2Title: "Web Development",
            service2Desc: "Building responsive, fast, and functional websites.",
            service3Title: "Mobile App Design",
            service3Desc: "Designing mobile app prototypes ready for development.",
            faqTitle: "Frequently Asked Questions (FAQ)",
            faq1Question: "How long does it take to complete a website project?",
            faq1Answer: "The project timeline varies greatly depending on its complexity. A simple company profile website usually takes 2-4 weeks. More complex projects like e-commerce stores or custom web applications can take longer.",
            faq2Question: "What technologies do you use?",
            faq2Answer: "I primarily use Figma for UI/UX Design. for development, I am proficient in HTML, CSS, JavaScript and modern frameworks like Tailwind CSS. I am always learning and adapting to the latest technologies to deliver the best results.",
            faq3Question: "Do you provide website maintenance services?",
            faq3Answer: "Yes, I offer website maintenance packages after the project is completed. This includes security updates, regular backups and minor content updates to ensure your website remains optimal and secure.",
            contactTitle: "Contact Me",
            contactSubtitle: "Feel free to reach out to me.",
            phoneTitle: "Phone",
            addressTitle: "Address",
            addressContent: "Jl. Panglima Batur, Buntok, <br>Central Kalimantan, Indonesia.",
            footerRights: "All Rights Reserved.",
            chatTitle: "Virtual Assistant",
            chatPlaceholder: "Type a message...",
            chatTemplate1: "What are your services?",
            chatTemplate2: "What's your work process?",
            chatTemplate3: "Project price info",
            chatTemplate4: "Show me the portfolio",
            chatGreeting: "Hello! I'm Ron's virtual assistant. How can I help you?",
            botGreeting: ["Hello! I'm Ron's virtual assistant. Anything I can help with regarding this portfolio?", "Hi! Welcome. I can help answer questions about Ron's services, projects, or skills."],
            botServices: ["Ron offers three main services: <strong>UI/UX Design</strong> to create engaging designs, <strong>Web Development</strong> to build websites, and <strong>Mobile App Design</strong>. Which one are you most interested in?"],
            botPrice: ["Every project is unique, so the cost varies. For an accurate price quote, the best way is to <a href='#contact' class='text-sky-400 underline'>contact Ron</a> directly to discuss your project details."],
            botProcess: ["Of course! Ron's work process is highly structured: it starts with <strong>1. Discovery</strong> (understanding needs), <strong>2. Design</strong> (creating mockups), <strong>3. Development</strong> (coding), and finally <strong>4. Deployment</strong> (launch). This process ensures quality results."],
            botTime: ["Project duration depends on complexity. A simple website like a company profile usually takes about 2-4 weeks. More complex projects will naturally take longer. A more detailed discussion will provide a more accurate estimate."],
            botTech: ["Ron is skilled in various modern technologies. For design, he uses <strong>Figma</strong>. For development, he is proficient in <strong>HTML, CSS, JavaScript,</strong> and <strong>Tailwind CSS</strong>. You can see his skill icons in the 'About Me' section."],
            botProjects: ["You can see some of Ron's best projects in the 'Featured Projects' section. Just click on an image to see the details. Is there a specific type of project you'd like to see?"],
            botContact: ["Sure! You can contact Ron via email at <a href='mailto:rdwiaa0@gmail.com' class='text-sky-400 underline'>rdwiaa0@gmail.com</a> or by phone. All his contact information is at the bottom of this page."],
            botAbout: ["Ron is a UI/UX Designer and Web Developer who is passionate about creating intuitive and modern digital experiences. He combines design and technical skills to produce high-quality digital products."],
            botMood: ["Doing great, thanks for asking! I'm ready to help you find the information you need in this portfolio. What can I do for you?"],
            botThanks: ["You're welcome! Glad I could help.", "My pleasure! Feel free to ask again if you have more questions.", "Alright, I'm here if you need more help."],
            botCV: ["Of course, you can download or view Ron's full CV by clicking the 'View My CV' button in the 'About Me' section. It will open the CV in a new tab."],
            botFallback: ["Sorry, I didn't understand that question. Perhaps you could try asking about 'services', 'projects', or 'technology'?", "Hmm, that's beyond my scope. I can help explain Ron's portfolio. Is there anything specific you'd like to know?", "I'm still learning. For now, I can only answer questions about this portfolio. Try asking about the 'work process', for example.", "I couldn't find an answer for that. Try asking something more specific about the UI/UX or Web Development services offered by Ron."],
            typedStrings: ['Ron', 'Web Developer', 'UI/UX Designer']
        },
        id: {
            navAbout: "Tentang",
            navProjects: "Proyek",
            navServices: "Layanan",
            navFaq: "FAQ",
            contactMe: "Hubungi Saya",
            navAboutMobile: "Tentang",
            navProjectsMobile: "Proyek",
            navServicesMobile: "Layanan",
            navFaqMobile: "FAQ",
            homeGreeting: "Halo, Saya",
            homeSubtitle: "Saya bersemangat dalam menciptakan pengalaman digital yang modern dan intuitif.",
            homeButton: "Lihat Portofolio Saya",
            aboutTitle: "Tentang Saya",
            aboutJourneyTitle: "Perjalanan Saya di Dunia Digital",
            aboutDesc1: "Saya memiliki keahlian ganda di bidang UI/UX Design dan Web Development, saya mampu mengubah kebutuhan pengguna menjadi desain antarmuka yang intuitif menggunakan Figma, sekaligus mampu merealisasikannya menjadi situs web yang responsif dengan HTML, CSS dan JavaScript.",
            aboutDesc2: "Sebagai talenta baru yang bersemangat, Saya siap berkontribusi dan bertumbuh secara profesional untuk menciptakan produk digital yang solutif dan berpusat pada pengguna.",
            aboutCVButton: "Lihat CV Saya",
            skillsTitle: "Keahlian Saya",
            processTitle: "Proses Kerja Saya",
            process1Title: "Penemuan",
            process1Desc: "Memahami tujuan, target audiens dan ruang lingkup proyek.",
            process2Title: "Desain",
            process2Desc: "Membuat wireframe, prototipe dan desain UI yang menarik.",
            process3Title: "Pengembangan",
            process3Desc: "Menerjemahkan desain menjadi kode yang bersih dan fungsional.",
            process4Title: "Penerapan",
            process4Desc: "Menguji, meluncurkan dan memelihara aplikasi untuk kinerja optimal.",
            projectsTitle: "Proyek Unggulan",
            projectsSubtitle: "Beberapa karya yang pernah saya buat.",
            project1Title: "Terjemahan Bahasa Daerah",
            project2Title: "Truth or Dare Roullete",
            project3Title: "Sistem Pendukung Keputusan",
            project4Title: "Company Profile",
            project5Title: "Dashboard Admin",
            project6Title: "Undian Digital",
            project7Title: "Undangan Pernikahan Digital",
            project1Desc: "Website Pengenalan dan Terjemahan Bahasa Daerah Kalimantan Tengah.",
            project2Desc: "Website untuk Roullete dalam bermain Truth or Dare disaat sedang berkumpul dengan teman-teman.",
            project3Desc: "Website untuk membantu proses pengambilan keputusan dengan metode Simple Additive Weighting.",
            project4Desc: "Website inspirasi dalam membuat profil perusahaan",
            project5Desc: "Website inspirasi dalam membuat dashboard admin untuk mengelola profil perusahaan",
            project6Desc: "Website undian online untuk membantu mengundi nomor secara acak dengan adil",
            project7Desc: "Website undangan pernikahan digital",
            servicesTitle: "Layanan Unggulan",
            service1Title: "UI/UX Design",
            service1Desc: "Merancang antarmuka yang menarik, intuitif dan ramah pengguna.",
            service2Title: "Web Development",
            service2Desc: "Membangun website yang responsif, cepat dan fungsional.",
            service3Title: "Mobile App Design",
            service3Desc: "Desain prototipe aplikasi mobile yang siap untuk dikembangkan.",
            faqTitle: "Pertanyaan Umum (FAQ)",
            faq1Question: "Berapa lama waktu pengerjaan sebuah proyek website?",
            faq1Answer: "Waktu pengerjaan sangat bervariasi tergantung pada kompleksitas proyek. Untuk website profil perusahaan sederhana, biasanya memakan waktu 2-4 minggu. Proyek yang lebih kompleks seperti toko online atau aplikasi web kustom bisa memakan waktu lebih lama.",
            faq2Question: "Teknologi apa saja yang Anda gunakan?",
            faq2Answer: "Saya utamanya menggunakan Figma untuk UI/UX Design. Untuk pengembangan, saya ahli dalam HTML, CSS, JavaScript dan framework modern seperti Tailwind CSS. Saya selalu belajar dan beradaptasi dengan teknologi terbaru untuk memberikan hasil terbaik.",
            faq3Question: "Apakah Anda menyediakan layanan pemeliharaan website?",
            faq3Answer: "Ya, saya menawarkan paket pemeliharaan website setelah proyek selesai. Ini termasuk pembaruan keamanan, backup rutin dan pembaruan konten minor untuk memastikan website Anda tetap berjalan optimal dan aman.",
            contactTitle: "Hubungi Saya",
            contactSubtitle: "Jangan ragu untuk menjangkau saya.",
            phoneTitle: "Telepon",
            addressTitle: "Alamat",
            addressContent: "Jl. Panglima Batur, Buntok, <br>Kalimantan Tengah, Indonesia.",
            footerRights: "Semua Hak Dilindungi.",
            chatTitle: "Asisten Virtual",
            chatPlaceholder: "Ketik pesan...",
            chatTemplate1: "Apa saja layanannya?",
            chatTemplate2: "Bagaimana proses kerjanya?",
            chatTemplate3: "Info harga proyek",
            chatTemplate4: "Lihat portofolio",
            chatGreeting: "Halo! Saya asisten virtual Ron. Ada yang bisa saya bantu?",
            botGreeting: ["Halo! Saya asisten virtual Ron. Ada yang bisa saya bantu terkait portofolio ini?", "Hai! Selamat datang. Saya bisa bantu jawab pertanyaan seputar layanan, proyek, atau keahlian Ron."],
            botServices: ["Ron menawarkan tiga layanan utama: <strong>UI/UX Design</strong> untuk membuat desain yang menarik, <strong>Web Development</strong> untuk membangun website, dan <strong>Desain Aplikasi Mobile</strong>. Mana yang paling menarik bagi Anda?"],
            botPrice: ["Setiap proyek itu unik, jadi biayanya juga bervariasi. Untuk mendapatkan penawaran harga yang akurat, cara terbaik adalah dengan <a href='#contact' class='text-sky-400 underline'>menghubungi Ron</a> langsung dan mendiskusikan detail proyek Anda."],
            botProcess: ["Tentu! Proses kerja Ron sangat terstruktur: dimulai dari <strong>1. Penemuan</strong> (memahami kebutuhan), <strong>2. Desain</strong> (membuat mockup), <strong>3. Pengembangan</strong> (coding), dan terakhir <strong>4. Penerapan</strong> (peluncuran). Proses ini memastikan hasil yang berkualitas."],
            botTime: ["Durasi proyek tergantung kompleksitasnya. Website sederhana seperti profil perusahaan biasanya sekitar 2-4 minggu. Untuk proyek yang lebih rumit, tentu akan memakan waktu lebih lama. Diskusi lebih lanjut akan memberikan estimasi yang lebih akurat."],
            botTech: ["Ron sangat terampil menggunakan berbagai teknologi modern. Untuk desain, ia menggunakan <strong>Figma</strong>. Untuk pengembangan, ia ahli dalam <strong>HTML, CSS, JavaScript,</strong> dan <strong>Tailwind CSS</strong>. Anda bisa lihat ikon keahliannya di bagian 'Tentang Saya'."],
            botProjects: ["Anda bisa melihat beberapa proyek terbaik Ron di bagian 'Proyek Unggulan'. Cukup klik pada gambar untuk melihat detailnya. Apakah ada jenis proyek tertentu yang ingin Anda lihat?"],
            botContact: ["Tentu! Anda bisa menghubungi Ron melalui email di <a href='mailto:rdwiaa0@gmail.com' class='text-sky-400 underline'>rdwiaa0@gmail.com</a> atau telepon. Semua informasi kontaknya ada di bagian paling bawah halaman ini."],
            botAbout: ["Ron adalah seorang UI/UX Designer dan Web Developer yang bersemangat dalam menciptakan pengalaman digital yang intuitif dan modern. Ia menggabungkan keahlian desain dan teknis untuk menghasilkan produk digital berkualitas."],
            botMood: ["Kabar baik, terima kasih sudah bertanya! Saya siap membantu Anda menemukan informasi yang Anda butuhkan di portofolio ini. Ada yang bisa saya bantu?"],
            botThanks: ["Sama-sama! Senang bisa membantu.", "Dengan senang hati! Jika ada pertanyaan lain, jangan ragu untuk bertanya lagi.", "Baik, jika butuh bantuan lagi, saya selalu ada di sini."],
            botCV: ["Tentu, Anda bisa mengunduh atau melihat CV lengkap Ron dengan mengklik tombol 'Lihat CV Saya' di bagian 'Tentang Saya'. Tombol tersebut akan membuka CV di tab baru."],
            botFallback: ["Maaf, saya belum mengerti pertanyaan itu. Mungkin Anda bisa mencoba bertanya tentang 'layanan', 'proyek', atau 'teknologi'?", "Hmm, itu di luar jangkauan saya. Saya bisa bantu jelaskan tentang portofolio Ron. Ada yang spesifik ingin Anda tahu?", "Saya masih dalam tahap belajar. Untuk saat ini, saya hanya bisa menjawab pertanyaan seputar portofolio ini. Coba tanyakan tentang 'proses kerja', misalnya.", "Saya tidak menemukan jawaban untuk itu. Coba tanyakan sesuatu yang lebih spesifik terkait UI/UX atau Web Development yang ditawarkan Ron."],
            typedStrings: ['Ron', 'Web Developer', 'UI/UX Designer']
        }
    };

    let currentLang = localStorage.getItem('lang') || 'id';
    let typed;

    const projectsData = {
        1: { imgSrc: "img/proyek1.png", tags: ["JavaScript", "HTML", "CSS"], liveLink: "https://kylorond.github.io/mochi-bombshell", repoLink: "https://github.com/kylorond/mochi-bombshell" },
        2: { imgSrc: "img/proyek2.png", tags: ["JavaScript", "Tailwindcss", "HTML"], liveLink: "https://kylorond.github.io/bajat", repoLink: "https://github.com/kylorond/bajat" },
        3: { imgSrc: "img/proyek3.png", tags: ["JavaScript", "Tailwindcss", "HTML"], liveLink: "https://kylorond.github.io/panguluh", repoLink: "https://github.com/kylorond/panguluh" },
        4: { imgSrc: "img/proyek4.png", tags: ["JavaScript", "Alpine.js", "Tailwindcss", "HTML"], liveLink: "https://kylorond.github.io/baronnn", repoLink: "https://github.com/kylorond/baronnn" },
        5: { imgSrc: "img/proyek5.png", tags: ["JavaScript", "Alpine.js", "Tailwindcss", "HTML"], liveLink: "https://kylorond.github.io/deloren", repoLink: "https://github.com/kylorond/deloren" },
        6: { imgSrc: "img/proyek6.png", tags: ["JavaScript", "Tailwindcss", "HTML"], liveLink: "https://kylorond.github.io/latveria", repoLink: "https://github.com/kylorond/latveria" },
        7: { imgSrc: "img/proyek7.png", tags: ["JavaScript", "Tailwindcss", "HTML"], liveLink: "https://kylorond.github.io/Ronal", repoLink: "https://github.com/kylorond/Ronal" },
    };

    const particlesConfig = { "particles": { "number": { "value": 30, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle" }, "opacity": { "value": 0.3, "random": true }, "size": { "value": 2, "random": true }, "line_linked": { "enable": false }, "move": { "enable": true, "speed": 1, "direction": "none", "random": true, "straight": false, "out_mode": "out" } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false }, "onclick": { "enable": false } } }, "retina_detect": true };

    feather.replace();

    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const sunIcon = themeToggle.querySelector('.icon-sun');
    const moonIcon = themeToggle.querySelector('.icon-moon');

    const applyTheme = (theme) => {
        if (theme === 'light') {
            body.classList.add('light-mode');
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
            particlesConfig.particles.color.value = '#475569';
        } else {
            body.classList.remove('light-mode');
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
            particlesConfig.particles.color.value = '#ffffff';
        }
        if (document.getElementById('particles-js')) {
            particlesJS('particles-js', particlesConfig);
        }
    };

    themeToggle.addEventListener('click', () => {
        const newTheme = body.classList.contains('light-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });
    
    const langToggle = document.getElementById('lang-toggle');

    const setLanguage = (lang) => {
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.dataset.translate;
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        
        document.documentElement.lang = lang;
        langToggle.textContent = lang === 'id' ? 'EN' : 'ID';

        if (typed) typed.destroy();
        const typedStrings = translations[lang].typedStrings || ['Ron', 'Web Developer', 'UI/UX Designer'];
        typed = new Typed('#typed-name', { strings: typedStrings, typeSpeed: 70, backSpeed: 40, loop: true, backDelay: 2000 });
        
        document.getElementById('chat-input').placeholder = translations[lang].chatPlaceholder;
        const firstMessage = chatMessages.querySelector('.chat-message.bot');
        if (firstMessage && firstMessage.textContent) {
           firstMessage.innerHTML = translations[lang].chatGreeting;
        }
        updateChatTemplates(lang);
    };

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'id' ? 'en' : 'id';
        localStorage.setItem('lang', currentLang);
        setLanguage(currentLang);
    });

    const canvas = document.getElementById('ambient-canvas');
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let circles = [];

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    class Circle {
        constructor(x, y, radius, color) {
            this.x = x; this.y = y; this.radius = radius; this.color = color;
            this.dx = (Math.random() - 0.5) * 0.2;
            this.dy = (Math.random() - 0.5) * 0.2;
        }
        draw() {
            ctx.beginPath();
            const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
            gradient.addColorStop(0, this.color);
            gradient.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = gradient;
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        }
        update() {
            if (this.x + this.radius > width || this.x - this.radius < 0) this.dx = -this.dx;
            if (this.y + this.radius > height || this.y - this.radius < 0) this.dy = -this.dy;
            this.x += this.dx; this.y += this.dy;
            this.draw();
        }
    }

    function initAmbient() {
        circles.push(new Circle(Math.random() * width, Math.random() * height, Math.random() * 400 + 200, 'rgba(56, 189, 248, 0.5)'));
        circles.push(new Circle(Math.random() * width, Math.random() * height, Math.random() * 400 + 200, 'rgba(139, 92, 246, 0.5)'));
    }

    function animateAmbient() {
        requestAnimationFrame(animateAmbient);
        ctx.clearRect(0, 0, width, height);
        circles.forEach(circle => circle.update());
    }

    initAmbient();
    animateAmbient();

    const cursorDot = document.querySelector(".cursor-dot");
    const cursorOutline = document.querySelector(".cursor-outline");

    window.addEventListener("mousemove", (e) => {
        const posX = e.clientX; const posY = e.clientY;
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        cursorOutline.animate({ left: `${posX}px`, top: `${posY}px` }, { duration: 500, fill: "forwards" });
        if (e.target.closest('a, button, [onclick]')) {
            cursorOutline.classList.add('cursor-interact');
        } else {
            cursorOutline.classList.remove('cursor-interact');
        }
    });
    
    const animatedElements = document.querySelectorAll('.reveal-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    animatedElements.forEach(el => observer.observe(el));
    
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    
    window.openModal = function(projectId) {
        const data = projectsData[projectId];
        if (!data) return;
        
        const titleKey = `project${projectId}Title`;
        const descKey = `project${projectId}Desc`;
        const title = translations[currentLang][titleKey];
        const description = translations[currentLang][descKey];

        modalContent.innerHTML = `
            <div class="relative">
                <button onclick="closeModal()" class="absolute top-4 right-4 text-gray-400 hover:text-white z-10 p-2 bg-black/20 rounded-full">
                    <i data-feather="x" class="w-6 h-6"></i>
                </button>
                <img src="${data.imgSrc}" alt="${title}" class="w-full h-56 md:h-72 object-cover rounded-t-lg" loading="lazy">
                <div class="p-6 md:p-8">
                    <h3 class="text-3xl font-bold mb-4 text-white">${title}</h3>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${data.tags.map(tag => `<span class="modal-tag text-sm font-semibold px-3 py-1 rounded-full">${tag}</span>`).join('')}
                    </div>
                    <p class="text-gray-400 leading-relaxed mb-6">${description}</p>
                    <div class="flex flex-wrap gap-4">
                        <a href="${data.liveLink}" target="_blank" class="bg-sky-600 hover:bg-sky-700 text-white font-medium py-2 px-5 rounded-lg inline-flex items-center gap-2 transition-colors btn-shimmer">
                            <i data-feather="external-link" class="w-4 h-4"></i> Lihat Live
                        </a>
                        <a href="${data.repoLink}" target="_blank" class="bg-gray-600 hover:bg-gray-500 text-white font-medium py-2 px-5 rounded-lg inline-flex items-center gap-2 transition-colors">
                            <i data-feather="github" class="w-4 h-4"></i> Lihat Repository
                        </a>
                    </div>
                </div>
            </div>`;
        feather.replace();
        modal.classList.remove('opacity-0', 'pointer-events-none');
        document.body.style.overflow = 'hidden';
        modalContent.classList.remove('scale-95');
    }

    window.closeModal = function() {
        modal.classList.add('opacity-0');
        modalContent.classList.add('scale-95');
        setTimeout(() => {
            modal.classList.add('pointer-events-none');
            document.body.style.overflow = 'auto';
        }, 250);
    }

    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');
            faqItems.forEach(i => i.classList.remove('open'));
            if (!isOpen) {
                item.classList.add('open');
            }
        });
    });

    const chatBubble = document.getElementById('chat-bubble');
    const chatWindow = document.getElementById('chat-window');
    const closeChatBtn = document.getElementById('close-chat-btn');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');
    const chatTemplates = document.getElementById('chat-templates');
    
    const toggleChat = () => {
        const isOpen = chatWindow.classList.toggle('open');
        if (isOpen) {
            chatInput.focus();
        }
    };

    chatBubble.addEventListener('click', toggleChat);
    closeChatBtn.addEventListener('click', toggleChat);

    const addMessage = (message, sender) => {
        const messageEl = document.createElement('div');
        messageEl.className = `chat-message ${sender}`;
        messageEl.innerHTML = message;
        chatMessages.appendChild(messageEl);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        return messageEl;
    }

    const showTypingIndicator = () => {
        const typingEl = document.createElement('div');
        typingEl.className = 'chat-message typing';
        typingEl.innerHTML = '<span></span><span></span><span></span>';
        chatMessages.appendChild(typingEl);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        return typingEl;
    };

    const getBotResponse = (userInput) => {
        const normalizedInput = userInput.toLowerCase().trim();
        const lang = currentLang;
        const responseMap = [
            { patterns: [/halo|hai|hi|selamat (pagi|siang|sore|malam)/i], answers: translations[lang].botGreeting },
            { patterns: [/layanan|jasa|bisa buat apa|menawarkan apa/i], answers: translations[lang].botServices },
            { patterns: [/harga|biaya|tarif/i], answers: translations[lang].botPrice },
            { patterns: [/proses|tahapan|alur kerja/i], answers: translations[lang].botProcess },
            { patterns: [/berapa lama|waktu pengerjaan/i], answers: translations[lang].botTime },
            { patterns: [/teknologi|tools|keahlian|skill/i], answers: translations[lang].botTech },
            { patterns: [/proyek|portofolio|karya/i], answers: translations[lang].botProjects },
            { patterns: [/kontak|hubungi|nomor|email|sosial media|sosmed/i], answers: translations[lang].botContact },
            { patterns: [/siapa ron|tentang (anda|kamu|ron)|profil/i], answers: translations[lang].botAbout },
            { patterns: [/kabar|apa kabar/i], answers: translations[lang].botMood },
            { patterns: [/terima kasih|makasih|oke|baik|siap/i], answers: translations[lang].botThanks },
            { patterns: [/cv|riwayat hidup/i], answers: translations[lang].botCV }
        ];

        for (const item of responseMap) {
            for (const pattern of item.patterns) {
                if (pattern.test(normalizedInput)) {
                    return item.answers[Math.floor(Math.random() * item.answers.length)];
                }
            }
        }
        return translations[lang].botFallback[Math.floor(Math.random() * translations[lang].botFallback.length)];
    };

    const handleUserInput = (input) => {
        if (!input) return;
        addMessage(input, 'user');
        chatInput.value = '';
        chatTemplates.style.display = 'none';
        const typingIndicator = showTypingIndicator();
        setTimeout(() => {
            chatMessages.removeChild(typingIndicator);
            const botResponse = getBotResponse(input);
            addMessage(botResponse, 'bot');
        }, 1500);
    };

    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleUserInput(chatInput.value.trim());
    });

    function updateChatTemplates(lang) {
        const templates = [
            translations[lang].chatTemplate1,
            translations[lang].chatTemplate2,
            translations[lang].chatTemplate3,
            translations[lang].chatTemplate4,
        ];
        chatTemplates.innerHTML = '';
        templates.forEach(text => {
            const btn = document.createElement('button');
            btn.className = 'template-btn';
            btn.textContent = text;
            btn.onclick = () => handleUserInput(text);
            chatTemplates.appendChild(btn);
        });
    }

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const openIcon = document.getElementById('menu-open-icon');
    const closeIcon = document.getElementById('menu-close-icon');
    const menuLinks = mobileMenu.querySelectorAll('a');

    function toggleMenu() {
        mobileMenu.classList.toggle('translate-x-full');
        mobileMenu.classList.toggle('menu-open');
        openIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
        document.body.style.overflow = mobileMenu.classList.contains('menu-open') ? 'hidden' : 'auto';
    }

    mobileMenuButton.addEventListener('click', toggleMenu);
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('menu-open')) toggleMenu();
        });
    });

    const backToTopButton = document.getElementById('back-to-top');
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        const show = window.scrollY > 300;
        backToTopButton.classList.toggle('opacity-0', !show);
        backToTopButton.classList.toggle('pointer-events-none', !show);
        backToTopButton.classList.toggle('translate-y-4', !show);

        const isScrolled = window.scrollY > 50;
        header.classList.toggle('scrolled', isScrolled);
    });

    backToTopButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);
    setLanguage(currentLang);
    addMessage(translations[currentLang].chatGreeting, 'bot');
});
