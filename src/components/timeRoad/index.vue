<template>
    <div class="time-road">
        <div
            v-if="hour"
            :class="{ active: underIndex == 0 }"
            @click="selectTime('hour')"
        >
            时
        </div>
        <div
            v-if="day"
            :class="{ active: underIndex == 1 }"
            @click="selectTime('day')"
        >
            日
        </div>
        <div
            v-if="week"
            :class="{ active: underIndex == 2 }"
            @click="selectTime('week')"
        >
            周
        </div>
        <div
            v-if="month"
            :class="{ active: underIndex == 3 }"
            @click="selectTime('month')"
        >
            月
        </div>
        <div
            v-if="year"
            :class="{ active: underIndex == 4 }"
            @click="selectTime('year')"
        >
            年
        </div>
    </div>
</template>
<script>
export default {
    name: "",
    props: {
        hour: {
            type: Boolean,
            default: true,
        },
        day: {
            type: Boolean,
            default: true,
        },
        week: {
            type: Boolean,
            default: true,
        },
        month: {
            type: Boolean,
            default: true,
        },
        year: {
            type: Boolean,
            default: true,
        },
        option: {
            type: Array,
            default: () => [],
        },
        initValue: {
            type: Number,
            default: 0,
        }
    },
    data() {
        return {
            underIndex: 0
        };
    },
    created() {
        this.underIndex = this.initValue
        console.log('created', this.initValue)
    },
    watch: {
        initValue(val) {
            console.log('watch: ', val)
        }
    },
    methods: {
        selectTime: function (type) {
            if (type == "时") {
                this.underIndex = 0;
            }
            if (type == "日") {
                this.underIndex = 1;
            }
            if (type == "周") {
                this.underIndex = 2;
            }
            if (type == "月") {
                this.underIndex = 3;
            }
            if (type == "年") {
                this.underIndex = 4;
            }
            this.$emit("onSelectTime", { type });
        },
    },
};
</script>
<style scoped lang='scss'>
@mixin datePicker {
    height: 20px;
    // width: 120px;
    background-color: #ffffff;
    border: 1px solid #02a7f0;
    border-radius: 5px 5px 5px 5px;
    display: flex;
    div {
        width: 30px;
        height: 100%;
        font-size: 14px;
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
.time-road {
    @include datePicker;
}
</style>