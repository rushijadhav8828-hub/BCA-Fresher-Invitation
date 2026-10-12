/* ==========================================================================
   IGNITE 2026 - INVITATION CARD INTERACTIVE JAVASCRIPT
   Deogiri College, Chhatrapati Sambhajinagar
   Department of Commerce & Management
   ========================================================================== */

/* --------------------------------------------------------------------------
   0. Faculty & Dignitaries Data Store
   Order: Principal -> Vice Principal -> HOD -> Coordinator -> Faculty
   -------------------------------------------------------------------------- */
const TEACHERS = {
  principal: {
    id: 'principal',
    name: 'Dr. Ravi Patil',
    salutation: 'Principal Dr. Ravi Patil Sir',
    titlePrefix: 'Respected',
    gender: 'male',
    category: 'leadership',
    roleTag: 'PRINCIPAL',
    badge: 'CHIEF PATRON & PRINCIPAL',
    designations: [
      '👑 Principal, Deogiri College',
      '🏛️ Chhatrapati Sambhajinagar',
      '🌟 Chief Patron'
    ],
    photo: 'principal_ravi_patil.jpg',
    objectPosition: 'center 22%',
    quote: '“Under your visionary leadership and eminent guidance, Deogiri College reaches new pinnacles of excellence every day. We most humbly and respectfully request the great honor of your gracious presence to inaugurate and bless IGNITE 2026!” 🙏✨',
    envelopeRole: 'Principal, Deogiri College',
    modalTitle: 'Honored With Highest Respect & Gratitude!',
    modalGreeting: 'Respected Principal Dr. Ravi Patil Sir,',
    modalMsg: 'Your visionary leadership and esteemed presence are the greatest inspiration for all students! The entire Department of Commerce & Management eagerly awaits welcoming you with royal honor at <strong>IGNITE - 2026</strong>.'
  },
  'vice-principal': {
    id: 'vice-principal',
    name: 'Dr. Ganesh Mohite',
    salutation: 'Vice Principal Dr. Ganesh Mohite Sir',
    titlePrefix: 'Respected',
    gender: 'male',
    category: 'leadership',
    roleTag: 'VICE PRINCIPAL',
    badge: 'ESTEEMED PATRON & VICE PRINCIPAL',
    designations: [
      '⭐ Vice Principal, Deogiri College',
      '🏛️ Chhatrapati Sambhajinagar',
      '🌟 Patron'
    ],
    photo: 'vice_principal_ganesh_mohite.jpg',
    objectPosition: 'center 15%',
    quote: '“Your continuous guidance, inspiring administration, and constant encouragement empower students across all disciplines. We cordially request your esteemed presence to grace and bless IGNITE 2026!” 🙏✨',
    envelopeRole: 'Vice Principal, Deogiri College',
    modalTitle: 'Honored With Profound Respect!',
    modalGreeting: 'Respected Vice Principal Dr. Ganesh Mohite Sir,',
    modalMsg: 'Your gracious presence adds tremendous prestige to our celebrations! The entire Department of Commerce & Management eagerly awaits welcoming you with warm hearts at <strong>IGNITE - 2026</strong>.'
  },
  hod: {
    id: 'hod',
    name: 'Dr. Lahane Sir',
    salutation: 'HOD Dr. Lahane Sir',
    titlePrefix: 'Respected',
    gender: 'male',
    category: 'leadership',
    roleTag: 'HOD',
    badge: 'CHIEF GUIDE & HEAD OF DEPARTMENT',
    designations: [
      '👨‍🏫 Head of Department (HOD)',
      '📊 Commerce & Management',
      '🏛️ Deogiri College'
    ],
    photo: 'hod_lahane.jpg',
    objectPosition: 'center 15%',
    quote: '“Under your distinguished leadership, scholarly vision, and constant mentorship, our department thrives with energy and ambition. We humbly seek the honor of your gracious presence to lead and bless IGNITE 2026!” 🙏✨',
    envelopeRole: 'Head of Department (HOD)',
    modalTitle: 'Honored With Deep Reverence!',
    modalGreeting: 'Respected HOD Dr. Lahane Sir,',
    modalMsg: 'Your guiding light and inspiring mentorship lead our path to brilliance! The students and faculty of Commerce & Management warmly await welcoming you at <strong>IGNITE - 2026</strong>.'
  },
  coordinator: {
    id: 'coordinator',
    name: 'Dr. Pranita Chitnis',
    salutation: 'Coordinator Dr. Pranita Chitnis Ma\'am',
    titlePrefix: 'Respected',
    gender: 'female',
    category: 'leadership',
    roleTag: 'COORDINATOR',
    badge: 'EVENT COORDINATOR & MENTOR',
    designations: [
      '🌟 Event Coordinator',
      '📊 Commerce & Management',
      '🏛️ Deogiri College'
    ],
    photo: 'hod_photo.jpg',
    objectPosition: 'center 15%',
    quote: '“Your tireless dedication, meticulous planning, and affectionate mentorship have breathed life into every facet of our celebration. We warmly request your honored presence to ignite the spirit of IGNITE 2026!” 🙏✨',
    envelopeRole: 'Event Coordinator, Commerce & Management',
    modalTitle: 'Honored With Sincere Gratitude!',
    modalGreeting: 'Respected Coordinator Dr. Pranita Chitnis Ma\'am,',
    modalMsg: 'Your boundless energy, vision, and care make IGNITE 2026 possible! The entire student committee gratefully awaits welcoming you with grand applause.'
  },
  poonam: {
    id: 'poonam',
    name: 'Prof. Poonam Relan',
    salutation: 'Prof. Poonam Relan Ma\'am',
    titlePrefix: 'Respected',
    gender: 'female',
    category: 'faculty',
    roleTag: 'FACULTY',
    badge: 'ESTEEMED GUEST & MENTOR',
    designations: [
      '👩‍🏫 Esteemed Faculty',
      '📊 Commerce & Management',
      '🏛️ Deogiri College'
    ],
    photo: 'teacher_poonam.jpg',
    objectPosition: 'center 20%',
    quote: '“Your exceptional guidance, nurturing presence, and inspiring knowledge continuously empower us to achieve greatness. We warmly seek the honor of your esteemed presence to celebrate IGNITE 2026!” 🙏✨',
    envelopeRole: 'Esteemed Faculty & Mentor',
    modalTitle: 'Honored With Sincere Respect!',
    modalGreeting: 'Respected Prof. Poonam Relan Ma\'am,',
    modalMsg: 'Your gracious presence means the world to every student! The entire Department of Commerce & Management eagerly awaits welcoming you with grand applause and highest respect at IGNITE - 2026.'
  },
  shweta: {
    id: 'shweta',
    name: 'Prof. Shweta Pawar',
    salutation: 'Prof. Shweta Pawar Ma\'am',
    titlePrefix: 'Respected',
    gender: 'female',
    category: 'faculty',
    roleTag: 'FACULTY',
    badge: 'ESTEEMED GUEST & MENTOR',
    designations: [
      '👩‍🏫 Esteemed Faculty',
      '📊 Commerce & Management',
      '🏛️ Deogiri College'
    ],
    photo: 'teacher_shweta.jpg',
    objectPosition: 'center 10%',
    quote: '“Your dedication, warmth, and encouraging words inspire each one of us to reach higher horizons. We cordially invite you to bless our Freshers Batch at IGNITE 2026!” 🙏✨',
    envelopeRole: 'Esteemed Faculty & Mentor',
    modalTitle: 'Honored With Sincere Respect!',
    modalGreeting: 'Respected Prof. Shweta Pawar Ma\'am,',
    modalMsg: 'Your gracious presence means the world to every student! The entire Department of Commerce & Management eagerly awaits welcoming you with grand applause and highest respect at IGNITE - 2026.'
  },
  vanita: {
    id: 'vanita',
    name: 'Prof. Vanita',
    salutation: 'Prof. Vanita Ma\'am',
    titlePrefix: 'Respected',
    gender: 'female',
    category: 'faculty',
    roleTag: 'FACULTY',
    badge: 'ESTEEMED GUEST & MENTOR',
    designations: [
      '👩‍🏫 Esteemed Faculty',
      '📊 Commerce & Management',
      '🏛️ Deogiri College'
    ],
    photo: 'teacher_vanita.jpg',
    objectPosition: 'center 15%',
    quote: '“With heartfelt respect for your wisdom, guidance, and endless support in our academic journey, we humbly request your gracious presence to light up IGNITE 2026!” 🙏✨',
    envelopeRole: 'Esteemed Faculty & Mentor',
    modalTitle: 'Honored With Sincere Respect!',
    modalGreeting: 'Respected Prof. Vanita Ma\'am,',
    modalMsg: 'Your gracious presence means the world to every student! The entire Department of Commerce & Management eagerly awaits welcoming you with grand applause and highest respect at IGNITE - 2026.'
  },
  mangesh: {
    id: 'mangesh',
    name: 'Prof. Mangesh Ghule',
    salutation: 'Prof. Mangesh Ghule Sir',
    titlePrefix: 'Respected',
    gender: 'male',
    category: 'faculty',
    roleTag: 'FACULTY',
    badge: 'ESTEEMED GUEST & MENTOR',
    designations: [
      '👨‍🏫 Esteemed Faculty',
      '📊 Commerce & Management',
      '🏛️ Deogiri College'
    ],
    photo: 'teacher_mangesh.jpg',
    objectPosition: 'center 15%',
    quote: '“Your energetic mentorship, steadfast encouragement, and visionary teaching inspire us every day. We earnestly request the privilege of your esteemed presence at IGNITE 2026!” 🙏✨',
    envelopeRole: 'Esteemed Faculty & Mentor',
    modalTitle: 'Honored With Sincere Respect!',
    modalGreeting: 'Respected Prof. Mangesh Ghule Sir,',
    modalMsg: 'Your gracious presence means the world to every student! The entire Department of Commerce & Management eagerly awaits welcoming you with grand applause and highest respect at IGNITE - 2026.'
  },
  samiksha: {
    id: 'samiksha',
    name: 'Prof. Samiksha Bari',
    salutation: 'Prof. Samiksha Bari Ma\'am',
    titlePrefix: 'Respected',
    gender: 'female',
    category: 'faculty',
    roleTag: 'FACULTY',
    badge: 'ESTEEMED GUEST & MENTOR',
    designations: [
      '👩‍🏫 Esteemed Faculty',
      '📊 Commerce & Management',
      '🏛️ Deogiri College'
    ],
    photo: 'teacher_samiksha.jpg',
    objectPosition: 'center 12%',
    quote: '“Your kindness, passion for teaching, and invaluable support always motivate us to excel. We would be deeply honored by your gracious presence to bless our Freshers Batch at IGNITE 2026!” 🙏✨',
    envelopeRole: 'Esteemed Faculty & Mentor',
    modalTitle: 'Honored With Sincere Respect!',
    modalGreeting: 'Respected Prof. Samiksha Bari Ma\'am,',
    modalMsg: 'Your gracious presence means the world to every student! The entire Department of Commerce & Management eagerly awaits welcoming you with grand applause and highest respect at IGNITE - 2026.'
  },
  gayatri: {
    id: 'gayatri',
    name: 'Prof. Gayatri Khatate',
    salutation: 'Prof. Gayatri Khatate Ma\'am',
    titlePrefix: 'Respected',
    gender: 'female',
    category: 'faculty',
    roleTag: 'FACULTY',
    badge: 'ESTEEMED GUEST & MENTOR',
    designations: [
      '👩‍🏫 Esteemed Faculty',
      '📊 Commerce & Management',
      '🏛️ Deogiri College'
    ],
    photo: 'teacher_gayatri.jpg',
    objectPosition: 'center 20%',
    quote: '“Your grace, inspiring knowledge, and constant encouragement motivate each one of us to shine brighter. We warmly seek the honor of your gracious presence to celebrate and bless IGNITE 2026!” 🙏✨',
    envelopeRole: 'Esteemed Faculty & Mentor',
    modalTitle: 'Honored With Sincere Respect!',
    modalGreeting: 'Respected Prof. Gayatri Khatate Ma\'am,',
    modalMsg: 'Your gracious presence means the world to every student! The entire Department of Commerce & Management eagerly awaits welcoming you with grand applause and highest respect at IGNITE - 2026.'
  },
  sankesh: {
    id: 'sankesh',
    name: 'Prof. Sankesh More',
    salutation: 'Prof. Sankesh More Sir',
    titlePrefix: 'Respected',
    gender: 'male',
    category: 'faculty',
    roleTag: 'FACULTY',
    badge: 'ESTEEMED GUEST & MENTOR',
    designations: [
      '👨‍🏫 Esteemed Faculty',
      '📊 Commerce & Management',
      '🏛️ Deogiri College'
    ],
    photo: 'teacher_sankesh.jpg',
    objectPosition: 'center 15%',
    quote: '“Your approachable mentorship, dynamic encouragement, and constant guidance are truly appreciated by every student. We cordially invite you to celebrate and bless our Freshers Batch at IGNITE 2026!” 🙏✨',
    envelopeRole: 'Esteemed Faculty & Mentor',
    modalTitle: 'Honored With Sincere Respect!',
    modalGreeting: 'Respected Prof. Sankesh More Sir,',
    modalMsg: 'Your energetic presence and encouragement mean so much to all of us! The Department of Commerce & Management eagerly awaits welcoming you with grand applause at <strong>IGNITE - 2026</strong>.'
  }
};

