<template>
    <div class="overflow-hidden">
        <Header />
        <main>
            <slot />
        </main>
        <Footer />
    </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}

.grecaptcha-badge {
    display: none;
}
</style>
