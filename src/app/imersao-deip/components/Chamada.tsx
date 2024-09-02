import { Button } from "@/components/ui/button";
import Link from "next/link";

const Chamada = () => {
    return (
        <section className="bg-default pb-14">
            <div className="container w-full md:w-1/3  pt-10">
                <h1 className="text-5xl font-bold text-center">
                    Detox NÃO é Fórmula Pronta 🧪
                </h1>
                <p className="text-center pt-10">
                    Aprenda as técnicas mais avançadas e inovadores do detox corporal  e transforme seus resultados com protocolos integrativos e personalizados
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