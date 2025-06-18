const logo = document.getElementById("topbar-item"); //init topbar item

const logoKeyframes = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const logoOptions = {
  duration: 2000,
  iterations: 1,
};

logo.addEventListener ('click', () => {
    logo.animate(logoKeyframes, logoOptions);
});