"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card"
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect } from "react";

const CarouselSection = () => {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(".card", {
            opacity: 0, x: -300, duration: 1,
        });
        gsap.to(".card", {
            opacity: 1, x: 0, duration: 1, scrollTrigger: {
                trigger: ".items",
                start: "top 600px",
                end: "bottom 200px",
            }
        });
        gsap.from(".card-reverse", { opacity: 0, x: 300, duration: 1 });
        gsap.to(".card-reverse", {
            opacity: 1, x: 0, duration: 1, scrollTrigger: {
                trigger: ".items",
                start: "top 600px",
                end: "bottom 200px",
            }
        });
        gsap.from(".card-y", { opacity: 0, y: 300, duration: 1 });
        gsap.to(".card-y", {
            opacity: 1, y: 0, duration: 1, scrollTrigger: {
                trigger: ".items",
                start: "top 600px",
                end: "bottom 200px",
            }
        });
    }, [])
    return (
        <section className="bg-color-ar py-24">
            <div className="text-center mb-12">
                <p className="text-4xl font-bold text-white">
                    Para quem é o MÉTODO D.E.I.P?
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 mx-5 lg:mx-32 items">
                <Card className=" bg-default px-5 py-10 card-y border-green-bold">
                    <p className="mb-4 flex items-center">
                        <CheckCircle className="h-12 w-12 me-4" /> <span className="font-4xl font-semibold">Para a Esteticista Visionária</span>
                    </p>
                    <p className="text-lg">
                        Você é uma profissional que busca inovar? Se você deseja estar na vanguarda das tendências estéticas e oferecer tratamentos que se destacam, o método D.E.I.P é a escolha certa para você.
                    </p>
                </Card>
                <Card className=" bg-default px-5 py-10 card border-green-bold">
                    <p className="mb-4 flex items-center">
                        <CheckCircle className="h-12 w-12 me-4" /> <span className="font-4xl font-semibold">Para a Esteticista que Valoriza o Detalhe</span>
                    </p>
                    <p className="text-lg">
                        Você acredita que cada cliente é único? Se você quer criar experiências personalizadas e resultados que impressionam, este método vai elevar o seu padrão de atendimento.
                    </p>
                </Card>
                <Card className=" bg-default px-5 py-10 card-reverse border-green-bold">
                    <p className="mb-4 flex items-center">
                        <CheckCircle className="h-12 w-12 me-4" /> <span className="font-4xl font-semibold">Para a Esteticista que Quer Mais Resultados</span>
                    </p>
                    <p className="text-lg">
                        Você está pronta para transformar os resultados dos seus tratamentos? O D.E.I.P oferece técnicas avançadas que garantem resultados visíveis, fidelizando seus clientes e aumentando sua reputação.
                    </p>
                </Card>
                <Card className=" bg-default px-5 py-10 card border-green-bold">
                    <p className="mb-4 flex items-center">
                        <CheckCircle className="h-12 w-12 me-4" /> <span className="font-4xl font-semibold">Para a Esteticista Empreendedora</span>
                    </p>
                    <p className="text-lg">
                        Você deseja crescer financeiramente? Se você quer maximizar seu retorno financeiro oferecendo um serviço de alto valor agregado, o método D.E.I.P foi feito para você.
                    </p>
                </Card>
                <Card className=" bg-default px-5 py-10 card-y border-green-bold">
                    <p className="mb-4 flex items-center">
                        <CheckCircle className="h-12 w-12 me-4" /> <span className="font-4xl font-semibold">Para a Esteticista que Ama Aprender</span>
                    </p>
                    <p className="text-lg">
                        Você busca constantemente aprimorar seus conhecimentos? Com o D.E.I.P, você vai expandir seu repertório profissional e se destacar no mercado.
                    </p>
                </Card>
                <Card className=" bg-default px-5 py-10 card-reverse border-green-bold">
                    <p className="mb-4 flex items-center">
                        <CheckCircle className="h-12 w-12 me-4" /> <span className="font-4xl font-semibold">Para a Esteticista que Quer Fazer a Diferença</span>
                    </p>
                    <p className="text-lg">
                        Você está determinada a oferecer o melhor para seus clientes? Se o seu objetivo é proporcionar tratamentos que realmente fazem a diferença, o método D.E.I.P é o que falta na sua carreira.
                    </p>
                </Card>
            </div>
            <div className="text-center mt-16 px-5">
                <Link href={"#"}>
                    <Button className="w-full md:w-1/3 text-2xl py-8 rounded-full font-bold hover:text-green-900 hover:bg-slate-100  btn-dark-ar">
                        Garanta Sua Vaga Agora
                    </Button>
                </Link>
            </div>
        </section>
    )
}
export default CarouselSection;