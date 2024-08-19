import React, { useState, forwardRef, useEffect, useRef } from "react";
import { GalleryStyle, GalleryStyleWrapper, ClickableImage, ModalBackdrop, ModalContent, CloseButton } from "./Gallery.style";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import bolig1 from "../../images/bolig1.jpg";
import bolig2 from "../../images/bolig-2.jpg";
import bolig3 from "../../images/bolig-3.jpg";
import bolig4 from "../../images/bolig-4.jpg";
import bolig5 from "../../images/bolig-5.jpg";
import bolig6 from "../../images/bolig-6.jpg"; 
import bolig7 from "../../images/bolig-7.jpg";
import bolig8 from "../../images/bolig-8.jpg";
import bolig9 from "../../images/bolig-9.jpg";  
import bolig10 from "../../images/bolig-10.jpg";
import bolig11 from "../../images/bolig-11.jpg";  

export const Gallery = forwardRef((props, ref) => {
    const [showFullGallery, setShowFullGallery] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [imagesPerPage] = useState(9);

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const images = [bolig1, bolig2, bolig3, bolig4, bolig5, bolig6, bolig7, bolig8, bolig9, bolig10, bolig11]; 

    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);
    const modalContentRef = useRef(null); 
    const timeoutIdRef = useRef(null);

    const openModalWithImage = (index) => {
        setSelectedImage(index); 
        setModalOpen(true);
    }; 

    const closeModal = () => {
        setModalOpen(false);
        setSelectedImage(null);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalOpen && modalContentRef.current && !modalContentRef.current.contains(event.target)) { 
              closeModal();  
            }
          };
    
        if (modalOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
    
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [closeModal]);

    useEffect(() => {
        const hideButtons = () => {
            document.querySelectorAll('.prev, .next').forEach(button => {
                button.style.opacity = '0';
            });
        };

        const showButtons = () => {
            document.querySelectorAll('.prev, .next').forEach(button => {
                button.style.opacity = '1';
            });

            clearTimeout(timeoutIdRef.current);
            timeoutIdRef.current = setTimeout(hideButtons, 2500); // 4 seconds to hide
        };

        // Initially hide the buttons after 4 seconds
        timeoutIdRef.current = setTimeout(hideButtons, 2500); 

        // Event listener for mouse movement
        document.addEventListener('mousemove', showButtons);

        // Cleanup event listener and timeout on unmount
        return () => {
            clearTimeout(timeoutIdRef.current);
            document.removeEventListener('mousemove', showButtons);
        };
    }, []);

    const navigateImage = (direction) => {
        setSelectedImage((currentIndex) => {
            const newIndex = currentIndex + direction;
            if (newIndex < 0) {
                return images.length - 1; // loop back to the last image if at the beginning
            } else if (newIndex >= images.length) {
                return 0; // loop to the first image if at the end
            }
            return newIndex;
        });
    };

    const handleGalleryLinkClick = () => {
        setShowFullGallery(true);
      };

    const handleGalleryOnClose = () => { 
        setShowFullGallery(false);
    };

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };
    
    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const totalPages = Math.ceil(images.length / imagesPerPage);

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
    };
    
    const renderPageNumbers = pageNumbers.map(number => {
        if (number === 1 || number === totalPages || (number >= currentPage - 2 && number <= currentPage + 2)) {
          return (
            <button 
                key={number} 
                onClick={() => setCurrentPage(number)} 
                className={currentPage === number ? 'current-page' : ''}
                >
                {number}
            </button>
          );
        } else if (number === currentPage - 3 || number === currentPage + 3) {
          return <span key={number}>...</span>;
        }
        return null;
      });

    return (
        <GalleryStyleWrapper ref={ref}>
            <GalleryStyle>
                <div className={`gallery-page ${showFullGallery ? 'flipped' : ''}`}>
                {!showFullGallery && <h2 className="h2-front">Galleri</h2>} 
                    <div className="front">
                        <img 
                          className={`gallery-front-img ${linkHovered ? 'link-hovered' : ''}`}
                          src={bolig10} 
                          alt="Gallery Preview"  
                          />

                        <a 
                          className="galleri-link" 
                          onClick={handleGalleryLinkClick}
                          onMouseEnter={() => setLinkHovered(true)}
                          onMouseLeave={() => setLinkHovered(false)}
                          >
                             - Se Galleriet -
                        </a>
                    </div>

                    <div className="back">
                        <h2 className="gallery-h2">Galleri</h2> 
                        <div className="images-container">
                            {currentImages.map((image, index) => (
                                <ClickableImage 
                                    key={index} 
                                    onClick={() => openModalWithImage(index + indexOfFirstImage)}> 
                                    <img src={image} alt={`Gallery Preview ${index + 1}`}></img>  
                                </ClickableImage>  
                            ))}
                        </div> 
 
                        {modalOpen && (
                            <ModalBackdrop > 
                                <ModalContent ref={modalContentRef} className="modal-content">
                                    <CloseButton onClick={closeModal}>&times;</CloseButton>
                                    <button className="prev" onClick={() => navigateImage(-1)}> 
                                        <FontAwesomeIcon icon={faChevronLeft} />
                                    </button>
                                    <img className="modal-img" src={images[selectedImage]} alt={`Slide ${selectedImage}`}/> 
                                    <button className="next" onClick={() => navigateImage(1)}>
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </button> 
                                    <div className="thumbnails">
                                    {images.map((thumb, index) => (
                                        <img
                                            className={`thumb-img ${selectedImage === index ? 'active' : ''}`}
                                            key={index} 
                                            src={thumb}
                                            alt={`thumbnail ${index}`}
                                            onClick={() => setSelectedImage(index)}
                                        /> 
                                    ))}
                                    </div>
                                </ModalContent>
                            </ModalBackdrop>
                        )}
                        
                        <div className="pagination-buttons">
                            <Link onClick={handleGalleryOnClose} className="lukk-galleri">Lukk galleri</Link> 
                            <button onClick={prevPage} disabled={currentPage === 1}>
                                Prev
                            </button>
                            {renderPageNumbers}
                            <button onClick={nextPage} disabled={currentPage * imagesPerPage >= images.length}> 
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </GalleryStyle>
        </GalleryStyleWrapper>
    )
}) 

