import { Button } from "@/components/ui/button";
import Image from "next/image";
import agatha from '../../../../public/img/agatha.png'
const Headers = () => {
    return (
        <section className="h-screen bg-headers">
            <div className="flex items-center h-screen">
                <div className="space-y-5 w-full md:w-1/2 px-5 md:px-10">
                    <h1 className="text-4xl font-extrabold text-white">
                        Conquiste segurança e reconhecimento no atendimento de Limpeza de Pele Personalizada e atraia pacientes todos os dias
                    </h1>
                    <h2 className="text-md text-white">
                        O passo a passo para você ser reconhecida pelo seu serviço e bem remunerada pelo seu trabalho com o Método LPP
                    </h2>
                    <Button variant={'ghost'} className="btn-dark-ar">Texto do botão header</Button>
                </div>
            </div>
        </section>
    )
}
export default Headers;