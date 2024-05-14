import BonusSection from "./components/BonusSection";
import CardInfo from "./components/CardInfo";
import CarouselSection from "./components/CarouselSection";
import GarantiaSection from "./components/GarintiaSection";
import Headers from "./components/Headers";
import ModulesSection from "./components/ModulesSection";
import ValorCardSection from "./components/ValorCardSection";
import VideoSection from "./components/VideoSection";

export default function Dep() {
    return (
        <>
            <Headers />
            <VideoSection />
            <CardInfo />
            <CarouselSection />
            <ModulesSection />
            <BonusSection />
            <ValorCardSection />
            <GarantiaSection />
        </>
    )
}