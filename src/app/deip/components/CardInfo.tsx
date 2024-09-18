"use client";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { DollarSign, Sparkles, TrendingUp, Wand, BookOpen, UserCheck, ShoppingBag } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CardInfo = () => {

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
        <section className="bg-color-ar pt-24 md:pt-44 pb-32 ">
            <div className="text-center px-2 my-auto text-white card mb-10">
                <p className="text-sm text-muted-foreground">
                    DETOX ESTÉTICO INTEGRATIVO PERSONALIZADO
                </p>
                <p className="text-4xl font-bold">
                    O Curso D.E.I.P é o caminho certo para:
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 mx-5 lg:mx-32 items">
                <Card className=" bg-default px-5 py-10 card-y border-green-bold">
                    <p className="mb-4 flex items-center">
                        <Wand className="h-12 w-12 me-4" /> <span className="font-4xl font-semibold">Aprimorar suas Técnicas</span>
                    </p>
                    <p className="text-lg">
                        Domine novas abordagens de detox estético e tenha autônomia de criar seus próprios protocolos associando cosmetologia, eletroterapia e técnicas manuais.
                    </p>
                </Card>
                <Card className=" bg-default px-5 py-10 card border-green-bold">
                    <p className="mb-4 flex items-center">
                        <Sparkles className="h-12 w-12 me-4" /> <span className="font-4xl font-semibold">Se Diferenciar no Mercado</span>
                    </p>
                    <p className="text-lg">
                        Ofereça protocolos exclusivos pensados na necessidade e individualidade de cada paciente. A personalização é o caminho para  resultados de sucesso.

                    </p>
                </Card>
                <Card className=" bg-default px-5 py-10 card-reverse border-green-bold">
                    <p className="mb-4 flex items-center">
                        <DollarSign className="h-12 w-12 me-4" /> <span className="font-4xl font-semibold">Aumentar seu Faturamento</span>
                    </p>
                    <p className="text-lg">
                        Aprenda oferecer seus serviços corretamente,  otimizar e valorizar sua hora de atendimento, aumentando assim seu faturamento com o protocolo detox no verão 2024
                    </p>
                </Card>
                <Card className=" bg-default px-5 py-10 card border-green-bold">
                    <p className="mb-4 flex items-center">
                        <BookOpen className="h-12 w-12 me-4" /> <span className="font-4xl font-semibold">Expansão de Conhecimentos</span>
                    </p>
                    <p className="text-lg">
                        Enriquecer seu conhecimento profissional com conteúdos integrativos que visam inovação e transformação completa, tratando o paciente de dentro para fora. 

                    </p>
                </Card>
                <Card className=" bg-default px-5 py-10 card-y border-green-bold">
                    <p className="mb-4 flex items-center">
                        <UserCheck className="h-12 w-12 me-4" /> <span className="font-4xl font-semibold">Capacitação entregar Resultados na hora 

                        </span>
                    </p>
                    <p className="text-lg">
                        Aprenda a usar o que tem de disponível na clínica ao seu favor, não se limite em achar que precisa de muitos recursos para entregar resultado. 
                    </p>
                </Card>
                <Card className=" bg-default px-5 py-10 card-reverse border-green-bold">
                    <p className="mb-4 flex items-center">
                        <ShoppingBag className="h-12 w-12 me-4" /> <span className="font-4xl font-semibold">Desenvolvimento de Competências para Empreender </span>
                    </p>
                    <p className="text-lg">
                        Além das técnicas estéticas, o curso oferece insights valiosos sobre como vender e captar clientes, posicionamento profissional, experiência do cliente e muito mais 
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
export default CardInfo;