<!-- src\components\sections/work_section/workSection.vue -->
<script>

export default {
  name: 'WorkSection',

  data() {
        return {
                detailsShown: null,
                workItems: [
                {
                  position: 'Lead Author for a Published Dissertation',
                  company: 'Navigating New Realities: Experiences of Early Adopters in the Metaverse',
                  date: 'Mar 2023 – June 2024',
                  tag: 'Per',
                  expanded: false,
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
                        expanded: false,
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
                        expanded: false,
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
                        expanded: false,
                        details: [
                        'Analyzed the existing business process for registering educator leave at schools across the Kwa-Zulu Natal province.',
                        'Created 5 proposed processes leveraging a combination of emerging technologies to improve the educator leave process, all of which focused on ensuring lean re-engineering processes were adhered to.'
                        ]
                        }
                ]};
        },
        created() {
            window.addEventListener('resize', this.handleResize);
          },
          unmounted() {
            window.removeEventListener('resize', this.handleResize);
          },
          methods: {
            handleResize() {
              this.windowWidth = window.innerWidth;
            },
            toggleDetails(item) {
              item.expanded = !item.expanded;
            }
          },
          computed: {
            isMobile() {
              return this.windowWidth < 900;
            }
          }
};
</script>

<template>
  <div class="work-section">
    <v-timeline dense>
      <v-timeline-item
        v-for="(item, index) in workItems"
        :key="index"
        :class="[item.tag]"
        :color="item.tag === 'Per' ? 'deep-purple lighten-2' : 'cyan lighten-2'"
        fill-dot
        :icon="item.tag === 'Per' ? 'mdi-book-open-page-variant' : 'mdi-briefcase'"
      >
        <template #opposite>
          {{ item.date }}
        </template>
        <v-card class="elevation-2" @click="toggleDetails(item)">
          <v-card-title>{{ item.position }}</v-card-title>
          <v-card-subtitle>{{ item.company }}</v-card-subtitle>
          <transition name="fade" mode="out-in">
            <v-card-text v-if="item.expanded">
              <span class="tag">{{ item.tag }}</span>
              <ul>
                <li v-for="(detail, detailIndex) in item.details" :key="detailIndex">
                  <div v-if="typeof detail === 'object'">
                    {{ detail.text }}
                    <a :href="'https://doi.org/' + detail.doi" target="_blank">DOI</a>
                  </div>
                  <div v-else>
                    {{ detail }}
                  </div>
                </li>
              </ul>
            </v-card-text>
          </transition>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>



<style scoped>
.work-section {
  margin-top: 50px;
    padding: 10px;
  overflow: auto;
  width: 100%;
  height: 100%;
  max-height: 95vh;
  box-sizing: border-box;
}

.v-timeline {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.v-timeline-item {
  width: 90%;
  max-width: 500px;
  margin: 10px auto; 
}

.v-card {
  padding: 10px;
  word-wrap: break-word;
  overflow: hidden;
  transition: all 0.5s ease;
  background-color: #f9f9f9;
  border-left: 5px solid #ccc; 
}

.v-card.Per { background-color: #e3f2fd; }
.v-card.Uni { background-color: #e8f5e9; }

.tag {
  display: block;
  font-size: 0.75rem;
  font-weight: bold;
  color: #666;
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 3px 8px;
  border-radius: 5px;
}
.v-card-title,
.v-card-subtitle,
.v-card-text {
  font-size: 0.9rem;
  white-space: normal;
  overflow-wrap: break-word;
}


.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
}


@media (max-width: 450px) {
  .v-card-title,
  .v-card-subtitle,
  .v-card-text {
    font-size: 0.8rem; 
  }
  .v-timeline-item {
    margin: 5px auto; 
  }

  .v-card {
    padding: 5px;
  }
}

@media (min-width: 900px) {
  .v-timeline {
    flex-direction: row;
    overflow-x: auto;
  }

  .v-timeline-item {
    width: auto; 
    min-width: 300px; 
  }

  .v-card {
    padding: 15px; 
  }

  .v-card-title,
  .v-card-subtitle,
  .v-card-text {
    font-size: 1rem; 
  }
}
</style>

