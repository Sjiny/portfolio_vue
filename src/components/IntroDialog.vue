<template>
    <v-dialog
        v-model="props.dialog"
        transition="dialog-bottom-transition"
        width="850"
      >
      <v-card style="padding: 10px">
        <v-card-actions>
           <span style="font-size:2rem;font-weight:700">📌 Introduce</span>
          <v-btn density="compact" icon="mdi-close" style="position: absolute;right: 2rem;" @click="$emit('dialogClose', false)" />
        </v-card-actions>
        <v-divider />
        <v-card-text>
          <div class="profile d-flex justify-center align-center">
            <div class="memoji">
              <v-img src="@/assets/profile/idea_memoji.svg" />
              <div class="intro-box">Web Developer</div>
            </div>
            <div class="info d-flex">
              <div class="detail">sujin33806@gmail.com</div>
              <div class="detail">GITHUB</div>
              <div class="detail">BLOG</div>
            </div>
          </div>
          <!-- <hr class="px-2" /> -->
        </v-card-text>
        <v-divider inset />
        <v-card-text class="intro">
          <span>Frontend</span>를 중심으로 다양한 경험과 기술을 쌓고 싶은 <span>주니어 개발자</span>입니다. <br />
          web service의 전체적인 구조를 이해하고 있습니다. <br />
          Backend 뿐만 아니라 Docker, sql 등 분야를 가리지 않고
          적극적으로 개발자로서의 성장에 임하고 있습니다. <br /> <span>새로운 기술</span>을 배우는 것에 관심이 있으며 
          맡은 일에 자부심을 갖고 <span>동료들과 협업</span>하며 성장하고 싶습니다.
        </v-card-text>
      </v-card>
    </v-dialog>
</template>

<script setup>

const props = defineProps({
  dialog: {
    type: Boolean,
    default: false
  }
})


</script>
<style lang="sass" scoped>
.profile
  .memoji
    width: 12rem
    height: 12rem
    border-radius: 50%
    background-color: #da0051e6
    .v-img
      width: 10rem
      height: 12rem
      position: relative
      left: 45px
      transform: rotate(3deg)
    .intro-box
      background-color: #272727
      position: absolute
      padding: 0.5rem 1rem
      font-weight: 800
      font-size: 17px
      border-radius: 2rem
      color: #eeeeee
      left: 3rem
      top: 9rem
      transform: rotate(-14deg)
      border: 0.2rem solid white
  .info 
    border: 0.2rem solid #da0051e6
    padding: 1rem 1.8rem
    margin-left: 5rem
    border-radius: 2rem
    flex-direction: column
    box-sizing: border-box
    justify-content: center
    height: 10rem
    .detail
      background-color: #272727
      color: #eeeeee
      padding: 0.5rem 4rem
      font-weight: 700
      margin: 5px 0px
      border-radius: 2.5rem
      border: 0.5rem solid white
      &:hover
        background: #da0051e6
.intro
  font-size: 1.2rem
  span
    font-size: 1.3rem
    font-weight: 700
    background: linear-gradient(128.93deg, #df2d63 22.41%, #46393e 93.45%)
    color: transparent
    -webkit-background-clip: text
</style>
