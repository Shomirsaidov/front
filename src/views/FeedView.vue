<template>
    <div class="home ">

        <Banner/>

        <h1 class="text-2xl font-black mt-4">Срочно нужна кровь </h1>


        <div class="space-y-2 my-8 mt-4">
            <a href="/recipients/7">
                <BloodCard/>
            </a>
            <a href="/recipients/7">
                <BloodCard/>
            </a>
            <a href="/recipients/7">
                <BloodCard/>
            </a>
            <a href="/recipients/7">
                <BloodCard/>
            </a>
            <a href="/recipients/7">
                <BloodCard/>
            </a>
            <a href="/recipients/7">
                <BloodCard/>
            </a>
        </div>

    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import BloodCard from '../components/BloodCard.vue'
  import Banner from '../components/RequestBanner.vue'
  
  export default {
    name: 'HomeView',
    components: {
      BloodCard, Banner
    }
  }
  </script>
  