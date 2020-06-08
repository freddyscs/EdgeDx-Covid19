<template>
    <div>
        <div class="container">
		<div class="justify-content-center align-items-center">
			   <!-- if URL is empty, then app will show the browser -->
			   <section v-if="url === null">
			   <br>
			   <br>
			   <!-- Welcome message-->
			   <div class="row" >
					<div class="col toCenter padding" >
						<div class="row" >
							<h1 class="display-8">Welcome to EdgeDx information platform</h1>
							<p>For demo please enter "Xpert M 021517132325"</p>
						</div>
						<div class="row" >
							<div class="input-group">
							  <input type="text" class="form-control" placeholder="Please enter test ID number" v-model="testId" v-on:keydown="">
							  <div class="input-group-append">
								<button class="btn btn-outline-secondary" type="button" v-on:click="search()">Search</button>
							  </div>
							</div>
						</div>
					</div>						
					<div class="col padding" >
					   <img src="../../assets/images/edgedx-large.png">
					</div>
				</div>
					<!-- Welcome message-->
				
			   </section>
				    <!-- No results found-->
					  <section v-else>
						  <section v-if="errored">
							<br>
							<br>
							<div class="alert alert-warning" role="alert">
									We're sorry, we're not able to retrieve this information at the moment, please try back later
							</div>
							<div class="text-center"> 
								<button type="button" class="btn btn-light" @click="restart()">Back</button>
							</div> 
						  </section>
						  <section v-else>
							<div v-if="loading" class="row justify-content-center align-items-center">
								<br><br>
								<div class="spinner-grow text-dark" role="status">
								  <span class="sr-only">Loading...</span>
								</div>
							</div>
					<!-- No results found -->
					<section v-else-if="resultless">
						<br>
						<br>
						<div class="alert alert-warning" role="alert">
								We're sorry, results not found.
						</div>
						<div class="text-center"> 
							<button type="button" class="btn btn-light" @click="restart()">Back</button>
						</div> 
					</section>
				  <!-- No results found-->
				  <!-- Results found-->
					<div v-else v-for="data in info">
						   <!--<h1>User information from Mysql</h1>-->
						   <br>
							<!-- Cards -->
							<div class="text-center"> 
								<button type="button" class="btn btn-light" @click="restart()">Back</button>
							</div> 
							<br>
							<div class="row justify-content-center">
								<div class="col-sm-6">
									<div class="card text-center">
									  <div class="card-header">
										Assay Summary for <b>{{data.sample_id}}</b>
									  </div>
									  <div class="card-body">
										<h5 class="card-title">Test provided by {{ data.device_name }}</h5>
										<h5 class="card-title">Cartridge serial {{ data.cartridge_sn }}</h5>
										<p class="card-text"> {{ data.assay }}. {{ data.assay_type }}</p>
										<div class="alert alert-info" role="alert">
										  Assay result: {{ data.test_result }}
										</div>
										<p class="card-text">{{ data.assay_disclaimer }}</p>
										<a href="#" class="btn btn-primary disabled">Download</a>
									  </div>
									  <div class="card-footer text-muted">
											Last update {{ data.date_imported_to_server }}
									  </div>
									</div>
								</div>
							</div>
							<!-- Cards -->
							<br>
							<p>Details</p
							<br>
							<!-- Table Location -->
							<table class="table table-hover table-sm table-striped">
							  <thead>
								<tr>
								  <th scope="col2">Assay Location</th>
								  <th scope="col"></th>
								</tr>
							  </thead>
							  <tbody>
								<tr>
								  <th scope="row">Country</th>
								  <td>{{data.country}}</td>
								</tr>
								<tr>
								  <th scope="row">Province</th>
								  <td>{{data.province}}</td>
								</tr>
								<tr>
								  <th scope="row">District</th>
								  <td>{{data.district}}</td>
								</tr>
								<tr>
								  <th scope="row">Device Name</th>
								  <td>{{data.device_name}}</td>
								</tr>
								<tr>
								  <th scope="row">Software version</th>
								  <td>{{data.software_version}}</td>
								</tr>
								<tr>
								  <th scope="row">Cartridge</th>
								  <td>{{data.cartridge_sn}}</td>
								</tr>
								<tr>
								  <th scope="row">Date</th>
								  <td>{{data.exported_date}}</td>
								</tr>
							  </tbody>
							</table>
							<!-- Table Location -->
							<br>
							<!-- Table Assay -->
							<table class="table table-hover table-sm table-striped">
							  <thead>
								<tr>
								  <th scope="col2">Assay Details</th>
								  <th scope="col"></th>
								</tr>
							  </thead>
							  <tbody>
								<tr>
								  <th scope="row">Sample number</th>
								  <td>{{data.sample_id}}</td>
								</tr>
								<tr>
								  <th scope="row">Assay</th>
								  <td>{{data.assay}}</td>
								</tr>
								<tr>
								  <th scope="row">Assay Type</th>
								  <td>{{data.assay_type}}</td>
								</tr>
								<tr>
								  <th scope="row">Assay Version</th>
								  <td>{{data.assay_version}}</td>
								</tr>
								<tr>
								  <th scope="row">Disclaimer</th>
								  <td>{{data.assay_disclaimer}}</td>
								</tr>
								<tr>
								  <th scope="row">Module</th>
								  <td>{{data.module_name}}</td>
								</tr>
								<tr>
								  <th scope="row">Module Serial</th>
								  <td>{{data.module_sn}}</td>
								</tr>
							  </tbody>
							</table>
							<!-- Table Assay -->
							<br>
							<!-- Table Test -->
							<table class="table table-hover table-sm table-striped">
							  <thead>
								<tr>
								  <th scope="col2">Test Details</th>
								  <th scope="col"></th>
								</tr>
							  </thead>
							  <tbody>
								<tr>
								  <th scope="row">Lab</th>
								  <td>{{data.LabName}}</td>
								</tr>
								<tr>
								  <th scope="row">ID</th>
								  <td>{{data.test_id}}</td>
								</tr>
								<tr>
								  <th scope="row">Test Type</th>
								  <td>{{data.test_type}}</td>
								</tr>
								<tr>
								  <th scope="row">Result</th>
								  <td>{{data.test_result}}</td>
								</tr>
								<tr>
								  <th scope="row">Disclaimer</th>
								  <td>{{data.test_disclaimer}}</td>
								</tr>
								<tr>
								  <th scope="row">Status</th>
								  <td>{{data.status}}</td>
								</tr>
								<tr>
								  <th scope="row">Imported to node</th>
								  <td>{{data.date_imported_to_node}}</td>
								</tr>
								<tr>
								  <th scope="row">Imported to server</th>
								  <td>{{data.date_imported_to_server}}</td>
								</tr>
							  </tbody>
							</table>
							<!-- Table Test -->
						</div>
				 </section>
			 </section>
			 <!-- Results found-->
		</div>	 
	</div>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

