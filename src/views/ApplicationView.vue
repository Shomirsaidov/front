<template>
    <div class="space-y-10 mt-4">
        <div class="space-y-4">
            <div class="flex items-center space-x-3">
                <div class="p-2 bg-gray-50 border rounded-lg">
                    <img src="../assets/timer-1.svg" alt="">
                </div>
                <div>Поиск продолжается</div>
            </div>

            <div class="flex items-center space-x-3">
                <img src="../assets/calendar1.svg" width="45" alt="">
                <div class="text-xl font-bold">До 14 декабря 2024</div>
            </div>

        </div>



        <div class="space-y-4">
            <h1 class="text-2xl font-black">Назарова Сафина Абдуллоджоновна</h1>
            <div class="flex space-x-3">
                <button class="shadow-lg p-2 rounded-lg border">17 лет</button>
                <div class="flex items-center space-x-3">
                    <div class="rounded-full bg-red-500 p-1">
                      <img src="../assets/drop.svg" alt="" width="15">
                    </div>
                    <div>Цельная кровь</div>
                </div>
                <button class="shadow-lg p-2 rounded-lg border">A(II) Rh(+)</button>
            </div>

            <div class="flex items-center space-x-3">
                <img src="../assets/building-3.svg" width="30" alt="">
                <div>Центр переливания крови в Худжанде</div>
            </div>
            <div class="flex items-center space-x-3">
                <img src="../assets/location.svg" width="30" alt="">
                <div>ул.Гагарина, Худжанд, Таджикистан</div>
            </div>


            <!-- <div style="height:300px;overflow:hidden;position:relative;"><iframe style="width:100%;height:100%;border:1px solid #e6e6e6;border-radius:8px;box-sizing:border-box" src="https://yandex.ru/maps-reviews-widget/40043229541?comments"></iframe><a href="https://yandex.tj/maps/org/tsentr_perelivaniya_krovi/40043229541/" target="_blank" style="box-sizing:border-box;text-decoration:none;color:#b3b3b3;font-size:10px;font-family:YS Text,sans-serif;padding:0 20px;position:absolute;bottom:8px;width:100%;text-align:center;left:0;overflow:hidden;text-overflow:ellipsis;display:block;max-height:14px;white-space:nowrap;padding:0 16px;box-sizing:border-box">Центр переливания крови на карте Худжанда — Яндекс Карты</a></div> -->

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1061.818160207036!2d69.64046606913271!3d40.29106867750322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b1b3fe8dc555ef%3A0x28fcfae04ee9c9e0!2sTsentr%20Perelivaniya%20Krovi!5e0!3m2!1sen!2s!4v1725903120763!5m2!1sen!2s" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>




        <div class="space-y-2">
            <h1 class="text-xl font-black">Причина поиска</h1>
            <button class="shadow-lg p-2 rounded-lg border">Опухоль мозга</button>
        </div>

        <button class="md:w-2/6 w-full p-3 rounded-lg font-bold text-white" style="background: linear-gradient(90deg,#ED1A1A,#B40E0E);">Стать донором</button>



    </div>


</template>
  
<script>

export default {
    name: 'Application',
    components: {
        
    }
}
</script>
  