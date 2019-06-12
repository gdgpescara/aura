<template>
    <v-container class="pa-0 my-0">
        <v-layout wrap align-start justify-start row fill-height class="my-0" >
     
            <v-flex xs12 md8 lg8 class="pa-2 my-0">
                <p class="google-font" style="font-size:180%;color:#0277bd">{{ $t('AboutPage.AntiHarassment.Title') }}</p>

                <p class="google-font" style="font-size:110%">
                    <b style="font-size:120%;color: #2E2E2E;">{{ $t('AboutPage.AntiHarassment.WhyTitle') }}</b>

                    <ul class="mt-2" style="font-size:110%" v-for="(item,i) in $t('AboutPage.AntiHarassment.WhyList')" :key="i">
                        <li class="google-font">{{ item }}</li>
                    </ul>
                </p>

                <p class="google-font" style="font-size:110%">
                    <b style="font-size:120%;color: #2E2E2E;">{{ $t('AboutPage.AntiHarassment.RegardlessTitle') }}</b>

                    <ul class="mt-2" style="font-size:110%" v-for="(item,i) in $t('AboutPage.AntiHarassment.RegardlessList')" :key="i">
                        <li class="google-font">{{ item }}</li>
                    </ul>

                    <span class="google-font" style="font-size:110%">{{ $t('AboutPage.AntiHarassment.RegardlessBottom') }}</span>
                </p>

                <p class="google-font" style="font-size:120%">{{ $t('AboutPage.AntiHarassment.Language') }}</p>

                <p class="google-font" style="font-size:110%">{{ $t('AboutPage.AntiHarassment.LimitedTitle') }}
                    <ul class="mt-2" style="font-size:110%" v-for="(item,i) in $t('AboutPage.AntiHarassment.LimitedList')" :key="i">
                        <li class="google-font">{{ item }}</li>
                    </ul>
                </p>

                <p class="google-font" style="font-size:120%">{{ $t('AboutPage.AntiHarassment.Stop') }}
                    <br><br>
                    {{ $t('AboutPage.AntiHarassment.Partners') }}
                    <br><br>
                    {{ $t('AboutPage.AntiHarassment.Notice') }}
                    <br><br>
                    {{ $t('AboutPage.AntiHarassment.Final') }}
                </p>


            </v-flex> 
           
            <v-flex xs12 md4 lg4 class="pa-2 hidden-sm-and-down">
                
            </v-flex>
        </v-layout>

    </v-container>
</template>