let activeTeacherKey = 'principal';

/* --------------------------------------------------------------------------
   Document Ready Init
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  initFacultyProfiles();
  initAmbientCanvas();
  initEnvelopeOpener();
  init3DCardTilt();
  initEmojiStream();
  initCountdown();
  initAudioSynthesizer();
  initBlessingModal();
  initConfettiCannon();
  initCopyAndShare();
});

/* --------------------------------------------------------------------------
   1. Faculty Profile Logic & Routing
   -------------------------------------------------------------------------- */
function detectTeacherFromURL() {
  const params = new URLSearchParams(window.location.search);
  const teacherParam = params.get('teacher') || params.get('name') || window.location.hash.replace('#', '');

  if (!teacherParam) return 'principal';

  const clean = teacherParam.toLowerCase().trim();

  // Direct key match
  if (TEACHERS[clean]) return clean;

  // Specific keyword alias checks
  if (clean.includes('principal') && !clean.includes('vice')) return 'principal';
  if (clean.includes('ravi') || clean.includes('patil')) return 'principal';
  if (clean.includes('vice') || clean.includes('mohite') || clean.includes('ganesh')) return 'vice-principal';
  if (clean.includes('lahane') || (clean.includes('hod') && !clean.includes('chitnis'))) return 'hod';
  if (clean.includes('chitnis') || clean.includes('coordinator') || clean.includes('pranita')) return 'coordinator';
  if (clean.includes('gayatri') || clean.includes('khatate')) return 'gayatri';
  if (clean.includes('sankesh') || clean.includes('more')) return 'sankesh';
  if (clean.includes('relan') || clean.includes('poonam')) return 'poonam';
  if (clean.includes('shweta') || clean.includes('pawar')) return 'shweta';
  if (clean.includes('vanita')) return 'vanita';
  if (clean.includes('mangesh') || clean.includes('ghule')) return 'mangesh';
  if (clean.includes('samiksha') || clean.includes('bari')) return 'samiksha';

  // Partial or fuzzy match on key or name
  for (const [key, data] of Object.entries(TEACHERS)) {
    if (clean.includes(key) || data.name.toLowerCase().includes(clean)) {
      return key;
    }
  }

  return 'principal';
}

