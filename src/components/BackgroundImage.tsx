import Image from "next/image";

export function BackgroundImage() {
    return (
        <Image
            src="/img/background.jpg"
            alt="background"
            className="w-full h-auto transition-all duration-300 max-h-[100vh]"
            loading="lazy"
            width={1000}
            height={1000}
        />
    )
}