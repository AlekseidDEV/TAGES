<script setup lang="ts">
import CatalogSelect from "./CatalogSelect.vue";
import CatalogCard from "./CatalogCard.vue";

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
    <CatalogCard/>
  </div>
</template>

<style scoped lang="scss">
.breadcrumbs{
  display: flex;
  gap: 0px 20px;
  margin-top: 20px;
  &__link{
    font-family: SF UI Text, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    text-align: left;
    color: #828282;
    position: relative;
    cursor: pointer;
    &:not(:last-child)::after{
        position: absolute;
        content: '/';
        top: 0;
        right: -14px;
       font-size: 20px;
    }
  }
  &__link-active{
    color: black;
  }
}
.catalog{
  &__title{
    margin-top: 36px;
    color: rgb(0, 0, 0);
    font-family: SF Pro Display, sans-serif;
    font-size: 36px;
    font-weight: 600;
    line-height: 48px;
    text-align: left;
  }
}
</style>