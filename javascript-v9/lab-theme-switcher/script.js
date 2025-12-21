const themes = [
    {
      name: "light",
      message: "Hello sunshine — Light theme is on!",
    },
    {
      name: "dark",
      message: "The night is yours — Dark theme is on!",
    },
    {
      name: "ocean",
      message: "Blue skies and high tides — Ocean theme is on!",
    },
    {
      name: "nord",
      message: "The frost has settled - Nord theme is on!",
    }
  ];
  
  const switcherBtn = document.getElementById("theme-switcher-button");
  const themeDropDown = document.getElementById("theme-dropdown");
  const polite = document.getElementById("polite");
  const body = document.querySelector("body");
  const themeDropDownLis = document.querySelectorAll("#theme-dropdown li");
  
  function toggleBtn(e) {
    switcherBtn.setAttribute("aria-expanded", themeDropDown.hidden.toString());
    themeDropDown.hidden = !themeDropDown.hidden;
    e.stopPropagation();
  }
  
  switcherBtn.addEventListener("click", (e) => {
    toggleBtn(e);
  });
  
  themeDropDownLis.forEach((li) => {
    li.addEventListener("click", (e) => {
      body.className = e.target.id;
      const themeName = e.target.id.replace("theme-", "");
      themes.forEach(t => {
        if (t.name !== themeName) {
          return;
        }
  
        polite.textContent = t.message;
        toggleBtn(e);
      });
    });
  });
  
  document.addEventListener("click", (e) => {
    if (!themeDropDown.hidden) {
      toggleBtn(e);
    }
  });
  