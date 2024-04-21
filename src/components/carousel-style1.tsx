import React, { Component, useEffect, useState } from 'react';
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";

  const CarouselStyle1 = (props: any) => {
    console.log(props);
      const plugin = React.useRef(
          Autoplay({ delay: 2000, stopOnInteraction: false })
      )
     
      // useEffect(() => {
       
      // }, []);
      // const plugin = React.useRef(
      //   Autoplay({ delay: 2000, stopOnInteraction: true })
      // )
     
        return (
          <>
           
            
                 
                  <Carousel
                  
                    className={props.className}
                    plugins={[plugin.current]}
                    
                    >
                    <CarouselContent >
                      {props.slides.map((index: any) => (
                        <CarouselItem  key={index} >
                          
                            
                            ---- Testing  -- {index + 1}
                          
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                
                
          </>
        )
     
    }
    
    export default CarouselStyle1