function initFacultyProfiles() {
  const pillList = document.getElementById('faculty-pill-list');
  const envelopeChips = document.getElementById('envelope-quick-chips');

  // Detect initial teacher
  activeTeacherKey = detectTeacherFromURL();

  // Populate navigation bar pills
  if (pillList) {
    pillList.innerHTML = '';
    Object.values(TEACHERS).forEach((teacher) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `faculty-pill ${teacher.id === activeTeacherKey ? 'active' : ''} ${teacher.category === 'leadership' ? 'is-leader' : ''}`;
      btn.dataset.teacherId = teacher.id;
      btn.innerHTML = `
        <span class="pill-avatar-wrapper">
          <img src="${teacher.photo}" alt="${teacher.name}" class="pill-avatar-img">
        </span>
        <span class="pill-meta-wrapper">
          <span class="pill-role-mini">${teacher.roleTag}</span>
          <span class="pill-name">${teacher.name}</span>
        </span>
      `;
      btn.addEventListener('click', () => {
        setTeacherProfile(teacher.id, true);
      });
      pillList.appendChild(btn);
    });
  }

  // Populate envelope quick switcher chips
  if (envelopeChips) {
    envelopeChips.innerHTML = '';
    Object.values(TEACHERS).forEach((teacher) => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = `env-chip ${teacher.id === activeTeacherKey ? 'active' : ''}`;
      chip.dataset.teacherId = teacher.id;
      chip.innerHTML = `
        <img src="${teacher.photo}" alt="${teacher.name}" class="env-chip-img">
        <span>${teacher.name}</span>
      `;
      chip.addEventListener('click', () => {
        setTeacherProfile(teacher.id, true);
        playNote(659.25, 'triangle', 0.15, 0.15);
      });
      envelopeChips.appendChild(chip);
    });
  }

  // Render initial profile without heavy animation
  setTeacherProfile(activeTeacherKey, false);

  // Listen for hash / popstate changes
  window.addEventListener('popstate', () => {
    const key = detectTeacherFromURL();
    if (key !== activeTeacherKey) {
      setTeacherProfile(key, true);
    }
  });
}

