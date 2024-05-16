import { Card } from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const PergunstasFrequentes = () => {
    return (
        <section className="py-32 bg-default">
            <div className="text-center mb-10">
                <h6>
                    Perguntas Frequentes
                </h6>
            </div>
            <div className="flex items-center justify-center">
                <Card className="w-full mx-5 lg:mx-0 lg:w-1/2">
                    <Accordion type="single" collapsible className="w-full p-5">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Ierwerewrwe</AccordionTrigger>
                            <AccordionContent>
                                werwerewrwerwerwerwe
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Is it styled?</AccordionTrigger>
                            <AccordionContent>
         erwerwerwecercc erewrew
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>werwer werwer  s</AccordionTrigger>
                            <AccordionContent>
                               werwerwer erwerwerew  ewrwe ewr 
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </Card>
            </div>
        </section>
    )
}
export default PergunstasFrequentes;