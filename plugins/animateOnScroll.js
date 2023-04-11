import Vue from 'vue'

Vue.directive('animate-on-scroll', {
  _bind: (el, binding, vnode) => {
    const args = binding.value
    const observer = new IntersectionObserver(onIntersection, {
      root: null,
      threshold: 0.5,
      // rootMargin: '-80px'
    })

    // callback is called on intersection change
    function onIntersection(entries, opts) {
      entries.forEach((entry) => {
        entry.target.classList.add('opacity-0')

        if (entry.isIntersecting) {
          entry.target.classList.add(
            'animate__animated',
            `animate__${args?.type || 'fadeIn'}`,
            `animate__delay-${args?.delay || '0'}s`,
            `animate__${args?.duration || 'slow'}`
          )
          observer.unobserve(entry.target)
        }
      })
      // eslint-disable-next-line no-console
    }

    // Use the observer to observe an element
    observer.observe(el)
  },
  get bind() {
    return this._bind
  },
  set bind(value) {
    this._bind = value
  },
})
