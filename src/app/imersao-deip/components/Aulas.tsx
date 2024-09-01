import { Card, CardContent } from "@/components/ui/card";
import { PlayCircle } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

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
                                <Card className="flex mb-5 p-10 rounded-2xl">
                                    <div>
                                        <PlayCircle className="me-3 w-10 h-10" />
                                    </div>
                                    <div>
                                        <p>
                                            Aula 1 - 09/09 ás 20h
                                        </p>
                                        <p className="font-semibold">
                                            Detox Estético Integrativo Personalizado - Instrutor: XYZ
                                        </p>
                                        <p>
                                            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five ce
                                        </p>
                                    </div>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="p-1">
                                <Card className="flex mb-5 p-10 rounded-2xl">
                                    <div>
                                        <PlayCircle className="me-3 w-10 h-10" />
                                    </div>
                                    <div>
                                        <p>
                                            Aula 1 - 09/09 ás 20h
                                        </p>
                                        <p className="font-semibold">
                                            Detox Estético Integrativo Personalizado - Instrutor: XYZ
                                        </p>
                                        <p>
                                            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five ce
                                        </p>
                                    </div>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="p-1">
                                <Card className="flex mb-5 p-10 rounded-2xl">
                                    <div>
                                        <PlayCircle className="me-3 w-10 h-10" />
                                    </div>
                                    <div>
                                        <p>
                                            Aula 1 - 09/09 ás 20h
                                        </p>
                                        <p className="font-semibold">
                                            Detox Estético Integrativo Personalizado - Instrutor: XYZ
                                        </p>
                                        <p>
                                            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five ce
                                        </p>
                                    </div>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="p-1">
                                <Card className="flex mb-5 p-10 rounded-2xl">
                                    <div>
                                        <PlayCircle className="me-3 w-10 h-10" />
                                    </div>
                                    <div>
                                        <p>
                                            Aula 1 - 09/09 ás 20h
                                        </p>
                                        <p className="font-semibold">
                                            Detox Estético Integrativo Personalizado - Instrutor: XYZ
                                        </p>
                                        <p>
                                            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five ce
                                        </p>
                                    </div>
                                </Card>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                {/* <div className="grid grid-cols-1">
                    <Card className="flex mb-5 p-10 rounded-2xl">
                        <div>
                            <PlayCircle className="me-3 w-10 h-10" />
                        </div>
                        <div>
                            <p>
                                Aula 1 - 09/09 ás 20h
                            </p>
                            <p className="font-semibold">
                                Detox Estético Integrativo Personalizado - Instrutor: XYZ
                            </p>
                            <p>
                                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five ce
                            </p>
                        </div>
                    </Card>
                    <Card className="flex mb-5 p-10 rounded-2xl">
                        <div>
                            <PlayCircle className="me-3 w-10 h-10" />
                        </div>
                        <div>
                            <p>
                                Aula 1 - 09/09 ás 20h
                            </p>
                            <p className="font-semibold">
                                Detox Estético Integrativo Personalizado - Instrutor: XYZ
                            </p>
                            <p>
                                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five ce
                            </p>
                        </div>
                    </Card>
                    <Card className="flex mb-5 p-10 rounded-2xl">
                        <div>
                            <PlayCircle className="me-3 w-10 h-10" />
                        </div>
                        <div>
                            <p>
                                Aula 1 - 09/09 ás 20h
                            </p>
                            <p className="font-semibold">
                                Detox Estético Integrativo Personalizado - Instrutor: XYZ
                            </p>
                            <p>
                                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five ce
                            </p>
                        </div>
                    </Card>
                    <Card className="flex mb-5 p-10 rounded-2xl">
                        <div>
                            <PlayCircle className="me-3 w-10 h-10" />
                        </div>
                        <div>
                            <p>
                                Aula 1 - 09/09 ás 20h
                            </p>
                            <p className="font-semibold">
                                Detox Estético Integrativo Personalizado - Instrutor: XYZ
                            </p>
                            <p>
                                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five ce
                            </p>
                        </div>
                    </Card>
                </div> */}
            </div>
        </section>
    )
}

export default Aulas;