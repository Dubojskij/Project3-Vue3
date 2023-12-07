<template>
    <main>                                  
            <div class="main-bot">
                <div class="content">
                    <div class="content-position">
                        <div class="grid-content">
                        <section class="left-content" >
                            <div class="posts-content"  v-for="post in posts" :key="post.id" >
                                <div class="content-posts-el">
                                    <div class="content-el-posts">                                
                                        <div class="content-el-body">
                                            <div class="content-el-body1">
                                                <a class="avatarimg"><img width="20" height="20" :src="post.avatarimg"/></a>
                                                <div class="content-body-link">
                                                    <a class="content-body-link-el"><h4> {{ post.author }}</h4></a>
                                                    <div class="el-body1-part2">
                                                        <h4 class="content-body-link-el" v-if="post.chapter"> in </h4>
                                                        <a class="content-body-link-el" v-if="post.chapter"><h4> {{ post.chapter }}</h4></a>
                                                    </div>                                                    
                                                </div>
                                                
                                            </div>
                                            <div class="content-posts-el-body2">                                    
                                                <a class="" @click="$router.push(`/posts/${post.id}`)">                                                    
                                                    <h2 class="h2-content-body2" >{{ post.title }}</h2>
                                                    <h3 class="h3-content-body2">{{ post.shortdescription }}</h3>
                                                </a>
                                                
                                            </div>                                
                                            <div class="content-posts-el-body3">
                                                <div class="body3-left">
                                                    <span class="body3-left-span">{{ post.date }}</span>
                                                    <span class="body3-left-span"> · </span>
                                                    <span class="body3-left-span">{{ post.timereade }}</span>
                                                    <span class="body3-left-span"> · </span>
                                                    <a><div class="body3-left-links topic">{{ post.topic }}</div></a>
                                                    <button class="btn-body3-left">
                                                        <!-- <svg class="btn-svg-body3" width="16" height="16" fill="none"></svg> -->
                                                        <svg width="16" height="16" viewBox="0 0 64 64" fill="none"><path d="M39.64 40.83L33.87 56.7a1.99 1.99 0 0 1-3.74 0l-5.77-15.87a2.02 2.02 0 0 0-1.2-1.2L7.3 33.88a1.99 1.99 0 0 1 0-3.74l15.87-5.77a2.02 2.02 0 0 0 1.2-1.2L30.12 7.3a1.99 1.99 0 0 1 3.74 0l5.77 15.87a2.02 2.02 0 0 0 1.2 1.2l15.86 5.76a1.99 1.99 0 0 1 0 3.74l-15.87 5.77a2.02 2.02 0 0 0-1.2 1.2z" fill="#FFC017"></path></svg>
                                                    </button>
                                                </div>
                                                <span class="body3-right">
                                                    <a>                                                       
                                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" class="il mz"><path d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z" fill="currentColor"></path></svg>
                                                    </a>
                                                </span>
                                               
                                            </div>                            
                                            
                                        </div>
                                        <a class="content-el-photos"><img class="post-photos" :src="post.previewphoto" alt="svg" ></a>
                                    </div>                            
                                </div>                                                            
                            </div>
                            <div class="load-more-stories" v-if="showLoadMoreButton" > 
                                 <button class="load-more-stories-btn"   
                                  @click="emitLoadMore"
                                 >load more stories</button>
                            </div>
                            <!-- <div v-infinite-scroll="handleLoadMore" :distance="distance"></div>                              -->
                        </section>
                        <aside class="right-content">
                            <div class="sticky-content">
                                <div class="border-bot">
                                    <div class="sticky-content-top">
                                        <h2 class="h2-content-top">Discover more of what matters to you</h2>
                                        <div class="content-body-top">
                                            <a class="content-top-link">Programming</a>
                                            <a class="content-top-link">Data Science</a>
                                            <a class="content-top-link">Technology</a>
                                            <a class="content-top-link">Self Improvement</a>
                                            <a class="content-top-link">Writing</a>
                                            <a class="content-top-link">Relationships</a>
                                            <a class="content-top-link">Machine Learning</a>
                                            <a class="content-top-link">Productivity</a>
                                            <a class="content-top-link">Politics</a>
                                        </div>
                                        <p class="see-more"><a>See more topics</a></p>

                                    </div>
                                    <div class="sticky-content-bot">
                                        <a class="content-bot-links">Help</a>
                                        <a class="content-bot-links">Status</a>
                                        <a class="content-bot-links">About</a>
                                        <a class="content-bot-links">Careers</a>
                                        <a class="content-bot-links">Blog</a>
                                        <a class="content-bot-links">Privacy</a>
                                        <a class="content-bot-links">Terms</a>
                                        <a class="content-bot-links">Text to speech</a>
                                        <a class="content-bot-links">Teams</a>
                                    </div>
                                </div>                                
                            </div>
                        </aside>
                    </div>

                    </div>
                    
                </div>
            

            </div>
    </main>
