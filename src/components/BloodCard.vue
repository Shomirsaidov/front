<template>

  <div class="border-2 shadow-md cursor-pointer hover:border-4">
    <div class="space-y-4 text-white p-6 pb-10" style="background: linear-gradient(45deg,#9a537d,#e94046); border-bottom-right-radius: 150px; border-bottom-left-radius: 70px;">
      <div class="flex justify-between  items-center">
        
        <div class="flex items-center space-x-3">
          <div class="rounded-full bg-red-500 p-2">
            <img src="../assets/drop.svg" alt="" width="20">
          </div>
          <div>Цельная кровь</div>
        </div>

        <div>
          до 25 сентября
        </div>

      </div>

      <div class="flex justify-start">
        <button class="text-start bg-white p-3 rounded-lg text-black font-bold">
          A(II) Rh+
        </button>
      </div>

      <div class="flex justify-start">
        <h1 class="font-black text-2xl mt-3">Назарова Сафина</h1>
      </div>

    </div>

    <div class="p-6 space-y-4">
      <div class="flex items-center space-x-3">
        <img src="../assets/building-3.svg" width="30" alt="">
        <div>Центр переливания крови в Худжанде</div>
      </div>

      <div class="flex">
        <div class="mt-5">0/7 уже идут !</div>
      </div>

      <div class="space-y-4">
        <div class="text-gray-500 mt-6">Ищет</div>
        <div class="flex items-center space-x-3">
          <img src="../assets/profile-circle.svg" width="40" alt="">
          <div>Аноним</div>
        </div>
      </div>

    </div>


    

  </div>
  
</template>

<script>
export default {
  name: 'BloodCard',
}
</script>

<style scoped lang="scss">

</style>
