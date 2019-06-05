<template>
    <v-container class="pa-0 mb-3">
        <v-snackbar
            v-model="errorAlert"
            bottom
            left
            >
            {{ errorMsg }}
            <v-btn
                color="pink"
                flat
                @click="errorAlert = false"
            >
                Close
            </v-btn>
        </v-snackbar>

        <v-layout wrap align-center justify-center row fill-height class="mt-0 mb-0" >
           <v-flex xs12 md12 lg12 class="pa-2 mb-0">
               <p class="google-font mb-0" style="font-size:170%;color:#0277bd">Directory of past events</p>
               <p class="google-font mt-0 mb-0" style="font-size:110%;color:#616161 ">
                   Events are listed in reverse chronological order by date.
               </p>     
               <p class="google-font" style="font-size:110%;color:#616161 ">Here are the recent 10 meetups. To know more about the past meetups <a :href="ChapterInfos.ChapterMeetupLink" target="_blank" style="text-decoration:none;color:#0277bd">Click here</a></p>

            </v-flex> 
        </v-layout>

        <v-layout wrap row fill-height>

            <v-flex xs12 v-if="showLoader">
                <v-layout row wrap>
                    <v-flex xs12 sm6 md4 lg4 v-for="n in 3" :key="`4${n}`">
                        <v-list two-line subheader  class="pa-2">
                            <v-list-tile>
                                <div class="event-card-loading">
                                <v-card>
                                    <v-card-title>
                                        <div>
                                            <v-list-tile-title class="google-font animate-shimmer" style="color:#424242;width:200px;height:20px;"></v-list-tile-title>
                                            <v-list-tile-sub-title class="google-font mt-1 animate-shimmer" style="color:#424242;width:100px;height:20px;"></v-list-tile-sub-title>
                                        </div>
                                    </v-card-title>
                                </v-card>
                                </div>
                            </v-list-tile>
                        </v-list>
                    </v-flex>
                </v-layout>
            </v-flex>
           

            <v-flex xs12 sm6 md4 lg4 v-for="(item,i) in eventsData" :key="i" pa-1 py-2>
                <v-slide-y-reverse-transition>
                    <v-list two-line subheader v-show="showData" >
                        <a :href="item.link" class="event-card">
                            <v-img
                                class="event-image"
                                v-if="item.featured_photo" 
                                :src="item.featured_photo.photo_link"
                                />
                            <v-img
                                class="event-image-effect"
                                v-if="item.featured_photo" 
                                :src="item.featured_photo.photo_link"
                                />
                            <v-card>
                                
                                <v-card-title>
                                    <div>
                                        <v-list-tile-title class="google-font" style="color:#424242">{{ item.name }}</v-list-tile-title>
                                            <v-list-tile-sub-title class="google-font">{{ item.local_date | dateFilter}} | {{ item.local_time }}</v-list-tile-sub-title>
                                    </div>
                                </v-card-title>
                            </v-card>
                        </a>
                    </v-list>
                    <!--<v-list two-line subheader v-show="showData" class="pa-2">
                        <v-list-tile
                            avatar
                            style="border-color:#e0e0e0;border-width: 1px;border-style: solid;border-top:0; border-left:0; border-right:0; border-bottom:1"
                        >
                            <v-list-tile-avatar>
                                <v-avatar color="grey lighten-2" >
                                    <img v-if="item.featured_photo" :src="item.featured_photo.photo_link" />
                                    <span v-else class="google-font" style="width:100vh">{{getCharString(item.name)}}</span>
                                </v-avatar>
                            </v-list-tile-avatar>

                            <v-list-tile-content>
                                <v-list-tile-title class="google-font" style="color:#424242">{{ item.name }}</v-list-tile-title>
                                <v-list-tile-sub-title class="google-font">{{ item.local_date | dateFilter}} | {{ item.local_time }}</v-list-tile-sub-title>
                            </v-list-tile-content>

                            <v-list-tile-action>
                                <v-tooltip bottom>
                                    <v-btn icon ripple :href="item.link" target="_blank" slot="activator">
                                        <v-icon color="grey darken-1">info</v-icon>
                                    </v-btn>
                                    
                                    <span>See More about {{item.name}}</span>
                                </v-tooltip>
                            </v-list-tile-action>
                            
                        </v-list-tile>
                        

                    </v-list>-->
                </v-slide-y-reverse-transition>
            </v-flex>

            <v-flex xs12 v-if="notFoundPastEventFlag==true">
                <p class="google-font px-2" style="font-size:140%"><v-icon >highlight_off</v-icon> Past Events Not Found!</p>
            </v-flex>

            
        </v-layout>

    </v-container>
</template>

<script>
import ChapterInfos from '@/assets/data/chapterInfos.json'
import { MeetupAPI } from '@/config/key'
import _ from 'lodash'
export default {
    data() {
        return {
            ChapterInfos: ChapterInfos,
            eventsData:[],
            showLoader: true,
            showData:false,
            errorMsg:'',
            errorAlert:false,
            notFoundPastEventFlag:false
        }
    },
    created(){
        fetch('https://cors-anywhere.herokuapp.com/https://api.meetup.com/'+MeetupAPI.urlname+'/events?fields=featured_photo&desc=true&photo-host=public&page=10&status=past&key='+MeetupAPI.apiKey).then(data=>data.json()).then(res=>{
            if(res.length>0){
                /*this.showLoader = false
                this.showData = true
                this.eventsData = _.take(_.filter(res, function (event) { return event.featured_photo != null }), 6)
            */}else{
                this.notFoundPastEventFlag = true
                this.showLoader = false
            }
            
        }).catch(e=>{
            this.showLoader = false
            this.errorMsg = 'Issue found with '+e
            this.errorAlert = true
            this.notFoundPastEventFlag = true
        })
    },
    methods:{
        getCharString(data){
            var splitArr = data.split(" ")
            if(splitArr.length>1){
                return (splitArr[0].substring(0,1)+''+splitArr[1].substring(0,1)).toUpperCase()
            }
            else{
                return (splitArr[0].substring(0,1)).toUpperCase()
            }
        },
    },
    filters:{
        summery: (val,num)=>{
            return val.substring(0,num)+".."
        },

        dateFilter: (value)=>{
            const date = new Date(value)
            return date.toLocaleString(['en-US'], {month: 'short', day: '2-digit', year: 'numeric'})
        }
    }
}
</script>

<style scoped>

.event-image {
    border-radius: 6px;
    z-index: 2;
    width: 95%;
    height: 200px;
    margin: 0 auto;
    text-align: center;
}

.event-image-effect {
    border-radius: 6px;
    z-index: 1;
    width: 92%;
    filter: blur(10px);
    opacity: 1;
    height: 200px;
    margin: -190px auto 0;
    text-align: center;
}

.event-card .v-card {
    border-radius: 6px;
    margin-top: -140px;
    padding-top: 140px;
    padding-bottom: 15px;
    font-size: 120%;
}

.event-card-loading .v-card {
    border-radius: 6px;
    padding-bottom: 15px;
    font-size: 120%;
}
    
</style>

