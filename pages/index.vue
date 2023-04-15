<template>
  <div>
    <section id="herobanner" class="relative">
      <div class="absolute inset-x-0 bottom-0 h-screen bg-gray-100"></div>

      <div class="relative sm:overflow-hidden">
        <div class="absolute inset-0">
          <img
            v-animate-on-scroll=""
            class="object-cover object-center w-screen h-screen"
            src="/AdobeStock_413772753.webp"
            alt=""
          />
          <!-- <div class="absolute inset-0 bg-indigo-700 mix-blend-multiply"></div> -->
        </div>
        <div
          class="relative flex items-center justify-center lg:translate-x-[20%] lg:bg-transparent transform h-screen px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 mt-[40px]"
        >
          <div class="p-5 bg-white/75 lg:bg-transparent lg:p-0">
            <h2
              v-animate-on-scroll="{ type: 'fadeInUp' }"
              class="text-4xl font-bold tracking-tight text-center"
            >
              <span class="block text-4xl text-primary font-amatic lg:text-6xl"
                >Dulces bocados para ti</span
              >
              <span
                class="block tracking-widest text-black uppercase sm:text-6xl"
                >sabrosos</span
              >
            </h2>

            <span
              v-animate-on-scroll="{ type: 'fadeInUp', delay: 1 }"
              class="divide center primary"
            ></span>
            <p
              v-animate-on-scroll="{ type: 'fadeInUp' }"
              class="max-w-md mx-auto mt-6 text-lg italic text-center sm:max-w-2xl"
            >
              En la cocina de ketolife estamos comprometidos con platos
              saludables que te permitan dejar de sacrificar el sabor por salud,
              encontrarás esa mezcla en toda nuestra panadería, postres y mas.
            </p>
            <div
              v-animate-on-scroll="{ type: 'fadeInUp' }"
              class="max-w-sm mx-auto mt-10 sm:flex sm:max-w-none sm:justify-center"
            >
              <div
                class="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-6 sm:space-y-0"
              >
                <nuxt-link to="/shop" class="btn primary"
                  >Comprar ahora</nuxt-link
                >
                <a
                  href="https://www.instagram.com/ketolife_energia_y_salud/"
                  target="_blank"
                  class="btn white"
                  >Sobre nosotros</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative py-16 overflow-hidden">
      <img
        v-animate-on-scroll=""
        src="/248-2487303_falling-coffee-beans-png-transparent.png"
        alt=""
        class="absolute right-0 hidden transform -translate-y-1/2 opacity-0 pointer-events-none top-1/2 -translate-x-1/3 lg:block"
      />
      <img
        v-animate-on-scroll=""
        src="/istockphoto-1292169577-612x612.png"
        alt=""
        class="hidden lg:block absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/3 transform rotate-[90deg] opacity-0 pointer-events-none"
      />
      <div class="container">
        <div class="relative">
          <h2
            v-animate-on-scroll="{ type: 'fadeInUp' }"
            class="text-4xl font-bold tracking-tight text-center"
          >
            <span class="block text-4xl text-primary font-amatic lg:text-6xl"
              >sabemos que</span
            >
            <span class="block tracking-widest text-black uppercase sm:text-6xl"
              >la comida es arte</span
            >
          </h2>

          <span
            v-animate-on-scroll="{ type: 'fadeInUp', delay: 1 }"
            class="divide center primary"
          ></span>

          <div
            v-animate-on-scroll="{ type: 'fadeInUp' }"
            class="mx-auto text-xl italic text-center lg:max-w-3xl"
          >
            <p>
              Transforma tu día a día con una alimentación con objetivos e
              inteligente, alcanza tus metas de manera saludable y deliciosa.
            </p>
          </div>
          <div
            v-animate-on-scroll="{ type: 'fadeInUp' }"
            class="flex items-center justify-center mt-6"
          >
            <img
              src="/signature.svg"
              class="w-52 transform rotate-[35deg] pointer-events-none"
              alt="CEO's KetoLife Signature"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="relative pt-16 pb-32">
      <div class="container">
        <div class="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <div
              v-animate-on-scroll="{ type: 'fadeInUp' }"
              class="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1"
            >
              <img
                src="https://bf9mpgu8.directus.app/assets/65c69a99-9ea0-4bc8-a0ab-8a91677fff44"
                class="object-cover object-center shadow-2xl pointer-events-none rounded-3xl"
                alt=""
              />
            </div>
          </div>
          <div class="flex items-center">
            <div v-animate-on-scroll="{ type: 'fadeInUp' }">
              <h2 class="text-4xl font-bold tracking-tight text-left">
                <span
                  class="block text-4xl text-primary font-amatic lg:text-6xl"
                  >Una experiencia deliciosa</span
                >
                <span
                  class="block tracking-widest text-black uppercase sm:text-6xl"
                  >Cheesecakes</span
                >
              </h2>

              <span
                v-animate-on-scroll="{ type: 'fadeInUp', delay: 1 }"
                class="mx-0 divide left primary"
              ></span>

              <div
                v-animate-on-scroll="{ type: 'fadeInUp' }"
                class="mx-auto text-xl italic lg:max-w-3xl"
              >
                <p>
                  Esta cheesecake se caracteriza por su suave y cremoso sabor a
                  queso, combinado con una base de galleta keto. Además, se
                  elabora con ingredientes saludables como huevos, queso crema y
                  edulcorantes naturales, lo que la hace apta para aquellos que
                  siguen una dieta baja en carbohidratos y/o sin gluten. Y lo
                  mejor de todo es que siempre está disponible, por lo que
                  puedes disfrutar de un postre saludable y delicioso en
                  cualquier momento.
                </p>
              </div>

              <div
                v-animate-on-scroll="{ type: 'fadeInUp' }"
                class="max-w-sm mx-auto mt-10 sm:flex sm:max-w-none sm:justify-start"
              >
                <div
                  class="space-y-4 sm:inline-grid sm:grid-cols-2 sm:gap-6 sm:space-y-0"
                >
                  <a href="#" class="btn primary">Comprar ahora</a>
                  <a href="#" class="btn white">Ver producto</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative py-16 bg-gray-50">
      <div class="container">
        <div class="relative">
          <h2
            v-animate-on-scroll="{ type: 'fadeInUp' }"
            class="text-3xl font-bold tracking-tight text-center"
          >
            <span class="block text-4xl text-primary font-amatic lg:text-6xl"
              >porque nos importa</span
            >
            <span class="block tracking-widest text-black uppercase sm:text-6xl"
              >especificaciones</span
            >
          </h2>

          <span
            v-animate-on-scroll="{ type: 'fadeInUp', delay: 1 }"
            class="divide center primary"
          ></span>

          <div class="mt-4">
            <div class="flex -mx-4 overflow-x-auto sm:mx-0">
              <div class="flex-auto px-4 border-b border-gray-200 sm:px-0">
                <div
                  class="flex justify-center -mb-px space-x-10"
                  aria-orientation="horizontal"
                  role="tablist"
                >
                  <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
                  <button
                    v-for="(especification, index) in especifications"
                    :id="`features-tab-${index}`"
                    :key="index"
                    v-animate-on-scroll="{ type: 'fadeInUp' }"
                    class="py-6 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-tertiary hover:border-tertiary whitespace-nowrap"
                    :class="[
                      {
                        '!border-primary !text-primary':
                          index === currentEspecification,
                      },
                    ]"
                    aria-controls="features-panel-1"
                    role="tab"
                    type="button"
                    @click.prevent="currentEspecification = index"
                  >
                    {{ especification.btnText }}
                  </button>
                </div>
              </div>
            </div>

            <div
              :id="`features-panel-${currentEspecification}`"
              v-animate-on-scroll="{ type: 'fadeInUp' }"
              class="pt-10 space-y-16 lg:pt-16"
              :aria-labelledby="`features-tab-${currentEspecification}`"
              role="tabpanel"
              tabindex="0"
            >
              <div
                class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8"
              >
                <div class="mt-6 lg:col-span-5 lg:mt-0">
                  <h2 class="text-4xl font-bold tracking-tight text-left">
                    <span
                      class="block text-3xl text-primary font-amatic lg:text-5xl"
                      >{{
                        especifications?.[currentEspecification]?.title
                      }}</span
                    >
                    <span
                      class="block tracking-widest text-black uppercase sm:text-4xl"
                      >{{
                        especifications?.[currentEspecification]?.btnText
                      }}</span
                    >
                  </h2>
                  <p class="mx-0 mt-6 text-xl italic text-left lg:max-w-3xl">
                    {{ especifications?.[currentEspecification]?.description }}
                  </p>
                </div>
                <div class="lg:col-span-7">
                  <div
                    class="overflow-hidden bg-gray-100 shadow-xl rounded-3xl max-h-[500px] aspect-w-1 aspect-h-1"
                  >
                    <img
                      :src="`/features/${especifications?.[currentEspecification]?.image}`"
                      :alt="especifications?.[currentEspecification]?.btnText"
                      class="object-cover object-center w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SectionHighlightProducts />

    <section class="relative pb-16">
      <div
        class="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
      >
        <div
          v-animate-on-scroll="{ type: 'fadeInUp' }"
          class="relative px-6 py-10 overflow-hidden shadow-xl rounded-2xl bg-secondary sm:px-12 sm:py-20"
        >
          <div
            aria-hidden="true"
            class="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
          >
            <svg
              class="absolute inset-0 w-full h-full"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 1463 360"
            >
              <path
                class="text-primary text-opacity-30"
                fill="currentColor"
                d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
              />
              <path
                class="text-primary text-opacity-40"
                fill="currentColor"
                d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
              />
            </svg>
          </div>
          <div class="relative">
            <div class="sm:text-center">
              <h2
                class="text-5xl font-bold tracking-tight text-white sm:text-6xl font-amatic"
              >
                Reciba una notificación de nuestro lanzamiento
              </h2>
              <p class="max-w-2xl mx-auto mt-6 text-lg text-paragraph">
                Sagittis scelerisque nulla cursus in enim consectetur quam.
                Dictum urna sed consectetur neque tristique pellentesque.
              </p>
            </div>
            <form action="#" class="mt-12 sm:mx-auto sm:flex sm:max-w-lg">
              <div class="flex-1 min-w-0">
                <label for="cta-email" class="sr-only"
                  >Correo electrónico</label
                >
                <input
                  id="cta-email"
                  type="email"
                  class="w-full px-3 py-4 bg-white border-gray-300 rounded-md shadow-sm lock placeholder-tertiary text-paragraph focus:border-primary focus:ring-primary sm:text-sm"
                  placeholder="Introduzca su correo electrónico"
                />
              </div>
              <div class="mt-4 sm:mt-0 sm:ml-3">
                <button type="submit" class="btn primary">Notificarme</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <div class="relative overflow-hidden">
      <img
        v-animate-on-scroll=""
        src="/cocoa-powder-isolated-white-background_269410-1560.webp"
        alt=""
        class="absolute right-0 z-10 hidden w-1/2 transform -translate-y-1/2 pointer-events-none top-1/3 lg:block translate-x-1/3"
      />

      <section class="relative py-16 bg-gray-50">
        <div class="container">
          <div class="relative">
            <h2
              v-animate-on-scroll="{ type: 'fadeInUp' }"
              class="text-4xl font-bold tracking-tight text-center"
            >
              <span class="block text-4xl text-primary font-amatic lg:text-6xl"
                >que dijiste de nosotros</span
              >
              <span
                class="block tracking-widest text-black uppercase sm:text-6xl"
                >Testimonios</span
              >
            </h2>

            <span
              v-animate-on-scroll="{ type: 'fadeInUp', delay: 1 }"
              class="divide center primary"
            ></span>

            <div class="slider">
              <div
                v-animate-on-scroll="{ type: 'fadeInUp' }"
                class="mx-auto text-xl italic text-center lg:max-w-3xl"
              >
                <p class="h-32 overflow-y-auto">
                  {{ testimonials?.[currentTestimonial]?.quote }}
                </p>
                <h3
                  class="mt-3 text-3xl not-italic font-bold uppercase font-amatic text-secondary"
                >
                  {{ testimonials?.[currentTestimonial]?.name }}
                </h3>
              </div>

              <ul
                v-animate-on-scroll="{ delay: 1 }"
                class="flex items-center justify-center mt-6 space-x-3"
              >
                <button
                  v-for="(item, index) in testimonials"
                  :key="index"
                  :class="[
                    'rounded-full h-3 w-3 bg-tertiary transition-all ease-in-out duration-300 hover:bg-primary',
                    {
                      '!bg-primary transform scale-125':
                        index === currentTestimonial,
                    },
                  ]"
                  @click.prevent="currentTestimonial = index"
                />
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="relative py-16 overflow-hidden">
        <div class="container">
          <div class="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <div class="relative">
                <h2
                  v-animate-on-scroll="{ type: 'fadeInUp' }"
                  class="text-4xl font-bold tracking-tight"
                >
                  <span
                    class="block text-4xl text-primary font-amatic lg:text-6xl"
                    >come or leave a note</span
                  >
                  <span
                    class="block tracking-widest text-black uppercase sm:text-6xl"
                    >we are social</span
                  >
                </h2>

                <span
                  v-animate-on-scroll="{ type: 'fadeInUp', delay: 1 }"
                  class="mx-0 divide left primary"
                ></span>

                <div
                  v-animate-on-scroll="{ type: 'fadeInUp' }"
                  class="mx-auto text-xl italic lg:mx-0 lg:max-w-3xl"
                >
                  <p>
                    Lorem ipsum dolor sit amet, ea has tollit nominavi, ei ius
                    choro affert graeco. Vim nulla epicuri definibas et, eam in
                    facer errem nominavi.
                  </p>
                </div>

                <form class="mt-6 space-y-6">
                  <div v-animate-on-scroll="{ type: 'fadeInUp' }">
                    <div
                      class="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-6"
                    >
                      <div class="sm:col-span-3">
                        <div class="mt-1">
                          <input
                            id="first-name"
                            type="text"
                            name="first-name"
                            autocomplete="given-name"
                            placeholder="Nombre"
                            class="block w-full px-3 py-4 bg-white border-gray-300 rounded-md shadow-sm outline-none focus:ring-2 ring-primary placeholder-tertiary text-paragraph focus:border-primary sm:text-sm"
                          />
                        </div>
                      </div>

                      <div class="sm:col-span-3">
                        <div class="mt-1">
                          <input
                            id="last-name"
                            type="text"
                            name="last-name"
                            autocomplete="family-name"
                            placeholder="Apellido"
                            class="block w-full px-3 py-4 bg-white border-gray-300 rounded-md shadow-sm outline-none focus:ring-2 ring-primary placeholder-tertiary text-paragraph focus:border-primary sm:text-sm"
                          />
                        </div>
                      </div>

                      <div class="sm:col-span-3">
                        <div class="mt-1">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autocomplete="email"
                            placeholder="Correo electrónico"
                            class="block w-full px-3 py-4 bg-white border-gray-300 rounded-md shadow-sm outline-none focus:ring-2 ring-primary placeholder-tertiary text-paragraph focus:border-primary sm:text-sm"
                          />
                        </div>
                      </div>

                      <div class="sm:col-span-3">
                        <div class="mt-1">
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            autocomplete="phone"
                            placeholder="Teléfono"
                            class="block w-full px-3 py-4 bg-white border-gray-300 rounded-md shadow-sm outline-none focus:ring-2 ring-primary placeholder-tertiary text-paragraph focus:border-primary sm:text-sm"
                          />
                        </div>
                      </div>

                      <div class="sm:col-span-6">
                        <div class="mt-1">
                          <textarea
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="Mensaje"
                            class="block w-full px-3 py-4 bg-white border-gray-300 rounded-md shadow-sm outline-none focus:ring-2 ring-primary placeholder-tertiary text-paragraph focus:border-primary sm:text-sm"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div v-animate-on-scroll="{ type: 'fadeInUp', delay: 1 }">
                    <div class="flex justify-start">
                      <div class="flex items-center">
                        <div>
                          <button type="submit" class="btn primary">
                            Enviar
                          </button>
                        </div>

                        <p class="ml-4 text-paragraph">
                          o póngase en contacto con nosotros
                          <a
                            href="http://"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-sm font-semibold hover:underline hover:text-priamry"
                            >WhatsApp</a
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div class="flex items-center justify-center">
              <div class="w-auto p-10 bg-gray-100 shadow-2xl rounded-2xl">
                <h2 class="text-4xl font-bold tracking-tight text-left">
                  <span
                    class="block text-3xl text-primary font-amatic lg:text-5xl"
                    >Horario laboral</span
                  >
                  <!-- <span
                      class="block tracking-widest text-black uppercase sm:text-4xl"
                      >Working time</span
                    > -->
                </h2>

                <div class="mt-6">
                  <div class="flex flex-col items-start justify-start">
                    <div class="overflow-x-auto">
                      <div class="inline-block min-w-full align-middle">
                        <div class="overflow-hidden md:rounded-2xl">
                          <table class="min-w-full divide-y divide-gray-300">
                            <tbody class="bg-white divide-y divide-gray-200">
                              <tr
                                v-for="(item, index) in workTime"
                                :key="index"
                                :class="[
                                  'text-gray-500',
                                  {
                                    'bg-gray-100 !text-primary':
                                      index === today - 1,
                                  },
                                ]"
                              >
                                <td
                                  class="py-4 pl-4 pr-3 text-sm font-medium text-primary whitespace-nowrap sm:pl-6"
                                >
                                  {{ item.day }}
                                  <span
                                    v-if="index === today - 1"
                                    :class="[
                                      'ml-1 text-white rounded-full py-1 px-2 font-semibold text-xs',
                                      { 'bg-[#32d296]': checkTime },
                                      { 'bg-[#f0506e]': !checkTime },
                                    ]"
                                  >
                                    {{ checkTime ? "Abierto" : "Cerrado" }}
                                  </span>
                                </td>
                                <td class="px-3 py-4 text-sm whitespace-nowrap">
                                  {{ item.hours }}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",

  data() {
    return {
      sendingForm: false,
      formData: {
        name: null,
        email: null,
        message: null,
      },
      currentTestimonial: 0,
      testimonials: [
        {
          quote:
            "Lorem ipsum dolor sit amet, ea has tollit nominavi, ei ius choro affert graeco. Vim nu epicuri definiebas et, eam in facer errem nominavi. Per iuvaret ornatus gloriatur ne, ne sea principes assentior. Facer intellegat voluptaria vis no, te pri natum ludus inst. Lorem ipsum dolor sit amet, ea has tollit nominavi, ei ius choro affert graeco. Vim nu epicuri definiebas et, eam in facer errem nominavi. Per iuvaret ornatus gloriatur ne, ne sea principes assentior. Facer intellegat voluptaria vis no, te pri natum ludus inst.",
          name: "Israel Senior",
        },

        {
          quote:
            "Lorem ipsum dolor sit amet, ea has tollit nominavi, ei ius choro affert graeco. Vim nu epicuri definiebas et, eam in facer errem nominavi. Facer intellegat voluptaria vis no, te pri natum ludus inst.",
          name: "Joilen Lopex",
        },

        {
          quote:
            "Lorem ipsum dolor sit amet, ea has tollit nominavi, ei ius choro affert graeco. Vim nu epicuri definiebas et, eam in facer errem nominavi. Facer intellegat voluptaria vis no, te pri natum ludus inst. Per iuvaret ornatus gloriatur ne.",
          name: "Victor Salas",
        },
      ],

      currentEspecification: 0,
      especifications: [
        {
          title: "La vida sana es importante",
          btnText: "Keto 100%",
          description:
            "Alimentos bajos en carbos y ricos en grasas saludables para dieta cetogenica. Perfectos para mantener objetivos nutricionales.",
          image: "4f6d6245-4619-4187-9dff-5e0f54c4cc2b.jpg",
        },
        {
          title: "Mejore su salud",
          btnText: "Bajo en carbohidratos",
          description:
            "Alimentos con bajo contenido de carbohidratos, ideales para dietas de control de carbos y mejora de la salud.",
          image: "e9f7fa5b-22d5-4a79-a72b-a0243a7b3a9c.jpg",
        },
        {
          title: "Los mejores sabores para diabéticos",
          btnText: "Apto para diabéticos",
          description:
            "Alimentos seguros y saludables para personas con diabetes, sin azúcares añadidos y con control de carbohidratos.",
          image: "7e470e52-dad9-4bfb-8ca7-9abef44bbf3d.jpg",
        },
        {
          title: "Sabores que todo celíaco puede disfrutar",
          btnText: "Apto para celíacos (sin gluten)",
          description:
            "Alimentos sin gluten para personas con intolerancia al gluten, sin compromiso en sabor y calidad.",
          image: "11803668-f4f3-47a2-882c-359ff528a0a6.jpg",
        },
        {
          title: "Sabores que todo celíaco puede disfrutar",
          btnText: "Sin azúcar añadido",
          description:
            "Alimentos sin adición de azúcares artificiales, ideales para dietas de control de azúcar y mejora de la salud.",
          image: "7b020fd5-3dbc-4fa5-88f9-07b730805109.jpg",
        },
      ],

      workTime: [
        {
          day: "Lunes",
          hours: "10:30 am - 9:00 pm",
          startTime: "10:30",
          endTime: "21:00",
        },
        {
          day: "Martes",
          hours: "10:30 am - 9:00 pm",
          startTime: "10:30",
          endTime: "21:00",
        },
        {
          day: "Miércoles",
          hours: "10:30 am - 9:00 pm",
          startTime: "10:30",
          endTime: "21:00",
        },
        {
          day: "Jueves",
          hours: "10:30 am - 9:00 pm",
          startTime: "10:30",
          endTime: "21:00",
        },
        {
          day: "Viernes",
          hours: "10:30 am - 9:00 pm",
          startTime: "10:30",
          endTime: "21:00",
        },
        {
          day: "Sábado",
          hours: "12:30 pm - 9:00 pm",
          startTime: "12:30",
          endTime: "21:00",
        },
        {
          day: "Domingo",
          hours: "12:30 pm - 8:00 pm",
          startTime: "12:30",
          endTime: "20:00",
        },
      ],
    };
  },

  computed: {
    today() {
      return new Date().getDay();
    },
    checkTime() {
      const date = new Date();
      const hours = date.getHours();
      // const mins = date.getMinutes()

      const currentWorkTime = this.workTime[this.today - 1];
      const start = currentWorkTime.startTime.split(":");
      const end = currentWorkTime.endTime.split(":");

      return !!(hours >= start[0] && hours < end[0]);
    },
  },

  methods: {
    submitForm() {
      this.sendingForm = true;
      fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(this.formData),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((response) => response)
        .then((res) => {
          this.sendingForm = false;
          this.formMessage =
            "Message sent. We will contact you as soon as possible.";
          this.formData = {
            name: null,
            email: null,
            message: null,
          };
        })
        // eslint-disable-next-line no-console
        .catch((err) => console.log(err, "error"));
    },
  },
};
</script>
