<template>
    <v-container class="pa-0 my-0">
        <v-layout wrap align-center justify-center row fill-height class="mt-2 elevation-2 white" style="border:1px solid #e0e0e0;border-radius:5px">
            <v-flex xs12 sm4 md3 lg3 class="pa-4" >
                <v-img
                    :src="getImgUrl($t('Featured.EventImage'))"
                    :lazy-src="getImgUrl($t('Featured.EventImage'))"
                    width="100%">
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
           <v-flex xs12 sm8 md9 lg9 class="pa-2 py-4 px-3" >
                <p class="google-font mb-0" style="font-size:150%;color:rgb(2, 119, 189)">{{ $t('Featured.FeatureEventName') }}</p>
                <span class="google-font mt-1 mb-0 grey--text"  style="font-size:105%">
                    <v-icon small>insert_invitation</v-icon>
                    {{$t('Featured.EventDate.Date') +'/'+ $t('Featured.EventDate.Month') +'/'+ $t('Featured.EventDate.Year')}} 
                    &nbsp;
                    <v-icon small>watch_later</v-icon>
                    {{$t('Featured.EventTime.StartTime') +' - '+ $t('Featured.EventTime.EndTime')}}
                    &nbsp;
                    <v-icon small>map</v-icon>
                    {{$t('Featured.EventVenue') | summery(50)}} <a :href="$t('Featured.EventVenueMapLink')" target="_blank">({{ $t('Featured.Map') }})</a>
                </span>    
               <p class="google-font mt-2 mb-1" style="font-size:115%;color:#757575">
                   {{$t('Featured.EventDescription')}}
               </p>
                
                <v-btn color="#1a73e8" v-if="$t('Featured.RegistrationLink').length>0" :href="$t('Featured.RegistrationLink')" target="_blank" class="ma-0 elevation-0 my-2" dark style="text-transform: capitalize;border-radius:5px;"> 
                    {{ $t('Featured.Link') }}
                </v-btn>
                &nbsp;

                <v-tooltip top slot="activator" v-if="$t('Featured.EventWebsite').length>0">
                    <v-btn flat icon color="#616161" class="ma-0 elevation-0" slot="activator" 
                    :href="$t('Featured.EventWebsite')"
                    target="_blank"
                    style="text-transform: capitalize;border-radius:5px;"> 
                        <v-icon>language</v-icon>
                    </v-btn>
                    <span>{{ $t('Featured.See') }} {{$t('Featured.FeatureEventName')}} Website</span>
                </v-tooltip>

                <v-tooltip top slot="activator" 
                v-if="$t('Featured.MeetupLink').length>0">
                    <v-btn flat icon color="#616161"
                    :href="$t('Featured.MeetupLink')"
                    target="_blank"
                    class="ma-0 elevation-0" slot="activator" style="text-transform: capitalize;border-radius:5px;"> 
                        <v-icon>fab fa-meetup</v-icon>
                    </v-btn>
                    <span>{{ $t('Featured.See') }} {{$t('Featured.FeatureEventName')}} Meetup</span>
                </v-tooltip>

                <v-tooltip top slot="activator" v-if="$t('Featured.FBEventPageURL').length>0">
                    <v-btn flat icon color="#616161"
                    :href="$t('Featured.FBEventPageURL')"
                    target="_blank"
                    class="ma-0 elevation-0" slot="activator" style="text-transform: capitalize;border-radius:5px;"> 
                        <v-icon >fab fa-facebook-f</v-icon>
                    </v-btn>
                    <span>{{ $t('Featured.See') }} {{$t('Featured.FeatureEventName')}} Facebook Page</span>
                </v-tooltip>
            
            </v-flex> 
        </v-layout>

    </v-container>
</template>

<script>
    
export default {
    components:{
    },
    methods:{
        getImgUrl(pic) {
            if(pic.length>0){
                return require('@/assets/img/featureEvent/'+pic)
            }else{
                return require('@/assets/img/featureEvent/imagenotfound.png')
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
