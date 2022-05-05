<template>
  <div
    class="
      flex flex-col
      items-left
      bg-[#080a3e]
      w-max
      px-[112px]
      py-[80px]
      mt-[250px]
      mb-[200px]
      rounded-[22px]
    "
  >
    <p class="text-white text-left text-[36px] font-semibold mb-[43px]">
      Farming
    </p>
    <p
      class="
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
    <div class="actual_apr">
      <p class="actual_title">Actual Reward APR</p>
      <p class="actual_value">231.61%</p>
    </div>
  </div>
</template>

<style>
.actual_apr {
  display: flex;
  align-items: center;
}
.actual_title {
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  margin-right: 17px;
}
.actual_value {
  display: flex;
  align-items: center;
  padding-left: 20px;
  background-color: #00032a;
  width: 108px;
  height: 34px;
  border-radius: 6px;
  font-weight: 600;
  align-content: center;
  color: #ffffff;
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
  background-color: #00032a;
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
  color: #ffffff;
  margin-top: 23px;
}
</style>