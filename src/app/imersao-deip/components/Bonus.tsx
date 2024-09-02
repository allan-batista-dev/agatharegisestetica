import Image from 'next/image'
import git from '../../../../public/img/imersao/gifdeip.gif'
const Bonus = () => {
    return (
        <section className=" py-20">
            <div className="container w-full md:w-1/3">
                <div>
                    <Image
                        src={git}
                        alt="Git"
                        width={800}
                        height={450}
                        layout="intrinsic"
                    />
                </div>
            </div>
        </section>
    )
}
export default Bonus;