import React, { useState } from "react";
import { toast } from "./Toaster";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "#about", label: "about" },
        { href: "#projects", label: "projects" },
        { href: "#experience", label: "experience" },
        { href: "#contact", label: "contact" },
    ];

    function copyText(e: React.MouseEvent<HTMLElement>) {
        e.preventDefault();
        const email = "carloshiramsanchez@gmail.com";
        navigator.clipboard.writeText(email)
            .then(() => {
                toast({
                    message: "Email copied to clipboard",
                    tone: "success",
                    duration: 2400,
                });
            })
            .catch((err) => {
                toast({
                    message: "Could not copy email",
                    tone: "error",
                    duration: 2600,
                });
            });
    }

    return (
        <nav className="w-full">
            <div className="flex h-30 w-full items-center justify-between px-6 sm:px-8 md:px-20">
                <div className="hidden w-full items-center justify-between font-manrope font-medium lg:flex">
                    <div className="flex w-[55%] flex-row items-center justify-between gap-10">
                        <div className="flex flex-col">
                            <p>Download</p>
                            <a
                                href="/CarlosHiramSanchez_CV.pdf"
                                download=""
                                className="cursor-pointer hover-underline"
                            >My resume</a>
                        </div>
                        <div className="flex flex-col">
                            <p>Let's talk</p>
                            <a
                                href="#"
                                onClick={copyText}
                                className="cursor-pointer hover-underline"
                            >carloshiramsanchez@gmail.com
                            </a>
                        </div>
                        <div className="flex flex-col">
                            <p>Visit my</p>
                            <a className="hover-underline inline-flex! items-center! gap-1!" href="https://www.linkedin.com/in/hiiramsan/" target="_blank" rel="noreferrer">
                                <span>LinkedIn</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right shrink-0"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                            </a>
                        </div>
                    </div>

                    <div className="ml-auto flex flex-row items-center gap-10 uppercase font-geist">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href}>
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex w-full items-center justify-between lg:hidden">
                    <a
                        href="/CarlosHiramSanchez_CV.pdf"
                        download=""
                        className="text-sm font-manrope font-medium hover-underline"
                    >Download my resume</a>
                    <button
                        type="button"
                        onClick={() => setIsOpen(true)}
                        aria-label="Open menu"
                        aria-expanded={isOpen}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 cursor-pointer transition hover:bg-neutral-50"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="4" x2="20" y1="6" y2="6" />
                            <line x1="4" x2="20" y1="12" y2="12" />
                            <line x1="4" x2="20" y1="18" y2="18" />
                        </svg>
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-sm lg:hidden animate-in fade-in duration-200">
                    <div className="relative flex h-full w-full flex-col px-6 sm:px-8 py-6">
                        <div className="absolute right-6 top-10 sm:right-8">
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                aria-label="Close menu"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 cursor-pointer transition hover:bg-neutral-50"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="18" x2="6" y1="6" y2="18" />
                                    <line x1="6" x2="18" y1="6" y2="18" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-16 flex flex-col gap-8">
                            <div className="flex flex-col items-start gap-4 uppercase font-geist text-lg">
                                {navLinks.map((link) => (
                                    <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                            <div className="h-px w-full bg-neutral-200" />
                            <div className="flex flex-col items-start gap-4 font-manrope">
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        copyText(e);
                                        setIsOpen(false);
                                    }}
                                    className="text-left hover-underline"
                                >Let's talk: carloshiramsanchez@gmail.com</button>
                                <a
                                    className="hover-underline inline-flex! items-center! gap-1!"
                                    href="https://www.linkedin.com/in/hiiramsan/"
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <span>Visit my LinkedIn</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right shrink-0"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;


