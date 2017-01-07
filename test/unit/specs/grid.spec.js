import Vue from 'vue'
import VueRouter from 'vue-router'
import grid from 'src/components/grid'

describe('grid.vue', () => {
  it('should render contractor details', () => {
    Vue.use(VueRouter)
    const router = new VueRouter({routes: [
        {path: '/:slug', name: 'modal', component: {template: '<div>modal</div>'}},
    ]})
    const vm = new Vue({
      el: document.createElement('div'),
      router: router,
      render: (h) => h(grid),
      data: {
        contractors: [
          {
            name: 'Fred Bloggs',
            slug: 'fred-bloggs',
            img: 'http://path.com/to/img.jpg',
          }
        ]
      }
    })
    expect(vm.$el.querySelector('h3').textContent).to.equal('Fred Bloggs')
    expect(vm.$el.querySelector('a').attributes['href'].value).to.equal('#/fred-bloggs')
    expect(vm.$el.querySelector('img').attributes['src'].value).to.equal('http://path.com/to/img.jpg')
  })
})
