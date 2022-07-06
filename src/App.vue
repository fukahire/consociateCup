<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
<div class="content">  
  <section class="bgDual flex flex-col items-center md:block">
        <div class="md:bgSlope md:h-screen w-[90%] md:w-full flex justify-end items-center relative">
            <!-- 左邊裝飾 -->
            <div class="bg-pink-400 left-0"></div>
            <div>
                <!-- 手機版標題 -->
                <div class="md:hidden flex flex-col items:center text-center my-10">
                    <h3 class="font-sans font-bold text-4xl ">天下統一武器大會</h3>
                    <h5 class="font-sans font-black">Lorem ipsum dolor sit amet, conse</h5>
                </div>
                <!-- 中間內容 -->
                <div id="app"
                    class="md:my-20 md:my-auto px-4 lg:px-20 py-10 bg-white relative z-10 flex flex-col justify-center items-center rounded-md md:rounded-l-xl md:rounded-r-none shadow-xl gap-4">
                    <!-- 標題 -->
                    <div
                        class="md:absolute md:-top-14 md:right-10 hidden md:flex flex-col md:flex-row items:center md:items-end md:gap-2">
                        <h3 class="font-sans font-bold text-4xl ">天下統一武器大會</h3>
                        <h5 class="font-sans font-black">Lorem ipsum dolor sit amet, conse</h5>
                    </div>
                    <!-- 內容 -->
                    <!-- 按鈕 -->
                    <div class="flex justify-center mb-8">
                        <div
                            class="font-sans rounded-3xl w-40 h-12 text-3xl font-bold text-mainred text-center flex justify-center items-center">
                            <router-link to="/consociatecup/">參賽規則</router-link>
                        </div>
                        <div
                            class="font-sans rounded-3xl w-40 h-12 text-3xl font-bold text-mainred text-center flex justify-center items-center">
                            <router-link to="/new">最新消息</router-link>
                        </div>
                    </div>
                    <!-- 渲染route的位置 -->
                    <router-view />
                    
                    <div
                        class="md:h-auto flex justify-center md:absolute left-1/2 md:-translate-x-2/4 md:-bottom-6 flex-col md:flex-row items-center gap-2 md:gap-12 ">
                        <a href="https://discord.gg/rVySqaET9k"
                            class="block font-sans rounded-3xl w-40 h-12 text-lg bg-slate-500 font-medium text-white shadow-lg text-center leading-[48px]">聯絡我們</a>
                        <a
                            class="font-sans rounded-3xl w-40 h-12 text-lg bg-mainred font-medium text-white shadow-lg text-center leading-[48px]">我要報名</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
  
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
