<script setup lang="ts"></script>

<template>
    <form>
        <div class="space-y-12 pb-24 pt-44">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mb-12">
                    <h1 class="text-5xl font-miller-display tracking-tight text-dark-olive"><i>Get</i> in Touch</h1>
                    <p class="mt-4 text-gray-500">
                        Have a question about eyelash extensions or want to schedule an appointment? We'd love to hear
                        from you! Please leave your contact information, and any queries you have in the fields below,
                        and our lash experts will promptly reach out to assist you.
                    </p>
                </div>
                <div class="grid grid-cols-1 gap-x-8 gap-y-10 pb-6 md:grid-cols-4">
                    <div class="md:col-span-1">
                        <h2 class="text-base font-semibold leading-7 text-gray-900 mb-2">Where are we located</h2>
                        <p class="mt-1 text-sm leading-6 text-gray-600">
                            <span class="text-light-olive">Studio</span> <br />
                            1/117 Dorset Road, Boronia, VIC 3155 <br />
                            04 3172 2245 <br />
                            <a href="mailto:theglowingartistry@gmail.com">theglowingartistry@gmail.com</a> <br /><br />
                            <span class="text-light-olive">Opening Hours</span> <br />
                            Monday to Friday 5:30-8:30pm <br />
                            <i class="text-dark-olive">After-hour appointments available upon request</i>
                        </p>
                    </div>

                    <div class="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-5 md:col-span-3 md:ml-24">
                        <div class="sm:col-span-3">
                            <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
                            <div class="mt-2">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    autocomplete="name"
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 focus:ring-dark-olive"
                                />
                            </div>
                        </div>

                        <div class="sm:col-span-3">
                            <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
                                >Email address</label
                            >
                            <div class="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autocomplete="email"
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark-olive sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div class="sm:col-span-3">
                            <label for="phone" class="block text-sm font-medium leading-6 text-gray-900"
                                >Phone Number</label
                            >
                            <div class="mt-2">
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    autocomplete="phone"
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark-olive sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div class="sm:col-span-4">
                            <label for="message" class="block text-sm font-medium leading-6 text-gray-900"
                                >Message</label
                            >
                            <div class="mt-2">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark-olive sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div class="sm:col-span-3">
                            <p class="mt-1 text-sm leading-6 text-gray-600">I prefer to be contacted via:</p>
                            <div class="mt-2 flex gap-4 lg:gap-12">
                                <div class="flex items-center gap-x-3">
                                    <input
                                        id="contact-email"
                                        name="push-notifications"
                                        type="radio"
                                        class="h-4 w-4 border-gray-300 text-light-olive focus:ring-dark-olive"
                                    />
                                    <label for="contact-email" class="block text-sm font-medium leading-6 text-gray-900"
                                        >Email</label
                                    >
                                </div>
                                <div class="flex items-center gap-x-3">
                                    <input
                                        id="contact-phone"
                                        name="push-notifications"
                                        type="radio"
                                        class="h-4 w-4 border-gray-300 text-light-olive focus:ring-dark-olive"
                                    />
                                    <label for="contact-phone" class="block text-sm font-medium leading-6 text-gray-900"
                                        >Phone call</label
                                    >
                                </div>
                                <div class="flex items-center gap-x-3">
                                    <input
                                        id="contact-text"
                                        name="push-notifications"
                                        type="radio"
                                        class="h-4 w-4 border-gray-300 text-light-olive focus:ring-dark-olive"
                                    />
                                    <label for="contact-text" class="block text-sm font-medium leading-6 text-gray-900"
                                        >Text</label
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="sm:col-span-4">
                            <div class="flex items-center justify-end gap-x-6">
                                <button
                                    type="submit"
                                    class="rounded-md bg-light-olive px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-beige focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-beige"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>
