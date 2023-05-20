<template>
    <div>
      hello home page 
      {{count }}
      {{ name }}
    </div>
   
  </template>
  
  <script>
  import { mapState } from 'vuex';
  export default{
    name:'HomePage',
    computed: {
      ...mapState([
        'count',
        'name'
      ]),
  //     methods: {
  //   ...mapActions([
  //     'incrument', // import actionName from vuex store
  //   ])
  // }
}

 
  }
  </script>
  
  <style >

  </style>
  