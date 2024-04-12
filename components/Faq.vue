<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/vue/24/outline";

const faqs = [
    {
        question: "What are eyelash extensions?",
        answer: "Eyelash extensions are meticulously crafted synthetic lashes delicately adhered to your natural lashes. Crafted from PBT fiber, these extensions can be shaped into various curls to suit your desired look. Each extension is meticulously bonded onto a single natural lash using a medical-grade adhesive. Offering the illusion of mascara without the hassle of smudging or clumps, eyelash extensions ensure a flawless, natural appearance. When applied with precision and matched to the appropriate weight and length, they should not cause discomfort, itching, or damage to your natural lashes.",
    },
    {
        question: "How long does the application process take?",
        answer: "Depending on which set is applied, a natural set can typically take up to 2 hours, a hybrid set can typically take up to 2.25 hours, and a volume set can typically take 2.5 hours.",
    },
    {
        question: "How long do eyelash extensions last?",
        answer: "Timing for refill appointments may vary depending on several factors. For instance, clients with oilier skin may need more frequent refills compared to those with less oily skin. Additionally, natural lash shedding rates can vary due to factors like seasonal changes, stress levels, and overall health. With proper aftercare, lashes can last up to 6 weeks. However, to maintain optimal fullness, we advise scheduling refill appointments every 2 to 3 weeks to address any naturally grown-out areas.",
    },
    {
        question: "Will eyelash extensions damage my natural lashes?",
        answer: "When applied correctly by a trained professional, eyelash extensions should not damage your natural lashes. It is essential to choose a reputable salon, a suitably qualified lash artist and follow proper aftercare instructions to minimise any potential risks. If the salon is not isolating correctly and neglects to assess the natural lash strength for safe application, it can lead to potential damage.",
    },
    {
        question: "How do you maintain eyelash extensions?",
        answer: "For consistently beautiful lashes, we suggest scheduling refill appointments approximately 2 to 3 weeks after your initial application. Alike a full set appointment, we meticulously prepare you for the session. The process involves gently removing any lashes that may have grown out slightly and filling in any gaps, ensuring you leave with a beautifully refreshed set.",
    },
    {
        question: "Can you put mascara or makeup on or near eyelash extensions?",
        answer: "An appealing aspect of extensions is their ability to provide a mascara-like effect at all times. It is best not to apply mascara or makeup on or near eyelash extensions. However, if you opt to enhance further with mascara, it is important to select a product compatible with eyelash extensions, avoiding waterproof formulas. Additionally, proper cleaning is essential for maintaining lash health. Our ProLong lash cleanser is ideal for daily at-home use, ensuring your lashes stay fresh and vibrant.",
    },
    {
        question: "How long do eyelash extensions need to be refilled?",
        answer: "Typically, we recommend scheduling appointments every 2 to 3 weeks. However, individual factors such as lash shedding rates may vary, necessitating more frequent visits for some clients.",
    },
    {
        question: "Can you refill eyelash extensions that have been applied at another salon?",
        answer: "We have chosen not to refill lash work done at other salons. You may opt for a full set, which includes removal if you currently have lashes, or you may wait for them to naturally shed before scheduling a full set appointment with us. We eagerly await the chance to showcase our meticulous craftsmanship and personalised styling and look forward to welcoming you soon. Should you have any additional inquiries or require further assistance, feel free to reach out to our friendly team for personalised guidance.",
    },
    {
        question: "What is the difference between classic, hybrid, and volume lash extensions?",
        answer: "Classic lash extensions involve applying one extension to each natural lash, creating a natural yet enhanced look. Hybrid lashes combine classic and volume techniques for added fullness and texture, while volume lashes involve applying multiple lightweight extensions to each natural lash, resulting in a more dramatic, voluminous look.",
    },
    {
        question: "How do I prepare for my eyelash extension appointment?",
        answer: "Before your appointment, ensure your lashes are clean and free of any makeup or oil-based products. Avoid caffeine and exercise beforehand to minimise eye movement during the application process. See further tips in the <a class='text-dark-beige' href='/before-and-after-care-advice'>before-care advice section.</a>",
    },
    {
        question: "How do I care for my eyelash extensions to make them last longer?",
        answer: "Refrain from getting your eyelash extensions wet for the first 12 hours after application. Avoid steamy environments such as saunas or hot showers during this time. Handle your eyelash extensions with care. Avoid rubbing or pulling on them, as this can cause premature shedding. Treat your lashes to a lash bath every other day using our ProLong lash cleanser. See further tips in the <a class='text-dark-beige' href='/before-and-after-care-advice'>after-care advice section.</a>",
    },
    {
        question: "Can I remove my eyelash extensions at home?",
        answer: "It is not recommended to remove eyelash extensions at home, as improper removal can damage your natural lashes. It is best to visit a professional lash technician for safe and effective removal.",
    },
    {
        question: "Are eyelash extensions suitable for everyone?",
        answer: "Eyelash extensions are generally safe for most people, but individuals with certain eye conditions or allergies may not be suitable candidates. It is essential to consult with our qualified lash artists to determine if eyelash extensions are right for you.",
    },
];
</script>

<template>
    <div class="bg-white pt-12">
        <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
            <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
                <div>
                    <h2 class="text-4xl sm:text-5xl leading-10 tracking-tight text-dark-olive font-miller-display">
                        Frequently asked questions
                    </h2>
                    <p class="mt-6">
                        If you're new to the world of eyelash extensions, you may have some questions—and that's
                        perfectly natural. To ease your mind and enhance your experience, we've curated a list of our
                        frequently asked questions. Your confidence and comfort are our priority, so if you have any
                        further inquiries, please feel free to reach out. We're here to empower your journey to
                        natural-looking beauty.
                    </p>
                </div>
                <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
                    <Disclosure as="div" v-for="faq in faqs" :key="faq.question" class="pt-6" v-slot="{ open }">
                        <dt>
                            <DisclosureButton class="flex w-full items-start justify-between text-left text-gray-900">
                                <span class="text-base text-light-olive font-semibold leading-7">{{
                                    faq.question
                                }}</span>
                                <span class="ml-6 flex h-7 items-center">
                                    <PlusSmallIcon v-if="!open" class="h-6 w-6" aria-hidden="true" />
                                    <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
                                </span>
                            </DisclosureButton>
                        </dt>
                        <DisclosurePanel as="dd" class="mt-2 pr-12">
                            <p v-html="faq.answer" class="text-base leading-7 text-gray-600" />
                        </DisclosurePanel>
                    </Disclosure>
                </dl>
            </div>
        </div>
    </div>
</template>
