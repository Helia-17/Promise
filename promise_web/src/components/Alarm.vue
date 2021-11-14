<template>
  <div class="containers">
    <div class="container-content">
      <div class="title">
        <p>삐빅!</p>
        <p>약먹을 시간입니다</p>
      </div>
      <div class="subtitle">
        <p>복용할 약/건강보조제 알림을 받을 수 있어요!</p>
      </div>
      <div class="description">
        <p>자동완성을 통한 약 등록</p>
        <p>약 봉투 이미지 스캔을 통한 약 등록(OCR)</p>
        <p>알람 공유 등록</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: #DBDFE2;
}

.container-content {
  padding-top: 200px;
  width: 1100px;
  margin: 0 auto;
  text-align: left;
}

.title > p {
  margin: 0px;
  font-size: 40px;
  font-weight: 800;
}

.subtitle > p {
  margin: 0px;
}

.description {
  margin-top: 80px;
}

.description > p {
  margin: 10px 0px;
  font-size: 25px;
  font-weight: 700;
}
</style>