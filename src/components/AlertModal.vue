<template>
  <transition name="slide"> <div class="alert alert-success text-start" role="alert" id="successAlert"  v-if="successAlert">     
    <i class="bi bi-check2 ms-2 me-2"></i> {{toastMsg}} 
  </div></transition>
</template>
<script>

export default {
  props:['successAlert','toastMsg'],
  data() {
      return {
        
      };
    },
    mounted() {
       
    },
  methods: {
   
  },
};
</script>

<style scoped>
.slide-enter-active {
  animation: slideIn 0.5s forwards;
}


.slide-leave-active {
  animation: slideOut 0.75s forwards;
}

@keyframes slideOut {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
}

  #successAlert {
    position: fixed;
    padding:8px;
    min-width: 150px;
    bottom: 0;
    right: 20px;
    margin: 20px;
    animation: slideIn 0.5s forwards;
  }
  
  .myNavigation{
    cursor :pointer;
  }

  @keyframes slideIn {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }


  
  @keyframes fadeOut {
    from {
      opacity: 1;
      
    }
    to {
      opacity: 0;
    }
  }
</style>

