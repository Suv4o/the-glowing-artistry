<script setup lang="ts">
import { defineComponent, h } from "vue";
declare const grecaptcha: any;
const message = ref<string | null>(null);
let clearTimeout: any = null;
const config = useRuntimeConfig();

const navigation = {
    main: [
        { name: "About Us", to: "/about-us" },
        { name: "Services & Prices", to: "/services-prices" },
        { name: "Before & After Service Advice", to: "/before-and-after-care-advice" },
        { name: "FAQ", to: "/faq" },
        { name: "Studio Policies", to: "/studio-policies" },
        { name: "Get in Touch", to: "/get-in-touch" },
    ],
    social: [
        {
            name: "Facebook",
            href: "https://www.facebook.com/profile.php?id=61557977562562&mibextid=JRoKGi",
            icon: defineComponent({
                render: () =>
                    h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
                        h("path", {
                            "fill-rule": "evenodd",
                            d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                            "clip-rule": "evenodd",
                        }),
                    ]),
            }),
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/theglowingartistry?igsh=MTFmaHgxbmhhdGFjbg%3D%3D&utm_source=qr",
            icon: defineComponent({
                render: () =>
                    h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
                        h("path", {
                            "fill-rule": "evenodd",
                            d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
                            "clip-rule": "evenodd",
                        }),
                    ]),
            }),
        },
    ],
};

function submitForm(event: Event) {
    event.preventDefault();
    grecaptcha.ready(() => {
        grecaptcha.execute(config.public.RECAPTCHA_SITE_KEY, { action: "submit" }).then(async (token: string) => {
            message.value = null;
            if (clearTimeout) {
                clearTimeout(clearTimeout);
            }

            const form = event.target as HTMLFormElement;
            const formData = new FormData(form);
            const formEntries = Object.fromEntries(formData.entries());

            const body = Object.fromEntries(Object.entries(formEntries).filter(([_, value]) => value !== ""));

            body.token = token;

            try {
                await $fetch("/api/newsletters", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(body),
                });
            } catch (error: any) {
                message.value = "An error occurred. Please try again!";
            }

            message.value = "Thank you for subscribing!";

            clearTimeout = setTimeout(() => {
                message.value = null;
            }, 5000);

            form.reset();
        });
    });
}
</script>

<template>
    <footer class="bg-white">
        <div class="mx-auto max-w-7xl overflow-hidden px-6 pb-6 pt-8 sm:pt-12 lg:px-8 border-t border-gray-900/10">
            <div class="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8 mb-12 items-center">
                <div class="max-w-xl tracking-tight text-gray-900 lg:col-span-7">
                    <h2 class="inline font-miller-display sm:block lg:inline xl:block text-4xl sm:text-5xl mb-2">
                        <i>Subscribe</i>
                    </h2>
                    {{ " " }}
                    <p>
                        Stay in the loop with exclusive offers, event updates, new product releases, and much more by
                        subscribing today.
                    </p>
                </div>
                <form @submit="submitForm" class="w-full max-w-md lg:col-span-5 lg:pt-2">
                    <div class="flex gap-x-4 mb-4">
                        <label for="email-address" class="sr-only">Subscribe Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            autocomplete="name"
                            class="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-light-olive sm:text-sm sm:leading-6"
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div class="flex gap-x-4">
                        <label for="email-address" class="sr-only">Email</label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autocomplete="email"
                            class="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-light-olive sm:text-sm sm:leading-6"
                            placeholder="Email address"
                            required
                        />
                        <button
                            type="submit"
                            class="flex-none rounded-md bg-light-olive px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-beige focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-beige"
                        >
                            Subscribe
                        </button>
                    </div>
                    <p v-if="message" class="mt-4 text-sm">{{ message }}</p>
                </form>
            </div>
            <nav class="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
                <div v-for="item in navigation.main" :key="item.name" class="pb-6">
                    <NuxtLink :to="item.to" class="text-sm leading-6 text-gray-600 hover:text-gray-900">{{
                        item.name
                    }}</NuxtLink>
                </div>
            </nav>
            <div class="mt-10 flex justify-center space-x-10">
                <a
                    v-for="item in navigation.social"
                    :key="item.name"
                    :href="item.href"
                    class="text-gray-400 hover:text-gray-500"
                >
                    <span class="sr-only">{{ item.name }}</span>
                    <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                </a>
            </div>
            <ClientOnly>
                <p class="mt-10 text-center text-xs leading-5 text-gray-500">
                    &copy; {{ new Date().getFullYear() }} The Glowing Artistry. All rights reserved. <br />
                    ABN: 39 256 340 452
                </p>
            </ClientOnly>
        </div>
    </footer>
</template>
