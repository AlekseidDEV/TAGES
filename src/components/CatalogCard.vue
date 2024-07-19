<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import IconsHeart from "./icons/IconsHeart.vue";
import {DataProduct} from "../models/dataProduct.ts";

const emits = defineEmits<{
  (e: 'changeCart', id: string, params: boolean): void
  (e: 'changeWishList', id: string, params: boolean): void
}>()
const props = defineProps<{
  product: DataProduct
}>()

const isCart = ref(false)
const isWishList = ref(false)

const currentPrice = computed(() => {
  return Math.floor(props.product.price.current_price)
})
const oldPrice = computed(() => {
  return props.product.price.old_price ? Math.floor(props.product.price.old_price) : ''
})

const addToCart = () => {
  isCart.value = true
  emits('changeCart', props.product.id, isCart.value)
}

const removeInCart = () => {
  isCart.value = false
  emits('changeCart', props.product.id, isCart.value)
}

const changeWishList = () => {
  isWishList.value = !isWishList.value
  emits('changeWishList', props.product.id, isWishList.value)
}

const storageCheck = () => {
  const dataCart = localStorage.getItem('cart') || ''
  const dataWishList = localStorage.getItem('wishList') || ''

  isCart.value = dataCart.includes(props.product.id)
  isWishList.value = dataWishList.includes(props.product.id)
}

onMounted(() => {
  storageCheck()
})

</script>

<template>
  <div class="card-product">
    <div class="card-product__cont">
      <img src="/img/img1.png" alt="product" class="card-product__img">
      <p class="card-product__code">{{ product.code }}</p>
      <div class="card-product__wrapper">
        <div class="card-product__info-card">
         <span class="card-product__name">
           {{ product.name }}
         </span>
          <div class="card-product__price">
            <span
                v-if="product.price.old_price"
                class="card-product__price-num card-product__old-price">
             {{ oldPrice }}₽
           </span>
            <span class="card-product__price-num">
             {{ currentPrice }}₽
           </span>
          </div>
        </div>
        <div class="card-product__btns">
          <a
              href="/"
              v-if="!isCart"
              @click.prevent="addToCart"
              class="card-product__btn card-product__btn-cart">
          </a>
          <a
              href="/"
              v-else
              @click.prevent="removeInCart"
              class="card-product__btn card-product__btn-add">
          </a>
          <a
              href="/"
              @click.prevent="changeWishList"
              class="card-product__btn"
          >
            <IconsHeart
                :color="isWishList ? '#FF0000' : '#000000'"
            />
          </a>
        </div>
      </div>
      <span
          v-if="product.price.old_price"
          class="card-product__sale">
       Скидка
     </span>
    </div>
  </div>
</template>

<style scoped lang="scss">

.card-product {
  max-width: 336px;
  width: 100%;
  border: 1px solid rgb(238, 238, 238);
  @media (max-width: 865px) {
    max-width: 100%;
  }

  &product__img {
    margin: auto;
  }

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
    height: 14px;
  }

  &__btns {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  &__sale {
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