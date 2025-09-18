document.addEventListener('DOMContentLoaded', () => {
    const projectsData = {
        1: { title: "Website Terjemahan Bahasa Daerah", imgSrc: "img/proyek1.png", tags: ["JavaScript", "HTML", "CSS"], description: "Website Pengenalan dan Terjemahan Bahasa Daerah Kalimantan Tengah.", liveLink: "#", repoLink: "#" },
        2: { title: "Website Truth or Dare Roullete", imgSrc: "img/proyek2.png", tags: ["JavaScript", "Tailwindcss", "HTML"], description: "Website untuk Roullete dalam bermain Truth or Dare disaat sedang berkumpul dengan teman-teman.", liveLink: "#", repoLink: "#" },
        3: { title: "Website Sistem Pendukung Keputusan", imgSrc: "img/proyek3.png", tags: ["JavaScript", "Tailwindcss", "HTML"], description: "Website untuk membantu proses pengambilan keputusan dengan metode Simple Additive Weighting.", liveLink: "#", repoLink: "#" },
        4: { title: "Company Profile", imgSrc: "img/proyek4.png", tags: ["JavaScript", "Alpine.js", "Tailwindcss", "HTML"], description: "Website inspirasi dalam membuat profil perusahaan", liveLink: "#", repoLink: "#" },
        5: { title: "Dashboard Admin", imgSrc: "img/proyek5.png", tags: ["JavaScript", "Alpine.js", "Tailwindcss", "HTML"], description: "Website inspirasi dalam membuat dashboard admin untuk mengelola profil perusahaan", liveLink: "#", repoLink: "#" },
        6: { title: "Undian Online", imgSrc: "img/proyek6.png", tags: ["JavaScript", "Tailwindcss", "HTML"], description: "Website undian online untuk membantu mengundi nomor secara acak dengan adil", liveLink: "#", repoLink: "#" },
    };

    feather.replace();

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

    particlesJS('particles-js', { "particles": { "number": { "value": 30, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle" }, "opacity": { "value": 0.3, "random": true }, "size": { "value": 2, "random": true }, "line_linked": { "enable": false }, "move": { "enable": true, "speed": 1, "direction": "none", "random": true, "straight": false, "out_mode": "out" } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false }, "onclick": { "enable": false } } }, "retina_detect": true });

    new Typed('#typed-name', { strings: ['Ron', 'Web Developer', 'UI/UX Designer'], typeSpeed: 70, backSpeed: 40, loop: true, backDelay: 2000 });

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
        modalContent.innerHTML = `
            <div class="relative">
                <button onclick="closeModal()" class="absolute top-4 right-4 text-gray-400 hover:text-white z-10 p-2 bg-black/20 rounded-full">
                    <i data-feather="x" class="w-6 h-6"></i>
                </button>
                <img src="${data.imgSrc}" alt="${data.title}" class="w-full h-56 md:h-72 object-cover rounded-t-lg" loading="lazy">
                <div class="p-6 md:p-8">
                    <h3 class="text-3xl font-bold mb-4 text-white">${data.title}</h3>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${data.tags.map(tag => `<span class="bg-gray-700 text-gray-300 text-sm font-semibold px-3 py-1 rounded-full">${tag}</span>`).join('')}
                    </div>
                    <p class="text-gray-400 leading-relaxed mb-6">${data.description}</p>
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
        const responseMap = [
            {
                patterns: [/halo|hai|hi|selamat (pagi|siang|sore|malam)/i],
                answers: [
                    "Halo! Saya asisten virtual Ron. Ada yang bisa saya bantu terkait portofolio ini?",
                    "Hai! Selamat datang. Saya bisa bantu jawab pertanyaan seputar layanan, proyek, atau keahlian Ron."
                ]
            },
            {
                patterns: [/layanan|jasa|bisa buat apa|menawarkan apa/i],
                answers: ["Ron menawarkan tiga layanan utama: <strong>UI/UX Design</strong> untuk membuat desain yang menarik, <strong>Web Development</strong> untuk membangun website, dan <strong>Desain Aplikasi Mobile</strong>. Mana yang paling menarik bagi Anda?"]
            },
            {
                patterns: [/harga|biaya|tarif/i],
                answers: ["Setiap proyek itu unik, jadi biayanya juga bervariasi. Untuk mendapatkan penawaran harga yang akurat, cara terbaik adalah dengan <a href='#contact' class='text-sky-400 underline'>menghubungi Ron</a> langsung dan mendiskusikan detail proyek Anda."]
            },
            {
                patterns: [/proses|tahapan|alur kerja/i],
                answers: ["Tentu! Proses kerja Ron sangat terstruktur: dimulai dari <strong>1. Penemuan</strong> (memahami kebutuhan), <strong>2. Desain</strong> (membuat mockup), <strong>3. Pengembangan</strong> (coding), dan terakhir <strong>4. Penerapan</strong> (peluncuran). Proses ini memastikan hasil yang berkualitas."]
            },
            {
                patterns: [/berapa lama|waktu pengerjaan/i],
                answers: ["Durasi proyek tergantung kompleksitasnya. Website sederhana seperti profil perusahaan biasanya sekitar 2-4 minggu. Untuk proyek yang lebih rumit, tentu akan memakan waktu lebih lama. Diskusi lebih lanjut akan memberikan estimasi yang lebih akurat."]
            },
            {
                patterns: [/teknologi|tools|keahlian|skill/i],
                answers: ["Ron sangat terampil menggunakan berbagai teknologi modern. Untuk desain, ia menggunakan <strong>Figma</strong>. Untuk pengembangan, ia ahli dalam <strong>HTML, CSS, JavaScript,</strong> dan <strong>Tailwind CSS</strong>. Anda bisa lihat ikon keahliannya di bagian 'Tentang Saya'."]
            },
            {
                patterns: [/proyek|portofolio|karya/i],
                answers: ["Anda bisa melihat beberapa proyek terbaik Ron di bagian 'Proyek Unggulan'. Cukup klik pada gambar untuk melihat detailnya. Apakah ada jenis proyek tertentu yang ingin Anda lihat?"]
            },
            {
                patterns: [/kontak|hubungi|nomor|email|sosial media|sosmed/i],
                answers: ["Tentu! Anda bisa menghubungi Ron melalui email di <a href='mailto:rdwiaa0@gmail.com' class='text-sky-400 underline'>rdwiaa0@gmail.com</a> atau telepon. Semua informasi kontaknya ada di bagian paling bawah halaman ini."]
            },
            {
                patterns: [/siapa ron|tentang (anda|kamu|ron)|profil/i],
                answers: ["Ron adalah seorang UI/UX Designer dan Web Developer yang bersemangat dalam menciptakan pengalaman digital yang intuitif dan modern. Ia menggabungkan keahlian desain dan teknis untuk menghasilkan produk digital berkualitas."]
            },
             {
                patterns: [/kabar|apa kabar/i],
                answers: ["Kabar baik, terima kasih sudah bertanya! Saya siap membantu Anda menemukan informasi yang Anda butuhkan di portofolio ini. Ada yang bisa saya bantu?"]
            },
            {
                patterns: [/terima kasih|makasih|oke|baik|siap/i],
                answers: [
                    "Sama-sama! Senang bisa membantu.",
                    "Dengan senang hati! Jika ada pertanyaan lain, jangan ragu untuk bertanya lagi.",
                    "Baik, jika butuh bantuan lagi, saya selalu ada di sini."
                ]
            },
            {
                patterns: [/cv|riwayat hidup/i],
                answers: ["Tentu, Anda bisa mengunduh atau melihat CV lengkap Ron dengan mengklik tombol 'Lihat CV Saya' di bagian 'Tentang Saya'. Tombol tersebut akan membuka CV di tab baru."]
            }
        ];

        for (const item of responseMap) {
            for (const pattern of item.patterns) {
                if (pattern.test(normalizedInput)) {
                    return item.answers[Math.floor(Math.random() * item.answers.length)];
                }
            }
        }
        
        const fallbackResponses = [
            "Maaf, saya belum mengerti pertanyaan itu. Mungkin Anda bisa mencoba bertanya tentang 'layanan', 'proyek', atau 'teknologi'?",
            "Hmm, itu di luar jangkauan saya. Saya bisa bantu jelaskan tentang portofolio Ron. Ada yang spesifik ingin Anda tahu?",
            "Saya masih dalam tahap belajar. Untuk saat ini, saya hanya bisa menjawab pertanyaan seputar portofolio ini. Coba tanyakan tentang 'proses kerja', misalnya.",
            "Saya tidak menemukan jawaban untuk itu. Coba tanyakan sesuatu yang lebih spesifik terkait UI/UX atau Web Development yang ditawarkan Ron."
        ];

        return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
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

    const templates = ["Apa saja layanannya?", "Bagaimana proses kerjanya?", "Info harga proyek", "Lihat portofolio"];
    chatTemplates.innerHTML = '';
    templates.forEach(text => {
        const btn = document.createElement('button');
        btn.className = 'template-btn';
        btn.textContent = text;
        btn.onclick = () => handleUserInput(text);
        chatTemplates.appendChild(btn);
    });

    addMessage("Halo! Saya asisten virtual Ron. Ada yang bisa saya bantu?", 'bot');

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
        header.classList.toggle('bg-black/30', !isScrolled);
        header.classList.toggle('bg-gray-900/90', isScrolled);
        header.classList.toggle('shadow-lg', isScrolled);
        header.classList.toggle('shadow-sky-500/10', isScrolled);
    });

    backToTopButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    document.getElementById('current-year').textContent = new Date().getFullYear();
});
