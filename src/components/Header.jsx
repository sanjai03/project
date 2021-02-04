import Logo from '../image/banner.jpg';
import List from "./List";
function Home(){
    return(
    
        <header className="nav-background">
  <div className="container">
    <nav className="navbar navbar-expand-lg navbar-dark nav-background ">
      <a className="navbar-brand" href="/"><img src={Logo}  height="30px"/></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="pl-2 navbar-nav ">
        <List text="Home" href="/" />
        <List text="Herbal Life" />
        <List text="Store" />
        <List text="Gallary" />
        <List text="Blog" />
        <List text="Contuct Us" href="contact" />
        
      </ul>
      <ul className="pl-2 navbar-nav ml-auto ">
        <List icon="facebook" />
        <List icon="twitter" />
        <List icon="instagram" />
        <List icon="youtube" />
      </ul>
      </div>
     
    </nav>
    
  </div>
</header>

        
    )
}
export default Home;