function setTeacherProfile(key, animate = true) {
  if (!TEACHERS[key]) return;
  activeTeacherKey = key;
  const teacher = TEACHERS[key];

  // Update URL seamlessly without full reload
  const newUrl = `${window.location.pathname}?teacher=${key}`;
  if (window.location.search !== `?teacher=${key}`) {
    window.history.replaceState({ teacher: key }, '', newUrl);
  }

  // Update Page Title
  document.title = `IGNITE 2026 - Royal Invitation | ${teacher.salutation}`;

  // Update Navigation Active States & scroll active into view
  document.querySelectorAll('.faculty-pill').forEach((pill) => {
    const isActive = pill.dataset.teacherId === key;
    pill.classList.toggle('active', isActive);
    if (isActive) {
      pill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  });
  document.querySelectorAll('.env-chip').forEach((chip) => {
    chip.classList.toggle('active', chip.dataset.teacherId === key);
  });

  // Envelope Details
  const envelopeAvatar = document.getElementById('envelope-avatar-img');
  const envelopeName = document.getElementById('envelope-name');
  const envelopeRole = document.getElementById('envelope-role');

  if (envelopeAvatar) {
    envelopeAvatar.src = teacher.photo;
    envelopeAvatar.alt = teacher.name;
    envelopeAvatar.style.objectPosition = teacher.objectPosition;
  }
  if (envelopeName) envelopeName.textContent = teacher.name;
  if (envelopeRole) envelopeRole.textContent = teacher.envelopeRole;

  // Main Card Honoree Details
  const photo = document.getElementById('honoree-photo');
  const badge = document.getElementById('honoree-badge');
  const name = document.getElementById('honoree-name');
  const designation = document.getElementById('honoree-designation');
  const quote = document.getElementById('honoree-quote');
  const honoreeSection = document.getElementById('honoree-section');

  if (animate && honoreeSection) {
    honoreeSection.classList.add('profile-updating');
    setTimeout(() => {
      applyHonoreeContent(teacher, photo, badge, name, designation, quote);
      honoreeSection.classList.remove('profile-updating');
    }, 180);
  } else {
    applyHonoreeContent(teacher, photo, badge, name, designation, quote);
  }

  // Update Modal Content
  const modalTitle = document.getElementById('modal-title');
  const modalName = document.getElementById('modal-honoree-name');
  const modalMsg = document.getElementById('modal-honoree-msg');

  if (modalTitle) modalTitle.textContent = teacher.modalTitle;
  if (modalName) modalName.textContent = teacher.modalGreeting;
  if (modalMsg) modalMsg.innerHTML = teacher.modalMsg;
}

function applyHonoreeContent(teacher, photo, badge, name, designation, quote) {
  if (photo) {
    photo.src = teacher.photo;
    photo.alt = teacher.name;
    photo.style.objectPosition = teacher.objectPosition;
  }
  if (badge) badge.textContent = teacher.badge;
  if (name) name.textContent = teacher.name;
  if (quote) quote.textContent = teacher.quote;

  if (designation) {
    designation.innerHTML = teacher.designations
      .map(d => `<span class="deg-pill">${d}</span>`)
      .join('');
  }
}

/* --------------------------------------------------------------------------
   2. Copy Direct Link & WhatsApp Share
   -------------------------------------------------------------------------- */
function initCopyAndShare() {
  const copyBtn = document.getElementById('copy-teacher-link-btn');
  const copyBtnText = document.getElementById('copy-btn-text');
  const whatsappBtn = document.getElementById('whatsapp-share-btn');

  function getShareUrl() {
    return `${window.location.origin}${window.location.pathname}?teacher=${activeTeacherKey}`;
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const shareUrl = getShareUrl();
      const teacher = TEACHERS[activeTeacherKey];

      try {
        await navigator.clipboard.writeText(shareUrl);
        showToast(`✅ Link copied for ${teacher.name}!`);
        if (copyBtnText) {
          const original = copyBtnText.textContent;
          copyBtnText.textContent = 'Copied! 📋';
          setTimeout(() => {
            copyBtnText.textContent = original;
          }, 2000);
        }
      } catch (err) {
        const textarea = document.createElement('textarea');
        textarea.value = shareUrl;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast(`✅ Link copied for ${teacher.name}!`);
      }
    });
  }

  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
      const shareUrl = getShareUrl();
      const teacher = TEACHERS[activeTeacherKey];
      const message = `Respected ${teacher.salutation},\n\nWe cordially invite you to our Annual Freshers Celebration *IGNITE - 2026* at Deogiri College, Chhatrapati Sambhajinagar!\n\n📅 Date: Wednesday, 14 Oct 2026\n⏰ Reporting Time: 11:30 AM Onwards\n📍 Venue: Rabindranath Tagore Hall, Deogiri College\n\nPlease open your personalized royal invitation card here:\n${shareUrl}\n\nWarm regards,\nDepartment of Commerce & Management\nDeogiri College, Chhatrapati Sambhajinagar`;

      const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    });
  }
}

