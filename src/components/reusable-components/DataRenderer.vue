<template>

    <div>
        <v-row>
            <v-col
                :cols="getCols"
                v-for="([field, fieldValue]) of valueEntries" 
            >
                <v-text-field
                    :label="field" 
                    :value="fieldValue" 
                    :readonly="true"
                />
            </v-col>
        </v-row>
    </div>
     
</template>

<script>
export default {

    name: 'DataRenderer',
    props: {
        value: {
            type: Object,
            required: true                
        },
        cols: {
            typeo: Number,
            default: 3
        },
        fields: {
            type: Array,
            default: null
        },
        hiddenFields: {
            type: Array,
            default: null
        }
    },

    computed: {
            getCols() {
                if(this.$vuetify.breakpoint.mobile) {
                   return 12 
                }
                return 12 / this.cols 
            },
            valueEntries() {
                const entries =  Object.entries(this.value)
                const fields = Object.keys(this.value)
                .filter(field => this.fields ? this.fields.includes(field) : true)
                .filter(field => this.hiddenFields ? !this.hiddenFields.includes(field) : true)

                return entries.filter(([fieldName, fieldValue]) => {
                    return fields.includes(fieldName)
                })
            }
        }
} 
</script>