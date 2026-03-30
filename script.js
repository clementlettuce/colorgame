let currentDrag = null;
const colors = document.querySelectorAll('.color');
const workspace = document.getElementById('workspace');
colors.forEach(color => {
  color.addEventListener('dragstart', (e) => {
    currentDrag = color;
  });
});
workspace.addEventListener('dragover', (e) => {
  e.preventDefault();
});
