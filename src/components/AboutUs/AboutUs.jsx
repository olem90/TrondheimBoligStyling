import { AboutUsStyle, AboutUsStyleWrapper, AboutUsContainer, AboutUsText } from "./AboutUs.style";
import React, { forwardRef } from 'react';
import marita1 from "../../images/marita1.jpg";

export const AboutUs = forwardRef((props, ref) => {
    
    return (
        <AboutUsStyleWrapper ref={ref}>
            <AboutUsStyle> 
                <h1>Om Oss</h1>
                <AboutUsContainer>
                    <div>
                        <img className="marita1" src={marita1} alt="marita" />  
                    </div>
                    <AboutUsText>
                        <p>
                            Trondheim Bolig Styling spesialiserer seg på å gjøre din bolig klar for salg. 
                            Vi vet hvor viktig det er å presentere hjemmet fra sin beste side når det legges ut på markedet. 
                            Vårt mål er å skape en atmosfære som appellerer til potensielle kjøpere og fremhever boligens unike kvaliteter, 
                            slik at den skiller seg ut i mengden og tiltrekker seg flere interessenter.
                        </p>

                        <p>
                            Med erfaring og et øye for detaljer sørger vi for at hver bolig blir stylet på en måte som gjør den innbydende og attraktiv for kjøpere. 
                            Vi tilbyr alt fra delstyling til fullstyling, avhengig av behovet for hver enkelt bolig. 
                            Vi har god kjennskap til markedet og vet hva som skal til for å fremheve hjemmet ditt på best mulig måte.
                        </p>
                           
                        <p>
                            Når du velger Trondheim Bolig Styling, 
                            kan du være trygg på at boligen din blir presentert med stil og finesse for å gi det beste inntrykket på visning – og bidra til et raskere salg.           
                        </p> 
                    </AboutUsText>
                </AboutUsContainer>
            </AboutUsStyle>
        </AboutUsStyleWrapper>
    )
})