function showToast(message) {
  const toast = document.getElementById('copy-toast');
  const toastMsg = document.getElementById('toast-msg');
  if (!toast) return;

  if (toastMsg) toastMsg.textContent = message;
  toast.classList.add('visible');

  setTimeout(() => {
    toast.classList.remove('visible');
  }, 3200);
}

/* --------------------------------------------------------------------------
   3. Canvas Particle Background (Golden Fire Embers & Sparkles)
   -------------------------------------------------------------------------- */
function initAmbientCanvas() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const PARTICLE_COUNT = 65;

  const colors = [
    'rgba(255, 215, 0, ',    // Gold
    'rgba(255, 140, 0, ',    // Orange flame
    'rgba(255, 69, 0, ',     // Red-orange
    'rgba(180, 100, 255, ',  // Purple violet
    'rgba(255, 255, 220, '   // Starlight
  ];

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.8 + 1,
      speedY: -(Math.random() * 0.9 + 0.3),
      speedX: (Math.random() - 0.5) * 0.4,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.7 + 0.2,
      pulse: Math.random() * 0.03 + 0.01
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    for (let p of particles) {
      p.y += p.speedY;
      p.x += p.speedX;
      p.alpha += Math.sin(Date.now() * 0.002) * 0.005;

      if (p.y < -10) {
        p.y = height + 10;
        p.x = Math.random() * width;
      }
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `${p.color}${Math.max(0.15, Math.min(0.9, p.alpha))})`;
      ctx.shadowBlur = p.size * 5;
      ctx.shadowColor = '#ffd700';
      ctx.fill();
    }

    requestAnimationFrame(render);
  }

  render();
}

