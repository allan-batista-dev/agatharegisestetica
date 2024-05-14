import Image from "next/image"
import dia7 from '../../../../public/img/7dias.svg'

const GarantiaSection = () => {
    return (
        <section className="py-32 bg-slate-400">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className="flex justify-center mb-5 lg:mb-0">
                    <Image
                        src={dia7}
                        alt="garantia"
                    />
                </div>
                <div className="lg:pe-32 space-y-4 px-10 lg:px-0">
                    <h6 className="text-5xl">
                        O seu investimento é totalmente seguro
                    </h6>
                    <p className="text-lg"> 
                        Se você ainda está na dúvida se o Método LPP é para você, não se preocupe! Você pode se inscrever no curso e maratonar todas as aulas durante 7 dias, sem compromisso.
                    </p>
                    <p className="text-lg">
                        Se dentro desse período você achar que não é para você ou por qualquer motivo não quiser continuar, é só me enviar uma mensagem pedindo reembolso e eu vou te devolver todo o seu investimento.
                    </p>
                </div>
            </div>
        </section>
    )
}
export default GarantiaSection;