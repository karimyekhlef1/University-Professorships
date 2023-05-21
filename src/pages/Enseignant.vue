<template>

    <div >
        <div>
            <img v-if="value.Sexe === 'F'" src="../assets/femme.png" :height="200" cover />
            <img v-else-if="value.Sexe === 'M'" src="@/assets/homme.png" :height="200" cover />
        </div>
        <DataRenderer :value="value" :cols="4" />
    </div>
    
</template>

<script>
    import DataRenderer from '@/components/reusable-components/DataRenderer.vue';
    export default{
    name:'Enseignant',
    data: () => ({
        
    }),
    components: {
        DataRenderer
    },
    props: {
        value: {
            type: Object,
            required: true                
        },
        cols: {
            typeo: Number,
            default: 3
        }
    },

    // commit 1.0.2
    // computed: 

}

</script>

<style scoped>

</style>
    