const baseUrl = "http://www.myrawdata.com:3000/genexperts/?filter[where][sample_id]=";
function buildUrl (key) {
  return baseUrl + key 
}


export default {
     data () {
    return {
	  url: null,	
	  info: null,
      loading: true,
      errored: false,
	  resultless: null,
	  company: 'EdgeDx',
	  testId: null,
      logo: '../../assets/images/edgedx-large-60.png'
	  }
  },
  mounted () {
  },
  methods:{
			getdata: function(link){
				//Getting data from API and error handling
				axios
				  .get(link)
				  .then(response => {
					this.info = response.data;
					//alert(this.info);
					if(this.info.length===0){
						this.resultless = true;
					}
				  })
				  .catch(error => {
					console.log(error);
					this.errored = true;
				  })
				  .finally(() => {
					  this.loading = false;
					});
			},
			search: function(){
				//alert(this.testId);
				//console.log(event.target.value);
				this.url = this.testId;
				//console.log(this.url);
				//alert(buildUrl(this.testId));
				this.getdata(buildUrl(this.url));
			},
			restart: function(){
				this.url = null;	
				this.info = null;	
				this.loading = true;
				this.errored = false;
				this.resultless = null;
				this.testId = null;
	  
			}
        }
    
}
</script>
<style scoped>
</style>