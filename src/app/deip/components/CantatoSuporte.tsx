import { Button } from "@/components/ui/button";
import Link from "next/link";

const ContatoSuporte = () => {
    return (
        <section className="py-20  bg-dark-ar text-center">
            <div className="container space-y-10">
                <div>
                    <h6 className="text-lg">
                        Qualquer duvída entre em contato com nosso suporte
                    </h6>
                </div>

                <div>
                    <Link href={"https://wa.me/message/WENXNRJSXDOSL1"}>
                        <Button className="w-full bg-green-600 rounded-full text-lg font-semibold">
                            Suporte WhatsApp
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ContatoSuporte;