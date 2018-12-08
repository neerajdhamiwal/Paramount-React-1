import React from 'react';
import $ from 'jquery';
class FooterHeading extends React.Component{
    constructor(props){
        super(props)
            this.state = {
                footerHeadData : [],
                customData: []
            }
            this.customDivideData = this.customDivideData.bind(this);
    }
    customDivideData(data){
        let headingData = [];
        let subarr = [];
        let dLen = data.length;
        data.forEach((obj, index) => {
            index = index+1;
            if(index%2 === 0 ){
                subarr.push(obj);
                headingData.push(subarr)
                subarr = [];
            }
            else{
                subarr.push(obj);
                if( dLen == index){
                    headingData.push(subarr)
                }
            }
        })
        return headingData;
    }

    componentDidMount(){
        //Foundation.addToJquery($);
        $(document).foundation();
    }

    render(){
        return(
            <section className="four-column-outer pt-50 pb-50 top-100 bottom-100">
                <div className="grid-container">
                    <div className="grid-x">
                        <div className="heading-four-column">
                            <h3>{this.props.subBlockData[0].sub_block_title}</h3>
                        </div>
                        {this.props.subBlockData.length>0?
                            this.customDivideData(this.props.subBlockData).map((subArr, index) => {
                                    return  <div className="medium-12 cell">
                                        <div className="grid-x">
                                            {
                                                subArr.map((heading, i) => {
                                                    return <div className="medium-5 cell">
                                                        <div className="four-column-content four-col-left">
                                                            <a href="#">{heading.sub_block_heading}</a>
                                                            <p>{$(heading.sub_block_description).text()}</p>
                                                        </div>
                                                    </div>
                                                })
                                            }
                                        </div>
                                    </div>
                                }
                            ):''}

                    </div>
                </div>
            </section>
        )
    }
}
export default FooterHeading;

