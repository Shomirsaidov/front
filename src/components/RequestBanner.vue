<template>

    <div class="p-8 border-2 rounded-md space-y-8" style="background: linear-gradient(120deg,#fff 60%,#C5ECFF);border-color: #C5ECFF;">
        <div class="text-xl font-bold text-red-900">Стань донором всего за два шага</div>
        <div class="flex md:space-x-3 items-end flex-wrap">

           <div>
                <div class="space-y-2">
                    <div class="flex items-center space-x-3">
                        <img src="../assets/call.svg" width="30" alt="">
                        <div class="text-gray-800 font-bold">Контакты</div>
                    </div>
                    <div>
                        <input placeholder="Введите номер телефона" class="outline-none  p-4 rounded-xl border shadow-lg font-bold" type="text">
                    </div>
                </div>
           </div>

           <div>
                <div class="space-y-2 mt-4">
                    <div class="flex items-center space-x-3">
                        <img src="../assets/calendar.svg" width="30" alt="">
                        <div class="text-gray-800 font-bold">Дата сдачи</div>
                    </div>
                    <div>
                        <input placeholder="Введите число" class="outline-none  p-4 rounded-xl border shadow-lg font-bold" type="date">
                    </div>
                </div>
            </div>
          
           <div class="mt-4">
                <button class="space-x-3 flex p-4 items-center text-white rounded-xl font-bold text-lg shadow-md" style="background: #EE1B1B;">
                    <div>Записаться</div>
                    <img src="../assets/tick-circle.svg" alt="">
                </button>
           </div>



        </div>
    </div>

</template>
  
  <script>
  export default {
    name: 'Request Banner',
  }
  </script>
  
  <style scoped lang="scss">
  
  </style>
  