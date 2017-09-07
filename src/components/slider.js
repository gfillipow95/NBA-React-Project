import React from 'react';
import Slider from 'react-slick';

const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const listSlider = ({sliderElements}) => {
    if(sliderElements){
        return(
            <Slider {...settings}>
                {sliderElements.map((item)=>{
                    return(
                        <div key={item.id} className="slider_item" style={{background: `url(/images/covers/${item.cover})`}}>
                            <div className="slider_caption">
                                <h4>{item.topic}</h4>
                                <p>{item.title}</p>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        )
    }
}

const HighlightSlider = (props) => {

    return(
        <div className="sliderContainer">
            {listSlider(props)}
        </div>
    )
}

export default HighlightSlider;