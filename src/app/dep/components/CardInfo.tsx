import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { CircleDollarSign } from "lucide-react";

const CardInfo = () => {
    return (
        <section className="bg-green-light pt-64 pb-32">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 mx-5 lg:mx-32">
                <div className="px-2 my-auto text-white">
                    <p className="text-sm text-muted-foreground">
                        LIMPEZA DE PELE PERSONALIZADA
                    </p>
                    <p className="text-4xl">
                        O Método LPP é o caminho certo para:
                    </p>
                </div>
                <Card className="bg-default px-5 py-10">
                    <p className="mb-4">
                        <CircleDollarSign className="h-10 w-10" />
                    </p>
                    <p className="text-lg">
                        Vender seus serviços, se posicionar na internet como uma referência e atrair novas clientes todos os dias
                    </p>
                </Card>
                <Card className="px-5 py-10 bg-default ">
                    <p className="mb-4">
                        <CircleDollarSign className="h-10 w-10" />
                    </p>
                    <p className="text-lg">
                        Vender seus serviços, se posicionar na internet como uma referência e atrair novas clientes todos os dias
                    </p>
                </Card>
                <Card className="px-5 py-10 bg-default ">
                    <p className="mb-4">
                        <CircleDollarSign className="h-10 w-10" />
                    </p>
                    <p className="text-lg bg-default ">
                        Vender seus serviços, se posicionar na internet como uma referência e atrair novas clientes todos os dias
                    </p>
                </Card>
                <Card className="px-5 py-10 bg-default ">
                    <p className="mb-4">
                        <CircleDollarSign className="h-10 w-10" />
                    </p>
                    <p className="text-lg">
                        Vender seus serviços, se posicionar na internet como uma referência e atrair novas clientes todos os dias
                    </p>
                </Card>
                <Card className="px-5 py-10 bg-default ">
                    <p className="mb-4">
                        <CircleDollarSign className="h-10 w-10" />
                    </p>
                    <p className="text-lg bg-default ">
                        Vender seus serviços, se posicionar na internet como uma referência e atrair novas clientes todos os dias
                    </p>
                </Card>
            </div>
        </section>
    )
}
export default CardInfo;