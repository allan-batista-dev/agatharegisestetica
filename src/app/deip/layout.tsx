import React from "react"

export const metadata = {
    title: 'Curso D.E.I.P | Agatha Regis Estética',
    description: 'Curso para profissionais da estética que desejam aprender sobre a evolução do detox corporal'
}

type Props = {
    children: React.ReactNode,
}
export default function Layout({ children }: Props) {
    return (
        <>
            {children}
        </>
    )
}
