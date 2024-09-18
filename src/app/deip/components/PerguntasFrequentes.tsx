import { Card } from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const PerguntasFrequentes = () => {
    return (
        <section className="py-20 bg-color-ar">
            <div className="text-center mb-10">
                <h6 className="text-3xl text-white font-bold">
                    Perguntas Frequentes
                </h6>
            </div>
            <div className="flex items-center justify-center">
                <Card className="w-full mx-5 lg:mx-0 lg:w-1/2">
                    <Accordion type="single" collapsible className="w-full p-5">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Para quem é indicado o curso?</AccordionTrigger>
                            <AccordionContent>
                                O curso é indicado para profissionais  que desejam aprofundar seus conhecimentos na estética corporal e oferecer tratamentos personalizados com a técnica de DETOX. 
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Preciso ter experiência prévia?</AccordionTrigger>
                            <AccordionContent>
                                Não é necessário ter  experiência, mas é recomendado que você seja estudante ou já atue na estética. O curso oferece instruções detalhadas para garantir seu aprendizado.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>O curso oferece certificação?</AccordionTrigger>
                            <AccordionContent>
                                Sim, ao final do curso você receberá um certificado de conclusão, que te capacite e ajude a ter mais credibilidade profissional.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>Quais são as formas de pagamento?</AccordionTrigger>
                            <AccordionContent>
                                Oferecemos parcelamento em até 12x sem juros no cartão de crédito ou desconto para pagamento à vista.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>O curso é online?</AccordionTrigger>
                            <AccordionContent>
                                Sim, o curso é 100% online, permitindo que você estude de onde quiser e no seu tempo. Basta ter acesso à internet.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                            <AccordionTrigger>Como é o suporte ao aluno?</AccordionTrigger>
                            <AccordionContent>
                                Você terá suporte completo durante o curso.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-7">
                            <AccordionTrigger>Qual o material necessário para o curso?</AccordionTrigger>
                            <AccordionContent>
                                Durante o curso, você aprenderá a usar produtos, argilas, mantas térmicas e aparelhos específicos, permitindo que você faça suas próprias escolhas e investimentos
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </Card>
            </div>
        </section>
    )
}

export default PerguntasFrequentes;
