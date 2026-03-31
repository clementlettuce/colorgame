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
  const name = currentDrag.textContent;
  createCircle(e.offsetX, e.offsetY, r, g, b, name);

});
function createCircle(x, y, r, g, b, name) {
  const circle = document.createElement('div');
  circle.classList.add('circle');
  circle.style.left = x + 'px';
  circle.style.top = y + 'px';
  circle.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  circle.dataset.r = r;
  circle.dataset.g = g;
  circle.dataset.b = b;
  circle.textContent = name;
  makeDraggable(circle);
  workspace.appendChild(circle);
}

