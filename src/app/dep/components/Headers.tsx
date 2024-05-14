import { Button } from "@/components/ui/button";

const Headers = () => {
    return (
        <section className="h-screen bg-headers">
            <div className="flex items-center h-screen">
                <div className="space-y-5 w-full md:w-1/2 px-5 md:px-10">
                    <h1 className="text-4xl">
                        Conquiste segurança e reconhecimento no atendimento de Limpeza de Pele Personalizada e atraia pacientes todos os dias
                    </h1>
                    <h2 className="text-lg">
                        O passo a passo para você ser reconhecida pelo seu serviço e bem remunerada pelo seu trabalho com o Método LPP
                    </h2>
                    <Button variant={'outline'} className="text-white bg-teal-600 hover:bg-teal-700 hover:text-white">TEXTO BOTÃO</Button>
                </div>
            </div>
        </section>
    )
}
export default Headers;