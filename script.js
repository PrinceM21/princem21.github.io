/* Prince Mayani — portfolio interactions.
   Everything degrades gracefully: with JS off the page still shows
   final numbers, the full chart (via reduced-motion CSS), and all text. */

var REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- theme toggle ---------- */

document.getElementById('theme-toggle').addEventListener('click', function () {
  var next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  localStorage.setItem('theme', next);
});

/* ---------- KPI count-up ---------- */

function formatValue(el, value) {
  var dec = parseInt(el.dataset.dec || '0', 10);
  var out = dec > 0 ? value.toFixed(dec) : Math.round(value).toString();
  if (el.dataset.fmt === 'comma') out = Math.round(value).toLocaleString('en-US');
  return out + (el.dataset.suffix || '');
}

function countUp(el) {
  var target = parseFloat(el.dataset.count);
  if (REDUCED) { el.textContent = formatValue(el, target); return; }
  var duration = 800;
  var start = null;
  function step(ts) {
    if (start === null) start = ts;
    var t = Math.min((ts - start) / duration, 1);
    var eased = 1 - Math.pow(1 - t, 3); /* ease-out cubic */
    el.textContent = formatValue(el, target * eased);
    if (t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

document.querySelectorAll('.metric-num[data-count]').forEach(countUp);

/* ---------- DTI chart: animate when scrolled into view ---------- */

var dtiFigure = document.getElementById('dti-figure');
if ('IntersectionObserver' in window && !REDUCED) {
  new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { dtiFigure.classList.add('in-view'); obs.disconnect(); }
    });
  }, { threshold: 0.4 }).observe(dtiFigure);
} else {
  dtiFigure.classList.add('in-view');
}

/* ---------- movie demo: live search over a sample dataset ---------- */

var MOVIES = [
  { title: 'The Godfather', year: 1972, rating: 8.7 },
  { title: 'Pulp Fiction', year: 1994, rating: 8.5 },
  { title: 'The Matrix', year: 1999, rating: 8.2 },
  { title: 'Spirited Away', year: 2001, rating: 8.5 },
  { title: 'The Dark Knight', year: 2008, rating: 8.5 },
  { title: 'Inception', year: 2010, rating: 8.4 },
  { title: 'Interstellar', year: 2014, rating: 8.4 },
  { title: 'La La Land', year: 2016, rating: 7.9 },
  { title: 'Parasite', year: 2019, rating: 8.5 },
  { title: 'Dune', year: 2021, rating: 7.8 },
  { title: 'Everything Everywhere All at Once', year: 2022, rating: 7.8 },
  { title: 'Oppenheimer', year: 2023, rating: 8.1 }
];

var movieList = document.getElementById('movie-list');
var movieCount = document.getElementById('movie-count');
var movieSearch = document.getElementById('movie-search');

function renderMovies(query) {
  var q = query.trim().toLowerCase();
  var hits = MOVIES.filter(function (m) {
    return m.title.toLowerCase().indexOf(q) !== -1 || String(m.year).indexOf(q) !== -1;
  });
  movieList.innerHTML = hits.length
    ? hits.map(function (m) {
        return '<li><span class="m-title">' + m.title + ' (' + m.year + ')</span>' +
               '<span class="m-rating">★ ' + m.rating.toFixed(1) + '</span></li>';
      }).join('')
    : '<li class="m-empty">0 rows returned</li>';
  movieCount.textContent = hits.length + ' of ' + MOVIES.length + ' movies';
}

movieSearch.addEventListener('input', function () { renderMovies(movieSearch.value); });
renderMovies('');
