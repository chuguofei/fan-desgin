<template>
    <ClientDemo>
        <div class="example">
            <div style="border:1px red solid;">
                <component :is="formatPathDemos[path]" v-if="formatPathDemos" />
            </div>
        </div>
    </ClientDemo>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue';


const props = defineProps<{
    demos: object
    source: string
    path: string
    rawSource: string
    description?: string
}>()




const formatPathDemos = computed(() => {
    const demos = {}
    Object.keys(props.demos).forEach((key) => {
        demos[key.replace('../examples/', '').replace('.vue', '')] =
            props.demos[key].default
    })

    return demos
})
console.log(formatPathDemos.value)

const decodedDescription = computed(() =>
    decodeURIComponent(props.description!)
)

</script>