module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "@/assets/css/_styles.scss";
                `
            }
        }
    }
}