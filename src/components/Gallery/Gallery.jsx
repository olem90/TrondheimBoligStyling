import React, { useState, forwardRef } from "react";
import { GalleryStyle, GalleryStyleWrapper } from "./Gallery.style";
import { Link } from "react-router-dom";
import bolig1 from "../../images/bolig1.jpg";
import bolig2 from "../../images/bolig-2.jpg";
import bolig3 from "../../images/bolig-3.jpg";
import bolig4 from "../../images/bolig-4.jpg";
import bolig5 from "../../images/bolig-5.jpg";
import { gsap } from 'gsap';

export const Gallery = forwardRef((props, ref) => {
    const [showFullGallery, setShowFullGallery] = useState(false);

    const handleGalleryLinkClick = () => {
        setShowFullGallery(true);
      };

    const handleGalleryOnClose = () => { 
        setShowFullGallery(false);
    };

    return (
        <GalleryStyleWrapper ref={ref}>
            <GalleryStyle>
                <div className={`gallery-page ${showFullGallery ? 'flipped' : ''}`}>
                    <div className="front">
                        <h1>Galleri</h1>
                        <img src={bolig1} alt="Gallery Preview"></img>
                        <Link className="galleri-link" onClick={handleGalleryLinkClick}>Se Galleri</Link>
                    </div>
                    <div className="back">
                        <div className="images-container">
                            <img src={bolig1} alt="Gallery Preview"></img> 
                            <img src={bolig2} alt="Gallery Preview"></img> 
                            <img src={bolig3} alt="Gallery Preview"></img>
                            <img src={bolig4} alt="Gallery Preview"></img>
                            <img src={bolig5} alt="Gallery Preview"></img> 
                        </div> 
                        <Link onClick={handleGalleryOnClose} className="lukk-galleri">Lukk galleri</Link> 
                    </div>
                </div>
            </GalleryStyle>
        </GalleryStyleWrapper>
    )
})

