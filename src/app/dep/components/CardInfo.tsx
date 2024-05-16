"use client";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { CircleDollarSign } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect } from "react";

const CardInfo = () => {

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(".card", {
            opacity: 1, x: -300, duration: 1,
        });
        gsap.to(".card", {
            opacity: 1, x: 0, duration: 1, scrollTrigger: {
                trigger: ".items",
                start: "top 600px",
                end: "bottom 200px",
            }
        });
        gsap.from(".card-reverse", { opacity: 1, x: 300, duration: 1 });
        gsap.to(".card-reverse", {
            opacity: 1, x: 0, duration: 1, scrollTrigger: {
                trigger: ".items",
                start: "top 600px",
                end: "bottom 200px",
            }
        });
        gsap.from(".card-y", { opacity: 1, y: 300, duration: 1 });
        gsap.to(".card-y", {
            opacity: 1, y: 0, duration: 1, scrollTrigger: {
                trigger: ".items",
                start: "top 600px",
                end: "bottom 200px",
            }
        });
    }, [])

    return (
        <section className="bg-green-light pt-64 pb-32 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 mx-5 lg:mx-32 items">
                <div className="px-2 my-auto text-white card">
                    <p className="text-sm text-muted-foreground">
                        LIMPEZA DE PELE PERSONALIZADA
                    </p>
                    <p className="text-4xl">
                        O Método LPP é o caminho certo para:
                    </p>
                </div>
                <Card className=" bg-default px-5 py-10 card-y">
                    <p className="mb-4">
                        <CircleDollarSign className="h-10 w-10" />
                    </p>
                    <p className="text-lg">
                        Vender seus serviços, se posicionar na internet como uma referência e atrair novas clientes todos os dias
                    </p>
                </Card>
                <Card className="px-5 py-10 bg-default card-reverse">
                    <p className="mb-4">
                        <CircleDollarSign className="h-10 w-10" />
                    </p>
                    <p className="text-lg">
                        Vender seus serviços, se posicionar na internet como uma referência e atrair novas clientes todos os dias
                    </p>
                </Card>
                <Card className="px-5 py-10 bg-default card">
                    <p className="mb-4">
                        <CircleDollarSign className="h-10 w-10" />
                    </p>
                    <p className="text-lg bg-default ">
                        Vender seus serviços, se posicionar na internet como uma referência e atrair novas clientes todos os dias
                    </p>
                </Card>
                <Card className="px-5 py-10 bg-default card-y">
                    <p className="mb-4">
                        <CircleDollarSign className="h-10 w-10" />
                    </p>
                    <p className="text-lg">
                        Vender seus serviços, se posicionar na internet como uma referência e atrair novas clientes todos os dias
                    </p>
                </Card>
                <Card className="px-5 py-10 bg-default card-reverse">
                    <p className="mb-4">
                        <CircleDollarSign className="h-10 w-10" />
                    </p>
                    <p className="text-lg bg-default ">
                        Vender seus serviços, se posicionar na internet como uma referência e atrair novas clientes todos os dias
                    </p>
                </Card>
            </div>
        </section>
    )
}
export default CardInfo;