import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowBigDown, ArrowBigDownIcon, CheckCircle, CircleArrowDown } from "lucide-react";
import Link from "next/link";

const ParaQuem = () => {
    return (
        <section className="bg-color-ar">
            <div className="container w-full md:w-1/2 pb-10 pt-20">
                <h2 className="text-3xl font-bold text-center text-white">Para quem é o Curso D.E.I.P?</h2>
                <div className="grid grid-cols-1  py-10">
                    <Card className="p-5 rounded-3xl flex mb-5 ">
                        <p className="text-lg font-semibold">
                            Para profissionais que desejam aprender técnicas avançadas de Detox Corporal
                        </p>
                    </Card>
                    <Card className="p-5 rounded-3xl mb-5">
                        <p className=" text-lg font-semibold">
                           Para profissionais que buscam se diferenciar no mercado da estética 
                        </p>
                    </Card>
                    <Card className="p-5 rounded-3xl mb-5">
                        <p className=" text-lg font-semibold">
                            Para profissionais que estão iniciando na Estética Corporal e desejam entregar resutados na primeira sessão 

                        </p>
                    </Card>
                    <Card className="p-5 rounded-3xl mb-5">
                        <p className=" text-lg font-semibold">
                            Para profissionais que querem fidelizar seus pacientes e se tornar referência  
                        </p>
                    </Card>
                    <Card className="p-5 rounded-3xl mb-5">
                        <p className=" text-lg font-semibold">
                            Para profissionais que procuram atualização e estar por dentro das maiores novidades da estética 
                        </p>
                    </Card>
                    <Card className="p-5 rounded-3xl mb-5">
                        <p className=" text-lg font-semibold">
                            Para profissionais que desejam dobrar o faturamento no verão 2024
                        </p>
                    </Card>
                </div>
            </div>

        </section>
    )
}
export default ParaQuem;