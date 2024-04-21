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

const Triviablock = () => {
    return (
      <>
        
       <div className="grid justify-between md:grid-cols-2 gap-2 mb-4">
          <div>
            pic
          </div>
          <div>
            info
          </div>
         
       </div>
            
      </>
    )
 
}

export default Triviablock