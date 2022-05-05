<template>
  <div
    class="
      ttt
      flex flex-col
      items-left
      w-max
      px-[112px]
      py-[80px]
      mt-[250px]
      mb-[200px]
      rounded-[22px]
    "
  >
    <p class="farming text-left text-[36px] font-semibold mb-[43px]">
      Governance Page
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
</style>