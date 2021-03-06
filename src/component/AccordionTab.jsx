import React from 'react';
import ImgSlider from './ImgSlider.jsx';
import $ from 'jquery';
import ReactHtmlParser from 'react-html-parser';
import ShowMore from './ShowMore.jsx';

class AccordionaTab extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            update: true
        }
    }
    componentDidMount(){
        $("#service-tabs li a").on('click', function(e) {
            e.preventDefault()
            let page = $(this).data('page');
            $(`#pages .page:not('.hide')`).stop().fadeOut('fast', function() {
                $(this).addClass('hide');
                $(`#pages .page[data-page=${page}]`).fadeIn('slow').removeClass('hide');
                $(`.single-item${page.substring(5)}`).slick('refresh');

            });
        });
        $('#service-tabs').on('click', 'li', function() {
            $('#service-tabs li.activeTab').removeClass('activeTab');
            $(this).addClass('activeTab');
        });
    }

    render(){
        return(
            <section className="tab-accordion top-100">
                <div className="grid-container  custom-grid custom-grid-right">
                    <div className="grid-x">
                        <div className="small-12 medium-2 cell  wow fadeInUp">
                            <ul className="accordion" id="service-tabs">
                                {this.props.sliderData.map((service, index) => {
                                        return <li key = {index} className={`${index===0 ?'tabs-title activeTab':'tabs-title'}`} onClick={() => this.setState({update: `showMore${index}`})}><a data-page = {`panel${index}`} id = {index}>{ReactHtmlParser(service.image_slider_title)}</a></li> //eslint-disable-line
                                })}
                            </ul>
                        </div>
                        <div className="small-12 medium-10 cell  wow fadeInUp" id="pages">
                            <div className="tabs-content">
                                {this.props.sliderData.map((service, index) => {
                                        return <div  key ={index} className={index === 0 ? "page" : "page hide"}
                                                    id={'panel' + index} data-page={'panel' + index}>
                                            <div className="grid-x grid-padding-x tab-accordion-content">
                                                <div className="small-12 medium-5 cell p-right-45">
                                                    <div>
                                                        <ShowMore id={`showMore${index}`} longText= {service.image_slider_description} update={this.state.update}>
                                                        </ShowMore>
                                                    {service.image_slider_cta_button_title !==''? <a href={service.image_slider_cta_button_url.substring(9)} className="button mt-15 white-btn">{service.image_slider_cta_button_title.replace(/\&amp;/g,'&')}</a>:'' //eslint-disable-line
                                                         }
                                                </div>
                                                </div>
                                                <div className="small-12 medium-7 cell no-padding wow slideInRight" id={`showMore${index}`}>
                                                    <ImgSlider imgArray = {service.image_slider_image.split(',')} id={index}/>
                                                </div>
                                            </div>
                                        </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default AccordionaTab;
