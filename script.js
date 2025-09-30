// Dados dos veículos disponíveis
const veiculos = {
    economico: [
        {
            id: 1,
            modelo: "Chevrolet Onix",
            categoria: "Econômico",
            preco: 89,
            features: ["Ar condicionado", "Direção hidráulica", "Manual"],
            passageiros: 4,
            malas: 2,
            combustivel: "Flex"
        },
        {
            id: 2,
            modelo: "Volkswagen Gol",
            categoria: "Econômico",
            preco: 95,
            features: ["Ar condicionado", "Direção hidráulica", "Manual"],
            passageiros: 4,
            malas: 2,
            combustivel: "Flex"
        },
        {
            id: 3,
            modelo: "Renault Sandero",
            categoria: "Econômico",
            preco: 92,
            features: ["Ar condicionado", "Direção hidráulica", "Manual"],
            passageiros: 4,
            malas: 2,
            combustivel: "Flex"
        }
    ],
    compacto: [
        {
            id: 4,
            modelo: "Honda Civic",
            categoria: "Compacto",
            preco: 129,
            features: ["Ar condicionado", "Direção hidráulica", "Automático"],
            passageiros: 5,
            malas: 3,
            combustivel: "Flex"
        },
        {
            id: 5,
            modelo: "Toyota Corolla",
            categoria: "Compacto",
            preco: 135,
            features: ["Ar condicionado", "Direção hidráulica", "Automático"],
            passageiros: 5,
            malas: 3,
            combustivel: "Flex"
        },
        {
            id: 6,
            modelo: "Nissan Sentra",
            categoria: "Compacto",
            preco: 125,
            features: ["Ar condicionado", "Direção hidráulica", "Automático"],
            passageiros: 5,
            malas: 3,
            combustivel: "Flex"
        }
    ],
    intermediario: [
        {
            id: 7,
            modelo: "Honda Accord",
            categoria: "Intermediário",
            preco: 179,
            features: ["Ar condicionado", "Ar quente", "Automático"],
            passageiros: 5,
            malas: 4,
            combustivel: "Flex"
        },
        {
            id: 8,
            modelo: "Toyota Camry",
            categoria: "Intermediário",
            preco: 185,
            features: ["Ar condicionado", "Ar quente", "Automático"],
            passageiros: 5,
            malas: 4,
            combustivel: "Flex"
        },
        {
            id: 9,
            modelo: "Nissan Altima",
            categoria: "Intermediário",
            preco: 175,
            features: ["Ar condicionado", "Ar quente", "Automático"],
            passageiros: 5,
            malas: 4,
            combustivel: "Flex"
        }
    ],
    suv: [
        {
            id: 10,
            modelo: "Honda CR-V",
            categoria: "SUV",
            preco: 229,
            features: ["4x4", "Ar condicionado", "Automático"],
            passageiros: 7,
            malas: 5,
            combustivel: "Flex"
        },
        {
            id: 11,
            modelo: "Toyota RAV4",
            categoria: "SUV",
            preco: 235,
            features: ["4x4", "Ar condicionado", "Automático"],
            passageiros: 7,
            malas: 5,
            combustivel: "Flex"
        },
        {
            id: 12,
            modelo: "Nissan X-Trail",
            categoria: "SUV",
            preco: 225,
            features: ["4x4", "Ar condicionado", "Automático"],
            passageiros: 7,
            malas: 5,
            combustivel: "Flex"
        }
    ],
    premium: [
        {
            id: 13,
            modelo: "BMW 320i",
            categoria: "Premium",
            preco: 299,
            features: ["Piloto automático", "Ar condicionado", "Automático"],
            passageiros: 5,
            malas: 4,
            combustivel: "Flex"
        },
        {
            id: 14,
            modelo: "Mercedes C200",
            categoria: "Premium",
            preco: 315,
            features: ["Piloto automático", "Ar condicionado", "Automático"],
            passageiros: 5,
            malas: 4,
            combustivel: "Flex"
        },
        {
            id: 15,
            modelo: "Audi A4",
            categoria: "Premium",
            preco: 305,
            features: ["Piloto automático", "Ar condicionado", "Automático"],
            passageiros: 5,
            malas: 4,
            combustivel: "Flex"
        }
    ],
    luxo: [
        {
            id: 16,
            modelo: "BMW 530i",
            categoria: "Luxo",
            preco: 399,
            features: ["Multimídia completa", "Ar condicionado", "Automático"],
            passageiros: 5,
            malas: 4,
            combustivel: "Flex"
        },
        {
            id: 17,
            modelo: "Mercedes E300",
            categoria: "Luxo",
            preco: 415,
            features: ["Multimídia completa", "Ar condicionado", "Automático"],
            passageiros: 5,
            malas: 4,
            combustivel: "Flex"
        },
        {
            id: 18,
            modelo: "Audi A6",
            categoria: "Luxo",
            preco: 405,
            features: ["Multimídia completa", "Ar condicionado", "Automático"],
            passageiros: 5,
            malas: 4,
            combustivel: "Flex"
        }
    ]
};

// DOM Elements
const cotacaoForm = document.getElementById('cotacaoForm');
const resultadosSection = document.getElementById('resultados');
const resultadosContainer = document.getElementById('resultadosContainer');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const categoriaCards = document.querySelectorAll('.categoria-card');

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
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

