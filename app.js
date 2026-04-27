let lang = 'es';

const i18n = {
    es: {
        nav_compare: "Comparar",
        nav_offers: "Ofertas",
        nav_about: "Sobre la IA",
        nav_login: "Acceder",
        hero_title: "Encuentra la <span>mejor tarifa móvil</span> con IA",
        hero_subtitle: "Nuestra inteligencia artificial analiza más de 500 ofertas para encontrar la que mejor se adapta a ti.",
        filter_data: "Datos mínimos",
        filter_any: "Cualquiera",
        filter_10gb: "Más de 10 GB",
        filter_50gb: "Más de 50 GB",
        filter_100gb: "Más de 100 GB",
        filter_unlimited: "Ilimitados",
        filter_price: "Precio máximo",
        filter_calls: "Llamadas",
        btn_search: "Buscar",
        btn_searching: "<i class=\"fa-solid fa-spinner fa-spin\"></i> Buscando...",
        results_title: "Resultados Recomendados",
        sort_label: "Ordenar por:",
        sort_recommended: "Recomendación IA",
        sort_price: "Precio: Más barato",
        sort_data: "Datos: Mayor cantidad",
        modal_title: "Crear Cuenta",
        modal_subtitle: "Únete para guardar tus tarifas revisadas",
        modal_login_title: "Iniciar Sesión",
        modal_login_subtitle: "¡Qué bueno verte de nuevo!",
        modal_user: "Email",
        modal_password: "Contraseña",
        modal_register: "Registrarse",
        modal_login_btn: "Acceder",
        modal_has_account: "¿Ya tienes cuenta?",
        modal_login: "Inicia sesión",
        modal_no_account: "¿No tienes cuenta?",
        modal_register_link: "Regístrate",
        modal_success_title: "¡Revisa tu correo!",
        modal_success_desc: "Hemos enviado un enlace seguro a tu bandeja de entrada.<br>Haz clic en él para verificar y activar tu cuenta al instante.",
        modal_success_btn: "Entendido, ¡voy a mirar!",
        ph_username: "Tu correo electrónico",
        ph_password: "Tu contraseña",
        plan_unlimited: "Ilimitados",
        plan_unlimited_calls: "Ilimitadas",
        plan_network: "Red",
        plan_fixed_mobile: "Fijos y móviles",
        plan_perfect_match: "Coincidencia perfecta",
        plan_per_month: "/mes",
        plan_hire: "Contratar",
        plan_top_ai: "Top IA",
        plan_empty: "No se encontraron tarifas que coincidan con los filtros.",
        sw_title: "Cambiando tu tarifa...",
        sw_step1: "Contactando con el operador actual...",
        sw_step2: "Negociando mejores condiciones con la IA...",
        sw_step3: "Finalizando portabilidad de número...",
        sw_success: "¡Tarifa cambiada con éxito!",
        sw_success_desc: "A partir de este momento disfrutas de tu nueva tarifa automáticamente.",
        sw_close: "Cerrar",
        dash_title: "Panel Personalizado",
        dash_subtitle: "Recomendación inteligente según tus preferencias",
        dash_current_plan: "Mi Tarifa Actual",
        dash_monthly_payment: "Pago Mensual",
        dash_orders: "Mis pedidos de cambio",
        dash_ai_btn: "✨ Analizar mi perfil y recomendarme",
        dash_ai_loading: "✨ Analizando tu perfil...",
        orders_order: "Pedido",
        orders_completed: "Completado",
        orders_in_progress: "En Proceso",
        ai_score: "Score IA",
        ai_verdict: "Veredicto IA",
        sw_default_plan_name: "Tarifa Móvil",
        sw_rejected: "Operación Rechazada",
        sw_reason: "Motivo",
        sw_close_btn: "Cerrar",
        sw_success_close: "Cerrar y ver mis pedidos",
        sw_order_label: "Pedido",
        err_login_required: "Debes iniciar sesión o registrarte.",
        err_profile_check: "No se pudo comprobar tu perfil. Inténtalo de nuevo.",
        err_profile_save: "No se pudo guardar el perfil. Inténtalo de nuevo.",
        err_server_conn: "Error de conexión con el servidor.",
        err_api_server: "Error: ¿Está el servidor encendido y la API Key bien puesta?",
        msg_login_success: "¡Sesión iniciada con éxito!",
        form_fullname: "Nombre Completo",
        form_fullname_ph: "Nombre completo",
        form_dni: "DNI / NIE",
        form_phone: "Teléfono a portar",
        form_phone_ph: "600123456",
        form_address: "Dirección de envío SIM",
        form_address_ph: "Calle Ejemplo 1, Madrid",
        form_iban: "IBAN Bancario",
        form_iban_ph: "ESXX XXXX XXXX XXXX XXXX",
        form_company: "Compañía actual",
        form_company_ph: "Ej. Vodafone",
        form_price: "Lo que pagas ahora al mes (€)",
        form_price_ph: "Ej. 45.50",
        form_plan: "Tu tarifa actual (resumen)",
        form_plan_ph: "Ej. 50GB + llamadas",
        form_desired: "Características deseadas",
        form_desired_ph: "Ej. Datos ilimitados y roaming",
        nav_logout: "Cerrar sesión",
        profile_title: "Completa tu perfil",
        profile_subtitle: "Necesitamos estos datos para tramitar la portabilidad y firmar el mandato SEPA.",
        profile_subtitle_ai: "Cuéntanos sobre tu tarifa actual para que la IA pueda recomendarte mejor.",
        profile_save: "Guardar y continuar"
    },
    en: {
        nav_compare: "Compare",
        nav_offers: "Offers",
        nav_about: "About AI",
        nav_login: "Login",
        hero_title: "Find the <span>best mobile plan</span> with AI",
        hero_subtitle: "Our AI analyzes over 500 options to find your perfect match.",
        filter_data: "Minimum Data",
        filter_any: "Any",
        filter_10gb: "Over 10 GB",
        filter_50gb: "Over 50 GB",
        filter_100gb: "Over 100 GB",
        filter_unlimited: "Unlimited",
        filter_price: "Max Price",
        filter_calls: "Calls",
        btn_search: "Search",
        btn_searching: "<i class=\"fa-solid fa-spinner fa-spin\"></i> Searching...",
        results_title: "Recommended Results",
        sort_label: "Sort by:",
        sort_recommended: "AI Recommendation",
        sort_price: "Price: Lowest",
        sort_data: "Data: Highest",
        modal_title: "Create Account",
        modal_subtitle: "Join to save your favorite plans",
        modal_login_title: "Log In",
        modal_login_subtitle: "Welcome back!",
        modal_user: "Email",
        modal_password: "Password",
        modal_register: "Sign Up",
        modal_login_btn: "Log in",
        modal_has_account: "Already have an account?",
        modal_login: "Log in",
        modal_no_account: "Don't have an account?",
        modal_register_link: "Sign up",
        modal_success_title: "Check your email!",
        modal_success_desc: "We've sent a magic link to your inbox.<br>Click it to instantly verify and activate your account.",
        modal_success_btn: "Got it, I'll check!",
        ph_username: "Your email address",
        ph_password: "Your password",
        plan_unlimited: "Unlimited",
        plan_unlimited_calls: "Unlimited",
        plan_network: "Network",
        plan_fixed_mobile: "Landline and mobile",
        plan_perfect_match: "Perfect match",
        plan_per_month: "/month",
        plan_hire: "Subscribe",
        plan_top_ai: "Top AI",
        plan_empty: "No plans found matching the active filters.",
        sw_title: "Switching your plan...",
        sw_step1: "Contacting current operator...",
        sw_step2: "Negotiating better conditions with AI...",
        sw_step3: "Finalizing number portability...",
        sw_success: "Plan changed successfully!",
        sw_success_desc: "From this moment on, you are enjoying your new plan automatically. We have sent an email with all the details.",
        sw_close: "Close",
        dash_title: "Personal Dashboard",
        dash_subtitle: "Smart recommendation based on your preferences",
        dash_current_plan: "My Current Plan",
        dash_monthly_payment: "Monthly Payment",
        dash_orders: "My switch orders",
        dash_ai_btn: "✨ Analyse my profile and recommend me",
        dash_ai_loading: "✨ Analysing your profile...",
        orders_order: "Order",
        orders_completed: "Completed",
        orders_in_progress: "In Progress",
        ai_score: "AI Score",
        ai_verdict: "AI Verdict",
        sw_default_plan_name: "Mobile Plan",
        sw_rejected: "Operation Rejected",
        sw_reason: "Reason",
        sw_close_btn: "Close",
        sw_success_close: "Close and view my orders",
        sw_order_label: "Order",
        err_login_required: "You must log in or register.",
        err_profile_check: "Could not check your profile. Please try again.",
        err_profile_save: "Could not save your profile. Please try again.",
        err_server_conn: "Server connection error.",
        err_api_server: "Error: Is the server running and the API Key set?",
        msg_login_success: "Logged in successfully!",
        form_fullname: "Full Name",
        form_fullname_ph: "Full name",
        form_dni: "ID / Passport",
        form_phone: "Number to port",
        form_phone_ph: "600123456",
        form_address: "SIM delivery address",
        form_address_ph: "1 Example Street, London",
        form_iban: "Bank IBAN",
        form_iban_ph: "GBXX XXXX XXXX XXXX XXXX",
        form_company: "Current operator",
        form_company_ph: "e.g. EE",
        form_price: "What you pay now per month (€)",
        form_price_ph: "e.g. 45.50",
        form_plan: "Your current plan (summary)",
        form_plan_ph: "e.g. 50GB + calls",
        form_desired: "Desired features",
        form_desired_ph: "e.g. Unlimited data and roaming",
        nav_logout: "Log out",
        profile_title: "Complete your profile",
        profile_subtitle: "We need these details to process the number portability and sign the SEPA mandate.",
        profile_subtitle_ai: "Tell us about your current plan so the AI can recommend you better.",
        profile_save: "Save and continue"
    }
};

