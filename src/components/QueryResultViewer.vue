<template>
    <div>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Name</th>
                <th class="text-left">Calories</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in data" :key="item.toString()">
                  &gt;-- keys   <div>Object.entries(item)</div>  &lt;-- keys
                <td>{{ item.name }}</td>
                <td>{{ item.calories }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';

    @Component
    export default class QueryResultViewer extends Vue {
        
        @Prop()
        private data?: Object[] = [{col1: 1}, {col2: 2}, {col3: 3}];
        
        private column: String = '';
        
        created() {
        }
    }
</script>
<style scoped>

</style>