<template>
  <div
    class="
      ttt
      flex flex-col
      items-left
      w-max
      px-[112px]
      py-[80px]
      mt-[100px]
      mb-[200px]
      rounded-[22px]
    "
  >
    <p class="farming text-left text-[36px] font-semibold mb-[43px]">Swap</p>
    <p class="aa text-[18px] font-semibold text-left my-3">From</p>
    <div class="input_group1">
      <div class="flex justify-between">
        <div class="zz flex items-center mr-[10px]">
          <img src="/src/assets/images/eth.png" alt="Image" class="eth" />
          <p class="text-white text-[14px] ml-[15px]">ETH</p>
        </div>
        <input type="text" value="0" />
      </div>
    </div>
    <p class="aa text-[18px] font-semibold text-right my-3">Max</p>

    <div class="flex items-center justify-between my-8">
      <img src="/src/assets/images/d-reload.png" alt="Image" class="w-[18px]" />
      <div class="flex items-center">
        <img
          src="/src/assets/images/d-pluscircle.png"
          alt="Image"
          class="w-[18px] h-[18px] mx-3 w-5 h-5"
        />
        <p class="circle-text text-[12px]">Add A Send (Optional)</p>
      </div>
    </div>

    <p class="aa text-[18px] font-semibold text-left my-3">To</p>
    <div class="input_group1">
      <div class="flex justify-between">
        <div class="zz flex items-center mr-[10px]">
          <img
            src="/src/assets/images/logo-small.png"
            alt="Image"
            class="w-[35px]"
          />
          <p class="text-white text-[14px] ml-[15px]">IBZ</p>
        </div>
        <input type="text" value="0" />
      </div>
    </div>
    <button class="mt-[87px] m-auto">Connect Wallet</button>
  </div>
</template>

<style>
.circle-text {
  color: var(--text-primary-color);
}
.eth {
  width: 30px;
  height: 30px;
}
.aa {
  color: var(--text-primary-color);
}
.zz {
  background-color: var(--background-color-input);
  height: 57px;
  width: 119px;
  border-radius: 12px;
  justify-content: center;
}
</style>