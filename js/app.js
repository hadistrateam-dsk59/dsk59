/**
 * LOGIKA INTERAKTIF FRONTEND SIM SEKOLAH
 * Berdasarkan Spesifikasi PRD v1.0
 */

document.addEventListener('DOMContentLoaded', () => {
  // Inisialisasi semua komponen
  initHeaderAndNav();
  initStatsCounter();
  initModulesSection();
  initRoleSwitcher();
  initAchievementsFilter();
  initNewsSection();
  initFacilitiesSection();
  initFaqAccordion();
  initLoginModal();
  initAnnouncementModal();
  initContactForm();
  initLiveClock();
  
  // Render Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

/**
 * 1. Header & Navigation (Sticky, Mobile Drawer, Active Link)
 */
function initHeaderAndNav() {
  const header = document.getElementById('main-header');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky header background transition
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('shadow-md', 'bg-white/95');
      header.classList.remove('bg-white/80');
    } else {
      header.classList.remove('shadow-md', 'bg-white/95');
      header.classList.add('bg-white/80');
    }
  });

  // Mobile menu toggle
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        mobileMenuBtn.innerHTML = '<i data-lucide="x" class="w-6 h-6 text-slate-700"></i>';
      } else {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.innerHTML = '<i data-lucide="menu" class="w-6 h-6 text-slate-700"></i>';
      }
      if (window.lucide) window.lucide.createIcons();
    });

    // Close mobile menu when clicking any nav link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.innerHTML = '<i data-lucide="menu" class="w-6 h-6 text-slate-700"></i>';
        if (window.lucide) window.lucide.createIcons();
      });
    });
  }

  // Active section link indicator
  window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-blue-600', 'font-bold');
      link.classList.add('text-slate-600');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-blue-600', 'font-bold');
        link.classList.remove('text-slate-600');
      }
    });
  });
}

/**
 * 2. Live Academic Clock & Status Indicator
 */
function initLiveClock() {
  const clockEl = document.getElementById('live-academic-clock');
  if (!clockEl) return;

  function update() {
    const now = new Date();
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit'
    };
    clockEl.textContent = now.toLocaleDateString('id-ID', options) + ' WIB';
  }
  update();
  setInterval(update, 1000);
}

/**
 * 3. Animated Statistics Counter
 */
function initStatsCounter() {
  const statsContainer = document.getElementById('stats-grid');
  if (!statsContainer || !SIM_DATA.stats) return;

  // Render stats cards
  statsContainer.innerHTML = SIM_DATA.stats.map(s => `
    <div class="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm card-hover flex flex-col justify-between relative overflow-hidden group">
      <div class="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-50/60 rounded-full group-hover:scale-125 transition-transform duration-500 ease-out"></div>
      <div class="flex items-center justify-between mb-4 relative z-10">
        <span class="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
          <i data-lucide="${s.icon}" class="w-6 h-6"></i>
        </span>
        <span class="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full">Real-time</span>
      </div>
      <div class="relative z-10">
        <div class="flex items-baseline gap-1">
          <h3 class="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight stat-number" data-target="${s.value}">0</h3>
          <span class="text-xl font-bold text-blue-600">${s.suffix}</span>
        </div>
        <p class="text-base font-bold text-slate-800 mt-2">${s.label}</p>
        <p class="text-xs text-slate-500 mt-0.5">${s.subtext}</p>
      </div>
    </div>
  `).join('');

  // Intersection Observer for counting
  let animated = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        animateCounters();
      }
    });
  }, { threshold: 0.2 });

  observer.observe(statsContainer);

  function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
      const target = parseFloat(counter.getAttribute('data-target'));
      const isDecimal = target % 1 !== 0;
      const duration = 1800; // ms
      const startTime = performance.now();

      function step(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        const easeOutQuad = 1 - (1 - progress) * (1 - progress);
        const currentVal = target * easeOutQuad;

        counter.textContent = isDecimal 
          ? currentVal.toFixed(1) 
          : Math.floor(currentVal).toLocaleString('id-ID');

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          counter.textContent = isDecimal ? target.toFixed(1) : target.toLocaleString('id-ID');
        }
      }
      requestAnimationFrame(step);
    });
  }
}

