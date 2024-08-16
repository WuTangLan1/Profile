<!-- src\components\sections/work_section/workSection.vue -->
<script>
import { ref, onMounted, onUnmounted, computed } from 'vue';

export default {
  name: 'WorkSection',
  setup() {
    const windowWidth = ref(window.innerWidth);

    const onResize = () => {
      windowWidth.value = window.innerWidth;
    };

    onMounted(() => {
      window.addEventListener('resize', onResize);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', onResize);
    });
    const isVertical = computed(() => {
      return windowWidth.value < 960;  
    });

    return { isVertical };
  },
  data() {
        return {
                detailsShown: null,
                workItems: [
                {
                  position: 'Lead Author for a Published Dissertation',
                  company: 'Navigating New Realities: Experiences of Early Adopters in the Metaverse',
                  date: 'Mar 2023 – June 2024',
                  tag: 'Per',
                  details: [
                    'Worked with two established academics in publishing and presenting a thesis on emerging challenges in SocialVR.',
                    'Presented said thesis at the 17th International Conference on Advanced Visual Interfaces in Arenzano, Italy.',
                    { text: 'Available online, the published thesis currently has 19 reads and 2 requests for corroboration.', doi: '10.1145/3656650.3656702' }
                  ]
                },
                        {
                        position: 'Project Manager and Software Developer',
                        company: 'Strapp.rent',
                        date: 'Mar 2023 - Oct 2023',
                        tag: 'Uni',
                        details: [
                        'Served as project manager and lead software developer for a full-stack second-hand virtual marketplace project, targeting a new mechanism for engaging buyers and sellers on second-hand virtual marketplace.',
                        'Contributed to front-end design using Vue3.js, and database management utilizing Firebase SDK – including the development of the NoSQL schema.',
                        'Performed market and customer-based research as part of a three-week data retrieval and analysis plan to develop the proposed technological solution to accomplish the business goals for this project.',
                        'Worked as SCRUM manager using Azure DevOps in which a comprehensive 8-month scheduling plan and management of team member contributions'
                        ]
                        },
                        {
                        position: 'Lead Software Developer',
                        company: 'University Of Cape Town, Information Systems Department',
                        date: 'Mar 2022 - Oct 2022',
                        tag: 'Uni',
                        details: [
                        'Worked on the development of a full-stack system for capturing the post-graduate study and course selections for UCT students, decreasing the complexity of the original process.',
                        'Revised, modularized, and updated old code bases to modern development standards, ensuring that the process of registering a student\'s postgraduate studies accounted for developments in the UCT curriculum and structure.',
                        'Introduced a preference-based system for post-graduate student selection choices, providing further transparency on course registrations and class capacities.'
                        ]
                        },
                        {
                        position: 'Business System Analyst',
                        company: 'KwaZulu Natal Department of Public Service and Administration',
                        date: 'Jul 2021 - Oct 2021',
                        tag: 'Uni',
                        details: [
                        'Analyzed the existing business process for registering educator leave at schools across the Kwa-Zulu Natal province.',
                        'Created 5 proposed processes leveraging a combination of emerging technologies to improve the educator leave process, all of which focused on ensuring lean re-engineering processes were adhered to.'
                        ]
                        }
                ]};
        },
        methods: {
    getColor(tag) {
      return tag === 'Per' ? 'deep-purple accent-4' : 'cyan darken-2';
    },
    toggleDetail(position) {
      this.detailsShown = this.detailsShown === position ? null : position;
    },
  },
};
</script>

<template>
  <v-container fluid class="fill-height">
    <v-row justify="center" class="fill-height">
      <v-col cols="12" md="10" lg="8">
        <v-timeline :dense="true" :align-top="isVertical" class="fill-height">
          <v-timeline-item
            v-for="item in workItems"
            :key="item.position"
            :dot-color="getColor(item.tag)" 
            fill-dot
            class="timeline-item"
          >
            <template v-slot:opposite>
              <span class="date-label">{{ item.date }}</span>
            </template>
            <v-card
              class="elevation-2 timeline-card"
              @click="toggleDetail(item.position)"
              :class="{ raised: detailsShown === item.position }"
            >
              <v-card-title class="headline">{{ item.position }}</v-card-title>
              <v-card-subtitle>{{ item.company }}</v-card-subtitle>
              <v-card-text v-if="detailsShown === item.position">
                <ul>
                  <li v-for="detail in item.details" :key="detail.text || detail">
                    <span v-if="typeof detail === 'string'">{{ detail }}</span>
                    <span v-else>{{ detail.text }} <a :href="'https://doi.org/' + detail.doi" target="_blank">[DOI]</a></span>
                  </li>
                </ul>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.fill-height {
  height: 100vh; /* Makes the container full viewport height */
}

.v-timeline-item .v-timeline-item__dot {
  width: 12px !important;
  height: 12px !important;
  border: 2px solid white !important;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1) !important;
  transition: transform 0.3s ease-in-out;
}

.v-timeline-item .v-timeline-item__dot:hover {
  transform: scale(1.3);
}

.date-label {
  font-size: 0.85rem;
  color: rgba(0, 0, 0, 0.6);
}

.timeline-card {
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;
  width: 100%; /* Full width on small screens */
}

.timeline-card:hover,
.timeline-card:active,
.timeline-card:focus {
  box-shadow: 0 10px 20px rgba(0,0,0,0.15);
}

@media (max-width: 600px) {
  .date-label {
    font-size: 0.75rem; /* Smaller text on smaller screens */
  }
  .timeline-card {
    width: 95%; /* Slightly smaller cards on mobile for better fit */
    font-size: 0.8rem; /* Smaller font size for text in cards */
  }
}
</style>
