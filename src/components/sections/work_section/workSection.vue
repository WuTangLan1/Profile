<!-- src\components\sections/work_section/workSection.vue -->
<script>
export default {
  name: 'WorkSection',
  data() {
        return {
          currentPage: 0,
          itemsPerPage: 2,
                workItems: [
                {
                  position: 'Lead Author for a Published Dissertation',
                  company: 'Navigating New Realities: Experiences of Early Adopters in the Metaverse',
                  date: 'Mar 2023 – June 2024',
                  tag: 'Per',
                  details: [
                    'Worked with two established academics in publishing and presenting a thesis on emerging challenges in SocialVR.',
                    'Presented said thesis at the 17th International Conference on Advanced Visual Interfaces in Arenzano, Italy.',
                    { text: 'Available online, the published thesis currently has 24 reads and 5 requests for corroboration.', doi: '10.1145/3656650.3656702' }
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
      computed: {
        paginatedItems() {
          const start = this.currentPage * this.itemsPerPage;
          const end = start + this.itemsPerPage;
          return this.workItems.slice(start, end);
        },
        totalPages() {
          return Math.ceil(this.workItems.length / this.itemsPerPage);
        }
      },
      methods: {
        nextPage() {
          if (this.currentPage < this.totalPages - 1) {
            this.currentPage++;
          }
        },
        prevPage() {
          if (this.currentPage > 0) {
            this.currentPage--;
          }
        }
      }
}
</script>

<template>
  <v-container fluid class="px-4">
    <v-row>
      <v-col cols="12">
        <h1 class="display-1 text-center mb-5">Work Experience</h1>
        <div class="work-item" v-for="(item, index) in paginatedItems" :key="index">
          <div class="tag" :class="{'personal': item.tag === 'Per', 'uni': item.tag === 'Uni'}" v-if="item.tag">{{ item.tag }}</div> 
          <h2 class="title">{{ item.position }}</h2>
          <h3 class="subtitle">{{ item.company }}</h3>
          <p class="date">{{ item.date }}</p>
          <div class="details" v-for="detail in item.details" :key="detail.text || detail">
            <p v-if="typeof detail === 'object'">
              {{ detail.text }}
              <a :href="'https://doi.org/' + detail.doi" target="_blank">{{ detail.doi }}</a>
            </p>
            <p v-else>{{ detail }}</p>
          </div>
        </div>
        <v-row justify="space-between" class="my-4 pagination-row">
          <v-col cols="auto">
            <v-btn @click="prevPage" :disabled="currentPage === 0" aria-label="Go to previous page">Previous</v-btn>
          </v-col>
          <v-col cols="auto">
            <v-btn @click="nextPage" :disabled="currentPage >= totalPages - 1" aria-label="Go to next page">Next</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
  

<style scoped>
.v-container {
  overflow-y: auto; 
}

.work-item {
  position: relative;
  margin-bottom: 20px;
  transition: box-shadow .3s;
  overflow: hidden;
  border-radius: 0.3em;
  padding: 10px 20px;
  border: none;
  background-color: rgb(236, 239, 245);
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
}

.work-item:hover {
  box-shadow: 0 8px 16px rgba(0,0,0,0.3);
}

.tag {
  position: absolute;
  top: 10px; 
  right: 3px; 
  background-color: #1976D2;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.9em;
  transform: rotate(45deg); 
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2); 
}

.tag.personal {
  background-color: #4CAF50; 
}

.tag.uni {
  background-color: #2196F3;
}

.dark .tag.personal {
  background-color: #388E3C; 
}

.dark .tag.uni {
  background-color: #1976D2; 
}

.dark .tag {
  box-shadow: 0 2px 4px rgba(255, 255, 255, 0.2);
}

.title {
  font-weight: bold; 
  margin-bottom: 2px;
}

.subtitle {
  color: #666;
  font-size: 18px; 
  margin-top: 0; 
  text-align: left;
}

.date {
  color: #666;
  font-size: 14px; 
  margin-bottom: 10px; 
}

ul {
  padding-left: 20px;
  list-style-type: circle;
  color: #34495E;
}

.details {
  margin-bottom: 10px;
}

.details p {
  margin: 0;
  padding-left: 20px;
  text-align: left; 
}

.display-1 {
  font-size: 2em;
  font-weight: bold;
}

.dark .work-item, .dark .title, .dark .subtitle, .dark .date {
  background-color: #424242; 
  color: #ffffff;
}

.dark ul {
  color: #CFD8DC;
}

.v-btn {
  transition: color 0.3s, background-color 0.3s;
}

.v-btn:not(.v-btn--disabled):hover,
.v-btn:not(.v-btn--disabled):focus {
  color: #FFFFFF;
  background-color: #1976D2;
}

.dark .v-btn {
  color: black;
}

.dark .v-btn:not(.v-btn--disabled):hover,
.v-btn:not(.v-btn--disabled):focus {
  color: #FFFFFF;
  background-color: #1976D2;
}

.v-btn--disabled {
  color: #B0BEC5;
}

.dark .v-btn--disabled {
  color: #B0BEC5;
}

@media (max-width: 600px) {
  .title {
    font-size: 1em;
  }

  .subtitle, .date {
    font-size: 0.9em;
  }
}

@media (max-height: 850px) {
  .v-container {
    padding: 10px;
  }

  .work-item {
    margin-bottom: 10px; 
    padding: 8px; 
  }

  .title, .subtitle, .date {
    font-size: 0.9em; 
  }

  .display-1 {
    font-size: 1.8em; 
  }

  ul {
    padding-left: 15px; 
  }

  .v-btn {
    padding: 6px 12px; 
    font-size: 0.8em; 
  }
}

@media (max-height: 750px) {
  .v-container {
    padding: 5px;
  }

  .work-item {
    margin-bottom: 5px;
    padding: 5px;
  }

  .title, .subtitle, .date {
    font-size: 0.8em;
  }

  .display-1 {
    font-size: 1.6em;
  }

  ul {
    padding-left: 10px;
  }

  .v-btn {
    padding: 4px 8px;
    font-size: 0.7em;
  }
}
</style>
