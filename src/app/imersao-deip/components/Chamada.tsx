import { Button } from "@/components/ui/button";
import Link from "next/link";

const Chamada = () => {
    return (
        <section className="bg-default pb-14">
            <div className="container pt-10">
                <h1 className="text-5xl font-bold text-center">
                    Imersão D.E.I.P: Transforme Seus Resultados na Estética Corporal com Detox Personalizado Integrativo
                </h1>
                <p className="text-center pt-10">
                    Participe da Imersão Exclusiva e Gratuita de 4 Dias ao Vivo e Aprenda a Transformar Seus Atendimentos com Protocolos Inovadores de Detox Corporal
                </p>
                <div className="pt-20">
                    <Link href={"https://chat.whatsapp.com/LHqd2SYYh1rHCeYIugW45T"} target="_blank">
                        <Button className="w-full py-8 bg-green-900 text-3xl animate-bounce rounded-full font-bold">
                            QUERO PARTICIPAR
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Chamada;