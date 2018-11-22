
import React from 'react';
import Headercomp from '../component/Header.jsx';
import GridOverLap from '../component/GridOverlap.jsx';
import AccordionTab from '../component/AccordionTab.jsx';
import LeftImgRContent from '../component/LeftImgRContent.jsx';
import RightImgLContent from '../component/RightImgLContent.jsx';
import $ from 'jquery';
//import 'foundation/js/vendor/zepto';
class Home extends React.Component{
    componentDidMount(){
        //Foundation.addToJquery($);
        $(document).foundation();
    }
    render(){
        return(
            <div>
              <Headercomp/>
                <GridOverLap/>
                <div class="top-100 bottom-100 clearfix"></div>
                <AccordionTab/>
                <div class="top-100 bottom-100 clearfix"></div>
                <LeftImgRContent/>
                <div class="top-100 bottom-100 clearfix"></div>
                <RightImgLContent/>
                <footer>
                </footer>
            </div>
        )
    }
}
export default Home;

