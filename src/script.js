const links = document.querySelectorAll('.links li');
const mobileMenuBtn = document.querySelector('.mobileMenuIcon');
const mobileMenu = document.querySelector('.mobileMenu');
const overflow = document.querySelector(".overflow");
const closeMenuBtn = document.querySelector('.closeMenu');
const features = document.querySelector('.features');
const company = document.querySelector('.company');
const mobFeatures = document.querySelector('.mobFeatures');
const mobCompany = document.querySelector('.mobCompany');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
  overflow.style.display = 'flex';
});

closeMenuBtn.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  overflow.style.display = 'none';
});

links.forEach(link => {
  const subMenu = link.querySelector('.subMenu');
  link.addEventListener('click', () => {
    if(subMenu.style.display === 'flex') {
      subMenu.style.display = 'none';
    } else {
      subMenu.style.display = 'flex';
    }  
  });
});

features.addEventListener('click', () => {
  if(mobFeatures.style.display === 'flex') {
    mobFeatures.style.display = 'none';
  } else {
    mobFeatures.style.display = 'flex';
  }  
});

company.addEventListener('click', () => {
  if(mobCompany.style.display === 'flex') {
    mobCompany.style.display = 'none';
  } else {
    mobCompany.style.display = 'flex';
  }  
});
