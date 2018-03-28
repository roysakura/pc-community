<template>
        <button @click="run()" :disabled="disabled || time > 0">{{text}}</button>
</template>

<script>
    export default{
        data:function () {
            return {
                time: 0,
                second:60,
                disabled:false,
            }
        },
        methods: {
            run() {
                //将该方法提交给父组件调用
                this.$emit('run');
            },
            start(){
                this.time = this.second;
                this.timer();
            },
            stop(){
                this.time = 0;
                this.disabled = false;
            },
            setDisabled(val){
                this.disabled = val;
            },
            timer() {
                if (this.time > 0) {
                    this.time--;
                    setTimeout(this.timer, 1000);
                }else{
                    this.disabled = false;
                }
            }

        },
        computed: {
            text: function () {
                return this.time > 0 ? this.time + 's 后重获取' : '获取验证码';
            }
        }
    }
</script>
