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
                        details: [
                          'Worked with two established academics in publishing and presenting a thesis on emerging challenges in SocialVR, available at the following DOI: 10.1145/3656650.3656702',
                          'Presented said thesis at the 17th International Conference on Advanced Visual Interfaces in Arenzano, Italy.',
                          'Available online, the published thesis currently has 24 reads and 5 requests for corroboration.'
                        ]
                      },
                        {
                        position: 'Project Manager and Software Developer',
                        company: 'Strapp.rent',
                        date: 'Mar 2023 - Oct 2023',
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
        <h2 class="title">{{ item.position }}</h2>
        <h3 class="subtitle">{{ item.company }}</h3>
        <p class="date">{{ item.date }}</p>
        <ul>
          <li v-for="(detail, dIndex) in item.details" :key="dIndex">{{ detail }}</li>
        </ul>
      </div>
      <v-row justify="center" class="my-4">
        <v-btn @click="prevPage" :disabled="currentPage === 0">Previous</v-btn>
        <v-btn @click="nextPage" :disabled="currentPage >= totalPages - 1">Next</v-btn>
      </v-row>
    </v-col>
  </v-row>
</v-container>
</template>

<style scoped>
.work-item {
  margin-bottom: 40px;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
}

.title, .subtitle {
  color: #2C3E50;
}

.title {
  font-size: 1.25em;
  font-weight: 600;
}

.subtitle {
  font-size: 1.1em;
  margin-bottom: 5px;
}

.date {
  font-size: 0.9em;
  color: #7F8C8D;
  margin-bottom: 15px;
}

ul {
  padding-left: 20px;
  list-style-type: circle;
  color: #34495E;
}

.display-1 {
  font-size: 2em;
  font-weight: bold;
}

.v-container {
  max-height: 100vh; 
  overflow-y: auto; 
}

@media (max-width: 600px) {
  .title {
    font-size: 1em;
  }

  .subtitle {
    font-size: 0.9em;
  }

  .date {
    font-size: 0.8em;
  }
}
</style>
