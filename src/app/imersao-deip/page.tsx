import Aulas from "./components/Aulas";
import Bonus from "./components/Bonus";
import Chamada from "./components/Chamada";
import Conquistas from "./components/Conquistas";
import HeaderImersao from "./components/HeaderImersao";
import ParaQuem from "./components/ParaQuem";
import QuemSou from "./components/QuemSou";

export default function ImercaoDeip() {
    return (
        <div>
            <HeaderImersao />
            <Chamada />
            <ParaQuem />
            <Aulas />
            <Conquistas />
            <Bonus />
            <QuemSou />
        </div>
    )
}