function updateTranslations() {
    document.title = (lang === 'es') ? "Comparador de Tarifas Móviles IA" : "AI Mobile Plan Comparator";
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[lang][key]) {
            el.innerHTML = i18n[lang][key];
        }
    });

    // Translate input placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (i18n[lang][key]) {
            el.placeholder = i18n[lang][key];
        }
    });

    document.getElementById('input-username').placeholder = i18n[lang].ph_username;
    document.getElementById('input-password').placeholder = i18n[lang].ph_password;
    
    // Re-render plans so card texts update
    filterAndSortPlans();
}

const plans = [
    {
        id: 1,
        operator: "Movistar",
        operatorColor: "#019DF4",
        operatorIcon: "fa-m",
        data: 100, /* 100 GB */
        dataText: "100 GB",
        dataSpeed: "5G+",
        calls: "Ilimitadas",
        price: 24.90,
        aiScore: 98,
        recommended: true
    },
    {
        id: 2,
        operator: "O2",
        operatorColor: "#0000FF",
        operatorIcon: "fa-o",
        data: 50,
        dataText: "50 GB",
        dataSpeed: "5G",
        calls: "Ilimitadas",
        price: 15.00,
        aiScore: 92,
        recommended: false
    },
    {
        id: 3,
        operator: "Simyo",
        operatorColor: "#FF6600",
        operatorIcon: "fa-s",
        data: 20,
        dataText: "20 GB",
        dataSpeed: "4G+",
        calls: "Ilimitadas",
        price: 10.00,
        aiScore: 88,
        recommended: false
    },
    {
        id: 4,
        operator: "Vodafone",
        operatorColor: "#E60000",
        operatorIcon: "fa-v",
        data: 9999, /* Ilimitados */
        dataText: "Ilimitados",
        dataSpeed: "5G Máxima",
        calls: "Ilimitadas",
        price: 33.50,
        aiScore: 85,
        recommended: false
    },
    {
        id: 5,
        operator: "Pepephone",
        operatorColor: "#ED0026",
        operatorIcon: "fa-p",
        data: 109,
        dataText: "109 GB",
        dataSpeed: "5G",
        calls: "Ilimitadas",
        price: 25.90,
        aiScore: 95,
        recommended: true
    },
    {
        id: 6,
        operator: "Digi",
        operatorColor: "#00569D",
        operatorIcon: "fa-d",
        data: 15,
        dataText: "15 GB",
        dataSpeed: "4G",
        calls: "Ilimitadas",
        price: 7.00,
        aiScore: 89,
        recommended: false
    }
];

