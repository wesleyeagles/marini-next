'use client'
import useSmoothScroll from "@/@hooks/useSmoothScroll";
import Image from "next/image";
import Link from "next/link";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import { useMemo } from "react";

export default function CustomCarousel() {
    const { scrollToSection } = useSmoothScroll();
    const items = useMemo(() => [
        {
            id: 1, content:
                <div className="relative">
                    <div className="absolute inset-0">
                        <Image placeholder="blur" src="/bg-modal-institucional.png" blurDataURL="/bg-modal-institucional-blur.webp" alt='Background Institucional' layout="fill" objectFit="cover" quality={100} />
                    </div>
                    <div className="sm:max-w-7xl mx-auto relative z-20 py-32 sm:py-48 lg:py-56 xl:py-[229px] px-10 sm:px-20 xl:px-10">
                        <h1 className="sm:max-w-[30rem] text-white text-3xl sm:text-5xl lg:text-[56px] font-medium leading-[1.2]">Especialistas em construções de alta qualidade</h1>
                        <p className="sm:max-w-[25rem] text-white mt-5 text-sm lg:text-base">O que construímos vai muito além de concreto, <span className="font-bold">construímos confiança</span> com nossos cliente.</p>
                        <Button onClick={() => scrollToSection('empreendimentos')} className="mt-10 bg-transparent shadow-none hover:bg-white text-white hover:text-black uppercase border border-white px-6 lg:px-10 py-2 lg:py-3 text-xs sm:text-sm" label="Ver Empreendimentos" icon="pi pi-arrow-right" iconPos="right" rounded={false} />
                    </div>
                </div>
        },
        {
            id: 2, content: <div className="relative">
                <div className="absolute inset-0">
                    <Image placeholder="blur" src="/bg-terrace.png" blurDataURL="/bg-terrace-blur.webp" alt='Background Terrace' layout="fill" objectFit="cover" quality={100} />
                </div>
                <div className="sm:max-w-7xl mx-auto relative z-20 py-[146px] sm:py-[220px] lg:py-[258px] px-10 sm:px-20 xl:px-10">
                    <h1 className="sm:max-w-[35rem] text-white text-3xl sm:text-5xl lg:text-[56px] font-medium leading-[1.2]">Lançamento Terrace Residence</h1>
                    <p className="sm:max-w-[25rem] text-white mt-5 text-sm lg:text-base">O que construímos vai muito além de concreto, <span className="font-bold">construímos confiança</span> com nossos cliente.</p>
                    <Link href='/terrace'>
                        <Button onClick={() => scrollToSection('empreendimentos')} className="mt-10 bg-transparent shadow-none hover:bg-white text-white hover:text-black uppercase border border-white px-6 lg:px-10 py-2 lg:py-3 text-xs sm:text-sm" label="Ver Empreendimento" icon="pi pi-arrow-right" iconPos="right" rounded={false} />
                    </Link>
                </div>
            </div>
        },
        {
            id: 3, content: <div className="relative">
                <div className="absolute inset-0">
                    <Image placeholder="blur" src="/bg-altos.png" blurDataURL="/bg-altos-blur.webp" alt='Background Altos do Borgo' layout="fill" objectFit="cover" quality={100} />
                </div>
                <div className="absolute right-[370px] top-[200px] hidden xl:block">
                    <Image src="/bullet-banner.png" alt='Background Altos do Borgo' width={400} height={600} quality={100} />
                </div>
                <div className="absolute right-[370px] top-[350px] hidden xl:block">
                    <Image src="/bullet-banner-2.png" alt='Background Altos do Borgo' width={400} height={600} quality={100} />
                </div>
                <div className="absolute right-[370px] top-[470px] hidden xl:block">
                    <Image src="/bullet-banner-3.png" alt='Background Altos do Borgo' width={400} height={600} quality={100} />
                </div>
                <div className="absolute right-0 bottom-0 hidden lg:block">
                    <Image src="/predio-banner.png" alt='Background Altos do Borgo' width={620} height={600} quality={100} />
                </div>
                <div className="sm:max-w-7xl mx-auto relative z-20 py-[105px] sm:py-[163px] lg:py-[202px] xl:py-[187px] px-10 flex flex-col items-center lg:block">
                    <Image className="hidden sm:block" src='/title-altos.png' alt='Titulo Altos do Borgo Residencial' width={430} height={100} />
                    <Image className="sm:hidden" src='/title-altos.png' alt='Titulo Altos do Borgo Residencial' width={300} height={100} />
                    <p className="mx-auto lg:mx-0 sm:max-w-[430px] text-black mt-5 text-center text-sm lg:text-base">Pensado com excelência do terraço ao hall de entrada para o <span className="font-bold">bem-estar</span> dos moradores e <span className="font-bold">conexão com a cidade</span>.</p>
                    <div className="lg:max-w-[430px] flex justify-center">
                        <Link href='/terrace'>
                            <Button onClick={() => scrollToSection('empreendimentos')} className="mt-10 bg-[#BA381F] shadow-none hover:bg-white text-white hover:text-black uppercase px-6 lg:px-10 py-2 lg:py-3 text-xs sm:text-sm" label="Ver Empreendimento" icon="pi pi-arrow-right" iconPos="right" rounded={false} />
                        </Link>
                    </div>
                </div>
            </div>
        },
    ], []);

    const itemTemplate = (item: { id: number; content: string }) => {
        return item.content
    };

    const pt = {
        previousButton: {
            className: 'absolute top-1/2 left-1 sm:left-4 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white border-none w-6 h-6 sm:w-10 sm:h-10 flex items-center justify-center cursor-pointer hover:bg-opacity-70',
        },
        nextButton: {
            className: 'absolute top-1/2 right-1 sm:right-4 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white border-none w-6 h-6 sm:w-10 sm:h-10 flex items-center justify-center cursor-pointer hover:bg-opacity-70',
        },
        content: {
            className: 'relative w-full',
        },
    };

    return (
        <Carousel itemTemplate={itemTemplate} circular value={items} numVisible={1} numScroll={1} autoplayInterval={3000} pt={pt} />
    )
}