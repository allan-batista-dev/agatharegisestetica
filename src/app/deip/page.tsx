import ParaQuem from "../imersao-deip/components/ParaQuem";
import QuemSou from "../imersao-deip/components/QuemSou";
import BonusSection from "./components/BonusSection";
import ContatoSuporte from "./components/CantatoSuporte";
import CardInfo from "./components/CardInfo";
import CarouselSection from "./components/CarouselSection";
import GarantiaSection from "./components/GarintiaSection";
import Headers from "./components/Headers";
import ModulesSection from "./components/ModulesSection";
import PergunstasFrequentes from "./components/PerguntasFrequentes";
import SobreMim from "./components/SobreMim";
import ValorCardSection from "./components/ValorCardSection";
import VideoSection from "./components/VideoSection";

export default function Dep() {
    return (
        <>
            <Headers />
            <VideoSection />
            <CardInfo />
            <ModulesSection />
            <ParaQuem />
            <ValorCardSection />
            <GarantiaSection />
            <QuemSou />
            <PergunstasFrequentes />
            <ContatoSuporte />
        </>
    )
}