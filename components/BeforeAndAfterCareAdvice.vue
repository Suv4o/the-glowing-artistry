<script setup>
import { CheckIcon } from "@heroicons/vue/20/solid";

const beforeCareAdvices = [
    {
        name: "Please arrive with clean, makeup-free lashes to ensure better adhesion.",
    },
    { name: "Avoid using oil-based products on your lashes or around your eyes." },
    {
        name: "When cleansing or removing eye makeup use a water-based makeup remover such as micellar water.",
    },
    {
        name: "Do not perm your natural lashes prior to the appointment.",
    },
    { name: "Remove contact lenses before the session if you wear them." },
    { name: "Communicate your desired lash look and any concerns with your lash artist." },
    {
        name: "Plan your appointment timing to avoid rushing or feeling stressed.",
    },
    {
        name: "Avoid caffeine before your appointment to prevent eye twitching.",
    },
    {
        name: "It is best to wait 6-8 weeks after a lash lift before getting eyelash extensions so that the lashes are smooth enough to allow for optimal adhesion.",
    },
];

const afterCareAdvices = [
    {
        name: "Avoid getting your lashes wet for the first 12 hours to allow the adhesive to fully cure.",
    },
    {
        name: "Avoid rubbing your eyes or sleeping face-down to prevent premature lash shedding.",
    },
    {
        name: "Not recommended to wear mascara.",
    },
    {
        name: "If applied water soluble mascara / make up, pay attention to your lash line when removing makeup.",
    },
    {
        name: "Use oil-free makeup removers and cleansers to maintain lash longevity.",
    },
    {
        name: "Use oil-free makeup removers and cleansers to maintain lash longevity.",
    },
    {
        name: "Brush lashes with mascara wand to maintain them as they grow.",
    },
    {
        name: "Sleep on your back or on your side with lashes off the pillow.",
    },
    {
        name: "Be gentle when cleansing your face, avoiding harsh rubbing or pulling on the lashes.",
    },
    {
        name: "Gently pat lashes dry with a paper/towel and dry off with hair dryer on cold before brushing the extensions.",
    },
    {
        name: "Schedule regular touch-up appointments every 2-3 weeks to maintain the fullness and longevity of your lash extensions.",
    },
];
</script>

<template>
    <div class="bg-white pb-24 sm:pb-32 pt-44">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div
                class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            >
                <div>
                    <p class="mt-2 text-4xl font-miller-display tracking-tight text-light-olive sm:text-5xl">
                        <i>Before-care</i> advice
                    </p>
                </div>
                <dl
                    class="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16"
                >
                    <div
                        v-for="beforeCareAdvice in beforeCareAdvices"
                        :key="beforeCareAdvice.name"
                        class="relative pl-9"
                    >
                        <dt class="text-gray-900">
                            <CheckIcon class="absolute left-0 top-1 h-5 w-5 text-light-olive" aria-hidden="true" />
                            {{ beforeCareAdvice.name }}
                        </dt>
                    </div>
                </dl>
            </div>
            <div
                class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 mt-32"
            >
                <div>
                    <p class="mt-2 text-4xl font-miller-display tracking-tight text-dark-beige sm:text-5xl">
                        <i>After-care</i> advice
                    </p>
                </div>
                <dl
                    class="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16"
                >
                    <div v-for="afterCareAdvice in afterCareAdvices" :key="afterCareAdvice.name" class="relative pl-9">
                        <dt class="text-gray-900">
                            <CheckIcon class="absolute left-0 top-1 h-5 w-5 text-dark-beige" aria-hidden="true" />
                            {{ afterCareAdvice.name }}
                        </dt>
                    </div>
                </dl>
            </div>
            <p class="mt-24 text-gray-900 font-miller-display text-xl">
                Should you experience any signs or symptoms such as fever, redness, swelling, or tenderness at the
                procedure site, it is advisable to consult and seek professional medical attention immediately. Your
                health and well-being are of utmost importance to us.
            </p>

            <div class="bg-light-olive mt-12">
                <div
                    class="mx-auto max-w-7xl px-6 py-12 lg:flex lg:items-center lg:justify-between lg:px-8 lg:gap-x-96"
                >
                    <h2 class="text-4xl font-miller-display tracking-tight sm:text-5xl text-white">
                        <i>Elevate</i> your everyday elegance with lash extensions. <br /><i>Book now</i> to experience
                        the difference.
                    </h2>
                    <div class="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
                        <a
                            href="https://bookings.gettimely.com/theglowingartistry/bb/book"
                            target="_blank"
                            class="rounded-md bg-dark-beige px-10 py-5 font-semibold text-white shadow-sm hover:bg-beige focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-beige"
                            >Book Now</a
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
