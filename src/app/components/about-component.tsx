import { Button } from "./ui/moving-border";
import prodss from "../../../public/prod-ss.png"
import Image from "next/image";

export default function AboutComponent() {
    return (
        <section id="about">
            <div className="container mx-auto text-center text-white py-4 my-8">
                <h2 className="text-4xl sm:text-6xl">About</h2>

                <div className="flex flex-col xl:flex-row xl:items-center gap-8 my-8">
                    <div className="text-2xl sm:text-3xl px-4 space-y-6 text-balance xl:w-1/2">
                        <p>
                            <span className="rainbow-highlight">Colourfully</span> is an app that lets users upload an image and returns the colour palette present in the image.
                        </p>
                        <p>This app is designed to be simple and easy to use. Users upload an image by dragging & dropping, or clicking, and <span className="rainbow-highlight3">Colourfully</span> will work its magic ✨</p>
                        <p>
                            <span className="rainbow-highlight2">Colourfully</span> uses Microsoft's Azure Image Analysis, built on advanced computer vision models. It is a powerful AI service that extracts rich visual information from images.
                        </p>
                        <p>
                            <span className="rainbow-highlight1">Colourfully</span> is built using Next.js, React, TypeScript, Tailwind CSS, Shadcn/ui and Aceternity.
                        </p>
                    </div>
                    <div className="relative mx-auto my-8">
                        <Image 
                            src={prodss} 
                            className="w-full max-h-[600] object-contain rounded-lg shadow-lg" 
                            alt="Product screenshot" 
                        />
                    </div>
                </div>
                
                <div className="flex items-center justify-center space-x-8 mt-8">
                    <a href='/image-upload'>
                        <Button
                            className="rainbow-background1 text-black text-white"
                            borderRadius="1.75rem"
                        >
                            Get Started!
                        </Button>
                    </a>
                    <a href='https://tjmb.dev'>
                        <Button
                            className="rainbow-highlight text-black text-white"
                            borderRadius="1.75rem"
                        >
                            Contact
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    )
}