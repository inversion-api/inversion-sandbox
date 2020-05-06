<template>
    <div>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                <tr>
                    <th v-for="col in data[0]" :key="col.column" class="text-left">{{col.column}}</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(row,i) in data" :key="i">
                    <td v-for="(col,i) in row" :key="i">{{ col.val }}</td>
                </tr>
                </tbody>
            </template>
        </v-simple-table>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class QueryResultViewer extends Vue {

        // @Prop()
        private data?: Object[] = [[{column: "col1", val: 1}, {column: "col2", val: 4}, {column: "col3", val: 88}], [{column: "col1", val: 1}, {column: "col2", val: 4}, {column: "col3", val: 88}]];

        private column: String = '';

        created() {
        }
    }
</script>
<style scoped>

</style>