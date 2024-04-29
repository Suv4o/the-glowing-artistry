<script setup lang="ts">
const testimonials = [
    {
        body: "Really amazing work and am in love with the recommended style! I highly recommend The Glowing Artistry to anyone considering lash extensions.",
        author: {
            name: "Rainda Y.",
        },
    },
    {
        body: "Was such a great experience. Super professional and meticulous. Could not recommend more. Will only be getting my lashes done from Glowing Artistry from now on.",
        author: {
            name: "Brinda M.",
        },
    },
    {
        body: "Nicole is a skilled lash artist who made me feel comfortable throughout the entire process. The lashes are lightweight and comfortable, and they make such a difference to my overall look. I've received so many compliments on my lashes, and I can't wait to go back for my next refill appointment.",
        author: {
            name: "Alex T.",
        },
    },
];
</script>

<template>
    <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-xl text-center">
                <h2 class="text-lg font-semibold leading-8 tracking-tight text-beige">Testimonials</h2>
                <p class="mt-2 text-4xl tracking-tight text-dark-olive sm:text-5xl font-miller-display">
                    <i>Discover the experiences</i> of our clients through their lash extension reviews
                </p>
            </div>
            <div class="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
                <div class="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
                    <div
                        v-for="testimonial in testimonials"
                        :key="testimonial.author.name"
                        class="pt-8 sm:inline-block lg:block sm:w-full sm:px-4"
                    >
                        <figure class="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                            <blockquote class="text-gray-900">
                                <p>{{ `“${testimonial.body}”` }}</p>
                            </blockquote>
                            <figcaption class="mt-6 flex items-center gap-x-4">
                                <div>
                                    <div class="font-semibold text-gray-900">{{ testimonial.author.name }}</div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
