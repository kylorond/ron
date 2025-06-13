document.addEventListener('DOMContentLoaded', () => {

            // Data untuk Modal Proyek
            const projectsData = {
                1: {
                    title: "Website Terjemahan Bahasa Daerah",
                    imgSrc: "img/proyek1.png",
                    tags: ["JavaScript", "HTML", "CSS"],
                    description: "Website Pengenalan dan Terjemahan Bahasa Daerah Domiman di Kabupaten Barito Selatan, Kalimantan Tengah.",
                    liveLink: "https://kylorond.github.io/mochi-bombshell",
                    repoLink: "https://github.com/kylorond/mochi-bombshell",
                },
                2: {
                    title: "Website Truth or Dare Roullete",
                    imgSrc: "img/proyek2.png",
                    tags: ["JavaScript", "Tailwind.CSS", "HTML"],
                    description: "Website untuk Roullete dalam bermain Truth or Dare disaat sedang berkumpul dengan teman-teman",
                    liveLink: "https://kylorond.github.io/bajat",
                    repoLink: "https://github.com/kylorond/bajat",
                },
                3: {
                    title: "Website Sistem Pendukung Keputusan (SAW)",
                    imgSrc: "img/proyek3.png",
                    tags: ["JavaScript", "Tailwind.CSS", "HTML"],
                    description: "Website untuk membantu proses pengambilan keputusan dengan metode Simple Additive Weighting.",
                    liveLink: "https://kylorond.github.io/panguluh",
                    repoLink: "https://github.com/kylorond/panguluh",
                }
            };

            // Inisialisasi Feather Icons
            feather.replace();

            // Custom Cursor
            const cursorDot = document.querySelector(".cursor-dot");
            const cursorOutline = document.querySelector(".cursor-outline");
            window.addEventListener("mousemove", function (e) {
                const posX = e.clientX;
                const posY = e.clientY;
                cursorDot.style.left = `${posX}px`;
                cursorDot.style.top = `${posY}px`;
                cursorOutline.animate({
                    left: `${posX}px`,
                    top: `${posY}px`
                }, { duration: 500, fill: "forwards" });

                if (e.target.closest('a, button, [onclick]')) {
                     cursorOutline.style.width = '60px';
                     cursorOutline.style.height = '60px';
                     cursorOutline.style.backgroundColor = 'rgba(14, 165, 233, 0.3)';
                } else {
                     cursorOutline.style.width = '40px';
                     cursorOutline.style.height = '40px';
                     cursorOutline.style.backgroundColor = 'rgba(14, 165, 233, 0.2)';
                }
            });

            // Optimized Particles.js config
            particlesJS('particles-js', { "particles": { "number": { "value": 40, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle" }, "opacity": { "value": 0.4, "random": true }, "size": { "value": 2, "random": true }, "line_linked": { "enable": false }, "move": { "enable": true, "speed": 1, "direction": "none", "random": true, "straight": false, "out_mode": "out" } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false }, "onclick": { "enable": false } }, "modes": {}}, "retina_detect": true });

            // Typed.js
            new Typed('#typed-name', { strings: ['Ronaldo Dwi Anaku Aminu', 'Web Developer', 'UI/UX Designer'], typeSpeed: 70, backSpeed: 40, loop: true, backDelay: 2000 });

            // Efficient Scroll Animations with IntersectionObserver
            const animatedElements = document.querySelectorAll('.reveal-on-scroll');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            }, {
                rootMargin: '0px 0px -100px 0px' 
            });
            animatedElements.forEach(el => observer.observe(el));


            // Modal Proyek
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
                        <img src="${data.imgSrc}" alt="${data.title}" class="w-full h-56 md:h-72 object-cover rounded-t-lg" loading="lazy" decoding="async">
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
                    </div>
                `;
                feather.replace();
                modal.classList.remove('opacity-0', 'pointer-events-none');
                document.body.style.overflow = 'hidden';
                modalContent.classList.remove('scale-95');
            }
            window.closeModal = function() {
                modal.classList.add('opacity-0', 'pointer-events-none');
                document.body.style.overflow = 'auto';
                modalContent.classList.add('scale-95');
            }
            modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

            // Mobile Menu
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
                document.body.classList.toggle('overflow-hidden');
            }

            mobileMenuButton.addEventListener('click', toggleMenu);
            menuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (mobileMenu.classList.contains('menu-open')) {
                        toggleMenu();
                    }
                });
            });
            
            // Back to top
            const backToTopButton = document.getElementById('back-to-top');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    backToTopButton.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
                } else {
                    backToTopButton.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
                }
            });
            backToTopButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
            
            // Footer year
            document.getElementById('current-year').textContent = new Date().getFullYear();

        });
