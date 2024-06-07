

  window.addEventListener("scroll", function () {
    var header = document.getElementById("head");
    header.classList.toggle("sticky", window.scrollY > 0);
  })

  function portfolio() {
    window.portfolio_color.style.color = "red";
    window.services_color.style.color = "#222";
    window.about_color.style.color = "#222";
    window.contact_color.style.color = "#222";
  }


  function services() {
    window.portfolio_color.style.color = "#222";
    window.services_color.style.color = "red";
    window.about_color.style.color = "#222";
    window.contact_color.style.color = "#222";
  }



  function about() {
    window.portfolio_color.style.color = "#222";
    window.services_color.style.color = "#222";
    window.about_color.style.color = "red";
    window.contact_color.style.color = "#222";
  }


  function contact() {
    window.portfolio_color.style.color = "#222";
    window.services_color.style.color = "#222";
    window.about_color.style.color = "#222";
    window.contact_color.style.color = "red";
  }


  function home() {
    window.portfolio_color.style.color = "#222";
    window.services_color.style.color = "#222";
    window.about_color.style.color = "#222";
    window.contact_color.style.color = "#222";
  }

