<template>
  <div
    style="text-align: center; display: flex; align-items: center; justify-content: center; flex-direction: column; height: 100%;"
  >
    <div style="text-align: center;" class="fade-in fade-in--short">
      <div style="margin-bottom: 2rem">{{ $formatMessage({id: 'howStressed'}) }}</div>

      <ul class="stress-levels" style="list-style: none; font-size: 40px; display: flex;">
        <!-- <li>🥰</li>
        <li>🙂</li>
        <li>😐</li>
        <li>🙁</li>
        <li>😫</li>-->

        <li @click="selectStressLevel(1)">🥰</li>
        <li @click="selectStressLevel(2)">😀</li>
        <li @click="selectStressLevel(3)">😐</li>
        <li @click="selectStressLevel(4)">😣</li>
        <li @click="selectStressLevel(5)">😤</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    selectStressLevel(level) {
      switch (level) {
        case 1:
        case 2:
        case 3:
          alert(
            'TODO: Der Nutzer wuerde zu einer Achtsamkeitsuebung weitergeleitet werden.'
          )
          break
        case 4:
        case 5:
          this.$router.push({ name: 'zen' })
      }
    }
  }
}
</script>

<style lang="scss">
.stress-levels {
  padding: 0;
  margin: 0;

  li {
    transition: transform 0.1s;
    transform: scale(1);
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
    }
  }

  li:not(:last-child) {
    margin-right: 1.5rem;
  }
}
</style>