/**
 * 4. Modules Section (PRD Section 4)
 */
function initModulesSection() {
  const container = document.getElementById('modules-grid');
  if (!container || !SIM_DATA.modules) return;

  const colorMap = {
    blue: { badge: 'bg-blue-100 text-blue-800 border-blue-200', icon: 'bg-blue-50 text-blue-600' },
    emerald: { badge: 'bg-emerald-100 text-emerald-800 border-emerald-200', icon: 'bg-emerald-50 text-emerald-600' },
    amber: { badge: 'bg-amber-100 text-amber-800 border-amber-200', icon: 'bg-amber-50 text-amber-600' },
    purple: { badge: 'bg-purple-100 text-purple-800 border-purple-200', icon: 'bg-purple-50 text-purple-600' },
    rose: { badge: 'bg-rose-100 text-rose-800 border-rose-200', icon: 'bg-rose-50 text-rose-600' },
    cyan: { badge: 'bg-cyan-100 text-cyan-800 border-cyan-200', icon: 'bg-cyan-50 text-cyan-600' },
    indigo: { badge: 'bg-indigo-100 text-indigo-800 border-indigo-200', icon: 'bg-indigo-50 text-indigo-600' },
    teal: { badge: 'bg-teal-100 text-teal-800 border-teal-200', icon: 'bg-teal-50 text-teal-600' }
  };

  container.innerHTML = SIM_DATA.modules.map(mod => {
    const theme = colorMap[mod.color] || colorMap.blue;
    return `
      <div class="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm card-hover flex flex-col justify-between transition-all duration-300">
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="w-12 h-12 rounded-xl flex items-center justify-center ${theme.icon} shadow-inner">
              <i data-lucide="${mod.icon}" class="w-6 h-6"></i>
            </span>
            <span class="text-xs font-semibold px-2.5 py-1 rounded-full border ${theme.badge}">
              ${mod.badge}
            </span>
          </div>
          <span class="text-xs font-bold uppercase tracking-wider text-slate-400">${mod.category}</span>
          <h3 class="text-xl font-bold text-slate-900 mt-1 mb-2">${mod.title}</h3>
          <p class="text-sm text-slate-600 mb-4 leading-relaxed">${mod.shortDesc}</p>
          
          <ul class="space-y-2 mb-6 border-t border-slate-100 pt-4">
            ${mod.features.map(f => `
              <li class="flex items-start text-xs text-slate-600 gap-2">
                <i data-lucide="check" class="w-4 h-4 text-emerald-500 shrink-0 mt-0.5"></i>
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <button onclick="openDemoLogin('${mod.id}')" class="w-full py-2.5 px-4 bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 font-semibold text-xs rounded-xl border border-slate-200/80 hover:border-blue-200 flex items-center justify-center gap-2 transition-colors">
          <span>Akses Modul di Portal</span>
          <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </button>
      </div>
    `;
  }).join('');
}

/**
 * 5. Role Switcher Experience Simulator (PRD Section 3 RBAC)
 */
function initRoleSwitcher() {
  const tabsContainer = document.getElementById('role-tabs');
  const contentContainer = document.getElementById('role-detail-content');
  if (!tabsContainer || !contentContainer || !SIM_DATA.roles) return;

  // Render Tabs
  tabsContainer.innerHTML = SIM_DATA.roles.map((r, idx) => `
    <button 
      data-role-id="${r.id}" 
      class="role-tab-btn flex items-center gap-3 px-4 py-3 rounded-xl text-left font-medium text-sm transition-all duration-200 ${
        idx === 0 
          ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' 
          : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/70'
      }"
    >
      <img src="${r.avatar}" alt="${r.roleName}" class="w-8 h-8 rounded-full object-cover ring-2 ring-white/50" />
      <div>
        <p class="font-bold leading-tight">${r.roleName}</p>
        <span class="text-[11px] opacity-80">${r.badge}</span>
      </div>
    </button>
  `).join('');

  // Render Initial Role Content
  renderRoleContent(SIM_DATA.roles[0]);

  // Tab click listeners
  const buttons = tabsContainer.querySelectorAll('.role-tab-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const roleId = btn.getAttribute('data-role-id');
      const selectedRole = SIM_DATA.roles.find(r => r.id === roleId);
      if (!selectedRole) return;

      // Update button classes
      buttons.forEach(b => {
        b.className = 'role-tab-btn flex items-center gap-3 px-4 py-3 rounded-xl text-left font-medium text-sm transition-all duration-200 bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/70';
      });
      btn.className = 'role-tab-btn flex items-center gap-3 px-4 py-3 rounded-xl text-left font-medium text-sm transition-all duration-200 bg-blue-600 text-white shadow-md shadow-blue-500/20';

      renderRoleContent(selectedRole);
    });
  });

  function renderRoleContent(role) {
    contentContainer.innerHTML = `
      <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm animate-fadeIn">
        <div class="flex flex-col lg:flex-row gap-8 items-start">
          <div class="lg:w-7/12">
            <div class="flex items-center gap-3 mb-3">
              <span class="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">${role.badge}</span>
              <span class="text-xs text-slate-400 font-medium">Role-Based Access Control</span>
            </div>
            <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">${role.tagline}</h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">${role.description}</p>
            
            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Hak Akses & Fitur Utama:</h4>
            <div class="grid sm:grid-cols-2 gap-3 mb-6">
              ${role.capabilities.map(c => `
                <div class="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <i data-lucide="check-circle-2" class="w-4 h-4 text-blue-600 shrink-0 mt-0.5"></i>
                  <span class="text-xs font-semibold text-slate-700">${c}</span>
                </div>
              `).join('')}
            </div>

            <div class="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-100">
              <button onclick="quickLoginAs('${role.id}')" class="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md shadow-blue-600/20 flex items-center gap-2 transition-all">
                <i data-lucide="log-in" class="w-4 h-4"></i>
                <span>Simulasi Login Peran Ini</span>
              </button>
              <span class="text-xs text-slate-400">Tidak perlu mengisi form, otomatis masuk mode demo</span>
            </div>
          </div>

          <!-- Live Mock Preview Card -->
          <div class="lg:w-5/12 w-full">
            <div class="bg-slate-900 rounded-2xl p-6 text-white shadow-xl border border-slate-800 relative overflow-hidden">
              <div class="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div class="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div class="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <span class="text-xs font-mono text-slate-400 ml-2">SIM Dashboard</span>
                </div>
                <span class="px-2 py-0.5 bg-blue-900/60 text-blue-300 text-[10px] font-mono rounded border border-blue-700/50">RBAC Active</span>
              </div>

              <div class="flex items-center gap-3 mb-6">
                <img src="${role.avatar}" alt="${role.roleName}" class="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500" />
                <div>
                  <h4 class="font-bold text-sm text-white">${role.roleName}</h4>
                  <p class="text-xs text-slate-400 font-mono">${role.previewSnippet.status}</p>
                </div>
              </div>

              <!-- Quick Metrics Box -->
              <div class="grid grid-cols-3 gap-2 mb-6 text-center">
                ${role.quickStats.map(s => `
                  <div class="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                    <p class="text-xs text-slate-400">${s.label}</p>
                    <p class="text-sm font-bold text-blue-400 mt-1">${s.value}</p>
                  </div>
                `).join('')}
              </div>

              <!-- Workflow Live Status -->
              <div class="bg-slate-800/50 rounded-xl p-3 border border-slate-700/50 text-xs space-y-2">
                <div class="flex justify-between items-center text-slate-300">
                  <span>${role.previewSnippet.metric1}</span>
                  <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-400"></i>
                </div>
                <div class="flex justify-between items-center text-slate-300">
                  <span>${role.previewSnippet.metric2}</span>
                  <i data-lucide="activity" class="w-3.5 h-3.5 text-amber-400"></i>
                </div>
              </div>

              <div class="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span class="flex items-center gap-1">
                  <span class="w-2 h-2 rounded-full bg-emerald-400 status-dot-pulse"></span>
                  Terhubung ke Database
                </span>
                <span>T.A 2026/2027</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
  }
}

