<template>
  <div class="u-mxauto u-max-w1440px">
    <div class="u-w100% u-hmax u-relative u-mb60px">
      <div class="u-c-fcp-gray u-absolute u-top-45% u-left-10%">
        <p class="u-flex u-flex-row u-items-center u-justify-start">
          <span class="u-font-bold u-tracking-0.2em">最新消息&nbsp;</span>
          <q-separator class="u-w100px u-bg-fcp-gray" size="1.7px" />
        </p>
        <span class="u-font-unbounded u-text-22px">EVENTS</span>
      </div>

      <img :src="Banner" alt="" class="u-w100%" />
    </div>

    <div class="u-pl60px u-mb60px">
      <FCPSubtitle
        subtitleMsg="FCP最新動態"
        description="New Post"
        class="u-mb36px"
      />
      <div class="u-grid u-grid-cols-2">
        <PostCard />
        <PostCard />
      </div>
    </div>

    <div class="u-pl60px u-mb60px">
      <FCPSubtitle
        subtitleMsg="FCP活動消息"
        description="Events"
        class="u-mb36px"
      />
      <div class="u-flex u-flex-col u-flex-gap-y-16px">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>

    <div class="u-pl60px u-mb60px">
      <div class="u-flex u-flex-row u-items-center u-mb32px">
        <FCPIcon name="FCP-mark(o)" class="u-w84px u-h84px u-mr32px" />
        <p class="u-c-fcp-yellow u-font-unbounded u-text-36px u-tracking-0.1em">
          <span class="u-fw700"> FCP 2024 Calendar &nbsp; </span>
          <span> (PDF)</span>
        </p>
      </div>

      <div class="u-w100% u-flex u-flex-row u-justify-center">
        <q-btn class="u-rounded-[24px_0_24px_0] u-bg-fcp-black">
          <div class="u-flex u-flex-row u-items-center u-flex-gap-x-8px u-p8px">
            <p class="u-text-24px u-font-bold u-align-bottom u-lh-24px">
              <span class="u-c-white">下載</span>
              <span class="u-c-yellow">招生行事曆</span>
            </p>
            <FCPIcon
              name="download"
              class="u-bg-white u-rounded-100% u-w36px u-h36px"
            />
          </div>
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
import FCPSubtitle from "@/components/FCPSubtitle.vue";
import PostCard from "@/components/PostCard.vue";
import Banner from "@/assets/img/events/events_page.png";
import EventCard from "@/components/EventCard.vue";
import FCPButton from "@/components/FCPButton.vue";
</script>

<style lang="scss" scoped></style>
