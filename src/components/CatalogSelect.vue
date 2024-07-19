<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import {useProductStore} from "../store";

const store = useProductStore()
const options = store.getOptions

const sortPrice = ref('')
const sortMaterial = ref('')

watch(sortPrice, (newValue) => {
  store.sortProduct(newValue)
})
watch(sortMaterial, (newValue) => {
  store.filteredProduct(+newValue)
})

onMounted(() => {
  store.getSelectOptionDb()
})
</script>

<template>
  <div class="filter">
    <div class="filter__block">
      <div class="filter__wrapper-select">
        <span>Сортировать по:</span>
        <span class="filter__icon-select"></span>
        <select class="filter__select filter__select-font" v-model="sortPrice">
          <option value="" disabled hidden>Цена по возрастанию</option>
          <option value="1">Цена по возрастанию</option>
          <option value="2">Цена по убыванию</option>
        </select>
      </div>
      <div class="filter__wrapper-select">
        <span>Материал</span>
        <span class="filter__icon-select"></span>
        <select class="filter__select filter__select-font" v-model="sortMaterial">
          <option value="" disabled hidden>Металл</option>
          <option
              v-for="option of options"
              :key="option.id"
              :value="option.id"
          >
            {{ option.name }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.filter {
  margin-top: 32px;
  margin-bottom: 41px;

  &__block {
    display: flex;
    gap: 25px 24px;
  }

  &__select {
    -webkit-appearance: none;
    appearance: none;
    border: none;
    background: rgb(242, 242, 242);
    width: 288px;
    max-width: 100%;
    height: 40px;
    padding: 10px 0px 10px 16px;
    cursor: pointer;
  }

  &__icon-select {
    display: flex;
    background: url("/icons/chevron-bottom.svg");
    width: 24px;
    height: 24px;
    position: absolute;
    right: 10px;
    top: 50%;
    pointer-events: none;
  }

  &__select-font {
    color: rgb(0, 0, 0);
    font-family: SF Pro Display, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    text-align: left;
    outline: none;
  }

  &__wrapper-select {
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

  @media (max-width: 615px) {
    &__select {
      width: 220px;
    }
  }
  @media (max-width: 485px) {
    &__block {
      flex-direction: column;
      max-width: 300px;
    }
    &__select {
      width: 300px;
    }
  }
}
</style>