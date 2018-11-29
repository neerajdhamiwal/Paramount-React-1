
import React from 'react';
import GridImgPlaceholder from '../assets/img/img4.png';

class GridList extends React.Component{
    render(){
        return(
          <div className="grid-container">
            <div className="grid-x align-center block-latest-reads">
              <div className="medium-4 cell img-block">
                <div className="img ">
                  <img src={GridImgPlaceholder} alt="image" />
                </div>
                <div className="img-content">
                  <h6>Blogs</h6>
                  <h2><a href="#">Lorem ipsum dolor </a></h2>
                </div>
              </div>
              <div className="medium-4 cell img-block">
                 <div className="img ">
                  <img src={GridImgPlaceholder} alt="image" />
                </div>
                <div className="img-content">
                  <h6>Blogs</h6>
                  <h2><a href="#">Lorem ipsum dolor</a></h2>
                </div>
              </div>
                <div className="medium-4 cell img-block">
                  <div className="img ">
                    <img src={GridImgPlaceholder} alt="image" />
                  </div>
                  <div className="img-content">
                    <h6>Blogs</h6>
                    <h2><a href="#">Lorem ipsum dolor</a></h2>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}
export default GridList;
