<template>
    <div class="trending-flex">
                <div class="conteiner">
                <div class="Trending">
                <div class="title-trending">
                    <svg width="28" height="29" viewBox="0 0 28 29" fill="none" class="ji ah"><path fill="#fff" d="M0 .8h28v28H0z"></path><g opacity="0.8" clip-path="url(#trending_svg__clip0)"><path fill="#fff" d="M4 4.8h20v20H4z"></path><circle cx="14" cy="14.79" r="9.5" stroke="#000"></circle><path d="M5.46 18.36l4.47-4.48M9.97 13.87l3.67 3.66M13.67 17.53l5.1-5.09M16.62 11.6h3M19.62 11.6v3" stroke="#000" stroke-linecap="round"></path></g><defs><clipPath id="trending_svg__clip0"><path fill="#fff" transform="translate(4 4.8)" d="M0 0h20v20H0z"></path></clipPath></defs></svg>
                    <h2 class="title-trending-h2">Trending on Medium</h2>
                </div>               
                    <div class="trending-posts"> 
                        <div class="trending-posts-el" v-for="trendingpost in trendingposts" :key="trendingpost.id">
                            <div class="flex-el-posts">
                                <div class="num-trending">
                                    <span class="num-posts">{{ trendingpost.postId }}</span>
                                </div>                                
                            <div class="posts-el-body">
                                <div class="posts-el-body1">
                                     <a class=""><img alt="sg" width="20" height="20" :src="trendingpost.previewphoto"/></a>
                                     <div class="body-link">
                                          <a class="body-link-el"><h4>{{trendingpost.author}}</h4></a>
                                          <h4 class="body-link-el" v-if="trendingpost.chapter"> in </h4>
                                          <a class="body-link-el" v-if="trendingpost.chapter" ><h4> {{trendingpost.chapter}}</h4></a>
                                     </div>
                                     
                                </div>
                                <div class="posts-el-body2">                                    
                                    <a class=""><h4>{{trendingpost.title}}</h4></a>
                                </div>                                
                                <div class="posts-el-body3">
                                    <span >{{trendingpost.date}}</span>
                                    <span > · </span>
                                    <span >{{trendingpost.timereade}}</span>
                                </div>                            
                                
                            </div>
                            </div>                            
                        </div>                                            
                    </div>   
                     
                                                    
                </div>
            </div> 

    </div> 
        
</template>
<script>
export default{
    props:{
        trendingposts:{
            type:Array,
            required: true
        }
    }  
}
</script>
<style scoped>
a{
    cursor: pointer;
}
.conteiner{   
    min-width: 0;
    max-width: 1192px;
    width: 100%;
    margin: 0 64px;
}
@media (max-width: 400px) {
    .conteiner{   
    min-width: 0;
    max-width: 1192px;
    width: 100%;
    margin: 0 24px;
}
  
}
.trending-flex{
    display: flex;
    justify-content: center;
}
.Trending{
    padding-top: 40px;
    padding-bottom: 16px;
}
.title-trending{
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-bottom: 16px;
    padding-left: 20px;
    
}
.title-trending-h2{
    -webkit-text-size-adjust: 100%;
    --reach-tabs: 1;
    --reach-menu-button: 1;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    box-sizing: inherit;
    margin: 0;
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    line-height: 20px;
    color: #242424;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0;
    margin-left: 10px;

}
.trending-posts{
    display: flex;
    flex-wrap: wrap;  
    

}
@media (max-width: 1100px) {
  .trending-posts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
}
@media (max-width: 781px) {
  .trending-posts {
    grid-template-columns: 1fr;
  }
}
.trending-posts-el{
    flex: 1 0 calc(33.33% - 20px);    
    width:100%;    
    padding-right: 16px;
    padding-left: 16px;
    box-sizing: border-box;
    text-align: center;
}
.flex-el-posts{
    display: flex;
    align-items: flex-start;
    margin-bottom: 24px;
}
.posts-el-body{
     display: flex; 
     flex-direction: column; 
     align-items: flex-start;
     text-align: left;

}
.posts-el-body1{
    display: flex;
    margin-bottom: 8px;  
 }
.body-link{
    margin-left: 8px;
    display: flex;   
    align-items: center; 
}
.body-link-el{     
    cursor: pointer;
    box-sizing: inherit;
    margin: 0;       
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    max-height: 16px;
    text-overflow: ellipsis;
    display: -webkit-box;    
    word-break: break-all;
    padding-right: 2px;
}
.num-trending{
    -webkit-text-size-adjust: 100%;
    --reach-tabs: 1;
    --reach-menu-button: 1;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    color: rgba(0,0,0,0.8);
    font-family: medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 400;
    box-sizing: inherit;
    display: block;
    position: relative;
    flex: 0 0 auto;
    margin-right: 16px;
    top: -10px;
    width: 40px;
}
.num-posts{   
    -webkit-text-size-adjust: 100%;
    --reach-tabs: 1;
    --reach-menu-button: 1;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    box-sizing: inherit;
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #F2F2F2;
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;
    letter-spacing: -0.014em;
}
.posts-el-body2{
    margin-bottom: 8px;
 }   
 .posts-el-body3{
    font-size: 13px;
    color: #6B6B6B;
    font-weight: 400;
}

</style>