import React from 'react';
import ImgSlider from './ImgSlider.jsx';
import $ from 'jquery';
import ReactHtmlParser from 'react-html-parser';

class AccordionaTab extends React.Component{
    constructor(props){
        super(props)
    }
    active(e){
        console.log(e)
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
                        <div className="medium-2 cell  wow fadeInUp">
                            <ul className="accordion" id="service-tabs">
                                {this.props.sliderData.map((service, index) => {
                                        return <li className='tabs-title'><a data-page = {`panel${index}`} id = {index}>{ReactHtmlParser(service.image_slider_title)}</a></li>
                                })}
                            </ul>
                        </div>
                        <div className="medium-10 cell  wow fadeInUp" id="pages">
                            <div className="tabs-content">
                                {this.props.sliderData.map((service, index) => {
                                        return <div className={index === 0 ? "page" : "page hide"}
                                                    id={'panel' + index} data-page={'panel' + index}>
                                            <div className="grid-x grid-padding-x tab-accordion-content">
                                                <div className="medium-5 cell">
                                                    <div className="pr-100">
                                                    <p className="ptb-40">{ReactHtmlParser(service.image_slider_description)}</p>
                                                    {service.image_slider_cta_button_title !==''? <button class="button white-btn">{service.image_slider_cta_button_title}</button>:''}
                                                </div>
                                                </div>
                                                <div className="medium-7 cell no-padding wow slideInRight">
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
