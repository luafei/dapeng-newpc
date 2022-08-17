<template>
    <div class="dateTimePicker">
        <div :class="{ active: underIndex == 0 }" @click="timePicker('hour')">时</div>
        <div :class="{ active: underIndex == 1 }" @click="timePicker('day')">日</div>
        <div :class="{ active: underIndex == 2 }" @click="timePicker('month')">月</div>
    </div>
</template>
<script>
export default {
    name: "",
    props: {
        target: {
            type: String,
            default: ''
        },
        initValue: {
            type: String,
            default: 'hour'
        }
    },
    data() {
        return {
            underIndex: 1
        }
    },
    created() {
        if (this.initValue == 'hour') {
            this.underIndex = 0
        }
        if (this.initValue == 'day') {
            this.underIndex = 1
        }
        if (this.initValue == 'month') {
            this.underIndex = 2
        }
    },
    methods:{
        timePicker: function(type) {
            if (type == 'hour') {
                this.underIndex = 0;
            }
            if (type == 'day') {
                this.underIndex = 1;
            }
            if (type == 'month') {
                this.underIndex = 2;
            }
            this.$emit('timePickerClick', { target:  this.target, type})
        }
    }
};
</script>
<style scoped lang='scss'>
@mixin dateTimePicker {
    height: 28px;
    width: 150px;
    background-color: #ffffff;
    border: 1px solid #02a7f0;
    border-radius: 5px 5px 5px 5px;
    display: flex;
    div {
        width: 50px;
        height: 100%;
        font-size: 18px;
        font-weight: 600;
        background-color: #ffffff;
        color: #02a7f0;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #02a7f0;
        &.active {
            background-color: #02a7f0;
            color: #ffffff;
        }
    }
}
.dateTimePicker {
    @include dateTimePicker;
}

</style>