/**
 * 6. Prestasi Siswa & Filter Tabs (PRD Section 4.11)
 */
function initAchievementsFilter() {
  const container = document.getElementById('achievements-grid');
  const filterTabs = document.querySelectorAll('.achievement-filter-btn');
  if (!container || !SIM_DATA.achievements) return;

  function renderList(category) {
    const filtered = category === 'all' 
      ? SIM_DATA.achievements 
      : SIM_DATA.achievements.filter(a => a.category === category);

    container.innerHTML = filtered.map(item => `
      <div class="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm card-hover flex flex-col justify-between group">
        <div>
          <div class="relative h-48 overflow-hidden bg-slate-100">
            <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div class="absolute top-3 left-3">
              <span class="px-2.5 py-1 bg-amber-500 text-white text-[11px] font-bold rounded-full shadow-md flex items-center gap-1">
                <i data-lucide="award" class="w-3 h-3"></i>
                ${item.levelBadge}
              </span>
            </div>
            <div class="absolute bottom-3 left-3 right-3 text-white">
              <span class="text-[11px] font-medium text-slate-200">${item.categoryLabel} • ${item.date}</span>
            </div>
          </div>
          <div class="p-5">
            <h4 class="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">${item.title}</h4>
            <div class="flex items-center gap-2 mb-3">
              <span class="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                ${item.student.charAt(0)}
              </span>
              <div>
                <p class="text-xs font-bold text-slate-800">${item.student}</p>
                <p class="text-[11px] text-slate-500">${item.class}</p>
              </div>
            </div>
            <p class="text-xs text-slate-500 flex items-center gap-1.5 border-t border-slate-100 pt-3">
              <i data-lucide="building-2" class="w-3.5 h-3.5 text-slate-400 shrink-0"></i>
              <span class="truncate">Penyelenggara: ${item.organizer}</span>
            </p>
          </div>
        </div>
      </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
  }

  // Initial render
  renderList('all');

  // Filter tab events
  filterTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-filter');
      filterTabs.forEach(b => {
        b.classList.remove('bg-blue-600', 'text-white', 'shadow-md');
        b.classList.add('bg-white', 'text-slate-600', 'hover:bg-slate-100');
      });
      btn.classList.add('bg-blue-600', 'text-white', 'shadow-md');
      btn.classList.remove('bg-white', 'text-slate-600', 'hover:bg-slate-100');
      renderList(cat);
    });
  });
}

/**
 * 7. News & Announcements (PRD Section 4.14)
 */
function initNewsSection() {
  const container = document.getElementById('news-grid');
  if (!container || !SIM_DATA.news) return;

  container.innerHTML = SIM_DATA.news.map(item => `
    <div class="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm card-hover flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg border border-blue-100">${item.category}</span>
          <span class="text-xs text-slate-400 font-medium">${item.date}</span>
        </div>
        <h4 class="text-lg font-bold text-slate-900 mb-2 hover:text-blue-600 transition-colors cursor-pointer" onclick="openAnnouncementModal('${item.id}')">${item.title}</h4>
        <p class="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed">${item.excerpt}</p>
      </div>
      <div class="border-t border-slate-100 pt-4 flex items-center justify-between">
        <span class="text-[11px] text-slate-500 flex items-center gap-1">
          <i data-lucide="user" class="w-3.5 h-3.5 text-slate-400"></i>
          ${item.author}
        </span>
        <button onclick="openAnnouncementModal('${item.id}')" class="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 group">
          <span>Baca Selengkapnya</span>
          <i data-lucide="arrow-right" class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"></i>
        </button>
      </div>
    </div>
  `).join('');
}

/**
 * 8. Facilities Showcase (PRD Section 5.1)
 */
function initFacilitiesSection() {
  const container = document.getElementById('facilities-grid');
  if (!container || !SIM_DATA.facilities) return;

  container.innerHTML = SIM_DATA.facilities.map(fac => `
    <div class="relative rounded-2xl overflow-hidden group shadow-md h-72">
      <img src="${fac.image}" alt="${fac.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
        <span class="w-10 h-10 rounded-xl bg-blue-600/80 backdrop-blur text-white flex items-center justify-center mb-3">
          <i data-lucide="${fac.icon}" class="w-5 h-5"></i>
        </span>
        <h4 class="text-xl font-bold text-white mb-1">${fac.title}</h4>
        <p class="text-xs text-slate-300 leading-relaxed">${fac.desc}</p>
      </div>
    </div>
  `).join('');
}

/**
 * 9. FAQ Accordion (PRD Section 1 & 6)
 */
function initFaqAccordion() {
  const container = document.getElementById('faq-accordion');
  if (!container || !SIM_DATA.faqs) return;

  container.innerHTML = SIM_DATA.faqs.map((faq, idx) => `
    <div class="accordion-item border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all duration-200">
      <button class="accordion-header w-full px-6 py-5 text-left font-bold text-slate-800 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
        <span class="text-sm sm:text-base">${faq.q}</span>
        <span class="accordion-icon w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 transition-transform duration-300">
          <i data-lucide="chevron-down" class="w-4 h-4"></i>
        </span>
      </button>
      <div class="accordion-content px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100/60 pt-4 bg-slate-50/50">
        <p>${faq.a}</p>
      </div>
    </div>
  `).join('');

  const headers = container.querySelectorAll('.accordion-header');
  headers.forEach(h => {
    h.addEventListener('click', () => {
      const parent = h.parentElement;
      const isActive = parent.classList.contains('active');

      // Close other accordion items
      container.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
      });

      if (!isActive) {
        parent.classList.add('active');
      }
    });
  });

  // Open first item by default
  const first = container.querySelector('.accordion-item');
  if (first) first.classList.add('active');
}

/**
 * 10. Login Modal & Interactive Simulator (PRD Section 4.1)
 */
let currentDemoAccount = null;

function initLoginModal() {
  const modal = document.getElementById('login-modal');
  const closeBtn = document.getElementById('close-login-modal');
  const form = document.getElementById('login-form');
  const togglePassBtn = document.getElementById('toggle-password');
  const passInput = document.getElementById('login-password');
  const emailInput = document.getElementById('login-email');
  const quickAccountBtns = document.getElementById('quick-role-buttons');

  if (!modal) return;

  // Render quick test account buttons
  if (quickAccountBtns && SIM_DATA.demoAccounts) {
    quickAccountBtns.innerHTML = SIM_DATA.demoAccounts.map(acc => `
      <button type="button" onclick="selectDemoAccount('${acc.roleKey}')" class="px-2.5 py-1.5 text-[11px] font-semibold bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-800 rounded-lg border border-slate-200 transition-colors text-left">
        ${acc.role}
      </button>
    `).join('');
  }

  // Toggle password visibility
  if (togglePassBtn && passInput) {
    togglePassBtn.addEventListener('click', () => {
      const type = passInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passInput.setAttribute('type', type);
      togglePassBtn.innerHTML = type === 'password' 
        ? '<i data-lucide="eye" class="w-4 h-4 text-slate-400"></i>' 
        : '<i data-lucide="eye-off" class="w-4 h-4 text-slate-600"></i>';
      if (window.lucide) window.lucide.createIcons();
    });
  }

  // Form submit simulation
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();
      const password = passInput.value.trim();

      if (!email || !password) {
        showToast('Mohon masukkan email/username dan kata sandi.', 'error');
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <i data-lucide="loader-2" class="w-4 h-4 animate-spin inline-block"></i>
        <span>Memverifikasi Kredensial...</span>
      `;
      if (window.lucide) window.lucide.createIcons();

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        if (window.lucide) window.lucide.createIcons();

        // Successful simulation
        closeLoginModal();
        openDashboardSuccessModal(email);
      }, 1200);
    });
  }

  // Close modal button
  if (closeBtn) {
    closeBtn.addEventListener('click', closeLoginModal);
  }

  // Close on outside click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeLoginModal();
    }
  });
}

