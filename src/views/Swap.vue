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
        mb-[30px]
      "
    >
      Swap
    </p>
    <p
      class="
        text-primary
        dark:text-white
        text-[18px]
        font-semibold
        text-left
        my-3
      "
    >
      From
    </p>
    <div class="flex justify-between">
      <div
        class="
          bg-inputbackground
          dark:bg-primary
          flex
          justify-center
          items-center
          mr-[10px]
          w-[119px]
          h-16
          rounded-[12px]
        "
      >
        <img src="/src/assets/images/eth.png" alt="Image" class="w-7 h-7" />
        <p class="text-white text-[14px] ml-[15px]">ETH</p>
      </div>
      <input
        type="text"
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
    </div>
    <p
      class="
        text-primary
        dark:text-white
        text-[18px]
        font-semibold
        text-right
        my-3
      "
    >
      Max
    </p>

    <div class="flex items-center justify-between my-4">
      <svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="text-primary dark:text-white"
      >
        <path
          d="M6 6H3.275C4.12474 4.77696 5.34303 3.85743 6.75216 3.37554C8.16129 2.89365 9.68753 2.87461 11.1082 3.3212C12.529 3.76779 13.7698 4.65664 14.6498 5.8581C15.5298 7.05955 16.0028 8.51075 16 10H18C18.0009 8.13849 17.4245 6.32252 16.3503 4.80224C15.2761 3.28195 13.7569 2.13217 12.002 1.51126C10.2471 0.890354 8.3428 0.828883 6.55151 1.33531C4.76022 1.84175 3.17003 2.89116 2 4.339V2H0V8H6V6Z"
          fill="currentColor"
        />
        <path
          d="M12 14H14.725C13.8753 15.223 12.657 16.1426 11.2478 16.6245C9.83871 17.1063 8.31247 17.1254 6.89176 16.6788C5.47105 16.2322 4.2302 15.3434 3.35021 14.1419C2.47023 12.9404 1.99716 11.4892 2 10H9.55917e-07C-0.00085677 11.8615 0.575521 13.6775 1.64974 15.1978C2.72395 16.718 4.24315 17.8678 5.99805 18.4887C7.75295 19.1096 9.6572 19.1711 11.4485 18.6647C13.2398 18.1582 14.83 17.1088 16 15.661V18H18V12H12V14Z"
          fill="currentColor"
        />
      </svg>
      <div class="flex items-center">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="text-primary dark:text-white w-[18px] h-[18px] mx-3 w-5 h-5"
        >
          <path
            d="M11 0.875C5.417 0.875 0.875 5.417 0.875 11C0.875 16.583 5.417 21.125 11 21.125C16.583 21.125 21.125 16.583 21.125 11C21.125 5.417 16.583 0.875 11 0.875ZM11 18.875C6.658 18.875 3.125 15.342 3.125 11C3.125 6.658 6.658 3.125 11 3.125C15.342 3.125 18.875 6.658 18.875 11C18.875 15.342 15.342 18.875 11 18.875Z"
            fill="currentColor"
          />
          <path
            d="M12 6H10V10H6V12H10V16H12V12H16V10H12V6Z"
            fill="currentColor"
          />
        </svg>
        <p class="text-primary dark:text-white text-[12px]">
          Add A Send (Optional)
        </p>
      </div>
    </div>

    <p
      class="
        text-primary
        dark:text-white
        text-[18px]
        font-semibold
        text-left
        my-3
      "
    >
      To
    </p>
    <div class="flex justify-between">
      <div
        class="
          bg-inputbackground
          dark:bg-primary
          flex
          justify-center
          items-center
          mr-[10px]
          w-[119px]
          h-16
          rounded-[12px]
        "
      >
        <img
          src="/src/assets/images/logo-small.png"
          alt="Image"
          class="w-[35px]"
        />
        <p class="text-white text-[14px] ml-[15px]">IBZ</p>
      </div>
      <input
        type="text"
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
    </div>
    <button
      class="
        bg-primary
        border-solid border border-pinks
        rounded-3xl
        w-[210px]
        h-12
        mt-20
        m-auto
        text-lg text-white
      "
    >
      Connect Wallet
    </button>
  </div>
</template>

<style>
.mm:hover {
  cursor: pointer;
}
</style>