<script setup>
import Search from "@/components/sections/search.vue";
const page = 'books'

</script>

<template>
    <div class="users">
        <search :data="page">
        </search>
    </div>
</template>

<style lang="scss" scoped>
@use "@/assets/style/main.scss";
.items {
    @include main.wrap;
    height: max-content;
    width: 100%;
    background-color: main.$gray;
}
</style>