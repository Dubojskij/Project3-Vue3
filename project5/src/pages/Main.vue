<template>
    <div class="">  
        <Header></Header>
        <Trending 
        :trendingposts="trendingposts"
        />
        <PostList 
        :posts="posts" 
        @load-more="loadMorePostsFromApp" 
        :page="page" 
        :totalPages="totalPages" 
        :limit="limit" 
        :loadMorePosts="loadMorePosts"
        :showLoadMoreButton="showLoadMoreButton"
        />         
        <div 
        v-intersection="loadMorePosts" 
        class="observer"
        ></div>              
        <MyFooter/>
    </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Trending from '@/components/Trending.vue'
import PostList from '@/components/PostsList.vue'
import axios from 'axios';
import MyFooter from '@/components/MyFooter.vue'



export default {
    components:{
        Header,Trending,PostList,MyFooter
    },
  data() {
    return {
        trendingposts: [],
        posts:[],
        page: 1,
        totalPages:0,
        limit:20,
        totalPostsCount:0
    };
  },
  computed: {
    showLoadMoreButton() {      
            return this.posts.length < this.totalPages * this.limit && this.posts.length < this.totalPostsCount;      
    },
  },
 methods:{
   async fetchTrendingPosts(){
    try{
        const response = await axios.get('http://localhost:3000/trendingposts');
        this.trendingposts = response.data;
    }catch(e){
        alert('Error')
    }
   },

   async fetchPosts(){
    try{
        const response = await axios.get('http://localhost:3000/posts',{
            params: {
                _page: this.page,
                _limit: this.limit
            }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.totalPostsCount = response.headers['x-total-count']; 
        this.posts = response.data;
    }catch(e){
        alert('Error')
    }
   },  
   async loadMorePosts(){    
    try{
        this.page += 1;
        const page = window.innerWidth < 945 ? this.page + 1 : this.page;
        const limit = window.innerWidth < 945 ? 10 : 20;
        const response = await axios.get('http://localhost:3000/posts',{
            params: {
                _page: page,
                _limit: limit
            }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.totalPostsCount = response.headers['x-total-count'];         
        if (response.data.length > 0) {
          this.posts = [...this.posts, ...response.data];
        } else {
          this.$emit('hide-load-more-button');
        }
    }catch(e){
        alert('Error')
    }
   },
   async loadMorePostsFromApp() {
      await this.loadMorePosts();
    },
 },
 mounted(){
    this.fetchPosts();      
 },
 
 created() {
        this.fetchTrendingPosts();
        this.fetchPosts();
    },  

};
</script>
<style>

.observer{
    background-color: rgb(255, 255, 255);
    width: 100%;
    height: 20px;
    
}
@media (max-width: 945px) {
    .observer{
        display: none;
    }

}
</style>