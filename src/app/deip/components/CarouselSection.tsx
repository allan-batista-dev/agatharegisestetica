import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const CarouselSection = () => {
    return (
        <section className="bg-color-ar py-32">
            <div className="text-center">
                <h4 className="text-5xl text-gray-200">
                    O Método mais completo baseado em 3 pilares
                </h4>
            </div>
            <div className="flex justify-center items-center pt-16 mx-20">
                <Carousel
                    opts={{
                        align: "start",
                        loop: true
                    }}
                    className="w-full max-w-2xl"
                    orientation="horizontal"
                >
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className="px-5 lg:px-0 md:basis-1/2 lg:basis-1/3">
                                <div className="p-5">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <span className="text-3xl font-semibold">{index + 1}</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    )
}
export default CarouselSection;