document.querySelectorAll('.navigation__link').forEach(item => {
  item.addEventListener('click', event => {
    document.getElementById("nav-toggle").checked = false;
  })
});
