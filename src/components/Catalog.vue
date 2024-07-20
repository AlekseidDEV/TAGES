<script setup lang="ts">
import CatalogSelect from "./CatalogSelect.vue";
import CatalogCard from "./CatalogCard.vue";
import {useProductStore} from "../store";
import {onMounted, Ref, ref} from "vue";

const store = useProductStore()
const arrProduct = store.getProduct

let arrCart: Ref<string[]> = ref([])
let arrWish: Ref<string[]> = ref([])

const updateCart = (id: string, params: boolean) => {
  if (params) {
    arrCart.value.push(id)
  } else {
    arrCart.value = arrCart.value.filter((elem) => elem !== id)
  }

  localStorage.setItem('cart', JSON.stringify(arrCart.value))
}

const updateWishList = (id: string, params: boolean) => {
  if (params) {
    arrWish.value.push(id)
  } else {
    arrWish.value = arrWish.value.filter((elem) => elem !== id)
  }

  localStorage.setItem('wishList', JSON.stringify(arrWish.value))
}


onMounted(() => {
  const dataCart = localStorage.getItem('cart') || ''
  const dataWishList = localStorage.getItem('wishList') || ''

  arrCart.value = JSON.parse(dataCart)
  arrWish.value = JSON.parse(dataWishList)

  store.getProductDb()
})
</script>

<template>
  <div class="breadcrumbs">
    <span class="breadcrumbs__link">Главная</span>
    <span class="breadcrumbs__link">Системы хранения</span>
    <span class="breadcrumbs__link breadcrumbs__link-active">Комплекты стеллажных систем</span>
  </div>
  <div class="catalog">
    <h1 class="catalog__title">Комплекты стеллажных систем</h1>
    <CatalogSelect/>
    <div class="catalog__products">
      <CatalogCard
          v-for="product of arrProduct"
          :key="product.id"
          :product="product"
          @changeCart="updateCart"
          @changeWishList="updateWishList"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.breadcrumbs {
  display: flex;
  gap: 5px 20px;
  flex-wrap: wrap;

  &__link {
    font-family: SF UI Text, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    text-align: left;
    color: #828282;
    position: relative;
    cursor: pointer;

    &:not(:last-child)::after {
      position: absolute;
      content: '/';
      top: 0;
      right: -14px;
      font-size: 20px;
    }
  }

  &__link-active {
    color: black;
  }

  @media (max-width: 500px) {
    &__link {
      font-size: 14px;
    }
  }
}

.catalog {
  &__title {
    margin-top: 36px;
    color: rgb(0, 0, 0);
    font-family: SF Pro Display, sans-serif;
    font-size: 36px;
    font-weight: 600;
    line-height: 48px;
    text-align: left;
    @media (max-width: 500px) {
      font-size: 28px;
      line-height: normal;
    }
  }

  &__products {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(270px, 0.6fr));
    grid-auto-flow: dense;
    grid-gap: 40px;
    @media (min-width: 1425px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 1250px) {
      grid-gap: 20px;
    }
    @media (max-width: 575px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>