const resultsGrid = document.getElementById('results-grid');
const searchBtn = document.getElementById('search-btn');
const sortFilter = document.getElementById('sort-filter');

function renderPlans(plansToRender, container = resultsGrid) {
    container.innerHTML = '';
    
    if (plansToRender.length === 0) {
        container.innerHTML = `<p style="color:var(--text-secondary); grid-column: 1/-1; text-align: center;">${i18n[lang].plan_empty}</p>`;
        return;
    }

    plansToRender.forEach((plan, index) => {
        const card = document.createElement('div');
        card.className = `card fade-in`;
        card.style.animationDelay = `${index * 0.1}s`;
        
        let aiBadgeHtml = '';
        if (plan.recommended) {
            aiBadgeHtml = `<div class="ai-badge"><i class="fa-solid fa-star"></i> ${i18n[lang].plan_top_ai}</div>`;
        }

        const dataTextStr = plan.dataText === "Ilimitados" ? i18n[lang].plan_unlimited : plan.dataText;
        const callsTextStr = i18n[lang].plan_unlimited_calls;

        card.innerHTML = `
            ${aiBadgeHtml}
            <div class="operator-logo" style="color: ${plan.operatorColor}">
                <i class="fa-solid ${plan.operatorIcon}"></i> ${plan.operator}
            </div>
            
            <div class="features">
                <div class="feature">
                    <div class="feature-icon"><i class="fa-solid fa-wifi"></i></div>
                    <div class="feature-text">
                        <h4>${dataTextStr}</h4>
                        <p>${i18n[lang].plan_network} ${plan.dataSpeed}</p>
                    </div>
                </div>
                <div class="feature">
                    <div class="feature-icon"><i class="fa-solid fa-phone"></i></div>
                    <div class="feature-text">
                        <h4>${callsTextStr}</h4>
                        <p>${i18n[lang].plan_fixed_mobile}</p>
                    </div>
                </div>
                <div class="feature">
                    <div class="feature-icon" style="background: rgba(138,43,226,0.1); color: var(--accent-primary);"><i class="fa-solid fa-brain"></i></div>
                    <div class="feature-text">
                        <h4>${plan.aiReason ? (lang === 'es' ? "Veredicto IA" : "AI Verdict") : "Score IA: " + plan.aiScore + "/100"}</h4>
                        <p style="${plan.aiReason ? 'font-style: italic; color: var(--accent-primary); line-height: 1.4;' : ''}">
                            ${plan.aiReason ? '"' + plan.aiReason + '"' : i18n[lang].plan_perfect_match}
                        </p>
                    </div>
                </div>
            </div>
            
            <div class="price-section">
                <div class="price">${plan.price.toFixed(2).replace('.', ',')}€<span>${i18n[lang].plan_per_month}</span></div>
                <button class="hire-btn" data-id="${plan.id}">${i18n[lang].plan_hire}</button>
            </div>
        `;
        container.appendChild(card);
    });
}

