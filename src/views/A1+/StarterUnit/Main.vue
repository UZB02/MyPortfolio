<template>
        <section>
            <div class="container flex flex-wrap gap-5">
<div v-for="(item,index) in data" :key="index" @click="router.push(`${item.path}`)" class="card cursor-pointer w-full sm:w-[30%] h-48  flex flex-col items-end sm:mb-7 mb-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <span class="w-full h-full">
        <img :src="item.img" alt="" class="w-full transition ease-in-out hover:scale-95 h-full object-cover rounded-lg">
    </span>
    <span class="bg-gray-100 px-3 w-full rounded-lg">
        <h5 class="mb-2 text-2xl font-bold whitespace-nowrap overflow-hidden text-overflow-ellipsis tracking-tight text-gray-900 dark:text-white">{{ item.name }}</h5>
    </span>
</div>

            </div>
        </section>
</template>
<script setup>
import router from '@/router';
import { ref } from 'vue';
import en_uz from "../../../json/A1+/en_uz.json";
const data=[
    {
        name:"All Words",
        path:"/a1+/starter_unit/starter_unit_all_words",
        img:"https://avatars.mds.yandex.net/i?id=a48bd02edd38b69b43fbd6a2e41e60eb-4865680-images-thumbs&n=13"
    },
    {
        name:"Classroom",
        path:"/a1+/starter_unit/classroom",
        img:"https://avatars.mds.yandex.net/i?id=9bb27c302f848b802354b706f788441496f105f7-5383525-images-thumbs&n=13"
    },
    {
        name:"Colors",
        path:"/a1+/starter_unit/colors",
        img:"https://yandex-images.clstorage.net/is9X73a73/c06b88GBNh77/FxuOplkFt3SYgdM0sm3BQttyacbthn9ac9BG03iOhdtf0odalrxd3PUb_DR5mTG4BDkqAh8PWpcyEJpwQMZq3nYej5JowDdVuWSWcTdIpYNupugSzQP_mwLRY1INzpF_WlJiGqAPyu7HCBuyGy5Wf8A8qocq3stmJjZMAXXWnqiFO70XLte1ZgxD4VRib3AWm0KacK2Dvrp3QEJQLI7y6LrnZI3xjStc91tpc4msdZxjTPv325xvBOQULqW01h35ponPtYynpyaPYcN3Ir1i50mCeRFsI_9KJRBjI--MQmuqZrdswx77ruRqmCMa3BROIUzZRsu-3WcH9502BtUNakapbdYfJhdVniKzNnGsg7dLERphjhHN2oeiY8Pt7lIbqvblX3FtWa92SmrBqc8WT7Dvq8fqnz9G1Ibd5Gbm3SgmuM0WXaVHx_5w03byjuAWKTKJkO1zXxpE0aPgfXwBaYr09XwwrBiP1_lpUYnfVm3iDzrVSd8dBxcm3HTmtm-L1MgOJP3XFyVswJBEMs0jhklCKuLvQp6ZpIJywi-MoxnKZTV-wzwajUQZGcNJXRYsci-7RFrMHAdWNDy3V9RPWfb7jdZudzQ3zLMh5pAeo1SJ8inC7ePNmURhYZBtnGF5W9VFXoOtSD30u5tyqN-kLKEuyTZo7V8nt-SMp7RErPsXSdymbbZ2p_0g4HTyPbIkaYF70V9zn1inMDESX_6A6DoUhAzBjsvNlAn5kKvuVk3TLSqnuO5PFTaH3aXEtC6JhAod9k70xWbucVEE079SVgnCmYJesM7Y1sAxI5_Pgmv6V6ZvIF94zkerWOMKrzRtcWxY18pPvwWn9j6EVVUv6zcoDhfe9jUVnMIyROB98VUIMnkhHQGfiUSTolAdz_N6SbaEb2EO2-9HiLmDeX2lTCKsqwd6v81G50fftiU0HBiGyWzHzxUVRJ_xQZVQreHFadBK4EwCrJt20QEDI"
    },
      {
        name:"Numbers – cardinal ",
        path:"/a1+/starter_unit/numbers_cardinal",
        img:"https://avatars.mds.yandex.net/i?id=0934288e47ff33115c934f446c5b9db149906c80-13620566-images-thumbs&n=13"
    },
      {
        name:"Numbers – ordinal",
        path:"/a1+/starter_unit/numbers_ordinal",
        img:"https://avatars.mds.yandex.net/i?id=0934288e47ff33115c934f446c5b9db149906c80-13620566-images-thumbs&n=13"
    },
      {
        name:"Days",
        path:"/a1+/starter_unit/days",
        img:"https://avatars.mds.yandex.net/i?id=8504bf3a37e58cb3bc3fd15d981e17fc4df90fb8fa3bd5cd-12618389-images-thumbs&n=13"
    },
      {
        name:"Months",
        path:"/a1+/starter_unit/months",
        img:"https://avatars.mds.yandex.net/i?id=3dfff3709c155aab0274d0aea3bf0a6ac4a0cc1956e2e047-5220726-images-thumbs&n=13"
    },
      {
        name:"Classroom Expressions and Instructions",
        path:"/a1+/starter_unit/classroom_expressions_and_instructions",
        img:"https://avatars.mds.yandex.net/i?id=877b01866e8fa84d34bee78c50dee37b8bbad869-5232396-images-thumbs&n=13"
    },
      {
        name:"Grammar Words",
        path:"/a1+/starter_unit/grammar_words",
        img:"https://avatars.mds.yandex.net/i?id=a614781b54ce106625dc0caf1704e3e94df6f376-12726868-images-thumbs&n=13"
    },
];
</script>
<style scoped>
</style>