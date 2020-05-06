<template>
    <v-app>
        <v-navigation-drawer
                permanent
                color="primary"
                app
        >

            <v-list
                    dense
                    nav
            >
                <v-subheader>COLLECTIONS</v-subheader>
                <v-list-item-group active-class="none">
                    <router-link v-for="table in tables"
                                 v-bind:key="table.id"
                                 :to="{ name: 'QueryBuilder', params: { tableName: table.name } }"
                                 active-class="selected">
                        <v-list-item class="item">
                            <v-list-item-content>
                                {{table.name}}
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>
                    </router-link>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>


        <v-content>
            <v-container fluid>
                <router-view v-bind:tables="tables"></router-view>
            </v-container>
        </v-content>
    </v-app>
</template>

<style scoped type="scss">
    .selected .item {
        border: 1px solid black;
        color: black;
    }
</style>

<script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'Home',
        data() {
            return {
                tables: []
                // tables: [1, 2, 3]
            }
        },
        components: {
            // HelloWorld
        },
        created() {
            // this.tables

            // setInterval(()=>console.log(this.$route.params.tables.length), 2000);

            setTimeout(() => {
                this.tables = [
                    {id: 1, name: 'asdf1'},
                    {id: 2, name: 'asdf2'},
                    {id: 3, name: 'asdf3'},
                    {id: 4, name: 'asdf4'},
                ];

                // this.$route.params.tables = this.tables;


            }, 500);

            //TODO get metadata
            (async () => {
                const response = await fetch('/api/lift/us/dynamo/loyalty-punchcard?playercode=ckrt-MktgLabRad-1&playerkey=0f48c6dc-18c0-4ff1-bd59-92bb4c27421b&mobilenumber=4045835198&type=POINT')
                // console.log(response);
                if (!response.ok) {
                    throw new Error(response.status + '\n\t\tfor ' + response.url + '\nRESPONSE ' + await response.text());
                }
                // console.log('logging:');
                // console.log(await response.text());
                // console.log('logged:')
                // debugger;
            })().catch(err => console.error('shit', err));


        }
    }
</script>
