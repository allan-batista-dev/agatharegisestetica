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
        <section className="bg-green-light pt-24 md:pt-44 pb-32 ">
            <div className="text-center px-2 my-auto text-white card mb-10">
                <p className="text-sm text-muted-foreground">
                    DETOX ESTÉTICO INTEGRATIVO PERSONALIZADO
                </p>
                <p className="text-4xl font-bold">
                    O Método D.E.I.P é o caminho certo para:
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 mx-5 lg:mx-32 items">
                <Card className=" bg-default px-5 py-10 card-y border-green-bold">
                    <p className="mb-4 flex items-center">
                        <Wand className="h-12 w-12 me-4" /> <span className="font-4xl font-semibold">Aprimorar suas Técnicas</span>
                    </p>
                    <p className="text-lg">
                        Domine novas abordagens de detox estético, utilizando métodos avançados como argila e manta térmica, elevando a qualidade dos seus atendimentos.
                    </p>
                </Card>
                <Card className=" bg-default px-5 py-10 card border-green-bold">
                    <p className="mb-4 flex items-center">
                        <Sparkles className="h-12 w-12 me-4" /> <span className="font-4xl font-semibold">Se Diferenciar no Mercado</span>
                    </p>
                    <p className="text-lg">
                        Ofereça um serviço exclusivo e diferenciado que destaca seu trabalho em um mercado competitivo, atraindo uma clientela mais seletiva e fiel.
                    </p>
                </Card>
                <Card className=" bg-default px-5 py-10 card-reverse border-green-bold">
                    <p className="mb-4 flex items-center">
                        <DollarSign className="h-12 w-12 me-4" /> <span className="font-4xl font-semibold">Aumentar sua Rentabilidade</span>
                    </p>
                    <p className="text-lg">
                        Aprenda a otimizar seu tempo e recursos com técnicas que maximizam os resultados, permitindo que você aumente seu ticket médio e melhore seus ganhos.
                    </p>
                </Card>
                <Card className=" bg-default px-5 py-10 card border-green-bold">
                    <p className="mb-4 flex items-center">
                        <BookOpen className="h-12 w-12 me-4" /> <span className="font-4xl font-semibold">Expansão de Conhecimentos</span>
                    </p>
                    <p className="text-lg">
                        Enriquecer seu repertório profissional com conhecimentos integrativos que combinam o melhor das práticas tradicionais e inovadoras em estética.
                    </p>
                </Card>
                <Card className=" bg-default px-5 py-10 card-y border-green-bold">
                    <p className="mb-4 flex items-center">
                        <UserCheck className="h-12 w-12 me-4" /> <span className="font-4xl font-semibold">Capacitação para Atendimentos Personalizados</span>
                    </p>
                    <p className="text-lg">
                        Adquira habilidades para criar planos de tratamento personalizados, alinhando-se às necessidades específicas de cada cliente e aumentando a satisfação.
                    </p>
                </Card>
                <Card className=" bg-default px-5 py-10 card-reverse border-green-bold">
                    <p className="mb-4 flex items-center">
                        <ShoppingBag className="h-12 w-12 me-4" /> <span className="font-4xl font-semibold">Desenvolvimento de Competências de Venda</span>
                    </p>
                    <p className="text-lg">
                        Além das técnicas estéticas, o curso oferece insights valiosos sobre como vender e captar clientes, permitindo que você construa uma base sólida de clientes para seu negócio.
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