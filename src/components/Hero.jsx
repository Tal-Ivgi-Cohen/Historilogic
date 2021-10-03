import Carousel from 'react-material-ui-carousel';

export const Hero = () => {

  return (
    <div className="carousel-container">
      <div className="main-hero-content">
        <h1> Overview of historical events (30/09)</h1>
      </div>
      <Carousel className="heros-container">
        <img src="//cdn.pixabay.com/photo/2015/12/08/01/03/old-letters-1082299__340.jpg" alt="1082299" />
        <img src="//cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg" alt="6574455" />
        <img src="//cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg" alt="tree" />
      </Carousel>
    </div>

  );
}