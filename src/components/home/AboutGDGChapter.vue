<template>
    <v-container class="pa-0 white--text">
        <v-layout wrap align-center justify-center row fill-height class="my-3" >
           <v-flex xs12 md12 lg12 class="pa-2">
               <p class="google-font" style="font-size:150%">About {{ $t('ChapterName') }}</p>
               <p class="google-font" style="font-size:110%">
                   {{ $t('ChapterLongDec') }}
               </p>
               <v-btn :href="ChapterInfos.ChapterMeetupLink" target="_blank" outline color="white" class="ma-0 google-font" style="border-radius:5px;text-transform: capitalize;">Meetup Page</v-btn>
               &nbsp;
               <v-btn :href="SocialLinks[0].link" target="_blank" outline color="white" class="ma-0 google-font" style="border-radius:5px;text-transform: capitalize;">Facebook Page</v-btn>
                <br><br>
               <router-link to="/about" class="google-font" style="text-decoration:none;color:white">See More about {{ $t('ChapterName') }}</router-link>
            </v-flex> 
           
        </v-layout>

    </v-container>
</template>

<script>
import ChapterInfos from '@/assets/data/chapterInfos.json'
import SocialLinks from '@/assets/data/socialLinks.json'
export default {
    data() {
        return {
            ChapterInfos: ChapterInfos,
            SocialLinks: SocialLinks
        }
    },
}
</script>
