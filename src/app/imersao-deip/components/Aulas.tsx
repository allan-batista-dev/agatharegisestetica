import { Card } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const Aulas = () => {
    return (
        <section className="bg-color-ar px-10">
            <div className="container py-20">
                <h3 className="text-center text-4xl font-bold mb-10 text-white">
                    Conheça aqui as aulas
                </h3>
                <Carousel className="w-full">
                    <CarouselContent>
                        <CarouselItem>
                            <div className="p-1">
                                <Card className="flex items-center mb-5 p-5 rounded-2xl min-h-[600px]">
                                    <div className="space-y-2">
                                        <p className="uppercase font-semibold">
                                            Aula 1 - 15/09 ás 20:30h
                                        </p>
                                        <p className="font-semibold">
                                            O que é o detox e por que ele é essencial para saúde e estética?
                                        </p>
                                        <p>
                                            Nessa aula você vai aprender a importância e a diferença do detox estético e detox metabólico, entendendo como funciona o organismo e a evolução da estética
                                        </p>
                                    </div>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="p-1">
                                <Card className="flex items-center mb-5 p-5 rounded-2xl min-h-[600px]">
                                    <div className="space-y-2">
                                        <p className="uppercase">
                                            Aula 2 - 16/09 ás 20:30
                                        </p>
                                        <p className="font-semibold">
                                            Adaptando o detox para cada paciente, a importância da personalizacão para resultados satisfatórios
                                        </p>
                                        <p>
                                            Nessa aula você vai aprender o conceito revolucionario da estética integrativa e personalizada, a ferramenta que irá alavancar seus atendimentos
                                        </p>
                                    </div>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="p-1">
                                <Card className="flex items-center mb-5 p-5 rounded-2xl min-h-[600px]">
                                    <div className="space-y-2">
                                        <p className="uppercase">
                                            Aula 3 - 17/09 ás 20:30
                                        </p>
                                        <p className="font-semibold">
                                            Como associar recursos e técnicas para criar protocolos individuais com cada paciente
                                        </p>
                                        <p>
                                            Nessa aula você vai aprender a combinar a cosmétologia, eletroterapia e técnicas manuais para potencializar seu protocolo de detox corporal
                                        </p>
                                    </div>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="p-1">
                                <Card className="flex items-center mb-5 p-5 rounded-2xl min-h-[600px]">
                                    <div className="space-y-2">
                                        <p className="uppercase">
                                            Aula 4 - 18/09 ás 20:30
                                        </p>
                                        <p className="font-semibold">
                                            Transformando conhecimento em resultados
                                        </p>
                                        <p>
                                            Nesse aula você vai aprender ferramentas para vender e captar clientes com o D.E.I.P
                                        </p>
                                    </div>
                                </Card>
                            </div>
                        </CarouselItem>
                    </CarouselContent>

                    {/* Navegação - Mover para baixo em telas menores */}
                    <div className="flex flex-col items-center mt-5 space-x-4 md:flex-row md:justify-between">
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </Carousel>
            </div>
        </section>
    );
};

export default Aulas;
