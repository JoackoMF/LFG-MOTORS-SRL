// LFG MOTORS SRL - MAIN JAVASCRIPT CORREGIDO

// === DATA === (Mantengo tus datos intactos)
const motosData = [
    { modelo: "CORVEN TRIAX 250", precio: "$5.500.000", descripcion: "Enduro de alta cilindrada para aventuras. Suspensión reforzada, motor potente.", cilindrada: "250cc", tipo: "moto", imagen: "assets/corventriax250.jpeg" },
    { modelo: "LIFAN 350", precio: "$7.000.000", descripcion: "Moto de alta gama con excelente performance. Tecnología avanzada y diseño deportivo.", cilindrada: "350cc", tipo: "moto", imagen: "assets/lifan350.jpg" },
    { modelo: "ZANELLA RX 150", precio: "$2.800.000", descripcion: "Moto nacional de trabajo confiable. Motor resistente, bajo costo de mantenimiento.", cilindrada: "150cc", tipo: "moto", imagen: "assets/zanellarx150.jpeg" },
    { modelo: "MOTOMEL 110 V8", precio: "$3.000.000", descripcion: "Urbana económica ideal para ciudad. Bajo consumo y fácil mantenimiento.", cilindrada: "110cc", tipo: "moto", imagen: "assets/motomel110v6.webp" },
    { modelo: "MOTOMEL 110 V8 AT", precio: "$3.200.000", descripcion: "Versión automática de la 110 V8. Sin embrague, perfecta para principiantes.", cilindrada: "110cc AT", tipo: "moto", imagen: "assets/motomel110v6at.jpeg" },
    { modelo: "AX 100", precio: "$4.000.000", descripcion: "Clásica urbana de trabajo. Muy robusta y confiable. Ideal para uso diario.", cilindrada: "100cc", tipo: "moto", imagen: "assets/ax110.jpg" },
    { modelo: "HERO XPULSE", precio: "$5.000.000", descripcion: "Enduro versátil para ciudad y aventura. Diseño moderno con tecnología LED.", cilindrada: "256cc", tipo: "moto", imagen: "assets/heroxpulse.jpg" },
    { modelo: "HERO XPULSE 4V", precio: "$6.500.000", descripcion: "Versión mejorada 4 válvulas. Mayor potencia y rendimiento. Sistema ABS.", cilindrada: "256cc 4V", tipo: "moto", imagen: "assets/heroxpulse4v.webp" },
    { modelo: "GILERA SAHEL 150", precio: "$4.000.000", descripcion: "Enduro nacional versátil. Buena suspensión y asiento cómodo.", cilindrada: "150cc", tipo: "moto", imagen: "assets/gilerasahel150.png" },
    { modelo: "GILERA 110 SMASH BASE", precio: "$3.300.000", descripcion: "Urbana económica y confiable. Perfecta para el día a día.", cilindrada: "110cc", tipo: "moto", imagen: "assets/gilera110base.png" },
    { modelo: "GILERA 110 SMASH AT", precio: "$3.500.000", descripcion: "Versión automática de la Smash. Sin embrague, muy fácil de manejar.", cilindrada: "110cc AT", tipo: "moto", imagen: "assets/gilera110at.jpeg" },
    { modelo: "HUNK 160", precio: "$6.500.000", descripcion: "Deportiva urbana con diseño agresivo. Motor de 4 válvulas, sistema ABS.", cilindrada: "160cc", tipo: "moto", imagen: "assets/hunk160.webp" },
    { modelo: "SIAM QUIRION 150", precio: "$3.000.000", descripcion: "Clásica de trabajo argentino. Muy resistente y económica.", cilindrada: "150cc", tipo: "moto", imagen: "assets/siamquirion150.jpeg" },
    { modelo: "SIAM NOMAD 150", precio: "$3.800.000", descripcion: "Enduro nacional con estilo retro. Diseño único y carácter.", cilindrada: "150cc", tipo: "moto", imagen: "assets/siamnomad150.webp" },
    { modelo: "TENAX 200", precio: "$6.000.000", descripcion: "Deportiva de media cilindrada. Excelente relación potencia-peso.", cilindrada: "200cc", tipo: "moto", imagen: "assets/tenax200.jpg" },
    { modelo: "IKA SLALOM 110", precio: "$2.800.000", descripcion: "Urbana simple y económica. Perfecta para principiantes.", cilindrada: "110cc", tipo: "moto", imagen: "assets/ikaslalom110.jpeg" },
    { modelo: "IKA SLALOM FULL 110", precio: "$2.900.000", descripcion: "Versión full de la Slalom. Con arranque eléctrico.", cilindrada: "110cc", tipo: "moto", imagen: "assets/ikaslalom110full.jpg" },
    { modelo: "IKA SPOT 150 FULL", precio: "$4.000.000", descripcion: "Urbana full con diseño moderno. Arranque eléctrico, freno a disco.", cilindrada: "150cc", tipo: "moto", imagen: "assets/ikaspot150full.webp" },
    { modelo: "TVS RAIDER 125", precio: "$5.000.000", descripcion: "Deportiva urbana con tecnología avanzada. Pantalla digital TFT.", cilindrada: "125cc", tipo: "moto", imagen: "assets/tvsraider125.jpeg" },
    { modelo: "IKA DURBAN", precio: "$3.800.000", descripcion: "Naked urbana con estilo deportivo. Buena potencia y manejo ágil.", cilindrada: "150cc", tipo: "moto", imagen: "assets/ikadurban.png" }
];

