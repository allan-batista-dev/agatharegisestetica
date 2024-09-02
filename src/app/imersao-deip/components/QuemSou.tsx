import Image from "next/image";
import agatha from "../.,/../../../../public/img/imersao/agathadeip.jpeg"
import Link from "next/link";
import { Button } from "@/components/ui/button";

const QuemSou = () => {
    return (
        <section className="py-20 bg-default">
            <div className="container">
                <h6 className="text-5xl font-bold text-center mb-8 text-green-dark">
                    QUEM SOU EU?
                </h6>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="mb-10">
                        <Image
                            src={agatha}
                            alt="Agatha Regis"
                            layout="responsive"
                            className="rounded-2xl"
                        />
                    </div>
                    <div className="text-justify text-md space-y-4">
                        <p className="text-2xl font-bold text-green-dark">
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
            </div>
            <div className="flex justify-center container">
                <div className="pt-20 w-full md:w-1/3 ">
                    <Link href={"https://chat.whatsapp.com/LHqd2SYYh1rHCeYIugW45T"} target="_blank">
                        <Button className="w-full py-8 bg-green-900 text-3xl  rounded-full font-bold">
                            QUERO PARTICIPAR
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
export default QuemSou;