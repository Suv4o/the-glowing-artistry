<script setup lang="ts">
const images = [
    {
        imageUrl: "/images/TGA_Website_Services1.jpg",
    },
    {
        imageUrl: "/images/TGA_Website_Services2.jpg",
    },
    {
        imageUrl: "/images/TGA_Website_Services3.jpg",
    },
];

const eyelashExtensionsSets = [
    {
        name: "Natural Set $130",
        description:
            "Experience subtle lash enhancement with our Classic Set. Light extensions are delicately placed along approximately half of the eyelashes, providing a natural yet noticeable enhancement to your lashes. (allow 2hrs)",
    },
    {
        name: "Hybrid Set $160",
        description:
            "Achieve a naturally full look with our Hybrid Set. A selection of classic lashes and volume fans, meticulously crafted for lightness and precision, are carefully applied across the eye, blending seamlessly with your natural lashes for an effortlessly glamorous appearance. (allow 2.25hrs)",
    },
    {
        name: "Volume Set $220",
        description:
            "Indulge in luxurious fullness with our Volume Set. Volume fans, meticulously placed on all-natural eyelashes, create a dense, voluminous look that exudes elegance and sophistication, perfect for those seeking maximum impact. (allow 2.5hrs)",
    },
];

const eyelashExtensionsRefills = [
    {
        name: "Before 2 weeks",
        description: "$85 Natural / $95 Hybrid / Volume $105 ",
    },
    {
        name: "Before 3 weeks",
        description: "$95 Natural / $110 Hybrid / Volume $125 ",
    },
    {
        name: "Before 4 weeks",
        description: "$115 Natural / $125 Hybrid / Volume $145",
    },
];

const eyelashExtensionsRemovals = [
    {
        name: "Sets From another salon:",
        description: "30 minutes, $40",
    },
    {
        name: "Sets from The Glowing Artistry:",
        description: "15 minutes, Free",
    },
    {
        name: "Emergency removal for sets from The Glowing Artistry:",
        description: "No cost. Please contact us as soon as possible",
    },
];
</script>

<template>
    <div class="relative isolate overflow-hidden bg-white px-6 pt-32 lg:overflow-visible lg:px-0">
        <div class="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
            <div class="mx-auto max-w-2xl px-4 lg:max-w-none">
                <div class="max-w-3xl">
                    <h1 class="text-5xl font-miller-display tracking-tight text-gray-900">Services & Prices</h1>
                    <p class="mt-4 text-gray-500">
                        Choose from an array of treatments crafted to elevate and revitalize, each tailored to enhance
                        your natural beauty.
                    </p>
                </div>
                <h2 class="text-4xl font-miller-display mt-16 text-beige">Eyelash Extensions <i>Sets</i></h2>
                <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                    <div
                        v-for="eyelashExtensionsSet in eyelashExtensionsSets"
                        :key="eyelashExtensionsSet.name"
                        class="sm:flex lg:block"
                    >
                        <div class="mt-6">
                            <h3 class="text-sm font-medium text-dark-olive">{{ eyelashExtensionsSet.name }}</h3>
                            <p class="mt-2 text-sm text-gray-500">{{ eyelashExtensionsSet.description }}</p>
                        </div>
                    </div>
                </div>

                <h2 class="text-4xl font-miller-display mt-24 text-dark-beige">Eyelash Extensions <i>Refill</i></h2>
                <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                    <div
                        v-for="eyelashExtensionsRefill in eyelashExtensionsRefills"
                        :key="eyelashExtensionsRefill.name"
                        class="sm:flex lg:block"
                    >
                        <div class="mt-6">
                            <h3 class="text-sm font-medium text-dark-olive">{{ eyelashExtensionsRefill.name }}</h3>
                            <p class="text-sm font-medium text-dark-olive">{{ eyelashExtensionsRefill.description }}</p>
                        </div>
                    </div>
                </div>
                <p class="mt-6 text-sm text-gray-500">
                    We have chosen not to refill lash work done at other salons. You may opt for a full set, which
                    includes removal if you currently have lashes, or you may wait for them to naturally shed before
                    scheduling a full set appointment with us.
                </p>
                <p class="mt-2 text-sm text-gray-500">
                    Kindly be advised that a 50% non-refundable booking fee is necessary for all appointments. No-shows,
                    late cancellations, or reschedules with less that 48-hour notice will result in the application of
                    this fee. Your credit card details will be securely stored for this purpose. Thank you for your
                    understanding and please do not hesitate to reach out to us.
                </p>

                <h2 class="text-4xl font-miller-display mt-24 text-dark-blush">Eyelash Extensions <i>Removal</i></h2>
                <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                    <div
                        v-for="eyelashExtensionsRemoval in eyelashExtensionsRemovals"
                        :key="eyelashExtensionsRemoval.name"
                        class="sm:flex lg:block"
                    >
                        <div class="mt-6">
                            <h3 class="text-sm font-medium text-dark-olive">{{ eyelashExtensionsRemoval.name }}</h3>
                            <p class="text-sm font-medium text-dark-olive">
                                {{ eyelashExtensionsRemoval.description }}
                            </p>
                        </div>
                    </div>
                </div>

                <h3 class="mt-8 text-sm font-medium text-dark-olive">Allergy Patch Test $20</h3>
                <p class="mt-2 text-sm text-gray-500">
                    The process usually involves the application of 10 eyelash extensions to each eye, that are bonded
                    with a small amount of adhesive bring tested to the test area. The product is to be left on and
                    monitored between 24-48 hours, depending on the recommendations of the lash artist or manufacturer.
                    The client is to return to the lash artist for assessment after the specified duration, and the lash
                    artist will check for any sign of redness, irritation, swelling, or other allergic reactions at the
                    test site.
                </p>
            </div>
            <div class="bg-white sm:pt-12">
                <div class="md:px-4">
                    <ul
                        role="list"
                        class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-3 lg:mx-0 lg:max-w-none"
                    >
                        <li v-for="image in images" :key="image.imageUrl">
                            <img class="aspect-[3/2] w-full rounded-2xl object-cover" :src="image.imageUrl" alt="" />
                        </li>
                    </ul>
                </div>
            </div>
            <div class="bg-light-olive mt-12 bg-opacity-80">
                <div
                    class="mx-auto max-w-7xl px-6 py-12 lg:flex lg:items-center lg:justify-between lg:px-8 lg:gap-x-96"
                >
                    <h2 class="text-4xl font-miller-display tracking-tight sm:text-5xl text-white">
                        <i>Experience</i> the difference. <br /><i>Secure</i> your spot now.
                    </h2>
                    <div class="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
                        <NuxtLink
                            to="/"
                            class="rounded-md bg-dark-beige px-10 py-5 font-semibold text-white shadow-sm hover:bg-beige focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-beige"
                            >Book Now</NuxtLink
                        >
                    </div>
                </div>
            </div>
            <GiveTheGift />
        </div>
    </div>
</template>
