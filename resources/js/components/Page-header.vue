<script>
import { layoutComputed } from "../state/helpers";

/**
 * Page-header component
 */
export default {
  components: {},
  props: {
    title: {
      type: String,
      default: "",
    },
    items: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  computed: {
    ...layoutComputed,
  },
};
</script>

<template>
  <!-- start page title -->
  <div class="row">
    <div class="col-12">
      <div
        class="page-title-box"
        :class="{
          'page-title-box-alt':
            layoutType !== 'vertical' && layoutType !== 'two-column',
        }"
      >
        <h4 class="page-title">{{ $t(title) }}</h4>
        <div class="page-title-right">

            <nav>
                <ul class="breadcrumb-custom list-unstyled">
                    <template v-for="item in items">
                        <li class="breadcrumb-custom-item d-inline" v-if="item.to">
                            <router-link :to="item.to">{{ $t(item.text) }}</router-link>
                            <span>{{'>'}}</span>
                        </li>
                        <li
                            class="breadcrumb-custom-item active d-inline"
                            aria-current="page"
                            v-else
                        >
                            {{ $t(item.text) }}
                        </li>
                    </template>
                </ul>
            </nav>

        </div>
      </div>
    </div>
  </div>
  <!-- end page title -->
</template>

<style>
    .breadcrumb-custom .breadcrumb-custom-item {
        margin: 0px 10px;
    }
    .breadcrumb-custom .breadcrumb-custom-item span {
        font-size: 13px;
        color: #adb5bd;
    }
    .breadcrumb-custom .breadcrumb-custom-item a{
        color: #6c757d;
        margin: 0px 2px;
        font-size: 14px;
    }
    .breadcrumb-custom .breadcrumb-custom-item.active{
        color: #adb5bd;
    }
</style>
