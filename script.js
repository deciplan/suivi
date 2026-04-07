/* ===== Deciplan — script.js ===== */

const TODAY = new Date();
TODAY.setHours(0, 0, 0, 0);

let allData = [];

/* ---- helpers ---- */
function parseDate(s) {
  if (!s) return null;
  const [y, m, d] = s.split('-');
  return new Date(+y, +m - 1, +d);
}

function fmt(s) {
  if (!s) return '—';
  return parseDate(s).toLocaleDateString('fr-MA', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function getStatus(r) {
  const ouv = parseDate(r.ouv), clo = parseDate(r.clo);
  if (!ouv || !clo)   return 'attente';
  if (TODAY < ouv)    return 'attente';
  if (TODAY > clo)    return 'ferme';
  return daysLeft(r) <= 14 ? 'bientot' : 'ouvert';
}

function daysLeft(r) {
  const clo = parseDate(r.clo);
  return clo ? Math.round((clo - TODAY) / 86400000) : null;
}

/* ---- render table ---- */
function render() {
  const search  = document.getElementById('search').value.toLowerCase().trim();
  const cat     = document.getElementById('filter-cat').value;
  const status  = document.getElementById('filter-status').value;

  let rows = allData.filter(r => {
    if (search && ![r.nom, r.cat, r.ville, r.note].some(v => v && v.toLowerCase().includes(search))) return false;
    if (cat    && r.cat !== cat)           return false;
    if (status && getStatus(r) !== status) return false;
    return true;
  });

  const order = { bientot: 0, ouvert: 1, attente: 2, ferme: 3 };
  rows.sort((a, b) => order[getStatus(a)] - order[getStatus(b)]);

  /* stats (always on full data) */
  let open = 0, soon = 0, closed = 0;
  allData.forEach(r => {
    const s = getStatus(r);
    if (s === 'ouvert')  open++;
    else if (s === 'bientot') soon++;
    else if (s === 'ferme')   closed++;
  });
  document.getElementById('cnt-open').textContent   = open;
  document.getElementById('cnt-soon').textContent   = soon;
  document.getElementById('cnt-closed').textContent = closed;
  document.getElementById('cnt-total').textContent  = allData.length;

  const tbody = document.getElementById('tbody');

  if (!rows.length) {
    tbody.innerHTML = '<tr><td colspan="8" class="empty">😔 Aucun résultat pour ces filtres.</td></tr>';
    return;
  }

  const badgeClass = { ouvert: 'b-open', bientot: 'b-soon', ferme: 'b-closed', attente: 'b-wait' };
  const badgeLabel = { ouvert: '✅ Ouvert', bientot: '⚠️ Bientôt', ferme: '❌ Fermé', attente: '🕐 En attente' };

  tbody.innerHTML = rows.map(r => {
    const st   = getStatus(r);
    const days = daysLeft(r);

    let cd = '<span class="countdown">—</span>';
    if (days !== null && st !== 'attente') {
      if (days < 0)       cd = '<span class="countdown">Expiré</span>';
      else if (days === 0) cd = '<span class="countdown urgent">Aujourd\'hui !</span>';
      else if (days <= 7) cd = `<span class="countdown urgent">${days} j restants</span>`;
      else if (days <= 14) cd = `<span class="countdown warning">${days} j restants</span>`;
      else                 cd = `<span class="countdown ok">${days} j restants</span>`;
    }

    return `<tr>
      <td>
        <div class="school-name">${r.nom}</div>
        <div class="school-note">${r.note || ''}</div>
      </td>
      <td><span class="cat-pill">${r.cat}</span></td>
      <td style="font-size:12px;color:#6b7280">📍 ${r.ville}</td>
      <td style="font-size:12px;color:#6b7280">${fmt(r.ouv)}</td>
      <td style="font-size:12px;color:#6b7280">${fmt(r.clo)}</td>
      <td>${cd}</td>
      <td><span class="badge ${badgeClass[st]}">${badgeLabel[st]}</span></td>
      <td><a class="link-btn" href="${r.lien}" target="_blank" rel="noopener">🔗 Accéder</a></td>
    </tr>`;
  }).join('');
}

/* ---- init ---- */
async function init() {
  try {
    const res = await fetch('ecoles.json');
    allData = await res.json();
  } catch (e) {
    console.error('Impossible de charger ecoles.json', e);
    document.getElementById('tbody').innerHTML =
      '<tr><td colspan="8" class="empty">⚠️ Erreur de chargement des données.</td></tr>';
    return;
  }

  render();

  document.getElementById('search').addEventListener('input', render);
  document.getElementById('filter-cat').addEventListener('change', render);
  document.getElementById('filter-status').addEventListener('change', render);
}

document.addEventListener('DOMContentLoaded', init);
