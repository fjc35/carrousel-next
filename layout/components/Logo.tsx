"use client";
import Image from 'next/image'

import { Container } from "@/layout/components/Container";
import logoImage from '@/public/LECARROUSEL_LOGO_TRANSPARENT_SANSBASELINE_BLEU.png';


const Logo = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row items-center md:justify-evenly">
        <div className="flex-none w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
          <Image
              src={logoImage}
              alt="Carrousel de Vern" 
          />
        </div>     
        <div className="flex-auto font-n27regular self-center text-center">
          <h2>Du mardi au vendredi de 9h45 à 13h00 et de 15h00 à 19h00.</h2>
          <h2>Le samedi de 9h45 à 13h00 et de 14h30 à 18h30.</h2>
        </div>   
      </div>
    </Container> 
  );
};

export default Logo;
