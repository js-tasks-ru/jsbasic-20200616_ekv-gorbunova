function toggleText() {
  let btn = document.querySelector('.toggle-text-button');
  btn.onclick = function () {
    if (!btn) return;
    let text = document.getElementById('text');
    text.hidden = !text.hidden;
  }
}
