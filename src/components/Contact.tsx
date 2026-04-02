import { toast } from "./Toaster";

const Contact = () => {

    function copyText(e: React.MouseEvent<HTMLAnchorElement>) {
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
        <section className="w-full border-t border-neutral-200 py-10 px-5 sm:px-10 lg:px-20" id="contact">
            <div className="flex w-full flex-col gap-10 md:flex-row md:items-start md:justify-between">
                <div className="flex w-full flex-col gap-6 md:w-1/2">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-md font-geist font-normal md:text-2xl">
                            Contact me
                        </h1>
                    </div>

                    <div className="flex flex-col gap-4 text-sm text-black">
                        <div className="flex flex-wrap items-center gap-6">
                            <a className="hover-underline inline-flex! items-center! gap-2!" href="https://github.com/hiiramsan" target="_blank" rel="noreferrer">
                                <span>Github</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right shrink-0"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                            </a>
                            <a className="hover-underline inline-flex! items-center! gap-2!" href="https://www.linkedin.com/in/hiiramsan/" target="_blank" rel="noreferrer">
                                <span>LinkedIn</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right shrink-0"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                            </a>
                            <a className="hover-underline inline-flex! items-center! gap-2!" href="https://instagram.com/hiiramsan" target="_blank" rel="noreferrer">
                                <span>Instagram</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right shrink-0"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                            </a>
                        </div>
                        <div className="flex flex-col gap-4 text-sm mt-4 text-neutral-500 font-geist">
                            <h1 className="text-black font-md font-semibold">My philosophy of life</h1>
                            <p>"A man has understood life when in every person he sees himself"</p>
                            <p>"A self centric life is a very small life"</p>
                            <p>"Be tolerant with others but strict to yourself"</p>
                        </div>
                        
                    </div>
                </div>

                <div className="flex w-full flex-col items-start gap-6 md:w-1/2 md:items-end">
                    <a
                        href="#"
                        onClick={copyText}
                        className="cursor-pointer hover-underline text-md font-geist md:text-lg"
                    >
                        carloshiramsanchez@gmail.com
                    </a>
                    <img src="/images/monki.gif" alt="" className="w-64" />
                </div>
            </div>
        </section>
    )
}

export default Contact
