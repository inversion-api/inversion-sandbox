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

<script lang="ts">
    import {Endpoint, MetaResponse} from '@/schema/MetaResponse';
    import {Component, Vue, Prop} from "vue-property-decorator";


    @Component
    export default class RootLayout extends Vue {
        @Prop() private tables?: Endpoint[];

        created() {

            /**
             *
             * @type {{api: *}}
             */
            const meta = require('../samplemeta.json') as MetaResponse;
            new Promise<MetaResponse>(resolve => resolve(meta))
                .then(data => {
                    this.tables = data.api.flatMap(api => {
                        return api.endpoints;
                    })
                });

        }
    }
</script>
