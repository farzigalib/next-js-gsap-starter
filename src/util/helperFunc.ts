type TransformProperty = 'x' | 'y' | 'z' | 'rotation' | string;

function calcTransform(property: TransformProperty, value: string) {
    const alias: Record<string, string> = {
        y: 'translateY',
        x: 'translateX',
        z: 'translateZ',
        rotation: 'rotate',
    };

    return function (_i: number, target: Element): number {
        const el = target as HTMLElement;
        const originalTransform = el.style.transform;
        el.style.transform = `${alias[property] || property}(${value})`;
        const unit = property.startsWith('rot') ? 'deg' : 'px';
        const computed = parseFloat(
            (gsap.getProperty as any)(el, property, unit, true) as string,
        );
        el.style.transform = originalTransform;
        (gsap.getProperty as any)(el, property, 'px', true);
        return computed;
    };
}

export { calcTransform };