function filterAndSortPlans() {
    const minData = parseInt(document.getElementById('data-filter').value);
    const maxPrice = parseFloat(document.getElementById('price-filter').value);
    const sortVal = sortFilter.value;

    let filtered = plans.filter(plan => {
        let passesData = plan.data >= minData;
        let passesPrice = plan.price <= maxPrice;
        return passesData && passesPrice;
    });

    if (sortVal === 'recommended') {
        filtered.sort((a, b) => b.aiScore - a.aiScore);
    } else if (sortVal === 'price-asc') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortVal === 'data-desc') {
        filtered.sort((a, b) => b.data - a.data);
    }

    renderPlans(filtered);
}

// Event Listeners
searchBtn.addEventListener('click', async () => {
    const originalText = searchBtn.innerHTML;
    searchBtn.innerHTML = i18n[lang].btn_searching;
    
    // Construct the user intent sentence based on active filters
    const dataFilterEl = document.getElementById('data-filter');
    const callsFilterEl = document.getElementById('calls-filter');
    const minData = dataFilterEl.options[dataFilterEl.selectedIndex].text;
    const maxPrice = document.getElementById('price-filter').value;
    const calls = callsFilterEl.options[callsFilterEl.selectedIndex].text;

    const userMessage = `Búscame imperativamente la mejor tarifa que cumpla esto: Necesito ${minData}, y llamadas ${calls}. Mi presupuesto máximo absoluto es de ${maxPrice} euros al mes.`;

    try {
        const response = await fetch('/api/recommend', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userMessage })
        });
        
        if (!response.ok) throw new Error('Error en API');

        const aiData = await response.json();
        
        // Assign the recommendation from Gemini back to the plans array payload
        plans.forEach(p => {
            p.recommended = false;
            p.aiReason = null;
        });
        
        const winner = plans.find(p => p.id === aiData.recommendedId);
        if (winner) {
            winner.recommended = true;
            winner.aiReason = aiData.reason;
        }

        // Render sorted and filtered UI
        filterAndSortPlans();
        
    } catch (error) {
        console.error(error);
        alert(lang === 'es' ? "Error: ¿Está el servidor encendido y la API Key bien puesta?" : "Error: Is the server running?");
    } finally {
        searchBtn.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles"></i> <span data-i18n="btn_search">${i18n[lang].btn_search}</span>`;
    }
});

sortFilter.addEventListener('change', filterAndSortPlans);

// Language switch listener
document.getElementById('lang-switch').addEventListener('change', (e) => {
    lang = e.target.value;
    updateTranslations();
});

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    filterAndSortPlans();
    updateTranslations();
});

