<template>
<v-flex xs12 class="text-center" id="academic">
  <v-card color="primary" dark>
    <v-card-title primary-title>
      <div>
        <h2 class="display-2 mb-3">ACADEMIC</h2>
        <h3>I have a bachelor's degree in Computer Science from Universidade Federal de Itajubá – UNIFEI (Federal University of Itajubá). All the activities of my academic life can be seen in the next timeline</h3>
      </div>
      <div class="timeline">
        <div class="container_timeline left_timeline">
          <div class="content_timeline">
            <h3>END... Bachelor of Science in Computer Science.</h3>
          </div>
        </div>
        <div class="container_timeline right_timeline">
          <div class="content_timeline">
            <h3>2018</h3>
            <p>In the first semester I continued as a teaching assistant, however, in the disciplines of Object Oriented Computing and Web Development. Finally I finished my course final paper related to deep learning and Hyperparameter Optimization.</p>
          </div>
        </div>
        <div class="container_timeline left_timeline">
          <div class="content_timeline">
            <h3>2017</h3>
            <p>I was discipline teaching assistant of Data Structures. During this period, I started to become interested in machine learning and started researching my course final paper.</p>
          </div>
        </div>
        <div class="container_timeline right_timeline">
          <div class="content_timeline">
            <h3>2016</h3>
            <p>I did my second initiation also related to Simulation for Discrete Events. I was a member of the Student Academic Center (Academic Directory of Computing, DACOMP) as Graduation Director of the Computer Science course.</p>
          </div>
        </div>
        <div class="container_timeline left_timeline">
          <div class="content_timeline">
            <h3>2015</h3>
            <p>By choice, I transfer to the Computer Science course. I also did my first research (scientific initiation scholarship) related to Discrete Event Simulation</p>
          </div>
        </div>
        <div class="container_timeline right_timeline">
          <div class="content_timeline">
            <h3>2014</h3>
            <p>I entered the course of Information Systems. In addition to being a volunteer in <b><a class="black--text" href="https://www.familiacats.com.br" target="_blank">CATS</a></b> (Philanthropic Institution).</p>
          </div>
        </div>
        <div class="container_timeline left_timeline">
          <div class="content_timeline">
            <h3>start game</h3>
          </div>
        </div>
      </div>
    </v-card-title>
  </v-card>
</v-flex>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    active: {
      type: Number,
      default: ''
    }
  },
  computed: {
  },
  methods: {

  },
  mounted () {

  }
}
</script>
<style>
.v-enter, .v-leave-to {
  transform: scale(0.1);
  opacity: 0;
}
* {
    box-sizing: border-box;
}
/* The actual timeline (the vertical ruler) */
.timeline {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: white;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
}

/* container_timeline around content */
.container_timeline {
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 50%;
}

/* The circles on the timeline */
.container_timeline::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -13px;
    background-color: white;
    border: 4px solid #FF9F55;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
}

/* Place the container_timeline to the left */
.left_timeline {
    left: 0;
}

/* Place the container_timeline to the right */
.right_timeline {
    left: 50%;
}

/* Add arrows to the left container_timeline (pointing right) */
.left_timeline::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    right: 30px;
    border: medium solid white;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent white;
}

/* Add arrows to the right container_timeline (pointing left) */
.right_timeline::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    left: 30px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
}

/* Fix the circle for container_timelines on the right side */
.right_timeline::after {
    left: -13px;
}

/* The actual content */
.content_timeline {
    padding: 20px 30px;
    background-color: white;
    color: black;
    position: relative;
    border-radius: 6px;
}

.linkGit {
  /* unvisited link */
  color: white;
}

.rounded-card{
  border-radius:70px;
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 1264px) {
  /* Place the timelime to the left */
  .timeline::after {
    left: 31px;
  }

  /* Full-width container_timelines */
  .container_timeline {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

  /* Make sure that all arrows are pointing leftwards */
  .container_timeline::before {
    left: 60px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }

  /* Make sure all circles are at the same spot */
  .left_timeline::after, .right_timeline::after {
    left: 18px;
  }

  /* Make all right container_timelines behave like the left ones */
  .right_timeline {
    left: 0%;
  }
}
</style>