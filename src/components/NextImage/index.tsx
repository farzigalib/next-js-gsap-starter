import Image from 'next/image';

const NextImage = ({
    src,
    className,
    alt,
    blurDataURL = '',
    ...props
}: ImageAtomProps) => {

    return (
        <Image
            alt={alt}
            src={src}
            placeholder="blur"
            blurDataURL={blurDataURL}
            quality={100}
            sizes="100vw"
            width={0}
            height={0}
            className={className}
            loading="lazy"
            {...props}
        />
    );
};

export default NextImage;
