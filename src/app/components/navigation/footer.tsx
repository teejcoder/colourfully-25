import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-4 flex gap-[24px] flex-wrap items-center justify-center bg-black text-white h-40">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} <span className="rainbow-highlight">Colourfully</span></p>
                <p>
                    <a href="https://tjmb.dev">
                        <span className="hover:underline text-sm">tjmb.dev</span>
                    </a>
                </p>
            </div>
            <div className="flex items-center justify-center text-sm gap-2 w-full">
                <Link href="/policy/privacy" className="hover:underline">Privacy</Link>
                <Link href="/policy/tos" className="hover:underline">Terms</Link>
            </div>
        </footer>
    );
}