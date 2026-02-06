// LFG MOTORS SRL - MAIN JAVASCRIPT

// === DATA ===
const motosData = [
    { modelo: "CORVEN TRIAX 250", precio: "$5.500.000", descripcion: "Enduro de alta cilindrada para aventuras. Suspensión reforzada, motor potente.", cilindrada: "250cc", tipo: "moto", imagen: "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=CORVEN+TRIAX+250" },
    { modelo: "LIFAN 350", precio: "$7.000.000", descripcion: "Moto de alta gama con excelente performance. Tecnología avanzada y diseño deportivo.", cilindrada: "350cc", tipo: "moto", imagen: "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=LIFAN+350" },
    { modelo: "ZANELLA RX 150", precio: "$2.800.000", descripcion: "Moto nacional de trabajo confiable. Motor resistente, bajo costo de mantenimiento.", cilindrada: "150cc", tipo: "moto", imagen: "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=ZANELLA+RX+150" },
    { modelo: "MOTOMEL 110 V8", precio: "$3.000.000", descripcion: "Urbana económica ideal para ciudad. Bajo consumo y fácil mantenimiento.", cilindrada: "110cc", tipo: "moto", imagen: "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=MOTOMEL+110+V8" },
    { modelo: "MOTOMEL 110 V8 AT", precio: "$3.200.000", descripcion: "Versión automática de la 110 V8. Sin embrague, perfecta para principiantes.", cilindrada: "110cc AT", tipo: "moto", imagen: "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=MOTOMEL+110+V8+AT" },
    { modelo: "AX 100", precio: "$4.000.000", descripcion: "Clásica urbana de trabajo. Muy robusta y confiable. Ideal para uso diario.", cilindrada: "100cc", tipo: "moto", imagen: "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=AX+100" },
    { modelo: "HERO XPULSE", precio: "$5.000.000", descripcion: "Enduro versátil para ciudad y aventura. Diseño moderno con tecnología LED.", cilindrada: "200cc", tipo: "moto", imagen: "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=HERO+XPULSE" },
    { modelo: "HERO XPULSE 4V", precio: "$6.500.000", descripcion: "Versión mejorada 4 válvulas. Mayor potencia y rendimiento. Sistema ABS.", cilindrada: "200cc 4V", tipo: "moto", imagen: "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=HERO+XPULSE+4V" },
    { modelo: "GILERA SAHEL 150", precio: "$4.000.000", descripcion: "Enduro nacional versátil. Buena suspensión y asiento cómodo.", cilindrada: "150cc", tipo: "moto", imagen: "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=GILERA+SAHEL+150" },
    { modelo: "GILERA 110 SMASH BASE", precio: "$3.300.000", descripcion: "Urbana económica y confiable. Perfecta para el día a día.", cilindrada: "110cc", tipo: "moto", imagen: "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=GILERA+110+SMASH" },
    { modelo: "GILERA 110 SMASH AT", precio: "$3.500.000", descripcion: "Versión automática de la Smash. Sin embrague, muy fácil de manejar.", cilindrada: "110cc AT", tipo: "moto", imagen: "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=GILERA+110+SMASH+AT" },
    { modelo: "HUNK 160", precio: "$6.500.000", descripcion: "Deportiva urbana con diseño agresivo. Motor de 4 válvulas, sistema ABS.", cilindrada: "160cc", tipo: "moto", imagen: "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=HUNK+160" },
    { modelo: "SIAM QUIRION 150", precio: "$3.000.000", descripcion: "Clásica de trabajo argentino. Muy resistente y económica.", cilindrada: "150cc", tipo: "moto", imagen: "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=SIAM+QUIRION+150" },
    { modelo: "SIAM NOMAD 150", precio: "$3.800.000", descripcion: "Enduro nacional con estilo retro. Diseño único y carácter.", cilindrada: "150cc", tipo: "moto", imagen: "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=SIAM+NOMAD+150" },
    { modelo: "TENAX 200", precio: "$6.000.000", descripcion: "Deportiva de media cilindrada. Excelente relación potencia-peso.", cilindrada: "200cc", tipo: "moto", imagen: "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=TENAX+200" },
    { modelo: "IKA SLALOM 110", precio: "$2.800.000", descripcion: "Urbana simple y económica. Perfecta para principiantes.", cilindrada: "110cc", tipo: "moto", imagen: "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=IKA+SLALOM+110" },
    { modelo: "IKA SLALOM FULL 110", precio: "$2.900.000", descripcion: "Versión full de la Slalom. Con arranque eléctrico.", cilindrada: "110cc", tipo: "moto", imagen: "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=IKA+SLALOM+FULL+110" },
    { modelo: "IKA SPOT 150 FULL", precio: "$4.000.000", descripcion: "Urbana full con diseño moderno. Arranque eléctrico, freno a disco.", cilindrada: "150cc", tipo: "moto", imagen: "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=IKA+SPOT+150+FULL" },
    { modelo: "TVS RAIDER 125", precio: "$5.000.000", descripcion: "Deportiva urbana con tecnología avanzada. Pantalla digital TFT.", cilindrada: "125cc", tipo: "moto", imagen: "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=TVS+RAIDER+125" },
    { modelo: "IKA DURBAN", precio: "$3.800.000", descripcion: "Naked urbana con estilo deportivo. Buena potencia y manejo ágil.", cilindrada: "150cc", tipo: "moto", imagen: "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=IKA+DURBAN" }
];

