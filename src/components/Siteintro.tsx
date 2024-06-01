import React, { Component, useEffect, useState } from 'react'
import Autoplay from "embla-carousel-autoplay"
import './siteintros.css';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import CarouselStyle1 from "./carousel-style1";

//import * as PusherPushNotifications from "@pusher/push-notifications-web"
import PusherPushNotifications from "./pusher";


const Siteintro = (props: any) => {


//pusher test code

// const beamsClient = new props.pusher.Client({
//   instanceId: '17413677-767d-4eaa-b86b-41716552c235',
// });

// beamsClient.start()
//   .then(() => beamsClient.addDeviceInterest('hello'))
//   .then(() => console.log('Successfully registered and subscribed!'))
//   .catch(console.error);


////////////////////

const SLIDES = Array.from(Array(9).keys());
  const plugin = React.useRef(
      Autoplay({ delay: 2000, stopOnInteraction: false })
  )
 
  useEffect(() => {
    const beamsClient = new (PusherPushNotifications as any).Client({
      instanceId: '17413677-767d-4eaa-b86b-41716552c235',
    });
  
    beamsClient.start()
      .then(() => beamsClient.addDeviceInterest('hello'))
      .then(() => console.log('Successfully registered and subscribed!'))
      .catch(console.error);
   
  }, []);
  // const plugin = React.useRef(
  //   Autoplay({ delay: 2000, stopOnInteraction: true })
  // )
 
    return (
      <>
       
        <div className="grid sm:col-span-1 mid:grid-cols-1 md:grid-cols-2
         min-[1150px]:grid-cols-3  gap-2 mb-4  p-6 rounded-lg"
         style={{backgroundColor: 'rgba(0,0,0,.7)', boxShadow: 'inset 0 0 2.1875rem #000'}}>
          <div className="  sm:col-span-1 md:col-span-2 sm:text-center md:text-center  m-auto min-[1150px]:pl-0 min-[1150px]:col-span-1 reward-header flex items-center ">
            Win vouchers and rewards every day
          </div>
          <div 
          className="hidden   md:block"
          >
          <Card className="shadow-lg  h-full">
            <CardHeader>
              <CardTitle>Earn Daily</CardTitle>
             
            </CardHeader>
            <CardContent className="p-0 pt-0" >
             <CarouselStyle1 slides={SLIDES}/>
            </CardContent>
           
          </Card>

          </div>
          <div className="">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>12-04-2024 Ranking</CardTitle>
             
            </CardHeader>
            <CardContent>
             <div className="flex flex-col">
                <Card className="mb-1">
                  <CardContent className="p-3">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <svg width="1.5rem" height="1.5rem" viewBox="0 0 120 120" id="Layer_1" version="1.1"  xmlns="http://www.w3.org/2000/svg" >
                            <g>
                              <path style={{fill:'#FFC54D'}} d="M101,34l-0.2-1.7h-10c0.5-3.4,0.8-6.9,1-10.5c0.1-1.9-1.4-3.5-3.1-3.5H31.4c-1.8,0-3.2,1.6-3.1,3.5   c0.1,3.6,0.5,7.1,1,10.5h-10L19,34c-0.1,0.4-1.2,10.6,5.4,19.8c4.3,6,11,10.1,19.7,12.2c2.8,2.8,5.9,4.9,9.2,6.2   c-0.4,4.1-0.9,8.1-1.4,11.8h16.3c-0.6-3.8-1.1-7.7-1.5-11.8c3.3-1.2,6.4-3.3,9.2-6.2c8.7-2.1,15.4-6.2,19.7-12.2   C102.2,44.6,101,34.4,101,34z M27.3,51.3c-4.2-5.8-4.7-12.1-4.7-15.1h7.3c1.9,9.5,5.3,17.9,9.6,24.2C34.3,58.4,30.2,55.3,27.3,51.3   z M92.7,51.3c-2.9,4-7,7.1-12.2,9.1c4.4-6.4,7.7-14.7,9.6-24.2h7.3C97.4,39.2,96.8,45.5,92.7,51.3z"/>
                              <path style={{fill:'#C19D72'}} d="M77,98.1H43c-1,0-1.8-0.8-1.8-1.8V83.5c0-1,0.8-1.8,1.8-1.8h34c1,0,1.8,0.8,1.8,1.8v12.8   C78.8,97.3,78,98.1,77,98.1z"/>
                              <path style={{fill:'#A88763'}} d="M37.9,101.9h44.2c1,0,1.8-0.8,1.8-1.8v-3.8c0-1-0.8-1.8-1.8-1.8H37.9c-1,0-1.8,0.8-1.8,1.8v3.8   C36.1,101,36.9,101.9,37.9,101.9z"/>
                              <path style={{fill:'#FFC54D'}} d="M68,91H52c-0.7,0-1.2-0.5-1.2-1.2v-2.5c0-0.7,0.5-1.2,1.2-1.2h16c0.7,0,1.2,0.5,1.2,1.2v2.5   C69.2,90.5,68.6,91,68,91z"/>
                            </g>
                            </svg>
                            <Avatar className="h-6 w-6">
                              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                              <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="ml-1">imtiaz</div>
                        </div>
                        <div>
                          1222
                        </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="mb-1">
                  <CardContent className="p-3">
                  <div className="flex justify-between items-center">
                      <div className="flex items-center">
                          <div className="w-6 h-6 text-center">
                            2
                          </div>
                          <Avatar className="h-6 w-6">
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                          <div className="ml-1">Ankan</div>
                      </div>
                      <div>
                        1222
                      </div>
                  </div>
                  </CardContent>
                </Card>
                <Card className="mb-1">
                  <CardContent className="p-3">
                  <div className="flex justify-between items-center">
                      <div className="flex items-center">
                          <div className="w-6 h-6 text-center">
                            3
                          </div>
                          <Avatar className="h-6 w-6">
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                          <div className="ml-1">sumon</div>
                      </div>
                      <div>
                        1222
                      </div>
                  </div>
                  </CardContent>
                </Card>
                <Card className="mb-1">
                  <CardContent className="p-3">
                  <div className="flex justify-between items-center">
                      <div className="flex items-center">
                          <div className="w-6 h-6 text-center">
                            4
                          </div>
                          <Avatar className="h-6 w-6">
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                          <div className="ml-1">santanu</div>
                      </div>
                      <div>
                        1222
                      </div>
                  </div>
                  </CardContent>
                </Card>
              </div>
              
            </CardContent>
           
          </Card>
          </div>
         
        </div>
      <CarouselStyle1 className="md:hidden sm:block h-full" slides={SLIDES}/>
            
      </>
    )
 
}

export default Siteintro