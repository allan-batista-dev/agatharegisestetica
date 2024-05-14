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
        <section className="bg-gray-200 pt-32">
            <div className="grid grid-cols-1 md:grid-cols-2 mx-10 lg:mx-32 items-center">
                <div className="space-y-5 px-0 lg:px-20 mb-5 lg:mb-0">
                    <h5 className="text-6xl">
                        10 módulos de aulas
                    </h5>
                    <p className="text-lg">
                        O caminho para o reconhecimento na estética através da Limpeza de Pele Personalizada
                    </p>
                    <div>
                        <Button>
                            Texto do botão
                        </Button>
                    </div>
                </div>
                <div>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>asd</AccordionTrigger>
                            <AccordionContent>
                                asdasdsa
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Iasdasdas</AccordionTrigger>
                            <AccordionContent>
                                asdasdasdasdas
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>asdasdasdas</AccordionTrigger>
                            <AccordionContent>
                                asdasdasdasdasd
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>asdasdasdasd</AccordionTrigger>
                            <AccordionContent>
                                asdasdasdas
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>Is it animated?</AccordionTrigger>
                            <AccordionContent>
                                asdasdasdasdasdas
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                            <AccordionTrigger>Is it animated?</AccordionTrigger>
                            <AccordionContent>
                                asdasdasdsadas
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