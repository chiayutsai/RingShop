<template>
  <div class="container mb-15">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 ">
      <div class="col mb-10 mb-md-0">
        <p class="text-lg mb-4">品牌故事</p>
        <ul class="footer-link">
          <li class="mb-2">
            <router-link :to="`/about`">
              關於品牌
              <span class="text-light ms-2">About Us</span>
            </router-link>
          </li>
          <li>
            <router-link :to="`/contact`">
              聯絡我們
              <span class="text-light ms-2">Contact Us</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="col mb-10 mb-md-0">
        <p class="text-lg mb-4">商品專區</p>
        <ul class="footer-link">
          <li class="mb-2">
            <router-link
              :to="{
                name: 'shop',
                query: { category: '戒指' }
              }"
            >
              戒指
              <span class="text-light ms-2">Rings</span>
            </router-link>
          </li>
          <li class="mb-2">
            <router-link
              :to="{
                name: 'shop',
                query: { category: '耳環' }
              }">
              耳環
              <span class="text-light ms-2">Earrings</span>
            </router-link>
          </li>
          <li class="mb-2">
            <router-link
              :to="{
                name: 'shop',
                query: { category: '手鍊' }
              }">
              手鍊
              <span class="text-light ms-2">Bracelets</span>
            </router-link>
          </li>
          <li class="mb-2">
            <router-link
              :to="{
                name: 'shop',
                query: { category: '手錶' }
              }">
              手錶
              <span class="text-light ms-2">Watches</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{
                name: 'shop',
                query: { category: '項鍊' }
              }">
              項鍊
              <span class="text-light ms-2">Necklaces</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="col">
        <p class="text-lg mb-4">聯絡我們</p>
        <ul class="mb-5">
          <li class="mb-2">電話 : 02 213 1234</li>
          <li class="mb-2">E-mail : ringring@gmail.com</li>
          <li>MON - FRI : 9:00 am - 18:00 pm</li>
        </ul>
        <div class="d-flex social-icon">
          <a class="scale-hover me-5" href="#" target="_blank">
            <span><img src="@/assets/images/fb.svg" alt="fb" /></span>
          </a>
          <a class="scale-hover me-5" href="#" target="_blank">
            <span><img src="@/assets/images/ig.svg" alt="ig" /> </span>
          </a>
          <a class="scale-hover" href="#" target="_blank">
            <span><img src="@/assets/images/line.svg" alt="line" /> </span>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="text-center text-xs text-light py-4">
    <p>Copyright ©RingRing All Rights Reserved. Designed by ChiaYu</p>
  </div>
</template>
