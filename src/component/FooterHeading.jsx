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
        data.forEach((data, index) => {
            if(index!==0 && index%2 === 0){
                headingData.push(subarr)
                subarr = [];
            }
            else{
                subarr.push(data);
            }
        })
        if(data.length === 1 || data.length === 2){
            headingData.push(subarr)
        }
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
                            {/*{this.state.footerHeadData.map((mainHeading) => {*/}
                                {/*if(mainHeading.main_heading !==''){*/}
                                    {/*return <h3>{mainHeading.main_heading}</h3>*/}
                                {/*}*/}
                            {/*})}*/}
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

