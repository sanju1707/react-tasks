import Carousel from 'react-bootstrap/Carousel';

function Part() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item style={{ height: '500px' }}>
        <img
          className="d-block w-50 h-75 mx-auto "
          src="https://th.bing.com/th/id/R.e5952b544c2051b96e251950ee584fde?rik=7CZxFfcRAtTVKQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fioOdSIJ.jpg&ehk=DIPyztsMtO4zn9916mxD6R17IAlEZ5U0fPZxQMY7grk%3d&risl=&pid=ImgRaw&r=0"
          alt="First slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '500px' }}>
        <img
          className="d-block w-50 mx-auto h-75"
          src="https://th.bing.com/th/id/OIP.rar901XimsHP-EJrowpxSQHaEK?w=1160&h=653&rs=1&pid=ImgDetMain"
          alt="Second slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '500px' }}>
        <img
          className="d-block w-50 mx-auto h-75"
          src="https://th.bing.com/th/id/OIP.z23vjG8aRbVRhncHWcDlsQHaEK?w=670&h=377&rs=1&pid=ImgDetMain"
          alt="Third slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Part;