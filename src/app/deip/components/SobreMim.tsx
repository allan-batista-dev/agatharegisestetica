"use client";
import Image from "next/image";
import sobremim from "../../../../public/img/sobremim.png"
import { Separator } from "@radix-ui/react-separator";

const SobreMim = () => {
    return (
        <section className="py-32 bg-green-light">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className="flex justify-center">
                    <Image
                        src={sobremim}
                        alt="Sobre mim"
                        width={500}
                        className="rounded-2xl shadow-lg"
                    />
                </div>
                {/* <div className="space-y-5 pe-32 text-gray-200">
                    <h1 className="text-6xl font-bold">
                        Agatha Regis
                    </h1>
                    <p>
                        <Separator />
                    </p>
                    <p className="font-semibold">
                        Muito prazer, eu sou a Tainara e vou te guiar nessa jornada!
                    </p>
                    <p>
                        Minha vontade de ter meu próprio negócio sempre falou alto desde o início da minha carreira. Depois que abri minha própria sala e foquei em divulgar meus serviços, minha cartela de pacientes aumentou muito, me tornei uma referência nos atendimentos e conquistei a liberdade que a profissão de esteticista proporciona.
                    </p>
                    <p>
                        Hoje eu tenho o propósito de ajudar cada vez mais mulheres a viverem da estética, serem reconhecidas pelos seus serviços personalizados e de alto nível e se sentirem confiantes para atender de forma autônoma e assim não depender da CLT.
                    </p>
                </div> */}
            </div>
        </section>
    )
}
export default SobreMim;