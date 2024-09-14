<script setup>
import { ref } from 'vue'
//store header and <p> values
const accordionHeader = ref('Browse Frequently Asked Questions')
const accordionParagraph = ref('Try inputting a CSS or bootstrap class')

//function that observes type and changes value of text variable

function changeText(event) {
  accordionParagraph.value = event.target.value
}

//store accordion values in object form to be iterated through using a vue for loop in the template area

const accordionDetails = ref([
  {
    header: `Does FishCamp provide gear?`,
    target: '#collapseOne',
    controls: 'panelsStayOpen-collapseOne',
    id: 'collapseOne',
    strongText: 'We provide the hell out of the gear',
    body: `When going on a charter fishing trip, you can expect that most professional charters
              will provide all the gear you need. However, you can also bring your own gear if you
              want, such as a new lure or rod and reel setup. If you do bring your own gear, you
              should let your captain or guide know before you arrive`
  },
  {
    header: `What about local licensing?`,
    target: '#collapseTwo',
    controls: 'panelsStayOpen-collapseTwo',
    id: 'collapseTwo',
    strongText: 'These are the official license interpretations.',
    body: `Captain's license
      The captain or owner of the charter boat must have a valid captain's license.
      Permits
      The charter boat may need permits to fish in federal waters. For example, a Gulf
      Charter/Headboat for Reef Fish For-Hire Fishing Permit requires a Vessel EEZ
      application, valid state registration, and payment of application fees.
      Safety plan
      The charter boat should have a safety plan and safety equipment on board.
      Guide or charter license
      In Washington State, a WDFW guide or charter license is required to operate a
      charter or guide business.`
  },
  {
    header: `Can you pack my fish and trophies home?`,
    target: '#collapseThree',
    controls: 'panelsStayOpen-collapseThree',
    id: 'collapseThree',
    strongText: 'We will take them to our personal houses afterward.',
    body: `Fish can be packaged in a variety of ways, including polyethylene or
            polypropylene film, polyethylene bags, plastic bags in cartons, waxed paper
            boxes, or corrugated fiberboard cartons.
            Dry ice
            If using dry ice, the package must allow for carbon dioxide gas to be released,
            and it must be labeled as "Carbon Dioxide Solid" or "Dry Ice". The package must
            also include the net weight of the dry ice. The TSA limits dry ice to 5 pounds
            for both carry-on and checked baggage`
  }
])
</script>

<template>
  <div class="col-12 px-4 pb-4 text-center justify-content-around">
    <!-- faq content area-->

    <h1 class="">{{ accordionHeader }}</h1>
    <!-- typing any css class into prefilled box formats the <p> element's css class, completing both interactive text input box and change vue with css requirement-->
    <p v-bind:class="accordionParagraph">{{ accordionParagraph }}</p>
    <input v-model="accordionParagraph" @input="changeText" />
    <div class="accordion" id="faqAccordion">
      <!-- faq accordion -->
      <div class="accordion-item" v-for="i in accordionDetails" :key="i.header">
        <!-- iterate over object to create accordion items-->
        <h2 class="accordion-header">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="i.target"
            aria-expanded="false"
            :aria-controls="i.controls"
          >
            {{ i.header }}
          </button>
        </h2>
        <div :id="i.id" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            <strong>{{ i.strongText }}</strong>
            <p>
              {{ i.body }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
