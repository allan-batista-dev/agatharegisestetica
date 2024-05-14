import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";

const ValorCardSection = () => {
    return (
        <section className=" py-32 bg-color-ar flex justify-center">
            <Card className="mx-5 lg:mx-0 w-full lg:w-1/3 rounded-2xl px-5 py-10 text-center space-y-5">
                <h6 className="text-3xl">
                    Logo da DEP
                </h6>
                <p className="text-lg">
                    Subtitulo dasdasds asdasd asdasdasda dasdas sadasdas sadasd
                </p>
                <Separator className="my-4" />
                <div className="flex justify-center">
                    <ul>
                        <li className="flex items-center">
                            <Check className="me-2" />  <p>asdasdas</p>
                        </li>
                        <li className="flex items-center">
                            <Check className="me-2" />  <p>asdasdas</p>
                        </li>
                        <li className="flex items-center">
                            <Check className="me-2" />  <p>asdasdas</p>
                        </li>
                        <li className="flex items-center">
                            <Check className="me-2" />  <p>asdasdas</p>
                        </li>
                        <li className="flex items-center">
                            <Check className="me-2" />  <p>asdasdas</p>
                        </li>
                    </ul>
                </div>
                <p>
                    Hoje voce tera acesso a tupo por ......
                </p>
                <p>
                    De R$324,00 por:
                </p>
                <p >
                    <span className="text-2xl">12x</span>
                    <span className="text-5xl">R$54,92</span>
                </p>
                <p>
                    Ou R$600 à vista
                </p>
                <Button className="w-full">
                    Quero fazer parte disso
                </Button>
                <p>
                    O investimento mensal é menor do que você pode faturar com apenas uma limpeza de pele. Aproveite!
                </p>
            </Card>
        </section>
    )
}
export default ValorCardSection;