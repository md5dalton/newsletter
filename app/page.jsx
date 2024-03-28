import Form from "@/components/Form"
import UList from "@/components/UList"
import Image from "next/image"

const items = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
]

export default () => (
    <section
        className="
            grid gap-10 text-dark-slate-grey pb-10
            md:grid-cols-main md:gap-16 md:pl-10 md:pb-0
        "
    >
        <div className="
            bg-illustration bg-no-repeat bg-cover h-72 rounded-b-2xl
            md:order-1 md:h-full
        " />
        <div className="px-6 grid gap-10">
            <div className="grid gap-6">
                <h1 className="text-heading ">Stay updated!</h1>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>
                <UList
                    className="grid gap-3"
                    items={items}
                    itemHandler={item => (
                        <div className="flex items-center gap-4">
                            <Image
                                alt=""
                                src="/icon-list.svg"
                                height={21}
                                width={21}
                            />
                            <p>{item}</p>
                        </div>
                    )}
                />
            </div>
            <Form />
        </div>
    </section>
)