
 <template>
 <table class="table table-bordered mt-3">
  <thead class="atas">
    <tr >
      <th style="width:5%; font-size:25px; font-weight:700" scope="col">Country</th>
      <th style="width:15%; font-size:25px; font-weight:700" scope="col">Cases</th>
      <th style="width:10%; font-size:25px; font-weight:700" scope="col">Deaths</th>
      <th style="width:10%; font-size:25px; font-weight:700" scope="col">Recovered</th>
      
    </tr>
  </thead>
  <tbody>
    <tr v-for="() in " :key="">
      <td style="font-size:20px"></td>
      <td style="font-size:20px"></td>
      <td style="font-size:20px"></td>
      <td> 
      <button type="button" class="btn btn-danger" @click="deleteData(product.id)"><i class="fas fa-trash-alt"></i></button>
        </td>
    </tr>

  </tbody>
</table>
</template>

<script>
import Vue from 'vue'
export default Vue.extend ({
    name : 'Table',
    componet : {

    },
    mounted() {
        this.$store.dispatch('findAll')
    }

})
</script>

<style>

</style>