window.openDemoLogin = function(moduleHint) {
  const modal = document.getElementById('login-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.classList.add('overflow-hidden');

  // If specific module requested, preset role
  if (moduleHint === 'library') {
    selectDemoAccount('librarian');
  } else if (moduleHint === 'grading' || moduleHint === 'academic') {
    selectDemoAccount('teacher');
  } else if (moduleHint === 'parent-portal') {
    selectDemoAccount('parent');
  } else {
    selectDemoAccount('headmaster');
  }
};

window.quickLoginAs = function(roleKey) {
  selectDemoAccount(roleKey);
  openDemoLogin();
};

window.selectDemoAccount = function(roleKey) {
  const acc = SIM_DATA.demoAccounts.find(a => a.roleKey === roleKey);
  if (!acc) return;
  const emailInput = document.getElementById('login-email');
  const passInput = document.getElementById('login-password');
  const hintEl = document.getElementById('active-account-hint');

  if (emailInput) emailInput.value = acc.user;
  if (passInput) passInput.value = acc.pass;
  if (hintEl) {
    hintEl.innerHTML = `Akun Demo Terpilih: <strong class="text-blue-700">${acc.name}</strong> (${acc.role})`;
    hintEl.classList.remove('hidden');
  }
};

window.closeLoginModal = function() {
  const modal = document.getElementById('login-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.classList.remove('overflow-hidden');
};

/**
 * 11. Simulated Role Dashboard Modal (After successful login)
 */
function openDashboardSuccessModal(userEmail) {
  const matchAcc = SIM_DATA.demoAccounts.find(a => a.user === userEmail) || SIM_DATA.demoAccounts[0];
  const roleObj = SIM_DATA.roles.find(r => r.id === matchAcc.roleKey) || SIM_DATA.roles[0];

  const modalHtml = `
    <div id="dashboard-success-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div class="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative animate-scaleUp">
        <button onclick="closeDashboardSuccessModal()" class="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-100">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>

        <div class="flex items-center gap-4 mb-6">
          <div class="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-inner">
            <i data-lucide="check-check" class="w-8 h-8"></i>
          </div>
          <div>
            <span class="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold rounded-full">Autentikasi Berhasil</span>
            <h3 class="text-xl font-extrabold text-slate-900 mt-0.5">Selamat Datang di SIM Sekolah</h3>
            <p class="text-xs text-slate-500">${SIM_DATA.school.name}</p>
          </div>
        </div>

        <div class="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 mb-6 space-y-3">
          <div class="flex items-center justify-between text-xs">
            <span class="text-slate-500">Nama Pengguna:</span>
            <span class="font-bold text-slate-900">${matchAcc.name}</span>
          </div>
          <div class="flex items-center justify-between text-xs">
            <span class="text-slate-500">Hak Akses (Role):</span>
            <span class="font-bold text-blue-600 px-2 py-0.5 bg-blue-50 rounded">${matchAcc.role}</span>
          </div>
          <div class="flex items-center justify-between text-xs">
            <span class="text-slate-500">Tahun Ajaran Aktif:</span>
            <span class="font-bold text-slate-900">${SIM_DATA.school.academicYear} (${SIM_DATA.school.semester})</span>
          </div>
          <div class="flex items-center justify-between text-xs">
            <span class="text-slate-500">Status Keamanan:</span>
            <span class="text-emerald-600 font-semibold flex items-center gap-1">
              <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
              Sesi Terenkripsi & Tercatat di Audit Log
            </span>
          </div>
        </div>

        <div class="border-t border-slate-100 pt-4 mb-6">
          <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Aksi Cepat Menu Anda:</h4>
          <div class="grid grid-cols-2 gap-2">
            ${roleObj.capabilities.slice(0, 4).map(c => `
              <div class="p-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 flex items-center gap-2">
                <i data-lucide="arrow-right-circle" class="w-3.5 h-3.5 text-blue-500 shrink-0"></i>
                <span class="truncate">${c}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="flex gap-3">
          <button onclick="closeDashboardSuccessModal()" class="flex-1 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-all text-center">
            Selesai Simulasi & Kembali ke Beranda
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
  if (window.lucide) window.lucide.createIcons();
}

window.closeDashboardSuccessModal = function() {
  const modal = document.getElementById('dashboard-success-modal');
  if (modal) modal.remove();
};

/**
 * 12. Announcement Detail Modal (PRD Section 4.14)
 */
function initAnnouncementModal() {
  // Container already handled via window.openAnnouncementModal
}

window.openAnnouncementModal = function(annId) {
  const ann = SIM_DATA.news.find(n => n.id === annId);
  if (!ann) return;

  const modalHtml = `
    <div id="ann-detail-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div class="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto relative animate-scaleUp">
        <button onclick="closeAnnouncementModal()" class="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-100">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>

        <span class="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg border border-blue-100">${ann.category}</span>
        <h3 class="text-2xl font-extrabold text-slate-900 mt-2 mb-2">${ann.title}</h3>
        <div class="flex items-center gap-4 text-xs text-slate-500 border-b border-slate-100 pb-4 mb-4">
          <span class="flex items-center gap-1">
            <i data-lucide="calendar" class="w-3.5 h-3.5"></i>
            ${ann.date}
          </span>
          <span class="flex items-center gap-1">
            <i data-lucide="user-check" class="w-3.5 h-3.5"></i>
            ${ann.author}
          </span>
        </div>

        <div class="text-sm text-slate-700 leading-relaxed whitespace-pre-line mb-6 font-normal">
          ${ann.content}
        </div>

        <div class="border-t border-slate-100 pt-4 flex justify-end">
          <button onclick="closeAnnouncementModal()" class="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors">
            Tutup Pengumuman
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
  if (window.lucide) window.lucide.createIcons();
};

window.closeAnnouncementModal = function() {
  const modal = document.getElementById('ann-detail-modal');
  if (modal) modal.remove();
};

/**
 * 13. Contact Form Submission (PRD Section 4.18)
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();

    if (!name || !email || !message) {
      showToast('Harap lengkapi semua data formulir.', 'error');
      return;
    }

    const btn = form.querySelector('button[type="submit"]');
    const orig = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<span>Mengirim Pesan...</span>';

    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = orig;
      form.reset();
      showToast('Terima kasih! Pesan Anda telah terkirim ke Tata Usaha SMAN 1 Unggulan.', 'success');
    }, 1000);
  });
}

/**
 * 14. Toast Notification Utility
 */
function showToast(message, type = 'info') {
  const existing = document.getElementById('sim-toast');
  if (existing) existing.remove();

  const colors = {
    success: 'bg-emerald-600 text-white',
    error: 'bg-rose-600 text-white',
    info: 'bg-slate-900 text-white'
  };

  const toast = document.createElement('div');
  toast.id = 'sim-toast';
  toast.className = `fixed bottom-6 right-6 z-50 px-5 py-3 rounded-2xl shadow-xl font-medium text-xs flex items-center gap-2 animate-fadeIn ${colors[type] || colors.info}`;
  toast.innerHTML = `
    <i data-lucide="${type === 'success' ? 'check-circle' : type === 'error' ? 'alert-triangle' : 'info'}" class="w-4 h-4"></i>
    <span>${message}</span>
  `;

  document.body.appendChild(toast);
  if (window.lucide) window.lucide.createIcons();

  setTimeout(() => {
    toast.remove();
  }, 4000);
}

