import Form from "@/components/Form"
import UList from "@/components/UList"
import Image from "next/image"

const items = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
]

export default () => (
    <main className="grid gap-10">
        <section className="bg-illustration bg-no-repeat bg-cover h-72 rounded-b-2xl">
        </section>
        <section className="px-6">
            <div>
                <h1>Stay updated!</h1>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>
                <UList
                    items={items}
                    itemHandler={item => (
                        <div>
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
        </section>
    </main>
)