</template>
<script>
export default { 
  props: {
    posts: {
        type: Array,
        required: true,
        },
        loadMorePosts: {
        type: Function,
        required: true,
        },
        page: {
            type: Number,
            required: true,
        },
        totalPages: {
            type: Number,
            required: true,
        }, 
        limit: {
        type: Number,
        required: true,
        },  
        showLoadMoreButton: {
        type: Boolean,
        required: true,
        },  
  },  
  methods: {
  emitLoadMore() {
    this.$emit('load-more');
  },
},


};
</script>
<style scoped>

/* main bot**********************************************************************************  */
.load-more-stories{
    display: none;
}
a{
    cursor: pointer;
}
.main-bot{
    border-top: 1px solid #887d7d;
    padding-top: 56px;
}
.content{
    display: flex;
    justify-content: center;
}
.content-position{
    min-width: 0;
    max-width: 1192px;
    width: 100%;
    margin: 0 64px;
}
.grid-content{
    display: grid;
    grid-template-columns: repeat(8,1fr) repeat(4, minmax(48px, 1fr));
    grid-template-rows: 1fr;   
    box-sizing: border-box;
    width: 100%;
  
}
.left-content{
    grid-row-start: 1;
    grid-column: 1 / span 7;
    box-sizing: border-box;
    width: 100%; 
    max-width: 100%;
    
    
   
}
.right-content{
    grid-column: 9 / span 4;
    grid-row-start: 1;
    box-sizing: border-box;
    width: 100%; 
    max-width: 100%;
    
  
}
.sticky-content{
    top: 107px;
    position: sticky;
}

.sticky-content-top{
    padding-bottom: 32px;
    border-bottom: 1px solid #F2F2F2;
}
.h2-content-top{
    padding-bottom: 16px;
    letter-spacing: 0;
    font-weight: 500;
    font-size: 16px;
    color: #242424;
    line-height: 20px;
}
.content-body-top{
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;

}
.content-top-link{
    margin-bottom: 10px;
    /* border: none; */
    margin-right: 8px;
    /* white-space: nowrap; */
    /* transition: background 300ms ease; */
    border: 1px solid #F2F2F2;
    background-color: #F2F2F2;
    /* position: relative; */
    padding: 8px 16px;
   
    border-radius: 100px;
}
.see-more{
    margin-top: 14px;
    color: #1A8917;
    line-height: 20px;
    font-size: 14px;   
}
.see-more:hover {
    color: #6B6B6B;
}
.sticky-content-bot{
    padding: 24px 0;
    flex-wrap: wrap;
    flex-direction: row;
    display: flex;
}
.content-bot-links{
    margin-right: 26px;
    margin-bottom: 8px;
}
.posts-content{
    padding-bottom: 12px;
    padding-top: 12px;
    
}
.content-posts-el{
    height: 100%;
    width: 100%;
    margin-bottom: 48px;

}
.content-el-posts{
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
}
.content-el-body{
    padding-bottom: 8px;
    margin-right: 20px;
    min-width: 0;
    width: 100%;
    display: block;
    /* max-width: 100%; */

}
.content-el-body1{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 8px;
}
.content-body-link{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding-left: 5px;

}
.el-body1-part2{
    display: flex;
}
.content-body-link-el{
    padding-right: 5px;
    text-align: center;
}

