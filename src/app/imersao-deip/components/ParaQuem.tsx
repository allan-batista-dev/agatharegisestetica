import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowBigDown, ArrowBigDownIcon, CheckCircle, CircleArrowDown } from "lucide-react";
import Link from "next/link";

const ParaQuem = () => {
    return (
        <section className="bg-default">
            <div className="container pb-10">
                <h2 className="text-3xl font-bold text-center">Para quem é a Imersão D.E.I.P?</h2>
                <div className="grid grid-cols-1 py-10">
                    <Card className="p-5 rounded-3xl flex mb-5 ">
                        <p className=" text-lg font-semibold">
                            Para profissionais que desejam aprender técnicas avançadas de Detox Corporal
                        </p>
                    </Card>
                    <Card className="p-5 rounded-3xl mb-5">
                        <p className=" text-lg font-semibold">
                            Buscam Diferenciação no Mercado
                        </p>
                    </Card>
                    <Card className="p-5 rounded-3xl mb-5">
                        <p className=" text-lg font-semibold">
                            Estão Iniciando na Estética Corporal
                        </p>
                    </Card>
                    <Card className="p-5 rounded-3xl mb-5">
                        <p className=" text-lg font-semibold">
                            Querem Aumentar a Fidelização de Clientes
                        </p>
                    </Card>
                    <Card className="p-5 rounded-3xl mb-5">
                        <p className=" text-lg font-semibold">
                            Procuram Atualização Profissional
                        </p>
                    </Card>
                    <Card className="p-5 rounded-3xl mb-5">
                        <p className=" text-lg font-semibold">
                            Pretendem Expandir Seu Portfólio de Serviços
                        </p>
                    </Card>
                    <div className="pt-20">
                        <Link href={"https://chat.whatsapp.com/LHqd2SYYh1rHCeYIugW45T"} target="_blank">
                            <Button className="w-full py-8 bg-green-900 text-3xl animate-bounce rounded-full font-bold">
                                QUERO PARTICIPAR
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default ParaQuem;