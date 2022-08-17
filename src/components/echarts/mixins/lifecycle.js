export default function() {
    return {
        data() {
            return {}
        },
        mounted() {
            window.addEventListener("resize", this.onEchartResize);
        },
        methods: {
            onEchartResize() {
                this.chart && this.chart.resize()
            }
        },
        beforeDestroy() {
            this.$echarts.dispose(this.chart)
            window.removeEventListener("resize", this.onEchartResize);
        },
    }
}