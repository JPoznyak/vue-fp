import { mount } from '@vue/test-utils'
import TestComponent from './TestComponent.vue'

describe('TestComponent testing', ()=> {
    test('Test content', ()=> {
        const wrapper = mount(TestComponent, {
            propsData: {
                message: "Hello World!"
            }
        })
        expect(wrapper.html()).toEqual('<div>The message is: Hello World!</div>')
    })
})