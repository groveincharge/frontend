const Footer = () => {

    return(
    <div>
    <footer className="page-footer font-small mdb-color darken-3 pt-4">
    
        <div className="row d-flex justify-content-center">
    
          <div className="col-md-6">
            <div className="embed-responsive embed-responsive-16by9 mb-4">
              <iframe className="embed-responsive-item" src="http://localhost:5000/videos/intro.mp4"
                allowFullScreen title="topic video"></iframe>
            </div>
          </div>
    
          <div className="col-md-6">
          <h5 className="text-uppercase font-weight-bold">Footer text 1</h5>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sapiente sint, nulla, nihil
              repudiandae commodi voluptatibus corrupti animi sequi aliquid magnam debitis, maxime quam recusandae
              harum esse fugiat. Itaque, culpa?
            </p>
        </div>
    
      </div>
    
      <div className="footer-copyright text-center py-3">© 2023 Copyright:
        <a href="/"> MDBootstrap.com</a>
      </div>
    
    </footer>
    </div>
    )
    }
    
    export default Footer;