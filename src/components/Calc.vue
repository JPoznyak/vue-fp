<template>
  <div>
    <div>
      <input class="input" type="number" placeholder="операнд1" v-model.number="operand1"/>
      <input class="input" type="number" placeholder="операнд2" v-model.number="operand2" />
    </div>
    <div class="error">
        {{ error }}
    </div>

    <div class="buttons">
        <button class="btn" v-for="btn in buttons" 
                :key="btn"
                v-bind:title="btn"
                @click="calculate(btn)"
        >
                {{ btn }}
        </button>
    </div>
   
    <div class="result">
    result : {{ result }}
    </div>

    <div class="check">
        <input type="checkbox" id="checkbox" v-model="checked">
        <span v-html="text"></span>
    </div>

     <div class="keyboard" v-if="checked">
        <button class="key" v-for="key in keyboard"
            :key="key"
            v-bind:value="key"
            @click="addNumber(key)"
            >
                {{ key }}
        </button>
        <button class="key" :key:="dKey" @click="removeNum">
            {{ dKey }}
        </button>

        <div class="radio">
            <input type="radio" v-model="radio" v-bind:key="operand1" value="operand1">
            <label>Операнд 1</label>
            <input type="radio" v-model="radio" v-bind:key="operand2" value="operand2">
            <label>Операнд 2</label>
        </div> 

    </div>

  </div>
</template>

<script>
export default {
  name: "Calc",
  props: {
    key: String 
  },
  
  data:()=>({
    operand1: "",
    operand2: "",
    result: 0,
    buttons: ['+','-','*','/','round', 'pow'],
    keyboard: [1,2,3,4,5,6,7,8,9,0],
    dKey: "Del",
    error: "",
    checked: true,
    text: "Отобразить экранную клавиатуру",
    radio: "",
    test: ""
    }),

  methods: {
      calculate(op){
        this.error = ""
        const calcOperations = {
            '+': ()=> this.operand1 + this.operand2,
            '-': ()=> this.operand1 - this.operand2,
            '*': ()=> this.operand1 * this.operand2,
            '/': ()=> (this.operand2 === 0) ? this.error = 'На 0 делить нельзя!' : this.operand1 / this.operand2,
            'round': ()=> Math.round(this.operand1 / this.operand2),
            'pow': ()=> Math.pow(this.operand1, this.operand2)
        }
            this.result = calcOperations[op]()
        },

        addNumber(key){
            // this.$emit(key)
            // this[this.radio] = key
            this[this.radio] = +(this[this.radio] += String(key))  
        },

        removeNum() {
            // this.key.splice(key)
            // this[this.radio] = this.key.splice(idx,1); 
            // this.$delete(this.key, idx) 
            this[this.radio]= +String(this[this.radio]).slice(0,-1)
       }
  }
}
</script>

<style lang="scss" scoped>
.error {
    color: red
}

.buttons {
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

.input{
    text-align: center;
    border: 2px solid gray;
    border-radius: 3px;
    box-shadow: 5px 10px 10px rgba(173, 177, 182, 0.3);
    margin-right: 5px;
    padding: 5px;
    width: 150px;
}

.key{
    background-color: cadetblue;
    margin-right: 5px;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 700;
}

.check{
    margin-block: 20px;
}
.radio {
    margin-top: 20px;
    font-weight: 700;
}

.radio label{
    margin-right: 20px;
}

.activ{
    border: 5px solid red;
}

</style>