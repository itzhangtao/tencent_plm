<template>
  <div style="padding: 0px;">
  {{$store.state.count}}
   <a @click="add">叠加</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods:{
      add:function(){
          this.$store.commit("add")
      }
  }
};
</script>
