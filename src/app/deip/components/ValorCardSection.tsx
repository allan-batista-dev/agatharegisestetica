import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";

const ValorCardSection = () => {
    return (
        <section className=" py-32 bg-default flex justify-center">
            <Card className="mx-5 lg:mx-0 w-full lg:w-1/3 rounded-2xl px-5 py-10 text-center space-y-5 ">
                <h6 className="text-3xl font-bold text-green-dark">
                    Curso D.E.I.P
                </h6>
                <p className="text-muted-foreground">
                    O passo a passo completo para oferecer tratamentos que geram resultados surpreendentes.
                </p>
                <Separator className="my-4" />
                {/* <div className="flex">
                    <ul className="text-start">
                        <li className="flex items-center">
                            <Check className="me-2" />  <p>Aumente seus ganhos oferecendo tratamentos premium</p>
                        </li>
                        <li className="flex items-center">
                            <Check className="me-2" />  <p>Acesse técnicas exclusivas de desintoxicação corporal.</p>
                        </li>
                        <li className="flex items-center">
                            <Check className="me-2" />  <p>Aprenda a usar argilas, mantas térmicas e aparelhos com eficiência.</p>
                        </li>
                        <li className="flex items-center">
                            <Check className="me-2" />  <p>Personalize protocolos para cada cliente.</p>
                        </li>
                        <li className="flex items-center">
                            <Check className="me-2" />  <p>Garanta resultados visíveis e satisfação dos seus clientes.</p>
                        </li>
                    </ul>
                </div> */}
                <p>
                    Hoje voce tera acesso a tupo por ......
                </p>
                <p>
                    De R$794,90 por:
                </p>
                <p >
                    <span className="text-2xl">12x</span>
                    <span className="text-5xl">R$49,82</span>
                </p>
                <p>
                    Ou R$597,90 à vista
                </p>
                <Button className="w-full btn-dark-ar text-lg font-bold">
                    Quero fazer parte disso
                </Button>
                <p>
                    O investimento mensal é menor do que o valor de uma única sessão de detox corporal, garantindo retorno financeiro rápido e seguro. Invista em seu crescimento e transforme sua carreira agora!
                </p>
            </Card>
        </section>
    )
}
export default ValorCardSection;