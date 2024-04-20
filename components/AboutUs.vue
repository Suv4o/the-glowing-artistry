<script setup lang="ts">
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from "@heroicons/vue/20/solid";
</script>

<template>
    <div class="relative isolate overflow-hidden bg-white px-6 pb-24 sm:pb-32 pt-44 lg:overflow-visible lg:px-0">
        <div class="absolute inset-0 -z-10 overflow-hidden">
            <img
                src="/images/hero-background.jpg"
                alt=""
                class="absolute top-0 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            />
        </div>
        <div
            class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10"
        >
            <div
                class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
            >
                <div class="lg:pr-4">
                    <div class="lg:max-w-lg">
                        <h1 class="font-miller-display mt-2 text-6xl tracking-tight text-gray-900 sm:text-5xl">
                            <i>Welcome to</i><br />
                            The Glowing Artistry!
                        </h1>
                        <p class="mt-6 text-xl leading-8 text-light-olive">
                            At The Glowing Artistry, we're more than just lash artists—we're passionate about enhancing
                            natural beauty and empowering confidence through the art of precision-applied lash
                            extensions.
                        </p>
                    </div>
                </div>
            </div>
            <div
                class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
            >
                <img
                    class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                    src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                    alt=""
                />
            </div>
            <div
                class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
            >
                <div class="lg:pr-4">
                    <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                        <p>
                            As the founder and lead lash artist, and having completed a nationally accredited eyelash
                            extensions application course, I am a fully insured, certified and dedicated lash artist who
                            is deeply passionate in creating customised lash sets that accentuate the unique features of
                            each client's eyes, bringing out their natural allure in the most subtle yet stunning ways.
                        </p>
                        <p class="mt-8">
                            Nothing brings me greater pleasure and joy than seeing our clients leave our studio feeling
                            confident, empowered, and ready to take on the world with their newfound radiance. We
                            believe that confidence is the most beautiful accessory anyone can wear, and we strive to
                            instill that confidence in every client we serve.
                        </p>
                        <p class="mt-8">
                            At the heart of our practice lies a strong work ethic and unwavering commitment to client
                            care. We understand the importance of safety and integrity when it comes to lash extensions,
                            which is why we prioritise using premium, trusted products and techniques to maintain lash
                            health and weight balance. With proper application and maintenance, we believe lash
                            extensions can be enjoyed long-term without compromising natural lash health.
                        </p>
                        <p class="mt-8">
                            Consultation is key to achieving the perfect lash look, which is why we take pride in taking
                            the time to understand each client's preferences and desired outcomes. Whether you're
                            seeking a subtle enhancement or a more dramatic transformation, we're here to provide expert
                            advice and guidance every step of the way, ensuring that your lash journey is as seamless
                            and satisfying as possible.
                        </p>
                        <p class="mt-8">
                            As we continue to evolve and refine our techniques, we are keen to be expanding our services
                            to include lash lifts and brow specialisation in the near future. Stay tuned for updates as
                            we hone our craft and prepare to offer an exceptional lash and brow experience.
                        </p>
                        <p class="mt-8">
                            Thank you for considering The Glowing Artistry for your lash extension needs. We look
                            forward to welcoming you into our studio and helping you unlock the full potential of your
                            natural beauty.
                        </p>
                        <p class="mt-8">Warm Regards,</p>
                        <p class="font-miller-display text-lg text-light-olive">
                            Nicole Wong <br />
                            <i>Founder, The Glowing Artistry</i>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
