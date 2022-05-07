<template>
  <div
    class="
      bg-graybackground
      dark:bg-secondary
      flex flex-col
      items-left
      max-w-4xl
      w-11/12
      lg:4/5 lg:px-20
      px-4
      py-16
      my-20
      rounded-3xl
      drop-shadow-2xl
    "
  >
    <p class="text-primary dark:text-white text-left text-[36px] font-semibold">
      Governance
    </p>
    <div class="flex items-center justify-between mt-12">
      <p class="text-primary dark:text-white text-left text-[20px] font-bold">
        Proposals
      </p>
      <button
        class="
          w-24
          lg:w-36
          h-8
          rounded-2xl
          uppercase
          text-xs
          font-semibold
          text-white
          dark:text-primary
          bg-primary
          dark:bg-white
          lg:mx-8
        "
      >
        Create New
      </button>
    </div>
    <div class="flex flex-wrap justify-between">
      <div class="mt-8 w-full lg:w-auto">
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
            lg:w-[287px]
            h-16
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
            w-32
            lg:w-24
            h-16
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
            w-32
            lg:w-24
            h-16
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
            w-32
            lg:w-24
            h-16
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
            w-32
            lg:w-24
            h-16
            rounded-xl
          "
        ></div>
      </div>
    </div>
  </div>
</template>

<style>
</style>