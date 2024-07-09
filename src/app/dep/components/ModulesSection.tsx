import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image";
import imgMockup from '../../../../public/img/mockup.png'

const ModulesSection = () => {
    return (
        <section className="bg-default pt-32">
            <div className="grid grid-cols-1 md:grid-cols-2 mx-10 lg:mx-32 items-center">
                <div className="space-y-5 px-0 lg:px-20 mb-5 lg:mb-0">
                    <h5 className="text-6xl text-green-dark font-semibold">
                        10 módulos de aulas
                    </h5>
                    <p className="text-lg text-green-dark">
                        O caminho para o reconhecimento na estética através da Limpeza de Pele Personalizada
                    </p>
                    <div>
                        <Button variant={'ghost'} className="btn-dark-ar">
                            Texto do botão
                        </Button>
                    </div>
                </div>
                <div>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>INTRODUÇÃO AO CURSO</AccordionTrigger>
                            <AccordionContent>
                                - Aula 1: Boas vindas e apresentação.
                            </AccordionContent>
                            <AccordionContent>
                                - Aula 2: O conceito revolucionário do detox estético personalizado.
                            </AccordionContent>
                            <AccordionContent>
                                - Aula 3: Diagnóstico corporal: Como identificar as necessidades individuais.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-justify font-bold">MÓDULO 1: DESVENDANDO OS SEGREDOS DO CORPO</AccordionTrigger>
                            <AccordionContent> 
                                - Aula 1: Principais sistemas envolvidos no detox corporal.
                            </AccordionContent>
                            <AccordionContent>
                                - Aula 2: Entendendo as toxinas: O primeiro passo para um detox eficaz.
                            </AccordionContent>
                            <AccordionContent>
                                - Aula 3: Detox ou Intox? Como evitar erro na sessão estética.
                            </AccordionContent>
                            <AccordionContent>
                                - Aula 4: Fazemos detox enquanto dormimos.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>MÓDULO 2: CUIDADOS PRÉ E PÓS DETOX</AccordionTrigger>
                            <AccordionContent>
                                - Aula 1: Nutracêuticos: Aliados para a saúde e eficazes para a estética.
                            </AccordionContent>
                            <AccordionContent>
                                - Aula 2: Frequências quânticos.
                            </AccordionContent>
                            <AccordionContent>
                                - Aula 3: Chás detox.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>MÓDULO 3: GUIA COMPLETO DO PROTOCOLO DETOX: ETAPAS E TÉCNICAS</AccordionTrigger>
                            <AccordionContent>
                                AULA 1: CONHECENDO OS ALIADOS: produtos <br />
                                - Ingredientes essenciais para o detox. <br />
                                - Como escolher produtos baseamos em tipos e necessidades de pele. <br />
                                - Passos indispensáveis (higienização, esfoliação e hiperemia).
                            </AccordionContent>
                            <AccordionContent>
                                AULA 2: PREPARAÇÃO DA PELE
                                <br />
                                - Higienização. <br />
                                - Tipos de produtos e marcas no mercado. <br />
                                - Técnica de limpeza profunda. <br />
                                - Aula prática.
                            </AccordionContent>
                            <AccordionContent>
                                AULA 3: PREPARAÇÃO DA PELE
                                <br />
                                - Esfoliação. <br />
                                - Tipos de produtos e marcas no mercado. <br />
                                - Métodos eficazes de esfoliação corporal: física, química, enzimática. <br />
                                - Aula prática.
                            </AccordionContent>
                            <AccordionContent>
                                AULA 4: PREPARAÇÃO DA PELE
                                <br />
                                - Hiperemia. <br />
                                - Tipos de produtos e marcas no mercado. <br />
                                - Função na pele. <br />
                                - Contraindicações.
                            </AccordionContent>
                            <AccordionContent>
                                AULA 5: PREPARAÇÃO DA PELE
                                <br />
                                - Argila. <br />
                                - Tipos de argilas. <br />
                                - Benefícios e tipos no mercado. <br />
                                - Como preparar a argila (magnésio, chá, óleo essencial, fluidos).
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>MÓDULO 4: ELETROTERAPIA</AccordionTrigger>
                            <AccordionContent>
                                Aula 1: ULTRASSOM
                            </AccordionContent>
                            <AccordionContent>
                                Aula 2: ENDERMOLOGIA
                            </AccordionContent>
                            <AccordionContent>
                                Aula 3: MANTA TÉRMICA
                            </AccordionContent>
                            <AccordionContent>
                                Aula 4: MICROCORRENTES
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                            <AccordionTrigger>MÓDULO 5: MASSAGEM MANUAL</AccordionTrigger>
                            <AccordionContent>
                                Aula 1: Drenagem linfática.
                            </AccordionContent>
                            <AccordionContent>
                                Aula 2: Massagem modeladora.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-7">
                            <AccordionTrigger>MÓDULO 6: PROCEDIMENTOS AVANÇADOS PARA RESULTADOS EXTRAORDINÁRIOS</AccordionTrigger>
                            <AccordionContent>
                                Aula 1: Estudo de caso gordura.
                            </AccordionContent>
                            <AccordionContent>
                                Aula 2: Estudo de caso celulite.
                            </AccordionContent>
                            <AccordionContent>
                                Aula 3: Estudo de caso flacidez.
                            </AccordionContent>
                            <AccordionContent>
                                Aula 2: Estudo de caso edema.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-8">
                            <AccordionTrigger>MÓDULO 7: PROTOCOLOS DETOX
                                (Aula prática )</AccordionTrigger>
                            <AccordionContent>
                                Aula 1: Protocolo (drenante). <br />
                                - Higienização. <br />
                                - Esfoliação. (local) <br />
                                - Hiperemia. <br />
                                - Argila. <br />
                                - Drenagem. <br />
                                - Manta.
                            </AccordionContent>
                            <AccordionContent>
                                Aula 2: Protocolo (celulite). <br />
                                - Higienização. <br />
                                - Esfoliação. <br />
                                - Hiperemia local. <br />
                                - Mens. <br />
                                - Magnésio. <br />
                                - Argila. <br />
                                - Manta.
                            </AccordionContent>
                            <AccordionContent>
                                Aula 3: Protocolo (definição corporal). <br />
                                - Higienização. <br />
                                - Esfoliação. <br />
                                - Hiperemiente. <br />
                                - Endermologia. <br />
                                - Argila. <br />
                                - Manta térmica
                            </AccordionContent>
                            <AccordionContent>
                                Aula 4: Protocolo (gordura localizada). <br />
                                - Higienização. <br />
                                - Esfoliação. <br />
                                - Hiperemia. <br />
                                - Argila. <br />
                                - Ultrassom. <br />
                                - Manta térmica.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-9">
                            <AccordionTrigger>MÓDULO 8: BÔNUS</AccordionTrigger>
                            <AccordionContent>
                                Aula 1: Vendas. <br />
                                - 10 estratégias aplicáveis.
                            </AccordionContent>
                            <AccordionContent>
                                Aula 2: Experiência do cliente (5 sentidos). <br />
                                - Olfato. <br />
                                - Paladar. <br />
                                - Visão. <br />
                                - Audição. <br />
                                - Toque.
                            </AccordionContent>
                            <AccordionContent>
                                Aula 3: Planejamento e tecnologia para quem deseja empreender na estética. <br />
                                - Esteticflow. <br />
                                - Agenda. <br />
                                - Lembrares. <br />
                                - Fichas de anamnese. <br />
                                - Gráficos. <br />
                                - Dados do cliente
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <Image
                    src={imgMockup}
                    alt="mockup"
                    width={700}
                />
            </div>
        </section>
    )
}
export default ModulesSection;