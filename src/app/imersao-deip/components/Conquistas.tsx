import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const Conquistas = () => {
    return (
        <section className="bg-default">
            <div className="container py-20">
                <h4 className="text-3xl font-bold text-center mb-10">
                    O que você irá conquistar com a imersão D.E.I.P
                </h4>
                <Card className="rounded-2xl py-10">
                    <ul className="space-y-8">
                        <li className="flex px-5 items-center">
                            <div className="me-3">
                                <CheckCircle className="w-10 h-10 text-green-600" />
                            </div>
                            <div>
                                Ferramentas para realizar o detox de forma personalizada 
                            </div>
                        </li>
                        <li className="flex px-5 items-center">
                            <div className="me-3">
                                <CheckCircle className="w-10 h-10 text-green-600" />
                            </div>
                            <div>
                                Clareza, liberdade e autônomia para criar seus próprios protocolos 

                            </div>
                        </li>
                        <li className="flex px-5 items-center">
                            <div className="me-3">
                                <CheckCircle className="w-10 h-10 text-green-600" />
                            </div>
                            <div>
                                Conhecimento necessário para impulsionar seus tratamentos e conquistar um
                                público fiel e satisfeito 
                            </div>
                        </li>
                        <li className="flex px-5 items-center">
                            <div className="me-3">
                                <CheckCircle className="w-10 h-10 text-green-600" />
                            </div>
                            <div>
                                Confiança e extratégias para aplicar e adptar técnicas de detox corporal com sucesso 
                                
                            </div>
                        </li>
                        <li>

                        </li>
                    </ul>
                </Card>
                <div className="pt-20">
                    <Link href={"https://chat.whatsapp.com/LHqd2SYYh1rHCeYIugW45T"} target="_blank">
                        <Button className="w-full py-8 bg-green-900 text-3xl  rounded-full font-bold">
                            QUERO PARTICIPAR
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
export default Conquistas;