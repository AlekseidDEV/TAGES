import {defineStore} from "pinia";
import {computed, Ref, ref} from "vue";
import {DataProduct} from "../models/dataProduct";
import axios from "axios"
import {SelectOptions} from "../models/selectOptions.ts";

export const useProductStore = defineStore('productStore', () => {
    // state
    let arrProduct: Ref<DataProduct[]> = ref([])
    let arrOptions: Ref<SelectOptions[]> = ref([])
    let isSort = ref(false)
    let sortId = ref('')

    // actions
    const getProductDb = () => {
        axios.get('/db/items.json').then((res) => {
            arrProduct.value = res.data
        })
    }
    const getSelectOptionDb = () => {
        axios.get('/db/materials.json').then((res) => {
            arrOptions.value = res.data
        })
    }

    const sortProduct = (sort: string) => {
        isSort.value = true
        sortId.value = sort

        arrProduct.value.sort((a, b) => {
            if (sort === '1') {
                return a.price.current_price - b.price.current_price
            } else {
                return b.price.current_price - a.price.current_price
            }
        })
    }

    const filteredProduct = (id: number) => {
        axios.get('/db/items.json').then((res) => {
            arrProduct.value = res.data.filter((elem: DataProduct) => elem.material === id)

            if (isSort.value) sortProduct(sortId.value)
        })
    }

    // getters
    const getProduct = computed(() => arrProduct)
    const getOptions = computed(() => arrOptions)

    return {
        getProductDb,
        getProduct,
        getSelectOptionDb,
        getOptions,
        sortProduct,
        filteredProduct
    }
})