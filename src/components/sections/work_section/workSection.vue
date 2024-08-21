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
            },
            cardClass(index) {
              const classes = ['card-one', 'card-two', 'card-three', 'card-four'];
              return classes[index % classes.length]; 
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
    <div class="work-timeline">
      <div
        v-for="(item, index) in workItems"
        :key="index"
        class="timeline-item-container"
      >
        <div :class="['timeline-dot', 'dot-' + index]">
          <i :class="item.tag === 'Per' ? 'mdi mdi-book-open-page-variant' : 'mdi mdi-briefcase'"></i>
        </div>
        <v-card :class="['elevation-2', cardClass(index)]" @click="toggleDetails(item)">
          <v-card-title>{{ item.position }}</v-card-title>
          <v-icon class="toggle-icon">
            {{ item.expanded ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
          </v-icon>
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
      </div>
    </div>
  </div>
</template>


<style scoped>
.work-section {
  width: 100%;
  height: 100%;
  max-height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.work-timeline {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: flex-start;
  width: 100%;
  gap: 2vh;
  margin-bottom: 20px;
  max-height: 100%;
  overflow-y: auto;
  background: linear-gradient(to bottom, transparent 30px, #888 30px, #888 calc(100% - 30px), transparent calc(100% - 30px));
  background-position: center;
  background-repeat: no-repeat;
  background-size: 3px 100%;
}

.timeline-item-container {
  position: relative;
  padding-top: 40px;
  width: 100%; /* Ensure the container takes the full width */
}

.v-card {
  position: relative;
  padding: 10px;
  word-wrap: break-word;
  overflow: hidden;
  transition: all 0.5s ease;
  background-color: rgb(152, 152, 206);
  border-radius: 8px; 
  border: 1px solid #ddd;
  width: 85%;
  max-width: 550px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2; 
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  left: 50%; /* Position it 50% from the left */
  transform: translateX(-50%); /* Center it horizontally */
  text-align: center; /* Optional: Center the text content inside the card */
}


.v-card.expanded {
  margin-bottom: 40px;
}

.v-card.card-one {
  background-color: #FFCDD2; 
}

.v-card.card-two {
  background-color: #BBDEFB;
}

.v-card.card-three {
  background-color: #C8E6C9; 
}

.v-card.card-four {
  background-color: #FFE0B2; 
}


.timeline-dot {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 30px;
  background-color: #666;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  border: 3px solid white;
}

.timeline-dot i {
  font-size: 20px;
  color: white;
}

.timeline-item-container {
  position: relative;
  padding-top: 40px; 
}

.dot-0 {
  top: 20px; 
}

.dot-1 {
  top: 20px;
}

.dot-2 {
  top: 20px;
}

.dot-3 {
  top: 20px;
}

.v-card-title,
.v-card-subtitle,
.v-card-text {
  text-align: left; 
}

.v-card.Per { background-color: #e3f2fd; }
.v-card.Uni { background-color: #bacebb; }

.tag {
  display: block;
  font-size: 0.75rem;
  font-weight: bold;
  color: #666;
  position: absolute;
  bottom: 10px; 
  right: 10px; 
  background-color: rgba(255, 255, 255, 0.9);
  padding: 3px 8px;
  border-radius: 5px;
}


.v-card-title {
  display: flex;
  align-items: center; 
  justify-content: space-between;
  font-size: 1.1rem; 
  font-weight: bold; 
  margin-bottom: 8px; 
  position: relative; 
}

.toggle-icon {
  font-size: 24px;
  color: #666;
  transition: transform 0.3s ease;
  position: absolute; 
  top: 0;
  right: 0; 
  margin-right: 10px; 
  cursor: pointer;
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

.slide-up-enter-active, .slide-down-enter-active,
.slide-up-leave-active, .slide-down-leave-active {
  overflow: hidden;
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