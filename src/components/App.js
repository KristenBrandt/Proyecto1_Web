import React, {Component} from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./logo.png";
import desk from "./desk.jpeg";
import yo from "./yo.jpg";
import calendar from "./calendar.jpg";
import article from "./article.jpg";





class App extends Component{
  render(){
    return <>
    <div class="header-arriba">
      <br></br>
      <div class="imagen-logo" id = "wrapper"></div>
      <img  src={logo}></img>
    </div>

    <div class="header-abajo">
      <hr class="line"></hr>
      <div class= "center">
      <nav class="navbar navbar-expand-lg navbar-light navbar-light-hover-color">
        <button class="navbar-toggler navcolapsed center  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon center"></span>
        </button>

        <div class="navbar-collapse collapse center" id="navbarCollapse" >
          <ul class="navbar-nav mr-auto center navbar-center">
          <li class="nav-item ">
              <a class="nav-link navcols" href="#">PRINTABLE CALENDARS</a>
            </li>
            <li class="nav-item pink ">
              <a class="nav-link navcols" href="#">PRINTABLES</a>
            </li>
            <li class="nav-item pink ">
              <a class="nav-link navcols" href="#">WALL PAPER FOR PHONE</a>
            </li>
            <li class="nav-item pink">
              <a class="nav-link navcols" href="#">PRODUCTIVITY</a>
            </li>
            <li class="nav-item pink ">
              <a class="nav-link navcols" href="#">SELF-DEVELOPMENT</a>
            </li>
          
            <li class="nav-item dropdown pink">
              <a class="nav-link dropdown-toggle navcols" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                TODAY'S DATE
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">WHAT IS TODAY'S DATE?</a>
                <a class="dropdown-item" href="#">CURRENT DAY NUMBER</a>
                <a class="dropdown-item" href="#">CURRENT WEEK NUMBER</a>
                <a class="dropdown-item" href="#">MONTHS OF THE YEAR</a>
                <a class="dropdown-item" href="#">DAY NUMBERS BY YEAR</a>
                <a class="dropdown-item" href="#">WEEK NUMBERS BY YEAR</a>
              </div>
            </li>
            <li class="nav-item dropdown pink">
              <a class="nav-link dropdown-toggle navcols" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                ABOUT ME
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">ABOUT ME</a>
                <a class="dropdown-item" href="#">WORK WITH ME</a>
                <a class="dropdown-item" href="#">BLOGGING RESOURCES</a>
              </div>
            </li>
            <li class="nav-item dropdown pink">
              <a class="nav-link dropdown-toggle navcols" href="#" id="navbarDropdown" role="button" data-ds-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                SHOP
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">KRISTENS GIFT PRINTABLES SHOP</a>
                <a class="dropdown-item" href="#">MY FAVORITE THINGS AMAZON</a>
                <a class="dropdown-item" href="#">IDEAS FOR KRISTENS GIFTS</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      </div>
      <hr class = "line"></hr>
    </div>

    
    <div class="general">
      <div class="container-conimg has-bg-img data-bg" >
        <img src={desk} class= "bg-img"></img>
          <h1 class="centered1 bold">…MORE THAN JUST PRETTY PRINTABLES</h1>
          <br></br>
          <h2 class="centered2 bold">TO SIMPLIFY, PLAN, BE PRODUCTIVE & SUCCEED</h2>
          
      </div>

      <div>
      <br></br>
      <div class="row">
        <div class="col-7 texti ">
          <div class= "general">
            <h4 class="textoinit">I’m so happy you’re here!</h4>
            <br></br>
            <h4  class="textoinit">Kristens gift is a place where you can come for inspiration, pretty & free printables, tips and tools to simplify, plan, be productive and succeed – and change your life one Saturday gift at a time.</h4>
            <br></br>
            <h4 class="bold textoinit"><i>Love, Kristen</i></h4>
          </div>
        </div>
        <div class="col-5">
          <br></br>
          <br></br>
          <br></br>
          <img src={yo} class="img-rounded img-fluid"></img>
        </div>
        </div>
        <br></br>
        <br></br>

      </div>

      <div class="beige alturadif">
        <h4 class="bold centered beige">WHAT CAN I HELP YOU WITH?</h4>
      </div>
      <br></br>

    <div class= "container">
      <div class="row">
      <div class="col-6">
          <div>
          <img src={calendar} class="img-rectangle"></img> 
          <br></br>
          </div>
        </div>
        <div class="col-6">
          <div class= "texto">
            <h4 class="bold ">Cute (and free!) Saturday Gift calendars?</h4>
            <br></br>
            <h4 class= "">Want to see all the pretty & free printable calendars I’ve created for you? Super!</h4>
            <br></br>
            <a class="bold links pink-text blue-text">PRINTABLE CALENDARS </a>
            

          </div>
        </div>
      </div>
      </div>
      <br></br>
      <div class="row beige">
        <div class="col-6">
          <div class= "texto">
            <br></br>
            <h4 class="bold">Cute (and free!) Saturday Gift calendars?</h4>
            <br></br>
            <h4 class= "">Want to see all the pretty & free printable calendars I’ve created for you? Super!</h4>
            <br></br>
            <a class="bold links pink-text blue-text">PRINTABLE CALENDARS </a>
            <br></br>
            <br></br>

          </div>
        </div>
        <div class="col-6">
          <div>
          <br></br>
          <img src={calendar} class="img-rectangle"></img> 
          </div>
        </div>
        
      </div>
      <br></br>

      
      <br></br>
      <div class= "container">
      <div class="row">
      <div class="col-6">
          <div>
          <img src={calendar} class="img-rectangle"></img> 
          </div>
        </div>
        <div class="col-6">
          <div class= "texto">
            <h4 class="bold ">Cute (and free!) Saturday Gift calendars?</h4>
            <br></br>
            <h4 class= "">Want to see all the pretty & free printable calendars I’ve created for you? Super!</h4>
            <br></br>
            <a class="bold links pink-text blue-text">PRINTABLE CALENDARS </a>
            <br></br>

          </div>
        </div>
      </div>
      </div>
      

      <div class="row beige">
        <div class="col-6">
          <div class= "texto">
            <br></br>
            <h4 class="bold">Cute (and free!) Saturday Gift calendars?</h4>
            <br></br>
            <h4 class= "">Want to see all the pretty & free printable calendars I’ve created for you? Super!</h4>
            <br></br>
            <a class="bold links pink-text blue-text">PRINTABLE CALENDARS </a>
            <br></br>
            <br></br>

          </div>
        </div>
        <div class="col-6">
          <div>
          <br></br>
          <img src={calendar} class="img-rectangle"></img> 
          </div>
        </div>
        
      </div>
      <br></br>

      <div class="container-conimg has-bg-img data-bg" >
        <img src={desk} class= "bg-img"></img>
          <h1 class="centered1 bold">SATURDAYGIFT PRINTABLES LIBRARY</h1>
          <br></br>
      </div>

      <br></br>

      <div class="row">
        <h5>I keep most of my pretty, practical and productive printable <b>planner pages</b> and other <b>printable gifts</b> as well as the checklists, full year printable calendars and templates <b>in the (password-protected) </b> <a class="bold  pink-text blue-text">SaturdayGift printables library</a> so that you can always easily find them.</h5>
        <br></br>
        <a class= "bold texto1 pink-text blue-text">LEARN MORE</a>
        <br></br>
      </div>

      <hr class="line"></hr>

      <br></br>
      <h5 class="texto1">Latest posts:</h5>
      <br></br>
    </div>

    <div class="general2">
        <article class="beige textoart center">
          <img class= "bg-img2" src={article}></img> 
          <h2 class="bold">APRIL DESKTOP WALLPAPER – 21 CUTE & FREE APRIL 2022 CALENDAR BACKGROUNDS</h2>
          <h6 class="font"><a class="bold black-btn">Kristen Brandt</a>  ·  April 29, 2022   · <b>Productivity</b> </h6>
          <br></br>
          <p>Looking for adorable and aesthetic April desktop background for your laptop? Here are 21 free desktop wallpapers with April calendars to easily find your next favorite. </p>
          <br></br>
          <button class="btn btn-lg btn-primary btn-pink" type="submit">Read More</button>
          </article>
          <br></br>

          <article class="beige textoart center">
          <img class= "bg-img2" src={article}></img> 
          <h2 class="bold">APRIL DESKTOP WALLPAPER – 21 CUTE & FREE APRIL 2022 CALENDAR BACKGROUNDS</h2>
          <h6 class="font"><a class="bold black-btn">Kristen Brandt</a>  ·  April 29, 2022   · <b>Productivity</b> </h6>
          <br></br>
          <p>Looking for adorable and aesthetic April desktop background for your laptop? Here are 21 free desktop wallpapers with April calendars to easily find your next favorite. </p>
          <br></br>
          <button class="btn btn-lg btn-primary btn-pink" type="submit">Read More</button>
          </article>
          <br></br>

          <article class="beige textoart center">
          <img class= "bg-img2" src={article}></img> 
          <h2 class="bold">APRIL DESKTOP WALLPAPER – 21 CUTE & FREE APRIL 2022 CALENDAR BACKGROUNDS</h2>
          <h6 class="font"><a class="bold black-btn">Kristen Brandt</a>  ·  April 29, 2022   · <b>Productivity</b> </h6>
          <br></br>
          <p>Looking for adorable and aesthetic April desktop background for your laptop? Here are 21 free desktop wallpapers with April calendars to easily find your next favorite. </p>
          <br></br>
          <button class="btn btn-lg btn-primary btn-pink" type="submit">Read More</button>
          </article>
          <br></br>

          <article class="beige textoart center">
          <img class= "bg-img2" src={article}></img> 
          <h2 class="bold">APRIL DESKTOP WALLPAPER – 21 CUTE & FREE APRIL 2022 CALENDAR BACKGROUNDS</h2>
          <h6 class="font"><a class="bold black-btn">Kristen Brandt</a>  ·  April 29, 2022   · <b>Productivity</b> </h6>
          <br></br>
          <p>Looking for adorable and aesthetic April desktop background for your laptop? Here are 21 free desktop wallpapers with April calendars to easily find your next favorite. </p>
          <br></br>
          <button class="btn btn-lg btn-primary btn-pink" type="submit">Read More</button>
          </article>
          <br></br>

          <article class="beige textoart center">
          <img class= "bg-img2" src={article}></img> 
          <h2 class="bold">APRIL DESKTOP WALLPAPER – 21 CUTE & FREE APRIL 2022 CALENDAR BACKGROUNDS</h2>
          <h6 class="font"><a class="bold black-btn">Kristen Brandt</a>  ·  April 29, 2022   · <b>Productivity</b> </h6>
          <br></br>
          <p>Looking for adorable and aesthetic April desktop background for your laptop? Here are 21 free desktop wallpapers with April calendars to easily find your next favorite. </p>
          <br></br>
          <button class="btn btn-lg btn-primary btn-pink" type="submit">Read More</button>
          </article>
          <br></br>

          <article class="beige textoart center">
          <img class= "bg-img2" src={article}></img> 
          <h2 class="bold">APRIL DESKTOP WALLPAPER – 21 CUTE & FREE APRIL 2022 CALENDAR BACKGROUNDS</h2>
          <h6 class="font"><a class="bold black-btn">Kristen Brandt</a>  ·  April 29, 2022   · <b>Productivity</b> </h6>
          <br></br>
          <p>Looking for adorable and aesthetic April desktop background for your laptop? Here are 21 free desktop wallpapers with April calendars to easily find your next favorite. </p>
          <br></br>
          <button class="btn btn-lg btn-primary btn-pink" type="submit">Read More</button>
          </article>
          <br></br>

          <article class="beige textoart center">
          <img class= "bg-img2" src={article}></img> 
          <h2 class="bold">APRIL DESKTOP WALLPAPER – 21 CUTE & FREE APRIL 2022 CALENDAR BACKGROUNDS</h2>
          <h6 class="font"><a class="bold black-btn">Kristen Brandt</a>  ·  April 29, 2022   · <b>Productivity</b> </h6>
          <br></br>
          <p>Looking for adorable and aesthetic April desktop background for your laptop? Here are 21 free desktop wallpapers with April calendars to easily find your next favorite. </p>
          <br></br>
          <button class="btn btn-lg btn-primary btn-pink" type="submit">Read More</button>
          </article>
          <br></br>

          <article class="beige textoart center">
          <img class= "bg-img2" src={article}></img> 
          <h2 class="bold">APRIL DESKTOP WALLPAPER – 21 CUTE & FREE APRIL 2022 CALENDAR BACKGROUNDS</h2>
          <h6 class="font"><a class="bold black-btn">Kristen Brandt</a>  ·  April 29, 2022   · <b>Productivity</b> </h6>
          <br></br>
          <p>Looking for adorable and aesthetic April desktop background for your laptop? Here are 21 free desktop wallpapers with April calendars to easily find your next favorite. </p>
          <br></br>
          <button class="btn btn-lg btn-primary btn-pink" type="submit">Read More</button>
          </article>
          <br></br>

          <article class="beige textoart center">
          <img class= "bg-img2" src={article}></img> 
          <h2 class="bold">APRIL DESKTOP WALLPAPER – 21 CUTE & FREE APRIL 2022 CALENDAR BACKGROUNDS</h2>
          <h6 class="font"><a class="bold black-btn">Kristen Brandt</a>  ·  April 29, 2022   · <b>Productivity</b> </h6>
          <br></br>
          <p>Looking for adorable and aesthetic April desktop background for your laptop? Here are 21 free desktop wallpapers with April calendars to easily find your next favorite. </p>
          <br></br>
          <button class="btn btn-lg btn-primary btn-pink" type="submit">Read More</button>
          </article>
          <br></br>

          <article class="beige textoart center">
          <img class= "bg-img2" src={article}></img> 
          <h2 class="bold">APRIL DESKTOP WALLPAPER – 21 CUTE & FREE APRIL 2022 CALENDAR BACKGROUNDS</h2>
          <h6 class="font"><a class="bold black-btn">Kristen Brandt</a>  ·  April 29, 2022   · <b>Productivity</b> </h6>
          <br></br>
          <p>Looking for adorable and aesthetic April desktop background for your laptop? Here are 21 free desktop wallpapers with April calendars to easily find your next favorite. </p>
          <br></br>
          <button class="btn btn-lg btn-primary btn-pink" type="submit">Read More</button>
          </article>
          <br></br>

          <article class="beige textoart center">
          <img class= "bg-img2" src={article}></img> 
          <h2 class="bold">APRIL DESKTOP WALLPAPER – 21 CUTE & FREE APRIL 2022 CALENDAR BACKGROUNDS</h2>
          <h6 class="font"><a class="bold black-btn">Kristen Brandt</a>  ·  April 29, 2022   · <b>Productivity</b> </h6>
          <br></br>
          <p>Looking for adorable and aesthetic April desktop background for your laptop? Here are 21 free desktop wallpapers with April calendars to easily find your next favorite. </p>
          <br></br>
          <button class="btn btn-lg btn-primary btn-pink" type="submit">Read More</button>
          </article>
          <br></br>

          <article class="beige textoart center">
          <img class= "bg-img2" src={article}></img> 
          <h2 class="bold">APRIL DESKTOP WALLPAPER – 21 CUTE & FREE APRIL 2022 CALENDAR BACKGROUNDS</h2>
          <h6 class="font"><a class="bold black-btn">Kristen Brandt</a>  ·  April 29, 2022   · <b>Productivity</b> </h6>
          <br></br>
          <p>Looking for adorable and aesthetic April desktop background for your laptop? Here are 21 free desktop wallpapers with April calendars to easily find your next favorite. </p>
          <br></br>
          <button class="btn btn-lg btn-primary btn-pink" type="submit">Read More</button>
          </article>
          <br></br>

          <article class="beige textoart center">
          <img class= "bg-img2" src={article}></img> 
          <h2 class="bold">APRIL DESKTOP WALLPAPER – 21 CUTE & FREE APRIL 2022 CALENDAR BACKGROUNDS</h2>
          <h6 class="font"><a class="bold black-btn">Kristen Brandt</a>  ·  April 29, 2022   · <b>Productivity</b> </h6>
          <br></br>
          <p>Looking for adorable and aesthetic April desktop background for your laptop? Here are 21 free desktop wallpapers with April calendars to easily find your next favorite. </p>
          <br></br>
          <button class="btn btn-lg btn-primary btn-pink" type="submit">Read More</button>
          </article>
          <br></br>

          <article class="beige textoart center">
          <img class= "bg-img2" src={article}></img> 
          <h2 class="bold">APRIL DESKTOP WALLPAPER – 21 CUTE & FREE APRIL 2022 CALENDAR BACKGROUNDS</h2>
          <h6 class="font"><a class="bold black-btn">Kristen Brandt</a>  ·  April 29, 2022   · <b>Productivity</b> </h6>
          <br></br>
          <p>Looking for adorable and aesthetic April desktop background for your laptop? Here are 21 free desktop wallpapers with April calendars to easily find your next favorite. </p>
          <br></br>
          <button class="btn btn-lg btn-primary btn-pink" type="submit">Read More</button>
          </article>
          <br></br>

          
      </div>

      <div class="general shadow">
        <p class="textoart">This website (SaturdayGift.com) is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.</p>
      </div>

      <br></br>







      

    <footer class="footer beige">
      <div class="">
        
        <div class="row">
          <div class="col-4">
          <nav class="navbar navbar-expand-lg navbar-light navbar-light-hover-color">
              <a  class="navbar-brand" href="#"></a>
              <div >
              <ul class="navbar-nav mr-auto">
              <li class="nav-item ">
                <a class="nav-link navcols" href="#">About Me</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link navcols" href="#">Work with me</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link navcols" href="#">Privacy Policy</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link navcols" href="#">Disclosure Policy</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link navcols" href="#">Terms And Conditions</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link navcols" href="#">Acessibility Statement</a>
              </li>

              </ul>
              
            </div>
            </nav>
            </div>
            <div class="col-4"></div>
            <div class="col-4 texti">
              <br></br>
          <span class="footerfont text-muted">© COPYRIGHT SATURDAYGIFT 2018 - 2022 </span>

          <br></br>
          </div>
        
        
      </div>
      </div>
    </footer>
    
  </>
  }

}

export default App;
