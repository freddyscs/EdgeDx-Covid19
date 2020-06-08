<template>
    <div>
        <nav class="navbar navbar-expand navbar-light bg-light">
            <a class="navbar-brand" href="/" style="color:#959595;">
                            <img src="../../assets/images/icon.png" width="35" height="35" class="d-inline-block align-top" alt="">
                            {{ $t('message.company') }}
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExample02">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <!--a class="nav-link" href="#">Administration <span class="sr-only">(current)</span></a-->
                </li>
                <li class="nav-item">
                    <!--a class="nav-link" href="#">Link</a-->
                </li>
                </ul>
                <form class="form-inline my-2 my-md-0">
                <select v-model="$i18n.locale">
                    <option
                        v-for="(lang, i) in langs"
                        :key="`lang-${i}`"
                        :value="lang"
                    >
                        {{ lang }}
                    </option>
                </select>
                </form>
            </div>
        </nav>
        <!-- Header -->
    </div>
</template>

<script>
export default {
  company: 'EdgeDx',
  name: 'SelectLocale',
  data() {
    return { langs: ['en', 'es', 'fr', 'sw', 'am'] }
  }
}
</script>
<style scoped>
</style>