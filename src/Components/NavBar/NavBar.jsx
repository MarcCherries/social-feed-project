import "./NavBar.css"


const NavBar = (props) => {
    return ( 
        <div class="banner" >
            <ul class="banner-items" >
            <li class="logo">SOCIALeyes</li>
            <li><img src={require("./images/eyes.png")} width="50" /></li>
            <li class="logo2">Powered by Radon Inc Copyright 2022 </li>
            </ul>
        </div>
     );
}
 
export default NavBar;