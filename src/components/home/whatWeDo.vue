<template>
    <v-container class="pa-0">
        <v-layout wrap align-center justify-center row fill-height >
           <v-flex xs12 md4 lg4 class="pa-2">
               <p class="google-font" style="font-size:180%">{{ $t('WhatWeDo.WhatWeDo') }}</p>
               <p class="google-font" style="font-size:110%">{{ $t('WhatWeDo.What') }}</p>

                <span v-for="(item,i) in whatWeDoData" :key="i">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }" >
                            <a :href="item.link" target="_blank" flat class="ma-0">
                                <img :src="getImgUrl(item.image)" width="30vh" alt="" srcset="" dark v-on="on">
                            </a> 
                            &nbsp;&nbsp;&nbsp;
                        </template>
                        <span>{{item.TechName}}</span>
                    </v-tooltip>
                </span>
                
                <br><br>

                <v-btn :href="ChapterInfos.GDGProgramWebsite" outline target="_blank" round color="cyan" style="text-transform: capitalize;border-radius:5px;text-transform: capitalize;" flat  class="ml-0 google-font hidden-md-and-down" dark>{{ $t('LearnMore') }}</v-btn>

            </v-flex> 
            <v-flex xs12 md8 lg8 class="">
                <v-layout row wrap>

                    <v-flex xs6 sm6 md3 lg3 class="text-xs-center pa-2" v-for="(item,i) in $t('WhatWeDo.Activities')" :key="i">
                        <v-icon large style="font-size:300%">{{ item.Icon }}</v-icon>
                        <p class="google-font" style="font-size:130%">{{ item.Title}}</p>
                        <p class="google-font" style="font-size:110%">{{ item.Description}}</p>
                    </v-flex>

                </v-layout>
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>
import whatWeDoData from '@/assets/data/whatWeDoComponentData.json'
import ChapterInfos from '@/assets/data/chapterInfos.json'
export default {
    data() {
        return {
            ChapterInfos: ChapterInfos,
            whatWeDoData: whatWeDoData
        }
    },
    methods:{
        getImgUrl(url) {
            if(url.length>0){
                return require('@/assets/img/what-we-do/'+url)
            }else{
                return require('@/assets/img/what-we-do/notFound.png')
            }
        },
    }
}
</script>
