const STORAGE_KEYS = {
  USERS: 'sl_users',
  SESSION: 'sl_session',
  RESERVAS: 'sl_reservas',
  RESERVA_DRAFT: 'sl_reserva_draft',
  PAGO_DRAFT: 'sl_pago_draft',
  THEME: 'sl_theme'
};

const SERVICIOS = [
  { id: 'sg1', categoria: 'grabacion',  nombre: 'Grabación de Voz',           descripcion: 'Sesión de voz en cabina tratada acústicamente, con micrófono de condensador y monitor in-ear.', duracion: 60,  precio: 35000, imagen: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=900&q=80' },
  { id: 'sg2', categoria: 'grabacion',  nombre: 'Grabación Instrumental',     descripcion: 'Captura de instrumentos en vivo: guitarras, bajos, baterías, teclados y vientos.',                  duracion: 120, precio: 65000, imagen: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=900&q=80' },
  { id: 'sm1', categoria: 'mezcla',     nombre: 'Mezcla Estéreo',             descripcion: 'Mezcla profesional estéreo con referencia en monitores calibrados.',                                    duracion: 240, precio: 95000, imagen: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=900&q=80' },
  { id: 'sm2', categoria: 'mezcla',     nombre: 'Mezcla 5.1 Surround',        descripcion: 'Mezcla inmersiva 5.1 para cine, TV o plataformas streaming.',                                          duracion: 300, precio: 160000, imagen: 'https://images.unsplash.com/photo-1499415479124-43c32433a620?w=900&q=80' },
  { id: 'smt1',categoria: 'mastering',  nombre: 'Mastering Digital',          descripcion: 'Mastering final para plataformas digitales con LUFS optimizado.',                                       duracion: 180, precio: 80000, imagen: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=900&q=80' },
  { id: 'sp1', categoria: 'produccion', nombre: 'Producción Musical Completa',descripcion: 'Producción integral: arreglo, grabación, mezcla y mastering del tema.',                              duracion: 480, precio: 280000, imagen: 'https://images.unsplash.com/photo-1483721310020-03333e577078?w=900&q=80' },
  { id: 'spo1',categoria: 'podcast',    nombre: 'Grabación Podcast (por hora)',descripcion: 'Cabina insonorizada para hasta 4 participantes con edición incluida.',                              duracion: 60,  precio: 28000, imagen: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=900&q=80' },
  { id: 'sc1', categoria: 'clases',     nombre: 'Clase de Vocal Coaching',    descripcion: 'Entrenamiento personalizado de técnica vocal con coach certificado.',                                 duracion: 60,  precio: 22000, imagen: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=900&q=80' },
  { id: 'sc2', categoria: 'clases',     nombre: 'Curso Producción Musical',   descripcion: 'Curso grupal de producción musical: desde la idea hasta el máster.',                                  duracion: 120, precio: 45000, imagen: 'https://images.unsplash.com/photo-1513883049090-d0b7439799bf?w=900&q=80' }
];

const CATEGORIAS = [
  { key: 'grabacion',  label: 'Grabación',  icon: 'mic' },
  { key: 'mezcla',     label: 'Mezcla',     icon: 'mixer' },
  { key: 'mastering',  label: 'Mastering',  icon: 'master' },
  { key: 'produccion', label: 'Producción', icon: 'prod' },
  { key: 'podcast',    label: 'Podcast',    icon: 'pod' },
  { key: 'clases',     label: 'Clases',     icon: 'class' }
];

const PROFESIONALES = [
  { id: 'pi1', nombre: 'Carlos Reverb',   rol: 'Ingeniero de Mezcla',  foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', rating: 4.9, especialidades: ['sm1','sm2','sg2'] },
  { id: 'pi2', nombre: 'Lucía Master',    rol: 'Mastering Engineer',   foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80', rating: 5.0, especialidades: ['smt1','sm1'] },
  { id: 'pi3', nombre: 'Marco Producer',  rol: 'Productor Musical',    foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80', rating: 4.8, especialidades: ['sp1','sg2','sg1'] },
  { id: 'pi4', nombre: 'Sofía Coach',     rol: 'Vocal Coach',          foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80', rating: 4.9, especialidades: ['sc1','sg1','spo1'] }
];

const HORARIOS = {
  lunes:    { abierto: true,  desde: '10:00', hasta: '22:00' },
  martes:   { abierto: true,  desde: '10:00', hasta: '22:00' },
  miercoles:{ abierto: true,  desde: '10:00', hasta: '22:00' },
  jueves:   { abierto: true,  desde: '10:00', hasta: '22:00' },
  viernes:  { abierto: true,  desde: '10:00', hasta: '02:00' },
  sabado:   { abierto: true,  desde: '10:00', hasta: '02:00' },
  domingo:  { abierto: false, desde: '',      hasta: '' }
};

const CLASES = [
  { dia: 'Lunes',    hora: '18:00', nombre: 'Producción Musical Nivel 1',  profesor: 'Marco Producer', nivel: 'Inicial' },
  { dia: 'Miércoles',hora: '19:00', nombre: 'Técnicas de Mastering',      profesor: 'Lucía Master',   nivel: 'Avanzado' },
  { dia: 'Sábado',   hora: '11:00', nombre: 'Vocal Coaching Grupal',      profesor: 'Sofía Coach',    nivel: 'Todos' }
];

const Storage = {
  get(key, fallback = null) {
    try {
      const v = localStorage.getItem(key);
      return v ? JSON.parse(v) : fallback;
    } catch (e) { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); }
    catch (e) { console.error('Storage error', e); }
  },
  remove(key) { localStorage.removeItem(key); }
};

const Auth = {
  init() {
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    if (users.length === 0) {
      Storage.set(STORAGE_KEYS.USERS, [
        { id: 'u1', nombre: 'Juan Pérez',  email: 'juan@test.com',  telefono: '+56 9 7777 1111', password: '123456', foto: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80' },
        { id: 'u2', nombre: 'María López', email: 'maria@test.com', telefono: '+56 9 7777 2222', password: '123456', foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80' }
      ]);
    }
  },
  current() {
    const s = Storage.get(STORAGE_KEYS.SESSION);
    if (!s) return null;
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    return users.find(u => u.id === s.userId) || null;
  },
  isLogged() { return !!this.current(); },
  login(email, password) {
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) return { ok: false, error: 'Email o contraseña incorrectos.' };
    Storage.set(STORAGE_KEYS.SESSION, { userId: user.id, token: 'tkn_' + Date.now(), expires: Date.now() + 86400000 });
    return { ok: true, user };
  },
  register(data) {
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    if (users.find(u => u.email === data.email)) return { ok: false, error: 'El email ya está registrado.' };
    const newUser = { id: 'u' + Date.now(), nombre: data.nombre, email: data.email, telefono: data.telefono, password: data.password, foto: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&q=80' };
    users.push(newUser);
    Storage.set(STORAGE_KEYS.USERS, users);
    return { ok: true, user: newUser };
  },
  logout() { Storage.remove(STORAGE_KEYS.SESSION); },
  update(userId, data) {
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    const idx = users.findIndex(u => u.id === userId);
    if (idx === -1) return { ok: false };
    users[idx] = { ...users[idx], ...data };
    Storage.set(STORAGE_KEYS.USERS, users);
    return { ok: true, user: users[idx] };
  },
  resetPassword(email, newPass) {
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    const idx = users.findIndex(u => u.email === email);
    if (idx === -1) return { ok: false, error: 'Email no registrado.' };
    users[idx].password = newPass;
    Storage.set(STORAGE_KEYS.USERS, users);
    return { ok: true };
  }
};

const Reservas = {
  init() {
    const list = Storage.get(STORAGE_KEYS.RESERVAS, null);
    if (list === null) {
      const samples = [
        { id: 'r1', userId: 'u1', servicioId: 'sg1', profesionalId: 'pi4', fecha: this._futureDate(3),  hora: '16:00', estado: 'confirmada', pago: 'pagado',    metodoPago: 'tarjeta',  precio: 35000,  notas: 'Tema nuevo single', createdAt: Date.now() - 86400000 * 2 },
        { id: 'r2', userId: 'u1', servicioId: 'sm1', profesionalId: 'pi1', fecha: this._futureDate(7),  hora: '18:00', estado: 'pendiente', pago: 'pendiente', metodoPago: null,        precio: 95000,  notas: 'Mezcla 4 temas EP', createdAt: Date.now() - 86400000 },
        { id: 'r3', userId: 'u1', servicioId: 'sp1', profesionalId: 'pi3', fecha: this._futureDate(-12),hora: '15:00', estado: 'completada', pago: 'pagado',   metodoPago: 'transferencia', precio: 280000, notas: 'Producción álbum', createdAt: Date.now() - 86400000 * 15 }
      ];
      Storage.set(STORAGE_KEYS.RESERVAS, samples);
    }
  },
  _futureDate(days) {
    const d = new Date();
    d.setDate(d.getDate() + days);
    return d.toISOString().split('T')[0];
  },
  listByUser(userId) {
    return Storage.get(STORAGE_KEYS.RESERVAS, []).filter(r => r.userId === userId);
  },
  get(id) {
    return Storage.get(STORAGE_KEYS.RESERVAS, []).find(r => r.id === id) || null;
  },
  create(data) {
    const list = Storage.get(STORAGE_KEYS.RESERVAS, []);
    const newReserva = { id: 'r' + Date.now(), createdAt: Date.now(), estado: 'pendiente', pago: 'pendiente', metodoPago: null, notas: '', ...data };
    list.push(newReserva);
    Storage.set(STORAGE_KEYS.RESERVAS, list);
    return newReserva;
  },
  update(id, data) {
    const list = Storage.get(STORAGE_KEYS.RESERVAS, []);
    const idx = list.findIndex(r => r.id === id);
    if (idx === -1) return null;
    list[idx] = { ...list[idx], ...data };
    Storage.set(STORAGE_KEYS.RESERVAS, list);
    return list[idx];
  },
  cancel(id) { return this.update(id, { estado: 'anulada' }); },
  setDraft(data) { Storage.set(STORAGE_KEYS.RESERVA_DRAFT, data); },
  getDraft() { return Storage.get(STORAGE_KEYS.RESERVA_DRAFT, null); },
  clearDraft() { Storage.remove(STORAGE_KEYS.RESERVA_DRAFT); },
  setPagoDraft(data) { Storage.set(STORAGE_KEYS.PAGO_DRAFT, data); },
  getPagoDraft() { return Storage.get(STORAGE_KEYS.PAGO_DRAFT, null); },
  clearPagoDraft() { Storage.remove(STORAGE_KEYS.PAGO_DRAFT); }
};

const UI = {
  formatDate(iso) {
    if (!iso) return '';
    const d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString('es-CL', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
  },
  formatPrice(n) { return '$' + Number(n).toLocaleString('es-CL', { minimumFractionDigits: 0 }); },
  servicioById(id) { return SERVICIOS.find(s => s.id === id); },
  profesionalById(id) { return PROFESIONALES.find(p => p.id === id); },
  categoriaLabel(key) {
    const c = CATEGORIAS.find(x => x.key === key);
    return c ? c.label : key;
  },
  estadoBadge(estado) {
    const map = {
      pendiente:  { label: 'Pendiente',  cls: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' },
      confirmada: { label: 'Confirmada', cls: 'bg-blue-500/20 text-blue-300 border-blue-500/30' },
      pagada:     { label: 'Pagada',     cls: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' },
      completada: { label: 'Completada', cls: 'bg-gray-500/20 text-gray-300 border-gray-500/30' },
      anulada:    { label: 'Anulada',    cls: 'bg-red-500/20 text-red-300 border-red-500/30' }
    };
    return map[estado] || map.pendiente;
  },
  pagoBadge(pago) {
    const map = {
      pendiente:  { label: 'Por pagar', cls: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' },
      pagado:     { label: 'Pagado',    cls: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' }
    };
    return map[pago] || map.pendiente;
  },
  isPastDate(iso) {
    const today = new Date(); today.setHours(0,0,0,0);
    const d = new Date(iso + 'T00:00:00');
    return d < today;
  },
  generateSlots(servicioId, fecha) {
    if (!servicioId || !fecha) return [];
    const day = new Date(fecha + 'T00:00:00').getDay();
    const dayKey = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado'][day];
    const h = HORARIOS[dayKey];
    if (!h.abierto) return [];
    const slots = [];
    let [hStart, mStart] = h.desde.split(':').map(Number);
    let [hEnd, mEnd] = h.hasta.split(':').map(Number);
    if (hEnd <= hStart) hEnd += 24;
    let cur = hStart * 60 + mStart;
    const end = hEnd * 60 + mEnd;
    while (cur + 60 <= end) {
      const hh = String(Math.floor(cur/60) % 24).padStart(2,'0');
      const mm = String(cur%60).padStart(2,'0');
      slots.push(`${hh}:${mm}`);
      cur += 60;
    }
    return slots;
  },
  toast(msg, type = 'success') {
    const el = document.createElement('div');
    el.className = `fixed top-6 right-6 z-[9999] px-6 py-3 rounded-lg shadow-2xl font-medium text-sm border ${type === 'success' ? 'bg-emerald-500/20 text-emerald-100 border-emerald-500/40' : 'bg-red-500/20 text-red-100 border-red-500/40'} backdrop-blur`;
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => { el.style.opacity = '0'; el.style.transition = 'opacity .3s'; }, 2500);
    setTimeout(() => el.remove(), 2900);
  },
  requireAuth(redirectUrl) {
    if (!Auth.isLogged()) {
      Storage.set('sl_redirect', redirectUrl || window.location.pathname);
      window.location.href = 'inicio-sesion.html';
      return false;
    }
    return true;
  },
  applyTheme(theme) {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    Storage.set(STORAGE_KEYS.THEME, theme);
  },
  initTheme() {
    const saved = Storage.get(STORAGE_KEYS.THEME, 'dark');
    this.applyTheme(saved);
  },
  modal(html) {
    const wrap = document.createElement('div');
    wrap.className = 'modal-backdrop';
    wrap.innerHTML = `<div class="modal-content">${html}</div>`;
    document.body.appendChild(wrap);
    const close = () => wrap.remove();
    wrap.addEventListener('click', (e) => { if (e.target === wrap) close(); });
    wrap.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', close));
    return { close, root: wrap };
  },
  getQuery(name) {
    return new URLSearchParams(window.location.search).get(name);
  }
};

function buildHeader(active) {
  const user = Auth.current();
  const isDark = document.documentElement.classList.contains('dark');
  const links = [
    { href: 'index.html',     label: 'Inicio',     key: 'index' },
    { href: 'servicios.html', label: 'Servicios',  key: 'servicios' },
    { href: 'galeria.html',   label: 'Galería',    key: 'galeria' },
    { href: 'precios.html',   label: 'Precios',    key: 'precios' },
    { href: 'horarios.html',  label: 'Horarios',   key: 'horarios' },
    { href: 'contacto.html',  label: 'Contacto',   key: 'contacto' }
  ];
  const authLinks = user
    ? `<a href="perfil.html" class="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
        <img src="${user.foto}" class="h-7 w-7 rounded-full object-cover border border-primary/40" alt=""/>
        <span class="hidden lg:inline">${user.nombre.split(' ')[0]}</span>
       </a>
       <a href="#" id="btnLogout" class="text-sm font-medium text-red-400 hover:text-red-300 transition-colors">Salir</a>`
    : `<a href="inicio-sesion.html" class="text-sm font-medium hover:text-primary transition-colors">Ingresar</a>
       <a href="registro.html" class="bg-primary text-black font-bold py-2 px-5 rounded-lg text-sm shadow-md hover:bg-primary-light transition-all">Registrarse</a>`;

  return `
  <header class="sticky top-0 z-50 bg-background-dark/85 dark:bg-background-dark/85 backdrop-blur-md border-b border-primary/20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <a href="index.html" class="flex items-center gap-3">
          <svg class="h-10 w-10 text-primary" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="21" y="4" width="6" height="22" rx="3" fill="currentColor"/>
            <path d="M14 22C14 26 17 30 24 30C31 30 34 26 34 22" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            <path d="M10 28C10 34 16 40 24 40C32 40 38 34 38 28" stroke="currentColor" stroke-width="3" stroke-linecap="round" opacity="0.5"/>
            <line x1="24" y1="30" x2="24" y2="42" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            <rect x="18" y="42" width="12" height="3" rx="1" fill="currentColor"/>
          </svg>
          <div>
            <h2 class="text-lg font-bold text-white leading-tight tracking-wide" style="font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.05em;">SOUNDLAB</h2>
            <p class="text-[10px] uppercase tracking-[0.25em] text-primary/80">Estudio de Grabación</p>
          </div>
        </a>
        <nav class="hidden lg:flex items-center gap-7" id="navMenu">
          ${links.map(l => `<a href="${l.href}" class="text-sm font-medium transition-colors ${active === l.key ? 'text-primary' : 'text-gray-300 hover:text-primary'}">${l.label}</a>`).join('')}
        </nav>
        <div class="hidden lg:flex items-center gap-4">
          ${authLinks}
          <button id="btnTheme" class="text-gray-300 hover:text-primary transition-colors" title="Cambiar tema">
            ${isDark ? '<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>' : '<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>'}
          </button>
        </div>
        <button class="lg:hidden text-white" id="btnMenu" aria-label="Abrir menú">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
      <nav class="hidden lg:hidden flex-col gap-1 pb-4" id="navMobile">
        ${links.map(l => `<a href="${l.href}" class="block py-2 px-3 rounded text-sm font-medium transition-colors ${active === l.key ? 'text-primary bg-primary/10' : 'text-gray-300 hover:text-primary hover:bg-primary/5'}">${l.label}</a>`).join('')}
        <div class="border-t border-primary/20 mt-3 pt-3 flex flex-col gap-2">
          ${user
            ? `<a href="perfil.html" class="block py-2 px-3 rounded text-sm text-gray-300 hover:bg-primary/5">Mi Perfil</a>
               <a href="#" id="btnLogoutMobile" class="block py-2 px-3 rounded text-sm text-red-400 hover:bg-red-500/10">Cerrar sesión</a>`
            : `<a href="inicio-sesion.html" class="block py-2 px-3 rounded text-sm text-gray-300 hover:bg-primary/5">Ingresar</a>
               <a href="registro.html" class="block py-2 px-3 rounded text-sm text-primary font-semibold hover:bg-primary/5">Registrarse</a>`}
        </div>
      </nav>
    </div>
  </header>`;
}

function buildFooter() {
  return `
  <footer class="bg-background-dark border-t border-primary/20 mt-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <svg class="h-8 w-8 text-primary" viewBox="0 0 48 48" fill="none"><rect x="21" y="4" width="6" height="22" rx="3" fill="currentColor"/><path d="M14 22C14 26 17 30 24 30C31 30 34 26 34 22" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><line x1="24" y1="30" x2="24" y2="42" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><rect x="18" y="42" width="12" height="3" rx="1" fill="currentColor"/></svg>
            <h3 class="text-xl font-bold text-white tracking-wider" style="font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.05em;">SOUNDLAB</h3>
          </div>
          <p class="text-sm text-gray-400 leading-relaxed">Estudio de grabación profesional. Donde tu sonido cobra vida con equipos de primer nivel e ingenieros con experiencia internacional.</p>
        </div>
        <div>
          <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4">Navegación</h4>
          <ul class="space-y-2">
            <li><a href="index.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Inicio</a></li>
            <li><a href="servicios.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Servicios</a></li>
            <li><a href="galeria.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Galería</a></li>
            <li><a href="precios.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Precios</a></li>
            <li><a href="horarios.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Horarios</a></li>
            <li><a href="contacto.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4">Legal</h4>
          <ul class="space-y-2">
            <li><a href="terminos.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Términos y Condiciones</a></li>
            <li><a href="privacidad.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Políticas de Privacidad</a></li>
            <li><a href="recuperar-password.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Recuperar Contraseña</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4">Contacto</h4>
          <ul class="space-y-3 text-sm text-gray-400">
            <li class="flex items-start gap-2">
              <svg class="h-4 w-4 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              Av. Providencia 1234, Santiago
            </li>
            <li class="flex items-start gap-2">
              <svg class="h-4 w-4 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              +56 9 7777 3333
            </li>
            <li class="flex items-start gap-2">
              <svg class="h-4 w-4 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              hola@soundlab.cl
            </li>
          </ul>
          <div class="flex gap-3 mt-5">
            <a href="#" class="h-9 w-9 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-colors" aria-label="Instagram">
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="#" class="h-9 w-9 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-colors" aria-label="Facebook">
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" class="h-9 w-9 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-colors" aria-label="YouTube">
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div class="border-t border-primary/20 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-sm text-gray-500">© 2024 SoundLab Studio. Todos los derechos reservados.</p>
        <p class="text-xs text-gray-600 flex items-center gap-2"><span class="rec-dot"></span> Santiago, Chile · Grabando desde 2014</p>
      </div>
    </div>
  </footer>`;
}

function initLayout(active) {
  UI.initTheme();
  Auth.init();
  Reservas.init();
  const headerHost = document.getElementById('appHeader');
  const footerHost = document.getElementById('appFooter');
  if (headerHost) headerHost.innerHTML = buildHeader(active);
  if (footerHost) footerHost.innerHTML = buildFooter();

  const btnMenu = document.getElementById('btnMenu');
  const navMobile = document.getElementById('navMobile');
  if (btnMenu && navMobile) {
    btnMenu.addEventListener('click', () => {
      navMobile.classList.toggle('hidden');
      navMobile.classList.toggle('flex');
    });
  }

  const btnTheme = document.getElementById('btnTheme');
  if (btnTheme) {
    btnTheme.addEventListener('click', () => {
      const cur = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
      UI.applyTheme(cur === 'dark' ? 'light' : 'dark');
      window.location.reload();
    });
  }

  const bindLogout = (sel) => {
    const el = document.querySelector(sel);
    if (el) el.addEventListener('click', (e) => {
      e.preventDefault();
      Auth.logout();
      UI.toast('Sesión cerrada correctamente');
      setTimeout(() => window.location.href = 'index.html', 600);
    });
  };
  bindLogout('#btnLogout');
  bindLogout('#btnLogoutMobile');
}

document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.getAttribute('data-page') || '';
  initLayout(page);
  if (typeof pageInit === 'function') pageInit();
});
