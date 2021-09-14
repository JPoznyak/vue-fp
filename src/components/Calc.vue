<template>
  <div>
    <div>
      <input type="number" placeholder="op1" v-model.number="operand1" />
      <input type="number" placeholder="op2" v-model.number="operand2" />
    </div>
    <div class="error" v-if="error">
        Ошибка: {{ error }}
    </div>
    <div class="btns">
      <button class="btn" @click="add">+</button>
      <button class="btn" @click="substract">-</button>
      <button class="btn" @click="multiply">*</button>
      <button class="btn" @click="divide">/</button>
      <button class="btn" @click="divideRound">round</button>
      <button class="btn" @click="pow">pow</button>
    </div>
    <div class="result">
    result : {{ sum }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Calc",
  data: () => ({
    operand1: 0,
    operand2: 0,
    sum: 0,
    error: ""
  }),

  methods: {
    // const { operand1, operand2 } = this
    add(){
        this.sum = this.operand1 + this.operand2
    },
    substract(){
        this.sum = this.operand1 - this.operand2
    },
    multiply(){
        this.sum = this.operand1 * this.operand2
    },
    divide() {
        if(this.operand2 === 0) {
            this.error = "На 0 делить нельзя!"
        } else {
        this.sum = this.operand1 / this.operand2
        this.error = ""
        } 
    },
    divideRound() {
            this.sum = Math.round(this.operand1 / this.operand2)
    },
    pow() {
        this.sum = Math.pow(this.operand1, this.operand2)
    }
  }
}
</script>

<style lang="scss" scoped>
.error {
    color: red
}

.btns {
    margin-top: 20px;
    margin-bottom: 20px;
}

.btn {
    font-size: 14px;
	text-align: center;
	letter-spacing: 0.04em;
	color: #FFFFFF;
	background: rgb(93, 99, 104);
	box-shadow: 5px 10px 10px rgba(107, 110, 114, 0.2);
	border-radius: 3px;
	padding: 5px;
    text-decoration: none;
    min-width: 40px;
    margin-right: 5px;
}

.result {
    color: cadetblue;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
}

input{
    text-align: center;
    border: 2px solid gray;
    border-radius: 3px;
    box-shadow: 5px 10px 10px rgba(173, 177, 182, 0.3);
    margin-right: 5px;
    padding: 5px;
    width: 150px;
}

</style>