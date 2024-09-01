import Image from "next/image";
import agatha from "../.,/../../../../public/img/agatha.jpeg"

const QuemSou = () => {
    return (
        <section className="py-20 bg-default">
            <div className="container">
                <h6 className="text-5xl font-bold text-center mb-8 text-green-dark">
                    QUEM SOU EU?
                </h6>
                <div className="mb-10">
                    <Image
                        src={agatha}
                        alt="Agatha Regis"
                        layout="responsive"
                        className="rounded-2xl"
                    />
                </div>
                <p className="text-justify text-md">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                </p>
            </div>
        </section>
    )
}
export default QuemSou;