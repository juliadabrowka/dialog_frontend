<template>
<div class='spinner-bg'>
    <div class="lds-roller">
        <img class='spinner-img' src='../../assets/images/logo-small.png'>
    </div>
</div>
</template>

<script>
export default {
}
</script>

<style scoped>

.spinner-bg {
    width: 100%;
    height: 100%;
    background-color: white;
    position: fixed;
    z-index: 1;
    margin-top: -72px
}

.spinner-img {
    width: 180px;
    height: 180px;
}

.lds-roller {
    display: inline-block;
    position: absolute;
    left:40vw;
    top: 20vh
}
.lds-roller {
    animation: lds-roller 2s infinite;
}
.lds-roller:after {
    display: block;
    position: absolute;
    background: #fff;
}

@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
