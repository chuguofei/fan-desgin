<template>
    <ClientDemo>
        <div class="example">
            <div class="border border-solid border-gray-300 p-2 rounded-t-md">
                <component :is="formatPathDemos[path]" v-if="formatPathDemos" />
            </div>
            <div
                class="rounded-b-md border border-solid border-t-0 border-gray-300 overflow-hidden"
            >
                <div class="p-2 flex justify-end bg-white">
                    <span class="ml-2 text-sm cursor-pointer">复制</span>
                    <span class="ml-2 text-sm cursor-pointer">展开</span>
                </div>
                <div class="bg-gray-100 language-vue" v-html="decodedSource"></div>
            </div>
        </div>
    </ClientDemo>
</template>

<script lang="ts" setup>
    import { computed, onMounted } from 'vue'

    const props = defineProps<{
        demos: object
        source: string
        path: string
        rawSource: string
        description?: string
    }>()

    const formatPathDemos = computed(() => {
        const demos = {}
        Object.keys(props.demos).forEach(key => {
            demos[key.replace('../examples/', '').replace('.vue', '')] =
                props.demos[key].default
        })

        return demos
    })

    const decodedDescription = computed(() => decodeURIComponent(props.description!))

    const decodedSource = computed(() => {
        return decodeURIComponent(props.source)
    })
</script>

<style lang="scss">
    .vp-doc div[class*='language-'] {
        margin: 0;
        background-color: #f2f3f5;
        border-radius: 0;

        code {
            color: rgb(78, 89, 105);
            padding-top: 20px;
        }

        pre {
            padding: 0;
        }
    }
</style>
