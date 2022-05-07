<template>
  <div
    class="
      bg-graybackground
      dark:bg-secondary
      flex flex-col
      items-left
      max-w-4xl
      w-4/5
      px-[80px]
      py-[50px]
      my-[80px]
      rounded-[22px]
      drop-shadow-2xl
    "
  >
    <p
      class="
        text-primary
        dark:text-white
        text-left text-[36px]
        font-semibold
        mb-[43px]
      "
    >
      Farming
    </p>
    <p
      class="
        text-primary
        dark:text-white
        font-normal
        text-[18px]
        w-9/12
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
    <div class="flex mb-16 w-full justify-between">
      <div class="flex-grow">
        <input
          type="number"
          value="0"
          class="
            bg-inputbackground
            dark:bg-primary
            rounded-xl
            h-16
            w-full
            text-white
            pl-5
          "
        />
        <div
          class="flex justify-between mt-6 text-md text-primary dark:text-white"
        >
          <p>Your LP: 0</p>
          <p>Max</p>
        </div>
      </div>
      <button
        class="
          bg-primary
          border-solid border border-pinks
          rounded-3xl
          w-[210px]
          h-12
          ml-16
          text-lg text-white
        "
      >
        Approve LP
      </button>
    </div>
    <div class="flex mb-16 w-full justify-between">
      <div class="flex-grow">
        <input
          type="number"
          value="0"
          class="
            bg-inputbackground
            dark:bg-primary
            rounded-xl
            w-full
            h-16
            w-4/5
            text-white
            pl-5
          "
        />
        <div
          class="flex justify-between mt-6 text-md text-primary dark:text-white"
        >
          <p>Your iBFZ: 0</p>
          <p>Max</p>
        </div>
      </div>
      <button
        class="
          bg-primary
          border-solid border border-pinks
          rounded-3xl
          w-[210px]
          h-12
          ml-16
          text-lg text-white
        "
      >
        Approve IBZF
      </button>
    </div>
    <div class="flex items-center">
      <p
        class="
          text-primary
          dark:text-white
          text-md
          font-semibold
          uppercase
          mr-4
        "
      >
        Actual Reward APR
      </p>
      <p
        class="
          flex
          items-center
          pl-5
          w-28
          h-8
          rounded
          font-semibold
          items-center
          text-white
          bg-inputbackground
          dark:bg-primary
        "
      >
        231.61%
      </p>
    </div>
  </div>
</template>
