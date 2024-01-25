import React, { useState } from "react";
import { GalleryStyle, GalleryStyleWrapper } from "./Gallery.style";
import { Link } from "react-router-dom";
import bolig1 from "../../images/bolig1.jpg";
import { gsap } from 'gsap';

export const Gallery = () => {
    const [showFullGallery, setShowFullGallery] = useState(false);

    const handleGalleryLinkClick = () => {
        setShowFullGallery(true);
    };

    const handleGalleryOnClose = () => {
        setShowFullGallery(false);
    };

    return (
        <GalleryStyleWrapper>
            <GalleryStyle className={`page ${showFullGallery ? 'flipped' : ''}`}>
                
                {!showFullGallery && (
                    <>
                    <div className="front">
                        <h1>Galleri</h1>
                        <img src={bolig1} alt="Gallery Preview"></img>
                        <Link className="galleri-link" onClick={handleGalleryLinkClick}>Se Galleri</Link>
                    </div>   
                    </>
                )}

                {showFullGallery && (
                    <div className="back">
                        <div className="gallery-wrapper"> 
                        <h1>Galleri</h1> 
                        <div className="images-container">
                            <img src={bolig1} />
                            <img src={bolig1} />
                            <img src={bolig1} /> 
                            <img src={bolig1} />    
                            <img src={bolig1} />
                            <img src={bolig1} />
                            <img src={bolig1} />  
                            <img src={bolig1} />
                        </div>
                        <Link onClick={handleGalleryOnClose}>Lukk Galleri</Link>
                    </div> 

                    </div>
                    
                )}
            </GalleryStyle>
        </GalleryStyleWrapper>
    )
} 