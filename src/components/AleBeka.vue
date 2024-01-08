<template>
    <div oncontextmenu="openMovingWindow(); return false;" onclick="openMovingWindow(); return false;">
        <video class="w-full h-full" autoplay loop>
        <source src="../../public/mdgd0l.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>

</template>


<script setup>
import { onMounted } from 'vue';

const fixedLength = 5;
const waveBlocks = '▁▂▃▅▆▇▆▅▃▂▁';
let currentIndex = 0;
let currentUri = '▁▂▃▅▆▇▆▅▃▂▁';

function updateURI() {
  const startIndex = Math.max(0, currentUri.length - fixedLength);
  const fixedLengthUri = currentUri.slice(startIndex);
  currentUri = fixedLengthUri + waveBlocks[currentIndex];
  history.replaceState({}, '', `/${currentUri}`);
  currentIndex = (currentIndex + 1) % waveBlocks.length;
  setTimeout(updateURI, 100); 
}

onMounted(() => {
  updateURI();
});
</script>