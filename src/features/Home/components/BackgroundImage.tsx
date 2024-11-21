import Image from "next/image";

export function BackgroundImage() {
    return (
        <Image
            priority={true}
            src="/img/background.jpg"
            alt="background"
            className="w-full h-auto transition-all duration-300 max-h-[100vh]"
            width={1000}
            height={1000}
        />
    )
}