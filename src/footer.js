import './footer.css'

function Footer(){
    const dataFooter = (
        <footer>
<div class="row primary">
  <div class="column about">

  <h3> Developer</h3>

   <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
      voluptatem corporis error non,
  </p>

  <div class="social">
    <i class="fa-brands fa-facebook-square"></i>
    <i class="fa-brands fa-instagram-square"></i>
    <i class="fa-brands fa-twitter-square"></i>
    <i class="fa-brands fa-youtube-square"></i>
    <i class="fa-brands fa-whatsapp-square"></i>
  </div>
</div>

<div class="column links">
<h3>Some Links</h3>

 <ul>

  <li>
   <a href="#faq">F.A.Q</a>
  </li>
  <li>
   <a href="#cookies-policy">Cookies Policy</a>
  </li>
  <li>
   <a href="#terms-of-services">Terms Of Service</a>
  </li>
  <li>
   <a href="#support">Support</a>
  </li>
 </ul>

</div>


<div class="column links">
  <h3>Some Links</h3>
   <ul>
    <li>
     <a href="#faq">F.A.Q</a>
    </li>
    <li>
     <a href="#cookies-policy">Cookies Policy</a>
    </li>
    <li>
    <a href="#terms-of-services">Terms Of Service</a>
    </li>
    <li>
    <a href="#support">Support</a>
    </li>
  </ul>
</div>

<div class="column subscribe">
 <h3>Newsletter</h3>
  <div>
   <input type="email" placeholder="Your email id here" />
   <button>Subscribe</button>
  </div>

</div>

</div>

<div class="row copyright">
  <div class="footer-menu">

  <a href="Home">Home</a>
  <a href="About">About</a>
  <a href="Contact">Contact</a>
  <a href="Blog">Blog</a>
  <a href="Social">Social</a>

  </div>
   <p>Copyright &copy; 2021  Developer</p>
</div>
</footer>
    );

    return dataFooter;

}

export default Footer;