.h2-content-body2{   
    color: #242424;    
    font-size: 20px;
    line-height: 24px;
    max-height: 48px;
    letter-spacing: 0;
    

}
.h3-content-body2{     
    -webkit-text-size-adjust: 100%;
    --reach-tabs: 1;
    --reach-menu-button: 1;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    fill: inherit;
    letter-spacing: inherit;
    cursor: pointer;
    box-sizing: inherit;
    margin: 0;
    font-weight: 400;
    line-height: 20px;
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #6B6B6B;
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    max-height: 40px;
    -webkit-line-clamp: 2;
    
}
.content-posts-el-body3{
    padding-top: 8px;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    
}
.body3-left{
    display: flex;
    align-items: center;
}
.body3-left-links{
    padding: 2px 8px;
    transition: background 300ms ease 0s;
    border-radius: 100px;
    white-space: nowrap;
    font-size: 13px;
    position: relative;
    color: #6B6B6B;
    border: 1px solid #F2F2F2;
    background-color: #F2F2F2;
    line-height: 20px;
    font-weight: 400;
    margin-right: 4px;
}
.body3-left-span{
    padding-right: 6px;
    -webkit-text-size-adjust: 100%;
    --reach-tabs: 1;
    --reach-menu-button: 1;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    white-space: nowrap;
    font-weight: 400;
    line-height: 20px;
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #6B6B6B;
    font-size: 13px;
    box-sizing: inherit;
}
.btn-body3-left{
    border: none;
    padding: 0;
    margin: 0;
    background: transparent;  
    overflow: visible;
}
.btn-svg-body3{
    vertical-align: middle;
     background: transparent;  
}
.body3-right{
    display: flex;
    align-items: center;
    margin-right: 8px;
}
.post-photos{
    width: 200px;
    height: 134px;

}

@media (max-width: 616px) {
    .h2-content-body2{       
        /* white-space: nowrap; */
        overflow: hidden; 
        text-overflow: ellipsis; 
    }
          
}
@media (max-width: 555px) {
        .topic{
            display: none;
        }  
        .post-photos{
            width: 100px !important;
            height: 100px !important;
        }   
}
@media (max-width: 725px) {
        .post-photos{
            width: 150px;
            height: 100px;
        }    
        .h3-content-body2{
            display: none;
        }

}
@media (max-width: 945px) {
            .content-position{
                min-width: 0;
                max-width: 100%;
                width: 100%;
                margin: 0 24px;
        }       
            .grid-content {
                grid-template-columns: 1fr;
                grid-template-rows: auto auto;
            }

            .left-content {
                grid-row-start: 2;
                grid-column: 1 / -1;
                max-width: 100% !important;
                width: 100% !important;
                margin: 0 !important;
                box-sizing: border-box;
            }

            .right-content {
                grid-row-start: 1;
                grid-column: 1 / -1;
                max-width: 100% !important;
                width: 100% !important;
                margin: 0 !important;
                box-sizing: border-box;
            }  
            .sticky-content-bot{
                display: none;

            }  
            .load-more-stories{
                display: block;    
                margin-bottom: 48px;
                justify-content: center;
                display: flex;
            }
            .load-more-stories-btn{
                -webkit-text-size-adjust: 100%;
                --reach-tabs: 1;
                --reach-menu-button: 1;
                -webkit-font-smoothing: antialiased;
                -webkit-tap-highlight-color: transparent;
                overflow: visible;
                margin: 0;
                font-weight: 400;
                font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
                font-size: 14px;
                line-height: 20px;
                color: #242424;
                padding: 8px 16px;
                border-radius: 99em;
                border-width: 1px;
                border-style: solid;
                box-sizing: border-box;
                display: inline-block;
                text-decoration: none;
                text-align: center;
                fill: rgb(36, 36, 36);
                background: 0px center;
                border-color: rgb(36, 36, 36);
                cursor: pointer;
            }

}
/* main bot**********************************************************************************  */

</style>