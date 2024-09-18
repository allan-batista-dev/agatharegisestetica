import Image from "next/image"
import dia7 from '../../../../public/img/7-dias.png'
import Link from "next/link";
import { Button } from "@/components/ui/button";

const GarantiaSection = () => {
    return (
        <section className="py-32 bg-color-ar">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className="flex justify-center mb-5 lg:mb-0">
                    <Image
                        src={dia7}
                        alt="garantia"
                        layout="responsive"
                    />
                </div>
                <div className="lg:pe-32 space-y-4 px-10 lg:px-0 text-white">
                    <h6 className="text-5xl">
                        O seu investimento é totalmente seguro
                    </h6>
                    <p className="text-lg">
                        Se você ainda está na dúvida se o Curso D.E.I.P é para você, não se preocupe! Você pode se inscrever no curso e maratonar todas as aulas durante 7 dias, sem compromisso.
                    </p>
                    <p className="text-lg">
                        Se dentro desse período você achar que não é para você ou por qualquer motivo não quiser continuar, é só me enviar uma mensagem pedindo reembolso e eu vou te devolver todo o seu investimento.
                    </p>
                </div>
            </div>
            <div className="text-center mt-16 px-5">
                <Link href={"https://pay.kiwify.com.br/bngE4k4"}>
                    <Button className="w-full md:w-1/3 text-2xl py-8 rounded-full font-bold hover:text-green-900 hover:bg-slate-100  btn-dark-ar">
                        Garanta Sua Vaga Agora
                    </Button>
                </Link>
            </div>
        </section>
    )
}
export default GarantiaSection;