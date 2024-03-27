import Image from "next/image"
import Link from "next/link"

export default () => (
    <div className="grid min-h-screen content-between px-6 pb-10">
        <section className="mt-36 space-y-10">
            <Image
                alt=""
                src="/icon-success.svg"
                height={64}
                width={64}
            />
            <div className="space-y-6">
                <h1 className="text-heading">Thanks for subscribing!</h1>
                <p>
                    A confirmation email has been sent to
                    <span className="font-bold"> ash@loremcompany.com</span>.
                    Please open it and click the button inside to confirm your subscription
                </p>
            </div>  
        </section>
        <Link href="/" className="btn">Dismiss message</Link>
    </div>
)