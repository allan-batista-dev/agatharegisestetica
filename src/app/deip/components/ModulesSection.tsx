import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image";
import img1 from "../../../../public/img/modulos/1.png"
import img2 from "../../../../public/img/modulos/6.png"
import img3 from "../../../../public/img/modulos/11.png"
import img4 from "../../../../public/img/modulos/19.png"
import img5 from "../../../../public/img/modulos/26.png"
import img6 from "../../../../public/img/modulos/31.png"
import img7 from "../../../../public/img/modulos/34.png"
import img8 from "../../../../public/img/modulos/39.png"
import img9 from "../../../../public/img/modulos/45.png"
import Link from "next/link";

const ModulesSection = () => {
    return (
        <section className="bg-default pt-20 pb-32">
            <div className="mb-12">
                <h4 className=" text-3xl text-green-dark font-bold text-center">
                    Conheça Nosso Curso
                </h4>
            </div>
            {/* <div className="space-y-8 md:space-y-0 pb-20 container grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <Image
                        src={img1}
                        alt="mod1"
                        layout="responsive"
                    />
                </div>
                <div>
                    <Image
                        src={img2}
                        alt="mod1"
                        layout="responsive"
                    />
                </div>
                <div>
                    <Image
                        src={img3}
                        alt="mod1"
                        layout="responsive"
                    />
                </div>
                <div>
                    <Image
                        src={img4}
                        alt="mod1"
                        layout="responsive"
                    />
                </div>
                <div>
                    <Image
                        src={img5}
                        alt="mod1"
                        layout="responsive"
                    />
                </div>
                <div>
                    <Image
                        src={img6}
                        alt="mod1"
                        layout="responsive"
                    />
                </div>
                <div>
                    <Image
                        src={img7}
                        alt="mod1"
                        layout="responsive"
                    />
                </div>
                <div>
                    <Image
                        src={img8}
                        alt="mod1"
                        layout="responsive"
                    />
                </div>
                <div>
                    <Image
                        src={img9}
                        alt="mod1"
                        layout="responsive"
                    />
                </div>
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-2 mx-10 lg:mx-32 items-center">
                <div className="space-y-5 px-0 lg:px-20 mb-24 md:mb-5 lg:mb-0">
                    <h5 className="text-4xl text-green-dark font-bold">
                        + de 40 aulas 
                    </h5>
                    <p className="text-lg text-green-dark">
                        O conteúdo completo que irá te capacitar para aplicar protocolos seguros e  eficazes com resultados douradouros 
                    </p>
                    <div className="w-full">
                        <Link href={"https://pay.kiwify.com.br/bngE4k4"}>
                            <Button className="w-full text-lg md:text-2xl py-8 rounded-full font-bold hover:text-green-900 hover:bg-slate-100  btn-dark-ar">
                                Garanta Sua Vaga Agora
                            </Button>
                        </Link>
                    </div>
                </div>
                <div>
                    <Accordion type="single" collapsible className="w-full ">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Introdução ao Curso</AccordionTrigger>
                            <AccordionContent>
                            AULA 1 - Boas Vindas
                            </AccordionContent>
                            <AccordionContent>
                            AULA 2 - Minha Jornada
                            </AccordionContent>
                            <AccordionContent>
                            AULA 3 - O Conceito Revolucionário do Detox Estético Personalizado
                            </AccordionContent>
                            <AccordionContent>
                            AULA 4 - Diagnóstico Corpotal: Como Identificar as Necessidades Individuais
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-justify font-bold">Módulo 1 - Desvendando o Segredo do Corpo</AccordionTrigger>
                            <AccordionContent>
                            AULA 1 - Principais sistemas envolvidos no detox corporal.
                            </AccordionContent>
                            <AccordionContent>
                            AULA 2 - Entendendo as toxinas: O primeiro passo para um detox eficaz.
                            </AccordionContent>
                            <AccordionContent>
                            AULA 3 - Detox ou Intox? Como evitar erro na sessão estética.
                            </AccordionContent>
                            <AccordionContent>
                            AULA 4 - Fazemos detox enquanto dormimos.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Módulo 2 - Cuidados Pré e Pós Detox</AccordionTrigger>
                            <AccordionContent>
                            AULA 1 - Nutracêuticos : Aliados para Saúde e Eficaz para estética
                            </AccordionContent>
                            <AccordionContent>
                            AULA 2 - Frequências Quânticos
                            </AccordionContent>
                            <AccordionContent>
                            AULA 3 - Magnésio:  O  Mineral Essencial para a Saúde e Longevidade
                            </AccordionContent>
                            <AccordionContent>
                            AULA 4 - Chás Detox
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>Módulo 3 - Guia Completo do Protocolo Detox: Etapas e Técnicas</AccordionTrigger>
                            <AccordionContent>
                            AULA 1 - Conhecendo os Aliados: Produtos
                            </AccordionContent>
                            <AccordionContent>
                            AULA 2 - Preparação da Pele: Higienização
                            </AccordionContent>
                            <AccordionContent>
                            AULA 3 - Preparação da Pele: Esfoliação
                            </AccordionContent>
                            <AccordionContent>
                            AULA 4 - Preparação da Pele: Hiperemia
                            </AccordionContent>
                            <AccordionContent>
                            AULA 5 - Preparação da Pele: Produtos Complementares
                            </AccordionContent>
                            <AccordionContent>
                            AULA 6 - Preparação da Pele: Argila
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>Módulo 4 - Eletroterapia</AccordionTrigger>
                            <AccordionContent>
                            AULA 1 - Manta Térmica
                            </AccordionContent>
                            <AccordionContent>
                            AULA 2 - Ultrassom
                            </AccordionContent>
                            <AccordionContent>
                            AULA 3 - Endermologia
                            </AccordionContent>
                            <AccordionContent>
                            AULA 4 - Microcorrentes
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                            <AccordionTrigger>Módulo 5 - Massagem Manual</AccordionTrigger>
                            <AccordionContent>
                                Introdução ao Módulo
                            </AccordionContent>
                            <AccordionContent>
                            AULA 1 - Drenagem Linfática.
                            </AccordionContent>
                            <AccordionContent>
                            AULA 2 - Massagem Modeladora.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-7">
                            <AccordionTrigger>Módulo 6 -  Procedimentos Avançados para Resultados Extraordinários</AccordionTrigger>
                            <AccordionContent>
                            AULA 1 - Protocolo Detox para Retenção de Liquido
                            </AccordionContent>
                            <AccordionContent>
                            AULA 2 - Protocolo Detox para Gordura Localizada
                            </AccordionContent>
                            <AccordionContent>
                            AULA 3 - Protocolo Detox para Definição Corporal
                            </AccordionContent>
                            <AccordionContent>
                                AULA 4: Protocolo Detox para Celulite
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-8">
                            <AccordionTrigger>Módulo 7 - Protocolos Detox:
                            AULA PRÁTICAS </AccordionTrigger>
                            <AccordionContent>
                            AULA 1 - Protocolo Detox para Gordura Localizada
                            </AccordionContent>
                            <AccordionContent>
                            AULA 2 - Protocolo Detox para:
                                Retenção de Liquidos

                            </AccordionContent>
                            <AccordionContent>
                            AULA 3 - Protocolo Detox para Celulite
                            </AccordionContent>
                            <AccordionContent>
                            AULA 4 - Protocolo Detox para Definição Corporal
                            </AccordionContent>
                            <AccordionContent>
                            AULA 5 - Protocolo Detox para Definição Corpotal
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-9">
                            <AccordionTrigger>Módulo 8 - Conteúdo Premium: AULAS BÔNUS</AccordionTrigger>
                            <AccordionContent>
                            AULA 1 - Conhecendo o Público Alvo
                            </AccordionContent>
                            <AccordionContent>
                            AULA 2 - Técnicas de Vendas do D.E.I.P
                            </AccordionContent>
                            <AccordionContent>
                            AULA 3 - Como Captar e Fidelizar Clientes
                            </AccordionContent>
                            <AccordionContent>
                            AULA 4 - Como Proporcionar a Melhor Experiência ao Cliente
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    )
}
export default ModulesSection;