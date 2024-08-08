<!-- src\components\sections/work_section/workSection.vue -->
<script>
export default {
  name: 'WorkSection',
  data() {
        return {
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
        }
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="display-1 mb-4">Work Experience</h1>
        <div class="work-item" v-for="(item, index) in workItems" :key="index">
          <h2 class="title">{{ item.position }}</h2>
          <h3 class="subtitle">{{ item.company }}</h3>
          <p class="date">{{ item.date }}</p>
          <ul>
            <li v-for="(detail, dIndex) in item.details" :key="dIndex">{{ detail }}</li>
          </ul>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

v-container {
 overflow-y:auto;
}

.work-item {
  margin-bottom: 20px;
}

.title {
  font-size: 20px;
  font-weight: bold;
}

.subtitle {
  font-size: 18px;
  color: #666;
}

.date {
  font-size: 16px;
  margin-bottom: 10px;
}

ul {
  margin-left: 20px;
  list-style-type: disc;
}

.display-1 {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}
</style>


