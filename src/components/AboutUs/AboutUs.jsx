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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Non nostrum laudantium architecto veritatis aperiam omnis maxime quibusdam? 
                            Quasi cumque sit vero tenetur, modi laborum voluptas nobis temporibus totam sequi nemo.    
 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Non nostrum laudantium architecto veritatis aperiam omnis maxime quibusdam? 
                            Quasi cumque sit vero tenetur, modi laborum voluptas nobis temporibus totam sequi nemo. 

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Non nostrum laudantium architecto veritatis aperiam omnis maxime quibusdam? 
                            Quasi cumque sit vero tenetur, modi laborum voluptas nobis temporibus totam sequi nemo.             
                        </p> 
                    </AboutUsText>
                </AboutUsContainer>
            </AboutUsStyle>
        </AboutUsStyleWrapper>
    )
})