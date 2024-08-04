const Navbar=()=> {
  return (
      <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <img src="src\component\boo.avif" alt="img not found"width={60} height={60} />
        {/* <span class="navbar-toggler-icon"></span>
       */}
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="src\component\Home.jsx">Home</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Review</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="src\component\Books.jsx">Books</a>
          </li>
          
          
            </ul>
          {/* </li> */}
         
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Sign-up" aria-label="Sign-up"/>
          {/* { <button class="btn btn-outline-success" type="submit">Search</button> } */}
        </form>
      </div>
    </div>
  </nav>
  
      </div>
    
  )
  }
  export default Navbar;