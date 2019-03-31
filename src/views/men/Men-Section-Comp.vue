<template>
    <div>
        <ul class="nav nav-tabs" role="tablist">
            <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" href="#sports-wear">Sports wear</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#footwear">Footwear</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#watches">Watches</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#accessories">Accessories</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#clothing">Clothing</a>
            </li>
        </ul>

  <!-- Tab panes -->
  <div class="tab-content">
    <div id="sports-wear" class="container tab-pane active"><br>

      <div class="container">
        <div class="row">
          <div class="col-sm-2">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a href="#t-shirts" class="float-left">Sports T-Shirts</a>
              </li>
              <li class="nav-item">
                <a href="#t-pants" class="float-left">Track Pants</a>
              </li>
              <li class="nav-item">
                <a href="#t-suits" class="float-left">Track Suits</a>
              </li>
              <li class="nav-item">
                <a href="#t-shorts" class="float-left">Shorts</a>
              </li>
            </ul>
          </div>
          <div class="col-sm-10">
          <div style="overflow: auto; height: 400px;">

            <div id="t-shirts" class="men-section">
              <div class="card">
                <div class="card-header">
                  Sports T-Shirts ({{ menSTSInfo['sports-wear'].length }})
                </div>
                <div class="card-body">
                  <blockquote class="blockquote mb-0">
                    <div v-for="(item, index) in menSTSInfo['sports-wear']" 
                        v-bind:key=index
                        class="col-sm-6 float-left sports-wear">
                        <!-- <span class="float-left rating">{{ item.rating }}</span> -->
                        <img :src="item.image" width="100px;" height="200px;"/>
                        <span class="float-right more"><a href='' @click.prevent=''>more...</a></span>
                        <p>{{ item.name }}</p>
                        <!-- <p>{{ item.rating }}</p> -->
                        <footer class="blockquote-footer">
                            Seller: {{ item.seller['name'] }} 
                            <cite title="Source Title">, Rating: {{ item.seller['rating']}}</cite>
                        </footer>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>

            <div id="t-pants" class="men-section">
              <div class="card">
                <div class="card-header">
                  Track Pants ({{ menTrackPInfo['track-paints'].length }})
                </div>
                <div class="card-body">
                  <blockquote class="blockquote mb-0">
                    <div v-for="(item, index) in menTrackPInfo['track-paints']" 
                    v-bind:key=index
                    class="col-sm-6 float-left sports-wear">
                        <img :src="item.image" width="100px;" height="200px;"/>
                        <p>{{ item.name }}</p>
                        <p>{{ item.rating }}</p>
                        <footer class="blockquote-footer">
                            Seller: {{ item.seller['name'] }} 
                            <cite title="Source Title">, Rating: {{ item.seller['rating']}}</cite>
                        </footer>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>

            <div id="t-suits" class="men-section">
              <div class="card">
                <div class="card-header">
                  Track Suits ({{ menTrackPSInfo['track-suit'].length }})
                </div>
                <div class="card-body">
                  <blockquote class="blockquote mb-0">
                    <div v-for="(item, index) in menTrackPSInfo['track-suit']" 
                    v-bind:key=index
                    class="col-sm-6 float-left sports-wear">
                        <img :src="item.image" width="100px;" height="200px;"/>
                        <p>{{ item.name }}</p>
                        <p>{{ item.rating }}</p>
                        <footer class="blockquote-footer">
                            Seller: {{ item.seller['name'] }} 
                            <cite title="Source Title">, Rating: {{ item.seller['rating']}}</cite>
                        </footer>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
            <div id="t-shorts" class="men-section">
              <div class="card">
                <div class="card-header">
                  Shorts ({{ menShortsInfo['shorts'].length }})
                </div>
                <div class="card-body">
                  <blockquote class="blockquote mb-0">
                    <div v-for="(item, index) in menShortsInfo['shorts']" 
                    v-bind:key=index
                    class="col-sm-6 float-left sports-wear">
                        <img :src="item.image" width="100px;" height="200px;"/>
                        <p>{{ item.name }}</p>
                        <p>{{ item.rating }}</p>
                        <footer class="blockquote-footer">
                            Seller: {{ item.seller['name'] }} 
                            <cite title="Source Title">, Rating: {{ item.seller['rating']}}</cite>
                        </footer>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

    </div>
    <div id="footwear" class="container tab-pane fade"><br>
      <h3>Menu 1</h3>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div id="watches" class="container tab-pane fade"><br>
      <h3>Fastrack
          Casio
          Titan
          Fossil
          Sonata</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
    </div>
    <div id="accessories" class="container tab-pane fade"><br>
      <h3>Menu 1</h3>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div id="clothing" class="container tab-pane fade"><br>
      <h3>Menu 1</h3>
      <p>
        Top wear
        T-Shirts
        Shirts
        Kurtas
        Suits & Blazers
        Bottom wear
        Jeans
        Trousers
        Shorts & 3/4ths
        Cargos
        Track pants
      </p>
    </div>
  </div>
  
    </div>
</template>
<script>
const menData = require('../../model/men.json')
export default {
    data(){
        return{
            menSTSInfo: menData[0],
            menTrackPInfo: menData[1],
            menTrackPSInfo: menData[2],
            menShortsInfo: menData[3]
        }
    }
}
</script>
<style lang="scss" scoped>
    h1{
        color: red;
    }
    .men-section {
        height: 400px;
        margin-right: 5px;
    }
    .sports-wear {
        overflow: auto;
        img{
            margin: 5px;
        }
    }
    .sports-wear:hover {
        background-color: #94909012;
        border-radius: 5px;
    }
    .card-body {
        overflow: auto;
        height: 300px;
    }
    .rating {
        font-size: 10px;
        margin-top: 5px;
    }
    .more {
        font-size: 15px;
    }
</style>
