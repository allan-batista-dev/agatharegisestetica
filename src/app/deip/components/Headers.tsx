"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import agatha from '../../../../public/img/headeragatha.png';
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

const Headers = () => {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(".titleHeader", {
            opacity: 0, x: -300, duration: 1,
        });
        gsap.to(".titleHeader", {
            opacity: 1, x: 0, duration: 1,
        });
        gsap.from(".imageHeader", {
            opacity: 0, y: 300, duration: 1,
        });
        gsap.to(".imageHeader", {
            opacity: 1, y: 0, duration: 1,
        });
    }, []);

    return (
        <section className="flex flex-col md:flex-row bg-headers items-center justify-between h-screen ">
            <div className="container">
                <div className="space-y-5 text-center md:text-start w-full md:w-1/2 px-5 md:px-10 titleHeader mt-20 md:mt-0 ">
                    <h1 className="text-4xl font-extrabold text-white">
                        Transforme Seus Resultados com o D.E.I.P Detox Estético Integrativo Personalizado
                    </h1>
                    <h2 className="text-lg text-white mb-5">
                        Domine Todas as Estratégias do Detox Estético Corporal e Entregue Resultados Impactantes Tendo Autonomia de Criar seus Próprios Protocolos

                    </h2>
                    <div>
                        <Link href={"https://pay.kiwify.com.br/bngE4k4"}>
                            <Button variant={'ghost'} className="w-full bg-white rounded-full py-7">
                                <span className="text-md font-bold md:text-lg ">
                                    EU QUERO! 
                                </span>
                            </Button>
                        </Link>
                    </div>
                <div className="w-full h-full md:w-1/2 mt-5 md:mt-0 flex bg-headers justify-center md:hidden">
                    <Image
                        src={agatha}
                        alt="Agatha"
                        layout="responsive"
                        className="h-screen object-contain"
                    />
                </div>
                </div>
            </div>
        </section>
    );
}

export default Headers;
