"use client"

import { useRef } from "react";
import { gsap, SplitText, useGSAP } from '@/lib/gsap'

export default function Heading() {

    const containerRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {
        if (!containerRef.current && !textRef.current) return
        let split = SplitText.create(textRef.current, { type: "words" });

        // now animate the characters in a staggered fashion
        gsap.from(split.words, {
            duration: 1,
            yPercent: 100,
            autoAlpha: 0,
            stagger: 0.05,
        });

    }, { scope: containerRef })

    return (
        <div ref={containerRef} className="w-full h-[250px] flex items-center justify-center">
            <h1 ref={textRef} className="text-black font-semibold text-5xl">
                NEXTJS + GSAP STARTER
            </h1>
        </div>
    );
}
