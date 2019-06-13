<template>
  <v-content class="pa-0">
    <v-container fluid class="mt-2 mb-0">
      <v-layout wrap align-start justify-center row fill-height class="my-0">
        <v-flex xs12 md8 class="mb-0">
          
          <p class="google-font mb-0 mt-3" style="font-size:200%;color:#616161">{{ $t('ContactPage.Contact') }} {{ChapterDetails.ChapterName}}</p>
          
          <p class="google-font mt-3" style="font-size:110%">{{ $t('ContactPage.OpenEvents') }}</p>
          
          <p class="google-font mb-0" style="font-size:130%">{{ $t('ContactPage.SocialMedia') }}</p>
          <p class="google-font mt-0 ml-0" style="font-size:130%" >
            <span v-for="(item,i) in SocialLinks" :key="i">
              <v-tooltip bottom>
                  <v-btn flat icon :href="item.link" target="_blank" slot="activator">
                    <v-icon>{{item.icon}}</v-icon>
                  </v-btn>
                  <span>{{item.name}}</span>
              </v-tooltip>
            </span>
          </p>
            
            <p class="google-font mb-0" style="font-size:120%">{{ $t('ContactPage.Questions') }} <a :href="ChapterInfos.ChapterEmail">{{ChapterInfos.ChapterEmail}}</a>.</p>
        </v-flex>
        <v-flex xs12 md2 lg2 class="pa-2">
          <v-img
              :src="require('@/assets/img/svg/contact2.svg')"
              :lazy-src="require('@/assets/img/svg/contact2.svg')"
              width="70%"
              style="float:right"
              >
              <v-layout
                  slot="placeholder"
                  fill-height
                  align-center
                  justify-center
                  ma-0
              >
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-layout>
          </v-img>
        </v-flex>
      </v-layout>
    </v-container>

    



  </v-content>
  
</template>

<script>
import ChapterDetails from '@/assets/data/chapterDetails.json'
import SocialLinks from '@/assets/data/socialLinks.json'
import ChapterInfos from '@/assets/data/chapterInfos.json'

  export default {
    components: {
    },
    data() {
      return {
        ChapterDetails: ChapterDetails,
        ChapterInfos: ChapterInfos,
        SocialLinks:SocialLinks
      }
    },
  }
</script>
