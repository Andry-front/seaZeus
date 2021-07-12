const headerDOM = `<header class="container flex">
            <div class="logo">
                <a href="/">
                    <img src="../images/logo.png" alt="Logo">
                </a>
            </div>


            <div class="product-form-wrapper">
                <form id="product" class="flex" action="/">
                    <label for="search">Product</label>
                    <input type="text" id="search" name="search" placeholder="Search">
                    <button class="flex">Search</button>
                </form>
            </div>

            <div class="panel flex">
                <div class="basket">
                    <button class="flex">
                        <img src="../images/basket-icon.svg" alt="basket">
                    </button>
                </div>
                <div class="user">
                    <button class="flex">
                        <img src="../images/user-icon.svg" alt="user">
                    </button>
                </div>
            </div>
        </header>`;
const menuDOM = `<div id="menu" class="container">
            <div class="menu-wrapper flex">
                <div class="categories-list">
                    <div class="headline_categories-list flex">
                        <div class="categories-list-icon flex">
                            <img src="../images/categories-icon.svg" alt="Icon">
                        </div>
                        <p>Category</p>
                    </div>
                    <ul>
                        <li>
                            <a href="/">Agriculture</a>
                        </li>
                        <li>
                            <a href="/">Apparel</a>
                        </li>
                        <li>
                            <a href="/">Automobiles & Motorcycles</a>
                        </li>
                        <li>
                            <a href="/">Beauty & Personal Care</a>
                        </li>
                        <li>
                            <a href="/">Chemicals</a>
                        </li>
                        <li>
                            <a href="/">Construction & Real Estate</a>
                        </li>
                        <li>
                            <a href="/">Consumer Electronics</a>
                        </li>
                        <li>
                            <a href="/">Electrical Equipment & Supplies</a>
                        </li>
                        <li>
                            <a href="/">Electronic Components & Supplies</a>
                        </li>
                        <li>
                            <a href="/">Energy</a>
                        </li>
                        <li>
                            <a href="/">Environment</a>
                        </li>
                        <li>
                            <a href="/">Fashion Accessories</a>
                        </li>
                        <li>
                            <a href="/">Food & Beverage</a>
                        </li>
                        <li>
                            <a href="/">Furniture</a>
                        </li>
                        <li>
                            <a href="/">Gifts & Crafts</a>
                        </li>
                        <li>
                            <a href="/">Hardware</a>
                        </li>
                        <li>
                            <a href="/">Health & Medical</a>
                        </li>
                        <li>
                            <a href="/">Home & Garden</a>
                        </li>
                        <li>
                            <a href="/">Home Appliances</a>
                        </li>
                        <li>
                            <a href="/">Lights & Lighting</a>
                        </li>
                        <li>
                            <a href="/">Luggage</a>
                        </li>
                        <li>
                            <a href="/">Machinery</a>
                        </li>
                        <li>
                            <a href="/">Measurement & Analysis Instruments</a>
                        </li>
                        <li>
                            <a href="/">Minerals & Metallurgy</a>
                        </li>
                        <li>
                            <a href="/">Office & School Supplies</a>
                        </li>
                        <li>
                            <a href="/">Packaging & Printing</a>
                        </li>
                        <li>
                            <a href="/">Rubber & Plastics</a>
                        </li>
                        <li>
                            <a href="/">Security & Protection</a>
                        </li>
                        <li>
                            <a href="/">Shoes & Accessories</a>
                        </li>
                        <li>
                            <a href="/">Sports & Entertainment</a>
                        </li>
                        <li>
                            <a href="/">Telecommunications</a>
                        </li>
                        <li>
                            <a href="/">Textiles & Leather Products</a>
                        </li>
                        <li>
                            <a href="/">Timepieces</a>
                        </li>
                        <li>
                            <a href="/">Tools</a>
                        </li>
                        <li>
                            <a href="/">Toys & Hobbies</a>
                        </li>
                        <li>
                            <a href="/">Transportation</a>
                        </li>
                    </ul>
                </div>


                <div class="menu-list">
                    <div id="mobile-icon" class="flex">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul id="menu-content" class="flex">
                        <li>
                            <a href="/">How it works</a>
                        </li>
                        <li>
                            <a href="/">Marketplace</a>
                        </li>
                        <li>
                            <a href="/">News</a>
                        </li>
                        <li>
                            <a href="/">Pricing</a>
                        </li>
                        <li>
                            <a href="/">About</a>
                        </li>
                        <li>
                            <a href="/">Contact us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>`;
const footerDOM = `<footer>
            <div class="container flex">
                <div class="panel-m">
                    <div class="social-box">
                        <ul class="flex">
                            <li>
                                <a href="https://www.youtube.com/" target="_blank">
                                    <span><img src="../images/youtube-icon.svg" alt="Youtube"></span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <span><img src="../images/instagram-icon.svg" alt="Instagram"></span>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/" target="_blank">
                                    <span><img src="../images/twitter-icon.svg" alt="Twitter"></span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/" target="_blank">
                                    <span><img src="../images/facebook-icon.svg" alt="Facebook"></span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/" target="_blank">
                                    <span><img src="../images/linkedin-icon.svg" alt="Linkedin"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="panel-l">
                    <ul class="flex">
                        <li>
                            <a href="/">
                                <span>About US</span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <span>Terms of Service</span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <span>Copyright</span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <span>Support</span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <span>Help</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="panel-r flex">
                    <div class="link-box">
                        <ul class="flex">
                            <li>
                                <a href="mailto:seazeus@support.mail.com">
                                    <span><img src="../images/mail-to.svg" alt="Mail To"></span>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+123-000-0000">
                                    <span><img src="../images/phone.svg" alt="Phone"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="rights-text">
                        <p>© SeaZeus. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>`;

// Marketplace
const toolsProductDOM = '';