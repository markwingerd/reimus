// Everything in here is executed once the DOM (the HTML content of your website) has finished loading.
document.addEventListener("DOMContentLoaded", function () {
  // The layout will be loaded on all pages that do NOT have the "no-layout" class in the <body> element.
  if (document.body.classList.contains("no-layout")) return;

//   // Inserting your header and footer:
//   document.body.insertAdjacentHTML("afterbegin", headerEl);
//   document.body.insertAdjacentHTML("beforeend", footerEl);
  // Inserting your header and footer:
  const layoutEl = document.querySelector(".layout");
  layoutEl.insertAdjacentHTML("afterbegin", headerEl);
  layoutEl.insertAdjacentHTML("beforeend", footerEl);

  // To insert something inside another element, e.g. for sidebars:
  const wrapperEl = document.querySelector(".my-wrapper"); // <- your selector here
  if (wrapperEl) wrapperEl.insertAdjacentHTML("afterbegin", `<b>Element at beginning of wrapper element.</b>`);
  if (wrapperEl) wrapperEl.insertAdjacentHTML("beforeend", `<b>Element at the end of wrapper element.</b>`);

  // Give class 'active' to links to the current page:
  initActiveLinks();

  // add your own JavaScript code here...
});

/* ********************************* */

/**
 *  F U N C T I O N S
 */

function initActiveLinks() {
  // This function adds the class "active" to any link that links to the current page.
  // This is helpful for styling the active menu item.

  const pathname = window.location.pathname;
  [...document.querySelectorAll("a")].forEach((el) => {
    const elHref = el.getAttribute("href").replace(".html", "").replace("./", "/");

    if (pathname == "/") {
      // homepage
      if (elHref == "/" || elHref == "/index") el.classList.add("active");
    } else {
      // other pages
      if (window.location.href.includes(elHref)) el.classList.add("active");
    }
  });
}

function getNestingString() {
  // This function prepares the "nesting" variable for your header and footer (see below).
  // Only change this function if you know what you're doing.
  const currentUrl = window.location.href.replace("http://", "").replace("https://", "").replace("/public/", "/");
  const numberOfSlahes = currentUrl.split("/").length - 1;
  if (numberOfSlahes == 1) return ".";
  if (numberOfSlahes == 2) return "..";
  return ".." + "/..".repeat(numberOfSlahes - 2);
}

/* ********************************* */

/**
 *  H T M L
 */

const nesting = getNestingString();

/**
  Use ${nesting} to output a . or .. or ../.. etc according to the current page's folder depth.
  Example:
    <img src="${nesting}/images/example.jpg" />
  will output
    <img src="./images/example.jpg" /> on a page that isn't in any folder.
    <img src="../images/example.jpg" /> on a page that is in a folder.
    <img src="../../images/example.jpg" /> on a page that is in a sub-folder.
    etc.
 */

