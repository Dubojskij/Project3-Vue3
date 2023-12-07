<template>
    <footer>
        <div class="footer-conteiner">
            <div class="footer-flex">
                <div class="footer-position">
                    <a ><img class="logo" width="160" height="35" src="@/img/logo.png"/></a>
                    <div class="footer-top-links">
                        <p class="footer-top-p">
                            <a class="footer-top-link">About</a>
                            <a class="footer-top-link">Help</a>
                            <a class="footer-top-link">Terms</a>
                            <a class="footer-top-link">Privacy</a>
                        </p>
                    </div>
                    <div class="footer-bot-links">
                        <hr class="footer-bot-hr">
                        <h2 class="footer-bot-h2">Get the Medium app</h2>
                        <div class="footer-bot-market-links">
                            <a class="market-links"><img width="135" height="41" src="https://miro.medium.com/v2/resize:fit:270/1*Crl55Tm6yDNMoucPo1tvDg.png"></a>
                            <a class="market-links"><img width="135" height="41" src="https://miro.medium.com/v2/resize:fit:270/1*W_RAPQ62h0em559zluJLdQ.png"></a>                              
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
</script>
<style scoped>
footer{
display:none;
}
@media (max-width: 945px) {
footer{
display:block;
}
.footer-conteiner{
    padding: 24px 0;
    background-color: rgba(0, 0, 0, 1);
    position: static;
    min-width: 100vw;
    margin-bottom: 0;
}
.footer-flex{
    display: flex;
    justify-content: center;
}
.footer-position{
    margin: 0 24px;
    min-width: 0;
    max-width: 1192px;
    width: 100%;
}
.footer-logo{
    width: 142px;
    height: 22px;
}
.footer-top-links{
    margin-top: 20px;
}
.footer-top-p{
    font-size: 13px;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.95);
    font-weight: 400;
    margin: 0;
}
.footer-top-link{
    margin-right: 20px;
    cursor: pointer;
    cursor: pointer;
}
.footer-bot-links{
display: none;
}
}
@media(max-width:728px){

.footer-bot-links{
display: block;
}
.footer-bot-hr{
    margin: 28px 0 20px;
    background-color: rgba(255, 255, 255, 0.95);
    height: 1px;
    border: 0;

}
.footer-bot-h2{
    letter-spacing: 0;
    color: rgba(255, 255, 255, 0.95);
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
}
.footer-bot-market-links{
    display: flex;
    margin-top: 20px;
}
.market-links{
    margin-right: 16px;
}
}
.logo{    
    filter: brightness(0) invert(1);
}

</style>
