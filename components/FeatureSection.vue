<script setup lang="ts">
import {
    ClockIcon,
    CheckIcon,
    HandThumbUpIcon,
    SparklesIcon,
    UserGroupIcon,
    ServerIcon,
} from "@heroicons/vue/20/solid";

const features = [
    {
        name: " Saves time",
        description: "by eliminating the need for daily mascara application.",
        icon: ClockIcon,
    },
    {
        name: "Lasting results",
        description: "with proper care and maintenance with occasional touch-ups.",
        icon: HandThumbUpIcon,
    },
    {
        name: "Customisable options",
        description: "to suit individual preferences.",
        icon: CheckIcon,
    },
    {
        name: "Natural-looking enhancement",
        description: "when applied by a skilled artist.",
        icon: SparklesIcon,
    },
    {
        name: "More time",
        description: "for family, exercise and other self-care activities.",
        icon: UserGroupIcon,
    },
];
</script>

<template>
    <div class="overflow-hidden bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl md:px-6 lg:px-8">
            <div class="flex flex-col-reverse lg:grid lg:gap-x-8 lg:gap-y-16 lg:grid-cols-2 lg:items-start">
                <div class="px-6 lg:px-0 lg:pr-4 pt-12 lg:pt-4">
                    <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                        <p class="mt-2 text-4xl tracking-tight text-dark-olive font-miller-display sm:text-5xl">
                            <i>The Benefits</i> of Eyelash Extensions
                        </p>
                        <p class="mt-6 text-lg leading-8 text-gray-600">
                            At The Glowing Artistry, we offer a range of meticulously crafted lash sets tailored to
                            accentuate your unique features and elevate your beauty routine. From classic sets for a
                            subtle enhancement to volume sets for a glamorous fullness, discover the many benefits of
                            eyelash extensions.
                        </p>
                        <dl class="mt-10 max-w-xl space-y-4 text-base leading-7 text-gray-600">
                            <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                                <dt class="inline font-semibold text-gray-900">
                                    <component
                                        :is="feature.icon"
                                        class="absolute left-1 top-1 h-5 w-5 text-light-olive"
                                        aria-hidden="true"
                                    />
                                    {{ feature.name }}
                                </dt>
                                {{ " " }}
                                <dd class="inline">{{ feature.description }}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <div class="sm:px-6 lg:px-0">
                    <div
                        class="relative isolate overflow-hidden bg-beige bg-opacity-50 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none"
                    >
                        <div
                            class="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-dark-beige bg-opacity-50 ring-1 ring-inset ring-white"
                            aria-hidden="true"
                        />
                        <div class="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                            <img
                                src="/images/eye-lash-application.jpg"
                                alt="Eye lash application"
                                class="-mb-12 w-[38rem] aspect-square max-w-none rounded-tl-xl bg-gray-800 object-cover object-right-center"
                            />
                        </div>
                        <div class="pointer-events-none absolute inset-0 sm:rounded-3xl" aria-hidden="true" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