// Form submission
cotacaoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(cotacaoForm);
    const categoria = document.getElementById('categoria').value;
    const dataRetirada = document.getElementById('dataRetirada').value;
    const dataDevolucao = document.getElementById('dataDevolucao').value;
    
    // Validation
    if (!categoria || !dataRetirada || !dataDevolucao) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }
    
    // Check if return date is after pickup date
    if (new Date(dataDevolucao) <= new Date(dataRetirada)) {
        alert('A data de devolução deve ser posterior à data de retirada.');
        return;
    }
    
    // Show loading
    showLoading();
    
    // Simulate API call
    setTimeout(() => {
        buscarVeiculos(categoria);
    }, 1500);
});

// Show loading spinner
function showLoading() {
    resultadosContainer.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
        </div>
    `;
    resultadosSection.style.display = 'block';
    resultadosSection.scrollIntoView({ behavior: 'smooth' });
}

// Search vehicles
function buscarVeiculos(categoria) {
    const veiculosCategoria = veiculos[categoria] || [];
    
    if (veiculosCategoria.length === 0) {
        resultadosContainer.innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <h3>Nenhum veículo encontrado</h3>
                <p>Não há veículos disponíveis nesta categoria no momento.</p>
            </div>
        `;
        return;
    }
    
    // Calculate number of days
    const dataRetirada = new Date(document.getElementById('dataRetirada').value);
    const dataDevolucao = new Date(document.getElementById('dataDevolucao').value);
    const diasLocacao = Math.ceil((dataDevolucao - dataRetirada) / (1000 * 60 * 60 * 24));
    
    // Generate vehicle cards
    const veiculosHTML = veiculosCategoria.map(veiculo => {
        const precoTotal = veiculo.preco * diasLocacao;
        return `
            <div class="veiculo-card">
                <div class="veiculo-image">
                    <i class="fas fa-car"></i>
                </div>
                <div class="veiculo-info">
                    <h3 class="veiculo-modelo">${veiculo.modelo}</h3>
                    <p class="veiculo-categoria">${veiculo.categoria}</p>
                    <div class="veiculo-features">
                        ${veiculo.features.map(feature => `<span>${feature}</span>`).join('')}
                        <span>${veiculo.passageiros} pessoas</span>
                        <span>${veiculo.malas} malas</span>
                        <span>${veiculo.combustivel}</span>
                    </div>
                    <div class="veiculo-price">
                        R$ ${veiculo.preco}/dia
                        <br>
                        <small>Total: R$ ${precoTotal.toFixed(2)} (${diasLocacao} dias)</small>
                    </div>
                    <button class="btn-reservar" onclick="reservarVeiculo(${veiculo.id}, '${veiculo.modelo}')">
                        <i class="fas fa-calendar-check"></i>
                        Reservar Agora
                    </button>
                </div>
            </div>
        `;
    }).join('');
    
    resultadosContainer.innerHTML = veiculosHTML;
}

// Reserve vehicle
function reservarVeiculo(veiculoId, modelo) {
    const dataRetirada = document.getElementById('dataRetirada').value;
    const dataDevolucao = document.getElementById('dataDevolucao').value;
    const localRetirada = document.getElementById('localRetirada').value;
    const localDevolucao = document.getElementById('localDevolucao').value;
    
    // In a real application, this would send data to a server
    alert(`Reserva realizada com sucesso!\n\nVeículo: ${modelo}\nRetirada: ${dataRetirada} em ${localRetirada}\nDevolução: ${dataDevolucao} em ${localDevolucao}\n\nEm breve entraremos em contato para confirmar os detalhes.`);
}

// Category card click handler
categoriaCards.forEach(card => {
    card.addEventListener('click', function() {
        const categoria = this.getAttribute('data-categoria');
        const categoriaSelect = document.getElementById('categoria');
        categoriaSelect.value = categoria;
        
        // Scroll to form
        document.querySelector('.cotacao-form').scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
        
        // Highlight selected category
        categoriaCards.forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');
    });
});

// Set minimum date to today
const today = new Date().toISOString().split('T')[0];
document.getElementById('dataRetirada').setAttribute('min', today);
document.getElementById('dataDevolucao').setAttribute('min', today);

// Update return date minimum when pickup date changes
document.getElementById('dataRetirada').addEventListener('change', function() {
    const dataRetirada = this.value;
    const dataDevolucao = document.getElementById('dataDevolucao');
    
    if (dataRetirada) {
        const nextDay = new Date(dataRetirada);
        nextDay.setDate(nextDay.getDate() + 1);
        dataDevolucao.setAttribute('min', nextDay.toISOString().split('T')[0]);
        
        // Clear return date if it's before pickup date
        if (dataDevolucao.value && new Date(dataDevolucao.value) <= new Date(dataRetirada)) {
            dataDevolucao.value = '';
        }
    }
});

// Add selected class styling
const style = document.createElement('style');
style.textContent = `
    .categoria-card.selected {
        border-color: #ff6b35;
        background: #fff3e0;
        transform: translateY(-5px);
    }
    
    .categoria-card.selected .categoria-icon {
        color: #e55a2b;
    }
`;
document.head.appendChild(style);

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Set default time values
    const now = new Date();
    const currentTime = now.toTimeString().slice(0, 5);
    document.getElementById('horaRetirada').value = currentTime;
    document.getElementById('horaDevolucao').value = currentTime;
    
    // Add animation to cards on scroll
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
    
    // Observe all cards
    document.querySelectorAll('.categoria-card, .veiculo-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
        header.style.boxShadow = '0 2px 20px rgba(255, 107, 53, 0.1)';
    } else {
        header.style.background = '#fff';
        header.style.backdropFilter = 'none';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});