// --- Auth Modal & Local DB Logic ---
const loginBtn = document.querySelector('.login-btn');
const authModal = document.getElementById('auth-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const authForm = document.getElementById('auth-form');
const usernameInput = document.getElementById('input-username');
const passwordInput = document.getElementById('input-password');

// Toggle Elements
const authTitle = document.getElementById('auth-title');
const authSubtitle = document.getElementById('auth-subtitle');
const authSubmitBtn = document.getElementById('auth-submit-btn');
const authFooterText = document.getElementById('auth-footer-text');
const authToggleBtn = document.getElementById('auth-toggle-btn');
const authHeaderBlock = document.getElementById('auth-header-block');
const authFooterBlock = document.getElementById('auth-footer-block');
const authSuccessMessage = document.getElementById('auth-success-message');
const finishBtn = document.getElementById('finish-btn');

let isSignUpMode = true;

function resetModalView() {
    authHeaderBlock.style.display = 'block';
    authForm.style.display = 'block';
    authFooterBlock.style.display = 'block';
    authSuccessMessage.style.display = 'none';
    usernameInput.value = '';
    passwordInput.value = '';
}

// loginBtn click is now handled below with logout support

closeModalBtn.addEventListener('click', () => {
    authModal.classList.remove('active');
});

authModal.addEventListener('click', (e) => {
    if (e.target === authModal) {
        authModal.classList.remove('active');
    }
});

finishBtn.addEventListener('click', () => {
    authModal.classList.remove('active');
});

authToggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    isSignUpMode = !isSignUpMode;
    
    if (isSignUpMode) {
        authTitle.setAttribute('data-i18n', 'modal_title');
        authSubtitle.setAttribute('data-i18n', 'modal_subtitle');
        authSubmitBtn.setAttribute('data-i18n', 'modal_register');
        authFooterText.setAttribute('data-i18n', 'modal_has_account');
        authToggleBtn.setAttribute('data-i18n', 'modal_login');
    } else {
        authTitle.setAttribute('data-i18n', 'modal_login_title');
        authSubtitle.setAttribute('data-i18n', 'modal_login_subtitle');
        authSubmitBtn.setAttribute('data-i18n', 'modal_login_btn');
        authFooterText.setAttribute('data-i18n', 'modal_no_account');
        authToggleBtn.setAttribute('data-i18n', 'modal_register_link');
    }
    updateTranslations();
});

authForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = usernameInput.value;
    const password = passwordInput.value;
    const isEs = lang === 'es';
    
    const originalBtnText = authSubmitBtn.innerHTML;
    authSubmitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';

    const endpoint = isSignUpMode ? '/api/auth/register' : '/api/auth/login';

    const bodyParams = { email, password };

    try {
        const response = await fetch(`${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bodyParams)
        });
        
        const data = await response.json();
        authSubmitBtn.innerHTML = originalBtnText;

        if (!response.ok) {
            alert((isEs ? 'Error: ' : 'Error: ') + (data.error || 'Unknown Error'));
        } else {
            if (isSignUpMode) {
                authHeaderBlock.style.display = 'none';
                authForm.style.display = 'none';
                authFooterBlock.style.display = 'none';
                authSuccessMessage.style.display = 'block';
                if (isSignUpMode) authToggleBtn.click();
            } else {
                alert(isEs ? '¡Sesión iniciada con éxito!' : 'Logged in successfully!');
                localStorage.setItem('token', data.token);
                localStorage.setItem('email', data.email);
                loginBtn.innerText = data.email.split('@')[0];
                authModal.classList.remove('active');
                revealDashboard();
            }
        }
    } catch(err) {
        authSubmitBtn.innerHTML = originalBtnText;
        alert(isEs ? "Error de conexión con el servidor." : "Server connection error.");
    }
});

const personalizedDashboard = document.getElementById('personalized-dashboard');
const btnSmartRecommend = document.getElementById('btn-smart-recommend');
const smartRecommendationResult = document.getElementById('smart-recommendation-result');

async function loadUserProfileAndOrders() {
    const token = localStorage.getItem('token');
    if (!token) return;

    // Perfil
    try {
        const resProfile = await fetch('/api/profile', { headers: { 'Authorization': `Bearer ${token}` } });
        if (resProfile.ok) {
            const profile = await resProfile.json();
            const planEl = document.getElementById('profile-current-plan');
            const compEl = document.getElementById('profile-current-company');
            const priceEl = document.getElementById('profile-current-price');
            if(planEl) planEl.innerText = profile.currentPlan || '-';
            if(compEl) compEl.innerText = profile.currentCompany || '';
            if(priceEl) priceEl.innerText = profile.currentPrice ? `${profile.currentPrice} €` : '- €';
        }
    } catch(e) {}

    // Pedidos
    try {
        const resOrders = await fetch('/api/my-orders', { headers: { 'Authorization': `Bearer ${token}` } });
        if (resOrders.ok) {
            const orders = await resOrders.json();
            const section = document.getElementById('user-orders-section');
            const list = document.getElementById('orders-list');
            if (section && list) {
                if (orders.length > 0) {
                    section.style.display = 'block';
                    list.innerHTML = orders.map(o => `
                        <div style="padding: 15px; border-bottom: 1px solid var(--glass-border); display: flex; justify-content: space-between; align-items: center;">
                            <div>
                                <div style="font-weight: bold; color: var(--text-primary); margin-bottom: 4px;">${o.planName}</div>
                                <div style="font-size: 0.85rem; color: var(--text-secondary);">Pedido #${o.id.toString().padStart(4, '0')} - ${new Date(o.createdAt).toLocaleDateString()}</div>
                            </div>
                            <div style="text-align: right;">
                                <div style="color: var(--text-primary); font-weight: bold; margin-bottom: 4px;">${o.planPrice.toFixed(2).replace('.', ',')} €</div>
                                <span style="font-size: 0.75rem; font-weight: 600; padding: 4px 10px; border-radius: 12px; background: ${o.status==='completed'?'rgba(16,185,129,0.2)':'rgba(255,165,0,0.2)'}; color: ${o.status==='completed'?'#10b981':'#ffa500'};">${o.status==='completed'?'Completado':'En Proceso'}</span>
                            </div>
                        </div>
                    `).join('');
                } else {
                    section.style.display = 'none';
                }
            }
        }
    } catch(e) {}
}

function revealDashboard() {
    if (personalizedDashboard) {
        personalizedDashboard.style.display = 'block';
        loadUserProfileAndOrders();
    }
}

function hideDashboard() {
    if (personalizedDashboard) personalizedDashboard.style.display = 'none';
}

// Set login button to toggle logout when already logged in
loginBtn.addEventListener('click', () => {
    const token = localStorage.getItem('token');
    if (token) {
        // LOGOUT
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        loginBtn.setAttribute('data-i18n', 'nav_login');
        loginBtn.innerText = i18n[lang].nav_login;
        hideDashboard();
    } else {
        resetModalView();
        authModal.classList.add('active');
    }
});

// Check if already logged in on page load — VERIFY WITH SERVER
(async () => {
    const token = localStorage.getItem('token');
    if (token) {
        try {
            const res = await fetch('/api/auth/verify', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await res.json();
            if (data.valid) {
                loginBtn.innerText = data.email.split('@')[0];
                revealDashboard();
            } else {
                localStorage.removeItem('token');
                localStorage.removeItem('email');
                hideDashboard();
            }
        } catch {
            hideDashboard();
        }
    } else {
        localStorage.removeItem('email');
        hideDashboard();
    }
})();


async function runSmartRecommend() {
    btnSmartRecommend.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> ✨ Analizando tu perfil...';
    smartRecommendationResult.style.display = 'none';
    try {
        const token = localStorage.getItem('token');
        const res = await fetch('/api/recommend-smart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const AIRes = await res.json();
        if(!res.ok) throw new Error(AIRes.error);
        smartRecommendationResult.innerHTML = AIRes.recommendationText || AIRes.recommendation;
        smartRecommendationResult.style.display = 'block';

        if (AIRes.recommendedPlanIds && AIRes.recommendedPlanIds.length > 0) {
            const recommendedPlans = plans.filter(p => AIRes.recommendedPlanIds.includes(p.id));
            const smartResultsGrid = document.getElementById('smart-results-grid');
            if (smartResultsGrid) renderPlans(recommendedPlans, smartResultsGrid);
        }
    } catch (e) {
        smartRecommendationResult.innerHTML = `<span style="color:red">Error: ${e.message}</span>`;
        smartRecommendationResult.style.display = 'block';
    }
    btnSmartRecommend.innerHTML = '<i class="fa-solid fa-wand-magic-sparkles"></i> ✨ Analizar mi perfil y recomendarme';
}

if(btnSmartRecommend) {
    btnSmartRecommend.addEventListener('click', () => {
        ensureProfileThen({ mode: 'ai', onReady: runSmartRecommend });
    });
}

// --- Profile-completion gate (flujo A) ---
const profileModal = document.getElementById('profile-modal');
const profileForm = document.getElementById('profile-form');
const profileLegalSection = document.getElementById('profile-legal-section');
const profileSubtitle = profileModal.querySelector('.auth-header p');
const closeProfileModalBtn = document.getElementById('close-profile-modal-btn');
let onProfileSaved = null;

function isProfileCompleteForSwitch(profile) {
    // Campos mínimos exigidos por los mocks MVNE (KYC/SEPA/portabilidad).
    return !!(profile && profile.dni && profile.iban && profile.phone);
}

function isProfileCompleteForAI(profile) {
    // Datos que necesita la IA para una recomendación personalizada útil.
    return !!(profile && profile.currentCompany && profile.currentPrice && profile.currentPlan && profile.desiredFeatures);
}

function openProfileModal({ mode, profile, onSaved }) {
    const isFull = mode === 'full';
    profileLegalSection.style.display = isFull ? 'flex' : 'none';
    profileSubtitle.setAttribute('data-i18n', isFull ? 'profile_subtitle' : 'profile_subtitle_ai');
    ['profile-dni', 'profile-phone', 'profile-iban'].forEach(id => {
        document.getElementById(id).required = isFull;
    });
    updateTranslations();

    document.getElementById('profile-fullname').value = profile.fullname || '';
    document.getElementById('profile-dni').value = profile.dni || '';
    document.getElementById('profile-phone').value = profile.phone || '';
    document.getElementById('profile-address').value = profile.address || '';
    document.getElementById('profile-iban').value = profile.iban || '';
    document.getElementById('profile-current-company').value = profile.currentCompany || '';
    document.getElementById('profile-current-price').value = profile.currentPrice || '';
    document.getElementById('profile-current-plan').value = profile.currentPlan || '';
    document.getElementById('profile-desired-features').value = profile.desiredFeatures || '';

    onProfileSaved = onSaved;
    profileModal.classList.add('active');
}

function closeProfileModal() {
    profileModal.classList.remove('active');
    onProfileSaved = null;
}

async function ensureProfileThen({ mode, onReady }) {
    const token = localStorage.getItem('token');
    if (!token) {
        alert(lang === 'es' ? "Debes iniciar sesión o registrarte." : "You must log in or register.");
        resetModalView();
        authModal.classList.add('active');
        return;
    }
    try {
        const res = await fetch('/api/profile', { headers: { 'Authorization': `Bearer ${token}` } });
        if (!res.ok) throw new Error('profile fetch failed');
        const profile = await res.json();
        const check = mode === 'full' ? isProfileCompleteForSwitch : isProfileCompleteForAI;
        if (check(profile)) {
            onReady();
        } else {
            openProfileModal({ mode, profile, onSaved: onReady });
        }
    } catch (err) {
        alert(lang === 'es' ? "No se pudo comprobar tu perfil. Inténtalo de nuevo." : "Could not check your profile. Please try again.");
    }
}

function handleHireClick(planId) {
    ensureProfileThen({ mode: 'full', onReady: () => startPlanSwitchUrl(planId) });
}

closeProfileModalBtn.addEventListener('click', closeProfileModal);

profileModal.addEventListener('click', (e) => {
    if (e.target === profileModal) closeProfileModal();
});

profileForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const body = {
        fullname: document.getElementById('profile-fullname').value,
        dni: document.getElementById('profile-dni').value,
        phone: document.getElementById('profile-phone').value,
        address: document.getElementById('profile-address').value,
        iban: document.getElementById('profile-iban').value,
        currentCompany: document.getElementById('profile-current-company').value,
        currentPrice: document.getElementById('profile-current-price').value,
        currentPlan: document.getElementById('profile-current-plan').value,
        desiredFeatures: document.getElementById('profile-desired-features').value,
    };
    const submitBtn = document.getElementById('profile-submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';
    try {
        const res = await fetch('/api/profile', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
            body: JSON.stringify(body),
        });
        if (!res.ok) throw new Error('save failed');
        const cb = onProfileSaved;
        closeProfileModal();
        if (cb) cb();
    } catch (err) {
        alert(lang === 'es' ? "No se pudo guardar el perfil. Inténtalo de nuevo." : "Could not save your profile. Please try again.");
    } finally {
        submitBtn.innerHTML = originalText;
    }
});

const smartResultsGridListener = document.getElementById('smart-results-grid');
if (smartResultsGridListener) {
    smartResultsGridListener.addEventListener('click', async (e) => {
        if (e.target.classList.contains('hire-btn')) {
            handleHireClick(e.target.getAttribute('data-id'));
        }
    });
}

// --- Plan Switching Logic ---
const switchModal = document.getElementById('switch-modal');
const closeSwitchBtn = document.getElementById('close-switch-btn');
const switchHeader = document.getElementById('switch-header');
const switchStepsContainer = document.getElementById('switch-steps');
const switchSuccess = document.getElementById('switch-success');

const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');

resultsGrid.addEventListener('click', async (e) => {
    if (e.target.classList.contains('hire-btn')) {
        handleHireClick(e.target.getAttribute('data-id'));
    }
});

closeSwitchBtn.addEventListener('click', () => {
    switchModal.classList.remove('active');
    loadUserProfileAndOrders();
});

async function startPlanSwitchUrl(planId) {
    // Reset modal state
    switchHeader.style.display = 'block';
    switchStepsContainer.style.display = 'flex';
    switchSuccess.style.display = 'none';
    
    [step1, step2, step3].forEach(step => {
        step.classList.remove('active', 'done');
        step.classList.add('pending');
    });

    switchModal.classList.add('active');

    // Step 1
    step1.classList.add('active');
    await new Promise(r => setTimeout(r, 1500));
    step1.classList.remove('active');
    step1.classList.add('done');

    // Step 2
    step2.classList.add('active');
    await new Promise(r => setTimeout(r, 1500));
    step2.classList.remove('active');
    step2.classList.add('done');

    // Step 3 API Call
    step3.classList.add('active');
    
    // Obtenemos los detalles de la tarifa a contratar
    const plan = plans.find(p => p.id == planId);
    const planName = plan ? `${plan.operator} ${plan.dataText}` : 'Tarifa Móvil';
    const planPrice = plan ? plan.price : 0;
    
    let hasError = false;
    let errorMsg = '';

    try {
        const token = localStorage.getItem('token');
        const response = await fetch('/api/switch-plan', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ planId, planName, planPrice })
        });
        
        if (!response.ok) {
            const data = await response.json();
            throw new Error(data.error || 'API Error');
        }
        const data = await response.json();
        
        const orderIdEl = document.getElementById('success-order-id');
        if (orderIdEl && data.orderId) {
            orderIdEl.innerText = `#${data.orderId.toString().padStart(4, '0')} - SIM: ${data.iccid || ''}`;
        }
    } catch (e) {
        console.error("API Switch error:", e);
        hasError = true;
        errorMsg = e.message;
    }

    step3.classList.remove('active');
    step3.classList.add('done');

    // Success or Error screen
    setTimeout(() => {
        switchHeader.style.display = 'none';
        switchStepsContainer.style.display = 'none';
        switchSuccess.style.display = 'block';
        
        if (hasError) {
            switchSuccess.innerHTML = `
                <i class="fa-solid fa-circle-xmark" style="font-size: 4rem; color: #ff4b4b; margin-bottom: 20px; filter: drop-shadow(0 0 15px rgba(255, 75, 75, 0.4));"></i>
                <h3 style="margin-bottom: 12px; font-size: 1.5rem; color: #ff4b4b;">Operación Rechazada</h3>
                <div style="background: rgba(255, 75, 75, 0.1); border: 1px solid rgba(255, 75, 75, 0.3); border-radius: 8px; padding: 15px; margin-bottom: 15px; color: #fff;">
                    <p style="margin:0; font-size: 0.9rem;"><strong>Motivo:</strong> ${errorMsg}</p>
                </div>
                <button type="button" class="ai-search-btn" id="temp-close-btn" style="width: 100%; margin-top: 25px;" onclick="document.getElementById('switch-modal').classList.remove('active')">Cerrar</button>
            `;
        } else {
            // Restore default success content just in case previous attempt was error
            switchSuccess.innerHTML = `
                <i class="fa-solid fa-circle-check" style="font-size: 4rem; color: #10b981; margin-bottom: 20px; filter: drop-shadow(0 0 15px rgba(16, 185, 129, 0.4));"></i>
                <h3 data-i18n="sw_success" style="margin-bottom: 12px; font-size: 1.5rem;">¡Tarifa cambiada con éxito!</h3>
                <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 8px; padding: 10px; margin-bottom: 15px;">
                    <p style="margin:0; font-size: 0.9rem;">Pedido <strong id="success-order-id">${document.getElementById('success-order-id')?.innerText || '#000'}</strong></p>
                </div>
                <p data-i18n="sw_success_desc" style="color: var(--text-secondary); line-height: 1.5;">A partir de este momento disfrutas de tu nueva tarifa automáticamente. Hemos enviado un correo con todos los detalles.</p>
                <button type="button" class="ai-search-btn" id="close-switch-btn" style="width: 100%; margin-top: 25px;">Cerrar y ver mis pedidos</button>
            `;
            // Re-attach listener
            document.getElementById('close-switch-btn').addEventListener('click', () => {
                switchModal.classList.remove('active');
                loadUserProfileAndOrders();
            });
        }
    }, 500);
}
