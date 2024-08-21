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
    }, []);

    return (
        <section className="bg-headers flex flex-col md:flex-row items-center justify-between h-screen">
            <div className="space-y-5 w-full md:w-1/2 px-5 md:px-10 titleHeader mt-32 md:mt-0">
                <h1 className="text-4xl font-extrabold text-white">
                    Transforme Seu Atendimento com o Detox Estético Integrativo Personalizado
                </h1>
                <h2 className="text-lg text-white mb-5">
                    Domine o Método D.E.I.P e Ofereça Resultados Exclusivos para Seus Clientes
                </h2>
                <div>
                    <Link href={"https://pay.kiwify.com.br/bngE4k4"}>
                        <Button variant={'ghost'} className="btn-dark-ar">
                            <span className="text-md font-bold">
                                Quero Me Especializar em Detox Corporal
                            </span>
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="w-full md:w-1/2 mt-5 md:mt-0 flex justify-center md:hidden">
                <Image
                    src={agatha}
                    alt="Agatha"
                    layout="responsive"
                    className="h-screen object-contain"
                />
            </div>
        </section>
    );
}

export default Headers;
