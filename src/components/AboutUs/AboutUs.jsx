import { AboutUsStyle, AboutUsStyleWrapper } from "./AboutUs.style";
import React, { forwardRef } from 'react';

export const AboutUs = forwardRef((props, ref) => {
    
    return (
        <AboutUsStyleWrapper ref={ref}>
            <AboutUsStyle>
                <div>
                    <h1>Om Oss</h1>
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
                </div>
            </AboutUsStyle>
        </AboutUsStyleWrapper>
    )
})