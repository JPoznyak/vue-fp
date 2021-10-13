import { it } from "@jest/globals";
import { mount } from "@vue/test-utils";
import Calc from "../components/Calc.vue";

describe("Test Calc", () => {
    it("Test first operand input value", () => {
        const wrapper = mount(Calc);
        const operand1 = wrapper.find("input[name=operand1]");
        operand1.setValue("1");
        //   operand1.element.value = '1'
        //   operand1.trigger('input')
        expect(wrapper.vm.operand1).toBe(1);
    });

    it("Test Second operand input value", () => {
        const wrapper = mount(Calc);
        const operand2 = wrapper.find("input[name=operand2]");
        operand2.setValue("2");
        //   operand1.element.value = '1'
        //   operand1.trigger('input')
        expect(wrapper.vm.operand2).toBe(2);
    });

    it("Test method sum", () => {
        const wrapper = mount(Calc);

        const operand1 = wrapper.find("input[name=operand1]");
        operand1.setValue("1");

        const operand2 = wrapper.find("input[name=operand2]");
        operand2.setValue("2");

        const methodSum = wrapper.find('button[name="+"]');
        methodSum.trigger("click");

        expect(wrapper.vm.result).toBe(3);
    });

    it("Test method sub", () => {
        const wrapper = mount(Calc);

        const operand1 = wrapper.find("input[name=operand1]");
        operand1.setValue("4");

        const operand2 = wrapper.find("input[name=operand2]");
        operand2.setValue("2");

        const methodSub = wrapper.find('button[name="-"]');
        methodSub.trigger("click");

        expect(wrapper.vm.result).toBe(2);
    });

    it("Test method multy", () => {
        const wrapper = mount(Calc);

        const operand1 = wrapper.find("input[name=operand1]");
        operand1.setValue("4");

        const operand2 = wrapper.find("input[name=operand2]");
        operand2.setValue("2");

        const methodSub = wrapper.find('button[name="*"]');
        methodSub.trigger("click");

        expect(wrapper.vm.result).toBe(8);
    });

    it("Test keyboard", () => {
        const wrapper = mount(Calc);
        const selectedOperand = wrapper.find("input[value=operand1]");
        const operationBtn = wrapper.find("button[name=num]");
        await selectedOperand.setChecked();
        operationBtn.trigger('click');
        expect(wrapper.vm.$data.operand1).toBe('');
    });
});


