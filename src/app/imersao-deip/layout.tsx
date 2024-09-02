import React from "react"
import FacebookPixel from "./components/FacebookPixel"


export const metadata = {
    title: 'Imersão D.E.I.P | Agatha Regis Estética',
    description: 'Imersão para profissionais da estética que desejam aprender sobre a evolução do detox corporal e participar da imersão D.E.I.P evento on-line e gratuito que acontecerá nos dia 15, 16, 17 e 18 de setembro às 20:30. Se preparem para a grande transformação que acontecerá em 4 dias de muito conteúdo atualizado com o que há de mais inovador no mercado da estética.'
}

type Props = {
    children: React.ReactNode,
}
export default function Layout({ children }: Props) {
    return (
        <>
            {children}
            <FacebookPixel />
        </>
    )
}
