/* Skill filter: clicking a matrix row dims project tiles that don't use
   that skill, like a slicer in a BI report. Plain JS, nothing else. */

(function () {
  var rows = Array.prototype.slice.call(document.querySelectorAll('.matrix tr[data-skill]'));
  var tiles = Array.prototype.slice.call(document.querySelectorAll('#projects .tile[data-skills]'));
  var status = document.getElementById('filter-status');
  var statusName = document.getElementById('filter-name');
  var statusCount = document.getElementById('filter-count');
  var clearBtn = document.getElementById('filter-clear');
  var active = null;

  function clearFilter() {
    active = null;
    rows.forEach(function (r) { r.classList.remove('active'); });
    tiles.forEach(function (t) { t.classList.remove('dimmed'); });
    status.hidden = true;
  }

  function applyFilter(row) {
    var skill = row.dataset.skill;
    if (active === skill) { clearFilter(); return; }
    active = skill;
    rows.forEach(function (r) { r.classList.toggle('active', r === row); });
    var matches = 0;
    tiles.forEach(function (t) {
      var used = (' ' + t.dataset.skills + ' ').indexOf(' ' + skill + ' ') !== -1;
      t.classList.toggle('dimmed', !used);
      if (used) matches++;
    });
    statusName.textContent = row.cells[0].textContent;
    statusCount.textContent = matches + ' of ' + tiles.length + ' projects';
    status.hidden = false;
  }

  rows.forEach(function (row) {
    row.setAttribute('tabindex', '0');
    row.setAttribute('role', 'button');
    row.addEventListener('click', function () { applyFilter(row); });
    row.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); applyFilter(row); }
    });
  });

  clearBtn.addEventListener('click', clearFilter);
})();
