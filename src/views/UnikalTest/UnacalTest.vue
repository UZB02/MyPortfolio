<template>
  <div class="p-6 max-w-3xl mx-auto">
    <!-- Loading -->
    <div v-if="loading" class="text-center text-lg">Test yuklanmoqda...</div>

    <!-- Test topilmasa -->
    <div v-else-if="notFound" class="text-center text-red-500 text-lg">
      Test topilmadi yoki havola noto‘g‘ri.
    </div>

    <!-- Test bor bo'lsa -->
    <div v-else>
      <h1 class="text-2xl font-bold mb-4">{{ test.title }}</h1>
      <p class="mb-2 text-gray-600">{{ test.description }}</p>
      <p class="text-sm text-blue-600">Fan: {{ test.subjectId?.name }}</p>

      <!-- O'quvchi ma'lumotlari -->
      <div class="mt-6 mb-6 p-4 border rounded-lg">
        <h2 class="font-semibold mb-2">O‘quvchi ma’lumotlari</h2>

        <InputText
          v-model="studentName"
          placeholder="Ismingiz"
          class="w-full mb-3"
        />

        <InputText
          v-model="studentSurname"
          placeholder="Familiyangiz"
          class="w-full"
        />
      </div>

      <!-- Savollar -->
 <div v-for="(q, idx) in answers" :key="q._id" class="mb-8 p-4 border rounded-lg">
  <h3 class="font-semibold mb-2">Savol {{ idx + 1 }}. <span v-html="q.question"></span></h3>

  <div class="flex flex-col gap-2">
    <div
      v-for="(option, i) in q.options"
      :key="i"
      class="flex items-center mb-1"
    >
      <input
        type="radio"
        :name="'question-' + idx"
        :value="option"
        :checked="q.selectedOption === option"
        @change="answers[idx].selectedOption = option"
        class="mr-2"
        :disabled="submitted"
      />
      <label v-html="option"></label>
    </div>
  </div>
</div>

      <Button
        label="Javoblarni yuborish"
        class="w-full"
        @click="submitAnswers"
        :disabled="loadingSubmit"
      />
    </div>

    <!-- NATIJA DIALOG -->
    <Dialog v-model:visible="showResult" modal header="Natija">
      <div class="text-center">
        <p class="text-xl font-bold mb-4">Sizning ballingiz: {{ score }}</p>
        <Button label="Testni qayta boshlash" @click="resetTest" />
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import api from "@/utils/api.js"
import Button from "primevue/button";

import InputText from 'primevue/inputtext';

import Dialog from 'primevue/dialog';

const route = useRoute();
const token = route.params.token;

const loading = ref(true);
const notFound = ref(false);
const test = ref(null);

const studentName = ref("");
const studentSurname = ref("");
const answers = ref([]);

const loadingSubmit = ref(false);
const showResult = ref(false);
const score = ref(0);

// TESTNI TOKEN ORQALI YUKLASH
const loadTest = async () => {
  try {
    const res = await api.get(
      `/tests/link/${token}`
    );
    test.value = res.data;

    // Savollarni tayyorlash (selectedOption qo‘shamiz)
    answers.value = res.data.questions.map((q) => ({
      _id: q._id,
      question: q.question,
      options: q.options,
      selectedOption: null,
    }));
  } catch (err) {
    notFound.value = true;
  } finally {
    loading.value = false;
  }
};

onMounted(() => loadTest());

// JAVOBLARNI YUBORISH
const submitAnswers = async () => {
  if (!studentName.value || !studentSurname.value) {
    alert("Ism va familiyani kiriting!");
    return;
  }

  loadingSubmit.value = true;

  try {
    const res = await api.post(
      `/tests/link/${token}/submit`,
      {
        studentName: studentName.value,
        studentSurname: studentSurname.value,
        answers: answers.value.map((a) => ({
          questionId: a._id,
          selectedOption: a.selectedOption,
        })),
      }
    );

    score.value = res.data.score;
    showResult.value = true;
  } catch (err) {
    alert("Xatolik: " + err.response?.data?.message);
  } finally {
    loadingSubmit.value = false;
  }
};

// TESTNI QAYTA BOSHLASH
const resetTest = () => {
  showResult.value = false;
  studentName.value = "";
  studentSurname.value = "";
  answers.value.forEach((a) => (a.selectedOption = null));
};
</script>
