import { Button } from "./ui/moving-border";
import prodss from "../../../public/prod-ss.png"
import Image from "next/image";

const aboutParagraph = [
    "Colourfully is an app that lets users upload an image and returns the colour palette present in the image.",
    "This app is designed to be simple and easy to use. The user uploads an image by dragging & dropping, or clicking and selecting the file. After that, let Colourfully work its magic ✨",
    "Colourfully uses Microsoft's Image Analysis, built on advanced computer vision models. It is a powerful AI service that extracts rich visual information from images.",
]

export default function AboutComponent() {
    return (
        <section id="about">
            <div className="container mx-auto text-center text-white py-4 my-8">
                <h2 className="text-4xl sm:text-6xl">About</h2>

                <div className="flex flex-col xl:flex-row xl:items-center gap-8 my-8">
                    <div className="text-2xl sm:text-3xl px-4 space-y-6 text-balance xl:w-1/2">
                        {aboutParagraph.map((paragraph, index) => (
                            <p key={index} className="mb-4">
                                {paragraph}
                            </p>
                        ))}
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