const autosData = [
    { modelo: "Chevrolet Onix 1.4 LT", anio: "2018", kilometraje: "65.000 km", descripcion: "Excelente estado, único dueño. Service oficial al día. Con GNC.", tipo: "auto", imagen: "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=Chevrolet+Onix" },
    { modelo: "Ford Ka 1.5 SEL", anio: "2019", kilometraje: "48.000 km", descripcion: "Impecable. Full equipo con alarma y aire acondicionado.", tipo: "auto", imagen: "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=Ford+Ka" },
    { modelo: "Volkswagen Gol Trend 1.6", anio: "2017", kilometraje: "82.000 km", descripcion: "Motor Power 1.6, muy económico. Mantenimiento al día.", tipo: "auto", imagen: "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=Volkswagen+Gol" },
    { modelo: "Fiat Cronos 1.3 Drive", anio: "2020", kilometraje: "38.000 km", descripcion: "Como nuevo, con garantía. Pantalla táctil, control crucero.", tipo: "auto", imagen: "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=Fiat+Cronos" },
    { modelo: "Toyota Corolla 1.8 XEI", anio: "2016", kilometraje: "95.000 km", descripcion: "Impecable mantenimiento oficial. Cuero, automático.", tipo: "auto", imagen: "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=Toyota+Corolla" },
    { modelo: "Renault Sandero Stepway 1.6", anio: "2018", kilometraje: "72.000 km", descripcion: "Versión crossover. Muy cuidado, documentación al día.", tipo: "auto", imagen: "https://via.placeholder.com/400x300/4A5568/FFFFFF?text=Renault+Sandero" }
];

// === INIT ===
document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initMobileMenu();
    initScrollAnimations();
    loadProducts();
    initModal();
});

// === HEADER SCROLL ===
function initHeader() {
    const header = document.getElementById('header');
    if (!header) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
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
    
    document.addEventListener('click', (e) => {
        if (!btn.contains(e.target) && !nav.contains(e.target)) {
            btn.classList.remove('active');
            nav.classList.remove('active');
        }
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
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    elements.forEach(el => observer.observe(el));
}

// === LOAD PRODUCTS ===
function loadProducts() {
    const motosPreview = document.getElementById('motosPreview');
    const autosPreview = document.getElementById('autosPreview');
    
    if (motosPreview) {
        const featured = motosData.slice(0, 3);
        featured.forEach(moto => {
            motosPreview.appendChild(createProductCard(moto));
        });
    }
    
    if (autosPreview) {
        const featured = autosData.slice(0, 3);
        featured.forEach(auto => {
            autosPreview.appendChild(createProductCard(auto));
        });
    }
    
    const motosGrid = document.getElementById('motosGrid');
    const autosGrid = document.getElementById('autosGrid');
    
    if (motosGrid) {
        motosData.forEach(moto => {
            motosGrid.appendChild(createProductCard(moto));
        });
    }
    
    if (autosGrid) {
        autosData.forEach(auto => {
            autosGrid.appendChild(createProductCard(auto));
        });
    }
}

// === CREATE PRODUCT CARD ===
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card fade-in-section';
    
    const isMoto = product.tipo === 'moto';
    
    card.innerHTML = `
        <div class="product-image">
            <div class="product-badge ${isMoto ? '' : 'car-badge'}">${isMoto ? '0km' : 'Usado'}</div>
            <img src="${product.imagen}" alt="${product.modelo}">
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.modelo}</h3>
            <p class="product-desc">${product.descripcion}</p>
            ${isMoto ? `
                <div class="product-specs">
                    <span class="product-spec">🏍️ ${product.cilindrada}</span>
                </div>
                <div class="product-price">${product.precio}</div>
            ` : `
                <div class="product-specs">
                    <span class="product-spec">📅 ${product.anio}</span>
                    <span class="product-spec">🛣️ ${product.kilometraje}</span>
                </div>
            `}
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
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function openModal(product) {
    const modal = document.getElementById('productModal');
    if (!modal) return;
    
    const isMoto = product.tipo === 'moto';
    
    document.getElementById('modalImage').src = product.imagen;
    document.getElementById('modalImage').alt = product.modelo;
    document.getElementById('modalBadge').textContent = isMoto ? '0km' : 'Usado';
    document.getElementById('modalBadge').className = `modal-badge ${isMoto ? '' : 'car-badge'}`;
    document.getElementById('modalTitle').textContent = product.modelo;
    document.getElementById('modalDescription').textContent = product.descripcion;
    
    const specsHTML = isMoto 
        ? `<span>🏍️ ${product.cilindrada}</span>`
        : `<span>📅 ${product.anio}</span><span>🛣️ ${product.kilometraje}</span>`;
    document.getElementById('modalSpecs').innerHTML = specsHTML;
    
    const priceHTML = isMoto ? product.precio : 'Consultar';
    document.getElementById('modalPrice').textContent = priceHTML;
    
    const message = `Hola LFG MOTORS SRL, me interesa ${product.modelo}`;
    const whatsappUrl = `https://wa.me/5491123456789?text=${encodeURIComponent(message)}`;
    document.getElementById('modalWhatsapp').href = whatsappUrl;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}