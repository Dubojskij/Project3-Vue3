<template>
    <div class="dialog">
        <div class="dialog1">
            <div class="dialog2">
                <div class="dialog3">
                    <div class="dialog4">
                        <h2>Join Medium.</h2>
                        <div>
                            <a><div>
                                <img>
                                <p></p>
                                <div></div>
                            </div></a>
                        </div>
                        <div>
                            <a><div>
                                <img>
                                <p></p>
                                <div></div>
                            </div></a>
                        </div>
                        <div>
                            <a><div>
                                <img>
                                <p></p>
                                <div></div>
                            </div></a>
                        </div>
                        <div>
                            <p>Already have an account?</p>
                            <button>Sign in</button>
                        </div>
                        <div>
                        <p>Click “Sign up” to agree to Medium’s Terms of Service and acknowledge that Medium’s Privacy Policy applies to you.</p>
                    </div>
                    </div>
                    <div class="close">
                        <button class="btn-close"
                         @click="closeComponent"
                         ><img class="svg-close" width="29" height="29" src="@/img/1487086345-cross_81577.png"/></button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

</template>
<script>
export default {
  methods: {
    closeComponent() {
      this.$emit('close');
    },
  },
  
};
</script>
<style scoped>
.dialog{    
   
    /* color: rgba(0,0,0,0.8);     */
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.95);
    overflow-x: hidden;
    overflow-y: auto;
    z-index: 800;
    scroll-behavior: smooth;
    animation: 300ms cubic-bezier(0.25, 0.1, 0.25, 1) 0s 1 normal forwards running k1;
}
.dialog1{   
    padding: 0px;
    margin-top: auto;
    margin-bottom: auto;
    animation: 300ms cubic-bezier(0.25, 0.1, 0.25, 1) 0s 1 normal forwards running k2;
    transform-origin: center bottom;
}
.dialog2{   
    /* display: block;
    position: relative; */
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 10px;
    width: 678px;
    background: rgb(255, 255, 255);
}
@media(max-width:678px){
    .dialog2{   
    width: 100%;
}
}

.dialog3{    
    display: flex;
    width: 100%;
    flex-direction: row;
    height: 100%;
    border-radius: 4px;
    justify-content: space-between;
    min-height: 695px;
    background: white;
}
.dialog4{    
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 0 auto;
    text-align: center;
    flex-direction: column;
    padding: 44px 56px;
    width: 360px;
}
.close{   
    display: block;
    /* position: absolute; */
    /* top: 12px;
    right: 12px; */
    padding-right: 12px;
    padding-top: 12px;
}
.btn-close{  
    background: transparent;
    /* overflow: visible; */
    display: flex;
    padding: 0;
    margin: 0;
    cursor: pointer;
}
.svg-close{    
    cursor: pointer;
    width: 29;
    height: 29;
    box-sizing: inherit;
    vertical-align: middle;
    fill: rgb(107, 107, 107);
}
</style>