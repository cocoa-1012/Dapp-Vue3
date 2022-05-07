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
        mb-[20px]
      "
    >
      Governance
    </p>
    <p
      class="text-primary dark:text-white text-left text-[20px] font-bold mb-12"
    >
      Proposals
    </p>
    <div class="flex flex-wrap">
      <div class="mt-8">
        <p class="text-primary dark:text-white text-left text-[12px] mb-3">
          Description
        </p>
        <div
          class="
            bg-inputbackground
            dark:bg-primary
            rounded-xl
            flex
            items-center
            mr-[10px]
            w-[287px]
            h-[57px]
            rounded-[12px]
          "
        ></div>
      </div>
      <div class="mt-8">
        <p class="text-primary dark:text-white text-left text-[12px] mb-3">
          Status
        </p>
        <div
          class="
            bg-inputbackground
            dark:bg-primary
            rounded-xl
            flex
            items-center
            mr-[10px]
            w-[82px]
            h-[57px]
            rounded-[12px]
          "
        ></div>
      </div>
      <div class="mt-8">
        <p class="text-primary dark:text-white text-left text-[12px] mb-3">
          Start Date
        </p>
        <div
          class="
            bg-inputbackground
            dark:bg-primary
            rounded-xl
            flex
            items-center
            mr-[10px]
            w-[82px]
            h-[57px]
            rounded-[12px]
          "
        ></div>
      </div>
      <div class="mt-8">
        <p class="text-primary dark:text-white text-left text-[12px] mb-3">
          End Date
        </p>
        <div
          class="
            bg-inputbackground
            dark:bg-primary
            rounded-xl
            flex
            items-center
            mr-[10px]
            w-[82px]
            h-[57px]
            rounded-[12px]
          "
        ></div>
      </div>
      <div class="mt-8">
        <p class="text-primary dark:text-white text-left text-[12px] mb-3">
          Author
        </p>
        <div
          class="
            bg-inputbackground
            dark:bg-primary
            rounded-xl
            flex
            items-center
            mr-[10px]
            w-[82px]
            h-[57px]
            rounded-[12px]
          "
        ></div>
      </div>
    </div>
    <button
      class="
        absolute
        top-24
        right-28
        w-36
        h-8
        rounded-2xl
        uppercase
        text-xs
        font-semibold
        text-white
        dark:text-primary
        bg-primary
        dark:bg-white
        mx-8
      "
    >
      Create New
    </button>
  </div>
</template>

<style>
</style>