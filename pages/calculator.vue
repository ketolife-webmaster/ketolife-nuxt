<template>
  <div>
    <div class="container my-32">
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h1 class="text-xl font-semibold text-gray-900">Pan de Psyllium</h1>
          <p class="mt-2 text-sm text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            quis ducimus dolores!
          </p>
        </div>
        <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <!-- <button
            type="button"
            class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            Add user
          </button> -->
        </div>
      </div>
      <div class="flex flex-col mt-8">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"
          >
            <div
              class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"
            >
              <table class="min-w-full divide-y divide-gray-300">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Nombre
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Proteinas <span class="ml-2 text-xs">gr</span>
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Grasas <span class="ml-2 text-xs">gr</span>
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Carbohidratos <span class="ml-2 text-xs">gr</span>
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Fibra <span class="ml-2 text-xs">gr</span>
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Calorías <span class="ml-2 text-xs">cal</span>
                    </th>
                  </tr>
                </thead>

                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="(ingrediente, index) in ingredientes" :key="index">
                    <td
                      class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"
                    >
                      {{ ingrediente.nombre }}
                      <span class="text-xs"
                        >({{ ingrediente.cantidad }}
                        {{ ingrediente.unidad }})</span
                      >
                    </td>
                    <td
                      class="px-3 py-4 text-sm text-gray-500 whitespace-nowrap"
                    >
                      {{ ingrediente?.table?.protein }}
                    </td>
                    <td
                      class="px-3 py-4 text-sm text-gray-500 whitespace-nowrap"
                    >
                      {{ ingrediente?.table?.fat }}
                    </td>
                    <td
                      class="px-3 py-4 text-sm text-gray-500 whitespace-nowrap"
                    >
                      {{ ingrediente?.table?.carbohydrate }}
                    </td>
                    <td
                      class="px-3 py-4 text-sm text-gray-500 whitespace-nowrap"
                    >
                      {{ ingrediente?.table?.fiber }}
                    </td>
                    <td
                      class="px-3 py-4 text-sm text-gray-500 whitespace-nowrap"
                    >
                      {{ ingrediente?.table?.calories }}
                    </td>
                  </tr>
                </tbody>

                <tfoot class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="py-3.5 pl-4 pr-3 text-left text-sm font-bold text-gray-900 sm:pl-6"
                    >
                      Total
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-bold text-gray-900"
                    >
                      {{ totales.protein }}
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-bold text-gray-900"
                    >
                      {{ totales.fat }}
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-bold text-gray-900"
                    >
                      {{ totales.carbohydrate }}
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      {{ totales.fiber }}
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      {{ totales.calories }}
                    </th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalculatorPage',

  data() {
    return {
      supplies: [],
      unidades: 3,
      ingredientes: [
        {
          id: '6ae0fdd2-69a6-42d2-9862-e765d9d7f2e3',
          nombre: 'Harina de Almendras',
          cantidad: 150,
          unidad: 'grams',
        },
        {
          id: 'adc817ab-2359-426a-9cdd-36f683ee9e2d',
          nombre: 'Psyllium',
          cantidad: 40,
          unidad: 'grams',
        },
        {
          id: '0407ab1c-3bd8-4216-b0c3-c97213e25fc8',
          nombre: 'Vinagre de Manzana',
          cantidad: 10,
          unidad: 'mililiters',
        },
        {
          id: '69f6f03e-ab3f-42e3-a85f-f161baad3193',
          nombre: 'Clara de Huevos',
          cantidad: 3,
          unidad: 'units',
        },
        {
          id: '26ce0164-7660-4629-ae31-3d44d9b7f42c',
          nombre: 'Polvo de Hornear',
          cantidad: 5,
          unidad: 'grams',
        },
        {
          id: 'c79337ed-4721-404a-bb36-236a477f3c70',
          nombre: 'Ajonjolí',
          cantidad: 5,
          unidad: 'grams',
        },
      ],

      totales: {
        prociones: 3,
        protein: 0,
        fat: 0,
        carbohydrate: 0,
        fiber: 0,
        calories: 0,
      },
    }
  },

  // async fetch() {
  //   const supplies = await this.$calls.items({
  //     collection: 'supplies',
  //     filter: {
  //       id: {
  //         _in: this.ingredientes.map((x) => x.id),
  //       },
  //     },
  //   })

  //   this.supplies = supplies.data
  //   // TODO: on 404, redirects
  // },

  beforeMount() {
    this.ingredientes.forEach((elem, index) => {
      const supply = this.supplies.filter((x) => x.id === elem.id)[0]

      const protein = parseFloat(
        ((elem.cantidad / supply.portion) * supply.protein).toFixed(2)
      )
      const fat = parseFloat(
        ((elem.cantidad / supply.portion) * supply.fat).toFixed(2)
      )
      const carbohydrate = parseFloat(
        ((elem.cantidad / supply.portion) * supply.carbohydrate).toFixed(2)
      )
      const fiber = parseFloat(
        ((elem.cantidad / supply.portion) * supply.fiber).toFixed(2)
      )

      const calories = parseFloat(
        (protein * 4 + fat * 9 + carbohydrate * 4).toFixed(2)
      )

      this.ingredientes[index].table = {
        protein,
        fat,
        carbohydrate,
        fiber,
        calories,
      }

      this.totales.protein = this.totales.protein + protein
      this.totales.fat = this.totales.fat + fat
      this.totales.carbohydrate = this.totales.carbohydrate + carbohydrate
      this.totales.fiber = this.totales.fiber + fiber
      this.totales.calories = this.totales.calories + calories
    })
  },
}
</script>
