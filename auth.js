// ══════════════════════════════════════════════════════════════
// auth.js — Zcash Builders shared auth module
// All protected pages include this script.
// ══════════════════════════════════════════════════════════════

// ── CREDENTIALS ───────────────────────────────────────────────
// Replace with a real backend authentication call in production.
const ZB_USERS = [
  // Admins only
  { email:'admin@zcashbuilders.dev', password:'zcash2026!',  role:'admin',         name:'Admin' },
  // Admin who is also a student
  { email:'kwame@example.com',       password:'kwame2026',   role:'admin+student', name:'Kwame Boateng',  github:'kboateng'  },
  // Students
  { email:'amara@example.com',       password:'amara2026',   role:'student',       name:'Amara Okonkwo',  github:'akonkwo'   },
  { email:'fatima@example.com',      password:'fatima2026',  role:'student',       name:'Fatima Malik',   github:'fmalik'    },
  { email:'tunde@example.com',       password:'tunde2026',   role:'student',       name:'Tunde Adeyemi',  github:'tadeyemi'  },
  { email:'sofia@example.com',       password:'sofia2026',   role:'student',       name:'Sofia Reyes',    github:'sreyes'    },
  { email:'nina@example.com',        password:'nina2026',    role:'student',       name:'Nina Kovac',     github:'nkovac'    },
  { email:'seun@example.com',        password:'seun2026',    role:'student',       name:'Oluwaseun Ojo',  github:'sojo'      },
  { email:'chidi@example.com',       password:'chidi2026',   role:'student',       name:'Chidi Obi',      github:'chobi'     },
  { email:'yara@example.com',        password:'yara2026',    role:'student',       name:'Yara Svensson',  github:'ysvensson' },
  { email:'ibrahim@example.com',     password:'ibrahim2026', role:'student',       name:'Ibrahim Al-Rashid', github:'ialrashid'},
];

// ── SESSION HELPERS ───────────────────────────────────────────
const ZB_AUTH = {
  get role(){ return sessionStorage.getItem('zb_role'); },
  get email(){ return sessionStorage.getItem('zb_email'); },
  get name(){ return sessionStorage.getItem('zb_name'); },
  get github(){ return sessionStorage.getItem('zb_github'); },

  isAdmin(){  return this.role === 'admin' || this.role === 'admin+student'; },
  isStudent(){ return this.role === 'student' || this.role === 'admin+student'; },
  isLoggedIn(){ return !!this.role; },

  login(email, password){
    const u = ZB_USERS.find(u => u.email === email.toLowerCase() && u.password === password);
    if(!u) return false;
    sessionStorage.setItem('zb_role',   u.role);
    sessionStorage.setItem('zb_email',  u.email);
    sessionStorage.setItem('zb_name',   u.name);
    sessionStorage.setItem('zb_github', u.github || '');
    return true;
  },

  logout(){
    ['zb_role','zb_email','zb_name','zb_github'].forEach(k => sessionStorage.removeItem(k));
  },
};

// ── GUARD HELPERS ─────────────────────────────────────────────
// Call on each protected page to enforce access rules.

// requireStudent() — page needs at least student role.
// If not logged in → redirect to login page.
function requireStudent(){
  if(!ZB_AUTH.isStudent() && !ZB_AUTH.isAdmin()){
    window.location.href = './login.html?next=' + encodeURIComponent(window.location.pathname);
  }
}

// requireAdmin() — page needs admin role.
// If student only → redirect to student portal.
// If not logged in → redirect to login page.
function requireAdmin(){
  if(!ZB_AUTH.isAdmin()){
    if(ZB_AUTH.isStudent()){
      window.location.href = './student.html';
    } else {
      window.location.href = './login.html?next=' + encodeURIComponent(window.location.pathname);
    }
  }
}