const autosData = [
    { modelo: "Chevrolet Onix 1.4 LT", anio: "2018", kilometraje: "65.000 km", descripcion: "Excelente estado, único dueño. Service oficial al día. Con GNC.", tipo: "auto", imagen: "assets/chevroletonix.jpeg" },
    { modelo: "Ford Ka 1.5 SEL", anio: "2019", kilometraje: "48.000 km", descripcion: "Impecable. Full equipo con alarma y aire acondicionado.", tipo: "auto", imagen: "assets/fordka.jpeg" },
    { modelo: "Volkswagen Gol Trend 1.6", anio: "2017", kilometraje: "82.000 km", descripcion: "Motor Power 1.6, muy económico. Mantenimiento al día.", tipo: "auto", imagen: "assets/volkswagengol.jpeg" },
    { modelo: "Fiat Cronos 1.3 Drive", anio: "2020", kilometraje: "38.000 km", descripcion: "Como nuevo, con garantía. Pantalla táctil, control crucero.", tipo: "auto", imagen: "assets/fiatcronos.jpeg" },
    { modelo: "Toyota Corolla 1.8 XEI", anio: "2016", kilometraje: "95.000 km", descripcion: "Impecable mantenimiento oficial. Cuero, automático.", tipo: "auto", imagen: "assets/toyotacorolla.jpeg" },
    { modelo: "Renault Sandero Stepway 1.6", anio: "2018", kilometraje: "72.000 km", descripcion: "Versión crossover. Muy cuidado, documentación al día.", tipo: "auto", imagen: "assets/renaultsandero.jpeg" }
];

// === INIT ===
document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initMobileMenu();
    // IMPORTANTE: Primero cargamos los productos y LUEGO inicializamos las animaciones
    loadProducts(); 
    initScrollAnimations();
    initModal();
});

// === HEADER SCROLL ===
function initHeader() {
    const header = document.getElementById('header');
    if (!header) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    });
}

// === MOBILE MENU ===
function initMobileMenu() {
    const btn = document.getElementById('mobileMenuBtn');
    const nav = document.getElementById('mainNav');
    if (!btn || !nav) return;
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        nav.classList.toggle('active');
    });
    const links = nav.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', () => {
            btn.classList.remove('active');
            nav.classList.remove('active');
        });
    });
}

// === SCROLL ANIMATIONS ===
function initScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    elements.forEach(el => observer.observe(el));
}

// === LOAD PRODUCTS ===
function loadProducts() {
    const motosPreview = document.getElementById('motosPreview');
    const autosPreview = document.getElementById('autosPreview');
    const motosGrid = document.getElementById('motosGrid');
    const autosGrid = document.getElementById('autosGrid');

    if (motosPreview) motosData.slice(0, 3).forEach(moto => motosPreview.appendChild(createProductCard(moto)));
    if (autosPreview) autosData.slice(0, 3).forEach(auto => autosPreview.appendChild(createProductCard(auto)));
    if (motosGrid) motosData.forEach(moto => motosGrid.appendChild(createProductCard(moto)));
    if (autosGrid) autosData.forEach(auto => autosGrid.appendChild(createProductCard(auto)));
}

// === CREATE PRODUCT CARD ===
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card fade-in-section';
    const isMoto = product.tipo === 'moto';

    card.innerHTML = `
        <div class="product-image">
            <span class="product-badge ${isMoto ? '' : 'car-badge'}">${isMoto ? '0km' : 'Usado'}</span>
            <img src="${product.imagen}" alt="${product.modelo}" loading="lazy" 
                 onerror="this.src='https://via.placeholder.com/400x300?text=No+Imagen'">
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.modelo}</h3>
            <p class="product-desc">${product.descripcion.substring(0, 80)}...</p>
            <div class="product-specs">
                ${isMoto ? `<span class="product-spec">🏍️ ${product.cilindrada}</span>` 
                        : `<span class="product-spec">📅 ${product.anio}</span><span class="product-spec">🛣️ ${product.kilometraje}</span>`}
            </div>
            <div class="product-price">${isMoto ? product.precio : 'Consultar'}</div>
            <button class="product-cta">Ver Detalles</button>
        </div>
    `;

    card.addEventListener('click', () => openModal(product));
    return card;
}

// === MODAL ===
function initModal() {
    const modal = document.getElementById('productModal');
    const backdrop = document.getElementById('modalBackdrop');
    const closeBtn = document.getElementById('modalClose');
    if (!modal) return;
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };
    closeBtn?.addEventListener('click', closeModal);
    backdrop?.addEventListener('click', closeModal);
}

function openModal(product) {
    const modal = document.getElementById('productModal');
    if (!modal) return;
    const isMoto = product.tipo === 'moto';
    document.getElementById('modalImage').src = product.imagen;
    document.getElementById('modalTitle').textContent = product.modelo;
    document.getElementById('modalDescription').textContent = product.descripcion;
    document.getElementById('modalPrice').textContent = isMoto ? product.precio : 'Consultar';
    const specsHTML = isMoto ? `<span>🏍️ ${product.cilindrada}</span>` : `<span>📅 ${product.anio}</span><span>🛣️ ${product.kilometraje}</span>`;
    document.getElementById('modalSpecs').innerHTML = specsHTML;
    document.getElementById('modalWhatsapp').href = `https://wa.me/541136364802?text=Hola, me interesa ${product.modelo}`;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}