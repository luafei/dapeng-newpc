<template>
    <div class="drivePicker">
        <div :class="{ active: underIndex == 0 }" @click="drivePicker(0)">驶入</div>
        <div :class="{ active: underIndex == 1 }" @click="drivePicker(1)">驶出</div>
    </div>
</template>
<script>
export default {
    name: "",
    props: {
        target: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            underIndex: 0
        }
    },
    methods:{
        drivePicker: function(type) {
            if (type == 0) {
                this.underIndex = 0;
            }
            if (type == 1) {
                this.underIndex = 1;
            }
            this.$emit('drivePickerClick', { target:  this.target, type})
        }
    }
};
</script>
<style scoped lang='scss'>
@mixin drivePicker {
    height: 27px;
    width: 164px;
    background-color: #ffffff;
    border: 1px solid #02a7f0;
    border-radius: 5px 5px 5px 5px;
    display: flex;
    div {
        width: 82px;
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
.drivePicker {
    @include drivePicker;
}

</style>