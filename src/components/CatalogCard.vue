<script setup lang="ts">
import {ref} from "vue";
import IconsHeart from "./icons/IconsHeart.vue";

const isCart = ref(false)
const isWishList = ref(false)
</script>

<template>
  <div class="card-product">
    <div class="card-product__cont">
      <img src="/img/img1.png" alt="product" class="card-product__img">
      <p class="card-product__code">kfdsf211</p>
      <div class="card-product__wrapper">
        <div class="card-product__info-card">
         <span class="card-product__name">
           Ручка дверная
         </span>
          <div class="card-product__price">
            <span class="card-product__price-num card-product__old-price">
             700₽
           </span>
            <span class="card-product__price-num">
             355₽
           </span>
          </div>
        </div>
        <div class="card-product__btns">
          <span v-if="!isCart" class="card-product__btn card-product__btn-cart"></span>
          <span v-else class="card-product__btn card-product__btn-add"></span>
          <IconsHeart
            :color="isWishList ? '#FF0000' : '#000000'"
          />
        </div>
      </div>
      <span class="card-product__sale">
       Скидка
     </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
img {
  margin: auto;
}

.card-product {
  max-width: 336px;
  width: 100%;
  border: 1px solid rgb(238, 238, 238);

  &__cont {
    display: flex;
    align-items: start;
    flex-direction: column;
    justify-content: center;
    padding: 9px 12px 9px 12px;
    position: relative;
  }

  &__btn {
    width: 36px;
    height: 36px;
    display: block;
  }

  &__wrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  &__btn-cart {
    background: url("/icons/cart.svg");
    cursor: pointer;
  }

  &__btn-add {
    background: url("/icons/addCart.svg");
    cursor: pointer;
  }

  &__name {
    color: rgb(0, 0, 0);
    font-family: SF UI Text, sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 140%;
    text-align: left;
  }

  &__price {
    margin-top: 10px;
  }

  &__price-num {
    font-family: SF UI Text, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
    text-align: left;
  }

  &__old-price {
    color: rgb(136, 136, 136);
    text-decoration-line: line-through;
    margin-right: 9px;
  }

  &__code {
    color: rgb(136, 136, 136);
    font-family: SF UI Text, sans-serif;
    font-size: 10px;
    font-weight: 400;
    line-height: 140%;
    text-align: left;
    margin-bottom: 5px;
  }

  &__btns {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  &__sale{
    position: absolute;
    padding: 3px 16px 3px 16px;
    background: rgb(235, 87, 87);
    top: 11px;
    left: 0;
    color: rgb(255, 255, 255);
    font-family: SF Pro Display, sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 130%;
    text-align: left;
  }
}
</style>