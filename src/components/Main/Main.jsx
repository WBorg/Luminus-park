import React from 'react';
import mainCss from 'components/Main/main.module.css';
import SlideShow from '../Slider/Slider';






function Main() {
    return ( 
    
            <main>
                
                 <div className={mainCss.banner}> 
                    <SlideShow/>
                 </div> 
            
            </main> 
                
    
    );
}

export default Main;

