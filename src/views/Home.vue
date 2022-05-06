<template>
  <div
    class="
      ttt
      flex flex-col
      items-left
      w-max
      px-[80px]
      py-[50px]
      my-[80px]
      rounded-[22px]
      drop-shadow-2xl
    "
  >
    <p class="farming text-left text-[36px] font-semibold mb-[43px]">Farming</p>
    <p
      class="
        farming
        font-normal
        text-[18px] text-white
        w-[628px]
        text-left
        capitalize
        mb-[96px]
      "
    >
      Staking your LP tokens (WMATIC - IBZ on quickswap) and get reward from
      liquidity mining program. When you deposit LP token, you get IBZF token
      and your rewards will start growing. <br /><br />
      When you add or remove liquidity, your rewards are automatically transfer
      to your wallet.
    </p>
    <div class="input_group">
      <div class="input_div">
        <input type="number" value="0" />
        <div class="input_value">
          <p>Your LP: 0</p>
          <p>Max</p>
        </div>
      </div>
      <button>Approve LP</button>
    </div>
    <div class="input_group">
      <div class="input_div">
        <input type="number" value="0" />
        <div class="input_value">
          <p>Your iBFZ: 0</p>
          <p>Max</p>
        </div>
      </div>
      <button>Approve LP</button>
    </div>
    <div class="flex items-center">
      <p class="actual_title text-[15px] font-semibold uppercase mr-[17px]">
        Actual Reward APR
      </p>
      <p
        class="
          actual_value
          flex
          items-center
          pl-[20px]
          w-[108px]
          h-[34px]
          rounded-[6px]
          font-semibold
          items-center
          text-white
        "
      >
        231.61%
      </p>
    </div>
  </div>
</template>

<style>
.ttt {
  background-color: var(--background-color-secondary);
}
.farming {
  color: var(--text-primary-color);
}
.actual_apr {
  display: flex;
  align-items: center;
}
.actual_title {
  color: var(--text-primary-color);
}
.actual_value {
  background-color: var(--background-color-input);
}
.input_group {
  display: flex;
  margin-bottom: 63px;
}
button {
  background-color: #00032a;
  border: solid 1px #e20267;
  border-radius: 219px;
  width: 210px;
  height: 48px;
  margin-left: 58px;
  font-size: 20px;
  color: #ffffff;
}
input {
  background-color: var(--background-color-input);
  border-radius: 12px;
  height: 57px;
  width: 533px;
  color: #ffffff;
  padding-left: 20px;
}

.input_value {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  margin-top: 23px;
}
.input_value p {
  color: var(--text-primary-color);
}
</style>