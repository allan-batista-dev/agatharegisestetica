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
                                O curso é indicado para esteticistas que desejam expandir seus conhecimentos em detox corporal e oferecer tratamentos diferenciados. Ele também é perfeito para quem quer aumentar a clientela e faturar mais com técnicas avançadas.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Preciso ter experiência prévia?</AccordionTrigger>
                            <AccordionContent>
                                Não é necessário ter ampla experiência, mas é recomendado que você tenha familiaridade com tratamentos estéticos. O curso oferece instruções detalhadas para garantir seu aprendizado.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>O curso oferece certificação?</AccordionTrigger>
                            <AccordionContent>
                                Sim, ao final do curso você receberá um certificado de conclusão, que pode ajudar a aumentar sua credibilidade profissional.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>Qual a duração do curso?</AccordionTrigger>
                            <AccordionContent>
                                O curso tem duração total de X horas, mas você pode seguir no seu próprio ritmo. Além disso, o conteúdo ficará disponível por 1 ano para que você possa revisá-lo sempre que quiser.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>Quais são as formas de pagamento?</AccordionTrigger>
                            <AccordionContent>
                                Oferecemos parcelamento em até 12x sem juros no cartão de crédito ou desconto para pagamento à vista.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                            <AccordionTrigger>O curso é online?</AccordionTrigger>
                            <AccordionContent>
                                Sim, o curso é 100% online, permitindo que você estude de onde quiser e no seu tempo. Basta ter acesso à internet.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-7">
                            <AccordionTrigger>Como é o suporte ao aluno?</AccordionTrigger>
                            <AccordionContent>
                                Você terá suporte completo durante o curso, com atendimento via e-mail e aulas ao vivo para tirar suas dúvidas.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-8">
                            <AccordionTrigger>Qual o material necessário para o curso?</AccordionTrigger>
                            <AccordionContent>
                                Durante o curso, você aprenderá a usar argilas, mantas térmicas e aparelhos específicos. Uma lista completa de materiais será fornecida no início do curso.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </Card>
            </div>
        </section>
    )
}

export default PerguntasFrequentes;
