<template>
  <div>

      <v-container>

      <v-row>

        <v-col cols="12">
          <v-select
            :value="selectedDomain"
            @input="selectedDomainChanged"
            label="Domains"
            :items="domaines"
            clearable
          />
        </v-col>

        <v-col cols="12">
          <v-text-field 
            v-model="searchValue"
            label="Search"
            clearable
            append-inner-icon="mdi-magnify"
          />
        </v-col>
      </v-row>
 
      <v-row class="d-flex justify-center "   >
        <div :md="6" :lg="6" v-for="enseignant in getEnseignants" :key="enseignant.id" class="my-4" >
          <v-card 

             class="card rounded-xl"
             elevation="15" 
            rounded
            style="margin: 10px;"
            
            @click="selectedEnseignantHandler(enseignant)"
          >
          <!-- <div style="background-color: aqua; width: 100%; position: absolute;"> -->
         <v-row align="center">
          <div style="margin: 20px;">

          
            <img v-if="enseignant.Sexe === 'F'" src="../assets/femme.png" :height="80" cover />
            <img v-else-if="enseignant.Sexe === 'M'" src="@/assets/homme.png" :height="80" cover />
          </div>
            <v-col>
              <DataRenderer :value="enseignant" :cols="2"  :fields="['Nom', 'filier']" />
            </v-col>
          </v-row>        
          </v-card>
        </div>
      </v-row>

  </v-container>
    <!-- </div> -->

      <v-dialog v-model="dialog" width="90%">
        <v-card>
          <v-card-title>
            <span class="headline">Enseignant</span>
          </v-card-title>

          <v-card-text>
            <Enseignant :value="selectedEnseignant" :cols="4" />
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>  
    </div>

  </template>
  
  <script>
  import { getEnsData, Domaines, searchEnsData } from '@/data/enseignants'; 
  import DataRenderer from '@/components/reusable-components/DataRenderer.vue';
  import Enseignant from './Enseignant.vue'; 
  export default{
    name:'EnseignantsPage',
    data(){
        return{
          enseignants:[],
          show: false,
          dialog: false,
          selectedEnseignant: null,
          searchValue: '',
          domaines: Domaines,
          selectedDomain: null,
          
     
        }
    },
    components: {
      Enseignant,
      DataRenderer
    },
    computed: {
      totalItems() {
      return this.enseignants.length;
    },


      getEnseignants() {
 
        if(this.searchValue) {
          return searchEnsData(this.searchValue).slice(0,14)
        }
        if(this.selectedDomain) {
          const fieldName = 'Domaine'
          return this.enseignants.filter(ens => ens[fieldName].match(this.selectedDomain)).slice(0,14)
        }
        return this.enseignants.slice(0,14)
      
    },

    },
    methods:{

      goToEnseignant(id){
        // filter
        //test commit 1.0.0
        this.$router.push({ name: 'Enseignant', params: {id:id} });

      },
      selectedEnseignantHandler(enseignant) {
        // filter
        this.selectedEnseignant = enseignant
        this.dialog = true
      },
      selectedDomainChanged(event) {
        this.selectedDomain = event
      },
      searchData() {
        return searchEnsData(value)
      } 

    },
    created(){

      this.enseignants = getEnsData()
      
    },


  }
  </script>
  
  <style >


  .card {
    
    background-image: url(../assets/uvMIla.jpg);
    filter: blur(200px);
  -webkit-filter: blur(200px);
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(10%);
  background-size: cover;

    /* background-image: linear-gradient(rgba(231, 138, 95, 0.74),rgba(233, 194, 68, 0.692), rgba(37, 173, 32, 0.459)); */
}
.enseignants{
  font-weight: 600;
  padding: 10PX;
    display: flex;
    flex-wrap: wrap;
}
.enseignants-card{
    width: 25%;
 border-radius: 15px;
 margin: 20px;
 border: 1px solid black;
 padding: 15px;   
}
.enseignants-card h1{
    padding: 10px ;
}
@media (max-width :768px) {
  .post-card{
    width: 60%;

  }
}
  </style>
  