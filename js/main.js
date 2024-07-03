const app = Vue.createApp({
    mixins: Object.values(mixins),
    data() {
        return {
            loading: true,
            hiddenMenu: false,
            showMenuItems: false,
            menuColor: false,
            scrollTop: 0,
            renderers: [],
            isPlayerHidden: true, // 用于控制播放器显示隐藏
        };
    },
    created() {
        window.addEventListener("load", () => {
            this.loading = false;
            // 延迟加载播放器
            setTimeout(() => {
                this.$refs.musicIframe.src = "//music.163.com/outchain/player?type=2&id=1370886432&auto=1&height=66";
            }, 1000);
        });
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll, true);
        this.render();
    },
    methods: {
        render() {
            for (let i of this.renderers) i();
        },
        handleScroll() {
            let wrap = this.$refs.homePostsWrap;
            let newScrollTop = document.documentElement.scrollTop;
            if (this.scrollTop < newScrollTop) {
                this.hiddenMenu = true;
                this.showMenuItems = false;
            } else this.hiddenMenu = false;
            if (wrap) {
                if (newScrollTop <= window.innerHeight - 100) this.menuColor = true;
                else this.menuColor = false;
                if (newScrollTop <= 400) wrap.style.top = "-" + newScrollTop / 5 + "px";
                else wrap.style.top = "-80px";
            }
            this.scrollTop = newScrollTop;
        },
        togglePlayer() {
            this.isPlayerHidden = !this.isPlayerHidden;
        },
    },
});
app.mount("#layout");
