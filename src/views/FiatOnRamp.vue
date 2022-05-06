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
    <p class="farming text-left text-[36px] font-semibold mb-[20px]">
      Fiat On-Ramp
    </p>
    <p class="qq text-left text-[20px] font-bold my-6">
      Select Currency And Payment Method
    </p>
    <p class="aa text-[18px] font-semibold text-left my-3">Currency</p>
    <div class="flex justify-between mb-20">
      <div
        class="
          zz
          flex
          justify-center
          items-center
          mr-[10px]
          w-[119px]
          h-[57px]
          rounded-[12px]
        "
      >
        <img src="/src/assets/images/eur.png" alt="Image" class="eth" />
        <p class="text-white text-[14px] ml-[15px]">ETH</p>
      </div>
      <input type="text" value="0" />
    </div>
    <p class="qq text-left text-[20px] font-bold my-6">Purchase Details</p>
    <p class="aa text-[18px] font-semibold text-left my-3">Amount Estimated</p>
    <div class="flex justify-between">
      <div
        class="
          zz
          flex
          justify-center
          items-center
          mr-[10px]
          w-[119px]
          h-[57px]
          rounded-[12px]
        "
      >
        <img src="/src/assets/images/usdc.png" alt="Image" class="eth" />
        <p class="text-white text-[14px] ml-[15px]">USDC</p>
      </div>
      <input type="text" value="0" />
    </div>
    <div class="flex items-center justify-center mr-40 mt-20">
      <p
        class="
          actual_title
          text-[15px]
          w-[150px]
          font-semibold
          uppercase
          mr-[17px]
          text-right
        "
      >
        Exchange Rate
      </p>
      <p
        class="
          actual_value
          flex
          items-center
          pl-[10px]
          w-[178px]
          h-[34px]
          rounded-[6px]
          font-semibold
          items-center
          text-white
        "
      >
        1 USDC = 1,023 EUR
      </p>
    </div>
    <div class="flex items-center justify-center mr-40 mt-10">
      <p
        class="
          actual_title
          text-[15px]
          w-[150px]
          font-semibold
          uppercase
          mr-[17px]
          text-right
        "
      >
        You Will Get
      </p>
      <p
        class="
          actual_value
          flex
          items-center
          pl-[60px]
          w-[178px]
          h-[34px]
          rounded-[6px]
          font-semibold
          items-center
          text-white
        "
      >
        234 USDC
      </p>
    </div>
    <button class="mt-[87px] m-auto">Connect Wallet</button>
  </div>
</template>

<style>
</style>