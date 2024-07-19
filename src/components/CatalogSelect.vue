<script setup lang="ts">
import {ref} from "vue";

const sortPrice = ref('1')
const sortMaterial = ref('1')
</script>

<template>
<div class="filter">
  <div class="filter__block">
    <div class="filter__wrapper-select">
      <span>Сортировать по:</span>
      <span class="filter__icon-select"></span>
      <select class="filter__select filter__select-font" v-model="sortPrice">
        <option value="1" selected>Цена по возрастанию</option>
        <option value="2">Цена по убыванию</option>
      </select>
    </div>
    <div class="filter__wrapper-select">
      <span>Материал</span>
      <span class="filter__icon-select"></span>
      <select class="filter__select filter__select-font" v-model="sortMaterial">
        <option value="1" selected>выаыв</option>
        <option value="2">ываыва</option>
      </select>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
  .filter{
    margin-top: 32px;
    margin-bottom: 41px;
    &__block{
      display: flex;
      gap: 0px 24px;
    }
    &__select{
      -webkit-appearance: none;
      appearance: none;
      border: none;
      background: rgb(242, 242, 242);
      width: 288px;
      height: 40px;
      padding: 10px 0px 10px 16px;
      cursor: pointer;
    }
    &__icon-select{
      display: flex;
      background: url("/icons/chevron-bottom.svg");
      width: 24px;
      height: 24px;
      position: absolute;
      right: 10px;
      top: 50%;
      pointer-events: none;
    }
    &__select-font{
      color: rgb(0, 0, 0);
      font-family: SF Pro Display, sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 150%;
      text-align: left;
      outline: none;
    }
    &__wrapper-select{
      display: flex;
      flex-direction: column;
      position: relative;
      span {
        color: rgb(79, 79, 79);
        font-family: SF Pro Display, sans-serif;
        font-size: 12px;
        font-weight: 400;
        line-height: 150%;
        text-align: left;
        margin-bottom: 6px;
      }
    }
  }
</style>