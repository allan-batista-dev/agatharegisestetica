"use client";

import Image from "next/image";
import img from '../../../../public/img/player.png'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const VideoSection = () => {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(".title", {
            opacity: 1, x: -300, duration: 1,
        });
        gsap.to(".title", {
            opacity: 1, x: 0, duration: 1, scrollTrigger: {
                trigger: ".items1",
                start: "top 600px",
                end: "bottom 200px",
            }
        });
        gsap.from(".video", { opacity: 1, y: 300, duration: 1 });
        gsap.to(".video", {
            opacity: 1, y: 0, duration: 1, scrollTrigger: {
                trigger: ".items1",
                start: "top 600px",
                end: "bottom 200px",
            }
        });
    }, [])
    
    return (
        <section className="bg-default items1">
            <div className="text-center py-20">
                <h3 className="text-2xl title">
                    Assista o vídeo para entender tudo sobre o curso!
                </h3>
            </div>
            <div className="flex items-center justify-center pb-10 mb-0 px-8 lg:px-0 lg:-mb-32 video">
                <Dialog>
                    <DialogTrigger asChild>
                        <Image
                            src={img}
                            alt="Player"
                            width={800}
                            height={600}
                            className="cursor-pointer rounded-2xl shadow-2xl"
                        />
                    </DialogTrigger>
                    <DialogContent className="w-screen bg-gray-600 border-gray-600">
                        {/* @ts-ignore */}
                        <iframe className="w-full h-[280px] lg:w-full lg:h-[500px] mt-5 " src="https://www.youtube.com/embed/u-6XK1yy3rE" title="As Vagas Realmente Acabaram? (Investigação)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    )
}
export default VideoSection;