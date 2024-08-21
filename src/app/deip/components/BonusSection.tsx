import Image from "next/image";
import img from '../../../../public/img/mockupphone.png'

const BonusSection = () => {
    return (
        <section className="bg-color-ar py-20 lg:py-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className="px-5 lg:ps-32 space-y-5 text-white">
                    <p className="text-muted text-md">
                        BÔNUS ESPECIAIS
                    </p>
                    <p className="text-4xl">
                        Comunidade de alunas + ebook exclusivo
                    </p>
                    <p className="text-lg">
                        Imagine um lugar para você se conectar com outras profissionais da estética, trocar ideias, pedir ajuda quando necessário, fortalecer a sua rede de relacionamentos e tirar todas as suas dúvidas que forem surgindo na prática…
                    </p>
                    <p className="text-lg"> 
                        Esse lugar existe e é a nossa Comunidade exclusiva para alunas do Método LPP.
                    </p>
                    <p className="text-lg">
                        Além disso, o curso conta com um ebook exclusivo para te guiar no dia-a-dia e te ajudar a relembrar tudo o que foi ensinado no curso, como se fosse um resumo mesmo!
                    </p>
                </div>
                <div>
                    <Image
                        src={img}
                        alt="mockup"
                    />
                </div>
            </div>
        </section>
    )
}
export default BonusSection;