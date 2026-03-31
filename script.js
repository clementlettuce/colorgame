let currentDrag = null;
const colors = document.querySelectorAll('.color');
const workspace = document.getElementById('workspace');
colors.forEach(color => {
  color.addEventListener('dragstart', (e) => {
    currentDrag = color;
  });
});
workspace.addEventListener('drop', (e) => {
  const r = parseInt(currentDrag.dataset.r);
  const g = parseInt(currentDrag.dataset.g);
  const b = parseInt(currentDrag.dataset.b);
});
