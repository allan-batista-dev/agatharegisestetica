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
                <div className="text-justify text-md space-y-4 px-10 ">
                    <p className="text-2xl font-bold ">
                        Meu nome é <br /> Agatha Regis
                    </p>

                    <p>
                        Assim como muitas profissionais eu também inicei na estética do zero, ainda na graduacão comecei os meus atendimentos em um quarto na casa da minha avó, em um bairro pequeno e simples
                    </p>

                    <p>
                        Com apenas um kit de produtos, uma manta térmica e minhas mãos, comecei a realizar a técnica de detox corporal, esse protocolo foi a porta de entrada para os meus resultados e através dele consegui atrair e fidelizar cada vez mais clientes
                    </p>

                    <p>
                        No decorrer de 6 anos atuando na estética, sempre busquei me atualizar e me aperfeicoar, já vivenciei inumeros congressos, workshops, cursos e mentorias, alcancei minha tão sonha clinica colhendo os resultados que o detox corporal me proporcionou
                    </p>

                    <p>
                        hoje com minha bagagem ajudo profissinais a alavancarem seus tratamentos e a atuarem na estética de forma integrativa pensando na individualizade do paciente.
                    </p>

                    <p>
                        Sou formada em estética e cosmética pela Unicesumar, Pós graduada em Pré e Pós operatório de cirurgias plásticas, palestrante e idealizadora do curso eletroestética, acumulo mais de 5o certificados de espelizacões
                    </p>

                    <p>
                        Hoje meu próposito é pegar nas mãos de profissinais que desejam mudar sua realidade através da estética e ensinar tudo o que sei e aplico no meu dia a dia clínico, por isso te espero na nossa imersão D.E.I.P
                    </p>
                </div>
            </div>
        </section>
    )
}
export default SobreMim;