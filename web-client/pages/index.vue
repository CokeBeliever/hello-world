<template>
  <NuxtLayout>
    <div>111</div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
onBeforeMount(() => {
  const token = localStorage.getItem('token')

  if (!token) {
    const router = useRouter()
    router.push('/login')
  }
})
</script>
