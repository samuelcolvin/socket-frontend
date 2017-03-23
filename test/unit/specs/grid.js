import Vue from 'vue'
import VueRouter from 'vue-router'
import grid from 'src/components/grid'

describe('grid.vue', () => {
  it('should render contractors', () => {
    Vue.use(VueRouter)
    const router = new VueRouter({routes: [
        {path: '/:link', name: 'con-modal', component: {render: h => '-'}},
    ]})
    const vm = new Vue({
      el: document.createElement('div'),
      router: router,
      render: (h) => h(grid),
      data: {
        contractors: [{name: 'Fred Bloggs', link: '123-fred-bloggs', photo: 'http://path/to/img.jpg'}],
        subjects: [],
        config: {subject_filter: true},
      },
      methods: {
        get_contractor_list: () => null,
        get_subject_list: () => null,
        get_selected_subject: () => null,
        get_text: () => null,
      }
    })
    expect(vm.$el.querySelector('h3').textContent).to.equal('Fred Bloggs')
    expect(vm.$el.querySelector('a').attributes['href'].value).to.equal('#/123-fred-bloggs')
    expect(vm.$el.querySelector('img').attributes['src'].value).to.equal('http://path/to/img.jpg')
  })
})
