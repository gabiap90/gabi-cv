<template>
    <header>
        <h1 class="title-1th title">Apostol Gabriel</h1>
        <div class="title-2th">
            <slot></slot>
            <span>Frontend Developer</span><span>&#8226;</span>
            <span>Vue</span><span>&#8226;</span>
            <span>React</span>
        </div>
        <div class="title-3th">
            <div v-if="contact.phone">
                <span uk-icon="icon: receiver; ratio: 1"></span>
                <a :href="`tel:${contact.phone}`">{{ contact.phone }}</a>
            </div>
            <div v-if="contact.email">
                <span uk-icon="icon: mail; ratio: 1"></span>
                <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
            </div>
            <div v-if="contact.linkedin">
                <span uk-icon="icon: linkedin; ratio: 1"></span>
                <a :href="contact.linkedin">Linkedin</a>
            </div>
            <div v-if="contact.github">
                <span uk-icon="icon: github; ratio: 1"></span>
                <a :href="contact.github">Github</a>
            </div>
            <div v-if="contact.pdf">
                <span uk-icon="file"></span>
                <a :href="contact.pdf">PDF</a>
            </div>
        </div>
        <slot></slot>
    </header>
</template>

<script lang="ts" setup>
/* colors */
const orange = ref("#f05a28");
const gray = ref("rgb(102, 102, 102)");

/* scoial links */
const { contact } = useAppConfig()
</script>

<style lang="less" scoped>
.uk-link,
a {
    color: v-bind(gray);
}

header {
    text-align: center;

    .title-2th,
    .title-3th {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        font-size: 1em;
        margin: 10px 0;

        span,
        div {
            margin: 0 10px;
            display: flex;
        }
    }

    .title-2th {
        color: v-bind(orange);
    }
}
</style>