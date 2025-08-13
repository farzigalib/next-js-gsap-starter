import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/dist/CustomEase';
import { Draggable } from "gsap/dist/Draggable";
import { SplitText } from 'gsap/dist/SplitText';

gsap.registerPlugin(CustomEase, useGSAP, Draggable, SplitText);

const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2;
const RECIPROCAL_GR = 1 / GOLDEN_RATIO;
const DURATION = RECIPROCAL_GR;
const EASE = CustomEase.create('ease', '0.175, 0.885, 0.32, 1');
const mm = gsap.matchMedia();

// Configuring GSAP with custom settings that aren't Tween-specific
gsap.config({
    autoSleep: 60,
    nullTargetWarn: false,
});

// Setting default animation properties that should be inherited by ALL tweens
gsap.defaults({
    duration: DURATION,
    ease: EASE,
});

// Once the desired configurations are set, we simply export what we need to work with in the future.
export {
    CustomEase,
    DURATION,
    EASE,
    GOLDEN_RATIO,
    gsap,
    mm,
    useGSAP,
    Draggable,
    SplitText,
};
