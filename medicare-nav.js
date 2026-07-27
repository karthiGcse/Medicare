/**
 * MediCare Global Navigation & Router Engine
 * Connects all 15 modules and 64 HTML pages across PROJECT MEDICARE.
 */

(function () {
    const MEDICARE_ROUTES = {
        'home': 'index.html',
        'dashboard': 'Dashboad page/code.html',
        
        // Auth
        'login': 'Login page/stitch_medicare_login_page/attractive_login_experience/code.html',
        'signup': 'Login page/stitch_medicare_login_page/sign_up_experience/code.html',
        'forgot-password': 'Login page/stitch_medicare_login_page/forgot_password_experience/code.html',
        'reset-password': 'Login page/stitch_medicare_login_page/reset_password_experience/code.html',
        'password-updated': 'Login page/stitch_medicare_login_page/update_password_success/code.html',
        'google-signin': 'Login page/stitch_medicare_login_page/continue_with_google/code.html',
        'apple-signin': 'Login page/stitch_medicare_login_page/continue_with_apple/code.html',
        
        // AI Suite
        'ai-assistant': 'AI Assistant/code.html',
        'ai-analyzer': 'AI health analyzer/code.html',
        
        // Symptom Checker
        'symptom-intake': 'Symptom check page/symptom_intake_neumorphic_edition/code.html',
        'symptom-report': 'Symptom check page/analysis_report_neumorphic_edition/code.html',
        'symptom-critical': 'Symptom check page/high_risk_report_neumorphic_edition/code.html',
        
        // Telemedicine & Doctors
        'telemedicine': 'Global Telemedicine/stitch_medicare_login_page/ultra_premium_global_telemedicine_experience/code.html',
        'specialist-discovery': 'Global Telemedicine/stitch_medicare_login_page/elite_specialist_discovery_refined_outlines/code.html',
        'doctor-profile': 'Global Telemedicine/stitch_medicare_login_page/elite_specialist_discovery_immersive_red_green_ui/code.html',
        'telemedicine-intake': 'Global Telemedicine/stitch_medicare_login_page/ultra_premium_patient_intake_experience/code.html',
        'telemedicine-confirm': 'Global Telemedicine/stitch_medicare_login_page/elite_ultra_premium_appointment_confirmation_higher_ui/code.html',
        'book-doctor': 'doctor appointment booking/stitch_medicare_login_page/ultra_premium_appointment_booking_with_intake_step/code.html',
        'doctor-intake': 'doctor appointment booking/stitch_medicare_login_page/ultra_premium_patient_intake_high_fidelity_ui/code.html',
        'doctor-confirm': 'doctor appointment booking/stitch_medicare_login_page/ultra_premium_appointment_confirmation_experience/code.html',
        
        // Prescriptions & Pharmacy & Drone
        'prescriptions': 'Add medican/stitch_medicare_login_page/medicare_prescriptions_silk_edition/code.html',
        'add-medication': 'Add medican/stitch_medicare_login_page/manual_medication_entry_silk_edition/code.html',
        'medicine-lookup': 'medical lookup/stitch_medicare_login_page/medicine_lookup_chroma_edition/code.html',
        'medication-details': 'medical lookup/stitch_medicare_login_page/medication_details_chroma_edition/code.html',
        'drug-interaction': 'medical interaction page/code.html',
        'drone-delivery': 'Drone delivery/stitch_medicare_login_page/drone_medicine_delivery/code.html',
        'drone-checkout': 'Drone delivery/stitch_medicare_login_page/order_medicine_summary_checkout/code.html',
        'drone-confirm': 'Drone delivery/stitch_medicare_login_page/drone_order_confirmation/code.html',
        
        // Home Lab Testing
        'lab-tests': 'Home lab test/stitch_medicare_login_page/home_lab_booking_results_search/code.html',
        'lab-intake': 'Home lab test/stitch_medicare_login_page/home_lab_booking_patient_information/code.html',
        'lab-payment': 'Home lab test/stitch_medicare_login_page/home_lab_booking_summary_payment/code.html',
        'lab-confirm': 'Home lab test/stitch_medicare_login_page/lab_booking_confirmation_success/code.html',
        
        // Hospital Queue
        'hospital-queue': 'Hospital Queue/stitch_medicare_login_page/elite_hospital_selection_luminous_design_refresh/code.html',
        'hospital-dept': 'Hospital Queue/stitch_medicare_login_page/elite_department_selection_lite_green_glass_ui/code.html',
        'hospital-register': 'Hospital Queue/stitch_medicare_login_page/elite_ultra_premium_patient_registration_step_2_refresh/code.html',
        'queue-token': 'Hospital Queue/stitch_medicare_login_page/queue_token_confirmation/code.html',
        
        // Blood Procurement
        'blood-procurement': 'Blood marketplace/stitch_medicare_login_page/blood_procurement_search_results/code.html',
        'donor-profile': 'Blood marketplace/stitch_medicare_login_page/donor_clinical_profile_safety_report/code.html',
        'blood-checkout': 'Blood marketplace/stitch_medicare_login_page/procurement_request_checkout/code.html',
        
        // Mental Health
        'mental-health': 'Mental Health/stitch_medicare_login_page/ultra_premium_mental_health_companion_immersive_ui/code.html',
        'ai-emotional-chat': 'Mental Health/stitch_medicare_login_page/ai_companion_conversation/code.html',
        'mood-analytics': 'Mental Health/stitch_medicare_login_page/premium_mood_history_analytics/code.html',
        'restorative-breathing': 'Mental Health/stitch_medicare_login_page/ultra_premium_restorative_breathing_experience/code.html',
        
        // Bio-Nutrition
        'nutrition-planner': 'Nutrition and dieat plan/stitch_medicare_login_page/daily_planner_silk_edition/code.html',
        'grocery-matrix': 'Nutrition and dieat plan/stitch_medicare_login_page/ai_grocery_matrix_silk_edition/code.html',
        'progress-photo-sync': 'Nutrition and dieat plan/stitch_medicare_login_page/progress_ai_photo_log_silk_edition/code.html',
        'weekly-nutrition': 'Nutrition and dieat plan/stitch_medicare_login_page/weekly_strategy_silk_edition/code.html',
        
        // Family Hub
        'family-hub': 'Famly hub/stitch_medicare_login_page/family_health_command_vibrant_edition/code.html',
        'family-intake': 'Famly hub/stitch_medicare_login_page/clinical_member_intake_vibrant_edition/code.html',
        'family-success': 'Famly hub/stitch_medicare_login_page/member_registration_success_vibrant_edition/code.html',
        
        // Reminders
        'reminders': 'smart remainder/stitch_medicare_login_page/ultra_premium_smart_reminders_experience_final/code.html',
        'add-reminder': 'smart remainder/stitch_medicare_login_page/add_new_reminder_experience/code.html',
        
        // Diagnostic Image
        'diagnostic-image': 'Diagnostic Image/stitch_medicare_login_page/ai_image_diagnosis_aura_health_edition/code.html',
        'image-comparison': 'Diagnostic Image/stitch_medicare_login_page/ai_image_comparison_aura_health_edition/code.html',
        'diagnostic-report': 'Diagnostic Image/stitch_medicare_login_page/analysis_report_aura_health_edition/code.html'
    };

    function calculatePrefix() {
        // Path calculation relative to PROJECT MEDICARE root
        let path = window.location.pathname.replace(/\\/g, '/');
        const rootMarker = '/PROJECT MEDICARE/';
        const idx = path.toUpperCase().indexOf(rootMarker);
        
        if (idx !== -1) {
            let rel = path.substring(idx + rootMarker.length);
            let segments = rel.split('/').filter(Boolean);
            if (segments.length <= 1) return './';
            return '../'.repeat(segments.length - 1);
        }
        
        // Fallback calculation based on depth
        let parts = path.split('/').filter(p => p.length > 0 && !p.endsWith('.html'));
        if (parts.length === 0) return './';
        if (path.includes('/stitch_medicare_login_page/')) {
            return '../../../';
        }
        if (parts.length >= 2) return '../../';
        if (parts.length === 1) return '../';
        return './';
    }

    const PREFIX = calculatePrefix();

    function getUrl(routeKey) {
        if (MEDICARE_ROUTES[routeKey]) {
            return PREFIX + MEDICARE_ROUTES[routeKey];
        }
        return PREFIX + 'index.html';
    }

    window.MediCareNav = {
        routes: MEDICARE_ROUTES,
        prefix: PREFIX,
        getUrl: getUrl,
        navigate: function (routeKey) {
            window.location.href = getUrl(routeKey);
        }
    };

    // Auto-inject UI floating navigation launcher & quick switcher
    document.addEventListener('DOMContentLoaded', function () {
        injectFloatingNav();
        wirePageLinks();
    });

    function injectFloatingNav() {
        if (document.getElementById('medicare-floating-hub')) return;

        const navHtml = `
        <div id="medicare-floating-hub" style="position: fixed; bottom: 20px; right: 20px; z-index: 9999; font-family: system-ui, -apple-system, sans-serif;">
            <!-- Floating Main Launcher Pill -->
            <button id="medicare-hub-btn" style="
                display: flex; items-center; justify-content: center; gap: 8px;
                background: linear-gradient(135deg, #0056b3 0%, #7c3aed 100%);
                color: #ffffff; padding: 10px 18px; border-radius: 9999px;
                box-shadow: 0 10px 25px -5px rgba(124, 58, 237, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.3);
                border: 1px solid rgba(255, 255, 255, 0.3); font-weight: 600; font-size: 13px;
                cursor: pointer; transition: all 0.25s ease; backdrop-filter: blur(12px);
            ">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>
                </svg>
                <span>MediCare Hub</span>
                <span style="background: rgba(255,255,255,0.25); font-size: 10px; padding: 2px 6px; border-radius: 10px;">Ctrl+K</span>
            </button>

            <!-- Command Switcher Modal Overlay -->
            <div id="medicare-hub-modal" style="
                display: none; position: fixed; inset: 0; background: rgba(15, 23, 42, 0.65);
                backdrop-filter: blur(8px); z-index: 10000; align-items: center; justify-content: center; padding: 16px;
            ">
                <div style="
                    width: 100%; max-width: 680px; background: #0f172a; border: 1px solid rgba(255,255,255,0.15);
                    border-radius: 20px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7); overflow: hidden;
                    color: #f8fafc; display: flex; flex-direction: column; max-height: 85vh;
                ">
                    <!-- Modal Header & Search -->
                    <div style="padding: 16px 20px; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; gap: 12px;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        <input id="medicare-search-input" type="text" placeholder="Search MediCare modules, tools, pages... (e.g. Doctor, Symptom, Drone, Queue, Lab)" style="
                            flex: 1; background: transparent; border: none; outline: none; color: #fff; font-size: 15px; font-family: inherit;
                        ">
                        <button id="medicare-close-modal" style="background: rgba(255,255,255,0.1); border: none; color: #94a3b8; width: 28px; height: 28px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center;">✕</button>
                    </div>

                    <!-- Category Pills -->
                    <div style="padding: 10px 20px; display: flex; gap: 8px; overflow-x: auto; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 12px;">
                        <button class="medicare-cat-btn active" data-cat="all" style="background: #3b82f6; color: #fff; border: none; padding: 4px 12px; border-radius: 12px; cursor: pointer; white-space: nowrap;">All Modules</button>
                        <button class="medicare-cat-btn" data-cat="core" style="background: rgba(255,255,255,0.08); color: #cbd5e1; border: none; padding: 4px 12px; border-radius: 12px; cursor: pointer; white-space: nowrap;">Core & Auth</button>
                        <button class="medicare-cat-btn" data-cat="ai" style="background: rgba(255,255,255,0.08); color: #cbd5e1; border: none; padding: 4px 12px; border-radius: 12px; cursor: pointer; white-space: nowrap;">AI & Clinical</button>
                        <button class="medicare-cat-btn" data-cat="care" style="background: rgba(255,255,255,0.08); color: #cbd5e1; border: none; padding: 4px 12px; border-radius: 12px; cursor: pointer; white-space: nowrap;">Care & Doctors</button>
                        <button class="medicare-cat-btn" data-cat="pharmacy" style="background: rgba(255,255,255,0.08); color: #cbd5e1; border: none; padding: 4px 12px; border-radius: 12px; cursor: pointer; white-space: nowrap;">Pharmacy & Drone</button>
                        <button class="medicare-cat-btn" data-cat="wellness" style="background: rgba(255,255,255,0.08); color: #cbd5e1; border: none; padding: 4px 12px; border-radius: 12px; cursor: pointer; white-space: nowrap;">Wellness & Family</button>
                    </div>

                    <!-- Module Grid List -->
                    <div id="medicare-grid-list" style="padding: 16px; overflow-y: auto; display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px;">
                    </div>

                    <!-- Modal Footer -->
                    <div style="padding: 12px 20px; background: rgba(0,0,0,0.3); border-top: 1px solid rgba(255,255,255,0.05); display: flex; justify-content: space-between; align-items: center; font-size: 12px; color: #64748b;">
                        <span>MediCare Unified Ecosystem • 15 Connected Modules</span>
                        <span>Press <kbd style="background: rgba(255,255,255,0.1); padding: 2px 6px; border-radius: 4px; color: #94a3b8;">ESC</kbd> to close</span>
                    </div>
                </div>
            </div>
        </div>
        `;

        document.body.insertAdjacentHTML('beforeend', navHtml);

        const hubBtn = document.getElementById('medicare-hub-btn');
        const modal = document.getElementById('medicare-hub-modal');
        const closeBtn = document.getElementById('medicare-close-modal');
        const searchInput = document.getElementById('medicare-search-input');
        const gridList = document.getElementById('medicare-grid-list');

        const MODULE_CARDS = [
            { key: 'home', title: 'Platform Launchpad', desc: 'Central Overview & Master Hub', icon: '🚀', cat: 'core' },
            { key: 'dashboard', title: 'Patient Dashboard', desc: 'Wellness pulse & vital summary', icon: '📊', cat: 'core' },
            { key: 'login', title: 'Login & Authentication', desc: 'Sign in, Sign up & Password reset', icon: '🔐', cat: 'core' },
            
            { key: 'ai-assistant', title: 'AI Health Assistant', desc: 'Interactive AI voice & consultation', icon: '🤖', cat: 'ai' },
            { key: 'ai-analyzer', title: 'AI Health Vitals Analyzer', desc: 'Clinical score & health metrics', icon: '🔬', cat: 'ai' },
            { key: 'symptom-intake', title: 'AI Symptom Checker', desc: 'Smart intake & triage report', icon: '🩺', cat: 'ai' },
            { key: 'diagnostic-image', title: 'Diagnostic Image AI', desc: 'Scan analysis & comparison', icon: '🖼️', cat: 'ai' },
            
            { key: 'telemedicine', title: 'Global Telemedicine', desc: 'Specialist discovery & intake', icon: '🌐', cat: 'care' },
            { key: 'book-doctor', title: 'Doctor Appointment Booking', desc: 'Schedule appointments & intake', icon: '👨‍⚕️', cat: 'care' },
            { key: 'lab-tests', title: 'Home Lab Testing', desc: 'Diagnostic test booking & results', icon: '🧪', cat: 'care' },
            { key: 'hospital-queue', title: 'Smart Hospital Queue', desc: 'Live tokens & department selection', icon: '🏥', cat: 'care' },
            
            { key: 'prescriptions', title: 'Prescriptions & Meds', desc: 'Prescription hub & medication add', icon: '💊', cat: 'pharmacy' },
            { key: 'medicine-lookup', title: 'Medicine Lookup', desc: 'Drug details & interaction checker', icon: '🔍', cat: 'pharmacy' },
            { key: 'drone-delivery', title: 'Drone Medicine Delivery', desc: 'Live GPS drone tracking & checkout', icon: '🛸', cat: 'pharmacy' },
            { key: 'blood-procurement', title: 'Blood Procurement', desc: 'Blood donor safety & checkout', icon: '🩸', cat: 'pharmacy' },
            
            { key: 'mental-health', title: 'Mental Health Companion', desc: 'Mood analytics & 3D breathing', icon: '🧠', cat: 'wellness' },
            { key: 'nutrition-planner', title: 'Bio-Nutrition Planner', desc: 'Daily diet & AI grocery matrix', icon: '🥗', cat: 'wellness' },
            { key: 'family-hub', title: 'Family Health Command', desc: 'Multi-member family profiles', icon: '👨‍👩‍👧‍👦', cat: 'wellness' },
            { key: 'reminders', title: 'Smart Reminders', desc: 'Medication alerts & schedules', icon: '⏰', cat: 'wellness' }
        ];

        function renderCards(filterText = '', category = 'all') {
            gridList.innerHTML = '';
            MODULE_CARDS.forEach(m => {
                if (category !== 'all' && m.cat !== category) return;
                if (filterText) {
                    const q = filterText.toLowerCase();
                    if (!m.title.toLowerCase().includes(q) && !m.desc.toLowerCase().includes(q)) return;
                }

                const url = getUrl(m.key);
                const card = document.createElement('a');
                card.href = url;
                card.style.cssText = `
                    background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px; padding: 12px; text-decoration: none; color: #fff;
                    display: flex; flex-direction: column; gap: 6px; transition: all 0.2s ease;
                `;
                card.innerHTML = `
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                        <span style="font-size: 22px;">${m.icon}</span>
                        <span style="font-size: 10px; color: #3b82f6; background: rgba(59,130,246,0.15); padding: 2px 6px; border-radius: 6px; font-weight: 600; text-transform: uppercase;">Launch</span>
                    </div>
                    <span style="font-size: 13px; font-weight: 600; color: #f8fafc; line-height: 1.2;">${m.title}</span>
                    <span style="font-size: 11px; color: #94a3b8; line-height: 1.3;">${m.desc}</span>
                `;
                card.onmouseenter = () => { card.style.background = 'rgba(59, 130, 246, 0.15)'; card.style.borderColor = 'rgba(59, 130, 246, 0.4)'; };
                card.onmouseleave = () => { card.style.background = 'rgba(255, 255, 255, 0.05)'; card.style.borderColor = 'rgba(255, 255, 255, 0.1)'; };
                gridList.appendChild(card);
            });
        }

        renderCards();

        function toggleModal(show) {
            modal.style.display = show ? 'flex' : 'none';
            if (show) {
                searchInput.value = '';
                renderCards();
                setTimeout(() => searchInput.focus(), 50);
            }
        }

        hubBtn.addEventListener('click', () => toggleModal(true));
        closeBtn.addEventListener('click', () => toggleModal(false));
        modal.addEventListener('click', (e) => {
            if (e.target === modal) toggleModal(false);
        });

        document.addEventListener('keydown', (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                toggleModal(modal.style.display !== 'flex');
            } else if (e.key === 'Escape' && modal.style.display === 'flex') {
                toggleModal(false);
            }
        });

        searchInput.addEventListener('input', (e) => {
            const activeCat = document.querySelector('.medicare-cat-btn.active')?.dataset.cat || 'all';
            renderCards(e.target.value, activeCat);
        });

        document.querySelectorAll('.medicare-cat-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.medicare-cat-btn').forEach(b => {
                    b.style.background = 'rgba(255,255,255,0.08)';
                    b.style.color = '#cbd5e1';
                    b.classList.remove('active');
                });
                btn.style.background = '#3b82f6';
                btn.style.color = '#fff';
                btn.classList.add('active');
                renderCards(searchInput.value, btn.dataset.cat);
            });
        });
    }

    function wirePageLinks() {
        // Auto-wire logo clicks to home or dashboard
        document.querySelectorAll('header a, header button, .logo, [alt*="Logo"], [alt*="logo"]').forEach(el => {
            if (el.textContent.includes('Medi') || el.innerHTML.includes('MediCare')) {
                el.style.cursor = 'pointer';
                el.onclick = (e) => {
                    e.preventDefault();
                    MediCareNav.navigate('dashboard');
                };
            }
        });

        // Wire bottom navigation bar buttons if present
        document.querySelectorAll('nav a[data-path]').forEach(a => {
            const path = a.getAttribute('data-path');
            if (path === 'dashboard') a.href = getUrl('dashboard');
            else if (path === 'clinical') a.href = getUrl('telemedicine');
            else if (path === 'ai-tools') a.href = getUrl('ai-assistant');
            else if (path === 'wellness') a.href = getUrl('mental-health');
        });

        // Smart wire empty links '#'
        document.querySelectorAll('a[href="#"], a[href=""]').forEach(a => {
            const text = a.textContent.trim().toLowerCase();
            if (text.includes('symptom')) a.href = getUrl('symptom-intake');
            else if (text.includes('doctor') || text.includes('appointment') || text.includes('consult')) a.href = getUrl('telemedicine');
            else if (text.includes('prescription') || text.includes('med')) a.href = getUrl('prescriptions');
            else if (text.includes('drone') || text.includes('delivery')) a.href = getUrl('drone-delivery');
            else if (text.includes('lab') || text.includes('test')) a.href = getUrl('lab-tests');
            else if (text.includes('queue') || text.includes('hospital')) a.href = getUrl('hospital-queue');
            else if (text.includes('blood') || text.includes('donor')) a.href = getUrl('blood-procurement');
            else if (text.includes('mental') || text.includes('breath') || text.includes('mood')) a.href = getUrl('mental-health');
            else if (text.includes('nutrition') || text.includes('diet') || text.includes('grocery')) a.href = getUrl('nutrition-planner');
            else if (text.includes('family') || text.includes('hub')) a.href = getUrl('family-hub');
            else if (text.includes('reminder')) a.href = getUrl('reminders');
            else if (text.includes('login') || text.includes('sign in')) a.href = getUrl('login');
            else if (text.includes('sign up') || text.includes('register')) a.href = getUrl('signup');
            else if (text.includes('dashboard') || text.includes('home')) a.href = getUrl('dashboard');
        });
    }
})();
