<style>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,600, 800);

/*--------Global Variables-------*/

:root {
  --lightgray: #EEF3F5;
  --lightgray-hover: #DEEAF0;
  --mediumgray: #DBE0E4;
  --bluegray: #B8C9D1;
  --darkgray: #31393F;
  --paleblue: #FAFCFF;
  --green: #00C756;
  --teal: #1DABDC;
  --blue: #1D7DFF;
}

/*--------Body---------*/

body{
  font-family: 'Open Sans', 'Helvetica Neue', helvetica, arial, sans-serif;
  font-size: 13px;
  margin: 0 auto;
  padding: 0;
  color: var(--darkgray);
  background-color: var(--paleblue);
}

.pane{
  background-color: white;
  padding: 10px 30px 10px 20px;
  width: 80%;
}

@media screen and (max-width: 1000px) {
  @-ms-viewport { width: 1000px; }
  body{
    font-size: 13px;
  }
}

@media screen and (max-width: 600px) {
  @-ms-viewport { width: 600px; }
  body{
    font-size: 13px;
  }
}

:focus{
  outline-color: transparent;
  outline-style: none;
}

.shadow{
  box-shadow: 0 5px 15px rgba(0,0,0,.07);
}

input{
  font-family: inherit;
  font-size: inherit;
  border-radius: 4px;
  border: 1px solid var(--mediumgray);
  width: 200px;
}

textarea{
  border: 1px solid var(--mediumgray);
  border-radius: 4px;
  height: 100px;
  resize: vertical;
  width: 99%;
}

/*-------Fonts---------*/

h1{
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 2em;
  margin: 0;
}

@media screen and (max-width: 600px) {
  @-ms-viewport { width: 600px; }
  h1{
    font-size: 1.5em;
  }
}

h2{
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size: 1.2em;
}

h3{
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 1.5em;
}

h4{
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 1em;
  margin-bottom: 1em;
}

p{
  font-weight: 300;
  font-size: 1em;
  margin: 1px 0 1px 0;
}

a{
  color: var(--teal);
  text-decoration: none;
  cursor: pointer;
}

.red{
  color: tomato;
}

.bold{
  font-weight: bold;
  margin-bottom: 0;
}

.white{
  color: white;
}

.teal{
  color: var(--teal);
}

.center{
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}

/*------Layout-------*/

.wrapper{
  width: 100%;
  min-height: 500px;
  margin: 0 auto;
}

.flex{
  display: flex;
}

.pad-b{
  margin-bottom: 20px;
}

.cell{
  max-width: 900px;
  margin-left: 5% auto;
  margin-right: 5% auto;
  background-color: white;
  /*border: 1px solid red;*/
}

.cell--s{
  padding-left: 5px;
  padding-right: 5px;
}

.cell-sb{
  display: flex;
  justify-content: space-around !important;
}

.cell--s{
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.row{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.row--l{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.row--end{
  display: flex;
  justify-content: flex-end;
}

.row--gradient{
  background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
  min-height: 500px;
}

.row--border{
  border: 1px solid var(--mediumgray)
}

.row--blue{
  background: #00c6fb;
}

.row--teal{
  background-color: var(--teal);
}

.row--paleblue{
  background-color: var(--paleblue)
}

.well{
  padding-top: 10px;
  padding-bottom: 10px;
}

@media screen and (max-width: 800px) {
  .well--b{
    margin-bottom: 25%;
  }
}

@media only screen and (min-width: 1000px) {
  #grayrow{
    padding-top: 5%;
    padding-bottom: 5%;
  }
}

.col{
  width: 30%;
  margin: 5px auto;
  min-width: 300px;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-flow: wrap;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

.col-25{
  width: 24%;
  border: 1px solid gray;
}

.col-75{
  width: 75%;
  border: 1px solid pink;
}

.line{
  border-bottom: 1px solid var(--mediumgray);
  width: 100%;
  margin: 0 auto;
}

/*-----Image------*/

.img{
  margin: 0 auto;
}

.img--s{
  width: 20px;
  margin-right: 10px;
}

.img--icon{
  width: 12px;
}

@media screen and (max-width: 800px) {
}

/*--------Button--------*/

.btn{
  font-family: inherit;
  font-size: inherit;
  font-weight: 400;
  border-style: none;
  border-radius: 4px;
  padding: 8px 15px 8px 15px;
  cursor: pointer;
  background-color: var(--bluegray);
  box-shadow: 0 5px 15px rgba(0,0,0,.07);
  white-space: nowrap;
  transition: .2s ease;
}

.btn a{
  text-decoration: none;
}

.btn:hover{
  box-shadow: 1px 1px 36px 0px rgba(0,0,0,0.2);
}

.btn-white{
  background-color: white;
  color: var(--teal);
}

.btn-green{
  background-color: var(--green);
  color: white;
}

.btn-teal{
  color: white;
  background-color: var(--teal);
}

.btn-hollow{
  border: 1px solid var(--white);
  color: var(--teal);
  background-color: white;
}

.btn-red{
  background-color: tomato;
  color: white;
}

/*--------Card--------*/

.card{
  padding: 30px 5px 0px 5px;
  min-height: 170px;
  width: 180px;
  text-align: left;
  flex-flow: wrap;
}

/*---------Powwow-------*/

.poww-div{
  margin: 0 auto;
  max-width: 900px;
  height: 600px;
  box-shadow: 0 5px 15px rgba(0,0,0,.07);
}

@media screen and (max-width: 950px) {
  .poww-div{
    width: 90%;
    margin-top: -10%;
  }
}

/*-----sortable-----*/

.sortable {width:823px; border:1px solid #ccc; border-bottom:none}
.sortable th {padding:4px 6px 6px; background:#444; color:#fff; text-align:left; color:#ccc}
.sortable td {padding:2px 4px 4px; background:#fff; border-bottom:1px solid #ccc}
/*.sortable .head {background:#444 url(images/sort.gif) 6px center no-repeat; cursor:pointer; padding-left:18px}
.sortable .desc {background:#222 url(images/desc.gif) 6px center no-repeat; cursor:pointer; padding-left:18px}
.sortable .asc {background:#222 url(images/asc.gif) 6px  center no-repeat; cursor:pointer; padding-left:18px}*/
.sortable .head:hover, .sortable .desc:hover, .sortable .asc:hover {color:#fff}
.sortable .even td {background:#f2f2f2}
.sortable .odd td {background:#fff}

</style>

<template>
  <div id="app">
    <div class="wrapper cell shadow">
    <top-nav></top-nav>

    <div class="flex">
      <nav-panel></nav-panel>
      <router-view></router-view>
    </div>

    <Footer></Footer>
  </div>


</div>
</template>

<script>
import NavPanel from '@/components/NavPanel'
import TopNav from '@/components/TopNav'
import Footer from '@/components/Footer'

export default {
  name: 'app',
  data() {
      return {

      }
    },
  components: {
    NavPanel,
    TopNav,
    Footer,
  }
}
</script>
