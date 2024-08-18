import { PriserWrapper, PriserContainer } from "./Priser.style";
import { useState } from "react";
import { forwardRef } from "react";
import { Veiledning } from "./Veiledning";
import { Ministyling } from "./MiniStyling";
import { Delstyling } from "./DelStyling";
import { Helstyling } from "./HelStyling";

export const Priser = forwardRef((props, ref) => {

  const [activeSection, setActiveSection] = useState(null);

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

    return (
        <PriserWrapper ref={ref}>
            <PriserContainer>
                <h2>Priser</h2>
                <div className="buttons-container">
                  <button onClick={() => handleButtonClick('veiledning')}>Interiørveiledning / rådgivningstime</button>
                  <button onClick={() => handleButtonClick('ministyling')}>Ministyling</button>
                  <button onClick={() => handleButtonClick('delstyling')}>Delstyling</button>
                  <button onClick={() => handleButtonClick('helstyling')}>Helstyling</button>
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