/* --------------------------------------------------------------------------
   4. Envelope Opening Ceremony
   -------------------------------------------------------------------------- */
function initEnvelopeOpener() {
  const curtain = document.getElementById('intro-curtain');
  const openBtn = document.getElementById('open-envelope-btn');

  if (!openBtn || !curtain) return;

  openBtn.addEventListener('click', () => {
    playFanfareAudio();
    fireBurstConfetti();
    curtain.classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* --------------------------------------------------------------------------
   5. 3D Perspective Card Tilt on Mouse Move
   -------------------------------------------------------------------------- */
function init3DCardTilt() {
  const card = document.getElementById('invitation-card');
  const container = document.querySelector('.card-perspective-container');
  if (!card || !container) return;

  if (window.matchMedia('(hover: hover)').matches) {
    container.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -5.5;
      const rotateY = ((x - centerX) / centerX) * 5.5;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    container.addEventListener('mouseleave', () => {
      card.style.transform = `rotateX(0deg) rotateY(0deg) translateY(0)`;
    });
  }
}

/* --------------------------------------------------------------------------
   6. Floating Emojis Stream
   -------------------------------------------------------------------------- */
function initEmojiStream() {
  const container = document.getElementById('emoji-container');
  if (!container) return;

  const emojis = ['🔥', '✨', '🎉', '🎓', '💼', '💃', '🎶', '🥂', '🌟', '💖', '👑', '⭐'];

  function spawnEmoji() {
    const el = document.createElement('span');
    el.className = 'floating-emoji';
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    const posX = Math.random() * 95;
    const duration = Math.random() * 7 + 8;
    const size = Math.random() * 1.3 + 1.2;

    el.style.left = `${posX}vw`;
    el.style.fontSize = `${size}rem`;
    el.style.animationDuration = `${duration}s`;

    container.appendChild(el);

    setTimeout(() => {
      el.remove();
    }, duration * 1000);
  }

  for (let i = 0; i < 6; i++) {
    setTimeout(spawnEmoji, i * 600);
  }

  setInterval(spawnEmoji, 1600);
}

/* --------------------------------------------------------------------------
   7. Countdown Timer (14 October 2026, 11:30 AM)
   -------------------------------------------------------------------------- */
function initCountdown() {
  const targetDate = new Date('2026-10-14T11:30:00+05:30').getTime();

  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minsEl = document.getElementById('mins');
  const secsEl = document.getElementById('secs');

  function updateTimer() {
    const now = new Date().getTime();
    let diff = targetDate - now;

    if (diff <= 0) {
      diff = 0;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = String(d).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(h).padStart(2, '0');
    if (minsEl) minsEl.textContent = String(m).padStart(2, '0');
    if (secsEl) secsEl.textContent = String(s).padStart(2, '0');
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

/* --------------------------------------------------------------------------
   8. Audio Synthesizer (Zero-Dependency Web Audio API)
   -------------------------------------------------------------------------- */
let audioCtx = null;
let musicInterval = null;
let isMusicPlaying = false;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playNote(freq, type = 'sine', duration = 0.3, volume = 0.15) {
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = type;
  osc.frequency.setValueAtTime(freq, ctx.currentTime);

  gain.gain.setValueAtTime(volume, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + duration);
}

function playFanfareAudio() {
  const notes = [
    { f: 523.25, d: 0.15 }, // C5
    { f: 659.25, d: 0.15 }, // E5
    { f: 783.99, d: 0.2 },  // G5
    { f: 1046.50, d: 0.5 }  // C6
  ];

  notes.forEach((note, idx) => {
    setTimeout(() => {
      playNote(note.f, 'triangle', note.d, 0.22);
    }, idx * 140);
  });
}

function initAudioSynthesizer() {
  const musicBtn = document.getElementById('music-btn');
  const musicLabel = document.getElementById('music-label');
  const musicIcon = document.getElementById('music-icon');
  if (!musicBtn) return;

  const progression = [
    [523.25, 659.25, 783.99], // C major
    [392.00, 493.88, 587.33], // G major
    [440.00, 523.25, 659.25], // A minor
    [349.23, 440.00, 523.25]  // F major
  ];

  let chordIndex = 0;

  function playAmbientPartyBeat() {
    const chord = progression[chordIndex % progression.length];
    chord.forEach((note, i) => {
      setTimeout(() => {
        playNote(note, 'sine', 0.6, 0.08);
      }, i * 90);
    });
    chordIndex++;
  }

  musicBtn.addEventListener('click', () => {
    isMusicPlaying = !isMusicPlaying;

    if (isMusicPlaying) {
      getAudioContext();
      musicLabel.textContent = 'Party Music: ON 🎶';
      musicIcon.textContent = '🔊';
      musicBtn.classList.add('fire-glow');
      playFanfareAudio();
      musicInterval = setInterval(playAmbientPartyBeat, 750);
    } else {
      musicLabel.textContent = 'Party Music: Off';
      musicIcon.textContent = '🎵';
      musicBtn.classList.remove('fire-glow');
      if (musicInterval) {
        clearInterval(musicInterval);
        musicInterval = null;
      }
    }
  });
}

/* --------------------------------------------------------------------------
   9. Blessing & RSVP Modal Interaction
   -------------------------------------------------------------------------- */
function initBlessingModal() {
  const acceptBtn = document.getElementById('accept-invitation-btn');
  const modal = document.getElementById('blessing-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!acceptBtn || !modal) return;

  acceptBtn.addEventListener('click', () => {
    playFanfareAudio();
    fireBurstConfetti();
    modal.classList.add('active');
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      fireBurstConfetti();
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
}

/* --------------------------------------------------------------------------
   10. Confetti Cannon Fireworks
   -------------------------------------------------------------------------- */
function initConfettiCannon() {
  const confettiBtn = document.getElementById('confetti-btn');
  if (confettiBtn) {
    confettiBtn.addEventListener('click', () => {
      playFanfareAudio();
      fireBurstConfetti();
    });
  }
}

function fireBurstConfetti() {
  const confettiContainer = document.createElement('div');
  confettiContainer.style.position = 'fixed';
  confettiContainer.style.inset = '0';
  confettiContainer.style.pointerEvents = 'none';
  confettiContainer.style.zIndex = '9999';
  document.body.appendChild(confettiContainer);

  const colors = ['#ffd700', '#ff3b30', '#ff9500', '#ff2d55', '#af52de', '#5856d6', '#34c759'];
  const emojis = ['✨', '🎉', '🔥', '👑', '💖', '⭐'];
  const count = 75;

  for (let i = 0; i < count; i++) {
    const isEmoji = Math.random() > 0.65;
    const piece = document.createElement('div');

    if (isEmoji) {
      piece.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      piece.style.fontSize = `${Math.random() * 1.5 + 1}rem`;
    } else {
      piece.style.width = `${Math.random() * 12 + 6}px`;
      piece.style.height = `${Math.random() * 16 + 8}px`;
      piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '3px';
    }

    piece.style.position = 'absolute';
    piece.style.left = '50%';
    piece.style.top = '45%';
    piece.style.userSelect = 'none';

    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 600 + 300;
    const destX = Math.cos(angle) * velocity;
    const destY = Math.sin(angle) * velocity + Math.random() * 250;
    const rot = Math.random() * 720 - 360;

    piece.animate([
      { transform: 'translate(-50%, -50%) rotate(0deg) scale(0)', opacity: 1 },
      { transform: `translate(calc(-50% + ${destX}px), calc(-50% + ${destY}px)) rotate(${rot}deg) scale(1.2)`, opacity: 0 }
    ], {
      duration: Math.random() * 1200 + 1200,
      easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
      fill: 'forwards'
    });

    confettiContainer.appendChild(piece);
  }

  setTimeout(() => {
    confettiContainer.remove();
  }, 2600);
}
