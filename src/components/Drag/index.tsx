"use client"

import { useRef } from "react";
import { Draggable, useGSAP } from '@/lib/gsap'

export default function Drag() {

    const containerRef = useRef(null);
    const boxRef = useRef(null);

    useGSAP(() => {
        if (!containerRef.current && !boxRef.current) return

        Draggable.create(boxRef.current, {
            type: 'x,y',
            bounds: containerRef.current,
            throwProps: true,
        })

    }, { scope: containerRef })

    return (
        <div ref={containerRef} className="w-[300px] h-[300px] flex items-center justify-center bg-[#ff008856] rounded-lg">
            <div ref={boxRef} className="w-[100px] h-[100px] bg-[#ff0088] rounded-lg">
            </div>
        </div>
    );
}
