<template>
    <div class="about" v-if="tables">
        <v-text-field disabled :value="fullCallUrl"/>
        <v-text-field disabled :value="rql"/>

        <v-btn class="ma-2" outlined color="indigo">
            <v-icon>mdi-plus</v-icon>
        </v-btn>

        <br>
        <v-btn class="ma-2" outlined color="indigo">
            <v-icon>mdi-play</v-icon>
        </v-btn>

        <!--        {{tableName}} &lt;&#45;&#45; table<br>-->

        {{table}}
        <query-result-viewer/>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import QueryResultViewer from "@/components/QueryResultViewer.vue";
    import {Endpoint} from "@/schema/MetaResponse";

    @Component({
        components: {QueryResultViewer}
    })
    export default class HelloWorld extends Vue {
        @Prop() private tableName!: string;

        // @Prop() private table?: Endpoint;
        @Prop() private tables?: Endpoint[];

        // @Prop()
        get table(): Endpoint | undefined {
            return this.tables
                ?.filter(x => x.name === this.tableName)[0];
        }

        // get tableObj() {
        //     return this?.tables!
        //         .filter(x => x.name === this.tableName)[0];
        // }

        get fullCallUrl() {
            return 'URL goes here';
        }

        get rql() {
            return 'RQL goes here';
        }


        // data() {
        //   return {
        //     tableObj: Object
        //   };
        // }

        created() {
            // setTimeout(() => {this.fullCallUrl = 'shit'}, 1000)
        }

        //
        // @Watch('tables')
        // onPropertyChanged(value: any[], oldValue?: object[]) {
        //   console.log(value+"_"+ oldValue);
        //   console.log(value);
        //  
        //   // Do stuff with the watcher here.
        // }
        //

        // watch = {
        //   tables(val:object) {
        //     console.log(val);
        //   }
        // }
    }
</script>