// Insert your header HTML inside these ``. You can use HTML as usual. 
// You don't need to use the <header> element, but I recommend it.
const headerEl = `
    <header>
      <div class="header-content">
        <p>Reimus</p>
        
        <!-- NAVIGATION
        <nav>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="anime.html">Anime</a></li>
            <li><a href="games.html">Video Games</a></li>
            <li><a href="projects.html">Programming Projects</a></li>
            <li><a href="music.html">Music</a></li>
            <li>
                <strong>Anime</strong>
                <ul>
                  <li><a href="./anime/index.html">My Anime List</a></li>
                </ul>
            </li> 
          </ul>
        </nav>-->
      </div>
    </header>

    <!-- =============================================== -->
    <!-- LEFT SIDEBAR -->
    <!-- =============================================== -->

    <aside class="left-sidebar">

      <nav class="aside-nav">
        <div class="aside-nav__heading" aria-hidden="true">Menu</div>
          <ul aria-label="Menu">
            <li>
              <a href="index.html">home</a>
            </li>
            <li>
              <details data-id="Anime">
                <summary>Anime Shrine</summary>
                <ul>
                  <li class="end-section">
                    <a href="myanimelist.html">My Anime List</a>
                  </li>
                  <li>
                    <a href="sailormoon.html">Sailor Moon</a>
                  </li>
                  <li>
                    <a href="cardcaptorsakura.html">Card Captor Sakura</a>
                  </li>
                  <li>
                    <a href="lain.html">Serial Experiments: Lain</a>
                  </li>
                  <li>
                    <a href="ouran.html">Ouran highschool host club</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details data-id="Games">
                <summary>Video Games</summary>
                <ul>
                  <li class="end-section">
                    <a href="gameachievements.html">My achievements</a>
                  </li>
                  <li>
                    <a href="hunt.html">Hunt: Showdown</a>
                  </li>
                  <li>
                    <a href="vrising.html">V Rising</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details data-id="Music">
                <summary>Music</summary>
                <ul>
                  <li>
                    <a href="mytopmusic.html">My favorite music</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details data-id="Website">
                <summary>Website</summary>
                <ul>
                  <li>
                    <a href="credits.html">Source List</a>
                  </li>
                  <li>
                    <a href="coolsites.html">Cool sites</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </nav>

    <!-- 
      <div class="sidebar-section">
        <div class="sidebar-title">Section Title</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p>Necessit atibus perferendis inventore tempore vel optio similique blanditiis quasi quam?</p>
      </div>
      
      <div class="sidebar-section">
        <div class="sidebar-title">Section Title</div>
        <blockquote>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Necessit atibus perferendis inventore tempore vel optio similique blanditiis quasi quam?</p>
        </blockquote>
      </div>
      
      <div class="sidebar-section">
        <div class="sidebar-title">Section Title</div>
        <ul>
          <li>List</li>
          <li>List</li>
          <li><a href="/">List</a></li>
          <li>List</li>
        </ul>
      </div>
      
      <div class="sidebar-section">
        <div class="sidebar-title">Section Title</div>
        <marquee>
          <a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
          <a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
          <a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
          <a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
        </marquee>
      </div>
      
      <div class="sidebar-section">
        <div class="sidebar-title">Section Title</div>
        <img class="full-width-image" src="https://picsum.photos/id/40/1000/400">
      </div>
      
      <div class="sidebar-section">
        <div class="sidebar-title">Section Title</div>
        <div class="site-button">
          <a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
        <textarea><a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a></textarea>
        </div>
      </div>
      -->


    </aside>

  
    <!-- =============================================== -->
    <!-- RIGHT SIDEBAR -->
    <!-- =============================================== -->

    <aside class="right-sidebar">
  
      
      <div class="sidebar-section updates">
        <div class="sidebar-title">Updates</div>
        <!-- -->
        <p>3-13-26: Finished revamping the CSS</p>
        <p>3-15-26: Added page for cool websites</p> 
        <p>3-23-26: Added daily cards</p> 
        <!-- -->
        <p>3-29-26: Counter</p>
        <p>4-02-26: Sailor Moon page</p>
        <p>4-08-26: Card Captor Sakura Page</p>
        <p>4-15-26: Serial Experiments Lain Page</p>

      </div>
      
      <!-- 
      <div class="sidebar-section">
        <div class="sidebar-title">Section Title</div>
        <blockquote>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Necessit atibus perferendis inventore tempore vel optio similique blanditiis quasi quam?</p>
        </blockquote>
      </div>
      
      <div class="sidebar-section">
        <div class="sidebar-title">Section Title</div>
        <ul>
          <li>List</li>
          <li>List</li>
          <li><a href="/">List</a></li>
          <li>List</li>
        </ul>
      </div>
      
      <div class="sidebar-section">
        <div class="sidebar-title">Section Title</div>
        <marquee>
          <a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
          <a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
          <a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
          <a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
        </marquee>
      </div>
      
      <div class="sidebar-section">
        <div class="sidebar-title">Section Title</div>
        <img class="full-width-image" src="https://picsum.photos/id/40/1000/400">
      </div>
      
      <div class="sidebar-section">
        <div class="sidebar-title">Section Title</div>
        <div class="site-button">
          <a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
        <textarea><a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a></textarea>
        </div>
      </div>
      -->
    </aside>
`;

// Insert your footer HTML inside these ``. You can use HTML as usual. 
// You don't need to use the <footer> element, but I recommend it.
const footerEl = `
	<footer>
        <!-- <div>Footer Text. <a href="/">Link.</a> -->Template generated with&nbsp<a href="https://petrapixel.neocities.org/coding/layout-generator.html">petrapixel's layout generator</a>.</div>
    </footer>
`;