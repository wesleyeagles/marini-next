'use client'
import CustomCarousel from "@/@components/Carousel";
import Navbar from "@/@components/Navbar";
import { ChartBarSquareIcon, CheckIcon, HomeIcon, ShieldCheckIcon, StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Button } from "primereact/button";
import { Fragment, useState } from "react";
import { ImLeaf } from "react-icons/im";

export default function Home() {
  const [visible, setVisible] = useState(false)
  return (
    <Fragment>
      <header>
        <Navbar visible={visible} setVisible={setVisible} />
        <CustomCarousel />
      </header>
      <div className="max-w-7xl mx-auto px-10 py-16 flex flex-col lg:flex-row items-center justify-between">
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-medium text-[#252525] mb-10 lg:max-w-[450px]">Transformamos sonhos em projetos de vida</h2>
          <p className="text-sm sm:text-base lg:text-sm xl:text-base font-[300] text-[#606060] my-6 sm:my-4 lg:my-5 lg:max-w-[420px]">Somos uma empresa com foco em projetos residenciais,
            com novas tecnologias, novos sistemas que proporcionam
            mais conforto e segurança para as pessoas. Trabalhamos
            para oferecer mais qualidade de vida e acreditamos que
            todos merecem um lar para morar. Esse é nosso serviço,
            proporcionamos as pessoas a capacidade de transformar
            sonhos em projetos de vida.
          </p>

          <p className="text-sm sm:text-base lg:text-sm xl:text-base font-[300] text-[#606060] my-6 sm:my-4 lg:my-5 lg:max-w-[420px]">Acreditamos que as pessoas e sua interação fazem o seu
            e o nosso negócio. Esse é nosso jeito de fazer, com tecnologia,
            funcionalidade, simplicidade e inovação.
          </p>

          <p className="text-sm sm:text-base lg:text-sm xl:text-base font-[300] text-[#606060] my-6 sm:my-4 lg:my-5 lg:max-w-[420px]">Nossa colaboração consiste em proporcionar habitação e bem estar.</p>

          <Button className="bg-[#3C5F89] hover:bg-[#5686BF] my-6 text-white py-4 px-10 font-medium uppercase text-xs sm:text-sm">Ver empreendimentos</Button>
          <p className="font-[300] text-[#606060] mt-3 text-sm sm:text-base lg:max-w-[460px]">Esse é nosso serviço, proporcionamos as pessoas a capacidade de <span className="font-semibold text-[#3E5481]">transformar sonhos em projetos de vida.</span></p>
        </div>

        <div className="flex gap-4 sm:gap-5 lg:gap-2 xl:gap-5 items-end mt-16 lg:mt-0">
          <div className="flex flex-col items-end">
            <div className="p-2 shadow-[0px_4px_4px_rgba(0,0,0,0.145)] hidden sm:block sm:mb-4 lg:hidden xl:block xl:mb-4">
              <HomeIcon className="w-8 h-8" color="#5686BF" />
            </div>
            <div className="relative w-[160px] h-[320px] sm:w-[234px] xl:w-[254px] sm:h-[400px] xl:h-[449px]">
              <Image placeholder="blur" fill src='/foto-de-pessoas-sorridentes-e-felizes.png' blurDataURL="/foto-de-pessoas-sorridentes-e-felizes-blur.webp" alt='Foto de pessoas sorridentes e felizes' />
            </div>
          </div>

          <div>
            <div className="relative w-[160px] h-[341px] sm:w-[260px] xl:w-[344px] sm:h-[441px] xl:h-[521px]">
              <Image placeholder="blur" fill objectFit="cover" src='/predio-marini-vista-da-frente.png' blurDataURL="/predio-marini-vista-da-frente-blur.webp" alt='Prédio do Terrace Residence vista da frente' />
              <div className="absolute right-2 sm:right-4 -bottom-12 bg-white p-2 sm:p-4 shadow-xl rounded-lg flex flex-col items-center gap-2">
                <div className="p-1 bg-[#5686BF30] w-max rounded-lg">
                  <ChartBarSquareIcon className="w-8 h-8" color="#5686BF" />
                </div>
                <span className="block text-xs sm:text-sm text-[#606060] max-w-[130px] text-center">São + de <span className="font-semibold text-[#3E5481]" >21 anos</span> de experiência</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-rows-2 sm:grid-cols-2 lg:grid-rows-1 lg:grid-cols-3 gap-7">
          <div className="sm:col-auto flex flex-col border border-gray-300 rounded-md p-8 gap-2">
            <div className="border border-blue-300 p-2 rounded-full w-max">
              <CheckIcon className="w-6 h-6" />
            </div>

            <span className="text-lg text-[#252525]">Visão</span>

            <p className="text-sm text-[#606060]">Competência em edificações funcionais e utilitárias.</p>
          </div>
          <div className="sm:order-3 lg:order-2 sm:col-span-2 lg:col-auto flex flex-col border border-gray-300 rounded-md p-8 gap-2">
            <div className="border border-blue-300 p-2 rounded-full w-max">
              <ShieldCheckIcon className="w-6 h-6" />
            </div>

            <span className="text-lg text-[#252525]">Missão</span>

            <p className="text-sm text-[#606060]">Tornar-se referência na edificação de prédios residenciais, na qualidade de serviços, funcionalidade e otimização de espaços, com simplicidade e inovação, utilizando processo sustentável para obter resultados positivos. Nosso compromisso é com a geração de resultado e com o crescimento.</p>
          </div>
          <div className="sm:order-2 lg:order-3 flex flex-col border border-gray-300 rounded-md p-8 gap-2">
            <div className="border border-blue-300 p-2 rounded-full w-max">
              <StarIcon className="w-6 h-6" />
            </div>

            <span className="text-lg text-[#252525]">Valores</span>

            <p className="text-sm text-[#606060]">Somos pessoas servindo pessoas.
              Crescemos e aprendemos juntos.
              Trabalho em equipe.
              Economia sustentável.</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1">
        <div className="relative">
          <div className="absolute sm:col-span-1 order-1 w-full h-[380px] sm:h-[580px]">
            <Image placeholder="blur" src='/visao-da-area-interna-do-apartamento-com-vista-panoramica.png' blurDataURL="/visao-da-area-interna-do-apartamento-com-vista-panoramica-blur.webp" alt='Visão da area interna do apartamento com vista panoramica' fill />
          </div>
          <div className="bg-white absolute bottom-0 right-0 flex flex-col gap-3 sm:px-2 py-3 sm:py-6 items-center">
            <div className="p-2 bg-[#5686BF30] w-max rounded-lg">
              <ImLeaf size={20} color="#5686BF" />
            </div>
            <small className="text-[#606060] max-w-[200px] text-center">Modelo de construção <span className="font-bold text-[#252525]">sustentável</span> e limpo</small>
          </div>
        </div>
        <div className="bg-black h-[380px] sm:h-[580px] text-white flex flex-col justify-center p-8 sm:p-20 2xl:p-40 2xl:px-24">
          <h2 className="font-medium text-3xl sm:text-5xl mb-12">Beleza, tecnologia e sustentabilidade</h2>
          <p className="text-sm sm:text-base text-[#f0f0f0] 2xl:max-w-[500px]">Nossos empreendimentos além de encantar com sua beleza, possuem características modernas com a tecnologia a favor da qualidade de vida, e também se preocupam com a sustentabilidade e o meio ambiente.</p>
          <div className="text-sm sm:text-base mt-10 sm:mt-20">
            <Button onClick={() => setVisible(true)} label="Entrar em contato" icon="pi pi-arrow-right" iconPos="right" />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-12 sm:py-24 px-10">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center">
            <h3 className="font-medium text-[#252525] text-3xl sm:text-4xl">Nossos empreendimentos</h3>
            <p className="text-sm sm:text-base max-w-[520px] mt-6 lg:mt-0">Esse é nosso serviço, proporcionamos as pessoas a capacidade de <span className="text-[#000000] font-bold">transformar sonhos em projetos de vida.</span></p>
        </div>

        <div className="mt-16">
            <div className="hidden lg:grid grid-cols-3 grid-rows-1">
                <Link href="#" className="relative">
                    <div className="absolute w-full h-[560px] transition-all peer hover:scale-105 hover:z-10">
                    <Image placeholder="blur" src='/foto-do-predio-lancamento-da-marini.png' blurDataURL="/foto-do-predio-lancamento-da-marini-blur.webp"  alt='Foto do prédio lançamento da Marini' fill />
                    </div>
                    <div className="absolute bg-[#252525] flex justify-center items-center inset-0 z-10 px-10 py-6 max-w-max mx-auto transition-opacity peer-hover:opacity-0">
                       <span className="text-white uppercase">O último lançamento</span>
                    </div>
                </Link>
                <Link href="#" className="relative">
                    <div className="absolute w-full h-[560px] transition-all peer hover:scale-105 hover:z-10">
                    <Image placeholder="blur" src='/foto-do-predio-em-andamento-da-marini.png' blurDataURL="/foto-do-predio-em-andamento-da-marini-blur.webp" alt='Foto do prédio em andamento da Marini' fill />
                    </div>
                    <div className="absolute bg-[#252525] flex justify-center items-center inset-0 z-10 px-10 py-6 max-w-max mx-auto transition-opacity peer-hover:opacity-0">
                       <span className="text-white uppercase">Em andamento</span>
                    </div>
                </Link>
                <Link href="#" className="relative">
                    <div className="absolute w-full h-[560px] transition-all peer hover:scale-105 hover:z-10">
                    <Image placeholder="blur" src='/foto-de-uma-das-casas-de-obras-entregues.png' blurDataURL="/foto-de-uma-das-casas-de-obras-entregues-blur.webp" alt='Foto de uma das casas de obras entregues' fill />
                    </div>
                    <div className="absolute bg-[#252525] flex justify-center items-center inset-0 z-10 px-10 py-6 max-w-max mx-auto transition-opacity peer-hover:opacity-0">
                       <span className="text-white uppercase">Obras Entregues</span>
                    </div>
                </Link>
            </div>
        </div>
      </div>
    </Fragment>

  );
}
