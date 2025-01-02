<template>
  <div id="history" class="full-width">
    <div
      :class="[
        'row full-width job-container  q-mb-lg',
        {
          '': !mobile,
          '': mobile,
        },
      ]"
      v-for="job in work"
      :key="job.name"
    >
      <div class="col-12 job-time text-bold text-left">
        <div class="text-grey-8">
          {{ job.startDate }}

          <span
            class="bg-grey-8"
            style="
              display: inline-block;
              width: 14px;
              height: 1px;
              background-color: #d1d1d1;
              margin: 3px 2px;
            "
          />

          {{ job.endDate }}
        </div>
      </div>

      <div class="col-12">
        <div class="justify-left q-pr-xs full-width">
          <a class="cursor-pointer job-title" :href="job.url" target="_blank">
            <span class="q-mr-xs text-bold">
              {{ job.position }} · {{ job.name }}
            </span>

            <span class="arrow-container absolute">
              <q-icon
                name="arrow_forward"
                class="custom-arrow"
                color="white"
                size="1em"
              />
            </span>
          </a>
        </div>

        <div class="q-mt-xs text-summary">
          {{ job.summary }}
        </div>

        <div class="row">
          <div v-for="task in job.highlights" :key="task">
            <span class="tag text-bold text-geome7ric">
              {{ task }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-left">
      <a
        flat
        @click="openURL('/resume')"
        class="q-my-md custom-button cursor-pointer"
      >
        <span> View Full Resume </span>

        <span class="arrow-container absolute">
          <q-icon
            name="arrow_forward"
            class="custom-arrow"
            color="white"
            size="1em"
          />
        </span>
      </a>
    </div>
  </div>
</template>

<script>
import { openURL } from "quasar";
import resume from "../resume.json";

const { work } = resume;

export default {
  name: "History",
  data() {
    return {
      work,
      openURL,
      mobile: this.$q.platform.is.mobile,
    };
  },
};
</script>

<style scoped>
.text-summary {
  font-size: 14px;
  margin-bottom: 10px;
}

.custom-button {
  .custom-icon {
    transform: rotate(-45deg);
    color: #d1d1d1;
  }
}

.custom-button:hover {
  color: #00ee90;

  .arrow-container {
    transform: translate(5px, -5px);
    transition: all 0.1s;

    .custom-arrow {
      transform: rotate(-45deg);
      color: #00ee90 !important;
      transition: all 0.1s;
    }
  }
}

.job-time {
  display: flex;
  color: #d1d1d1;
  font-size: 12px;
  opacity: 0.8;
  margin-top: 5px;
}

.arrow-container {
  transition: all 0.1s;
}

.custom-arrow {
  transform: rotate(-45deg);
  transition: all 0.1s;
  color: #d1d1d1;
}

.tag {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 12px;
  margin-right: 4px;
  margin-bottom: 4px;
  text-align: center;
  background-color: #142133;
}

.tag:hover {
  background-color: #0c1226;
  transition: all 0.1s;
}

.job-title {
  color: #d1d1d1;
}

.job-title:hover {
  color: #00ee90;
  transition: all 0.1s;

  .arrow-container {
    transform: translate(5px, -5px);
    transition: all 0.1s;
  }

  .custom-arrow {
    transform: rotate(-45deg);

    color: #00ee90 !important;

    transition: all 0.1s;
  }
}
</style>

<!-- .arrow-container {
  transform: translate(5px, -5px);
  transition: all 0.1s;
} -->

<!-- .custom-arrow {
  transform: rotate(-45deg);

  color: #00ee90 !important;

  transition: all 0.1s;
} -->
