const navbarHTML = `

<header class="section-navbar">
<section class="top_txt">
  <div class="head container">
    <div class="head_txt">
      <p>Enjoy free shipping with a 30-day return policy.
      </p>
    </div>
    <div class="sing_in_up">
      <a href="# ">SIGN IN</a>
      <a href="# ">SIGN UP</a>
    </div>
  </div>
</section>
<div class="container">
  <div class="navbar-brand">
    <a href="index.html">
      <span style="color: #8366bd; font-family: Nick; font-weight: bolder;"><span style="border-radius: 50%; background-color:#8366bd; color:#ffffff; padding: 5px;">Lady</span>Luxe Atire</span>

    </a>
  </div>

  <nav class="navbar">
    <ul>
      <li class="nav-item">
        <a href="/" class="nav-link">Home</a>
      </li>
      <li class="nav-item">
        <a href="about.html" class="nav-link">about</a>
      </li>
      <li class="nav-item">
        <a href="products.html" class="nav-link">products</a>
      </li>
      <li class="nav-item">
        <a href="contact.html" class="nav-link">contact</a>
      </li>
      <li class="nav-item">
        <a
          href="addToCart.html"
          class="nav-link add-to-cart-button"
          id="cartValue"
        >
          <i class="fa-solid fa-cart-shopping"> 0 </i>
        </a>
      </li>
    </ul>
  </nav>
</div>
</header>

`
const navbarElem = document.querySelector(".section-navbar");

navbarElem.insertAdjacentHTML("afterbegin",navbarHTML);