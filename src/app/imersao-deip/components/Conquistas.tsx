import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const Conquistas = () => {
    return (
        <section className="bg-default h-screen">
            <div className="container py-20">
                <h4 className="text-3xl font-bold text-center mb-10">
                    O que você irá conquistar com a imersão D.E.I.P
                </h4>
                <Card className="rounded-2xl py-10">
                    <p className="text-center pb-10 font-semibold text-lg px-10">
                        simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                    <ul className="space-y-8">
                        <li className="flex px-5 items-center">
                            <div className="me-3">
                                <CheckCircle className="w-10 h-10 text-green-600"/>
                            </div>
                            <div>
                                een the industry's standard dummy text ever since the 1500
                            </div>
                        </li>
                        <li className="flex px-5 items-center">
                            <div className="me-3">
                                <CheckCircle className="w-10 h-10 text-green-600"/>
                            </div>
                            <div>
                                een the industry's standard dummy text ever since the 1500
                            </div>
                        </li>
                        <li className="flex px-5 items-center">
                            <div className="me-3">
                                <CheckCircle className="w-10 h-10 text-green-600"/>
                            </div>
                            <div>
                                een the industry's standard dummy text ever since the 1500
                            </div>
                        </li>
                        <li className="flex px-5 items-center">
                            <div className="me-3">
                                <CheckCircle className="w-10 h-10 text-green-600"/>
                            </div>
                            <div>
                                een the industry's standard dummy text ever since the 1500
                            </div>
                        </li>
                    </ul>
                </Card>
            </div>
        </section>
    )
}
export default Conquistas;