import { PriserWrapper, PriserContainer } from "./Priser.style";
import { useState } from "react";
import { forwardRef } from "react";
import { Veiledning } from "./Veiledning";
import { Ministyling } from "./MiniStyling";
import { Delstyling } from "./DelStyling";
import { Helstyling } from "./HelStyling";

export const Priser = forwardRef((props, ref) => {

  const [activeSection, setActiveSection] = useState('veiledning');

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

    return (
        <PriserWrapper ref={ref}>
          <h2>Priser</h2>
            <PriserContainer>
                
                <div className="buttons-container">
                  <div>
                    <button className={activeSection === 'veiledning' ? 'active': ''} 
                            onClick={() => handleButtonClick('veiledning')}>Interiørveiledning
                    </button>
                    <button className={activeSection === 'ministyling' ? 'active' : ''} 
                            onClick={() => handleButtonClick('ministyling')}>Ministyling</button>    
                    <button className={activeSection === 'delstyling' ? 'active' : ''} onClick={() => handleButtonClick('delstyling')}>Delstyling</button>
                    <button className={activeSection === 'helstyling' ? 'active' : ''} onClick={() => handleButtonClick('helstyling')}>Helstyling</button>
                  </div>   
                </div>
                {activeSection && (
          <div className="frame">
            {activeSection === 'veiledning' && <Veiledning />}
            {activeSection === 'ministyling' && <Ministyling />} 
            {activeSection === 'delstyling' && <Delstyling />}
            {activeSection === 'helstyling' && <Helstyling />}
          </div>
        )}       
            </PriserContainer>
        </PriserWrapper>
    )
})