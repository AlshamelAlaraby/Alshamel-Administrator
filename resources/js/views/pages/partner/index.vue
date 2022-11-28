<script>
import Layout from "../../layouts/main";
import PageHeader from "../../../components/Page-header";
import adminApi from "../../../api/adminAxios";
import startDate from "../../../helper/startDate";
import Switches from "vue-switches";


/**
 * Advanced Table component
 */
export default {
  page: {
    title: "Partner",
    meta: [{ name: "description", content: 'Partner' }],
  },
  components: {
    Layout,
    PageHeader,
    Switches
  },
  data() {
    return {
        title: "Partner",
        items: [
            {
                text: "Minton",
                href: "/",
            },
            {
                text: "Partners",
                active: true,
            },
        ],
        search: '',
        partnersPagination: {},
        partners: [],
        enabled3: false
    }
  },
  computed: {
    /**
     * Total no. of records
     */

  },
  mounted() {
    this.getData();
  },
  methods: {
    /**
     *  get Data partner
     */
    getData(page = 1){
        adminApi.get(`/partners?page=${page}&search=${this.search}`)
            .then((res) => {
                let l = res.data.data;
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err.response);
            })
            .finally(() => {

            });
    }
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row justify-content-between align-items-center mb-3">
                <h4 class="header-title">Partners Table</h4>
                <b-button
                    v-b-modal.modal-responsive
                    variant="success"
                >
                    {{ $t('general.Create') }}
                </b-button>
            </div>

              <div class="row justify-content-between align-items-center mb-3">
                  <div class="col-lg-3 col-6" style="font-weight: 500">
                      Show
                      <select
                          class="custom-select custom-select-sm mr-sm-2"
                          style="display: inline-block;width:auto"
                      >
                          <option value="10">10</option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                      </select>
                      entries
                  </div>
                  <div class="col-lg-3 col-6" style="font-weight: 500">
                      Search:
                      <input
                          class="form-control form-control-sm"
                          style="display: inline-block;width:auto"
                          type="text"
                          placeholder="Search..."
                      >
                  </div>
              </div>

              <!--  create   -->
              <b-modal
                  id="modal-responsive"
                  title="Modal Content is Responsive"
                  title-class="font-18"
                  body-class="p-4"
              >
                  <div class="row">
                      <div class="col-md-6">
                          <div class="form-group">
                              <label for="field-1" class="control-label">Name</label>
                              <input
                                  type="text"
                                  class="form-control"
                                  placeholder="John" id="field-1"
                              />
                          </div>
                      </div>
                      <div class="col-md-6">
                          <div class="form-group">
                              <label for="field-2" class="control-label">Surname</label>
                              <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Doe" id="field-2"
                              />
                          </div>
                      </div>
                  </div>
                  <div class="col-md-6 mt-1">
                      <div class="form-group">
                          <label for="field-3" class="control-label">{{ $t('general.Status') }}</label>
                          <div class="mt-1">
                              <switches
                                  id="field-3"
                                  v-model="enabled3"
                                  type-bold="false"
                                  color="primary"
                                  class="ml-1 mb-0"
                              >
                              </switches>
                          </div>
                      </div>
                  </div>

              </b-modal>
              <!--  /create   -->

              <!-- start .table-responsive-->
              <div class="table-responsive mb-0 custom-table-theme">
                  <table class="table table-borderless table-hover table-centered m-0">
                      <thead>
                      <tr>
                          <th>#</th>
                          <th>Marketplaces</th>
                          <th>{{ $t('general.Date') }}</th>
                          <th>{{ $t('general.Status') }}</th>
                          <th>{{ $t('general.Action') }}</th>
                      </tr>
                      </thead>
                      <tbody v-if="0">
                          <tr v-for="data in partners" :key="data.date">
                              <td>
                                  <h5 class="m-0 font-weight-normal">{{ data.marketplaces }}</h5>
                              </td>
                              <td>{{ data.date }}</td>
                              <td>
                                <span :class="[
                                    data.status ?
                                    'bg-soft-success text-success':
                                    'bg-soft-danger  text-danger',
                                    'badge'
                                    ]"
                                >
                                    {{ data.status ? `${$t('general.Active')}`:`${$t('general.Inactive')}`}}
                                </span>
                              </td>
                              <td>
                                  <a href="javascript:void(0);" class="btn btn-xs btn-secondary custom-btn-1">
                                      <i class="mdi mdi-pencil"></i>
                                  </a>
                                  <a href="javascript:void(0);" class="btn btn-xs btn-danger custom-btn-1">
                                      <i class="fas fa-trash"></i>
                                  </a>
                              </td>
                          </tr>
                      </tbody>
                      <tbody v-else>
                          <tr>
                              <th class="text-center" colspan="5">{{ $t('general.notDataFound') }}</th>
                          </tr>
                      </tbody>
                  </table>
              </div>
              <!-- end .table-responsive-->

              <!-- start Pagination -->
              <Pagination :data="partnersPagination" @pagination-change-page="getData">
                  <template #prev-nav>
                      <span>&lt;</span>
                  </template>
                  <template #next-nav>
                      <span>&gt;</span>
                  </template>
              </Pagination>
              <!-- end Pagination -->

          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
