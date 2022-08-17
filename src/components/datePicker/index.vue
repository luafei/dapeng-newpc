<template>
    <div class="datePicker">
        <div :class="{ active: underIndex == 0 }" @click="datePicker('day')">日</div>
        <div :class="{ active: underIndex == 1 }" @click="datePicker('week')">周</div>
        <div :class="{ active: underIndex == 2 }" @click="datePicker('month')">月</div>
        <div :class="{ active: underIndex == 3 }" @click="datePicker('year')">年</div>
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
            default: 'day'
        }
    },
    data() {
        return {
            underIndex: 0
        }
    },
    created() {
        if (this.initValue == 'day') {
            this.underIndex = 0
        }
        if (this.initValue == 'week') {
            this.underIndex = 1
        }
        if (this.initValue == 'month') {
            this.underIndex = 2
        }
        if (this.initValue == 'year') {
            this.underIndex = 3
        }
    },
    methods:{
        datePicker: function(type) {
            if (type == 'day') {
                this.underIndex = 0;
            }
            if (type == 'week') {
                this.underIndex = 1;
            }
            if (type == 'month') {
                this.underIndex = 2;
            }
            if (type == 'year') {
                this.underIndex = 3;
            }
            this.$emit('datePickerClick', { target:  this.target, type})
        }
    }
};
</script>
<style scoped lang='scss'>
@mixin datePicker {
    height: 27px;
    width: 172px;
    background-color: #ffffff;
    border: 1px solid #02a7f0;
    border-radius: 5px 5px 5px 5px;
    display: flex;
    div {
        width: 43px;
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
.datePicker {
    @include datePicker;
}

</style>